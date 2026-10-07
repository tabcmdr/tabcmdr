const SVG_NS = "http://www.w3.org/2000/svg";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMac = detectMac();
const toastTimers = new WeakMap();

function detectMac() {
  const platform = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "";
  return /mac|iphone|ipad|ipod/i.test(platform);
}

function createElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  if (text !== undefined) {
    node.textContent = text;
  }
  return node;
}

function createIcon(name, className = "icon") {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("class", className);
  svg.setAttribute("aria-hidden", "true");
  const use = document.createElementNS(SVG_NS, "use");
  use.setAttribute("href", "#" + name);
  svg.append(use);
  return svg;
}

function readJson(id) {
  const node = document.getElementById(id);
  if (!node) {
    return null;
  }
  return JSON.parse(node.textContent);
}

function wait(milliseconds, signal) {
  return new Promise((resolve, reject) => {
    if (signal && signal.aborted) {
      reject(new DOMException("Aborted", "AbortError"));
      return;
    }
    const timer = window.setTimeout(resolve, milliseconds);
    if (signal) {
      signal.addEventListener("abort", () => {
        window.clearTimeout(timer);
        reject(new DOMException("Aborted", "AbortError"));
      }, { once: true });
    }
  });
}

function showToast(toast, message) {
  if (!toast) {
    return;
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimers.get(toast));
  toastTimers.set(toast, window.setTimeout(() => toast.classList.remove("is-visible"), 1800));
}

function scrollBehavior() {
  if (prefersReducedMotion) {
    return "auto";
  }
  return "smooth";
}

function stateMessage(isOn, onMessage, offMessage) {
  if (isOn) {
    return onMessage;
  }
  return offMessage;
}

function copyMessage(group, result) {
  if (group === "UUID") {
    return "UUID copied";
  }
  if (group === "Password") {
    return "Password copied";
  }
  if (group === "Text Transform") {
    return "Copied";
  }
  return "Copied " + result;
}

function editDistance(first, second) {
  let previous = Array.from({ length: second.length + 1 }, (_, index) => index);
  for (let row = 1; row <= first.length; row += 1) {
    const current = [row];
    for (let column = 1; column <= second.length; column += 1) {
      let cost = 1;
      if (first[row - 1] === second[column - 1]) {
        cost = 0;
      }
      current.push(Math.min(previous[column] + 1, current[column - 1] + 1, previous[column - 1] + cost));
    }
    previous = current;
  }
  return previous[second.length];
}

function matchesWithTypo(term, text) {
  if (term.length < 5) {
    return false;
  }
  const allowed = Math.max(1, Math.floor(term.length * 0.2));
  return text.split(/[^a-z0-9]+/).some((word) => word.length > 0 && editDistance(term, word) <= allowed);
}

function hostOf(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}

function plural(count, word) {
  if (count === 1) {
    return count + " " + word;
  }
  return count + " " + word + "s";
}

function highlightText(text, terms) {
  const fragment = document.createDocumentFragment();
  const lower = text.toLowerCase();
  const ranges = [];
  for (const term of terms) {
    if (!term) {
      continue;
    }
    let start = lower.indexOf(term);
    while (start !== -1) {
      ranges.push([start, start + term.length]);
      start = lower.indexOf(term, start + term.length);
    }
  }
  ranges.sort((first, second) => first[0] - second[0]);
  const merged = [];
  for (const range of ranges) {
    const last = merged[merged.length - 1];
    if (last && range[0] <= last[1]) {
      last[1] = Math.max(last[1], range[1]);
    } else {
      merged.push([range[0], range[1]]);
    }
  }
  let cursor = 0;
  for (const [start, end] of merged) {
    fragment.append(text.slice(cursor, start), createElement("mark", "", text.slice(start, end)));
    cursor = end;
  }
  fragment.append(text.slice(cursor));
  return fragment;
}

function setupModifierLabels() {
  if (isMac) {
    return;
  }
  document.querySelectorAll("[data-mod-key]").forEach((node) => {
    node.textContent = "Ctrl";
    if (node.closest(".keycap")) {
      node.classList.add("is-word");
    }
  });
}

function setupReveal() {
  document.documentElement.classList.add("js");
  const targets = document.querySelectorAll("[data-reveal]");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        continue;
      }
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
  targets.forEach((target) => observer.observe(target));
}

function setupHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) {
    return;
  }
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-count-to]");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    return;
  }
  const animate = (node) => {
    const target = Number(node.dataset.countTo);
    const duration = 900;
    const startedAt = performance.now();
    const step = (now) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = Math.round(target * eased).toLocaleString("en-US");
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        continue;
      }
      animate(entry.target);
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.6 });
  counters.forEach((counter) => observer.observe(counter));
}

const answers = (() => {
  const unitGroups = [
    { m: 1, meter: 1, meters: 1, km: 1000, kilometer: 1000, kilometers: 1000, cm: 0.01, mm: 0.001, mi: 1609.344, mile: 1609.344, miles: 1609.344, ft: 0.3048, foot: 0.3048, feet: 0.3048, in: 0.0254, inch: 0.0254, inches: 0.0254, yd: 0.9144, yard: 0.9144, yards: 0.9144 },
    { kg: 1, g: 0.001, mg: 0.000001, lb: 0.45359237, lbs: 0.45359237, pound: 0.45359237, pounds: 0.45359237, oz: 0.028349523125, ounce: 0.028349523125, ounces: 0.028349523125 },
    { b: 1, byte: 1, bytes: 1, kb: 1e3, mb: 1e6, gb: 1e9, tb: 1e12 },
    { ms: 0.001, s: 1, sec: 1, second: 1, seconds: 1, min: 60, mins: 60, minute: 60, minutes: 60, h: 3600, hr: 3600, hrs: 3600, hour: 3600, hours: 3600, day: 86400, days: 86400, week: 604800, weeks: 604800 },
    { l: 1, liter: 1, liters: 1, litre: 1, litres: 1, ml: 0.001, gal: 3.785411784, gallon: 3.785411784, gallons: 3.785411784 },
  ];
  const temperatureUnits = { c: "°C", celsius: "°C", f: "°F", fahrenheit: "°F", k: "K", kelvin: "K" };
  const cities = {
    tokyo: { zone: "Asia/Tokyo", abbr: "JST" },
    japan: { zone: "Asia/Tokyo", abbr: "JST" },
    london: { zone: "Europe/London", locale: "en-GB" },
    paris: { zone: "Europe/Paris", locale: "en-GB" },
    berlin: { zone: "Europe/Berlin", locale: "en-GB" },
    "new york": { zone: "America/New_York", locale: "en-US" },
    nyc: { zone: "America/New_York", locale: "en-US" },
    chicago: { zone: "America/Chicago", locale: "en-US" },
    toronto: { zone: "America/Toronto", locale: "en-US" },
    "san francisco": { zone: "America/Los_Angeles", locale: "en-US" },
    sf: { zone: "America/Los_Angeles", locale: "en-US" },
    "los angeles": { zone: "America/Los_Angeles", locale: "en-US" },
    seattle: { zone: "America/Los_Angeles", locale: "en-US" },
    sydney: { zone: "Australia/Sydney", locale: "en-AU" },
    singapore: { zone: "Asia/Singapore", abbr: "SGT" },
    dubai: { zone: "Asia/Dubai", abbr: "GST" },
    india: { zone: "Asia/Kolkata", abbr: "IST" },
    mumbai: { zone: "Asia/Kolkata", abbr: "IST" },
    delhi: { zone: "Asia/Kolkata", abbr: "IST" },
    jaipur: { zone: "Asia/Kolkata", abbr: "IST" },
    bangalore: { zone: "Asia/Kolkata", abbr: "IST" },
    shanghai: { zone: "Asia/Shanghai", abbr: "CST" },
    beijing: { zone: "Asia/Shanghai", abbr: "CST" },
    utc: { zone: "UTC", abbr: "UTC" },
    gmt: { zone: "UTC", abbr: "GMT" },
  };
  const functions = { sqrt: Math.sqrt, abs: Math.abs, round: Math.round, floor: Math.floor, ceil: Math.ceil, ln: Math.log, log: Math.log, sin: Math.sin, cos: Math.cos, tan: Math.tan };

  function formatNumber(value) {
    return String(Number(value.toPrecision(12)));
  }

  function tokenize(expression) {
    const tokens = [];
    const pattern = /\s*(\d+(?:\.\d+)?|\.\d+|[a-z]+|[-+*/^%()])/gy;
    let match = pattern.exec(expression);
    while (match) {
      tokens.push(match[1]);
      if (pattern.lastIndex === expression.length) {
        return tokens;
      }
      match = pattern.exec(expression);
    }
    if (expression.trim() === "") {
      return tokens;
    }
    return null;
  }

  function parseArithmetic(tokens) {
    let position = 0;
    const peek = () => tokens[position];
    const take = () => tokens[position++];

    function parseExpression() {
      let value = parseTerm();
      while (peek() === "+" || peek() === "-") {
        const operator = take();
        const right = parseTerm();
        if (operator === "+") {
          value += right;
        } else {
          value -= right;
        }
      }
      return value;
    }

    function parseTerm() {
      let value = parseFactor();
      while (peek() === "*" || peek() === "/") {
        const operator = take();
        const right = parseFactor();
        if (operator === "*") {
          value *= right;
        } else {
          value /= right;
        }
      }
      return value;
    }

    function parseFactor() {
      const base = parseUnary();
      if (peek() !== "^") {
        return base;
      }
      take();
      return Math.pow(base, parseFactor());
    }

    function parseUnary() {
      if (peek() === "-") {
        take();
        return -parseUnary();
      }
      if (peek() === "+") {
        take();
        return parseUnary();
      }
      let value = parsePrimary();
      while (peek() === "%") {
        take();
        value /= 100;
      }
      return value;
    }

    function parsePrimary() {
      const token = take();
      if (token === undefined) {
        throw new Error("Unexpected end");
      }
      if (token === "(") {
        const value = parseExpression();
        if (take() !== ")") {
          throw new Error("Missing )");
        }
        return value;
      }
      if (functions[token]) {
        if (take() !== "(") {
          throw new Error("Missing (");
        }
        const argument = parseExpression();
        if (take() !== ")") {
          throw new Error("Missing )");
        }
        return functions[token](argument);
      }
      const number = Number(token);
      if (Number.isNaN(number)) {
        throw new Error("Unknown token");
      }
      return number;
    }

    const result = parseExpression();
    if (position !== tokens.length) {
      throw new Error("Trailing tokens");
    }
    return result;
  }

  function evaluateArithmetic(query) {
    const expanded = query
      .replace(/(\d+(?:\.\d+)?)\s*%\s*of\s+(\d+(?:\.\d+)?)/gi, (_, percent, base) => String((Number(percent) / 100) * Number(base)))
      .replace(/(\d+(?:\.\d+)?)\s*%\s*on\s+(\d+(?:\.\d+)?)/gi, (_, percent, base) => String(Number(base) * (1 + Number(percent) / 100)));
    const hasOperator = /[-+*/^%]|\b(?:sqrt|abs|round|floor|ceil|ln|log|sin|cos|tan)\(/i.test(query.replace(/^-/, ""));
    const hasPercentPhrase = /%\s*(?:of|on)\s/i.test(query);
    if (!hasOperator && !hasPercentPhrase) {
      return null;
    }
    const tokens = tokenize(expanded.toLowerCase());
    if (!tokens || tokens.length === 0) {
      return null;
    }
    try {
      const value = parseArithmetic(tokens);
      if (!Number.isFinite(value)) {
        return null;
      }
      return formatNumber(value);
    } catch {
      return null;
    }
  }

  function convertUnits(query) {
    const match = query.match(/^(-?\d+(?:\.\d+)?)\s*([a-z]+)\s+(?:in|to|as)\s+([a-z]+)$/i);
    if (!match) {
      return null;
    }
    const amount = Number(match[1]);
    const from = match[2].toLowerCase();
    const to = match[3].toLowerCase();
    if (temperatureUnits[from] && temperatureUnits[to]) {
      return formatNumber(convertTemperature(amount, temperatureUnits[from], temperatureUnits[to])) + " " + temperatureUnits[to];
    }
    if ((from === "px" || from === "rem" || from === "em") && (to === "px" || to === "rem" || to === "em")) {
      let pixels = amount * 16;
      if (from === "px") {
        pixels = amount;
      }
      if (to === "px") {
        return formatNumber(pixels) + "px";
      }
      return formatNumber(pixels / 16) + to;
    }
    const group = unitGroups.find((units) => units[from] !== undefined && units[to] !== undefined);
    if (!group) {
      return null;
    }
    return formatNumber((amount * group[from]) / group[to]) + " " + match[3];
  }

  function convertTemperature(amount, from, to) {
    let celsius = amount;
    if (from === "°F") {
      celsius = ((amount - 32) * 5) / 9;
    }
    if (from === "K") {
      celsius = amount - 273.15;
    }
    if (to === "°F") {
      return (celsius * 9) / 5 + 32;
    }
    if (to === "K") {
      return celsius + 273.15;
    }
    return celsius;
  }

  function convertRadix(query) {
    const toBase = query.match(/^(\d+)\s+(?:to|in)\s+(binary|bin|hex|hexadecimal|octal|oct)$/i);
    if (toBase) {
      const value = Number(toBase[1]);
      const target = toBase[2].toLowerCase();
      if (target.startsWith("b")) {
        return "0b" + value.toString(2);
      }
      if (target.startsWith("h")) {
        return "0x" + value.toString(16);
      }
      return "0o" + value.toString(8);
    }
    const toDecimal = query.match(/^(0x[0-9a-f]+|0b[01]+|0o[0-7]+)\s+(?:to|in)\s+(?:decimal|dec)$/i);
    if (toDecimal) {
      return String(Number(toDecimal[1].toLowerCase()));
    }
    return null;
  }

  function toHex(red, green, blue) {
    return "#" + [red, green, blue].map((channel) => channel.toString(16).padStart(2, "0")).join("");
  }

  function toHsl(red, green, blue) {
    const r = red / 255;
    const g = green / 255;
    const b = blue / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const lightness = (max + min) / 2;
    const delta = max - min;
    let hue = 0;
    let saturation = 0;
    if (delta !== 0) {
      saturation = delta / (1 - Math.abs(2 * lightness - 1));
      if (max === r) {
        hue = 60 * (((g - b) / delta + 6) % 6);
      } else if (max === g) {
        hue = 60 * ((b - r) / delta + 2);
      } else {
        hue = 60 * ((r - g) / delta + 4);
      }
    }
    const round = (value) => String(Number(value.toFixed(2)));
    return "hsl(" + round(hue) + ", " + round(saturation * 100) + "%, " + round(lightness * 100) + "%)";
  }

  function convertColor(query) {
    const fromRgb = query.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s+to\s+(hex|hsl)$/i);
    const fromHex = query.match(/^#([0-9a-f]{3}|[0-9a-f]{6})\s+to\s+(rgb|hsl)$/i);
    let channels = null;
    let target = "";
    if (fromRgb) {
      channels = [Number(fromRgb[1]), Number(fromRgb[2]), Number(fromRgb[3])];
      target = fromRgb[4].toLowerCase();
    }
    if (fromHex) {
      let hex = fromHex[1];
      if (hex.length === 3) {
        hex = hex.split("").map((digit) => digit + digit).join("");
      }
      channels = [0, 2, 4].map((offset) => parseInt(hex.slice(offset, offset + 2), 16));
      target = fromHex[2].toLowerCase();
    }
    if (!channels || channels.some((channel) => channel > 255)) {
      return null;
    }
    if (target === "hex") {
      return toHex(...channels);
    }
    if (target === "hsl") {
      return toHsl(...channels);
    }
    return "rgb(" + channels.join(", ") + ")";
  }

  function datePart(date, timeZone) {
    const parts = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "2-digit", month: "short", year: "numeric", timeZone }).formatToParts(date);
    const value = (type) => parts.find((part) => part.type === type).value;
    return value("weekday") + ", " + value("day") + " " + value("month") + " " + value("year");
  }

  function timePart(date, timeZone) {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: true, timeZone }).format(date);
  }

  function zoneName(date, timeZone, locale, style) {
    const parts = new Intl.DateTimeFormat(locale, { timeZone, timeZoneName: style }).formatToParts(date);
    const zone = parts.find((part) => part.type === "timeZoneName");
    if (!zone) {
      return "";
    }
    return zone.value;
  }

  function utcOffset(date, timeZone) {
    const offset = zoneName(date, timeZone, "en-US", "longOffset");
    if (offset === "GMT") {
      return "UTC+00:00";
    }
    return offset.replace("GMT", "UTC");
  }

  function timeInCity(query) {
    const match = query.match(/^(?:current\s+)?time\s+in\s+(.+)$/i);
    if (!match) {
      return null;
    }
    const city = cities[match[1].trim().toLowerCase()];
    if (!city) {
      return null;
    }
    const now = new Date();
    const abbreviation = city.abbr || zoneName(now, city.zone, city.locale, "short");
    return { result: timePart(now, city.zone), meta: [datePart(now, city.zone), abbreviation + " · " + utcOffset(now, city.zone)] };
  }

  function dateMath(query) {
    const match = query.match(/^now\s*([+-])\s*(\d+)\s*(minutes?|mins?|hours?|hrs?|days?|weeks?)$/i);
    if (!match) {
      return null;
    }
    const unit = match[3].toLowerCase();
    let milliseconds = 60000;
    if (unit.startsWith("h")) {
      milliseconds = 3600000;
    }
    if (unit.startsWith("d")) {
      milliseconds = 86400000;
    }
    if (unit.startsWith("w")) {
      milliseconds = 604800000;
    }
    let direction = 1;
    if (match[1] === "-") {
      direction = -1;
    }
    const date = new Date(Date.now() + direction * Number(match[2]) * milliseconds);
    return { result: timePart(date), meta: [datePart(date)] };
  }

  function unixTime(query) {
    if (/^(?:time to unix|now unix|unix now|current unix)$/i.test(query)) {
      return { result: String(Math.floor(Date.now() / 1000)), meta: [] };
    }
    const match = query.match(/^unix\s+(\d{9,13})$/i);
    if (!match) {
      return null;
    }
    let milliseconds = Number(match[1]);
    if (match[1].length <= 10) {
      milliseconds *= 1000;
    }
    const date = new Date(milliseconds);
    const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return { result: timePart(date), meta: [datePart(date), zoneName(date, localZone, "en-US", "short") + " · " + utcOffset(date, localZone)] };
  }

  function toTitleCase(text) {
    return text.replace(/\S+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  }

  function toCamelCase(text) {
    return text
      .replace(/[^a-zA-Z0-9]+(.)/g, (separator, letter) => letter.toUpperCase())
      .replace(/^[A-Z]/, (letter) => letter.toLowerCase());
  }

  function toPascalCase(text) {
    const camel = toCamelCase(text);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
  }

  function toSnakeCase(text) {
    return text
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .replace(/[^a-zA-Z0-9]+/g, "_")
      .replace(/^_|_$/g, "")
      .toLowerCase();
  }

  function transformText(query) {
    const match = query.match(/^:tx\s+(.+)$/i);
    if (!match) {
      return null;
    }
    const text = match[1];
    return [
      { expression: "UPPER CASE", result: text.toUpperCase() },
      { expression: "lower case", result: text.toLowerCase() },
      { expression: "Title Case", result: toTitleCase(text) },
      { expression: "camelCase", result: toCamelCase(text) },
      { expression: "PascalCase", result: toPascalCase(text) },
      { expression: "snake_case", result: toSnakeCase(text) },
      { expression: "kebab-case", result: toSnakeCase(text).replace(/_/g, "-") },
    ];
  }

  function passwordAlphabet(flag) {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?";
    if (flag === "a") {
      return letters + digits;
    }
    if (flag === "c") {
      return letters;
    }
    if (flag === "n") {
      return digits;
    }
    return letters + digits + symbols;
  }

  function makePassword(query) {
    const match = query.match(/^:pwd(?:\s+(\d+))?(?:\s+([acn]))?$/i);
    if (!match) {
      return null;
    }
    const length = Math.min(Math.max(parseInt(match[1] || "16", 10), 1), 128);
    const alphabet = passwordAlphabet((match[2] || "").toLowerCase());
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (value) => alphabet[value % alphabet.length]).join("");
  }

  function makeUuid(query) {
    if (query !== ":uuid") {
      return null;
    }
    if (crypto.randomUUID) {
      return crypto.randomUUID();
    }
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
    return hex.slice(0, 8) + "-" + hex.slice(8, 12) + "-" + hex.slice(12, 16) + "-" + hex.slice(16, 20) + "-" + hex.slice(20);
  }

  function evaluate(rawQuery) {
    const query = rawQuery.trim();
    if (query === "") {
      return null;
    }
    const transforms = transformText(query);
    if (transforms) {
      return { group: "Text Transform", rows: transforms };
    }
    const password = makePassword(query);
    if (password) {
      let expression = query;
      if (/^:pwd$/i.test(query.trim())) {
        expression = ":pwd 16";
      }
      return { group: "Password", rows: [{ expression, result: password }] };
    }
    const uuid = makeUuid(query);
    if (uuid) {
      return { group: "UUID", rows: [{ expression: ":uuid", result: uuid }] };
    }
    const timed = timeInCity(query) || dateMath(query) || unixTime(query);
    if (timed) {
      return { group: "Calculator", rows: [{ expression: query, result: timed.result, meta: timed.meta }] };
    }
    const converted = convertColor(query) || convertRadix(query) || convertUnits(query) || evaluateArithmetic(query);
    if (converted) {
      return { group: "Calculator", rows: [{ expression: query, result: converted }] };
    }
    return null;
  }

  function renderRow(row) {
    const card = createElement("div", "calc");
    card.setAttribute("role", "option");
    card.append(createElement("span", "calc-expr", row.expression), createIcon("i-arrow-right", "icon calc-arrow"));
    const side = createElement("span", "calc-side");
    side.append(createElement("span", "calc-result", row.result));
    if (row.meta && row.meta.length > 0) {
      const meta = createElement("span", "calc-meta");
      row.meta.forEach((item) => meta.append(createElement("span", "", item)));
      side.append(meta);
    }
    card.append(side, createElement("kbd", "calc-copy", "↵ Copy"));
    return card;
  }

  return { evaluate, renderRow };
})();

function setupHeroDemo() {
  const root = document.querySelector("[data-hero-demo]");
  const data = readJson("demo-data");
  if (!root || !data) {
    return;
  }

  const browser = root.querySelector("[data-browser]");
  const strip = root.querySelector("[data-strip]");
  const input = root.querySelector("[data-input]");
  const results = root.querySelector("[data-results]");
  const filterButtons = [...root.querySelectorAll("[data-filter]")];
  const toast = root.querySelector("[data-toast]");
  const live = root.querySelector("[data-live]");
  const overlay = root.querySelector("[data-overlay]");
  const reopenButton = root.querySelector("[data-reopen]");
  const address = root.querySelector("[data-address]");
  const page = root.querySelector("[data-page]");
  const pageHost = root.querySelector("[data-page-host]");
  const pageTitle = root.querySelector("[data-page-title]");
  const stepButtons = [...root.querySelectorAll("[data-step]")];
  const caption = root.querySelector("[data-tour-caption]");
  const tourToggle = root.querySelector("[data-tour-toggle]");
  const heroKeys = [...document.querySelectorAll("[data-hero-key]")];

  const sourceShorthands = ["t", "b", "h", "d", "r", "p", "c", "s"];
  const toolShorthands = { ai: "AI Chat", emoji: "Emoji", em: "Emoji", todo: "Todo", td: "Todo", rss: "RSS Reader", wx: "Weather", ss: "Screenshot", cp: "Color Picker", rl: "Ruler" };
  const toolSections = { "AI Chat": "#ai" };
  const filterOrder = filterButtons.map((button) => button.dataset.filter);
  const groupLimit = { history: 5, closed: 5, command: 5 };
  const typeIcons = { tab: "i-monitor", bookmark: "i-bookmark", history: "i-clock", closed: "i-rotate-ccw", download: "i-download", url: "i-globe", engine: "i-search", command: "i-terminal", tool: "i-chevron-right" };
  const rowActions = {
    tab: [["reload", "i-rotate", "Reload tab"], ["mute", "i-volume", "Mute tab"], ["pin", "i-pin", "Pin tab"], ["duplicate", "i-copy", "Duplicate tab"], ["incognito", "i-incognito", "Open in incognito"], ["ungroup", "i-ungroup", "Remove from group"], ["move", "i-maximize", "Move to new window"], ["copy", "i-link", "Copy URL"], ["close", "i-x", "Close tab"]],
    bookmark: [["incognito", "i-incognito", "Open in incognito"], ["copy", "i-link", "Copy URL"]],
    history: [["incognito", "i-incognito", "Open in incognito"], ["copy", "i-link", "Copy URL"]],
    download: [["show-in-folder", "i-folder", "Show in folder"], ["copy-download-url", "i-link", "Copy source URL"], ["erase-download", "i-x", "Remove from list"]],
  };

  let windowTabs = [];
  let secondWindowTabs = [];
  let closedTabs = [];
  let downloadItems = [];
  let activeTabId = "";
  let activeFilter = "all";
  let selectedIndex = 0;
  let selectableItems = [];
  let liveTimer = 0;
  let nextTabNumber = 100;

  function siteFor(host) {
    return data.sites[host] || { letter: "•", color: "#71717a" };
  }

  function createFavicon(host, extraClass) {
    const site = siteFor(host);
    const node = createElement("span", "fav", site.letter);
    if (extraClass) {
      node.classList.add(extraClass);
    }
    node.style.setProperty("--fav", site.color);
    node.setAttribute("aria-hidden", "true");
    return node;
  }

  function resetTabs() {
    windowTabs = data.tabs.filter((tab) => tab.window === 1).map((tab) => ({ ...tab }));
    secondWindowTabs = data.tabs.filter((tab) => tab.window === 2).map((tab) => ({ ...tab }));
    closedTabs = data.closed.map((item) => ({ ...item }));
    downloadItems = data.downloads.map((item) => ({ ...item }));
    const active = windowTabs.find((tab) => tab.active) || windowTabs[0];
    activeTabId = active.id;
    renderStrip();
    showPage(active);
  }

  function allTabs() {
    return windowTabs.concat(secondWindowTabs);
  }

  function renderStrip(enteringId) {
    const nodes = windowTabs.map((tab) => {
      const node = createElement("span", "strip-tab");
      node.dataset.tabId = tab.id;
      if (tab.id === activeTabId) {
        node.classList.add("is-active");
      }
      if (tab.id === enteringId) {
        node.classList.add("is-entering");
      }
      node.append(createFavicon(tab.host, "fav-xs"), createElement("span", "strip-title", tab.title));
      if (tab.audible) {
        let iconName = "i-volume";
        if (tab.muted) {
          iconName = "i-volume-x";
        }
        node.append(createIcon(iconName, "icon strip-audio"));
      }
      return node;
    });
    const newTabButton = strip.querySelector(".strip-new");
    strip.replaceChildren(...nodes, newTabButton);
  }

  function showPage(tab) {
    address.textContent = tab.url.replace(/^https?:\/\//, "");
    pageHost.textContent = tab.host;
    pageTitle.textContent = tab.title;
    page.style.setProperty("--site", siteFor(tab.host).color);
  }

  function activateTab(id) {
    if (!windowTabs.some((candidate) => candidate.id === id) && secondWindowTabs.some((candidate) => candidate.id === id)) {
      const focusedWindow = windowTabs;
      windowTabs = secondWindowTabs;
      secondWindowTabs = focusedWindow;
    }
    const tab = windowTabs.find((candidate) => candidate.id === id);
    if (!tab) {
      return;
    }
    activeTabId = id;
    renderStrip();
    showPage(tab);
  }

  function openInNewTab(source) {
    nextTabNumber += 1;
    const tab = { id: "n" + nextTabNumber, window: 1, title: source.title, url: source.url, host: source.host };
    const activeIndex = windowTabs.findIndex((candidate) => candidate.id === activeTabId);
    windowTabs.splice(activeIndex + 1, 0, tab);
    activeTabId = tab.id;
    renderStrip(tab.id);
    showPage(tab);
  }

  function removeTabs(ids, afterRemoval) {
    const idSet = new Set(ids);
    strip.querySelectorAll(".strip-tab").forEach((node) => {
      if (idSet.has(node.dataset.tabId)) {
        node.classList.add("is-leaving");
      }
    });
    window.setTimeout(() => {
      windowTabs = windowTabs.filter((tab) => !idSet.has(tab.id));
      if (!windowTabs.some((tab) => tab.id === activeTabId) && windowTabs.length > 0) {
        activeTabId = windowTabs[windowTabs.length - 1].id;
        showPage(windowTabs[windowTabs.length - 1]);
      }
      renderStrip();
      if (afterRemoval) {
        afterRemoval();
      }
    }, 320);
  }

  function runCommand(command) {
    const activeIndex = windowTabs.findIndex((tab) => tab.id === activeTabId);
    if (command.effect === "duplicates") {
      const seen = new Set();
      const duplicates = windowTabs.filter((tab) => {
        if (seen.has(tab.url)) {
          return true;
        }
        seen.add(tab.url);
        return false;
      }).map((tab) => tab.id);
      if (duplicates.length === 0) {
        showToast(toast, "No duplicates found");
        return;
      }
      removeTabs(duplicates);
      showToast(toast, "Closed " + plural(duplicates.length, "duplicate"));
      return;
    }
    if (command.effect === "sort") {
      windowTabs.sort((first, second) => first.title.localeCompare(second.title));
      renderStrip();
      showToast(toast, "Sorted " + windowTabs.length + " tabs alphabetically");
      return;
    }
    if (command.effect === "right" || command.effect === "left" || command.effect === "others") {
      const targets = windowTabs.filter((tab, index) => {
        if (command.effect === "right") {
          return index > activeIndex;
        }
        if (command.effect === "left") {
          return index < activeIndex;
        }
        return index !== activeIndex;
      }).map((tab) => tab.id);
      if (targets.length === 0) {
        const emptyMessages = { right: "No tabs to the right", left: "No tabs to the left", others: "No other tabs to close" };
        showToast(toast, emptyMessages[command.effect]);
        return;
      }
      removeTabs(targets);
      showToast(toast, "Closed " + plural(targets.length, "tab"));
      return;
    }
    if (command.effect === "merge") {
      if (secondWindowTabs.length === 0) {
        showToast(toast, "Only one window open");
        return;
      }
      const moved = secondWindowTabs.length;
      windowTabs = windowTabs.concat(secondWindowTabs.map((tab) => ({ ...tab, window: 1 })));
      secondWindowTabs = [];
      renderStrip();
      showToast(toast, "Merged " + plural(moved, "tab") + " into one window");
      return;
    }
    if (command.effect === "mute" || command.effect === "unmute") {
      const audible = allTabs().filter((tab) => tab.audible);
      audible.forEach((tab) => {
        tab.muted = command.effect === "mute";
      });
      renderStrip();
      if (command.effect === "mute") {
        showToast(toast, "Muted " + plural(allTabs().length, "tab"));
      } else {
        showToast(toast, "Unmuted " + plural(allTabs().length, "tab"));
      }
      return;
    }
    if (command.effect === "suspend") {
      const inactive = windowTabs.filter((tab) => tab.id !== activeTabId && !tab.pinned).length;
      showToast(toast, "Suspended " + plural(inactive, "tab"));
      return;
    }
    if (command.effect === "reload") {
      showToast(toast, "Reloading " + plural(allTabs().length, "tab"));
      return;
    }
    if (command.effect === "undo") {
      const lastClosed = closedTabs.shift();
      if (!lastClosed) {
        showToast(toast, "No recently closed tabs");
        return;
      }
      openInNewTab(lastClosed);
      showToast(toast, "Tab restored");
      return;
    }
    if (command.toast) {
      showToast(toast, command.toast);
    }
  }

  function parseQuery(rawQuery) {
    const query = rawQuery.trim().toLowerCase();
    const match = query.match(/^:([a-z]+)(?:\s+(.*))?$/);
    if (!match) {
      return { shorthand: null, tool: null, text: query };
    }
    const key = match[1];
    const rest = (match[2] || "").trim();
    if (sourceShorthands.includes(key)) {
      return { shorthand: key, tool: null, text: rest };
    }
    if (toolShorthands[key]) {
      return { shorthand: null, tool: toolShorthands[key], text: rest };
    }
    return { shorthand: null, tool: null, text: query };
  }

  function matchHistory(items, text) {
    if (!text) {
      return items.slice();
    }
    return items.filter((item) => (item.title + " " + item.url).toLowerCase().includes(text));
  }

  function rank(items, text) {
    const terms = text.split(/\s+/).filter(Boolean);
    if (terms.length === 0) {
      return items.slice();
    }
    const scored = [];
    for (const item of items) {
      const title = item.title.toLowerCase();
      const haystack = [title, item.url, item.description, item.folder].filter(Boolean).join(" ").toLowerCase();
      if (!terms.every((term) => haystack.includes(term) || matchesWithTypo(term, title))) {
        continue;
      }
      let score = 0;
      for (const term of terms) {
        if (title.startsWith(term)) {
          score += 3;
        } else if (new RegExp("(^|[^a-z0-9])" + term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).test(title)) {
          score += 2;
        } else if (title.includes(term)) {
          score += 1;
        } else if (haystack.includes(term)) {
          score += 0.5;
        } else {
          score += 0.8;
        }
      }
      scored.push({ item, score });
    }
    scored.sort((first, second) => second.score - first.score);
    return scored.map((entry) => entry.item);
  }

  function itemsOf(kind) {
    if (kind === "tab") {
      return allTabs().map((tab) => ({ ...tab, kind: "tab" }));
    }
    if (kind === "pinned") {
      return allTabs().filter((tab) => tab.pinned).map((tab) => ({ ...tab, kind: "tab" }));
    }
    const sources = { bookmark: data.bookmarks, history: data.history, download: downloadItems, closed: closedTabs, command: data.commands, tool: data.tools };
    return sources[kind].map((item) => ({ ...item, kind }));
  }

  function engineItems(text) {
    return data.engines.filter((engine) => engine.enabled).map((engine) => ({
      kind: "engine",
      title: 'Search "' + text + '" on ' + engine.name,
      url: engine.url + encodeURIComponent(text),
      engine: engine.name,
      host: engine.host,
      resultTitle: engine.resultTitle.replace("%s", text),
    }));
  }

  function looksLikeUrl(text) {
    return /^(?:https?:\/\/)?[a-z0-9-]+(?:\.[a-z0-9-]+)+(?:\/\S*)?$/i.test(text) && !/\s/.test(text);
  }

  function buildGroups(rawQuery) {
    const parsed = parseQuery(rawQuery);
    const text = parsed.text;
    const groups = [];
    const add = (label, items, limit) => {
      if (items.length === 0) {
        return;
      }
      let visible = items;
      if (limit) {
        visible = items.slice(0, limit);
      }
      groups.push({ label, items: visible });
    };

    if (parsed.tool) {
      add("Tools", itemsOf("tool").filter((tool) => tool.title === parsed.tool));
      return groups;
    }

    const filterByShorthand = { b: "bookmarks", h: "history", d: "downloads", r: "closed" };
    let scope = activeFilter;
    if (parsed.shorthand && filterByShorthand[parsed.shorthand]) {
      scope = filterByShorthand[parsed.shorthand];
    }

    if (parsed.shorthand === "s") {
      if (text) {
        add("Search", engineItems(text));
      }
      return groups;
    }
    if (parsed.shorthand === "c") {
      add("Commands", rank(itemsOf("command"), text));
      return groups;
    }
    if (parsed.shorthand === "p") {
      add("Pinned", rank(itemsOf("pinned"), text));
      return groups;
    }
    if (parsed.shorthand === "t") {
      add("Tabs", rank(itemsOf("tab"), text));
      if (text) {
        add("Commands", rank(itemsOf("command"), text), groupLimit.command);
      }
      return groups;
    }

    const scopedSources = { tabs: ["tab", "Tabs"], bookmarks: ["bookmark", "Bookmarks"], history: ["history", "History"], downloads: ["download", "Downloads"], closed: ["closed", "Recently Closed"], tools: ["tool", "Tools"] };
    if (scope !== "all") {
      const [kind, label] = scopedSources[scope];
      let matches = rank(itemsOf(kind), text);
      if (kind === "history") {
        matches = matchHistory(itemsOf(kind), text);
      }
      add(label, matches);
      if (text && kind !== "tool" && !parsed.shorthand) {
        add("Search", engineItems(text));
      }
      return groups;
    }

    if (!text) {
      add("Tabs", itemsOf("tab"));
      add("History", itemsOf("history"), groupLimit.history);
      add("Recently Closed", itemsOf("closed"), groupLimit.closed);
      add("Commands", itemsOf("command"));
      return groups;
    }

    const answer = answers.evaluate(rawQuery);
    if (answer) {
      groups.push({ label: answer.group, items: answer.rows.map((row) => ({ ...row, kind: "answer", group: answer.group })) });
    }
    if (!rawQuery.trim().startsWith(":")) {
      add("Tabs", rank(itemsOf("tab"), text));
      add("History", matchHistory(itemsOf("history"), text), groupLimit.history);
      add("Recently Closed", rank(itemsOf("closed"), text));
      add("Commands", rank(itemsOf("command"), text), groupLimit.command);
    }
    if (looksLikeUrl(text)) {
      const address = rawQuery.trim().replace(/^https?:\/\//, "");
      add("Open URL", [{ kind: "url", title: "Open " + address, url: "https://" + address, host: address.split("/")[0] }]);
    }
    add("Search", engineItems(rawQuery.trim()));
    return groups;
  }

  function renderItem(item, terms) {
    if (item.kind === "answer") {
      return answers.renderRow(item);
    }
    const row = createElement("div", "pal-item");
    row.setAttribute("role", "option");
    if (item.kind === "command" || item.kind === "tool" || item.kind === "download" || item.kind === "url") {
      const glyph = createElement("span", "pal-glyph");
      glyph.setAttribute("aria-hidden", "true");
      let iconName = item.icon || "i-globe";
      if (item.kind === "download") {
        iconName = "i-file";
      }
      glyph.append(createIcon(iconName));
      row.append(glyph);
    } else {
      row.append(createFavicon(item.host));
    }
    const textBlock = createElement("span", "pal-text");
    const title = createElement("span", "pal-title");
    title.append(highlightText(item.title, terms));
    const subtitle = createElement("span", "pal-sub");
    const subtitles = { command: "Page command", tool: item.description, engine: "Search with " + item.engine, closed: "Recently closed", download: item.status, url: "Open URL in new tab" };
    if (item.kind === "bookmark") {
      subtitle.append(highlightText(hostOf(item.url), terms));
    } else if (subtitles[item.kind] !== undefined) {
      subtitle.textContent = subtitles[item.kind];
    } else {
      subtitle.append(highlightText(item.url, terms));
    }
    textBlock.append(title, subtitle);
    row.append(textBlock);
    const meta = item.folder || item.when;
    if (meta) {
      row.append(createElement("span", "pal-meta", meta));
    }
    if (typeIcons[item.kind]) {
      row.append(createIcon(typeIcons[item.kind], "icon pal-tail pal-type"));
    }
    if (rowActions[item.kind]) {
      row.append(createRowActions(rowActions[item.kind]));
    }
    return row;
  }

  function createRowActions(definitions) {
    const actions = createElement("span", "pal-actions");
    for (const [action, iconName, label] of definitions) {
      const button = createElement("button", "pal-action");
      button.type = "button";
      button.tabIndex = -1;
      button.dataset.action = action;
      button.dataset.tip = label;
      button.setAttribute("aria-label", label);
      button.append(createIcon(iconName));
      actions.append(button);
    }
    return actions;
  }

  function render() {
    const groups = buildGroups(input.value);
    const terms = parseQuery(input.value).text.split(/\s+/).filter(Boolean);
    const nodes = [];
    selectableItems = [];
    for (const group of groups) {
      nodes.push(createElement("p", "pal-group", group.label));
      for (const item of group.items) {
        const node = renderItem(item, terms);
        node.id = "hero-option-" + selectableItems.length;
        node.dataset.index = String(selectableItems.length);
        selectableItems.push({ item, node });
        nodes.push(node);
      }
    }
    if (nodes.length === 0) {
      nodes.push(createElement("p", "pal-empty", "No results found."));
    }
    results.replaceChildren(...nodes);
    results.scrollTop = 0;
    select(0);
    window.clearTimeout(liveTimer);
    liveTimer = window.setTimeout(() => {
      live.textContent = plural(selectableItems.length, "result");
    }, 500);
  }

  function select(index) {
    if (selectableItems.length === 0) {
      input.removeAttribute("aria-activedescendant");
      return;
    }
    const count = selectableItems.length;
    selectedIndex = ((index % count) + count) % count;
    selectableItems.forEach(({ node }, position) => {
      const isSelected = position === selectedIndex;
      node.classList.toggle("is-selected", isSelected);
      node.setAttribute("aria-selected", String(isSelected));
    });
    const selectedNode = selectableItems[selectedIndex].node;
    input.setAttribute("aria-activedescendant", selectedNode.id);
    const top = selectedNode.offsetTop;
    const bottom = top + selectedNode.offsetHeight;
    if (top < results.scrollTop + 30) {
      results.scrollTop = Math.max(0, top - 30);
    } else if (bottom > results.scrollTop + results.clientHeight) {
      results.scrollTop = bottom - results.clientHeight + 8;
    }
  }

  function setFilter(filter) {
    activeFilter = filter;
    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    render();
  }

  function pressKeys() {
    heroKeys.forEach((key, index) => {
      window.setTimeout(() => key.classList.add("is-pressed"), index * 150);
    });
    window.setTimeout(() => heroKeys.forEach((key) => key.classList.remove("is-pressed")), heroKeys.length * 150 + 180);
  }

  function openPalette(shouldFocus) {
    browser.classList.remove("is-closed");
    reopenButton.hidden = true;
    input.setAttribute("aria-expanded", "true");
    pressKeys();
    if (shouldFocus) {
      input.focus({ preventScroll: true });
    }
  }

  function closePalette(shouldFocusReopen) {
    browser.classList.add("is-closed");
    reopenButton.hidden = false;
    input.setAttribute("aria-expanded", "false");
    if (shouldFocusReopen) {
      reopenButton.focus({ preventScroll: true });
    }
  }

  function execute(index) {
    const entry = selectableItems[index];
    if (!entry) {
      return;
    }
    const item = entry.item;
    if (item.kind === "answer") {
      showToast(toast, copyMessage(item.group, item.result));
      return;
    }
    if (item.kind === "tool") {
      const hash = toolSections[item.title] || "#tools";
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: scrollBehavior() });
        return;
      }
      window.location.assign("/features/" + hash);
      return;
    }
    if (item.kind === "command") {
      closePalette(false);
      runCommand(item);
      return;
    }
    closePalette(false);
    if (item.kind === "tab") {
      activateTab(item.id);
      return;
    }
    if (item.kind === "closed") {
      closedTabs = closedTabs.filter((closed) => closed.id !== item.id);
      openInNewTab(item);
      return;
    }
    if (item.kind === "engine") {
      openInNewTab({ title: item.resultTitle, url: item.url, host: item.host });
      return;
    }
    if (item.kind === "download") {
      return;
    }
    if (item.kind === "url") {
      openInNewTab({ title: item.host, url: item.url, host: item.host });
      return;
    }
    openInNewTab(item);
  }

  function handleRowAction(action, item) {
    if (action === "incognito") {
      closePalette(false);
      return;
    }
    if (item.kind === "tab") {
      handleTabAction(action, item);
      return;
    }
    if (action === "copy" || action === "copy-download-url") {
      showToast(toast, "URL copied");
      return;
    }
    if (action === "erase-download") {
      downloadItems = downloadItems.filter((download) => download.id !== item.id);
      render();
      showToast(toast, "Removed from list");
    }
  }

  function handleTabAction(action, item) {
    const tab = allTabs().find((candidate) => candidate.id === item.id);
    if (!tab) {
      return;
    }
    if (action === "reload") {
      showToast(toast, "Tab reloaded");
    } else if (action === "mute") {
      tab.muted = !tab.muted;
      renderStrip();
      showToast(toast, stateMessage(tab.muted, "Tab muted", "Tab unmuted"));
    } else if (action === "pin") {
      tab.pinned = !tab.pinned;
      showToast(toast, stateMessage(tab.pinned, "Tab pinned", "Tab unpinned"));
    } else if (action === "duplicate") {
      nextTabNumber += 1;
      const copy = { ...tab, id: "n" + nextTabNumber, active: false };
      const index = windowTabs.findIndex((candidate) => candidate.id === tab.id);
      if (index === -1) {
        secondWindowTabs.push(copy);
      } else {
        windowTabs.splice(index + 1, 0, copy);
      }
      renderStrip(copy.id);
      render();
      showToast(toast, "Tab duplicated");
    } else if (action === "ungroup") {
      showToast(toast, "Tab not in a group");
    } else if (action === "move" || action === "close") {
      windowTabs = windowTabs.filter((candidate) => candidate.id !== tab.id);
      secondWindowTabs = secondWindowTabs.filter((candidate) => candidate.id !== tab.id);
      if (tab.id === activeTabId && windowTabs.length > 0) {
        activeTabId = windowTabs[0].id;
        showPage(windowTabs[0]);
      }
      renderStrip();
      render();
      showToast(toast, stateMessage(action === "move", "Moved to new window", "Tab closed"));
    } else if (action === "copy") {
      showToast(toast, "URL copied");
    }
  }

  const tour = { index: 0, playing: !prefersReducedMotion, controller: null, inView: false };
  let progressAnimation = null;

  function cancelProgress() {
    if (progressAnimation) {
      progressAnimation.cancel();
      progressAnimation = null;
    }
  }

  function stopTour() {
    if (tour.controller) {
      tour.controller.abort();
      tour.controller = null;
    }
    cancelProgress();
  }

  function pauseTour() {
    tour.playing = false;
    tourToggle.dataset.state = "paused";
    tourToggle.setAttribute("aria-label", "Play demo");
    stopTour();
  }

  function playTour() {
    tour.playing = true;
    tourToggle.dataset.state = "playing";
    tourToggle.setAttribute("aria-label", "Pause demo");
    startTourLoop();
  }

  function markStep(index, duration) {
    cancelProgress();
    stepButtons.forEach((button, position) => button.classList.toggle("is-active", position === index));
    caption.textContent = data.tour[index].caption;
    if (!duration) {
      return;
    }
    const progress = stepButtons[index].querySelector(".tour-progress");
    progressAnimation = progress.animate([{ width: "0%" }, { width: "100%" }], { duration, easing: "linear", fill: "forwards" });
  }

  function findTargetIndex(step) {
    if (step.target === "answer") {
      return selectableItems.findIndex((entry) => entry.item.kind === "answer");
    }
    return selectableItems.findIndex((entry) => entry.item.id === step.target || entry.item.title === step.target);
  }

  async function playStep(index, signal, animated) {
    const step = data.tour[index];
    const typingDelay = 65;
    const duration = step.query.length * typingDelay + 3800;
    let progressDuration = 0;
    if (animated) {
      progressDuration = duration;
    }
    markStep(index, progressDuration);
    if (index === 0) {
      resetTabs();
    }
    if (step.target === "Close Duplicate Tabs" && !windowTabs.some((tab) => tab.duplicate)) {
      resetTabs();
    }
    activeFilter = step.filter || "all";
    input.value = "";
    setFilter(activeFilter);
    openPalette(false);
    if (!animated) {
      input.value = step.query;
      render();
      select(Math.max(0, findTargetIndex(step)));
      return;
    }
    await wait(450, signal);
    for (let length = 1; length <= step.query.length; length += 1) {
      input.value = step.query.slice(0, length);
      render();
      await wait(typingDelay, signal);
    }
    await wait(650, signal);
    const targetIndex = Math.max(0, findTargetIndex(step));
    while (selectedIndex < targetIndex) {
      select(selectedIndex + 1);
      await wait(170, signal);
    }
    await wait(650, signal);
    const selectedEntry = selectableItems[selectedIndex];
    if (!selectedEntry) {
      return;
    }
    if (step.action) {
      const actionButton = selectedEntry.node.querySelector('[data-action="' + step.action + '"]');
      if (actionButton) {
        actionButton.classList.add("is-pressed");
      }
      await wait(450, signal);
      handleRowAction(step.action, selectedEntry.item);
      await wait(1900, signal);
      return;
    }
    selectedEntry.node.classList.add("is-pressed");
    execute(selectedIndex);
    await wait(1900, signal);
  }

  async function startTourLoop() {
    stopTour();
    if (!tour.playing || !tour.inView) {
      return;
    }
    const controller = new AbortController();
    tour.controller = controller;
    try {
      while (!controller.signal.aborted) {
        await playStep(tour.index, controller.signal, true);
        tour.index = (tour.index + 1) % data.tour.length;
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        throw error;
      }
    }
  }

  function takeOver() {
    if (tour.playing) {
      pauseTour();
    }
  }

  input.addEventListener("input", () => {
    takeOver();
    render();
  });

  input.addEventListener("pointerdown", takeOver);
  input.addEventListener("focus", takeOver);

  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      select(selectedIndex + 1);
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      select(selectedIndex - 1);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      execute(selectedIndex);
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      closePalette(true);
      return;
    }
    if (event.key === "Tab") {
      event.preventDefault();
      let direction = 1;
      if (event.shiftKey) {
        direction = -1;
      }
      const next = (filterOrder.indexOf(activeFilter) + direction + filterOrder.length) % filterOrder.length;
      setFilter(filterOrder[next]);
      return;
    }
    if (event.key === "Backspace" && (event.metaKey || event.ctrlKey)) {
      const entry = selectableItems[selectedIndex];
      if (entry && entry.item.kind === "tab") {
        event.preventDefault();
        handleTabAction("close", entry.item);
      }
    }
  });

  results.addEventListener("pointermove", (event) => {
    const row = event.target.closest("[data-index]");
    if (row && Number(row.dataset.index) !== selectedIndex) {
      select(Number(row.dataset.index));
    }
  });

  results.addEventListener("click", (event) => {
    takeOver();
    const actionButton = event.target.closest("[data-action]");
    const row = event.target.closest("[data-index]");
    if (!row) {
      return;
    }
    const entry = selectableItems[Number(row.dataset.index)];
    if (actionButton) {
      handleRowAction(actionButton.dataset.action, entry.item);
      return;
    }
    execute(Number(row.dataset.index));
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      takeOver();
      setFilter(button.dataset.filter);
      input.focus({ preventScroll: true });
    });
  });

  overlay.addEventListener("click", () => {
    takeOver();
    closePalette(false);
  });

  reopenButton.addEventListener("click", () => {
    takeOver();
    input.value = "";
    render();
    openPalette(true);
  });

  stepButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      tour.index = Number(button.dataset.step);
      if (tour.playing) {
        startTourLoop();
        return;
      }
      stopTour();
      const controller = new AbortController();
      tour.controller = controller;
      try {
        await playStep(tour.index, controller.signal, !prefersReducedMotion);
      } catch (error) {
        if (error.name !== "AbortError") {
          throw error;
        }
      }
    });
  });

  tourToggle.addEventListener("click", () => {
    if (tour.playing) {
      pauseTour();
    } else {
      playTour();
    }
  });

  document.addEventListener("keydown", (event) => {
    const isShortcut = (event.metaKey || event.ctrlKey) && !event.altKey && !event.shiftKey && event.key.toLowerCase() === "k";
    if (!isShortcut) {
      return;
    }
    event.preventDefault();
    takeOver();
    const rect = browser.getBoundingClientRect();
    if (rect.bottom < 80 || rect.top > window.innerHeight - 120) {
      browser.scrollIntoView({ behavior: scrollBehavior(), block: "center" });
    }
    if (browser.classList.contains("is-closed")) {
      input.value = "";
      render();
      openPalette(true);
    } else {
      closePalette(false);
    }
  });

  if (!prefersReducedMotion) {
    tourToggle.dataset.state = "playing";
  } else {
    tourToggle.dataset.state = "paused";
    tourToggle.setAttribute("aria-label", "Play demo");
  }

  resetTabs();
  const start = data.start || {};
  activeFilter = start.filter || "all";
  input.value = start.query || "";
  setFilter(activeFilter);
  markStep(0, 0);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      tour.inView = entries[0].isIntersecting;
      if (tour.inView && tour.playing && !tour.controller) {
        startTourLoop();
      }
      if (!tour.inView) {
        stopTour();
      }
    }, { threshold: 0.35 });
    observer.observe(browser);
  }
}

function setupRowActions() {
  const root = document.querySelector("[data-actions-demo]");
  if (!root) {
    return;
  }
  const list = root.querySelector("[data-action-list]");
  const tabsBox = root.querySelector("[data-actions-tabs]");
  const extraBox = root.querySelector("[data-actions-extra]");
  const toast = root.querySelector("[data-toast]");
  const caption = root.parentElement.querySelector("[data-actions-caption]");
  const input = root.querySelector("[data-actions-input]");
  const empty = root.querySelector("[data-actions-empty]");
  const filterButtons = [...root.querySelectorAll("[data-filter]")];
  const demo = readJson("demo-data");
  const initialRows = [...tabsBox.querySelectorAll("[data-row]")].map((row) => row.cloneNode(true));
  const descriptions = {
    reload: "Reload refreshes the tab in the background.",
    mute: "Mute silences the tab without switching to it.",
    pin: "Pin keeps the tab at the start of the tab bar.",
    duplicate: "Duplicate opens a second copy of the page.",
    incognito: "Open in incognito opens the page in a private window.",
    ungroup: "Remove from group takes the tab out of its tab group.",
    move: "Move to new window gives the tab a window of its own.",
    copy: "Copy URL puts the page address on your clipboard.",
    close: "Close shuts the tab. The keyboard shortcut does the same.",
    "show-in-folder": "Show in folder opens the folder the file was saved to.",
    "copy-download-url": "Copy source URL copies the address the file came from.",
    "erase-download": "Remove from list clears it from the downloads list. The file stays on disk.",
  };
  const extraActions = {
    bookmark: [["incognito", "i-incognito", "Open in incognito"], ["copy", "i-link", "Copy URL"]],
    history: [["incognito", "i-incognito", "Open in incognito"], ["copy", "i-link", "Copy URL"]],
    download: [["show-in-folder", "i-folder", "Show in folder"], ["copy-download-url", "i-link", "Copy source URL"], ["erase-download", "i-x", "Remove from list"]],
  };
  const typeIcons = { bookmark: "i-bookmark", history: "i-clock", closed: "i-rotate-ccw", download: "i-download", tool: "i-chevron-right" };
  const unfinished = ["Downloading…", "Failed", "File missing"];
  let filter = "tabs";
  let copyNumber = 0;
  let removedDownloads = [];

  function tabRows() {
    return [...tabsBox.querySelectorAll("[data-row]")];
  }

  function visibleItems() {
    return [...list.querySelectorAll(".pal-item")].filter((item) => !item.hidden && !item.closest("[hidden]"));
  }

  function selectRow(row) {
    list.querySelectorAll(".pal-item").forEach((candidate) => {
      const isSelected = candidate === row;
      candidate.classList.toggle("is-selected", isSelected);
      candidate.setAttribute("aria-selected", String(isSelected));
    });
  }

  function terms() {
    if (!input) {
      return [];
    }
    return input.value.toLowerCase().split(/\s+/).filter(Boolean);
  }

  function matches(text, words) {
    const haystack = text.toLowerCase();
    return words.every((word) => haystack.includes(word));
  }

  function favicon(host) {
    let site = { letter: "•", color: "#71717a" };
    if (demo && demo.sites[host]) {
      site = demo.sites[host];
    }
    const node = createElement("span", "fav", site.letter);
    node.style.setProperty("--fav", site.color);
    node.setAttribute("aria-hidden", "true");
    return node;
  }

  function extraRow(entry, words) {
    const row = createElement("div", "pal-item");
    row.setAttribute("role", "option");
    row.setAttribute("aria-selected", "false");
    row.tabIndex = -1;
    row.dataset.extra = entry.kind;
    row.dataset.name = entry.title;
    if (entry.status) {
      row.dataset.status = entry.status;
    }
    if (entry.id) {
      row.dataset.id = entry.id;
    }
    if (entry.glyph) {
      const glyph = createElement("span", "pal-glyph");
      glyph.setAttribute("aria-hidden", "true");
      glyph.append(createIcon(entry.glyph));
      row.append(glyph);
    } else {
      row.append(favicon(entry.host));
    }
    const text = createElement("span", "pal-text");
    const title = createElement("span", "pal-title");
    title.append(highlightText(entry.title, words));
    const sub = createElement("span", "pal-sub");
    if (entry.markSub) {
      sub.append(highlightText(entry.sub, words));
    } else {
      sub.textContent = entry.sub;
    }
    text.append(title, sub);
    row.append(text);
    if (entry.meta) {
      row.append(createElement("span", "pal-meta", entry.meta));
    }
    if (extraActions[entry.kind]) {
      const actions = createElement("span", "pal-actions");
      extraActions[entry.kind].forEach((action) => {
        const button = createElement("button", "pal-action");
        button.type = "button";
        button.dataset.action = action[0];
        button.dataset.tip = action[2];
        button.setAttribute("aria-label", action[2]);
        button.append(createIcon(action[1]));
        actions.append(button);
      });
      row.append(actions);
    }
    row.append(createIcon(typeIcons[entry.kind], "icon pal-tail pal-type"));
    return row;
  }

  function entriesFor(kind) {
    if (!demo) {
      return [];
    }
    if (kind === "bookmark") {
      return demo.bookmarks.map((item) => ({ kind, title: item.title, sub: hostOf(item.url), meta: item.folder, host: item.host, haystack: item.title + " " + item.url + " " + item.folder, markSub: true }));
    }
    if (kind === "history") {
      return demo.history.map((item) => ({ kind, title: item.title, sub: item.url, meta: item.when, host: item.host, haystack: item.title + " " + item.url, markSub: true }));
    }
    if (kind === "closed") {
      return demo.closed.map((item) => ({ kind, title: item.title, sub: "Recently closed", meta: item.when, host: item.host, haystack: item.title + " " + item.url }));
    }
    if (kind === "download") {
      return demo.downloads.filter((item) => !removedDownloads.includes(item.id)).map((item) => ({ kind, id: item.id, title: item.title, sub: item.status, status: item.status, glyph: "i-file", haystack: item.title }));
    }
    return demo.tools.map((item) => ({ kind, title: item.title, sub: item.description, glyph: item.icon, haystack: item.title + " " + item.description }));
  }

  function renderExtras(words) {
    const sections = [];
    if (filter === "all") {
      sections.push(["History", "history", 5], ["Recently Closed", "closed", 5]);
    } else if (filter === "bookmarks") {
      sections.push(["Bookmarks", "bookmark", 0]);
    } else if (filter === "history") {
      sections.push(["History", "history", 0]);
    } else if (filter === "downloads") {
      sections.push(["Downloads", "download", 0]);
    } else if (filter === "closed") {
      sections.push(["Recently Closed", "closed", 0]);
    } else if (filter === "tools") {
      sections.push(["Tools", "tool", 0]);
    }
    const nodes = [];
    sections.forEach((section) => {
      let found = entriesFor(section[1]).filter((entry) => matches(entry.haystack, words));
      if (section[2] > 0) {
        found = found.slice(0, section[2]);
      }
      if (found.length === 0) {
        return;
      }
      nodes.push(createElement("p", "pal-group", section[0]));
      found.forEach((entry) => nodes.push(extraRow(entry, words)));
    });
    extraBox.replaceChildren(...nodes);
  }

  function applyQuery() {
    const words = terms();
    const showTabs = filter === "all" || filter === "tabs";
    let tabCount = 0;
    tabRows().forEach((row) => {
      const title = row.querySelector("[data-title]");
      const sub = row.querySelector(".pal-sub");
      if (!title.dataset.text) {
        title.dataset.text = title.textContent;
      }
      row.hidden = !matches(title.dataset.text + " " + row.dataset.url, words);
      if (!row.hidden) {
        tabCount += 1;
      }
      title.replaceChildren(highlightText(title.dataset.text, words));
      sub.replaceChildren(highlightText(row.dataset.url, words));
    });
    tabsBox.hidden = !showTabs || tabCount === 0;
    renderExtras(words);
    const visible = visibleItems();
    empty.hidden = visible.length > 0;
    if (visible.length > 0 && !visible.some((row) => row.classList.contains("is-selected"))) {
      selectRow(visible[0]);
    }
  }

  function setFilter(next) {
    filter = next;
    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === next;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    list.querySelectorAll(".pal-item.is-selected").forEach((row) => row.classList.remove("is-selected"));
    applyQuery();
    if (visibleItems().length === 0 && input && input.value.trim() !== "") {
      input.value = "";
      applyQuery();
    }
    list.scrollTop = 0;
  }

  function removeRow(row) {
    const next = row.nextElementSibling || row.previousElementSibling;
    row.classList.add("is-removing");
    window.setTimeout(() => {
      row.remove();
      if (next && next.matches(".pal-item") && !next.hidden) {
        selectRow(next);
      }
      applyQuery();
      if (tabRows().length === 0) {
        window.setTimeout(restore, 900);
      }
    }, 200);
  }

  function restore() {
    tabRows().forEach((row) => row.remove());
    initialRows.forEach((row) => tabsBox.append(row.cloneNode(true)));
    applyQuery();
  }

  function enterMessage(row) {
    const name = row.dataset.name;
    if (!row.dataset.extra) {
      return "Enter switches to " + row.querySelector("[data-title]").textContent + ".";
    }
    if (row.dataset.extra === "bookmark" || row.dataset.extra === "history") {
      return "Enter opens " + name + " in a new tab.";
    }
    if (row.dataset.extra === "closed") {
      return "Enter reopens " + name + ".";
    }
    if (row.dataset.extra === "download") {
      if (unfinished.includes(row.dataset.status)) {
        return "Enter shows " + name + " in its folder.";
      }
      return "Enter opens " + name + ".";
    }
    return "Enter opens the " + name + " tool.";
  }

  function moveSelection(step) {
    const visible = visibleItems();
    if (visible.length === 0) {
      return;
    }
    const current = visible.findIndex((row) => row.classList.contains("is-selected"));
    const next = Math.max(0, Math.min(current + step, visible.length - 1));
    selectRow(visible[next]);
    const row = visible[next];
    if (row.offsetTop < list.scrollTop) {
      list.scrollTop = row.offsetTop - 8;
    } else if (row.offsetTop + row.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTop = row.offsetTop + row.offsetHeight - list.clientHeight + 8;
    }
  }

  function extraAction(row, action) {
    caption.textContent = descriptions[action];
    if (action === "copy" || action === "copy-download-url") {
      showToast(toast, "URL copied");
      return;
    }
    if (action === "erase-download") {
      removedDownloads.push(row.dataset.id);
      applyQuery();
      showToast(toast, "Removed from list");
    }
  }

  function tabAction(row, button) {
    const action = button.dataset.action;
    caption.textContent = descriptions[action];
    if (action === "reload") {
      if (!prefersReducedMotion) {
        button.querySelector(".icon").animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], { duration: 600 });
      }
      showToast(toast, "Tab reloaded");
      return;
    }
    if (action === "mute") {
      const muted = row.toggleAttribute("data-muted");
      showToast(toast, stateMessage(muted, "Tab muted", "Tab unmuted"));
      return;
    }
    if (action === "pin") {
      const pinned = row.toggleAttribute("data-pinned");
      showToast(toast, stateMessage(pinned, "Tab pinned", "Tab unpinned"));
      return;
    }
    if (action === "duplicate") {
      copyNumber += 1;
      const copy = row.cloneNode(true);
      copy.dataset.row = row.dataset.row + "-copy-" + copyNumber;
      copy.classList.add("is-new");
      copy.querySelector("[data-title]").dataset.text = row.querySelector("[data-title]").dataset.text;
      row.after(copy);
      selectRow(copy);
      showToast(toast, "Tab duplicated");
      return;
    }
    if (action === "ungroup") {
      const badge = row.querySelector(".row-group");
      if (!badge) {
        showToast(toast, "Tab not in a group");
        return;
      }
      badge.remove();
      row.removeAttribute("data-group");
      showToast(toast, "Removed from group");
      return;
    }
    if (action === "move") {
      removeRow(row);
      showToast(toast, "Moved to new window");
      return;
    }
    if (action === "copy") {
      showToast(toast, "URL copied");
      return;
    }
    if (action === "close") {
      removeRow(row);
      showToast(toast, "Tab closed");
    }
  }

  list.addEventListener("click", (event) => {
    const row = event.target.closest(".pal-item");
    if (!row) {
      return;
    }
    const button = event.target.closest("[data-action]");
    if (!button) {
      selectRow(row);
      return;
    }
    if (row.dataset.extra) {
      extraAction(row, button.dataset.action);
      return;
    }
    tabAction(row, button);
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });

  if (input) {
    input.addEventListener("input", applyQuery);
    input.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (event.key === "ArrowDown") {
          moveSelection(1);
        } else {
          moveSelection(-1);
        }
        return;
      }
      const selected = visibleItems().find((row) => row.classList.contains("is-selected"));
      if (!selected) {
        return;
      }
      if (event.key === "Backspace" && (event.metaKey || event.ctrlKey) && !selected.dataset.extra) {
        event.preventDefault();
        removeRow(selected);
        showToast(toast, "Tab closed");
        caption.textContent = descriptions.close;
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        caption.textContent = enterMessage(selected);
      }
    });
  }
  applyQuery();
}

function setupCleanup() {
  const root = document.querySelector("[data-cleanup]");
  if (!root) {
    return;
  }
  const firstStrip = root.querySelector('[data-cleanup-strip="1"]');
  const secondStrip = root.querySelector('[data-cleanup-strip="2"]');
  const secondWindow = root.querySelector("[data-cleanup-second]");
  const queryLabel = root.querySelector("[data-cleanup-query]");
  const toast = root.querySelector("[data-toast]");
  const initialFirst = [...firstStrip.children].map((node) => node.cloneNode(true));
  const initialSecond = [...secondStrip.children].map((node) => node.cloneNode(true));
  const queryWords = { duplicates: "dup", sort: "sort", right: "right", merge: "merge", suspend: "susp", mute: "mute all" };

  function tabs() {
    return [...firstStrip.querySelectorAll(".cleanup-tab:not(.is-leaving)")];
  }

  function closeTabs(nodes) {
    nodes.forEach((node) => node.classList.add("is-flash"));
    window.setTimeout(() => {
      nodes.forEach((node) => node.classList.add("is-leaving"));
    }, 220);
    window.setTimeout(() => nodes.forEach((node) => node.remove()), 700);
  }

  function sortTabs() {
    const current = tabs();
    const before = new Map(current.map((node) => [node, node.getBoundingClientRect().left]));
    const sorted = current.slice().sort((first, second) => first.dataset.title.localeCompare(second.dataset.title));
    firstStrip.append(...sorted);
    if (prefersReducedMotion) {
      return sorted.length;
    }
    sorted.forEach((node) => {
      const delta = before.get(node) - node.getBoundingClientRect().left;
      if (delta !== 0) {
        node.animate([{ transform: "translateX(" + delta + "px)" }, { transform: "none" }], { duration: 450, easing: "cubic-bezier(0.16, 1, 0.3, 1)" });
      }
    });
    return sorted.length;
  }

  function run(command) {
    queryLabel.textContent = queryWords[command];
    const current = tabs();
    const activeIndex = current.findIndex((node) => node.classList.contains("is-active"));
    if (command === "duplicates") {
      const seen = new Set();
      const duplicates = current.filter((node) => {
        if (seen.has(node.dataset.title)) {
          return true;
        }
        seen.add(node.dataset.title);
        return false;
      });
      if (duplicates.length === 0) {
        showToast(toast, "No duplicates found");
        return;
      }
      closeTabs(duplicates);
      showToast(toast, "Closed " + plural(duplicates.length, "duplicate"));
      return;
    }
    if (command === "sort") {
      showToast(toast, "Sorted " + sortTabs() + " tabs alphabetically");
      return;
    }
    if (command === "right") {
      const right = current.slice(activeIndex + 1);
      if (right.length === 0) {
        showToast(toast, "No tabs to the right");
        return;
      }
      closeTabs(right);
      showToast(toast, "Closed " + plural(right.length, "tab"));
      return;
    }
    if (command === "merge") {
      const incoming = [...secondStrip.querySelectorAll(".cleanup-tab")];
      if (incoming.length === 0) {
        showToast(toast, "Only one window open");
        return;
      }
      incoming.forEach((node) => node.classList.add("is-entering"));
      firstStrip.append(...incoming);
      secondWindow.classList.add("is-gone");
      showToast(toast, "Merged " + plural(incoming.length, "tab") + " into one window");
      return;
    }
    if (command === "suspend") {
      const inactive = tabs().filter((node) => !node.classList.contains("is-active") && !node.hasAttribute("data-pinned") && !node.classList.contains("is-suspended"));
      if (inactive.length === 0) {
        showToast(toast, "No tabs to suspend");
        return;
      }
      inactive.forEach((node) => node.classList.add("is-suspended"));
      showToast(toast, "Suspended " + plural(inactive.length, "tab"));
      return;
    }
    if (command === "mute") {
      const audible = tabs().filter((node) => node.hasAttribute("data-audible"));
      audible.forEach((node) => {
        const use = node.querySelector(".cleanup-audio use");
        if (use) {
          use.setAttribute("href", "#i-volume-x");
        }
      });
      const everyTab = tabs().length + secondStrip.querySelectorAll(".cleanup-tab").length;
      showToast(toast, "Muted " + plural(everyTab, "tab"));
    }
  }

  root.querySelectorAll("[data-command]").forEach((button) => {
    button.addEventListener("click", () => run(button.dataset.command));
  });

  root.querySelector("[data-cleanup-reset]").addEventListener("click", () => {
    firstStrip.replaceChildren(...initialFirst.map((node) => node.cloneNode(true)));
    secondStrip.replaceChildren(...initialSecond.map((node) => node.cloneNode(true)));
    secondWindow.classList.remove("is-gone");
    queryLabel.textContent = "";
  });
}

function setupAnswers() {
  const root = document.querySelector("[data-answers]");
  if (!root) {
    return;
  }
  const input = root.querySelector("[data-answers-input]");
  const results = root.querySelector("[data-answers-results]");
  const toast = root.querySelector("[data-toast]");
  const examples = [...document.querySelectorAll("[data-answer-example]")];
  const engines = [["Google", "#4285f4", "G"], ["Bing", "#008373", "b"], ["DuckDuckGo", "#de5833", "D"]];

  function searchRow(query, engine) {
    const row = createElement("div", "pal-item");
    const favicon = createElement("span", "fav", engine[2]);
    favicon.style.setProperty("--fav", engine[1]);
    const text = createElement("span", "pal-text");
    const title = createElement("span", "pal-title");
    title.append('Search "', createElement("mark", "", query), '" on ' + engine[0]);
    text.append(title, createElement("span", "pal-sub", "Search with " + engine[0]));
    row.append(favicon, text, createIcon("i-search", "icon pal-tail"));
    return row;
  }

  function render() {
    const query = input.value.trim();
    examples.forEach((chip) => chip.classList.toggle("is-active", chip.dataset.answerExample === query));
    if (query === "") {
      results.replaceChildren(createElement("p", "pal-empty", "Type a sum, a conversion or a city."));
      return;
    }
    const nodes = [];
    const answer = answers.evaluate(query);
    if (answer) {
      nodes.push(createElement("p", "pal-group", answer.group));
      answer.rows.forEach((row, index) => {
        const card = answers.renderRow(row);
        if (index === 0) {
          card.classList.add("is-selected");
        }
        card.dataset.result = row.result;
        card.dataset.group = answer.group;
        nodes.push(card);
      });
    }
    nodes.push(createElement("p", "pal-group", "Search"));
    engines.forEach((engine, index) => {
      const row = searchRow(query, engine);
      if (!answer && index === 0) {
        row.classList.add("is-selected");
      }
      nodes.push(row);
    });
    results.replaceChildren(...nodes);
  }

  input.addEventListener("input", render);
  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    const selected = results.querySelector(".calc.is-selected");
    if (selected) {
      showToast(toast, copyMessage(selected.dataset.group, selected.dataset.result));
    }
  });
  results.addEventListener("click", (event) => {
    const card = event.target.closest(".calc");
    if (!card) {
      return;
    }
    results.querySelectorAll(".calc").forEach((candidate) => candidate.classList.toggle("is-selected", candidate === card));
    showToast(toast, copyMessage(card.dataset.group, card.dataset.result));
  });
  examples.forEach((chip) => {
    chip.addEventListener("click", () => {
      input.value = chip.dataset.answerExample;
      render();
    });
  });
  render();
}

function setupAiDemo() {
  const root = document.querySelector("[data-ai-demo]");
  if (!root) {
    return;
  }
  const controls = root.parentElement;
  const inputLine = root.querySelector("[data-ai-input]");
  const thread = root.querySelector("[data-ai-thread]");
  const modelIcon = root.querySelector("[data-ai-model-icon]");
  const modelLabel = root.querySelector("[data-ai-model-label]");
  const promptButtons = [...controls.querySelectorAll("[data-ai-prompt]")];
  const providerButtons = [...controls.querySelectorAll("[data-provider]")];
  const placeholder = inputLine.textContent;
  const replies = {
    summary: [
      { type: "h4", text: "Q3 roadmap: summary" },
      { type: "p", text: "The doc sets three goals for the quarter, each with an owner and a date." },
      { type: "ul", items: [["Onboarding", ": ship onboarding flow v3 by August 15. Owner: Design."], ["Billing", ": move every plan to the new checkout before the September price change."], ["Performance", ": bring dashboard load time from 3.1 s to under 2 s."]] },
      { type: "p", text: "Open risk: the Safari sticky header bug (ENG-482) blocks the onboarding launch." },
    ],
    checklist: [
      { type: "h4", text: "Q3 roadmap checklist" },
      { type: "ol", items: [["", "Finish the onboarding flow v3 designs"], ["", "Fix ENG-482, the sticky header on Safari"], ["", "Launch the new checkout for all plans"], ["", "Get dashboard load time under 2 s"], ["", "Share the progress review on September 30"]] },
    ],
    translate: [
      { type: "h4", text: "Introducción" },
      { type: "p", text: "Este trimestre nos centramos en tres metas: lanzar el nuevo flujo de bienvenida, pasar la facturación al nuevo proceso de pago y reducir el tiempo de carga del panel a menos de dos segundos." },
    ],
  };
  let controller = null;
  let hasAutoplayed = false;

  function messageWithPageTag(text) {
    const fragment = document.createDocumentFragment();
    text.split(/(@page)/).forEach((part) => {
      if (part !== "@page") {
        fragment.append(part);
        return;
      }
      const tag = createElement("span", "ai-page-tag");
      tag.append(createIcon("i-file"), "Page");
      fragment.append(tag);
    });
    return fragment;
  }

  async function streamInto(node, text, signal) {
    if (prefersReducedMotion) {
      node.append(text);
      return;
    }
    for (let index = 0; index < text.length; index += 3) {
      node.append(text.slice(index, index + 3));
      await wait(14, signal);
    }
  }

  async function renderReply(blocks, container, signal) {
    for (const block of blocks) {
      if (block.type === "h4" || block.type === "p") {
        const node = createElement(block.type);
        container.append(node);
        await streamInto(node, block.text, signal);
        continue;
      }
      const list = createElement(block.type);
      container.append(list);
      for (const [label, text] of block.items) {
        const item = createElement("li");
        list.append(item);
        if (label) {
          item.append(createElement("b", "", label));
        }
        await streamInto(item, text, signal);
      }
    }
  }

  async function run(promptId, text) {
    if (controller) {
      controller.abort();
    }
    controller = new AbortController();
    const signal = controller.signal;
    promptButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.aiPrompt === promptId));
    try {
      inputLine.classList.remove("pal-placeholder");
      inputLine.textContent = "";
      if (!prefersReducedMotion) {
        for (let length = 1; length <= text.length; length += 1) {
          inputLine.textContent = text.slice(0, length);
          await wait(28, signal);
        }
        await wait(300, signal);
      }
      inputLine.textContent = placeholder;
      inputLine.classList.add("pal-placeholder");
      const empty = thread.querySelector(".ai-empty");
      if (empty) {
        empty.remove();
      }
      const question = createElement("div", "ai-user");
      question.append(messageWithPageTag(text));
      const answer = createElement("div", "ai-answer is-streaming");
      thread.replaceChildren(question, answer);
      if (!prefersReducedMotion) {
        await wait(500, signal);
      }
      await renderReply(replies[promptId], answer, signal);
      answer.classList.remove("is-streaming");
    } catch (error) {
      if (error.name !== "AbortError") {
        throw error;
      }
    }
  }

  promptButtons.forEach((button) => {
    button.addEventListener("click", () => {
      hasAutoplayed = true;
      run(button.dataset.aiPrompt, button.dataset.aiText);
    });
  });

  providerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      providerButtons.forEach((candidate) => {
        const isActive = candidate === button;
        candidate.classList.toggle("is-active", isActive);
        candidate.setAttribute("aria-pressed", String(isActive));
      });
      modelIcon.src = button.dataset.icon;
      modelLabel.textContent = button.dataset.provider + " · " + button.dataset.model;
    });
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || hasAutoplayed) {
        return;
      }
      hasAutoplayed = true;
      observer.disconnect();
      run(promptButtons[0].dataset.aiPrompt, promptButtons[0].dataset.aiText);
    }, { threshold: 0.5 });
    observer.observe(root);
  }
}

function setupSites() {
  const root = document.querySelector("[data-sites]");
  const sites = readJson("sites-data");
  if (!root || !sites) {
    return;
  }
  const buttons = [...root.querySelectorAll("[data-site]")];
  const commandList = root.querySelector("[data-site-commands]");
  const hostLabel = root.querySelector("[data-site-host]");
  const caption = root.querySelector("[data-site-caption]");

  function commandRow(title, isSelected) {
    const row = createElement("div", "pal-item");
    if (isSelected) {
      row.classList.add("is-selected");
    }
    const glyph = createElement("span", "pal-glyph");
    glyph.append(createIcon("i-command"));
    const text = createElement("span", "pal-text");
    text.append(createElement("span", "pal-title", title), createElement("span", "pal-sub", "Page command"));
    row.append(glyph, text, createIcon("i-terminal", "icon pal-tail"));
    return row;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const site = sites.find((candidate) => candidate.id === button.dataset.site);
      buttons.forEach((candidate) => {
        const isActive = candidate === button;
        candidate.classList.toggle("is-active", isActive);
        candidate.setAttribute("aria-pressed", String(isActive));
      });
      hostLabel.textContent = "on " + site.host;
      commandList.replaceChildren(...site.commands.map((title, index) => commandRow(title, index === 0)));
      caption.textContent = site.count + " shortcuts on " + site.name + ". A few of them are shown here.";
    });
  });
}

function setupThemes() {
  const root = document.querySelector("[data-studio]");
  const themes = readJson("themes-data");
  if (!root || !themes) {
    return;
  }
  const stage = root.querySelector("[data-studio-stage]");
  const palette = root.querySelector("[data-studio-palette]");
  const placeholder = root.querySelector("[data-studio-placeholder]");
  const themeButtons = [...root.querySelectorAll("[data-theme]")];
  const layoutButtons = [...root.querySelectorAll("[data-layout]")];
  const filterButtons = [...root.querySelectorAll("[data-theme-filter]")];
  const nameLabel = root.querySelector("[data-theme-name]");
  const countLabel = root.querySelector("[data-theme-count]");
  const defaultPlaceholder = placeholder.textContent;
  const variables = { bg: "--pal-bg", text: "--pal-text", placeholder: "--pal-placeholder", item_selected: "--pal-selected", item_url: "--pal-url", border: "--pal-border", separator: "--pal-separator", group_label: "--pal-group", kbd_bg: "--pal-kbd-bg", kbd_border: "--pal-kbd-border", kbd_text: "--pal-kbd-text", footer_bg: "--pal-footer-bg", caret: "--pal-caret" };

  function setPressed(buttons, activeButton) {
    buttons.forEach((button) => {
      const isActive = button === activeButton;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function applyTheme(id) {
    const theme = themes.find((candidate) => candidate.id === id);
    if (!theme) {
      return;
    }
    for (const [key, property] of Object.entries(variables)) {
      palette.style.setProperty(property, theme[key]);
    }
    if (theme.mode === "dark") {
      palette.style.setProperty("--pal-shadow", "0 24px 80px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.05)");
    } else {
      palette.style.removeProperty("--pal-shadow");
    }
    nameLabel.textContent = theme.name;
  }

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setPressed(themeButtons, button);
      applyTheme(button.dataset.theme);
    });
  });

  layoutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setPressed(layoutButtons, button);
      const layout = button.dataset.layout;
      stage.classList.toggle("is-spotlight", layout === "spotlight");
      stage.classList.toggle("is-notch", layout === "notch");
      if (layout === "notch") {
        placeholder.textContent = "Search...";
      } else {
        placeholder.textContent = defaultPlaceholder;
      }
    });
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setPressed(filterButtons, button);
      const filter = button.dataset.themeFilter;
      let visible = 0;
      themeButtons.forEach((themeButton) => {
        const isVisible = filter === "all" || themeButton.dataset.mode === filter;
        themeButton.hidden = !isVisible;
        if (isVisible) {
          visible += 1;
        }
      });
      if (filter === "all") {
        countLabel.textContent = visible + " themes";
      } else {
        countLabel.textContent = visible + " " + filter + " themes";
      }
    });
  });

  applyTheme("light");
}

function setupShorthands() {
  const root = document.querySelector("[data-shorthands]");
  if (!root) {
    return;
  }
  const bar = root.querySelector("[data-shorthand-bar]");
  const keyNode = root.querySelector("[data-shorthand-key]");
  const restNode = root.querySelector("[data-shorthand-rest]");
  const chip = root.querySelector("[data-shorthand-chip]");
  const sheet = root.querySelector("[data-shorthand-sheet]");
  const items = [...root.querySelectorAll("[data-shorthand]")];
  if (!bar || !keyNode || !restNode || !chip || !sheet || items.length === 0) {
    return;
  }

  let current = 0;
  let typedLength = items[0].dataset.shorthandExample.length;
  let phase = "holding";
  let timer = 0;
  let isVisible = false;
  let isHovering = false;

  function render(item, length) {
    const token = item.dataset.shorthand;
    const example = item.dataset.shorthandExample;
    keyNode.textContent = example.slice(1, Math.min(length, token.length));
    restNode.textContent = example.slice(token.length, length);
    chip.textContent = item.dataset.shorthandChip;
    chip.classList.toggle("is-visible", length >= token.length);
  }

  function activate(item) {
    items.forEach((candidate) => candidate.classList.toggle("is-active", candidate === item));
  }

  function schedule(delay) {
    window.clearTimeout(timer);
    timer = window.setTimeout(tick, delay);
  }

  function tick() {
    if (!isVisible || isHovering) {
      return;
    }
    const item = items[current];
    if (phase === "typing") {
      typedLength += 1;
      render(item, typedLength);
      if (typedLength >= item.dataset.shorthandExample.length) {
        phase = "holding";
        schedule(1900);
        return;
      }
      schedule(75);
      return;
    }
    if (phase === "holding") {
      phase = "erasing";
      schedule(30);
      return;
    }
    if (typedLength > 1) {
      typedLength -= 1;
      render(item, typedLength);
      schedule(24);
      return;
    }
    current = (current + 1) % items.length;
    activate(items[current]);
    phase = "typing";
    schedule(280);
  }

  sheet.addEventListener("pointerover", (event) => {
    if (event.pointerType !== "mouse") {
      return;
    }
    const item = event.target.closest("[data-shorthand]");
    if (!item) {
      return;
    }
    isHovering = true;
    window.clearTimeout(timer);
    current = items.indexOf(item);
    typedLength = item.dataset.shorthandExample.length;
    phase = "holding";
    render(item, typedLength);
    activate(item);
  });

  sheet.addEventListener("pointerleave", () => {
    if (!isHovering) {
      return;
    }
    isHovering = false;
    schedule(1400);
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    isVisible = entries[0].isIntersecting;
    if (isVisible) {
      schedule(1200);
      return;
    }
    window.clearTimeout(timer);
  }, { threshold: 0.4 });
  observer.observe(bar);
}

function setupShortcutExplorer() {
  const root = document.querySelector("[data-sx]");
  const data = readJson("shortcut-data");
  let demo = readJson("demo-data");
  if (!demo) {
    demo = readJson("sx-demo-data");
  }
  if (!root || !data || !demo) {
    return;
  }
  const frame = root.querySelector("[data-sx-frame]");
  const keyNode = root.querySelector("[data-sx-key]");
  const titleNode = root.querySelector("[data-sx-title]");
  const linkNode = root.querySelector("[data-sx-link]");
  const infoNode = root.querySelector("[data-sx-info]");
  const statusNode = root.querySelector("[data-sx-status]");
  const triesNode = root.querySelector("[data-sx-tries]");
  const buttons = [...root.querySelectorAll("[data-sx-item]")];
  if (!frame || !keyNode || !titleNode || !linkNode || !infoNode || !statusNode || !triesNode || buttons.length === 0) {
    return;
  }

  const items = new Map();
  data.groups.forEach((group) => {
    group.items.forEach((item) => items.set(item.token, item));
  });
  const scenes = new Map();
  const filterNames = ["All", "Tabs", "Bookmarks", "History", "Downloads", "Recently Closed", "Tools"];
  const groupOrder = ["Tabs", "Pinned", "Bookmarks", "Recently Closed", "History", "Downloads", "Commands", "Search"];
  const defaultPlaceholder = "Search tabs · :b bookmarks · :h history · :d downloads · :s search…";
  const kindIcons = { tab: "i-monitor", bookmark: "i-bookmark", history: "i-clock", closed: "i-rotate-ccw", download: "i-download", command: "i-terminal", engine: "i-search" };
  const unfinishedDownloads = ["Downloading…", "Failed", "File missing"];
  let current = "";
  let hoverTimer = 0;

  function tokenFragment(token) {
    const fragment = document.createDocumentFragment();
    fragment.append(createElement("span", "token-colon", ":"), token.slice(1));
    return fragment;
  }

  function siteFor(host) {
    if (demo.sites[host]) {
      return demo.sites[host];
    }
    return { letter: "•", color: "#71717a" };
  }

  function favicon(host) {
    const site = siteFor(host);
    const node = createElement("span", "fav", site.letter);
    node.style.setProperty("--fav", site.color);
    node.setAttribute("aria-hidden", "true");
    return node;
  }

  function glyph(icon) {
    const node = createElement("span", "pal-glyph");
    node.setAttribute("aria-hidden", "true");
    node.append(createIcon(icon));
    return node;
  }

  function renderStatus(scene) {
    statusNode.replaceChildren();
    if (!scene.status) {
      return;
    }
    if (scene.statusKey) {
      statusNode.append(createElement("kbd", "kbd", scene.statusKey), " ");
    }
    statusNode.append(scene.status);
  }

  function setStatus(scene, text, key) {
    scene.status = text;
    scene.statusKey = key;
    if (scene.token === current) {
      renderStatus(scene);
    }
  }

  function renderTries(scene) {
    triesNode.replaceChildren();
    if (!scene.tries || scene.tries.length === 0) {
      return;
    }
    triesNode.append(createElement("span", "sx-tries-label", scene.triesLabel));
    scene.tries.forEach((entry) => {
      const chip = createElement("button", "chip sx-try", entry.label);
      chip.type = "button";
      if (entry.mono) {
        chip.classList.add("chip-mono");
      }
      chip.addEventListener("click", () => scene.onTry(entry.value));
      triesNode.append(chip);
    });
  }

  function keepVisible(container, node) {
    const top = node.offsetTop;
    const bottom = top + node.offsetHeight;
    if (top < container.scrollTop) {
      container.scrollTop = top - 8;
    } else if (bottom > container.scrollTop + container.clientHeight) {
      container.scrollTop = bottom - container.clientHeight + 8;
    }
  }

  function select(scene, index) {
    if (scene.rows.length === 0) {
      scene.index = -1;
      setStatus(scene, "", "");
      return;
    }
    scene.index = Math.max(0, Math.min(index, scene.rows.length - 1));
    scene.rows.forEach((row, rowIndex) => {
      row.node.classList.toggle("is-selected", rowIndex === scene.index);
      row.node.setAttribute("aria-selected", String(rowIndex === scene.index));
    });
    keepVisible(scene.body, scene.rows[scene.index].node);
    if (scene.describe) {
      setStatus(scene, scene.describe(scene.rows[scene.index]), scene.describeKey);
    }
  }

  function press(node) {
    node.classList.add("is-pressed");
    window.setTimeout(() => node.classList.remove("is-pressed"), 180);
  }

  function addRow(scene, node, row, onActivate) {
    const index = scene.rows.length;
    node.setAttribute("role", "option");
    node.addEventListener("mouseenter", () => select(scene, index));
    node.addEventListener("click", () => {
      select(scene, index);
      press(node);
      if (onActivate) {
        onActivate(scene.rows[index]);
      }
    });
    row.node = node;
    scene.rows.push(row);
  }

  function bindListKeys(scene, onEnter) {
    scene.input.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        select(scene, scene.index + 1);
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        select(scene, scene.index - 1);
        return;
      }
      if (event.key !== "Enter") {
        return;
      }
      event.preventDefault();
      if (scene.index < 0) {
        return;
      }
      press(scene.rows[scene.index].node);
      if (onEnter) {
        onEnter(scene.rows[scene.index], event);
      }
    });
  }

  function buildFooter() {
    const footer = createElement("div", "pal-footer");
    footer.setAttribute("aria-hidden", "true");
    const hints = createElement("span", "pal-hints");
    [["↑↓", "Navigate"], ["Tab", "Filter"], ["↵", "Open"], ["esc", "Close"]].forEach((pair) => {
      const hint = createElement("span");
      hint.append(createElement("kbd", "", pair[0]), pair[1]);
      hints.append(hint);
    });
    const brand = createElement("span", "pal-brand", "TabCmdr");
    brand.append(createIcon("i-settings"));
    footer.append(hints, brand);
    return footer;
  }

  function buildShell(options) {
    const pal = createElement("div", "pal sx-pal");
    const search = createElement("div", "pal-search");
    search.append(createIcon("i-search"));
    if (options.token) {
      const prefix = createElement("span", "sx-prefix");
      prefix.setAttribute("aria-hidden", "true");
      prefix.append(tokenFragment(options.token));
      search.append(prefix);
    }
    const input = createElement("input", "pal-input");
    input.type = "text";
    input.value = options.value || "";
    input.placeholder = options.placeholder;
    input.autocomplete = "off";
    input.spellcheck = false;
    input.maxLength = 80;
    input.setAttribute("aria-label", options.label);
    if (options.readOnly) {
      input.readOnly = true;
    }
    const esc = createElement("kbd", "pal-esc", "ESC");
    esc.setAttribute("aria-hidden", "true");
    search.append(input, esc);
    const filters = createElement("div", "pal-filters");
    filters.setAttribute("aria-hidden", "true");
    filterNames.forEach((name) => {
      const chip = createElement("span", "pal-filter", name);
      if (name === options.filter) {
        chip.classList.add("is-active");
      }
      filters.append(chip);
    });
    const body = createElement("div", "pal-list sx-body");
    body.setAttribute("role", "listbox");
    body.setAttribute("aria-label", options.label);
    const toast = createElement("p", "toast");
    toast.setAttribute("role", "status");
    pal.append(search, filters, body, buildFooter(), toast);
    return { pal, input, body, toast };
  }

  function backRow(label) {
    const row = createElement("p", "sx-back");
    row.setAttribute("aria-hidden", "true");
    row.append(createIcon("i-chevron-left"), label);
    return row;
  }

  function newScene(item, shell) {
    return { token: item.token, item, node: shell.pal, input: shell.input, body: shell.body, toast: shell.toast, rows: [], index: -1, status: "", statusKey: "", describeKey: "↵", tries: [], triesLabel: "Try" };
  }

  function queryTries(item) {
    if (!item.tries) {
      return [];
    }
    return item.tries.map((value) => ({ label: item.token + " " + value, value, mono: true }));
  }

  function sourceEntries(source) {
    const entries = [];
    if (source === "tabs" || source === "pinned") {
      demo.tabs.forEach((tab) => {
        if (source === "pinned" && !tab.pinned) {
          return;
        }
        let group = "Tabs";
        if (tab.pinned) {
          group = "Pinned";
        }
        entries.push({ kind: "tab", group, title: tab.title, sub: tab.url, host: tab.host, haystack: tab.title + " " + tab.url, markSub: true });
      });
    }
    if (source === "tabs" || source === "commands") {
      demo.commands.forEach((command) => {
        entries.push({ kind: "command", group: "Commands", title: command.title, sub: "Page command", glyph: command.icon, haystack: command.title });
      });
    }
    if (source === "bookmarks") {
      demo.bookmarks.forEach((bookmark) => {
        entries.push({ kind: "bookmark", group: "Bookmarks", title: bookmark.title, sub: hostOf(bookmark.url), meta: bookmark.folder, host: bookmark.host, haystack: bookmark.title + " " + bookmark.url + " " + bookmark.folder, markSub: true });
      });
    }
    if (source === "history") {
      demo.history.forEach((page) => {
        entries.push({ kind: "history", group: "History", title: page.title, sub: page.url, meta: page.when, host: page.host, haystack: page.title + " " + page.url, markSub: true });
      });
    }
    if (source === "downloads") {
      demo.downloads.forEach((file) => {
        entries.push({ kind: "download", group: "Downloads", title: file.title, sub: file.status, glyph: "i-file", haystack: file.title });
      });
    }
    if (source === "closed") {
      demo.closed.forEach((tab) => {
        entries.push({ kind: "closed", group: "Recently Closed", title: tab.title, sub: "Recently closed", meta: tab.when, host: tab.host, haystack: tab.title + " " + tab.url });
      });
    }
    return entries;
  }

  function engineEntries(query) {
    if (query === "") {
      return [];
    }
    return demo.engines.filter((engine) => engine.enabled).map((engine) => ({
      kind: "engine", group: "Search", title: "Search \"" + query + "\" on " + engine.name, sub: "Search with " + engine.name, host: engine.host, engine: engine.name, query,
    }));
  }

  function matches(entry, terms) {
    const haystack = entry.haystack.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  }

  function entryRow(entry, terms) {
    const node = createElement("div", "pal-item");
    if (entry.glyph) {
      node.append(glyph(entry.glyph));
    } else {
      node.append(favicon(entry.host));
    }
    const text = createElement("span", "pal-text");
    const title = createElement("span", "pal-title");
    title.append(highlightText(entry.title, terms));
    const sub = createElement("span", "pal-sub");
    if (entry.markSub) {
      sub.append(highlightText(entry.sub, terms));
    } else {
      sub.textContent = entry.sub;
    }
    text.append(title, sub);
    node.append(text);
    if (entry.meta) {
      node.append(createElement("span", "pal-meta", entry.meta));
    }
    if (kindIcons[entry.kind]) {
      node.append(createIcon(kindIcons[entry.kind], "icon pal-tail pal-type"));
    }
    return node;
  }

  function describeEntry(entry) {
    if (entry.kind === "tab") {
      return "Switches to " + entry.title;
    }
    if (entry.kind === "bookmark" || entry.kind === "history") {
      return "Opens " + entry.title + " in a new tab";
    }
    if (entry.kind === "closed") {
      return "Reopens " + entry.title;
    }
    if (entry.kind === "download") {
      if (unfinishedDownloads.includes(entry.sub)) {
        return "Shows " + entry.title + " in its folder";
      }
      return "Opens " + entry.title;
    }
    if (entry.kind === "command") {
      return "Runs " + entry.title;
    }
    if (entry.kind === "engine") {
      return "Searches " + entry.engine + " for " + entry.query;
    }
    return "";
  }

  function renderGroups(scene, entries, terms) {
    const nodes = [];
    scene.rows = [];
    groupOrder.forEach((group) => {
      const groupEntries = entries.filter((entry) => entry.group === group);
      if (groupEntries.length === 0) {
        return;
      }
      nodes.push(createElement("p", "pal-group", group));
      groupEntries.forEach((entry) => {
        const node = entryRow(entry, terms);
        addRow(scene, node, { entry });
        nodes.push(node);
      });
    });
    return nodes;
  }

  function buildSourceScene(item) {
    const shell = buildShell({ token: item.token, value: item.query, placeholder: "Type to search", filter: "All", label: item.title + " results" });
    const scene = newScene(item, shell);
    scene.describe = (row) => describeEntry(row.entry);
    scene.tries = queryTries(item);

    function render() {
      const value = scene.input.value.trim();
      const terms = value.toLowerCase().split(/\s+/).filter(Boolean);
      let entries = [];
      if (item.source === "search") {
        entries = engineEntries(value);
      } else {
        entries = sourceEntries(item.source).filter((entry) => matches(entry, terms));
      }
      const nodes = renderGroups(scene, entries, terms);
      if (scene.rows.length === 0) {
        nodes.push(createElement("p", "pal-empty", "No results found."));
      }
      scene.body.replaceChildren(...nodes);
      scene.body.scrollTop = 0;
      select(scene, 0);
    }

    scene.onTry = (value) => {
      scene.input.value = value;
      render();
    };
    scene.input.addEventListener("input", render);
    bindListKeys(scene, null);
    render();
    return scene;
  }

  function buildAnswerScene(item) {
    const shell = buildShell({ token: item.token, value: item.query, placeholder: "", filter: "All", label: item.title + " results" });
    const scene = newScene(item, shell);
    scene.describe = (row) => {
      if (row.kind === "engine") {
        return describeEntry(row.entry);
      }
      if (row.group === "Password") {
        return "Copies the password";
      }
      if (row.group === "UUID") {
        return "Copies the UUID";
      }
      return "Copies " + row.result;
    };
    if (item.refresh) {
      scene.tries = [{ label: "Make a new one", value: "" }];
      scene.triesLabel = "Try";
    } else {
      scene.tries = queryTries(item);
    }

    function copyRow(row) {
      if (row.kind === "answer") {
        showToast(scene.toast, copyMessage(row.group, row.result));
      }
    }

    function render() {
      const value = scene.input.value.trim();
      let query = item.token;
      if (value !== "") {
        query = item.token + " " + value;
      }
      const nodes = [];
      scene.rows = [];
      const answer = answers.evaluate(query);
      if (answer) {
        nodes.push(createElement("p", "pal-group", answer.group));
        answer.rows.forEach((result) => {
          const card = answers.renderRow(result);
          addRow(scene, card, { kind: "answer", group: answer.group, result: result.result }, copyRow);
          nodes.push(card);
        });
      }
      const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
      const engines = engineEntries(query);
      if (engines.length > 0) {
        nodes.push(createElement("p", "pal-group", "Search"));
        engines.forEach((entry) => {
          const node = entryRow(entry, terms);
          addRow(scene, node, { kind: "engine", entry });
          nodes.push(node);
        });
      }
      scene.body.replaceChildren(...nodes);
      scene.body.scrollTop = 0;
      select(scene, 0);
    }

    scene.onTry = (value) => {
      scene.input.value = value;
      render();
    };
    scene.input.addEventListener("input", render);
    bindListKeys(scene, copyRow);
    render();
    return scene;
  }

  function messageWithPageTag(text) {
    const fragment = document.createDocumentFragment();
    text.split(/(@page)/).forEach((part) => {
      if (part !== "@page") {
        fragment.append(part);
        return;
      }
      const tag = createElement("span", "ai-page-tag");
      tag.append(createIcon("i-file"), "Page");
      fragment.append(tag);
    });
    return fragment;
  }

  function buildAiScene(item) {
    const shell = buildShell({ placeholder: "Ask anything... type @page to include this page · ↵ to send", filter: "Tools", label: "AI chat" });
    const scene = newScene(item, shell);
    const head = createElement("div", "ai-head");
    const back = createElement("span", "ai-back");
    back.append(createIcon("i-chevron-left"), "Back to AI Providers");
    const model = createElement("span", "ai-model");
    const modelIcon = document.querySelector("[data-ai-model-icon]");
    if (modelIcon && modelIcon.src) {
      const icon = createElement("img");
      icon.src = modelIcon.src;
      icon.width = 14;
      icon.height = 14;
      icon.alt = "";
      model.append(icon);
    }
    model.append(createElement("span", "", data.ai.provider));
    head.append(back, model);
    const thread = createElement("div", "ai-thread sx-thread");
    scene.body.classList.add("sx-ai");
    scene.body.removeAttribute("role");
    scene.body.append(head, thread);

    function showPrompt(prompt) {
      const user = createElement("p", "ai-user");
      user.append(messageWithPageTag(prompt.text));
      const reply = createElement("div", "ai-answer");
      reply.append(createElement("h4", "", prompt.title), createElement("p", "", prompt.body));
      thread.replaceChildren(user, reply);
      setStatus(scene, "Sample reply. In TabCmdr the answer comes from the model you pick.", "");
    }

    function showCustom(text) {
      const user = createElement("p", "ai-user");
      user.append(messageWithPageTag(text));
      const reply = createElement("div", "ai-answer");
      reply.append(createElement("p", "", "This preview has sample replies only. Pick one of the prompts below to see one."));
      thread.replaceChildren(user, reply);
      setStatus(scene, "", "");
    }

    scene.tries = data.ai.prompts.map((prompt, index) => ({ label: prompt.text, value: String(index) }));
    scene.triesLabel = "Ask";
    scene.onTry = (value) => showPrompt(data.ai.prompts[Number(value)]);
    scene.input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") {
        return;
      }
      event.preventDefault();
      const text = scene.input.value.trim();
      if (text === "") {
        return;
      }
      const prompt = data.ai.prompts.find((candidate) => candidate.text.toLowerCase() === text.toLowerCase());
      if (prompt) {
        showPrompt(prompt);
      } else {
        showCustom(text);
      }
      scene.input.value = "";
    });
    showPrompt(data.ai.prompts[0]);
    return scene;
  }

  function toneChar(emoji, tone) {
    if (!emoji.tones || tone === "") {
      return emoji.char;
    }
    return emoji.char + String.fromCodePoint(parseInt(tone, 16));
  }

  function buildEmojiScene(item) {
    const shell = buildShell({ placeholder: defaultPlaceholder, filter: "Tools", label: "Emoji" });
    const scene = newScene(item, shell);
    let tone = "";
    let active = data.emoji[0];
    const preview = createElement("div", "sx-emoji-preview");
    const previewChar = createElement("span", "sx-emoji-char", active.char);
    const previewText = createElement("span", "sx-emoji-text");
    const previewName = createElement("span", "sx-emoji-name", active.name);
    const previewHint = createElement("span", "sx-emoji-hint", "↵ copy · shift+↵ copy :name:");
    previewText.append(previewName, previewHint);
    const tones = createElement("span", "sx-tones");
    const toneButtons = data.skinTones.map((entry) => {
      const button = createElement("button", "sx-tone");
      button.type = "button";
      button.title = entry.label;
      button.setAttribute("aria-label", entry.label + " skin tone");
      button.style.setProperty("--tone", entry.swatch);
      button.addEventListener("click", () => {
        tone = entry.key;
        toneButtons.forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
        render();
      });
      tones.append(button);
      return button;
    });
    toneButtons[0].classList.add("is-active");
    const copyButton = createElement("button", "sx-emoji-copy", "Copy");
    copyButton.type = "button";
    const nameButton = createElement("button", "sx-emoji-name-copy", ":name:");
    nameButton.type = "button";
    preview.append(previewChar, previewText, tones, copyButton, nameButton);
    const grid = createElement("div", "sx-emoji-grid");
    scene.body.removeAttribute("role");
    scene.body.append(backRow("Back to Tools"), preview, grid);
    scene.tries = item.tries.map((value) => ({ label: value, value, mono: false }));
    scene.triesLabel = "Search";

    function setActive(emoji) {
      active = emoji;
      previewChar.textContent = toneChar(emoji, tone);
      previewName.textContent = emoji.name;
    }

    function copyChar() {
      showToast(scene.toast, "Copied " + toneChar(active, tone));
    }

    function copyName() {
      showToast(scene.toast, "Copied :" + active.short + ":");
    }

    function render() {
      const terms = scene.input.value.toLowerCase().split(/\s+/).filter(Boolean);
      const found = data.emoji.filter((emoji) => terms.every((term) => (emoji.name + " " + emoji.short).includes(term)));
      const nodes = [];
      scene.rows = [];
      const categories = [];
      found.forEach((emoji) => {
        if (!categories.includes(emoji.cat)) {
          categories.push(emoji.cat);
        }
      });
      categories.forEach((category) => {
        nodes.push(createElement("p", "pal-group sx-emoji-group", category));
        const cells = createElement("div", "sx-emoji-cells");
        found.filter((emoji) => emoji.cat === category).forEach((emoji) => {
          const cell = createElement("button", "sx-emoji-cell", toneChar(emoji, tone));
          cell.type = "button";
          cell.setAttribute("aria-label", emoji.name);
          cell.addEventListener("mouseenter", () => {
            setActive(emoji);
            markCell(cell);
          });
          cell.addEventListener("focus", () => {
            setActive(emoji);
            markCell(cell);
          });
          cell.addEventListener("click", () => {
            setActive(emoji);
            markCell(cell);
            copyChar();
          });
          scene.rows.push({ node: cell, emoji });
          cells.append(cell);
        });
        nodes.push(cells);
      });
      if (found.length === 0) {
        nodes.push(createElement("p", "pal-empty", "No results found."));
      } else {
        setActive(found[0]);
        markCell(scene.rows[0].node);
      }
      grid.replaceChildren(...nodes);
    }

    function markCell(cell) {
      scene.rows.forEach((row) => row.node.classList.toggle("is-selected", row.node === cell));
    }

    copyButton.addEventListener("click", copyChar);
    nameButton.addEventListener("click", copyName);
    scene.onTry = (value) => {
      scene.input.value = value;
      render();
    };
    scene.input.addEventListener("input", render);
    scene.input.addEventListener("keydown", (event) => {
      const position = scene.rows.findIndex((row) => row.emoji === active);
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        if (scene.rows.length === 0) {
          return;
        }
        event.preventDefault();
        let next = position + 1;
        if (event.key === "ArrowLeft") {
          next = position - 1;
        }
        next = Math.max(0, Math.min(next, scene.rows.length - 1));
        setActive(scene.rows[next].emoji);
        markCell(scene.rows[next].node);
        keepVisible(scene.body, scene.rows[next].node);
        return;
      }
      if (event.key !== "Enter" || scene.rows.length === 0) {
        return;
      }
      event.preventDefault();
      if (event.shiftKey) {
        copyName();
      } else {
        copyChar();
      }
    });
    setStatus(scene, "Copies the highlighted emoji. Shift+Enter copies its :name:.", "↵");
    render();
    return scene;
  }

  function buildTodoScene(item) {
    const shell = buildShell({ placeholder: "Add a todo here… (press ↵ to save)", filter: "Tools", label: "To-do list" });
    const scene = newScene(item, shell);
    let todos = data.todos.map((todo, index) => ({ id: index + 1, text: todo.text, done: todo.done }));
    let nextId = todos.length + 1;
    const list = createElement("div", "sx-todos");
    const addBar = createElement("p", "sx-todo-add", "Type something above and press ↵");
    scene.body.removeAttribute("role");
    scene.body.append(backRow("Back to Tools"), addBar, list);

    function todoRow(todo) {
      const row = createElement("div", "sx-todo");
      if (todo.done) {
        row.classList.add("is-done");
      }
      const check = createElement("button", "sx-todo-check");
      check.type = "button";
      if (todo.done) {
        check.title = "Mark undone";
      } else {
        check.title = "Mark done";
      }
      check.setAttribute("aria-label", check.title + ": " + todo.text);
      check.append(createIcon("i-check"));
      check.addEventListener("click", () => {
        todo.done = !todo.done;
        render();
      });
      const remove = createElement("button", "sx-todo-delete");
      remove.type = "button";
      remove.title = "Delete";
      remove.setAttribute("aria-label", "Delete: " + todo.text);
      remove.append(createIcon("i-x"));
      remove.addEventListener("click", () => {
        todos = todos.filter((candidate) => candidate.id !== todo.id);
        render();
        showToast(scene.toast, "Removed");
      });
      row.append(check, createElement("span", "sx-todo-text", todo.text), remove);
      return row;
    }

    function render() {
      const pending = todos.filter((todo) => !todo.done);
      const done = todos.filter((todo) => todo.done);
      const nodes = [];
      if (todos.length === 0) {
        const empty = createElement("div", "sx-todo-empty");
        empty.append(createIcon("i-square-check"), createElement("b", "", "No todos yet"), createElement("span", "", "Type something in search bar and press ↵ to add todo"));
        nodes.push(empty);
      }
      if (pending.length > 0) {
        nodes.push(createElement("p", "pal-group", "Todo · " + pending.length));
        pending.forEach((todo) => nodes.push(todoRow(todo)));
      }
      if (done.length > 0) {
        const label = createElement("p", "pal-group", "Done · " + done.length);
        const clear = createElement("button", "sx-todo-clear");
        clear.type = "button";
        clear.append(createIcon("i-x"), "Clear " + done.length + " done");
        clear.addEventListener("click", () => {
          todos = todos.filter((todo) => !todo.done);
          render();
        });
        label.append(clear);
        nodes.push(label);
        done.forEach((todo) => nodes.push(todoRow(todo)));
      }
      list.replaceChildren(...nodes);
    }

    scene.input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") {
        return;
      }
      event.preventDefault();
      const text = scene.input.value.trim();
      if (text === "") {
        return;
      }
      todos.push({ id: nextId, text, done: false });
      nextId += 1;
      scene.input.value = "";
      render();
      showToast(scene.toast, "Todo added");
    });
    setStatus(scene, "Type a task in the search box above and press Enter.", "");
    render();
    return scene;
  }

  function buildRssScene(item) {
    const shell = buildShell({ placeholder: defaultPlaceholder, filter: "Tools", label: "RSS reader", readOnly: true });
    const scene = newScene(item, shell);
    let feed = "All";
    const chips = createElement("div", "sx-feeds");
    const list = createElement("div", "sx-articles");
    scene.body.removeAttribute("role");
    scene.body.append(backRow("Back to Tools"), chips, createElement("p", "pal-group", "Latest articles"), list);
    const chipButtons = ["All"].concat(data.feeds).map((name) => {
      const chip = createElement("button", "sx-feed", name);
      chip.type = "button";
      chip.title = name;
      chip.addEventListener("click", () => {
        feed = name;
        render();
      });
      chips.append(chip);
      return chip;
    });

    function render() {
      chipButtons.forEach((chip) => {
        const isActive = chip.title === feed;
        chip.classList.toggle("is-active", isActive);
        chip.setAttribute("aria-pressed", String(isActive));
      });
      const rows = data.articles.filter((article) => feed === "All" || article.feed === feed).map((article) => {
        const row = createElement("div", "pal-item sx-article");
        row.append(glyph("i-rss"));
        const text = createElement("span", "pal-text");
        const title = createElement("span", "sx-bar sx-bar-title");
        title.style.width = article.width + "%";
        const sub = createElement("span", "sx-bar sx-bar-sub");
        sub.style.width = (article.width - 14) + "%";
        text.append(title, sub);
        row.append(text, createElement("span", "sx-badge", article.feed), createElement("span", "sx-badge", article.when));
        return row;
      });
      list.replaceChildren(...rows);
    }

    setStatus(scene, "Pick a feed above to see only its articles. Headlines here are placeholders.", "");
    render();
    return scene;
  }

  function localTime(zone) {
    try {
      return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: zone }).format(new Date());
    } catch {
      return "";
    }
  }

  function buildWeatherScene(item) {
    const shell = buildShell({ placeholder: defaultPlaceholder, filter: "Tools", label: "Weather" });
    const scene = newScene(item, shell);
    scene.tries = item.tries.map((value) => ({ label: value, value, mono: false }));
    scene.triesLabel = "Filter";

    function card(place, terms) {
      const node = createElement("div", "pal-item sx-weather");
      const left = createElement("div", "sx-weather-left");
      const fahrenheit = Math.round(place.temp * 9 / 5 + 32);
      left.append(createElement("b", "sx-weather-temp", place.temp + "°C / " + fahrenheit + "°F"), createElement("span", "sx-weather-condition", place.emoji + " " + place.condition));
      const right = createElement("div", "sx-weather-right");
      const location = createElement("p", "sx-weather-location");
      location.append(highlightText(place.name + ", " + place.country, terms));
      const time = localTime(place.zone);
      if (time) {
        location.append(createElement("span", "sx-weather-time", time));
      }
      const details = createElement("p", "sx-weather-details", "Feels " + place.feels + "°C · ↓" + place.min + "° ↑" + place.max + "° · Humidity " + place.humidity + "% · UV " + place.uv + " · Wind " + place.wind + " km/h " + place.dir);
      const sun = createElement("p", "sx-weather-details", "Sunrise " + place.sunrise + " · Sunset " + place.sunset);
      right.append(location, details, sun);
      node.append(left, right);
      return node;
    }

    function render() {
      const query = scene.input.value.trim().toLowerCase();
      const terms = [];
      if (query !== "") {
        terms.push(query);
      }
      const nodes = [backRow("Back to Tools")];
      scene.rows = [];
      data.places.forEach((place) => {
        const name = (place.name + ", " + place.country).toLowerCase();
        if (query !== "" && !name.includes(query)) {
          return;
        }
        const node = card(place, terms);
        addRow(scene, node, { place });
        nodes.push(node);
      });
      if (scene.rows.length === 0) {
        nodes.push(createElement("p", "pal-empty", "No results found."));
      }
      scene.body.replaceChildren(...nodes);
      select(scene, 0);
    }

    scene.describe = () => "Sample places. Local times are live.";
    scene.describeKey = "";
    scene.onTry = (value) => {
      scene.input.value = value;
      render();
    };
    scene.input.addEventListener("input", render);
    bindListKeys(scene, null);
    render();
    return scene;
  }

  function buildScreenshotScene(item) {
    const shell = buildShell({ placeholder: defaultPlaceholder, filter: "Tools", label: "Screenshot commands" });
    const scene = newScene(item, shell);
    scene.describe = (row) => "Runs " + row.shot.title;

    function render() {
      const terms = scene.input.value.toLowerCase().split(/\s+/).filter(Boolean);
      const nodes = [backRow("Back to Tools")];
      scene.rows = [];
      data.screenshots.forEach((shot) => {
        if (!terms.every((term) => shot.title.toLowerCase().includes(term))) {
          return;
        }
        const node = createElement("div", "pal-item");
        node.append(glyph(shot.icon));
        const text = createElement("span", "pal-text");
        const title = createElement("span", "pal-title");
        title.append(highlightText(shot.title, terms));
        text.append(title, createElement("span", "pal-sub", shot.sub));
        node.append(text);
        addRow(scene, node, { shot }, (row) => showToast(scene.toast, row.shot.toast));
        nodes.push(node);
      });
      if (scene.rows.length === 0) {
        nodes.push(createElement("p", "pal-empty", "No results found."));
      }
      scene.body.replaceChildren(...nodes);
      select(scene, 0);
    }

    scene.input.addEventListener("input", render);
    bindListKeys(scene, (row) => showToast(scene.toast, row.shot.toast));
    render();
    return scene;
  }

  function hexToRgb(hex) {
    const value = parseInt(hex.slice(1), 16);
    return "rgb(" + ((value >> 16) & 255) + ", " + ((value >> 8) & 255) + ", " + (value & 255) + ")";
  }

  function pageToast(page, message) {
    const toast = page.querySelector(".sx-page-toast");
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimers.get(toast));
    toastTimers.set(toast, window.setTimeout(() => toast.classList.remove("is-visible"), 1800));
  }

  function pageMock(extraClass, address) {
    const page = createElement("div", "sx-page " + extraClass);
    const bar = createElement("div", "sx-page-bar");
    bar.setAttribute("aria-hidden", "true");
    const dots = createElement("span", "sx-page-dots");
    dots.append(createElement("i"), createElement("i"), createElement("i"));
    bar.append(dots, createElement("span", "sx-page-url", address || "acme.com/launch"));
    const view = createElement("div", "sx-page-view");
    const toast = createElement("p", "sx-page-toast");
    toast.setAttribute("role", "status");
    page.append(bar, view, toast);
    return { page, view };
  }

  function buildColorScene(item) {
    const mock = pageMock("sx-cp");
    const scene = { token: item.token, item, node: mock.page, rows: [], status: "", statusKey: "", tries: [] };
    const view = mock.view;
    view.dataset.color = "#F6F6F8";
    const parts = [
      ["sx-cp-nav", "#0F0F12", ""],
      ["sx-cp-title", "#18181B", "Launch week"],
      ["sx-cp-text", "#A1A1AA", ""],
      ["sx-cp-primary", "#F0013D", "Get started"],
      ["sx-cp-secondary", "#2563EB", "Read docs"],
    ];
    parts.forEach((part) => {
      const node = createElement("span", "sx-cp-part " + part[0], part[2]);
      node.dataset.color = part[1];
      node.tabIndex = 0;
      node.setAttribute("aria-label", "Color " + part[1]);
      view.append(node);
    });
    const swatches = createElement("span", "sx-cp-swatches");
    ["#16A34A", "#F59E0B", "#7C3AED", "#0EA5E9"].forEach((color) => {
      const swatch = createElement("span", "sx-cp-part sx-cp-swatch");
      swatch.dataset.color = color;
      swatch.style.background = color;
      swatch.tabIndex = 0;
      swatch.setAttribute("aria-label", "Color " + color);
      swatches.append(swatch);
    });
    view.append(swatches);
    const loupe = createElement("span", "sx-loupe");
    loupe.setAttribute("aria-hidden", "true");
    const label = createElement("span", "sx-loupe-label");
    const hexNode = createElement("b", "");
    const rgbNode = createElement("span", "");
    label.append(hexNode, rgbNode);
    loupe.append(createElement("span", "sx-loupe-lens"), label);
    view.append(loupe);
    let color = "#F0013D";

    function place(x, y, hex) {
      color = hex;
      loupe.style.setProperty("--loupe", hex);
      loupe.style.left = x + "px";
      loupe.style.top = y + "px";
      loupe.classList.toggle("is-flipped-x", x > view.clientWidth - 150);
      loupe.classList.toggle("is-flipped-y", y > view.clientHeight - 150);
      hexNode.textContent = hex;
      rgbNode.textContent = hexToRgb(hex);
      setStatus(scene, "Click to copy " + hex + ". Esc cancels.", "");
    }

    function colorAt(target) {
      const part = target.closest("[data-color]");
      if (part) {
        return part.dataset.color;
      }
      return view.dataset.color;
    }

    function centerOf(node) {
      const viewBox = view.getBoundingClientRect();
      const box = node.getBoundingClientRect();
      return [box.left - viewBox.left + box.width / 2, box.top - viewBox.top + box.height / 2];
    }

    view.addEventListener("pointermove", (event) => {
      const viewBox = view.getBoundingClientRect();
      place(event.clientX - viewBox.left, event.clientY - viewBox.top, colorAt(event.target));
    });
    view.addEventListener("click", () => pageToast(mock.page, "Copied " + color));
    view.addEventListener("focusin", (event) => {
      const point = centerOf(event.target);
      place(point[0], point[1], colorAt(event.target));
    });
    view.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        pageToast(mock.page, "Copied " + color);
      }
    });
    scene.onShow = () => {
      const primary = view.querySelector(".sx-cp-primary");
      const point = centerOf(primary);
      place(point[0], point[1], primary.dataset.color);
    };
    return scene;
  }

  function buildRulerScene(item) {
    const mock = pageMock("sx-rl");
    const scene = { token: item.token, item, node: mock.page, rows: [], status: "", statusKey: "", tries: [] };
    const view = mock.view;
    const top = createElement("span", "sx-rl-top");
    const left = createElement("span", "sx-rl-left");
    top.setAttribute("aria-hidden", "true");
    left.setAttribute("aria-hidden", "true");
    const canvas = createElement("div", "sx-rl-canvas");
    canvas.tabIndex = 0;
    canvas.setAttribute("aria-label", "Page to measure. Hover or focus an element, click to select, press C to copy its size.");
    const parts = [
      ["sx-rl-nav", "nav.topbar", ""],
      ["sx-rl-title", "h1.headline", "Launch week"],
      ["sx-rl-text", "p.intro", ""],
      ["sx-rl-primary", "button.btn.primary", "Get started"],
      ["sx-rl-secondary", "a.btn.ghost", "Read docs"],
      ["sx-rl-card", "div.card", ""],
    ];
    const nodes = parts.map((part) => {
      const node = createElement("span", "sx-rl-part " + part[0], part[2]);
      node.dataset.label = part[1];
      canvas.append(node);
      return node;
    });
    const hoverBox = createElement("span", "sx-rl-box sx-rl-hover");
    const selectBox = createElement("span", "sx-rl-box sx-rl-select");
    const gap = createElement("span", "sx-rl-gap");
    const gapLabel = createElement("span", "sx-rl-gap-label");
    gap.append(gapLabel);
    [hoverBox, selectBox, gap].forEach((node) => {
      node.setAttribute("aria-hidden", "true");
      canvas.append(node);
    });
    view.append(top, left, canvas);
    let selected = null;
    let hovered = null;

    function rectOf(node) {
      const canvasBox = canvas.getBoundingClientRect();
      const box = node.getBoundingClientRect();
      return { left: box.left - canvasBox.left, top: box.top - canvasBox.top, width: box.width, height: box.height };
    }

    function sizeText(node) {
      const box = node.getBoundingClientRect();
      return Math.round(box.width) + " × " + Math.round(box.height);
    }

    function drawBox(box, node) {
      const rect = rectOf(node);
      box.style.left = rect.left + "px";
      box.style.top = rect.top + "px";
      box.style.width = rect.width + "px";
      box.style.height = rect.height + "px";
      box.dataset.tag = node.dataset.label;
      box.dataset.size = sizeText(node);
      box.classList.add("is-visible");
    }

    function drawGap() {
      gap.classList.remove("is-visible", "is-vertical", "is-horizontal");
      if (!selected || !hovered || selected === hovered) {
        return;
      }
      const first = rectOf(selected);
      const second = rectOf(hovered);
      let upper = first;
      let lower = second;
      if (second.top < first.top) {
        upper = second;
        lower = first;
      }
      const vertical = lower.top - (upper.top + upper.height);
      if (vertical > 0) {
        const x = Math.max(upper.left, lower.left) + (Math.min(upper.left + upper.width, lower.left + lower.width) - Math.max(upper.left, lower.left)) / 2;
        gap.style.left = x + "px";
        gap.style.top = upper.top + upper.height + "px";
        gap.style.width = "";
        gap.style.height = vertical + "px";
        gapLabel.textContent = Math.round(vertical) + "px";
        gap.classList.add("is-visible", "is-vertical");
        return;
      }
      let leftBox = first;
      let rightBox = second;
      if (second.left < first.left) {
        leftBox = second;
        rightBox = first;
      }
      const horizontal = rightBox.left - (leftBox.left + leftBox.width);
      if (horizontal > 0) {
        const y = Math.max(leftBox.top, rightBox.top) + (Math.min(leftBox.top + leftBox.height, rightBox.top + rightBox.height) - Math.max(leftBox.top, rightBox.top)) / 2;
        gap.style.left = leftBox.left + leftBox.width + "px";
        gap.style.top = y + "px";
        gap.style.width = horizontal + "px";
        gap.style.height = "";
        gapLabel.textContent = Math.round(horizontal) + "px";
        gap.classList.add("is-visible", "is-horizontal");
      }
    }

    function hover(node) {
      hovered = node;
      if (node) {
        drawBox(hoverBox, node);
      } else {
        hoverBox.classList.remove("is-visible");
      }
      drawGap();
    }

    function choose(node) {
      if (selected === node) {
        selected = null;
        selectBox.classList.remove("is-visible");
        setStatus(scene, "Hover an element, then click it to select it.", "");
      } else {
        selected = node;
        drawBox(selectBox, node);
        setStatus(scene, "Selected " + node.dataset.label + ", " + sizeText(node) + ". Hover another element to see the gap. C copies the size.", "");
      }
      drawGap();
    }

    canvas.addEventListener("pointermove", (event) => {
      const node = event.target.closest(".sx-rl-part");
      if (node !== hovered) {
        hover(node);
      }
    });
    canvas.addEventListener("pointerleave", () => hover(null));
    canvas.addEventListener("click", (event) => {
      const node = event.target.closest(".sx-rl-part");
      if (node) {
        choose(node);
      }
    });
    canvas.addEventListener("keydown", (event) => {
      if (event.key === "c" || event.key === "C") {
        if (selected) {
          pageToast(mock.page, "Copied " + sizeText(selected));
        }
        return;
      }
      if (event.key === "ArrowDown" || event.key === "ArrowRight" || event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        let position = nodes.indexOf(hovered);
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          position = Math.min(position + 1, nodes.length - 1);
        } else {
          position = Math.max(position - 1, 0);
        }
        hover(nodes[position]);
        return;
      }
      if ((event.key === "Enter" || event.key === " ") && hovered) {
        event.preventDefault();
        choose(hovered);
      }
    });
    scene.onShow = () => {
      selected = null;
      selectBox.classList.remove("is-visible");
      choose(nodes[3]);
      hover(nodes[4]);
    };
    return scene;
  }

  function buildQrScene(item) {
    const mock = pageMock("sx-qr", "tabcmdr.com");
    const scene = { token: item.token, item, node: mock.page, rows: [], status: "", statusKey: "", tries: [], triesLabel: "Try" };
    const view = mock.view;
    view.append(createElement("span", "sx-qr-line sx-qr-heading"), createElement("span", "sx-qr-line"), createElement("span", "sx-qr-line is-short"));
    const overlay = createElement("div", "sx-qr-overlay");
    const card = createElement("div", "sx-qr-card");
    card.setAttribute("role", "dialog");
    card.setAttribute("aria-label", "QR Code for Current Page");
    const template = document.querySelector("[data-sx-qr]");
    if (template) {
      card.append(template.content.cloneNode(true));
    }
    const copy = createElement("button", "sx-qr-copy", "Copy Image");
    copy.type = "button";
    card.append(createElement("span", "sx-qr-url", "https://tabcmdr.com/"), copy);
    overlay.append(card);
    view.append(overlay);

    function open() {
      overlay.hidden = false;
      setStatus(scene, "Scan it with your phone's camera, or copy the image. Esc closes it.", "");
    }

    function close() {
      overlay.hidden = true;
      setStatus(scene, "Closed. Run QR Code for Current Page again to bring it back.", "");
    }

    copy.addEventListener("click", () => {
      pageToast(mock.page, "QR code copied");
      close();
    });
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        close();
      }
    });
    mock.page.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        close();
      }
    });
    scene.tries = [{ label: "Run QR Code for Current Page", value: "open" }];
    scene.onTry = () => open();
    open();
    return scene;
  }

  function buildScene(item) {
    if (item.scene === "qr") {
      return buildQrScene(item);
    }
    if (item.scene === "source") {
      return buildSourceScene(item);
    }
    if (item.scene === "answer") {
      return buildAnswerScene(item);
    }
    if (item.scene === "ai") {
      return buildAiScene(item);
    }
    if (item.scene === "emoji") {
      return buildEmojiScene(item);
    }
    if (item.scene === "todo") {
      return buildTodoScene(item);
    }
    if (item.scene === "rss") {
      return buildRssScene(item);
    }
    if (item.scene === "weather") {
      return buildWeatherScene(item);
    }
    if (item.scene === "screenshot") {
      return buildScreenshotScene(item);
    }
    if (item.scene === "colorpicker") {
      return buildColorScene(item);
    }
    return buildRulerScene(item);
  }

  function show(token) {
    if (!items.has(token) || token === current) {
      return;
    }
    current = token;
    const item = items.get(token);
    buttons.forEach((button) => {
      const isActive = button.dataset.sxItem === token;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    let scene = scenes.get(token);
    if (!scene) {
      scene = buildScene(item);
      scenes.set(token, scene);
    }
    frame.replaceChildren(scene.node);
    keyNode.replaceChildren(tokenFragment(token));
    titleNode.textContent = item.title;
    infoNode.textContent = item.info;
    linkNode.href = item.link;
    renderStatus(scene);
    renderTries(scene);
    if (scene.onShow) {
      scene.onShow();
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "mouse") {
        return;
      }
      window.clearTimeout(hoverTimer);
      hoverTimer = window.setTimeout(() => show(button.dataset.sxItem), 90);
    });
    button.addEventListener("pointerleave", () => window.clearTimeout(hoverTimer));
    button.addEventListener("focus", () => show(button.dataset.sxItem));
    button.addEventListener("click", () => show(button.dataset.sxItem));
  });

  root.classList.add("is-ready");
  show(buttons[0].dataset.sxItem);
}

function setupHeroCombo() {
  const combo = document.querySelector(".hero-combo");
  if (!combo || prefersReducedMotion || !("IntersectionObserver" in window)) {
    return;
  }
  const keys = [...combo.querySelectorAll(".keycap")];
  let timer = 0;

  function press() {
    keys.forEach((key, index) => {
      window.setTimeout(() => key.classList.add("is-pressed"), index * 150);
    });
    window.setTimeout(() => keys.forEach((key) => key.classList.remove("is-pressed")), keys.length * 150 + 220);
  }

  const observer = new IntersectionObserver((entries) => {
    window.clearInterval(timer);
    if (!entries[0].isIntersecting) {
      return;
    }
    press();
    timer = window.setInterval(press, 3500);
  });
  observer.observe(combo);
}

function setupHotkeyDemo() {
  const root = document.querySelector("[data-hotkey]");
  if (!root) {
    return;
  }
  const current = root.querySelector("[data-hotkey-current]");
  const openButton = root.querySelector("[data-hotkey-open]");
  const panel = root.querySelector("[data-hotkey-window]");
  const field = root.querySelector("[data-hotkey-field]");
  const fieldText = root.querySelector("[data-hotkey-field-text]");
  const hint = root.querySelector("[data-hotkey-hint]");
  const caption = root.querySelector("[data-hotkey-caption]");
  let keys = [];
  if (isMac) {
    keys = ["⌘", "K"];
  } else {
    keys = ["Ctrl", "K"];
  }
  let recording = false;

  function keyCaps(target, list) {
    target.replaceChildren(...list.map((key) => createElement("kbd", "step-key", key)));
  }

  function showField() {
    if (recording) {
      fieldText.textContent = "Type a shortcut";
      return;
    }
    if (isMac) {
      fieldText.textContent = keys.join("");
      return;
    }
    fieldText.textContent = keys.join("+");
  }

  function keyName(event) {
    if (/^Key[A-Z]$/.test(event.code)) {
      return event.code.slice(3);
    }
    if (/^Digit[0-9]$/.test(event.code)) {
      return event.code.slice(5);
    }
    return "";
  }

  function modifiers(event) {
    const list = [];
    if (isMac) {
      if (event.ctrlKey) {
        list.push("⌃");
      }
      if (event.altKey) {
        list.push("⌥");
      }
      if (event.shiftKey) {
        list.push("⇧");
      }
      if (event.metaKey) {
        list.push("⌘");
      }
      return list;
    }
    if (event.ctrlKey) {
      list.push("Ctrl");
    }
    if (event.altKey) {
      list.push("Alt");
    }
    if (event.shiftKey) {
      list.push("Shift");
    }
    return list;
  }

  openButton.addEventListener("click", () => {
    panel.hidden = false;
    caption.textContent = "Change opens the browser's own shortcuts page, where TabCmdr's shortcut is listed as Toggle Command Palette.";
    field.focus();
  });

  field.addEventListener("click", () => {
    recording = true;
    showField();
    hint.textContent = "Press the new shortcut. Esc cancels.";
  });

  field.addEventListener("blur", () => {
    recording = false;
    showField();
  });

  field.addEventListener("keydown", (event) => {
    if (!recording) {
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      recording = false;
      showField();
      hint.textContent = "Cancelled. The shortcut didn't change.";
      return;
    }
    if (["Meta", "Control", "Alt", "Shift"].includes(event.key)) {
      return;
    }
    event.preventDefault();
    const list = modifiers(event);
    const key = keyName(event);
    const hasMain = event.metaKey || event.ctrlKey || event.altKey;
    if (!key || !hasMain) {
      if (isMac) {
        hint.textContent = "Use a letter or number with ⌘, ⌃ or ⌥.";
      } else {
        hint.textContent = "Use a letter or number with Ctrl or Alt.";
      }
      return;
    }
    keys = list.concat([key]);
    recording = false;
    showField();
    keyCaps(current, keys);
    hint.textContent = "Saved. Press it on any page to open TabCmdr.";
    caption.textContent = "Your new shortcut now opens the palette on every page.";
  });

  showField();
  if (!isMac) {
    keyCaps(current, keys);
  }
}

function setupPermissionsDemo() {
  const root = document.querySelector("[data-permissions]");
  if (!root) {
    return;
  }
  const caption = root.querySelector("[data-permissions-caption]");
  root.querySelectorAll("[data-permission]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const isOn = !toggle.classList.contains("is-on");
      toggle.classList.toggle("is-on", isOn);
      toggle.setAttribute("aria-checked", String(isOn));
      if (isOn) {
        caption.textContent = toggle.dataset.permission + " is on. TabCmdr can now use it for " + toggle.dataset.uses + ".";
      } else {
        caption.textContent = toggle.dataset.permission + " is off. " + toggle.dataset.uses.charAt(0).toUpperCase() + toggle.dataset.uses.slice(1) + " will ask for it again first.";
      }
    });
  });
}

async function setupPricing() {
  const root = document.querySelector("[data-pricing]");
  if (!root || !window.fetch) {
    return;
  }
  const priceNode = root.querySelector("[data-price]");
  const url = root.dataset.pricingUrl;
  if (!url || !url.startsWith("/")) {
    return;
  }
  try {
    const response = await fetch(url, { headers: { Accept: "application/json" }, credentials: "same-origin" });
    if (!response.ok) {
      return;
    }
    const pricing = await response.json();
    const product = pricing && pricing.tabcmdr;
    if (!product || product.available !== true || product.currency !== "USD") {
      return;
    }
    const price = Number(product.price);
    if (!Number.isFinite(price) || price <= 0 || price > 1000) {
      return;
    }
    priceNode.textContent = price.toFixed(2);
  } catch {
    return;
  }
}

setupModifierLabels();
setupReveal();
setupHeader();
setupCounters();
setupHeroDemo();
setupRowActions();
setupCleanup();
setupAnswers();
setupAiDemo();
setupSites();
setupThemes();
setupShorthands();
setupShortcutExplorer();
setupHeroCombo();
setupHotkeyDemo();
setupPermissionsDemo();
setupPricing();
