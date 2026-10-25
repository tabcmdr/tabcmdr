---
title: "How to Close Tabs to the Left in Chrome | TabCmdr"
linkTitle: "Close tabs to the left"
description: "Chrome has no Close tabs to the left option. Highlight the tabs with Shift and close them, or press ⌘K and run one TabCmdr command. Pinned tabs stay open."
ogTitle: "Close every tab to the left of this one"
ogDescription: "Chrome's tab menu only closes tabs to the right. Shift-click the tabs on the left and close them, or run Close Tabs to the Left in TabCmdr."
ogImage: close-left-before.png
imageAlt: "TabCmdr palette on the Tabs filter, listing seven tabs from two windows with Inbox pinned"
cardText: "Chrome only closes tabs to the right. Close the ones on the left with Shift-click, or with one TabCmdr command."
heading: "How to close tabs to the left in Chrome"
lead: "Chrome's tab menu has no Close tabs to the left. Shift-click the tabs on the left and choose Close, or press ⌘K in TabCmdr, type close left and press Enter."
date: 2026-10-25
lastmod: 2026-10-25
weight: 125
group: tidy
icon: i-arrow-left-line
feature: close-tabs-to-the-left
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Close tabs to the left in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On the tab you want to keep as the first one. Ctrl+K on Windows and Linux."
  - title: "Type close left"
    typed: "close left"
    text: "Close Tabs to the Left shows under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The tabs before this one close. Pinned tabs stay."
faqTitle: "Questions about closing tabs to the left"
faq:
  - question: "Can Chrome close tabs to the left?"
    answer: "Not with one menu option. Chrome's tab menu has Close tabs to the right and Close other tabs, but nothing for the left side. Click the first tab you want gone, Shift-click the last one, then right-click a highlighted tab and choose Close."
  - question: "How do I close all tabs to the left with TabCmdr?"
    answer: "Go to the tab you want to keep as the first one, press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `close left` and press Enter. Every unpinned tab before it in that window closes."
  - question: "Do pinned tabs close too?"
    answer: "Not with TabCmdr. Pinned tabs sit at the left end of the tab bar, and Close Tabs to the Left skips them. With Chrome's Shift-click method, a pinned tab you highlight closes along with the rest."
  - question: "Does it close tabs in a tab group?"
    answer: "Yes. Grouped tabs to the left of yours close too, including the tabs in a collapsed group."
  - question: "Does it close tabs in my other windows?"
    answer: "No. It only works on the window you're in."
  - question: "Can I get the closed tabs back?"
    answer: "Yes. Each closed tab goes into Recently Closed. Type `:r` in the palette to list them and press Enter on the one you want. In Chrome, Ctrl+Shift+T on Windows and Linux or ⌘⇧T on a Mac reopens them in the order they were closed."
relatedTitle: "Related features"
related:
  - close-tabs-to-the-left
  - close-tabs-to-the-right
  - recently-closed-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Highlight the tabs and close them in Chrome {.way-chrome}

Chrome's tab menu has **Close tabs to the right** and **Close other tabs**, but nothing for the left side. Highlight the tabs instead:

1. Click the first tab you want to close. Start after your pinned tabs, or they close too.
2. Hold {{< kbd "Shift" >}} and click the tab just before the one you want to keep. The tabs between them are highlighted too.
3. Right-click any highlighted tab and choose **Close**.

Source: Google's [tabs help page](https://support.google.com/chrome/answer/2391819) and the tab menu code in [Chromium](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/chrome/browser/ui/tabs/tab_menu_model.cc), which Chrome is built on, checked in October 2026.

## Close the tabs to the left with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. It has the command Chrome's menu is missing: **Close Tabs to the Left** closes every tab before the one you're on and keeps your pinned tabs.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette on the tab you want to keep first

Switch to the tab that should come first after your pinned tabs, then press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux. To check what's open first, press {{< kbd "→" >}} for the **Tabs** filter. By default it lists your tabs in tab bar order, with pinned tabs under their own **Pinned** heading and tabs from your other windows included.

{{< screenshot src="close-left-before.png" alt="TabCmdr palette on the Tabs filter, listing Calendar, Pull requests, Hacker News, Q4 planning, YouTube, MDN and Payments, with Inbox under Pinned" caption="Before: Q4 planning is the tab we're on. Calendar, Pull requests and Hacker News are to its left, Inbox is pinned, and Payments - Stripe is in a second window." >}}

### Step 2: Type `close left`

**Close Tabs to the Left** shows up under Commands, already highlighted.

{{< screenshot src="close-left-command.png" alt="TabCmdr palette with close left typed, showing Close Tabs to the Left highlighted under Commands" caption="`close left` finds the command." >}}

### Step 3: Press Enter

The palette closes, and so does every unpinned tab to the left of yours in this window. A message at the bottom of the page says how many, such as **Closed 3 tabs**. With nothing to the left, it says **No tabs to the left**.

{{< screenshot src="close-left-after.png" alt="TabCmdr palette on the Tabs filter after Close Tabs to the Left, listing Q4 planning, YouTube, MDN and Payments, with Inbox under Pinned" caption="After: the pinned Inbox tab, Q4 planning, YouTube and MDN are left. Payments - Stripe is in another window, so it stays open." >}}

## What stays open {.way-tabcmdr}

- **The tab you're on** and every tab to its right.
- **Pinned tabs.** They sit at the left end of the bar and the command skips them, so the bar ends up as your pinned tabs, then the tab you're on.
- **Tabs in other windows.** The command only works on the window you're in.

Tabs in a tab group to your left close too, even when the group is collapsed.

Closed more than you meant to? Each closed tab gets its own row in Recently Closed. Type `:r` to list them, or see [how to reopen closed tabs]({{< relref "/how-to/reopen-closed-tabs" >}}). For the other side of the tab bar, see [how to close tabs to the right]({{< relref "/how-to/close-tabs-to-the-right" >}}).
