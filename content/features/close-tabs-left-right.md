---
title: "Close Other Tabs in Chrome with One Command | TabCmdr"
linkTitle: "Close other tabs"
description: "Keep the tab you're on and close the rest of the window in one command, or close just one side of it. Pinned tabs and your other windows stay as they are."
ogTitle: "Close every tab but this one"
ogDescription: "Press ⌘K, type other and press Enter. TabCmdr closes every other tab in the window you're in and leaves your pinned tabs alone."
weight: 80
date: 2026-10-06
lastmod: 2026-10-25
group: tidy
icon: i-x
docs: page-commands
eyebrow: "Close other tabs"
heading: "Only need the tab you're on?"
headingMuted: "Close the rest of the window."
lead: "Close every tab in this window except the one you're on and your pinned tabs. Press [kbd:mod][kbd:K], type `other` and press [kbd:↵]."
demo:
  name: cleanup
  layout: split
  band: band-dark
  commands: [others, right, left, duplicates, sort, merge]
howTitle: "Close other tabs in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On the tab you want to keep. Ctrl+K on Windows and Linux."
  - title: "Find the command"
    typed: "other"
    text: "Close Other Tabs shows under Commands."
  - title: "Run it"
    keys: ["↵"]
    text: "Only this tab and your pinned tabs stay."
showcase:
  title: "Three ways to close the tabs around you"
  lead: "All three start from the tab you opened the palette on and only change the window you're in. Pinned tabs never close."
  rows:
    - title: "Close Other Tabs keeps only the one you're on"
      text: "Close Other Tabs closes every tab in the current window except the tab you're on and your pinned tabs. Use it to get back to one page without closing the window."
      points:
        - "A message at the bottom of the page says how many closed, like **Closed 4 tabs**."
        - "If there's nothing else to close, you see **No other tabs to close**."
      mock: mocks/preview
      preview:
        type: strip
        tabs:
          - { host: calendar.google.com, title: "Calendar", state: gone }
          - { host: github.com, title: "Pull requests", state: gone }
          - { host: docs.google.com, title: "Q4 planning", state: active }
          - { host: news.ycombinator.com, title: "Hacker News", state: gone }
          - { host: youtube.com, title: "Team sync", state: gone }
    - title: "Or close just one side"
      text: "[Close Tabs to the Right](/features/close-tabs-to-the-right/) closes the tabs after yours, and [Close Tabs to the Left](/features/close-tabs-to-the-left/) closes the ones before it. Type `close tabs to` to see both."
      points:
        - "Tabs in a tab group close like any other tab, even when the group is collapsed."
        - "With nothing on that side, you see **No tabs to the right** or **No tabs to the left**."
      mock: mocks/palette
      palette:
        query: "close tabs to"
        highlight: ["close", "tabs", "to"]
        groups:
          - label: "Commands"
            rows:
              - { glyph: i-arrow-left-line, title: "Close Tabs to the Left", sub: "Page command", type: i-terminal, selected: true }
              - { glyph: i-arrow-right-line, title: "Close Tabs to the Right", sub: "Page command", type: i-terminal }
    - title: "Closed one too many? Bring it back"
      text: "Every tab these commands close gets its own row in Recently Closed. Type `:r` to see them, newest first, and press [kbd:↵] to reopen the one you want."
      points:
        - "Each row shows when you closed the tab, such as Just now."
        - "Undo Close Tab brings back one tab each time you run it."
      mock: mocks/recently-closed
detailsTitle: "More ways to clear out tabs"
details:
  - icon: i-pin
    title: "Pinned tabs are safe"
    text: "None of the three commands closes a pinned tab, so the tabs you keep at the start of the bar stay put."
  - icon: i-monitor
    title: "One window at a time"
    text: "Only the window you're in changes. Run the command again in another window to clean that one up."
  - icon: i-copy-minus
    title: "Close Duplicate Tabs"
    text: "Closes the extra copies of a page across all your windows and keeps one of each."
  - icon: i-keyboard
    title: "Close one tab from the list"
    text: "Highlight any tab in the palette and press [kbd:mod][kbd:⌫] to close it without switching to it."
  - icon: i-moon
    title: "Suspend instead of close"
    text: "Want to keep the tabs but not the memory they use? Suspend Inactive Tabs unloads them and leaves them in the bar."
  - icon: i-layers
    title: "Merge All Windows into One"
    text: "Moves the tabs from your other windows into this one first, so one cleanup covers all of them."
faqTitle: "Questions about closing other tabs"
faq:
  - question: "How do I close all tabs except the current one in Chrome?"
    answer: "Right-click the tab you want to keep and choose Close other tabs. With TabCmdr, press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `other` and press Enter on Close Other Tabs."
  - question: "Are pinned tabs closed too?"
    answer: "No. Close Other Tabs, Close Tabs to the Right and Close Tabs to the Left all skip pinned tabs."
  - question: "Does it close tabs in my other windows?"
    answer: "No. These commands only change the window you're in. To close copies of a page in every window, use Close Duplicate Tabs."
  - question: "Can I close only the tabs on one side?"
    answer: "Yes. Type `right` for Close Tabs to the Right or `left` for Close Tabs to the Left. Chrome's own tab menu only has the right-hand version."
  - question: "Does it close tabs in a tab group?"
    answer: "Yes. Grouped tabs close like any other tab, including the tabs in a collapsed group."
  - question: "Can I get the closed tabs back?"
    answer: "Yes. Type `:r` to list recently closed tabs and press Enter to reopen one, or run Undo Close Tab for the last one."
related:
  - close-tabs-to-the-right
  - close-tabs-to-the-left
  - close-duplicate-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
