---
title: "How to Arrange Chrome Tabs in Alphabetical Order | TabCmdr"
linkTitle: "Arrange tabs in alphabetical order"
description: "Sort the tabs in a Chrome window A to Z by title in one step, without breaking up pinned tabs or tab groups, or move tabs one at a time from the keyboard."
ogTitle: "Put a messy tab bar in A to Z order"
ogDescription: "Sort every tab in a Chrome window by title in one step. Pinned tabs and tab groups keep their place and are sorted inside."
ogImage: sort-tabs-after.png
imageAlt: "TabCmdr palette on the Tabs filter after sorting, with the Launch group sorted A to Z between the ungrouped tabs"
cardText: "Sort the tabs in a window A to Z by title in one step, without breaking up pinned tabs or tab groups."
heading: "How to arrange Chrome tabs in alphabetical order"
lead: "Chrome moves tabs one at a time: drag them, or press Ctrl+Shift+PgUp or PgDn. TabCmdr's Sort Tabs Alphabetically sorts a whole window by title, group by group."
date: 2026-10-19
lastmod: 2026-10-19
weight: 150
group: tidy
icon: i-sort
feature: sort-tabs
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Sort a window in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "In the window to sort. Ctrl+K on Windows and Linux."
  - title: "Type sort"
    typed: "sort"
    text: "Sort Tabs Alphabetically shows under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "Each part of the tab bar goes A to Z."
faqTitle: "Questions about sorting tabs"
faq:
  - question: "How do I sort tabs alphabetically in Chrome?"
    answer: "With TabCmdr, press ⌘K on a Mac or Ctrl+K on Windows and Linux in the window you want to sort, type `sort` and press Enter on Sort Tabs Alphabetically."
  - question: "Does it sort by title or by address?"
    answer: "By the tab's title, the text shown on the tab. Upper and lower case are treated the same."
  - question: "What happens to pinned tabs?"
    answer: "They're sorted A to Z among themselves and stay at the front of the tab bar."
  - question: "Does it sort all my windows?"
    answer: "No. Only the window you run it in. Your other windows keep their order."
  - question: "Does sorting break up my tab groups?"
    answer: "No. Each tab group keeps its place in the tab bar and is sorted A to Z inside. Tabs never move into or out of a group."
  - question: "Can I see my tabs A to Z without moving them?"
    answer: "Yes. In TabCmdr's settings, open Tabs & Ordering and set Open Tabs Order to Alphabetical. The palette then lists your tabs A to Z and the tab bar stays as it is."
relatedTitle: "Related features"
related:
  - sort-tabs
  - merge-windows
  - search-open-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Reorder tabs in Chrome {.way-chrome}

Drag a tab along the top of the window to move it. From the keyboard, {{< kbd "Ctrl" "Shift" "PgUp" >}} moves the tab you're on to the left and {{< kbd "Ctrl" "Shift" "PgDn" >}} moves it to the right. Google lists the same keys for Windows, Mac and Linux.

Source: Google's [tabs](https://support.google.com/chrome/answer/2391819) and [keyboard shortcuts](https://support.google.com/chrome/answer/157179) help pages, checked in October 2026.

Either way, you move one tab at a time.

## Sort a window A to Z with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its **Sort Tabs Alphabetically** command sorts every tab in the window by title, without breaking up pinned tabs or tab groups.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette in the window to sort

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux. To see the current order, press {{< kbd "→" >}} for the **Tabs** filter. Tabs in a group show the group's name, and pinned tabs are listed under **Pinned**.

{{< screenshot src="sort-tabs-before.png" alt="TabCmdr palette on the Tabs filter, listing YouTube and Pull requests, three tabs labelled Launch, then Hacker News and MDN, with Inbox under Pinned" caption="Before: Inbox is pinned, and Q4 planning, Launch checklist and Onboarding flow v3 are in a group called Launch." >}}

### Step 2: Type `sort`

**Sort Tabs Alphabetically** shows up under Commands, already highlighted.

{{< screenshot src="sort-tabs-command.png" alt="TabCmdr palette with sort typed and the Sort Tabs Alphabetically command highlighted" caption="Typing `sort` finds the command." >}}

### Step 3: Press Enter

The palette closes, the tabs move into place, and a message at the bottom of the page says how many tabs it sorted, such as **Sorted 8 tabs alphabetically**.

{{< screenshot src="sort-tabs-after.png" alt="TabCmdr palette on the Tabs filter after sorting, listing Pull requests and YouTube, the Launch group as Launch checklist, Onboarding flow v3 and Q4 planning, then Fetch API and Hacker News" caption="After: each part is sorted on its own. Pull requests and YouTube swap, the Launch group goes A to Z inside, and Fetch API moves ahead of Hacker News." >}}

## How the sort works {.way-tabcmdr}

- **By title,** the text on the tab, with upper and lower case treated the same.
- **In parts.** The tab bar is split where pinned tabs, tab groups and ungrouped tabs meet. Each part is sorted A to Z on its own and keeps its place.
- **Pinned tabs** are sorted among themselves and stay at the front.
- **Tab groups stay whole.** A group keeps its place and its tabs, and is sorted inside.
- **Only the window you're in** is sorted.

To see your tabs A to Z in the palette without moving them, open TabCmdr's settings, go to **Tabs & Ordering** and set **Open Tabs Order** to **Alphabetical**.
