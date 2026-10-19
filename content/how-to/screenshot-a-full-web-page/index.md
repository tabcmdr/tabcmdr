---
title: "How to Screenshot a Full Web Page in Chrome | TabCmdr"
linkTitle: "Screenshot a full web page"
description: "Capture an entire web page, top to bottom, as one PNG in Chrome. Use the DevTools device toolbar, or press ⌘K with TabCmdr and run Full Page Screenshot."
ogTitle: "Capture a whole web page in one image"
ogDescription: "Press ⌘K, type full page and press Enter. TabCmdr scrolls the page for you and joins it into one PNG you can copy or save."
ogImage: full-page-screenshot-commands.png
imageAlt: "TabCmdr palette with full page typed, showing the Full Page Screenshot commands"
cardText: "Save a whole page, top to bottom, as one PNG, with DevTools or with a TabCmdr command that scrolls the page for you."
heading: "How to screenshot a full web page in Chrome"
lead: "In Chrome, open DevTools, turn on the device toolbar and pick its full size screenshot option. With TabCmdr, press ⌘K, type full page and press Enter."
date: 2026-10-19
lastmod: 2026-10-19
weight: 360
group: page
icon: i-camera
feature: screenshots
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Capture a whole page in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux, on the page you want."
  - title: "Type full page"
    typed: "full page"
    text: "The two Full Page Screenshot commands come first."
  - title: "Press Enter"
    keys: ["↵"]
    text: "TabCmdr scrolls the page and joins it into one image."
faqTitle: "Questions about full page screenshots"
faq:
  - question: "How do I screenshot an entire web page in Chrome?"
    answer: "Open DevTools with F12 or Ctrl+Shift+J (⌘+Option+I on a Mac), click Toggle device toolbar, then open the More options menu in the device toolbar and pick the full size screenshot option. With TabCmdr, press ⌘K or Ctrl+K, type `full page` and press Enter on one of the Full Page Screenshot commands."
  - question: "Where does TabCmdr save the screenshot?"
    answer: "The Download as PNG command saves it like any other download, with a name that starts with `screenshot-fullpage-` and ends with the date and time. The Copy to Clipboard command puts the image on your clipboard instead, ready to paste."
  - question: "Is there a size limit?"
    answer: "Yes. TabCmdr captures up to 16,000 pixels of page height. On a longer page, the image stops at that point. The width matches the page area of your browser window."
  - question: "Why does the page header show up more than once?"
    answer: "TabCmdr scrolls down one screen at a time and joins the captures. A header that stays fixed at the top of the window is on screen in every capture, so it can appear in each part of the image."
  - question: "Does the screenshot leave my computer?"
    answer: "No. TabCmdr makes the image in your browser and sends it only to your clipboard or your downloads."
relatedTitle: "Related features"
related:
  - screenshots
  - color-picker
  - qr-code
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in full page screenshot {.way-chrome}

Chrome can capture a whole page from its developer tools:

1. Open DevTools. Press {{< kbd "F12" >}} or {{< kbd "Ctrl" "Shift" "J" >}} on Windows and Linux, or {{< kbd "⌘" "Option" "I" >}} on a Mac.
2. Click **Toggle device toolbar** in the DevTools action bar.
3. Open the **More options** menu in the device toolbar and pick the full size screenshot option.

The same menu has **Capture screenshot** for just the part you can see.

Sources: Google's [Chrome DevTools device mode](https://developer.chrome.com/docs/devtools/device-mode) page and [Chrome keyboard shortcuts](https://support.google.com/chrome/answer/157179), checked in October 2026.

## Capture the whole page with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its Full Page Screenshot command scrolls the page for you and joins every screen into one image, without opening DevTools.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette on the page

Go to the page you want to capture and press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux.

### Step 2: Type `full page`

Two commands come first. **Full Page Screenshot - Copy to Clipboard** puts the image on your clipboard. **Full Page Screenshot - Download as PNG** saves it as a file. Below them are the commands that capture only the visible part of the page.

{{< screenshot src="full-page-screenshot-commands.png" alt="TabCmdr palette with full page typed, listing the two Full Page Screenshot commands and the two visible area Screenshot commands" caption="Typing `full page` puts the two Full Page Screenshot commands at the top." >}}

### Step 3: Press Enter

Press {{< kbd "Enter" >}} to copy, or press {{< kbd "↓" >}} once and then {{< kbd "Enter" >}} to download. The palette closes, TabCmdr scrolls down the page one screen at a time, then scrolls back to where you were. A message at the bottom of the page confirms it: **Full page screenshot copied** or **Full page screenshot saved**.

The download's name starts with `screenshot-fullpage-` and ends with the date and time. It's saved at your screen's resolution, so on a high-resolution display the image has twice as many pixels across as the page area of your window.

{{< screenshot src="full-page-screenshot-result.png" alt="A full page screenshot saved by TabCmdr, showing an example blog article from its header to the last paragraph in one image" caption="The saved PNG holds the whole article, from the header to the last paragraph." >}}

### What to expect

- **Height limit.** TabCmdr captures up to 16,000 pixels of page height. Longer pages are cut off at that point.
- **Width.** The image is as wide as the page area of your browser window.
- **Fixed headers.** A header that stays at the top while you scroll is in every screen TabCmdr captures, so it can appear more than once in the image.
- **Short pages.** If the page fits on one screen, you get a regular screenshot of that screen.
- **If copying fails.** The message reads **Copy failed - try download**. Run Full Page Screenshot - Download as PNG instead.
- **If capturing fails.** A message reading **To capture, open TabCmdr from its toolbar icon or browser shortcut** means just that: open the palette that way and run the command again.

## Other ways to capture a page {.way-tabcmdr}

Type `:ss` to open TabCmdr's screenshot menu. It lists all six screenshot commands with a line on what each one does: the visible part of the tab, an area you draw, or the full page, each with a copy and a download version.

{{< screenshot src="screenshot-tool-menu.png" alt="TabCmdr screenshot menu opened with :ss, listing Screenshot, Screenshot Area and Full Page Screenshot, each with Copy to Clipboard and Download as PNG" caption="`:ss` opens the screenshot menu with all six commands." >}}

The [screenshots feature page]({{< relref "/features/screenshots" >}}) covers the rest.
