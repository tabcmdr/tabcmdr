---
title: "Sort Chrome Tabs Alphabetically by Title | TabCmdr"
linkTitle: "Sort tabs"
description: "Can't find anything in a messy tab bar? Sort Tabs Alphabetically puts the tabs in this window in A to Z order by title. Pinned tabs stay at the start."
ogTitle: "Sort your tab bar A to Z in one command"
ogDescription: "Press ⌘K, type sort and press Enter. TabCmdr puts the tabs in this window in order by title and keeps your pinned tabs at the start."
weight: 110
date: 2026-10-06
lastmod: 2026-10-06
group: tidy
icon: i-sort
docs: page-commands
eyebrow: "Sort tabs"
heading: "Tab bar in a random order?"
headingMuted: "Sort it A to Z in one command."
lead: "Put every tab in this window in A to Z order by its title. Press [kbd:mod][kbd:K], type `sort` and press [kbd:↵] to sort them."
demo:
  name: cleanup
  layout: split
  band: band-dark
howTitle: "Sort your tabs in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Find the command"
    typed: "sort"
    text: "Sort Tabs Alphabetically shows under Commands."
  - title: "Run it"
    keys: ["↵"]
    text: "The tabs in this window move into order."
showcase:
  title: "How Sort Tabs Alphabetically orders your tabs"
  lead: "It reads each tab's title and moves the tabs into order. Only the window you're in changes, and no tab is closed or reloaded."
  rows:
    - title: "A to Z by the title on the tab"
      text: "The sort uses the title you see on the tab, not its address. Upper and lower case count the same, so `alpha` comes before `Bravo`. Titles usually start with the page name, so two Google Docs sort by document name."
      points:
        - "The message counts every tab in the window, like **Sorted 5 tabs alphabetically**."
        - "Your other windows keep their order."
      mock: mocks/preview
      preview:
        type: strip
        toast: "Sorted 5 tabs alphabetically"
        tabs:
          - { host: calendar.google.com, title: "Calendar" }
          - { host: news.ycombinator.com, title: "Hacker News" }
          - { host: mail.google.com, title: "Inbox", state: active }
          - { host: notion.so, title: "Launch plan" }
          - { host: github.com, title: "Pull requests" }
    - title: "Pinned tabs stay at the start"
      text: "Pinned tabs are sorted among themselves and stay in front. The rest are sorted after them, so a pinned tab never lands in the middle of the bar. Pin a tab and it always ends up ahead of the others."
      points:
        - "Click **Pin tab** on any row in the palette to pin that tab."
        - "`:p` lists only your pinned tabs, from every window."
      mock: mocks/palette
      palette:
        query: "hacker"
        highlight: ["hacker"]
        tip: "Pin tab"
        toast: "Tab pinned"
        groups:
          - label: "Tabs"
            rows:
              - { host: news.ycombinator.com, title: "Hacker News", sub: "https://news.ycombinator.com/", type: i-monitor, actions: tab, selected: true }
    - title: "Tab groups aren't kept together"
      text: "The sort goes by title alone and doesn't look at tab groups. When a grouped tab moves past tabs outside its group, the browser can take it out of the group. If you use groups, sort first and group afterwards."
      points:
        - "Want the palette list in A to Z order instead? Pick **Alphabetical** under Open Tabs Order in settings. Your tab bar stays as it is."
        - "Sorting only moves tabs. Nothing closes or reloads."
      mock: mocks/palette
      palette:
        query: ":c sort"
        highlight: ["sort"]
        toast: "Sorted 10 tabs alphabetically"
        groups:
          - label: "Commands"
            rows:
              - { glyph: i-sort, title: "Sort Tabs Alphabetically", sub: "Page command", type: i-terminal, selected: true }
detailsTitle: "More commands for a tidy tab bar"
details:
  - icon: i-copy-minus
    title: "Close Duplicate Tabs"
    text: "Run it before sorting so the same page doesn't show up twice in a row."
  - icon: i-layers
    title: "Merge All Windows into One"
    text: "Brings the tabs from your other windows into this one, so a single sort covers them all."
  - icon: i-arrow-right-line
    title: "Close Tabs to the Right"
    text: "Closes every tab to the right of the one you're on. Pinned tabs stay."
  - icon: i-moon
    title: "Suspend Inactive Tabs"
    text: "Unloads the tabs in this window you aren't looking at. They load again when you click them."
  - icon: i-sliders
    title: "Group by Site in the list"
    text: "Open Tabs Order in settings can also keep tabs from the same site together in the palette."
  - icon: i-search
    title: "Or skip the scrolling"
    text: "Type a few letters of a tab's title and press [kbd:↵] to jump to it, wherever it sits."
faqTitle: "Questions about sorting tabs"
faq:
  - question: "How do I sort tabs alphabetically in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `sort` and press Enter on Sort Tabs Alphabetically. The tabs in the current window move into A to Z order by title."
  - question: "Does it sort by title or by address?"
    answer: "By title, the text you see on the tab. Upper and lower case are treated the same."
  - question: "What happens to pinned tabs?"
    answer: "They stay at the start of the tab bar and are sorted A to Z among themselves. Your other tabs are sorted after them."
  - question: "Does it sort every window?"
    answer: "No, only the window you're in. To sort all your tabs together, run Merge All Windows into One first."
  - question: "Will sorting break my tab groups?"
    answer: "It can. The sort ignores groups, and the browser may take a tab out of its group when it moves. If you use groups, sort before you group."
  - question: "Can I sort the palette list without changing the tab bar?"
    answer: "Yes. In settings, under Open Tabs Order, pick Alphabetical. The list of tabs in the palette is then A to Z, and the tab bar keeps its order."
related:
  - close-duplicate-tabs
  - merge-windows
  - search-open-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
