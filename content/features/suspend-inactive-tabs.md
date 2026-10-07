---
title: "Suspend Inactive Tabs to Free Up Memory | TabCmdr"
linkTitle: "Suspend tabs"
description: "Chrome slow with 30 tabs open? Suspend Inactive Tabs unloads every tab in this window except the one you're on and pinned tabs. Click a tab to load it again."
ogTitle: "Free up memory from tabs you aren't using"
ogDescription: "Press ⌘K, type suspend and press Enter. Every tab you aren't looking at unloads but stays in the tab bar, and loads again when you click it."
weight: 100
date: 2026-10-06
lastmod: 2026-10-06
group: tidy
icon: i-moon
docs: page-commands
eyebrow: "Suspend inactive tabs"
heading: "Tabs eating your memory?"
headingMuted: "Unload the ones you're not using."
lead: "Unload every tab in this window that you're not looking at. Press [kbd:mod][kbd:K], type `suspend` and press [kbd:↵] to run it."
demo:
  name: cleanup
  layout: split
  band: band-dark
howTitle: "Suspend tabs in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Find the command"
    typed: "suspend"
    text: "Suspend Inactive Tabs shows under Commands."
  - title: "Run it"
    keys: ["↵"]
    text: "The other tabs in this window unload."
showcase:
  title: "What Suspend Inactive Tabs does"
  lead: "It uses the browser's own tab discarding. A suspended tab keeps its spot in the tab bar, but the page is unloaded until you go back to it."
  rows:
    - title: "Inactive means every tab but the one you're on"
      text: "TabCmdr doesn't time how long a tab has sat idle. When you run the command, every tab in the current window is suspended except the tab you're looking at and your pinned tabs. Tabs that are already suspended are skipped."
      points:
        - "Only the current window. Tabs in your other windows keep running."
        - "A message counts what was unloaded, like **Suspended 4 tabs**."
        - "If there's nothing left to unload, you see **No tabs to suspend**."
      mock: mocks/preview
      preview:
        type: strip
        toast: "Suspended 4 tabs"
        tabs:
          - { host: docs.google.com, title: "Q3 roadmap", state: active }
          - { host: mail.google.com, title: "Inbox", state: dim }
          - { host: github.com, title: "Pull requests", state: dim }
          - { host: news.ycombinator.com, title: "Hacker News", state: dim }
          - { host: notion.so, title: "Launch plan", state: dim }
    - title: "Go back to a tab and it loads again"
      text: "A suspended tab is still in your tab bar and still in TabCmdr's tab list. Click it, or find it in the palette and press [kbd:↵], and the browser loads the page again."
      points:
        - "Tab search still finds suspended tabs by title and address."
        - "Nothing is closed, so nothing ends up in Recently Closed."
      mock: mocks/palette
      palette:
        query: "hacker"
        highlight: ["hacker"]
        groups:
          - label: "Tabs"
            rows:
              - { host: news.ycombinator.com, title: "Hacker News", sub: "https://news.ycombinator.com/", type: i-monitor, actions: tab, selected: true }
    - title: "Pin the tabs that must keep running"
      text: "Pinned tabs are never suspended. Pin the tabs you need live, like your mail, and run the command whenever the browser feels slow. To pin a tab from the palette, click **Pin tab** on its row."
      points:
        - "**Pin Tab** in Commands pins the tab you're on."
        - "TabCmdr only suspends tabs when you run the command. It never does it on its own."
      mock: mocks/palette
      palette:
        query: "inbox"
        highlight: ["inbox"]
        tip: "Pin tab"
        toast: "Tab pinned"
        groups:
          - label: "Tabs"
            rows:
              - { host: mail.google.com, title: "Inbox (12) - Gmail", sub: "https://mail.google.com/mail/u/0/#inbox", type: i-monitor, actions: tab, selected: true }
detailsTitle: "More commands for a lighter browser"
details:
  - icon: i-arrow-right-line
    title: "Close Tabs to the Right"
    text: "Done with them for good? Close every tab to the right of the one you're on. Pinned tabs stay."
  - icon: i-copy-minus
    title: "Close Duplicate Tabs"
    text: "Closes the extra copies of a page in every window, so you don't keep the same page loaded twice."
  - icon: i-x
    title: "Close Other Tabs"
    text: "Keeps only the tab you're on and your pinned tabs in this window."
  - icon: i-volume-x
    title: "Mute All Tabs"
    text: "Silences every tab in every window. Unmute All Tabs turns the sound back on."
  - icon: i-rotate
    title: "Reload All Tabs"
    text: "Reloads every tab in the current window and tells you how many, like Reloading 8 tabs."
  - icon: i-sort
    title: "Sort Tabs Alphabetically"
    text: "Puts the tabs in this window in A to Z order by title, with pinned tabs first."
faqTitle: "Questions about suspending tabs"
faq:
  - question: "How do I suspend tabs in Chrome to save memory?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `suspend` and press Enter on Suspend Inactive Tabs. Every tab in the window apart from the one you're on and your pinned tabs is unloaded."
  - question: "Which tabs count as inactive?"
    answer: "Every tab in the current window except the one you're looking at. TabCmdr doesn't check how long ago you used a tab."
  - question: "Are pinned tabs suspended?"
    answer: "No. Pinned tabs are always skipped, so they keep running."
  - question: "Does it suspend tabs in my other windows?"
    answer: "No, only the window you're in. Run the command in each window you want to slim down."
  - question: "How do I wake up a suspended tab?"
    answer: "Click it in the tab bar, or find it in TabCmdr and press Enter. The browser loads the page again."
  - question: "Does TabCmdr suspend tabs automatically?"
    answer: "No. Tabs are only suspended when you run Suspend Inactive Tabs. There's no timer running in the background."
related:
  - close-duplicate-tabs
  - close-tabs-left-right
  - sort-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
