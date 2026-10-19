---
title: "How to Find a Bookmark in Chrome | TabCmdr"
linkTitle: "Find a bookmark"
description: "Find a bookmark in Chrome with @bookmarks or the Bookmark Manager, or from any page: type :b and a word from its name, address or the folder it's saved in."
ogTitle: "Find any bookmark without opening folders"
ogDescription: "Type :b and a word from the bookmark's name, address or folder. TabCmdr shows where each one is saved and opens it in a new tab."
ogImage: bookmarks-search-figma.png
imageAlt: "TabCmdr palette with :b figma typed, showing two Figma bookmarks saved in Bookmarks bar, Work, Design"
cardText: "Search every bookmark by name, address or folder from the page you're on, without opening the Bookmark Manager."
heading: "How to find a bookmark in Chrome"
lead: "Type @bookmarks in Chrome's address bar and press Tab to search. With TabCmdr, press ⌘K on any page, type :b and a word from the bookmark or its folder."
date: 2026-10-19
lastmod: 2026-10-19
weight: 40
group: find
icon: i-bookmark
feature: search-bookmarks
docs: bookmarks
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Find a bookmark in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Search your bookmarks"
    typed: ":b figma"
    text: "Name, address or folder."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The bookmark opens in a new tab."
faqTitle: "Questions about finding bookmarks"
faq:
  - question: "How do I search my bookmarks in Chrome?"
    answer: "Type `@bookmarks` in the address bar, press Tab or Space, type a few keywords and pick the bookmark from the list. With TabCmdr, press ⌘K or Ctrl+K on any page and type `:b` followed by a word from the bookmark."
  - question: "How do I open Chrome's Bookmark Manager?"
    answer: "Press Ctrl+Shift+O on Windows and Linux or ⌘+Option+B on a Mac. You can also open the More menu and choose Bookmarks and lists, then Bookmark Manager."
  - question: "Can I find bookmarks by folder name?"
    answer: "Yes. TabCmdr searches the folders a bookmark is saved in as well as its name and address, so `:b design` also lists bookmarks saved in a folder called Design. Each row shows the folder path on the right."
  - question: "Can bookmarks show up without typing :b?"
    answer: "Yes. Open TabCmdr Settings, choose Search & Results and turn on Bookmarks under Default Search Content. Up to five matching bookmarks then appear in normal searches."
  - question: "Where does a bookmark open?"
    answer: "Pressing Enter opens it in a new tab. The highlighted row also has buttons to open the bookmark in an incognito window or copy its address."
relatedTitle: "Related features"
related:
  - search-bookmarks
  - search-history
  - search-open-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in ways to find a bookmark {.way-chrome}

- **Address bar.** Type `@bookmarks` in the address bar and press {{< kbd "Tab" >}} or {{< kbd "Space" >}}. Then type a few keywords and pick the bookmark from the results.
- **Bookmark Manager.** Press {{< kbd "Ctrl" "Shift" "O" >}} on Windows and Linux, or {{< kbd "⌘" "Option" "B" >}} on a Mac. You can also open the More menu (⋮), choose **Bookmarks and lists** and then **Bookmark Manager**.
- **Bookmarks bar.** Press {{< kbd "Ctrl" "Shift" "B" >}} on Windows and Linux, or {{< kbd "⌘" "Shift" "B" >}} on a Mac, to show or hide it, then click a bookmark.

Source: Google's [bookmarks](https://support.google.com/chrome/answer/188842) and [keyboard shortcuts](https://support.google.com/chrome/answer/157179) help pages, checked in October 2026.

## Find any bookmark by name or folder with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. It searches every bookmark you have, wherever it's filed, from the page you're on.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type `:b` and a word from the bookmark

`:b` on its own lists all your bookmarks. Add a word to narrow the list. Here, `:b figma` finds two design files. The folder each bookmark is saved in shows on the right of its row.

{{< screenshot src="bookmarks-search-figma.png" alt="TabCmdr palette with :b figma typed, showing two Figma bookmarks saved in Bookmarks bar, Work, Design" caption="`:b figma` finds bookmarks by name and address, with the folder path on each row." >}}

Each word matches the start of a word in the bookmark's name or address, so `:b fig` already finds them.

### Step 3: Press Enter

The highlighted bookmark opens in a new tab. Press {{< kbd "↓" >}} or {{< kbd "↑" >}} to pick a different row first. The highlighted row also has buttons to open it in an incognito window or copy its address, which TabCmdr confirms with URL copied.

## Find bookmarks by the folder they're in {.way-tabcmdr}

Folder names are part of the search. If you remember where you saved something but not what it's called, type the folder name. Here, `:b design` lists everything in the Design folder, including the two Figma files whose names don't contain the word.

{{< screenshot src="bookmarks-search-folder.png" alt="TabCmdr palette with :b design typed, listing three bookmarks from the Work, Design folder" caption="`:b design` matches the Design folder as well as bookmark names." >}}

A match in the bookmark's name ranks above a match in its folder, so the bookmark called Design system docs comes first.

## Show bookmarks in every search {.way-tabcmdr}

By default, bookmarks only appear when you type `:b` or switch to the **Bookmarks** filter with {{< kbd "→" >}}. To have them show up in normal searches too:

1. Open the palette, type `settings` and press {{< kbd "Enter" >}} on **TabCmdr Settings**.
2. Choose **Search & Results** in the sidebar.
3. Under **Default Search Content**, turn on **Bookmarks**.

{{< screenshot src="bookmarks-default-setting.png" alt="TabCmdr settings, Search and Results pane, with Bookmarks turned on under Default Search Content" caption="Turn on Bookmarks to include them in normal searches." >}}

Now a search like `invoice` shows matching bookmarks next to your tabs, up to five at a time.

{{< screenshot src="bookmarks-in-all-search.png" alt="TabCmdr palette with invoice typed, showing a bookmark called Invoice template above web search options" caption="With Bookmarks on, a normal search includes matching bookmarks." >}}
