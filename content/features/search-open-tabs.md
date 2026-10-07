---
title: "Search All Open Tabs Across Windows in Chrome | TabCmdr"
linkTitle: "Tab search"
description: "Lost among 40 open tabs? Press ⌘K or Ctrl+K, type a word from a tab's title or address, and jump straight to it in whichever Chrome window it's in."
ogTitle: "Find any open tab in seconds, in any window"
ogDescription: "Press ⌘K or Ctrl+K, type a few letters of a tab's title or address and press Enter. TabCmdr searches every open tab in every Chrome window."
weight: 10
date: 2026-10-06
lastmod: 2026-10-06
group: find
icon: i-search
token: ":t"
docs: tabs
eyebrow: "Tab search"
heading: "Too many tabs to find one?"
headingMuted: "Type a few letters, jump to it."
lead: "Search every open tab, in every window, from one box. Press [kbd:mod][kbd:K], type a few letters of a title or address, and press [kbd:↵] to jump to it."
howTitle: "Search open tabs in three steps"
demo:
  name: browser-palette
  layout: wide
  tour: tabs
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Type a few letters"
    typed: "pull"
    text: "Any word from the tab's title or address."
  - title: "Jump to the tab"
    keys: ["↵"]
    text: "Even when it's in another window."
showcase:
  title: "How tab search finds the right tab"
  lead: "Tab search ranks every open tab while you type, puts your tabs in the order you choose, and lets you act on a tab without leaving the list."
  rows:
    - title: "Search tabs by any word in the title or address"
      text: "TabCmdr indexes the title and the address of every open tab. A word in the title counts for more than the same word in the address, so the tab you mean usually lands at the top. Every word you type must match, which narrows a list of 40 tabs to one or two in a few letters."
      points:
        - "Each word matches the start of a word, so `pul` already finds Pull requests."
        - "Words of five letters or more allow a typo: `onbording` still finds Onboarding flow v3."
        - "Once you allow history access, pages from the last week show up under your tabs, so a tab you already closed is a few rows down."
      mock: mocks/word-order
    - title: "Every window in one list, sorted your way"
      text: "Tabs from all your windows sit in one list. In settings you pick the order: the order of your tab bar, the tabs you used most recently, A to Z by title, or grouped by site. You also choose where the tab you're on goes: always first, always last or sorted with the rest."
      points:
        - "Pick **Recently Used** and **Always last**, and the tab you were on before this one moves to the top. [kbd:mod][kbd:K] then [kbd:↵] flips back to it."
        - "`:p` lists only your pinned tabs, and `:t` lists your tabs together with commands."
        - "Pinned tabs are in the list by default. Leave them out in settings if you never switch to them."
      mock: mocks/tab-order
    - title: "Act on a tab without switching to it"
      text: "The highlighted row has its own buttons. Reload a tab, mute it, pin it, duplicate it, open it in an incognito window, take it out of its tab group, move it to a new window, copy its address or close it. The list stays open, so you can move straight on to the next tab."
      points:
        - "[kbd:mod][kbd:⌫] closes the highlighted tab from the keyboard. On Windows and Linux use Ctrl+Backspace or Ctrl+Delete."
        - "Each action confirms itself with a short message, like Tab muted or URL copied."
        - "Closed one by mistake? `:r` lists recently closed tabs, newest first."
      mock: demos/row-actions
      interactive: true
detailsTitle: "More reasons to switch tabs this way"
details:
  - icon: i-zap
    title: "Opens in one frame"
    text: "In our open-time benchmark the palette appears 14 ms after the shortcut, in the same frame as the keypress, so you can start typing straight away."
  - icon: i-undo
    title: "Closed tabs, too"
    text: "`:r` lists the tabs you closed, newest first, with how long ago you closed each one. [kbd:↵] reopens it."
  - icon: i-history
    title: "History in the same box"
    text: "Recent history shows under your tabs, and you can add bookmarks to the same list in settings. `:h`, `:b` and `:d` search only history, bookmarks or downloads."
  - icon: i-sliders
    title: "Filters on the Tab key"
    text: "[kbd:Tab] steps through All, Tabs, Bookmarks, History, Downloads, Recently Closed and Tools without touching the mouse."
  - icon: i-keyboard
    title: "Your own shortcut"
    text: "Keep [kbd:mod][kbd:K], or record a different shortcut in settings if another app already uses it. Clicking the TabCmdr toolbar icon opens the palette too."
  - icon: i-shield
    title: "Your tabs stay in your browser"
    text: "Titles and addresses are read when the palette opens and dropped when it closes. They aren't sent anywhere, and there's no account or analytics."
faqTitle: "Questions about searching tabs"
faq:
  - question: "How do I search all my open tabs in Chrome?"
    answer: "Install TabCmdr, press ⌘K on a Mac or Ctrl+K on Windows and Linux, and type part of a tab's title or address. Matching tabs from every window show up as you type. Press Enter to switch to the highlighted one."
  - question: "Does it find tabs in other windows?"
    answer: "Yes. The list includes the tabs in all your open windows. When you pick one, TabCmdr switches to that tab and brings its window to the front."
  - question: "Can I change the keyboard shortcut?"
    answer: "Yes. If another app already uses ⌘K or Ctrl+K, record a different shortcut in TabCmdr's settings. You can also open the palette by clicking the TabCmdr icon in the toolbar."
  - question: "Can it jump back to the tab I was just on?"
    answer: "Yes. In settings, sort tabs by Recently Used and set the current tab to Always last. The tab you used before this one is then at the top of the list, so the shortcut followed by Enter takes you back."
  - question: "Does it search bookmarks and history too?"
    answer: "Yes. Once you allow history access, recent pages show up under your open tabs, and you can add bookmarks to the same list in settings. To search only one of them, start with `:b` for bookmarks or `:h` for history."
  - question: "Does tab search work on chrome:// pages?"
    answer: "Browsers don't let extensions draw on their own pages, such as chrome://settings or the Chrome Web Store. On those pages TabCmdr opens in a separate window instead, so you can still search and switch tabs."
  - question: "Does TabCmdr read what's on my tabs?"
    answer: "No. Tab search uses each tab's title and address. The text of a page is only read if you ask AI chat about it with `@page`."
related:
  - close-duplicate-tabs
  - recently-closed-tabs
  - search-history
sitemap:
  priority: 0.8
  changefreq: monthly
---
