---
title: "How to Convert Units Like km to Miles in Chrome | TabCmdr"
linkTitle: "Convert units like km to miles"
description: "Convert kilometers to miles, kilograms to pounds or Fahrenheit to Celsius from any page: type it in the TabCmdr palette and press Enter to copy the answer."
ogTitle: "Convert km to miles without a converter site"
ogDescription: "Type 100 km to miles or 350 f to c in the TabCmdr palette. The answer shows as you type, and Enter copies it."
ogImage: units-km-to-miles.png
imageAlt: "TabCmdr palette with 100 km to miles typed and the answer 62.1371192237 miles at the top"
cardText: "Convert distances, weights, temperatures, speeds and data sizes from the page you're on."
heading: "How to convert units like km to miles in Chrome"
lead: "Press ⌘K with TabCmdr and type the conversion, like 100 km to miles or 350 f to c. The answer shows as you type, and Enter copies it."
date: 2026-10-19
lastmod: 2026-10-19
weight: 510
group: answers
icon: i-sync
feature: calculator
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Convert a unit in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type the conversion"
    typed: "100 km to miles"
    text: "A number, its unit, then to and the unit you want."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The answer is copied, ready to paste."
faqTitle: "Questions about converting units"
faq:
  - question: "How do I convert kilometers to miles?"
    answer: "Type `100 km to miles` in the TabCmdr palette. The answer, 62.1371192237 miles, shows at the top of the list, and Enter copies it."
  - question: "How do I convert Fahrenheit to Celsius?"
    answer: "Type `350 f to c`, which gives 176.666666667 °C. It works the other way too: `100 c to f` gives 212 °F. You can also write the names in full, like `20 celsius to fahrenheit`."
  - question: "Is 1 GB 1,000 MB or 1,024 MB?"
    answer: "TabCmdr uses 1,000, so `2.5 gb in mb` gives 2500 mb."
  - question: "Can it convert currencies?"
    answer: "No. TabCmdr converts units of measurement, and it doesn't fetch exchange rates."
  - question: "Does it work offline?"
    answer: "Yes. Conversions are worked out inside TabCmdr on your computer, so they don't need an internet connection."
relatedTitle: "Related features"
related:
  - calculator
  - time-zones
  - color-conversion
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Use Google Search's unit converter {.way-chrome}

Google Search has a unit converter. Type your conversion into the search box on google.com, or search for `unit converter` to open it on its own. Google's own example is Celsius to Fahrenheit or cups to liters.

You can search from Chrome's address bar too. If Google is your default search engine, type the conversion there and press Enter. In some countries Google is Chrome's default, and in others Chrome asks you to pick one.

Sources: Google's [calculator and unit converter](https://support.google.com/websearch/answer/3284611) and [default search engine](https://support.google.com/chrome/answer/95426) help pages, checked in October 2026.

## Convert units in the TabCmdr palette {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its search box converts units as you type, so you get the answer without opening a converter site.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type the number, its unit and the unit you want

Write a number, its unit, then `to`, `in` or `as`, and the unit you want. The answer shows under **Calculator** at the top of the list.

{{< screenshot src="units-km-to-miles.png" alt="TabCmdr palette with 100 km to miles typed and the answer 62.1371192237 miles under Calculator" caption="`100 km to miles` gives 62.1371192237 miles." >}}

Short and long unit names both work, so `5 km as miles` and `5 kilometers to miles` both give 3.10685596119 miles. For temperatures, `c`, `f` and `k` stand for Celsius, Fahrenheit and Kelvin.

{{< screenshot src="units-oven-temperature.png" alt="TabCmdr palette with 350 f to c typed and the answer 176.666666667 °C under Calculator" caption="Oven at 350 °F? `350 f to c` gives 176.666666667 °C." >}}

### Step 3: Press Enter to copy

The answer row is already highlighted. Press {{< kbd "Enter" >}} and TabCmdr copies the answer and closes the palette. For `100 km to miles`, a "Copied 62.1371192237 miles" message shows at the bottom of the page.

## Conversions you can type {.way-tabcmdr}

| You type | You get |
|---|---|
| `90 kg in lbs` | 198.416035966 lbs |
| `6 ft to cm` | 182.88 cm |
| `12 inches to cm` | 30.48 cm |
| `1 gallon to liters` | 3.785411784 liters |
| `30 mph to kph` | 48.28032 kph |
| `12 mpg to kpl` | 5.10172448916 kpl |
| `3 hours to minutes` | 180 minutes |
| `100 c to f` | 212 °F |
| `2.5 gb in mb` | 2500 mb |

Data sizes count in thousands, so a gigabyte is 1,000 megabytes. TabCmdr also knows data rates like `mbps`, frequencies like `ghz`, energy like `kwh`, pressure like `kpa` and volumes like `ml`.

Answers are rounded to 12 significant digits.

## If no answer shows up {.way-tabcmdr}

- **The connecting word is missing.** Put `to`, `in` or `as` between the two units.
- **It's a currency.** TabCmdr doesn't convert money, so `1 usd to eur` gives no answer.
- **You need a sum instead.** Percentages and math work in the same box, like `20% of 4500`. The [calculator page]({{< relref "/features/calculator" >}}) has more examples.
