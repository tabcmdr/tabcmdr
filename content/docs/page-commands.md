---
title: Page Commands
description: "Run page actions from TabCmdr's palette: scroll, zoom, print, screenshot, copy URL, generate QR codes, and calculate math - no mouse required."
weight: 8
---

## Overview

TabCmdr includes a set of commands that act directly on the page you're currently viewing. These are always available - no extra permissions needed beyond the required `activeTab` permission.

Open the palette and type any of the command names below to find and run them.

## Scrolling

| Command | What it does |
|---|---|
| Scroll to top | Jumps to the very top of the page |
| Scroll to bottom | Jumps to the very bottom of the page |
| Scroll up | Scrolls the page up by one viewport |
| Scroll down | Scrolls the page down by one viewport |

## Zoom

| Command | What it does |
|---|---|
| Zoom in | Increases the page zoom level |
| Zoom out | Decreases the page zoom level |
| Reset zoom | Restores the page to 100% zoom |

## Printing

| Command | What it does |
|---|---|
| Print | Opens the browser's print dialog for the current page |

## Screenshots

| Command | What it does |
|---|---|
| Capture screenshot | Takes a screenshot of the visible area of the current tab |

After capturing, you can copy the screenshot image to your clipboard (requires the **clipboardWrite** optional permission - see [Clipboard]({{< relref "clipboard" >}})).

## Copying the Current URL

| Command | What it does |
|---|---|
| Copy URL | Copies the current page's URL to your clipboard |
| Copy URL as Markdown | Copies the URL formatted as a Markdown link `[title](url)` |

## QR Code

| Command | What it does |
|---|---|
| Generate QR code | Creates a QR code for the current page URL |

The QR code appears in the palette. You can copy it to your clipboard to share it.

## Calculator

TabCmdr has a built-in calculator. Type a math expression directly in the palette (e.g., `12 * 8` or `(100 + 50) / 3`) and the result appears instantly. Press **`Enter`** to copy the result to your clipboard.
