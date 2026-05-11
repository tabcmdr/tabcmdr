(function () {
  const browsers = {
    arc: { name: "Arc", icon: "/icons/browsers/arc.svg" },
    brave: { name: "Brave", icon: "/icons/browsers/brave.svg" },
    chrome: { name: "Chrome", icon: "/icons/browsers/chrome.svg" },
    chromium: { name: "Chromium", icon: "/icons/browsers/chromium.svg" },
    edge: { name: "Edge", icon: "/icons/browsers/edge.svg" },
    opera: { name: "Opera", icon: "/icons/browsers/opera.svg" },
    vivaldi: { name: "Vivaldi", icon: "/icons/browsers/vivaldi.svg" }
  };

  function getBrandText() {
    const brands = navigator.userAgentData && Array.isArray(navigator.userAgentData.brands)
      ? navigator.userAgentData.brands
      : [];

    return brands.map((brand) => brand.brand.toLowerCase()).join(" ");
  }

  function hasBrand(brandText, brand) {
    return brandText.includes(brand.toLowerCase());
  }

  async function isBrave() {
    try {
      return Boolean(navigator.brave && await navigator.brave.isBrave());
    } catch {
      return false;
    }
  }

  async function detectBrowser() {
    const ua = navigator.userAgent || "";
    const brandText = getBrandText();

    if (await isBrave()) return "brave";
    if (hasBrand(brandText, "Microsoft Edge") || /\bEdgA?\//.test(ua)) return "edge";
    if (hasBrand(brandText, "Opera") || /\bOPR\//.test(ua)) return "opera";
    if (hasBrand(brandText, "Vivaldi") || /\bVivaldi\//.test(ua)) return "vivaldi";
    if (hasBrand(brandText, "Arc") || /\bArc\//.test(ua)) return "arc";
    if (hasBrand(brandText, "Google Chrome") || /\bChrome\//.test(ua)) return "chrome";
    if (hasBrand(brandText, "Chromium") || /\bChromium\//.test(ua)) return "chromium";

    return "chrome";
  }

  function updateCtas(browserKey) {
    const browser = browsers[browserKey] || browsers.chrome;

    document.querySelectorAll("[data-install-browser-cta]").forEach((cta) => {
      const icon = cta.querySelector("[data-install-browser-icon]");
      const label = cta.querySelector("[data-install-browser-label]");
      const text = "Install for " + browser.name;

      if (icon) icon.src = browser.icon;
      if (label) label.textContent = text;
      cta.setAttribute("aria-label", text);
    });
  }

  detectBrowser().then(updateCtas);
})();
