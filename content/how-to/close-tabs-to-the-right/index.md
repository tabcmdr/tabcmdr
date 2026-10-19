---
title: "How to Close Many Tabs at Once in Chrome | TabCmdr"
linkTitle: "Close many tabs at once"
description: "Close a run of Chrome tabs in one go: highlight them with Shift and close them together, or close every tab to the right or left of the one you're on."
ogTitle: "Close a whole row of tabs at once"
ogDescription: "Highlight a range of tabs and close them together, or close everything to the right or left of the tab you're on with one command."
ogImage: close-right-before.png
imageAlt: "TabCmdr palette on the Tabs filter, listing seven tabs in one window with Inbox pinned"
cardText: "Close a run of tabs in one go, or close every tab to the right or left of the one you're on."
heading: "How to close many tabs at once in Chrome"
lead: "In Chrome, click the first tab, Shift-click the last, then right-click and choose Close. With TabCmdr, press ⌘K and run Close Tabs to the Right or to the Left."
date: 2026-10-19
lastmod: 2026-10-19
weight: 120
group: tidy
icon: i-arrow-right-line
feature: close-tabs-left-right
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Close one side of the tab bar in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On the tab where the cut should be. Ctrl+K on Windows and Linux."
  - title: "Type close tabs to"
    typed: "close tabs to"
    text: "Close Tabs to the Left and to the Right show up."
  - title: "Press Enter"
    keys: ["↵"]
    text: "Tabs on that side close. Pinned tabs stay."
faqTitle: "Questions about closing several tabs"
faq:
  - question: "How do I close all tabs to the right in Chrome?"
    answer: "With TabCmdr, go to the tab you want to keep as the last one, press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `close tabs to` and press Enter on Close Tabs to the Right. Every tab after it in that window closes, apart from pinned tabs."
  - question: "Do pinned tabs close too?"
    answer: "No. Close Tabs to the Right and Close Tabs to the Left skip pinned tabs, wherever they are in the tab bar."
  - question: "Does it close tabs in my other windows?"
    answer: "No. Both commands only work on the window you're in."
  - question: "How do I close just one tab from the keyboard?"
    answer: "Press Ctrl+W on Windows and Linux or ⌘W on a Mac to close the tab you're on. In the TabCmdr palette, highlight any tab and press ⌘⌫ on a Mac or Ctrl+Backspace on Windows and Linux to close it without switching to it."
  - question: "Can I get the closed tabs back?"
    answer: "Yes. Each closed tab goes into Recently Closed. Type `:r` in the palette to list them and press Enter on the one you want."
relatedTitle: "Related features"
related:
  - close-tabs-left-right
  - close-duplicate-tabs
  - recently-closed-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Close a range of tabs in Chrome {.way-chrome}

1. Click the first tab you want to close.
2. Hold {{< kbd "Shift" >}} and click the last one. The tabs between them are highlighted too.
3. Right-click any highlighted tab and choose **Close**.

To close only the tab you're on, press {{< kbd "Ctrl" "W" >}} on Windows and Linux or {{< kbd "⌘" "W" >}} on a Mac.

Source: Google's [tabs](https://support.google.com/chrome/answer/2391819) and [keyboard shortcuts](https://support.google.com/chrome/answer/157179) help pages, checked in October 2026.

## Close everything on one side with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Two of its commands close every tab on one side of the tab you're on: **Close Tabs to the Right** and **Close Tabs to the Left**.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Go to the tab where the cut should be

Switch to the tab you want to keep at the edge, then press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux. To check what's open first, press {{< kbd "→" >}} for the **Tabs** filter. Pinned tabs are listed under their own **Pinned** heading.

{{< screenshot src="close-right-before.png" alt="TabCmdr palette on the Tabs filter, listing Calendar, Q4 planning, Pull requests, Hacker News, YouTube and MDN, with Inbox under Pinned" caption="Before: seven tabs in one window, with Inbox pinned. Q4 planning is the tab we're on." >}}

### Step 2: Type `close tabs to`

Both commands show up under Commands.

{{< screenshot src="close-right-command.png" alt="TabCmdr palette with close tabs to typed, showing Close Tabs to the Left and Close Tabs to the Right" caption="`close tabs to` finds both commands." >}}

### Step 3: Pick a side and press Enter

Press {{< kbd "↓" >}} to move to **Close Tabs to the Right** if that's the side you want, then press {{< kbd "Enter" >}}. The palette closes, every tab on that side of yours closes in this window, and a message at the bottom of the page says how many, such as **Closed 4 tabs**. With nothing on that side, it says **No tabs to the right** or **No tabs to the left**.

{{< screenshot src="close-right-after.png" alt="TabCmdr palette on the Tabs filter after Close Tabs to the Right, listing Calendar and Q4 planning, with Inbox under Pinned" caption="After Close Tabs to the Right: Calendar, Q4 planning and the pinned Inbox tab are left." >}}

## What stays open {.way-tabcmdr}

- **The tab you're on.** Both commands only close tabs beside it.
- **Pinned tabs,** on either side.
- **Tabs in other windows.** The commands only work on the window you're in.

Closed more than you meant to? Each closed tab goes into Recently Closed. Type `:r` to list them, or see [how to reopen closed tabs]({{< relref "/how-to/reopen-closed-tabs" >}}).
