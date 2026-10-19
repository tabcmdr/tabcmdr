---
title: "How to Find and Remove Duplicate Tabs in Chrome | TabCmdr"
linkTitle: "Find and remove duplicate tabs"
description: "Spot the pages you have open more than once and close the extra copies in every Chrome window at once, keeping one of each. Steps for Windows and Mac."
ogTitle: "Same page open three times? Close the extra copies"
ogDescription: "Close every duplicate tab in every Chrome window with one command and keep one copy of each page."
ogImage: duplicate-tabs-before.png
imageAlt: "TabCmdr palette on the Tabs filter, listing Inbox and Pull requests twice and Q4 planning three times"
cardText: "Close the extra copies of pages you have open more than once, in every window, and keep one of each."
heading: "How to find and remove duplicate tabs in Chrome"
lead: "Chrome's tab search, Ctrl+Shift+A (⌘+Shift+A on a Mac), closes copies one at a time. TabCmdr closes every duplicate tab in every window with one command."
date: 2026-10-19
lastmod: 2026-10-19
weight: 110
group: tidy
icon: i-copy-minus
feature: close-duplicate-tabs
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Close every duplicate in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type dup"
    typed: "dup"
    text: "Close Duplicate Tabs shows under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "Extra copies close in every window."
faqTitle: "Questions about duplicate tabs"
faq:
  - question: "How do I close duplicate tabs in Chrome?"
    answer: "With TabCmdr, press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `dup` and press Enter on Close Duplicate Tabs. Without it, open Chrome's tab search with Ctrl+Shift+A (⌘+Shift+A on a Mac), type the page's name and close the extra copies from the list one by one."
  - question: "Which copy stays open?"
    answer: "TabCmdr keeps the first copy it finds as it goes through your windows and closes the rest. The tab you're on can be one of the copies that closes."
  - question: "Are pages with a different #section or ?query counted as duplicates?"
    answer: "No. Two tabs are duplicates only when their addresses match exactly, including everything after `#` or `?`. Two sections of the same document both stay open."
  - question: "Does it check tabs in other windows?"
    answer: "Yes. Close Duplicate Tabs looks at every open window, so a page open in two windows counts as a duplicate."
  - question: "Can I get a closed copy back?"
    answer: "Yes. Each tab it closes goes into Recently Closed. Type `:r` to list them and press Enter on the one you want. Undo Close Tab brings back only the last one."
relatedTitle: "Related features"
related:
  - close-duplicate-tabs
  - search-open-tabs
  - recently-closed-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Close copies with Chrome's tab search {.way-chrome}

Press {{< kbd "Ctrl" "Shift" "A" >}} on Windows and Linux, or {{< kbd "⌘" "Shift" "A" >}} on a Mac, to open tab search. Type part of the page's name, and every open tab that matches is listed. Click the close button on the right of a row to close that copy without switching to it.

Source: Google's [tabs help page](https://support.google.com/chrome/answer/2391819), checked in October 2026.

This works one page at a time. With several pages open twice, you repeat it for each one.

## Close every duplicate with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its **Close Duplicate Tabs** command checks every tab in every window and closes the extra copies in one go.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux. To see your duplicates first, press {{< kbd "→" >}} to switch to the **Tabs** filter, which lists the open tabs from every window.

{{< screenshot src="duplicate-tabs-before.png" alt="TabCmdr palette on the Tabs filter, listing Inbox and Pull requests twice and Q4 planning three times" caption="Before: Inbox and Pull requests are open twice, and Q4 planning is open in two windows." >}}

### Step 2: Type `dup`

**Close Duplicate Tabs** shows up under Commands, already highlighted. The row below it, **Duplicate Tab**, does the opposite: it opens another copy of the page you're on.

{{< screenshot src="duplicate-tabs-command.png" alt="TabCmdr palette with dup typed, showing Close Duplicate Tabs highlighted above Duplicate Tab" caption="Typing `dup` finds Close Duplicate Tabs." >}}

### Step 3: Press Enter

The palette closes and the extra copies close with it. One copy of each page stays open, and a message at the bottom of the page says how many closed, such as **Closed 3 duplicates**. If there's nothing to close, it says **No duplicates found**.

{{< screenshot src="duplicate-tabs-after.png" alt="TabCmdr palette on the Tabs filter after closing duplicates, listing one copy of each page" caption="After: one copy of each page is left. The Q4 planning tab ending in #heading=h.2 stays, because its address is different." >}}

## How TabCmdr decides what's a duplicate {.way-tabcmdr}

- **The address has to match exactly.** A different part after `#` or `?` makes it a different page, so two sections of the same document both stay open.
- **Every window is checked.** A page open in two windows counts as a duplicate, and TabCmdr keeps the first copy it finds.
- **Any copy can close.** That includes the tab you're on, if another copy of it came first.
- **Closed copies can come back.** Each one goes into Recently Closed. Type `:r` in the palette to list them, or see [how to reopen closed tabs]({{< relref "/how-to/reopen-closed-tabs" >}}).
