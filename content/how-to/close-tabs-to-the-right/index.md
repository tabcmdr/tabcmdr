---
title: "How to Close Tabs to the Right in Chrome | TabCmdr"
linkTitle: "Close tabs to the right"
description: "Close every Chrome tab to the right of the one you're on: use the tab's right-click menu, or press ⌘K and run one TabCmdr command. Pinned tabs stay open."
ogTitle: "Close every tab to the right of this one"
ogDescription: "Right-click a tab in Chrome, or press ⌘K with TabCmdr and type close right. The tabs after the current one close and pinned tabs stay."
ogImage: close-right-before.png
imageAlt: "TabCmdr palette on the Tabs filter, listing seven tabs from two windows with Inbox pinned"
cardText: "Close every tab after the one you're on, from Chrome's tab menu or with one TabCmdr command."
heading: "How to close tabs to the right in Chrome"
lead: "In Chrome, right-click the tab and choose Close tabs to the right. With TabCmdr, press ⌘K, type close right and press Enter. Pinned tabs stay open either way."
date: 2026-10-19
lastmod: 2026-10-25
weight: 120
group: tidy
icon: i-arrow-right-line
feature: close-tabs-to-the-right
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Close tabs to the right in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On the tab you want to keep as the last one. Ctrl+K on Windows and Linux."
  - title: "Type close right"
    typed: "close right"
    text: "Close Tabs to the Right shows under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The tabs after this one close. Pinned tabs stay."
faqTitle: "Questions about closing tabs to the right"
faq:
  - question: "How do I close all tabs to the right in Chrome?"
    answer: "Right-click the tab you want to keep as the last one and choose Close tabs to the right. With TabCmdr, press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `close right` and press Enter."
  - question: "Why does Chrome say Close tabs below?"
    answer: "That's the same option with vertical tabs turned on. The tabs run down the side of the window, so the tabs after yours are below it instead of to the right."
  - question: "Is there a keyboard shortcut to close tabs to the right?"
    answer: "Chrome doesn't have one. Ctrl+W on Windows and Linux or ⌘W on a Mac closes only the tab you're on. With TabCmdr it's ⌘K, `close right` and Enter."
  - question: "Do pinned tabs close too?"
    answer: "No. Chrome's menu option and TabCmdr's command both skip pinned tabs."
  - question: "Does it close tabs in my other windows?"
    answer: "No. Both only work on the window you're in."
  - question: "Can I get the closed tabs back?"
    answer: "Yes. Each closed tab goes into Recently Closed. Type `:r` in the palette to list them and press Enter on the one you want. In Chrome, Ctrl+Shift+T on Windows and Linux or ⌘⇧T on a Mac reopens them in the order they were closed."
relatedTitle: "Related features"
related:
  - close-tabs-to-the-right
  - close-tabs-to-the-left
  - recently-closed-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Use the tab menu in Chrome {.way-chrome}

1. Right-click the tab you want to keep as the last one.
2. Choose **Close tabs to the right**.

Every tab after it in that window closes, apart from pinned tabs. With vertical tabs turned on, the same option is called **Close tabs below**.

Chrome has no keyboard shortcut for it. {{< kbd "Ctrl" "W" >}} on Windows and Linux or {{< kbd "⌘" "W" >}} on a Mac closes only the tab you're on.

Source: the tab menu code in [Chromium](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/chrome/browser/ui/tabs/tab_menu_model.cc), which Chrome is built on, and Google's [keyboard shortcuts](https://support.google.com/chrome/answer/157179) help page, checked in October 2026.

## Close the tabs to the right with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its **Close Tabs to the Right** command closes every tab after the one you're on, so you don't have to find the tab and right-click it.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette on the tab where the cut should be

Switch to the tab you want to keep as the last one, then press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux. To check what's open first, press {{< kbd "→" >}} for the **Tabs** filter. By default it lists your tabs in tab bar order, with pinned tabs under their own **Pinned** heading and tabs from your other windows included.

{{< screenshot src="close-right-before.png" alt="TabCmdr palette on the Tabs filter, listing Calendar, Q4 planning, Pull requests, Hacker News, YouTube, MDN and Payments, with Inbox under Pinned" caption="Before: Q4 planning is the tab we're on. Pull requests, Hacker News, YouTube and MDN are to its right, and Payments - Stripe is in a second window." >}}

### Step 2: Type `close right`

**Close Tabs to the Right** shows up under Commands, already highlighted.

{{< screenshot src="close-right-command.png" alt="TabCmdr palette with close right typed, showing Close Tabs to the Right highlighted under Commands" caption="`close right` finds the command." >}}

### Step 3: Press Enter

The palette closes, and so does every tab to the right of yours in this window. A message at the bottom of the page says how many, such as **Closed 4 tabs**. With nothing to the right, it says **No tabs to the right**.

{{< screenshot src="close-right-after.png" alt="TabCmdr palette on the Tabs filter after Close Tabs to the Right, listing Calendar, Q4 planning and Payments, with Inbox under Pinned" caption="After: Calendar, Q4 planning and the pinned Inbox tab are left. Payments - Stripe is in another window, so it stays open." >}}

## What stays open {.way-tabcmdr}

- **The tab you're on** and every tab to its left.
- **Pinned tabs.** Run the command from a pinned tab and every unpinned tab in the window closes, while your other pinned tabs stay.
- **Tabs in other windows.** The command only works on the window you're in.

Tabs in a tab group to your right close too, even when the group is collapsed.

Closed more than you meant to? Each closed tab gets its own row in Recently Closed. Type `:r` to list them, or see [how to reopen closed tabs]({{< relref "/how-to/reopen-closed-tabs" >}}). For the other side of the tab bar, see [how to close tabs to the left]({{< relref "/how-to/close-tabs-to-the-left" >}}).
