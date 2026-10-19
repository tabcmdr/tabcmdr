---
title: "How to Move All Tabs into One Chrome Window | TabCmdr"
linkTitle: "Move all tabs into one window"
description: "Gather the tabs from every Chrome window into the one you're using: move them with Move tabs to another window, or merge every window with one command."
ogTitle: "Too many Chrome windows? Put every tab in one"
ogDescription: "Move highlighted tabs between windows by hand, or merge every window into the one you're using with one command."
ogImage: merge-windows-command.png
imageAlt: "TabCmdr palette with merge typed and the Merge All Windows into One command highlighted"
cardText: "Gather the tabs from every window into the one you're using, by hand or with one command."
heading: "How to move all tabs into one Chrome window"
lead: "In Chrome, highlight a window's tabs, right-click and choose Move tabs to another window. TabCmdr's Merge All Windows into One moves every tab into your window at once."
date: 2026-10-19
lastmod: 2026-10-19
weight: 140
group: tidy
icon: i-layers
feature: merge-windows
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Merge every window in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "In the window you want to keep. Ctrl+K on Windows and Linux."
  - title: "Type merge"
    typed: "merge"
    text: "Merge All Windows into One shows under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "Tabs move here and the emptied windows close."
faqTitle: "Questions about merging windows"
faq:
  - question: "How do I combine two Chrome windows into one?"
    answer: "In Chrome, highlight the tabs in one window, right-click one of them, choose Move tabs to another window and pick the other window. With TabCmdr, press ⌘K or Ctrl+K in the window you want to keep, type `merge` and press Enter."
  - question: "Which window do the tabs go to?"
    answer: "The window you ran the command in. Tabs and groups from your other windows are added after its own tabs."
  - question: "What happens to the other windows?"
    answer: "Once their tabs have moved, TabCmdr closes them, so you end up with one window."
  - question: "Are pinned tabs and tab groups kept?"
    answer: "Yes. Pinned tabs from other windows stay pinned and join the pinned tabs at the front of your window. Tab groups move over as whole groups and keep their names."
  - question: "How do I split a tab back out into its own window?"
    answer: "Drag the tab outside the Chrome window, or run TabCmdr's Move Tab to New Window command from the palette."
relatedTitle: "Related features"
related:
  - merge-windows
  - sort-tabs
  - close-duplicate-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Move tabs between windows in Chrome {.way-chrome}

1. In the window you want to empty, click its first tab, hold {{< kbd "Shift" >}} and click its last tab to highlight them all.
2. Right-click any highlighted tab and choose **Move tabs to another window**.
3. Pick the window to move them to.

Repeat this for each extra window. Google notes that both windows need to be signed in to the same Chrome profile.

Source: Google's [tabs help page](https://support.google.com/chrome/answer/2391819), checked in October 2026.

## Merge every window with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its **Merge All Windows into One** command moves the tabs from all your other windows into the one you're using, in one step.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Go to the window you want to keep

Click into that window and press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux. The window you open the palette in is the one the tabs move to.

### Step 2: Type `merge`

**Merge All Windows into One** shows up under Commands, already highlighted.

{{< screenshot src="merge-windows-command.png" alt="TabCmdr palette with merge typed and the Merge All Windows into One command highlighted under Commands" caption="Typing `merge` finds the command." >}}

### Step 3: Press Enter

The palette closes. The tabs from your other windows are added after this window's tabs, one window after another, and the windows they came from close. A message at the bottom of the page says how many tabs moved, such as **Merged 4 tabs into one window**. If only one window is open, it says **Only one window open** and nothing changes.

{{< screenshot src="merge-windows-after.png" alt="TabCmdr palette on the Tabs filter after merging, listing six tabs in one window, two with a Billing group label, and Pull requests under Pinned" caption="After: every tab is in one window. The Billing group came over with its name, and Pull requests is still pinned." >}}

## What happens to pinned tabs and groups {.way-tabcmdr}

- **Pinned tabs stay pinned.** A pinned tab from another window joins the pinned tabs at the front of your window.
- **Tab groups move as whole groups,** with their names, and land after your window's own tabs.
- **You may land on a moved tab.** In our test, when a group came over, Chrome switched to the first tab of that group, so the message above was left on the page we started from.
- **Only regular browser windows are merged.** Pop-up windows aren't touched.
- **Splitting a tab out again** is one command too: run **Move Tab to New Window** on the tab, or drag the tab outside the window.
