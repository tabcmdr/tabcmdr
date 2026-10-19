---
title: Page Commands
description: "Run page actions from TabCmdr's palette: scroll, zoom, print, screenshot, copy URL, generate QR codes, and calculate math — no mouse required."
weight: 8
---

## Overview

TabCmdr includes a set of commands that act directly on the page you're currently viewing. These are always available — no extra permissions needed beyond the required `activeTab` permission.

Open the palette and type any of the command names below to find and run them.

## Scrolling

| Command | What it does |
|---|---|
| Scroll to Top | Jumps to the very top of the page |
| Scroll to Bottom | Jumps to the very bottom of the page |

## Zoom

| Command | What it does |
|---|---|
| Zoom In | Increases the page zoom level |
| Zoom Out | Decreases the page zoom level |
| Reset Zoom | Restores the page to 100% zoom |

## Printing

| Command | What it does |
|---|---|
| Print Page | Opens the browser's print dialog for the current page |

## Screenshots

| Command | What it does |
|---|---|
| Screenshot - Copy to Clipboard | Copies the visible area of the current tab |
| Screenshot - Download as PNG | Saves the visible area of the current tab as a PNG |
| Screenshot Area - Copy to Clipboard | Copies an area you drag out |
| Screenshot Area - Download as PNG | Saves an area you drag out as a PNG |
| Full Page Screenshot - Copy to Clipboard | Copies the whole page, top to bottom |
| Full Page Screenshot - Download as PNG | Saves the whole page as a PNG |

After capturing, you can copy the screenshot image to your clipboard (requires the **clipboardWrite** optional permission — see [Clipboard]({{< relref "clipboard" >}})).

## Copying the Current URL

| Command | What it does |
|---|---|
| Copy Page URL | Copies the current page's URL to your clipboard |
| Copy Page Title | Copies the current page's title to your clipboard |

## QR Code

| Command | What it does |
|---|---|
| QR Code for Current Page | Creates a QR code for the current page URL |

The QR code appears in the palette. You can copy it to your clipboard to share it.

## Calculator

TabCmdr has a built-in calculator. Type a math expression directly in the palette (e.g., `12 * 8` or `(100 + 50) / 3`) and the result appears instantly. Press **`Enter`** to copy the result to your clipboard.
