---
title: "How to Find a Color Code on Any Website | TabCmdr"
linkTitle: "Find a color code on a website"
description: "Find the HEX code of any color on a web page. Use the eyedropper in Chrome DevTools, or press ⌘K with TabCmdr, click the color and its HEX code is copied."
ogTitle: "Get the HEX code of any color on a page"
ogDescription: "Press ⌘K, type pick color and click any pixel. TabCmdr copies its HEX code and shows the RGB value too."
ogImage: color-picker-magnifier.png
imageAlt: "TabCmdr color picker magnifier over a purple button, showing #4F46E5 and rgb(79, 70, 229)"
cardText: "Click any color on a page to copy its HEX code, with the DevTools eyedropper or with TabCmdr's color picker."
heading: "How to find a color code on any website"
lead: "In Chrome DevTools, open the Color Picker from the Styles pane and use its eyedropper. With TabCmdr, press ⌘K, type pick color and click any pixel to copy its HEX code."
date: 2026-10-19
lastmod: 2026-10-19
weight: 380
group: page
icon: i-pipette
feature: color-picker
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Copy a color in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux, on the page with the color."
  - title: "Type pick color"
    typed: "pick color"
    text: "Press Enter on Pick Color from Screen."
  - title: "Click the color"
    keys: ["↵"]
    text: "Its HEX code is copied to your clipboard."
faqTitle: "Questions about picking colors"
faq:
  - question: "How do I find the HEX code of a color on a website?"
    answer: "In Chrome DevTools, select an element, click the color square next to a color in the Styles pane, then use the eyedropper and click the color. With TabCmdr, press ⌘K or Ctrl+K, type `pick color`, press Enter and click the color. TabCmdr copies its HEX code."
  - question: "Does TabCmdr copy the RGB value too?"
    answer: "A click copies the HEX code, such as `#4F46E5`. The magnifier shows the RGB value while you point. To get RGB or HSL as text, type the HEX code followed by `to rgb` or `to hsl` in the palette."
  - question: "Why doesn't the page move while I pick?"
    answer: "TabCmdr takes a picture of the visible page when the picker opens and you pick from that picture. What you see stays still until you click or press Esc, even on a page with video or animation."
  - question: "Can I pick a color outside the browser?"
    answer: "No. TabCmdr picks from the visible part of the current tab only."
  - question: "How do I cancel without copying?"
    answer: "Press Esc. The page goes back to normal and nothing is copied."
relatedTitle: "Related features"
related:
  - color-picker
  - color-conversion
  - ruler
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in eyedropper {.way-chrome}

Chrome's developer tools have a color picker with an eyedropper:

1. Open DevTools. Press {{< kbd "F12" >}} or {{< kbd "Ctrl" "Shift" "J" >}} on Windows and Linux, or {{< kbd "⌘" "Option" "I" >}} on a Mac.
2. Select an element in the **Elements** panel.
3. In the **Styles** pane, find a `color` or other color declaration and click the small preview square next to it. The Color Picker opens.
4. Click the eyedropper button, or press {{< kbd "C" >}}.
5. Hover over the color you want and click to sample it. Press {{< kbd "Esc" >}} to turn the eyedropper off.

Sources: Google's [DevTools Color Picker](https://developer.chrome.com/docs/devtools/css/color) page and [Chrome keyboard shortcuts](https://support.google.com/chrome/answer/157179), checked in October 2026.

## Pick a color with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its color picker works on the page you're looking at, with no DevTools panel to dig through.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette and type `pick color`

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, type `pick color` and press {{< kbd "Enter" >}} on **Pick Color from Screen**. Typing `:cp` opens the picker straight away, without pressing Enter.

{{< screenshot src="color-picker-command.png" alt="TabCmdr palette with pick color typed, showing the Pick Color from Screen command and the Color Picker tool" caption="Pick Color from Screen is a command. The Color Picker tool below it does the same and has the `:cp` shortcut." >}}

### Step 2: Point at the color

The page darkens and a round magnifier follows your cursor. It shows the pixels around the cursor, enlarged, with the HEX and RGB values of the pixel in the middle.

{{< screenshot src="color-picker-magnifier.png" alt="TabCmdr color picker magnifier over a purple Start free button, with a label reading #4F46E5 and rgb(79, 70, 229)" caption="Over the purple button, the magnifier reads `#4F46E5` and `rgb(79, 70, 229)`." >}}

TabCmdr picks from a picture of the visible page taken when the picker opened, so the screen holds still while you point, even on a page with video or animation.

### Step 3: Click to copy

Click and the HEX code goes to your clipboard. The page returns to normal and a short message at the bottom confirms the code, such as **Copied #4F46E5**. Press {{< kbd "Esc" >}} instead to close the picker without copying.

{{< screenshot src="color-picker-copied.png" alt="The web page back to normal with a message at the bottom reading Copied #4F46E5" caption="After the click, TabCmdr confirms the HEX code it copied." >}}

If the copy doesn't go through, the message reads **Copy failed: #4F46E5** instead, so you can still note the code. If the picker doesn't open and a message reads **To capture, open TabCmdr from its toolbar icon or browser shortcut**, open the palette that way and try again.

## Turn the HEX code into RGB or HSL {.way-tabcmdr}

Paste the code into the palette and add `to rgb`. `#4F46E5 to rgb` gives `rgb(79, 70, 229)`, and {{< kbd "Enter" >}} copies the result. `to hsl` works the same way.

{{< screenshot src="color-hex-to-rgb.png" alt="TabCmdr palette with #4F46E5 to rgb typed, showing the calculator result rgb(79, 70, 229) with a Copy hint" caption="The palette converts the copied code into other color formats." >}}

The [color picker feature page]({{< relref "/features/color-picker" >}}) and [color conversion]({{< relref "/features/color-conversion" >}}) cover more formats.
