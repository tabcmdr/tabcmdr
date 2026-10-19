---
title: "How to Close All Tabs Except the Current One | TabCmdr"
linkTitle: "Close all other tabs"
description: "Keep the tab you're reading and close the rest of the Chrome window in one step. Pinned tabs and your other windows stay as they are. Windows and Mac."
ogTitle: "Close every tab but this one"
ogDescription: "Close the rest of the window in one step and keep the tab you're on, your pinned tabs and your other windows."
ogImage: close-others-before.png
imageAlt: "TabCmdr palette on the Tabs filter, listing six tabs with Inbox under Pinned"
cardText: "Keep the tab you're reading and close the rest of the window in one step, pinned tabs aside."
heading: "How to close all tabs except the current one"
lead: "Press ⌘K (Ctrl+K on Windows and Linux) with TabCmdr, type close other and press Enter. Every tab in the window closes except the one you're on and pinned tabs."
date: 2026-10-19
lastmod: 2026-10-19
weight: 130
group: tidy
icon: i-x
feature: close-tabs-left-right
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Keep one tab in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On the tab you want to keep. Ctrl+K on Windows and Linux."
  - title: "Type close other"
    typed: "close other"
    text: "Close Other Tabs shows under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "Only this tab and pinned tabs stay."
faqTitle: "Questions about closing other tabs"
faq:
  - question: "How do I close all other tabs in Chrome?"
    answer: "With TabCmdr, stay on the tab you want to keep, press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `close other` and press Enter on Close Other Tabs."
  - question: "Does Close Other Tabs close pinned tabs?"
    answer: "No. Pinned tabs stay open, along with the tab you're on."
  - question: "Does it close tabs in other windows?"
    answer: "No. It only closes tabs in the window you're in. To clear copies of the same page across all windows, use Close Duplicate Tabs."
  - question: "Can I close only the tabs on one side?"
    answer: "Yes. Close Tabs to the Right and Close Tabs to the Left close the tabs on one side of the tab you're on, and also leave pinned tabs open."
  - question: "Can I undo it?"
    answer: "Each closed tab goes into Recently Closed. Type `:r` in the palette to list them and press Enter on the one you want back. Undo Close Tab brings back only the last one."
relatedTitle: "Related features"
related:
  - close-tabs-left-right
  - close-duplicate-tabs
  - recently-closed-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Highlight and close tabs in Chrome {.way-chrome}

Chrome closes highlighted tabs together. Click a tab, hold {{< kbd "Shift" >}} and click another to highlight every tab between them, then right-click one of them and choose **Close**. To keep a tab in the middle, do this once on each side of it.

Source: Google's [tabs help page](https://support.google.com/chrome/answer/2391819), checked in October 2026.

## Close the rest of the window with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its **Close Other Tabs** command keeps the tab you're on and closes everything else in the window, apart from pinned tabs.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette on the tab you want to keep

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux. To check what's open first, press {{< kbd "→" >}} for the **Tabs** filter, which lists tabs from every window. Pinned tabs have their own **Pinned** heading.

{{< screenshot src="close-others-before.png" alt="TabCmdr palette on the Tabs filter, listing Calendar, Q4 planning, Pull requests, Hacker News, YouTube and Payments, with Inbox under Pinned" caption="Before: six tabs in this window, with Inbox pinned, and Payments - Stripe in a second window." >}}

### Step 2: Type `close other`

**Close Other Tabs** shows up under Commands, already highlighted.

{{< screenshot src="close-others-command.png" alt="TabCmdr palette with close other typed, showing the Close Other Tabs command highlighted" caption="`close other` finds Close Other Tabs." >}}

### Step 3: Press Enter

The palette closes and so do the other tabs in this window. A message at the bottom of the page says how many closed, such as **Closed 4 tabs**, or **No other tabs to close** if there were none.

{{< screenshot src="close-others-after.png" alt="TabCmdr palette on the Tabs filter after Close Other Tabs, listing Q4 planning and Payments, with Inbox under Pinned" caption="After: Q4 planning and the pinned Inbox tab are left. Payments - Stripe is in another window, so it stays open too." >}}

## What Close Other Tabs leaves alone {.way-tabcmdr}

- **The tab you're on.**
- **Pinned tabs** in this window.
- **Your other windows** and every tab in them.

Each tab it closes goes into Recently Closed, so you can bring any of them back with `:r`. See [how to reopen closed tabs]({{< relref "/how-to/reopen-closed-tabs" >}}) for the details.
