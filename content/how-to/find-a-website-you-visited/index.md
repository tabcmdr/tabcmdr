---
title: "How to Find a Website You Visited in Chrome | TabCmdr"
linkTitle: "Find a website you visited"
description: "Search Chrome's history with Ctrl+H or @history, or find a page you visited from any tab: type :h and part of its title or address, newest matches first."
ogTitle: "Find that page you saw earlier"
ogDescription: "Search Chrome's history from any tab. Type :h and a word from the page's title or address, and the matches appear newest first."
ogImage: history-search-lisbon.png
imageAlt: "TabCmdr palette with :h lisbon typed, listing four pages from history with how long ago each was visited"
cardText: "Search Chrome's history from the page you're on and reopen a page you saw earlier, newest matches first."
heading: "How to find a website you visited in Chrome"
lead: "Press Ctrl+H (⌘Y on a Mac) to open Chrome's history and search it. From any page, press ⌘K with TabCmdr, type :h and part of the page's title or address."
date: 2026-10-19
lastmod: 2026-10-19
weight: 30
group: find
icon: i-history
feature: search-history
docs: history
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Find a page you visited in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Search your history"
    typed: ":h lisbon"
    text: "Matches in the title or address, newest first."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The page opens in a new tab."
faqTitle: "Questions about finding pages in your history"
faq:
  - question: "How do I search my history in Chrome?"
    answer: "Press Ctrl+H on Windows and Linux or ⌘Y on a Mac to open the History page, then type in its search bar. You can also type `@history` in the address bar, press Tab or Space, and type a few keywords. With TabCmdr, press ⌘K or Ctrl+K on any page and type `:h` followed by part of the page's title or address."
  - question: "How far back can I search?"
    answer: "Chrome's History page lists the pages you visited in the last 90 days. TabCmdr searches the last week by default. To go further back, open TabCmdr Settings, choose Search & Results and set History Timeframe to Last Month, Last Year or All Time."
  - question: "Why doesn't my search find the page?"
    answer: "History search looks for the letters you type, in that order, anywhere in the page's title or address. Try one distinctive word, or part of the site's address, instead of a full phrase. If the visit is older than a week, change History Timeframe in TabCmdr's settings."
  - question: "Does the page open in the tab I'm on?"
    answer: "No. Pressing Enter opens the page in a new tab. The highlighted row also has buttons to open the page in an incognito window or copy its address."
  - question: "Do history results show up without typing :h?"
    answer: "Yes. In a normal search, up to five matching pages from your history appear under your open tabs."
relatedTitle: "Related features"
related:
  - search-history
  - recently-closed-tabs
  - search-bookmarks
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in ways to search your history {.way-chrome}

- **History page.** Press {{< kbd "Ctrl" "H" >}} on Windows and Linux, or {{< kbd "⌘" "Y" >}} on a Mac. The History page opens in a new tab. Type what you're looking for in the search bar at the top.
- **Address bar.** Type `@history` in the address bar and press {{< kbd "Tab" >}} or {{< kbd "Space" >}}. Then type a few keywords and pick the page from the list.

Chrome's History page lists the pages you visited in the last 90 days.

Source: Google's [browsing history](https://support.google.com/chrome/answer/95589) and [keyboard shortcuts](https://support.google.com/chrome/answer/157179) help pages, checked in October 2026.

## Search your history from any page with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. It searches your history from the page you're on, so you don't have to leave what you're reading to find a page you saw earlier.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type `:h` and part of the page's title or address

Here, `:h lisbon` finds four pages about a trip to Lisbon. The most recent visit is at the top, and each row shows how long ago you were there, such as 1m ago, Yesterday or Mon 14 Apr.

{{< screenshot src="history-search-lisbon.png" alt="TabCmdr palette with :h lisbon typed, listing four pages from history with how long ago each was visited" caption="`:h lisbon` lists matching pages from your history, newest first." >}}

History search looks for the letters you type, in that order, anywhere in the page's title or address. One distinctive word works better than a whole sentence, and part of an address works too, such as `:h timeout.com`.

### Step 3: Press Enter

The highlighted page opens in a new tab. Press {{< kbd "↓" >}} or {{< kbd "↑" >}} to pick a different row first. The highlighted row also has buttons to open the page in an incognito window or copy its address, which TabCmdr confirms with URL copied.

You don't always need `:h`. In a normal search, up to five matching pages from your history appear under your open tabs.

## Search further back {.way-tabcmdr}

TabCmdr searches the last week of your history by default. To change that:

1. Open the palette, type `settings` and press {{< kbd "Enter" >}} on **TabCmdr Settings**.
2. Choose **Search & Results** in the sidebar.
3. Under **Default Search Content**, set **History Timeframe** to Last Hour, Last 24 Hours, Last Week, Last Month, Last Year or All Time.

{{< screenshot src="history-timeframe-setting.png" alt="TabCmdr settings, Search and Results pane, with History Timeframe set to All Time" caption="All Time searches everything Chrome still keeps in your history." >}}

The same setting decides how far back history goes in normal searches. If you closed the tab only a short while ago, it may also be in your recently closed tabs, which [the guide to reopening closed tabs]({{< relref "/how-to/reopen-closed-tabs" >}}) covers.
