---
title: Clipboard
weight: 9
---

## Overview

TabCmdr can copy things to your clipboard — URLs, screenshots, QR codes, and calculator results — when you explicitly trigger a copy action.

## Enabling Clipboard Access

Clipboard write access requires an optional permission. To enable it:

1. Open the TabCmdr **Settings** page.
2. Find the **Clipboard** toggle and turn it on.
3. Confirm the permission in the browser prompt.

## What TabCmdr Can Copy

| Item | How to trigger |
|---|---|
| Current page URL | Run the "Copy URL" command |
| URL as Markdown link | Run the "Copy URL as Markdown" command |
| Screenshot image | Capture a screenshot, then choose "Copy to clipboard" |
| QR code image | Generate a QR code, then choose "Copy to clipboard" |
| Calculator result | Type a math expression and press **`Enter`** |

## What TabCmdr Does NOT Do

- TabCmdr **never reads** your clipboard. It only writes to it.
- Clipboard access is only used when you explicitly run a copy command — never automatically.

## Privacy

Nothing from your clipboard is ever stored or transmitted. Write operations happen entirely within your browser.
