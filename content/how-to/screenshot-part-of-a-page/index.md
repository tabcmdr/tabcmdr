---
title: "How to Screenshot Part of a Web Page in Chrome | TabCmdr"
linkTitle: "Screenshot part of a page"
description: "Drag a box over the part of a web page you want and copy it or save it as a PNG. Chrome DevTools can do it, and TabCmdr does it from ⌘K without DevTools."
ogTitle: "Screenshot just the part of the page you need"
ogDescription: "Press ⌘K, type screenshot area, press Enter and drag a box. TabCmdr copies the area or saves it as a PNG."
ogImage: screenshot-area-selecting.png
imageAlt: "A box being dragged over one card on a web page, with a purple label showing its size in pixels"
cardText: "Drag a box over the part of a page you want and copy it or save it as a PNG, with DevTools or with TabCmdr."
heading: "How to screenshot part of a web page in Chrome"
lead: "Chrome DevTools has a Capture area screenshot command. With TabCmdr, press ⌘K, type screenshot area, press Enter and drag a box over the part you want."
date: 2026-10-19
lastmod: 2026-10-19
weight: 370
group: page
icon: i-crop
feature: screenshots
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Capture an area in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux, on the page you want."
  - title: "Type screenshot area"
    typed: "screenshot area"
    text: "Pick the copy or the download command."
  - title: "Press Enter, then drag"
    keys: ["↵"]
    text: "Draw a box over the part you want and let go."
faqTitle: "Questions about area screenshots"
faq:
  - question: "How do I screenshot part of a page in Chrome?"
    answer: "In DevTools, open the Command Menu with Ctrl+Shift+P (⌘+Shift+P on a Mac), type `screenshot`, choose Capture area screenshot and drag over the part you want. With TabCmdr, press ⌘K or Ctrl+K, type `screenshot area`, press Enter and drag a box."
  - question: "How big is the saved image?"
    answer: "The label above the box shows its size in pixels while you drag, and the saved image has the same size. On a high-resolution display that's twice the size of the box on screen."
  - question: "Can I select more than what's on screen?"
    answer: "No. The area has to be inside the visible part of the page. For a whole page, use the Full Page Screenshot commands instead."
  - question: "How do I cancel?"
    answer: "Press Esc before you let go of the mouse. A box only a few pixels wide is also ignored, so a stray click captures nothing."
  - question: "Is the dark overlay in the screenshot?"
    answer: "No. TabCmdr removes the overlay and the box before it captures the area, so the image shows the page as it is."
relatedTitle: "Related features"
related:
  - screenshots
  - ruler
  - color-picker
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in area screenshot {.way-chrome}

Chrome's developer tools can capture an area of the page:

1. Open DevTools. Press {{< kbd "F12" >}} or {{< kbd "Ctrl" "Shift" "J" >}} on Windows and Linux, or {{< kbd "⌘" "Option" "I" >}} on a Mac.
2. Open the Command Menu with {{< kbd "Ctrl" "Shift" "P" >}}, or {{< kbd "⌘" "Shift" "P" >}} on a Mac.
3. Type `screenshot` and choose **Capture area screenshot**.
4. Drag to select the part of the page you want.

Area capture doesn't work when DevTools is undocked from the window.

Sources: Google's [Chrome DevTools Command Menu](https://developer.chrome.com/docs/devtools/command-menu) page and [Chrome keyboard shortcuts](https://support.google.com/chrome/answer/157179), checked in October 2026.

## Capture an area with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its Screenshot Area commands let you draw a box on the page and copy or save just that part, without opening DevTools.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette and type `screenshot area`

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux. Typing `screenshot area` shows two commands: **Screenshot Area - Copy to Clipboard** and **Screenshot Area - Download as PNG**.

{{< screenshot src="screenshot-area-commands.png" alt="TabCmdr palette with screenshot area typed, showing the Copy to Clipboard and Download as PNG area commands" caption="Pick whether the area goes to your clipboard or into a PNG file." >}}

### Step 2: Press Enter and drag a box

The palette closes, the page dims and the cursor turns into a crosshair. Press the mouse button at one corner of the area and drag to the opposite corner. A label above the box shows its size in pixels.

{{< screenshot src="screenshot-area-selecting.png" alt="A web page dimmed behind a purple selection box around one card, with a label reading 648 × 408" caption="The label shows the size the image will have, here 648 × 408 pixels." >}}

Press {{< kbd "Esc" >}} at any point to cancel without capturing anything.

### Step 3: Let go of the mouse

TabCmdr removes the box and the dimming, then captures the area. The copy command puts it on your clipboard and shows **Area copied** at the bottom of the page. The download command saves a PNG whose name starts with `screenshot-area-` and ends with the date and time, and shows **Area screenshot saved**.

{{< screenshot src="screenshot-area-result.png" alt="The saved area screenshot: one card from the page with its icon, heading and text, without the dimming or the selection box" caption="The saved PNG holds only the card that was inside the box." >}}

The box has to fit inside the visible part of the page. To capture everything, top to bottom, use the Full Page Screenshot commands instead.

If copying fails, the message reads **Copy failed - try download**, so run the download command instead. If a message reads **To capture, open TabCmdr from its toolbar icon or browser shortcut**, open the palette that way and try again.

## Capture just what's on screen {.way-tabcmdr}

Type `:ss` to open TabCmdr's screenshot menu. **Screenshot - Copy to Clipboard** and **Screenshot - Download as PNG** capture the visible part of the tab in one step, with no box to draw. They confirm with **Screenshot copied** or **Screenshot saved**, and their downloads are named `screenshot-` followed by the date and time.

{{< screenshot src="screenshot-tool-menu.png" alt="TabCmdr screenshot menu opened with :ss, listing Screenshot, Screenshot Area and Full Page Screenshot, each with Copy to Clipboard and Download as PNG" caption="`:ss` lists every screenshot command with a line on what it captures." >}}

The [screenshots feature page]({{< relref "/features/screenshots" >}}) covers the rest.
