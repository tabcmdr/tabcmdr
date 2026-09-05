---
title: Tab Search & Switching
description: "Search all your open tabs and switch to any one instantly with TabCmdr. Works across all windows - no mouse needed."
weight: 2
---

## Overview

TabCmdr lets you search all your open tabs and jump to any one of them instantly - no scrolling through a tab bar, no hunting with the mouse.

This feature is always available. It uses the `tabs` permission, which is granted automatically when you install the extension.

## How It Works

1. Open the palette with **`⌘ K`** / **`Ctrl K`**.
2. Start typing any part of a tab's title or URL.
3. Matching tabs appear in the results list.
4. Press **`Enter`** to switch to the selected tab.

TabCmdr searches across all open windows, not just the current one.

## What You Can See

Each tab result shows:

- **Favicon** - the site's icon for quick visual recognition
- **Title** - the page title
- **URL** - the full address

## Tab State Indicators

Results reflect the current state of each tab:

| State | What it means |
|---|---|
| Pinned | The tab is pinned in the tab bar |
| Muted | Audio is muted on that tab |
| Active | The tab is currently focused |

## Tab Groups (Chrome only)

If you have the **tabGroups** optional permission enabled, TabCmdr can also show which group a tab belongs to. See [Tab Groups]({{< relref "tab-groups" >}}) for more.

## Privacy

Tab data (titles, URLs, favicons) is loaded into memory when you open the palette and discarded the moment you close it. Nothing is written to storage or sent anywhere.
