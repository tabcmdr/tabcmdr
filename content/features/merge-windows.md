---
title: "Merge All Chrome Windows into One | TabCmdr"
linkTitle: "Merge windows"
description: "Tabs spread across five Chrome windows? Run Merge All Windows into One and every tab moves into the window you're in. The windows it empties then close."
ogTitle: "Pull every window's tabs into one"
ogDescription: "Press ⌘K, type merge and press Enter. TabCmdr moves the tabs from all your other windows into this one and closes the empty windows."
weight: 90
date: 2026-10-06
lastmod: 2026-10-06
group: tidy
icon: i-layers
docs: page-commands
eyebrow: "Merge windows"
heading: "Tabs scattered across windows?"
headingMuted: "Pull them all into one."
lead: "Move every tab from your other windows into the one you're on. Press [kbd:mod][kbd:K], type `merge` and press [kbd:↵]."
demo:
  name: cleanup
  layout: split
  band: band-dark
howTitle: "Merge windows in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "In the window you want to keep."
  - title: "Find the command"
    typed: "merge"
    text: "Merge All Windows into One shows under Commands."
  - title: "Run it"
    keys: ["↵"]
    text: "The tabs move in and the other windows close."
showcase:
  title: "How Merge All Windows into One works"
  lead: "The window you're in is the one that stays. Tabs from your other browser windows join it, and the windows they came from close."
  rows:
    - title: "New tabs join at the end"
      text: "The tabs already in this window keep their places. Tabs from your other windows are added after them, one window after another. When a window has no tabs left, TabCmdr closes it."
      points:
        - "A message says how many tabs moved, like **Merged 3 tabs into one window**."
        - "With only one window open you see **Only one window open**, and nothing changes."
        - "Pop-up windows aren't merged. Only regular browser windows are."
      mock: mocks/preview
      preview:
        type: strip
        toast: "Merged 3 tabs into one window"
        tabs:
          - { host: mail.google.com, title: "Inbox" }
          - { host: docs.google.com, title: "Q3 roadmap", state: active }
          - { host: calendar.google.com, title: "Calendar" }
          - { host: app.slack.com, title: "#design" }
          - { host: dashboard.stripe.com, title: "Payments" }
    - title: "Then tidy the window you merged into"
      text: "Putting windows together often puts copies of the same page in one tab bar. Run **Close Duplicate Tabs** to keep one of each, then **Sort Tabs Alphabetically** to put the window in A to Z order."
      points:
        - "Both commands are a few letters away: `dup` and `sort`."
        - "Sorting goes by tab title, and pinned tabs stay at the start."
      mock: mocks/palette
      palette:
        query: ":c sort"
        highlight: ["sort"]
        toast: "Sorted 13 tabs alphabetically"
        groups:
          - label: "Commands"
            rows:
              - { glyph: i-sort, title: "Sort Tabs Alphabetically", sub: "Page command", type: i-terminal, selected: true }
    - title: "Give one tab its own window again"
      text: "Merged a tab you wanted on its own? Find it in the palette and click **Move to new window** on its row. To do the same with the tab you're on, run **Move Tab to New Window**."
      points:
        - "The palette stays open, so you can move several tabs in a row."
        - "Each move confirms with **Moved to new window**."
      mock: mocks/palette
      palette:
        query: "slack"
        highlight: ["slack"]
        tip: "Move to new window"
        toast: "Moved to new window"
        groups:
          - label: "Tabs"
            rows:
              - { host: app.slack.com, title: "#design - acme - Slack", sub: "https://app.slack.com/client/T0A1/C0D3", type: i-monitor, actions: tab, selected: true }
detailsTitle: "More commands for a tidy tab bar"
details:
  - icon: i-copy-minus
    title: "Close Duplicate Tabs"
    text: "Closes the extra copies of a page in every window and keeps one of each."
  - icon: i-arrow-right-line
    title: "Close Tabs to the Right"
    text: "Closes every tab to the right of the one you're on. Close Tabs to the Left does the other side."
  - icon: i-x
    title: "Close Other Tabs"
    text: "Keeps the tab you're on and your pinned tabs, and closes the rest of the window."
  - icon: i-moon
    title: "Suspend Inactive Tabs"
    text: "A big window uses a lot of memory. This unloads every tab you aren't looking at, apart from pinned tabs."
  - icon: i-search
    title: "Find tabs in any window"
    text: "No need to merge just to find a tab. Tab search lists the tabs from all your windows in one list."
  - icon: i-rotate
    title: "Reload All Tabs"
    text: "Reloads every tab in the current window and tells you how many, like Reloading 8 tabs."
faqTitle: "Questions about merging windows"
faq:
  - question: "How do I merge all Chrome windows into one?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux in the window you want to keep, type `merge` and press Enter on Merge All Windows into One. The tabs from your other windows move into it."
  - question: "Which window do the tabs go to?"
    answer: "The window you're in when you run the command. Its own tabs keep their places, and the tabs from other windows are added at the end."
  - question: "What happens to the other windows?"
    answer: "Once their tabs have moved, TabCmdr closes them. You end up with one window."
  - question: "Are pop-up windows merged too?"
    answer: "No. Only regular browser windows are merged. Pop-up windows, such as the one TabCmdr opens on chrome:// pages, stay as they are."
  - question: "How do I split a tab back out?"
    answer: "Find the tab in the palette and click Move to new window on its row, or run Move Tab to New Window on the tab you're on."
  - question: "Does it work in Edge, Brave and Arc?"
    answer: "Yes. TabCmdr runs in Chrome, Edge, Brave, Arc, Vivaldi, Opera and other Chromium-based browsers, and installs from the Chrome Web Store."
related:
  - close-duplicate-tabs
  - sort-tabs
  - search-open-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
