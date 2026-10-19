---
title: "How to Mute a Tab in Chrome | TabCmdr"
linkTitle: "Mute a tab"
description: "Mute one noisy tab or every tab at once in Chrome. Use the tab menu, or press ⌘K with TabCmdr to mute the tab you're on, any other tab, or all of them."
ogTitle: "Silence a noisy tab without hunting for it"
ogDescription: "Mute the tab you're on, any tab in the list, or every tab in every window, from one search box."
ogImage: mute-a-tab-row-button.png
imageAlt: "TabCmdr palette with spotify typed, the Spotify tab's speaker button clicked and a Tab muted message"
cardText: "Silence the tab you're on, any other tab from its row, or every tab in every window at once."
heading: "How to mute a tab in Chrome"
lead: "In Chrome, highlight the tabs, right-click one and choose Mute. With TabCmdr, press ⌘K and run Mute Tab, or mute any tab from its row without switching to it."
date: 2026-10-19
lastmod: 2026-10-19
weight: 170
group: tidy
icon: i-volume-x
feature: tab-actions
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Mute the tab you're on in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type mute"
    typed: "mute"
    text: "Mute Tab and Mute All Tabs show under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The tab you're on goes quiet."
faqTitle: "Questions about muting tabs"
faq:
  - question: "How do I mute tabs in Chrome?"
    answer: "Highlight the tabs: on Windows and Linux, press Ctrl and click each one, or click the first, press Shift and click the last. Then right-click one of them and choose Mute. With TabCmdr, press ⌘K or Ctrl+K, type `mute` and press Enter to mute the tab you're on."
  - question: "Can I mute a tab without switching to it?"
    answer: "Yes. Open TabCmdr, type part of the tab's title or address and click the speaker button on its row. You see Tab muted and stay on the page you're on."
  - question: "How do I mute every tab at once?"
    answer: "Run Mute All Tabs. It mutes every tab in every open window and tells you how many, such as Muted 8 tabs. The count includes every open tab, not only the ones playing sound. Unmute All Tabs turns the sound back on for all of them."
  - question: "How do I unmute a tab?"
    answer: "Type `unmute` and run Unmute Tab for the tab you're on, or click the crossed-out speaker on a muted tab's row. Typing `mute` alone doesn't list the unmute commands, because each word you type matches from the start of a word."
  - question: "Does Mute All Tabs reach other windows?"
    answer: "Yes. It goes through every tab in every open window, not only the one you're in."
relatedTitle: "Related features"
related:
  - tab-actions
  - search-open-tabs
  - suspend-inactive-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's way to mute tabs {.way-chrome}

Chrome mutes tabs from the right-click menu on the tab strip:

1. Highlight the tabs you want to mute. On Windows and Linux, press {{< kbd "Ctrl" >}} and click each tab. To pick a run of tabs, click the first, press {{< kbd "Shift" >}} and click the last.
2. Right-click one of the highlighted tabs.
3. Choose **Mute**. The same menu offers **Unmute** to turn the sound back on.

Source: Google's [tabs help page](https://support.google.com/chrome/answer/2391819), checked in October 2026.

## Mute the tab you're on {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. **Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux.

### Step 2: Type `mute`

**Mute Tab** and **Mute All Tabs** show up under Commands, with Mute Tab highlighted.

{{< screenshot src="mute-a-tab-commands.png" alt="TabCmdr palette with mute typed, listing the Mute Tab and Mute All Tabs commands" caption="`mute` finds Mute Tab and Mute All Tabs." >}}

### Step 3: Press Enter

Mute Tab silences the tab you're on and closes the palette, and **Tab muted** shows at the bottom of the page. To turn the sound back on, type `unmute` and run **Unmute Tab**, which confirms with **Tab unmuted**.

## Mute another tab without switching to it {.way-tabcmdr}

The tab making noise is often not the one you're reading. Type part of its title or address, such as `spotify`, so it's the highlighted row. Then click the speaker button on that row.

{{< screenshot src="mute-a-tab-row-button.png" alt="TabCmdr palette with spotify typed, the Spotify tab highlighted with a crossed-out speaker button and a Tab muted message" caption="Click the speaker on the tab's row. You see Tab muted and stay where you are." >}}

You see **Tab muted**, the speaker on the row changes to a crossed-out one, and the palette stays open on the page you're on. Click the same button again to unmute the tab. The row buttons work on tabs in every window.

## Mute every tab at once {.way-tabcmdr}

Run **Mute All Tabs** to mute every tab in every open window. A message at the bottom of the page tells you how many tabs it muted, such as **Muted 8 tabs**. That number counts every open tab, including the quiet ones. When you want the sound back, type `unmute all` and run **Unmute All Tabs**. [Acting on tabs from the list]({{< relref "/features/tab-actions" >}}) covers the other row buttons.
