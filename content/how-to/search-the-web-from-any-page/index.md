---
title: "How to Search with a Different Search Engine | TabCmdr"
linkTitle: "Search with a different engine"
description: "Search with another engine from Chrome's address bar, or from any page: type your search and pick Google, Bing, DuckDuckGo, Yahoo or Brave Search in TabCmdr."
ogTitle: "Pick the search engine for each search"
ogDescription: "Type your search on any page and choose Google, Bing or DuckDuckGo. Add Yahoo or Brave Search in settings."
ogImage: web-search-prefix.png
imageAlt: "TabCmdr palette with :s pull requests typed, offering to search Google, Bing or DuckDuckGo"
cardText: "Search the web from the page you're on and choose Google, Bing, DuckDuckGo, Yahoo or Brave Search each time."
heading: "How to search with a different search engine"
lead: "In Chrome, type a search engine's name in the address bar and press Tab. With TabCmdr, press ⌘K on any page, type your search and pick Google, Bing or DuckDuckGo."
date: 2026-10-19
lastmod: 2026-10-19
weight: 60
group: find
icon: i-globe
feature: web-search
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Search with any engine in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type your search"
    typed: ":s pull requests"
    text: "Start with :s to list only the search engines."
  - title: "Pick an engine"
    keys: ["↓", "↵"]
    text: "The results open in a new tab."
faqTitle: "Questions about searching the web"
faq:
  - question: "How do I search with a different search engine in Chrome?"
    answer: "Type the search engine's name in the address bar and press Tab, then type your search. With TabCmdr, press ⌘K or Ctrl+K on any page, type your search and pick the engine from the list."
  - question: "Which search engines can TabCmdr use?"
    answer: "Google, Bing and DuckDuckGo are on by default. Yahoo and Brave Search can be turned on in TabCmdr Settings, under Search & Results."
  - question: "Do search results open in the tab I'm on?"
    answer: "No. Each search opens in a new tab, so the page you were on stays where it was."
  - question: "Can I open a website by typing its address?"
    answer: "Yes. Type an address such as `developer.mozilla.org` and TabCmdr offers Open developer.mozilla.org at the top of the list. Press Enter to open it in a new tab."
  - question: "What does :s do?"
    answer: "It hides your tabs, history and other matches, so the list only shows the search engines for what you typed."
relatedTitle: "Related features"
related:
  - web-search
  - search-open-tabs
  - search-history
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in way to search with another engine {.way-chrome}

1. Jump to the address bar with {{< kbd "Ctrl" "L" >}}, {{< kbd "Alt" "D" >}} or {{< kbd "F6" >}} on Windows and Linux, or {{< kbd "⌘" "L" >}} on a Mac.
2. Type a search term and press {{< kbd "Enter" >}} to search with your default search engine.
3. To use a different engine, type the search engine's name and press {{< kbd "Tab" >}}, then type your search.

Source: Google's [keyboard shortcuts](https://support.google.com/chrome/answer/157179) help page, checked in October 2026.

## Search from any page with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. When you type a search into it, it also offers to search the web for it, with a row for each search engine you've turned on.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type your search

The search engine rows come after everything else that matches, such as your open tabs, history and commands. Here, `pull requests` matches an open tab and a page from history first.

{{< screenshot src="web-search-normal.png" alt="TabCmdr palette with pull requests typed, showing a matching tab and history page above rows to search Google, Bing and DuckDuckGo" caption="Search rows for Google, Bing and DuckDuckGo come after your tabs and history." >}}

To skip everything else, start with `:s`. The list then shows only the search engines.

{{< screenshot src="web-search-prefix.png" alt="TabCmdr palette with :s pull requests typed, showing only the rows to search Google, Bing and DuckDuckGo" caption="`:s` leaves only the search engine rows." >}}

### Step 3: Pick an engine and press Enter

Press {{< kbd "↓" >}} or {{< kbd "↑" >}} to highlight the engine you want, then press {{< kbd "Enter" >}}. The results open in a new tab.

## Open a web address directly {.way-tabcmdr}

Type an address such as `developer.mozilla.org` and the top row becomes **Open developer.mozilla.org**. Press {{< kbd "Enter" >}} to open it in a new tab, or pick a search engine row to search for the address instead.

{{< screenshot src="web-open-address.png" alt="TabCmdr palette with developer.mozilla.org typed, showing an Open developer.mozilla.org row above the search engine rows" caption="Typing an address offers to open it." >}}

## Add Yahoo or Brave Search {.way-tabcmdr}

1. Open the palette, type `settings` and press {{< kbd "Enter" >}} on **TabCmdr Settings**.
2. Choose **Search & Results** in the sidebar.
3. Under **Search Engines**, tick the engines you want. Google, Bing and DuckDuckGo are on by default, and Yahoo and Brave Search are off.

{{< screenshot src="web-search-engines-setting.png" alt="TabCmdr settings, Search and Results pane, with Google, Bing, DuckDuckGo and Brave Search ticked under Search Engines" caption="Ticked engines get their own search row in the palette." >}}

Untick an engine to remove its row.
