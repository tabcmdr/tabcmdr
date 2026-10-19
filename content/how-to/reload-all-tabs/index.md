---
title: "How to Reload All Tabs at Once in Chrome | TabCmdr"
linkTitle: "Reload all tabs at once"
description: "Refresh every tab in a Chrome window with one command instead of reloading each one by hand. Pinned tabs and the tab you're on reload as well."
ogTitle: "Refresh every tab in the window at once"
ogDescription: "Chrome's reload keys refresh one tab. TabCmdr's Reload All Tabs refreshes every tab in the window with one command."
ogImage: reload-all-command.png
imageAlt: "TabCmdr palette with reload typed, listing Reload Page, Reload All Tabs and Hard Reload (Clear Cache)"
cardText: "Refresh every tab in a window with one command instead of reloading each tab by hand."
heading: "How to reload all tabs at once in Chrome"
lead: "F5 or Ctrl+R reloads only the tab you're on. To reload every tab in the window at once, press ⌘K with TabCmdr, type reload all and press Enter."
date: 2026-10-19
lastmod: 2026-10-19
weight: 160
group: tidy
icon: i-rotate
feature: tab-actions
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Reload the whole window in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "In the window to refresh. Ctrl+K on Windows and Linux."
  - title: "Type reload all"
    typed: "reload all"
    text: "Reload All Tabs shows under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "Every tab in this window reloads."
faqTitle: "Questions about reloading tabs"
faq:
  - question: "How do I refresh all tabs in Chrome at once?"
    answer: "With TabCmdr, press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `reload all` and press Enter on Reload All Tabs. Every tab in that window reloads."
  - question: "Does it reload tabs in my other windows?"
    answer: "No. Only the tabs in the window you run it in."
  - question: "Are pinned tabs reloaded?"
    answer: "Yes. Every tab in the window reloads, including pinned tabs and the tab you're on."
  - question: "Is it a hard reload?"
    answer: "No, it's a normal reload. To reload the tab you're on without its cached files, use Hard Reload (Clear Cache), or press Ctrl+Shift+R on Windows and Linux or ⌘+Shift+R on a Mac."
  - question: "Will I lose what I typed in a form?"
    answer: "Possibly. Each page reloads as if you'd reloaded it yourself, so send or save anything you're typing first."
relatedTitle: "Related features"
related:
  - tab-actions
  - page-commands
  - suspend-inactive-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's reload shortcuts {.way-chrome}

| To do this | Windows and Linux | Mac |
|---|---|---|
| Reload the current page | {{< kbd "F5" >}} or {{< kbd "Ctrl" "R" >}} | |
| Reload, ignoring cached content | {{< kbd "Shift" "F5" >}} or {{< kbd "Ctrl" "Shift" "R" >}} | {{< kbd "⌘" "Shift" "R" >}} |

Source: Google's [keyboard shortcuts help page](https://support.google.com/chrome/answer/157179), checked in October 2026. It lists no plain reload shortcut for Mac.

Both reload one tab: the one you're on.

## Reload the whole window with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its **Reload All Tabs** command reloads every tab in the window you're in.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette in that window

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux.

### Step 2: Type `reload`

Three commands show up:

- **Reload Page** reloads the tab you're on.
- **Reload All Tabs** reloads every tab in this window.
- **Hard Reload (Clear Cache)** reloads the tab you're on without its cached files.

{{< screenshot src="reload-all-command.png" alt="TabCmdr palette with reload typed, listing Reload Page, Reload All Tabs and Hard Reload (Clear Cache) under Commands" caption="`reload` lists the three reload commands." >}}

### Step 3: Choose Reload All Tabs and press Enter

Press {{< kbd "↓" >}} to move to **Reload All Tabs**, or type `reload all` so it's the top row, then press {{< kbd "Enter" >}}. The palette closes and the tabs reload.

## What gets reloaded {.way-tabcmdr}

- **Every tab in the window you're in,** including pinned tabs and the tab you're on.
- **Not your other windows.** Their tabs aren't touched.
- **A normal reload,** not a hard one. Use Hard Reload (Clear Cache) for that, one tab at a time.

Each page reloads as if you'd done it yourself, so save or send anything you're typing first.
