---
title: "Reopen Recently Closed Tabs with the Keyboard | TabCmdr"
linkTitle: "Recently closed tabs"
description: "Closed a tab by mistake? Type :r to see your recently closed tabs newest first, search them by title and press Enter to reopen the one you need."
ogTitle: "Get back the tab you just closed"
ogDescription: "Type :r to list recently closed tabs newest first, with when you closed each one. Search them by title or address and press Enter to reopen."
weight: 50
date: 2026-10-06
lastmod: 2026-10-06
group: find
icon: i-undo
token: ":r"
docs: recently-closed
eyebrow: "Recently closed"
heading: "Closed a tab you still needed?"
headingMuted: "Get it back in two keystrokes."
lead: "Every tab you close goes into a list you can search. Press [kbd:mod][kbd:K] and type `:r` to see them newest first, then press [kbd:↵] to reopen one."
howTitle: "Reopen a closed tab in three steps"
demo:
  name: browser-palette
  layout: wide
  tour: closed
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "List closed tabs"
    typed: ":r"
    text: "Newest first. Add a word to search them."
  - title: "Reopen it"
    keys: ["↵"]
    text: "The highlighted tab opens again."
showcase:
  title: "How reopening closed tabs works"
  lead: "TabCmdr reads the browser's own list of recently closed tabs, so there is nothing to set up and nothing extra stored."
  rows:
    - title: "Newest first, with when you closed it"
      text: "`:r` lists the tabs you closed with the most recent at the top. Each row shows how long ago you closed it, such as Just now, 18m ago or 3h ago. TabCmdr reads up to 24 recent entries from the browser and lists the tabs among them."
      points:
        - "Type a word after `:r` to search closed tabs by title or address."
        - "Closed windows aren't in this list. Undo Close Tab can still bring the last one back."
        - "Up to five closed tabs also show in the default list before you type anything."
      mock: mocks/palette
      palette:
        query: ":r"
        groups:
          - label: "Recently Closed"
            rows:
              - { host: docs.google.com, title: "Expense report October - Google Sheets", sub: "Recently closed", meta: "2m ago", type: i-rotate-ccw, selected: true }
              - { host: timeout.com, title: "Lisbon day trips - Time Out", sub: "Recently closed", meta: "18m ago", type: i-rotate-ccw }
              - { host: seriouseats.com, title: "Sourdough starter, day 3 - Serious Eats", sub: "Recently closed", meta: "1h ago", type: i-rotate-ccw }
              - { host: notion.so, title: "Standup notes - Notion", sub: "Recently closed", meta: "3h ago", type: i-rotate-ccw }
    - title: "Closed tabs show up in every search"
      text: "In a normal search, matching closed tabs appear below your open tabs and recent history. Type a word from the page and you'll find it whether the tab is still open or not."
      points:
        - "Press [kbd:Tab] to move to the Recently Closed filter for the full list."
        - "Closed a page days ago? It may not be in this list anymore, but `:h` searches your history for it."
      mock: mocks/palette
      palette:
        query: "lisbon"
        highlight: ["lisbon"]
        groups:
          - label: "History"
            rows:
              - { host: google.com, title: "Flights to Lisbon - Google Flights", sub: "https://www.google.com/travel/flights?q=lisbon", meta: "Yesterday", type: i-clock, actions: history, selected: true }
          - label: "Recently Closed"
            rows:
              - { host: timeout.com, title: "Lisbon day trips - Time Out", sub: "Recently closed", meta: "18m ago", type: i-rotate-ccw }
    - title: "Undo Close Tab, without the list"
      text: "Run **Undo Close Tab** to reopen the last tab you closed in one step. Type `undo`, press [kbd:↵], and TabCmdr confirms with Tab restored, or tells you No recently closed tabs."
      points:
        - "Undo Close Tab is one of TabCmdr's 47 browser commands, so `:c undo` finds it too."
        - "If the last thing you closed was a whole window, Undo Close Tab brings the window back."
      mock: mocks/palette
      palette:
        query: ":c undo"
        highlight: ["undo"]
        toast: "Tab restored"
        groups:
          - label: "Commands"
            rows:
              - { glyph: i-undo, title: "Undo Close Tab", sub: "Page command", type: i-terminal, selected: true }
detailsTitle: "More reasons to reopen tabs this way"
details:
  - icon: i-search
    title: "Search by title or address"
    text: "Type any word after `:r` to narrow the list, instead of reopening tabs one by one until the right one comes back."
  - icon: i-copy-minus
    title: "A safety net for cleanups"
    text: "Closed more than you meant to with Close Duplicate Tabs or Close Other Tabs? Those tabs are in Recently Closed too."
  - icon: i-history
    title: "Older pages are in history"
    text: "The browser keeps a short list of closed tabs. For anything older, `:h` searches your browsing history."
  - icon: i-keyboard
    title: "No mouse needed"
    text: "Open the palette, type `:r` and press [kbd:↵]. Your hands stay on the keyboard the whole time."
  - icon: i-key
    title: "One optional permission"
    text: "Recently Closed uses the closed tabs permission. Grant it once from the palette, and turn it off any time in settings."
  - icon: i-shield
    title: "Nothing extra stored"
    text: "The list comes from the browser's own session history. TabCmdr reads it when the palette opens and keeps no copy."
faqTitle: "Questions about reopening closed tabs"
faq:
  - question: "How do I reopen a closed tab in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `:r` and press Enter to reopen the tab you closed last, or pick another one with the arrow keys. The browser's own shortcut, ⌘⇧T or Ctrl+Shift+T, reopens only the last one."
  - question: "How many closed tabs can I get back?"
    answer: "TabCmdr reads up to 24 recent entries from the browser's recently closed list and shows the tabs among them. For older pages, search your history with `:h`."
  - question: "Can I search my closed tabs?"
    answer: "Yes. Type a word after `:r`, such as `:r invoice`, to find a closed tab by its title or address."
  - question: "Does it show closed windows?"
    answer: "No, the list shows tabs only. To bring back a window you just closed, run Undo Close Tab, which restores the last thing you closed, tab or window."
  - question: "Why is the list empty?"
    answer: "Either the closed tabs permission isn't on yet, in which case the palette shows a Grant Permission button, or you haven't closed any tabs recently."
  - question: "Does TabCmdr store the tabs I close?"
    answer: "No. The list comes from the browser itself. TabCmdr reads it when you open the palette and doesn't save it anywhere."
related:
  - search-history
  - search-open-tabs
  - close-duplicate-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
