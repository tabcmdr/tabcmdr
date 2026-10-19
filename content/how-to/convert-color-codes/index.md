---
title: "How to Convert Color Codes for CSS | TabCmdr"
linkTitle: "Convert color codes for CSS"
description: "Convert a CSS color between HEX, RGB, HSL, OKLCH, Lab and Display P3 from the page you're on: type the color and a format in the TabCmdr palette, then copy."
ogTitle: "Any CSS color code, in the format you need"
ogDescription: "Type rgb(26, 115, 232) to hex or #1a73e8 to oklch in the TabCmdr palette. The answer shows as you type, and Enter copies it."
ogImage: color-rgb-to-hex.png
imageAlt: "TabCmdr palette with rgb(26, 115, 232) to hex typed and the answer #1a73e8 at the top"
cardText: "Switch a color between HEX, RGB, HSL, OKLCH, Lab, Display P3 and more, then copy it for your CSS."
heading: "How to convert color codes for CSS"
lead: "Press ⌘K with TabCmdr and type a color and the format you want, like rgb(26, 115, 232) to hex or #1a73e8 to oklch. Enter copies the CSS value."
date: 2026-10-19
lastmod: 2026-10-19
weight: 540
group: answers
icon: i-palette
feature: color-conversion
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Convert a color in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type the color and format"
    typed: "tomato to hex"
    text: "The converted color shows at the top of the list."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The value is copied, ready to paste into your CSS."
faqTitle: "Questions about converting colors"
faq:
  - question: "How do I convert RGB to HEX?"
    answer: "Type the color and `to hex`, like `rgb(26, 115, 232) to hex`, which gives #1a73e8. Three plain numbers work too: `26 115 232 to hex`."
  - question: "Can I convert a HEX color to OKLCH or Display P3?"
    answer: "Yes. `#1a73e8 to oklch` gives oklch(0.573697468129 0.194602948853 257.857761126), and `#1a73e8 to p3` gives a color(display-p3 ...) value. Press Enter to copy the full value."
  - question: "What happens to transparency?"
    answer: "It's kept. `rgba(240, 1, 61, 0.5) to hex` gives the 8-digit HEX #f0013d80."
  - question: "Does it convert to CMYK, HSV or Pantone?"
    answer: "No. TabCmdr sticks to color formats you can use in CSS. Google's color picker converts to CMYK and HSV, and reads Pantone codes."
  - question: "Can I type a color name?"
    answer: "Yes. CSS color names work, so `tomato to hex` gives #ff6347 and `rebeccapurple to rgb` gives rgb(102, 51, 153)."
relatedTitle: "Related features"
related:
  - color-conversion
  - color-picker
  - calculator
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Use Google's color picker {.way-chrome}

Google Search has a color picker. Type a color code into the search box on google.com, like `rgb 255 255 255` or `#f0f0f0`, or search for `color picker` to open it. It reads Hex, RGB and Pantone codes and shows the color as Hex, RGB, HSV, HSL and CMYK.

You can search from Chrome's address bar too. If Google is your default search engine, type the color code there and press Enter. In some countries Google is Chrome's default, and in others Chrome asks you to pick one.

Sources: Google's [calculator, unit converter and color codes](https://support.google.com/websearch/answer/3284611) and [default search engine](https://support.google.com/chrome/answer/95426) help pages, checked in October 2026.

## Convert colors in the TabCmdr palette {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its search box converts colors into the formats you write in CSS, including newer ones like OKLCH and Display P3.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type the color, then `to` and the format

The answer shows under **Calculator** at the top of the list.

{{< screenshot src="color-rgb-to-hex.png" alt="TabCmdr palette with rgb(26, 115, 232) to hex typed and the answer #1a73e8 under Calculator" caption="`rgb(26, 115, 232) to hex` gives #1a73e8." >}}

You can start from almost any way of writing a color:

- HEX with or without the `#`, like `#1a73e8` or `1a73e8`, and short codes like `#0af`, which gives rgb(0, 170, 255).
- CSS functions like `rgb(26, 115, 232)`, `rgba(240, 1, 61, 0.5)` or `hsl(217, 82%, 51%)`.
- Three plain numbers for red, green and blue, like `26 115 232`.
- CSS color names, like `tomato` or `rebeccapurple`.

{{< screenshot src="color-name-to-hex.png" alt="TabCmdr palette with tomato to hex typed and the answer #ff6347 under Calculator" caption="Color names work too: `tomato to hex` gives #ff6347." >}}

### Step 3: Press Enter to copy

The answer row is already highlighted. Press {{< kbd "Enter" >}} and TabCmdr copies the value and closes the palette. A "Copied #1a73e8" message shows at the bottom of the page. Long values, like OKLCH or Lab, can be cut short on screen, but Enter always copies the whole value.

## Formats you can convert to {.way-tabcmdr}

Here's `#1a73e8` in each common format:

| You type | You get |
|---|---|
| `#1a73e8 to rgb` | rgb(26, 115, 232) |
| `#1a73e8 to rgba` | rgba(26, 115, 232, 1) |
| `#1a73e8 to hsl` | hsl(214.08, 81.75%, 50.59%) |
| `#1a73e8 to hex8` | #1a73e8ff |
| `#1a73e8 to oklch` | oklch(0.573697468129 0.194602948853 257.857761126) |
| `#1a73e8 to lab` | lab(48.7749556744 9.68722690445 -67.4701979581) |
| `#1a73e8 to p3` | color(display-p3 0.217826055877 0.444343039479 0.879437765126) |

TabCmdr also converts to `hwb`, `lch`, `oklab`, `rec2020`, `a98`, `prophoto`, `xyz50` and `xyz65`. A color with transparency keeps it: `rgba(240, 1, 61, 0.5) to hex` gives #f0013d80.

## If no answer shows up {.way-tabcmdr}

- **The format isn't a CSS one.** CMYK, HSV and Pantone aren't supported, so `#1a73e8 to cmyk` gives no answer. Use Google's color picker for those.
- **The color code is incomplete.** A HEX color needs 3, 4, 6 or 8 digits.
- **You need a color from the page itself.** The [color picker]({{< relref "/features/color-picker" >}}) grabs any color on screen.
