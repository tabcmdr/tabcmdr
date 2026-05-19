---
title: TabCmdr Privacy Policy
description: "TabCmdr's full privacy policy. Everything runs locally — no data collection, no tracking, no servers. Understand every permission the extension uses."
weight: 10
---

TabCmdr is a command palette for your browser. It runs entirely inside your browser. We do not operate servers, collect data, or track you in any way.

This document explains every permission the extension requests, exactly what each one is used for, and what data goes where.

## The short version

- Everything runs locally on your device.
- No analytics. 
- No telemetry. 
- No tracking pixels. 
- No cookies.
- Your browsing data (tabs, bookmarks, history, downloads) never leaves your browser.
- The only network request the extension ever makes is to Gumroad's API to verify a license key and only when you explicitly activate or re-validate a license.
- Your settings sync across your devices using your browser's built-in sync storage. We never see them.


## Permissions explained

TabCmdr uses two types of permissions: 
* **Required** Always active
* **Optional** You grant them individually from the settings page.

### Required permissions

These are granted when you install the extension. They cannot be revoked without uninstalling.

| Permission | What it does | What it accesses |
|---|---|---|
| **storage** | Saves your settings (theme, position, tab order, disabled domains, etc.) and license/trial state. | Reads and writes to `browser.storage.sync` (settings) and `browser.storage.local` (license token, trial timestamp, grace usage). Nothing is sent externally. |
| **activeTab** | Lets the palette interact with the page you're currently viewing — injecting the command palette UI, capturing a screenshot when you ask for one, and running page-level commands (scroll, zoom, print). | Only the tab you're actively on, and only when you invoke TabCmdr. |
| **tabs** | Lists your open tabs so you can search and switch between them. | Tab titles, URLs, favicons, pinned/muted state, window IDs, and tab group IDs. This data is held in memory while the palette is open and discarded when you close it. |

### Optional permissions

These are off by default. You enable them from the TabCmdr settings page, and you can revoke them at any time.

| Permission | What it does | What it accesses |
|---|---|---|
| **bookmarks** | Lets you search and open bookmarks from the palette. | Your bookmark tree (titles and URLs). Read-only — TabCmdr can also bookmark the current page if you use that command. |
| **history** | Lets you search your browsing history from the palette. | Recent history entries (titles, URLs, visit times). Read-only, filtered by the timeframe you choose in settings. |
| **downloads** | Lets you search, open, and manage recent downloads from the palette. | Download filenames, URLs, file sizes, and states. You can open a downloaded file or remove it from the list. |
| **sessions** | Lets you restore recently closed tabs and windows. | Session data for recently closed tabs (titles, URLs, favicons). Used to show a "Recently Closed" list and to undo closing a tab. |
| **clipboardWrite** | Lets TabCmdr copy things to your clipboard — URLs, screenshot images, QR codes, calculator results. | Writes to your clipboard only when you explicitly trigger a copy action. Never reads your clipboard. |
| **tabGroups** | Lets you create, manage, and organize Chrome tab groups from the palette. | Tab group names, colors, and membership. Chrome only — this permission is not requested on Firefox. |


## Network requests

TabCmdr makes exactly **one** type of network request, and only under specific circumstances:

### License verification (Gumroad API)

- **When:** Only when you manually enter a license key to activate it, or during a periodic re-validation of an already-active license (roughly every 12–16 days, randomized).
- **What is sent:** Your license key and the TabCmdr product ID. Nothing else — no device info, no browser fingerprint, no usage data, no personal information.
- **Where:** `https://api.gumroad.com/v2/licenses/verify`
- **What comes back:** Whether the license is valid, and whether it has been refunded or cancelled. The response email field is received but not stored or used.
- **Offline behavior:** If the network request fails, TabCmdr continues working with the last known license state. It does not block you or retry aggressively.

### Favicons (Google Favicon Service)

- **When:** When displaying tab or bookmark items in the palette.
- **What is sent:** The hostname of the site (e.g., `github.com`) as part of a URL to `https://www.google.com/s2/favicons?domain=...&sz=32`. This is the same service your browser already uses for favicons.
- **What is NOT sent:** Full page URLs, page content, your identity, or any browsing context.


## Data storage

All data is stored locally on your device using the browser's extension storage APIs.

| Storage key | Location | What it holds |
|---|---|---|
| `sync:cmdkSettings` | `browser.storage.sync` | Your settings — theme, position, compact mode, tab order, disabled domains, search engine preferences, site shortcut preferences. Syncs across your devices via your browser account. |
| `_lk` | `browser.storage.local` | License token — a cryptographically signed record containing your license key, a timestamp, and a validity flag. Stays on your device. |
| `_trial` | `browser.storage.local` | Trial start timestamp — a single number recording when you installed the extension. |
| `_grace` | `browser.storage.local` | Grace usage counter — how many free uses remain today after the trial ends. Resets daily. |

No browsing data (tabs, bookmarks, history, downloads, sessions) is ever written to storage. It is fetched from browser APIs into memory when you open the palette and discarded when you close it.

### Google Authentication and Google Calendar Access

TabCmdr requests Google authentication only if you choose to enable Google Calendar features.

Google authentication is used to let TabCmdr access your Google Calendar with read-only permission. The extension requests the `https://www.googleapis.com/auth/calendar.readonly` scope so it can display your calendar events inside TabCmdr. This permission does not allow TabCmdr to create, edit, delete, or manage calendar events.

TabCmdr does not use Google authentication for advertising, analytics, tracking, profiling, or sharing data with third parties. Calendar data is used only to show your calendar information inside the extension.

Google sign-in may also provide basic account identity information, such as your email address and profile identity, as part of the authentication process. TabCmdr uses this only to complete the Google sign-in flow and associate the read-only Calendar access with the correct Google account.

TabCmdr does not request access to Gmail, Google Drive, Contacts, or any other Google services. It only uses Google Calendar read-only access.

## What TabCmdr does NOT do

- Does not collect or transmit personal information.
- Does not track which pages you visit.
- Does not record your search queries.
- Does not fingerprint your browser or device.
- Does not use cookies.
- Does not create or require user accounts.
- Does not share data with third parties (beyond the Gumroad license check described above).
- Does not run in the background when the palette is closed. The background service worker handles messages and goes idle.
- Does not inject anything into pages on your disabled domains list.
- Does not read your clipboard — only writes to it when you explicitly ask.


## Questions?

If you have questions about how TabCmdr handles your data, open an issue on the repository or reach out directly. Happy to clarify anything.