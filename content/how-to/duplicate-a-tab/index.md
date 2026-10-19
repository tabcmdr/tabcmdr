---
title: "How to Duplicate a Tab in Chrome | TabCmdr"
linkTitle: "Duplicate a tab"
description: "Make a copy of the tab you're on, back history and all, or of any other open tab. Press ⌘K with TabCmdr and run Duplicate Tab, or use the row's copy button."
ogTitle: "Copy a tab, history and all"
ogDescription: "Duplicate the tab you're on, or any other open tab, from the keyboard. The copy keeps the original's back history."
ogImage: duplicate-tab-row-button.png
imageAlt: "TabCmdr palette with pull typed and the pointer on the Duplicate tab button of a GitHub tab's row"
cardText: "Copy the tab you're on, or any other open tab, with its back history."
heading: "How to duplicate a tab in Chrome"
lead: "Press ⌘K with TabCmdr and run Duplicate Tab to copy the page you're on, back history included. Any other open tab can be copied from the duplicate button on its row."
date: 2026-10-19
lastmod: 2026-10-19
weight: 200
group: tidy
icon: i-copy
feature: tab-actions
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Duplicate the tab you're on in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type duplicate tab"
    typed: "duplicate tab"
    text: "Duplicate Tab shows under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "A copy opens next to it, and Chrome switches to the copy."
faqTitle: "Questions about duplicating tabs"
faq:
  - question: "How do I duplicate a tab in Chrome?"
    answer: "With TabCmdr, press ⌘K or Ctrl+K, type `duplicate tab` and press Enter. A copy of the tab you're on opens right after it. With Chrome's own shortcuts, copy the address from the address bar and paste it into a new tab."
  - question: "Does the copy keep the back history?"
    answer: "With TabCmdr's Duplicate Tab, yes: Back works in the new tab just as in the original. A tab opened from a pasted address starts with no history."
  - question: "Can I duplicate a tab I'm not on?"
    answer: "Yes. Find it in the palette and click the duplicate button on its row."
  - question: "How do I close duplicate tabs?"
    answer: "Run Close Duplicate Tabs. It closes every extra copy of a page across all your windows and keeps one of each."
relatedTitle: "Related features"
related:
  - tab-actions
  - close-duplicate-tabs
  - search-open-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's way: open the address again {.way-chrome}

To open the page you're on in a second tab with Chrome's own shortcuts:

1. Press {{< kbd "Ctrl" "L" >}} on Windows and Linux, or {{< kbd "⌘" "L" >}} on a Mac, to jump to the address bar.
2. Press {{< kbd "Ctrl" "C" >}} or {{< kbd "⌘" "C" >}} to copy the address.
3. Press {{< kbd "Ctrl" "T" >}} or {{< kbd "⌘" "T" >}} to open a new tab.
4. Press {{< kbd "Ctrl" "V" >}} or {{< kbd "⌘" "V" >}}, then {{< kbd "Enter" >}}.

The new tab loads the page from its address, so it starts without the original tab's back history.

Source: Google's [Chrome keyboard shortcuts](https://support.google.com/chrome/answer/157179) help page, checked in October 2026.

## Duplicate the tab you're on {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. **Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux.

### Step 2: Type `duplicate tab`

**Duplicate Tab** shows up under Commands. **Close Duplicate Tabs** appears below it, and it does the opposite.

{{< screenshot src="duplicate-tab-command.png" alt="TabCmdr palette with duplicate tab typed, showing the Duplicate Tab and Close Duplicate Tabs commands" caption="`duplicate tab` finds Duplicate Tab, with Close Duplicate Tabs below it." >}}

### Step 3: Press Enter

A second tab with the same page opens right after the original, and Chrome switches to it. It keeps the original's back history, so pressing Back there goes where it would in the original.

## Duplicate another tab {.way-tabcmdr}

Type part of the tab's title or address so it's the highlighted row, then click the duplicate button on that row.

{{< screenshot src="duplicate-tab-row-button.png" alt="TabCmdr palette with pull typed and the pointer on the Duplicate tab button of the Pull requests tab's row" caption="The duplicate button copies the tab on that row." >}}

The new tab opens next to that one and becomes the tab you're looking at, while the palette stays behind in the tab you started from.

## Made too many copies? {.way-tabcmdr}

Run **Close Duplicate Tabs** to close every extra copy of a page across all your windows. One copy of each page stays open. [Closing duplicate tabs]({{< relref "/features/close-duplicate-tabs" >}}) explains which copy it keeps.
