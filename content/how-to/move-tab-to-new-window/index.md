---
title: "How to Move a Tab to a New Window in Chrome | TabCmdr"
linkTitle: "Move a tab to a new window"
description: "Give a tab its own window in Chrome. Use the tab's right-click menu, or press ⌘K with TabCmdr and run Move Tab to New Window, for this tab or any other."
ogTitle: "Pop a tab out into its own window"
ogDescription: "Move the tab you're on, or any tab in the list, into a new window from the keyboard."
ogImage: move-tab-row-button.png
imageAlt: "TabCmdr palette with figma typed and the pointer on the Move to new window button of the Figma tab's row"
cardText: "Give the tab you're on, or any other open tab, a window of its own."
heading: "How to move a tab to a new window in Chrome"
lead: "In Chrome, right-click a tab and choose Move tab to another window. With TabCmdr, press ⌘K and run Move Tab to New Window to give the tab a window of its own."
date: 2026-10-19
lastmod: 2026-10-19
weight: 190
group: tidy
icon: i-maximize
feature: tab-actions
docs: tabs
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Move the tab you're on in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type move tab"
    typed: "move tab"
    text: "Move Tab to New Window shows under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The tab opens in a new window of its own."
faqTitle: "Questions about moving tabs"
faq:
  - question: "How do I move a tab to a new window in Chrome?"
    answer: "Right-click the tab and choose Move tab to another window, or highlight tabs and drag them to a new window. With TabCmdr, press ⌘K or Ctrl+K, type `move tab` and press Enter on Move Tab to New Window."
  - question: "Can I move a tab into a window that's already open?"
    answer: "Yes, with Chrome's right-click menu: choose Move tab to another window and pick the window. Google notes that both windows need to be signed in to the same profile. TabCmdr's Move Tab to New Window always makes a new window."
  - question: "Can I move several tabs at once?"
    answer: "In Chrome, highlight the tabs, right-click one of them and choose Move tabs to another window. TabCmdr moves one tab at a time, either the one you're on or the one whose row button you click."
  - question: "How do I put the tabs back into one window?"
    answer: "Run Merge All Windows into One in TabCmdr. It moves the tabs from your other windows into the one you're in and closes the windows it emptied. Tab groups move as whole groups, and pinned tabs stay pinned."
relatedTitle: "Related features"
related:
  - tab-actions
  - merge-windows
  - search-open-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's way to move a tab {.way-chrome}

1. Right-click the tab you want to move.
2. Choose **Move tab to another window**, then pick the window.

With several tabs highlighted, the option reads **Move tabs to another window**. Google notes that both windows need to be signed in to the same profile. You can also drag highlighted tabs to a new window.

Source: Google's [tabs help page](https://support.google.com/chrome/answer/2391819), checked in October 2026.

## Move the tab you're on to a new window {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. **Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux.

### Step 2: Type `move tab`

**Move Tab to New Window** shows up under Commands.

{{< screenshot src="move-tab-command.png" alt="TabCmdr palette with move tab typed, showing the Move Tab to New Window command" caption="`move tab` finds Move Tab to New Window." >}}

### Step 3: Press Enter

The tab you're on moves into a new window, and that window comes to the front. Your other tabs stay where they were. The palette is still open in the moved tab with the message **Moved to new window**, so press {{< kbd "Esc" >}} to close it.

## Move any tab without switching to it {.way-tabcmdr}

Type part of the tab's title or address so it's the highlighted row, then click the move button on that row.

{{< screenshot src="move-tab-row-button.png" alt="TabCmdr palette with figma typed and the pointer on the Move to new window button of the Figma tab's row" caption="The move button on a tab's row gives that tab its own window." >}}

The tab moves into a new window of its own, which comes to the front. This works for tabs in any window, not only the one you're in.

## Put the windows back together {.way-tabcmdr}

Too many windows open after a while? Run **Merge All Windows into One**. It moves the tabs from your other windows into the one you're in and closes the windows it emptied. Tab groups move across as whole groups, and pinned tabs stay pinned. [Merging windows]({{< relref "/features/merge-windows" >}}) has the details.
