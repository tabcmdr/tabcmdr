---
title: Settings & Customization
description: "Customize TabCmdr's appearance, manage optional permissions, reorder result categories, set your search engine, and configure site shortcuts and disabled domains."
weight: 10
---

## Opening Settings

Click the TabCmdr extension icon in your browser toolbar and select **Settings**, or search for "settings" in the palette and press **`Enter`**.

## Appearance

### Theme

Choose how TabCmdr looks:

| Option | Description |
|---|---|
| System | Follows your OS light/dark mode preference (default) |
| Light | Always uses the light theme |
| Dark | Always uses the dark theme |

### Compact Mode

Enable **Compact mode** to reduce the size of the palette and show more results in less vertical space. Useful on smaller screens.

### Palette Position

Choose where the palette appears on screen:

- **Center** (default) - appears in the middle of the viewport
- **Top** - appears near the top of the screen

## Permissions

The Settings page is where you enable or disable all optional features. Each toggle maps to a browser permission:

| Toggle | Permission | Feature unlocked |
|---|---|---|
| Bookmarks | `bookmarks` | Search and open bookmarks |
| History | `history` | Search browsing history |
| Downloads | `downloads` | Search and manage downloads |
| Recently Closed | `sessions` | Restore recently closed tabs |
| Clipboard | `clipboardWrite` | Copy URLs, screenshots, QR codes |
| Tab Groups | `tabGroups` | Manage Chrome tab groups |

You can revoke any optional permission at any time by toggling it off.

## Tab Order

Control the order in which result categories appear in the palette. Drag and drop the categories in the Settings page to reorder them to your preference.

## Search Engine

Choose which search engine TabCmdr uses when you type a query that doesn't match any tabs, bookmarks, or history. The selected engine opens in a new tab when you press **`Enter`** on a plain search query.

## Site Shortcuts

Configure custom shortcuts for sites you visit frequently. A site shortcut lets you type a short keyword in the palette to jump directly to a URL.

## Disabled Domains

Add domains to the disabled list to prevent TabCmdr from injecting the palette on those pages. Useful for sites where the keyboard shortcut conflicts with the page's own functionality.

To disable a domain:
1. Open Settings.
2. Find the **Disabled Domains** section.
3. Add the domain (e.g., `app.example.com`).

TabCmdr will no longer activate on pages matching that domain.

## Settings Sync

Your settings are stored in `browser.storage.sync` and automatically synced across all devices where you're signed into the same browser account. No TabCmdr account or server is involved - sync happens entirely through your browser.
