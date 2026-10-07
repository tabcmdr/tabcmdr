---
title: "Close Tabs to the Right or Left in Chrome | TabCmdr"
linkTitle: "Close surrounding tabs"
description: "Done with the tabs after this one? Close every tab to the right, to the left, or all but the one you're on, in one command. Pinned tabs always stay open."
ogTitle: "Close every tab to the right in one command"
ogDescription: "Press ⌘K, type right, left or other and press Enter. TabCmdr closes those tabs in the window you're in and leaves your pinned tabs alone."
weight: 80
date: 2026-10-06
lastmod: 2026-10-06
group: tidy
icon: i-arrow-right-line
docs: page-commands
eyebrow: "Close tabs to the left or right"
heading: "Done with the tabs to the right?"
headingMuted: "Close them in one go."
lead: "Close every tab to the right, to the left, or all but the one you're on. Press [kbd:mod][kbd:K], type `right` and press [kbd:↵]."
demo:
  name: cleanup
  layout: split
  band: band-dark
howTitle: "Close tabs to the right in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Pick a side"
    typed: "right"
    text: "Or type left, or other to keep only this tab."
  - title: "Run it"
    keys: ["↵"]
    text: "The unpinned tabs on that side close."
showcase:
  title: "What each close command keeps"
  lead: "All three start from the tab you opened the palette on and only touch the window you're in. Pinned tabs never close."
  rows:
    - title: "Close Tabs to the Right or to the Left"
      text: "TabCmdr looks at where the current tab sits in the tab bar and closes every tab on the side you pick. The tabs on the other side stay where they are. Your other windows aren't touched."
      points:
        - "A pinned tab on that side stays open."
        - "A short message says how many closed, like **Closed 3 tabs**."
        - "Nothing on that side? You see **No tabs to the right** or **No tabs to the left**."
      mock: mocks/preview
      preview:
        type: strip
        toast: "Closed 3 tabs"
        tabs:
          - { host: docs.google.com, title: "Q3 roadmap", state: active }
          - { host: news.ycombinator.com, title: "Hacker News", state: gone }
          - { host: youtube.com, title: "Design review", state: gone }
          - { host: notion.so, title: "Launch plan", state: gone }
    - title: "Close Other Tabs keeps only the one you're on"
      text: "Close Other Tabs closes every tab in the current window except the tab you're on and your pinned tabs. Use it to get back to one page without closing the window."
      points:
        - "Type `other` to find it under Commands."
        - "If there's nothing else to close, you see **No other tabs to close**."
      mock: mocks/palette
      palette:
        query: ":c other"
        highlight: ["other"]
        toast: "Closed 6 tabs"
        groups:
          - label: "Commands"
            rows:
              - { glyph: i-x, title: "Close Other Tabs", sub: "Page command", type: i-terminal, selected: true }
    - title: "Closed one too many? Bring it back"
      text: "Tabs you close this way go to the browser's list of recently closed tabs. Type `:r` to see them newest first and press [kbd:↵] to reopen one, or run **Undo Close Tab** to bring back the last one."
      points:
        - "Both use the Recently Closed permission, which you turn on in settings."
        - "Each row shows when you closed the tab, such as Just now."
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
  - icon: i-x
    title: "Close one tab from the list"
    text: "Highlight any tab in the palette and press [kbd:mod][kbd:⌫] to close it without switching to it."
  - icon: i-moon
    title: "Suspend instead of close"
    text: "Want to keep the tabs but not the memory they use? Suspend Inactive Tabs unloads them and leaves them in the bar."
  - icon: i-layers
    title: "Merge All Windows into One"
    text: "Moves the tabs from your other windows into this one first, so one cleanup covers all of them."
faqTitle: "Questions about closing tabs to one side"
faq:
  - question: "How do I close all tabs to the right in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `right` and press Enter on Close Tabs to the Right. Every unpinned tab to the right of the one you're on closes."
  - question: "How do I close all tabs except the current one?"
    answer: "Run Close Other Tabs. It closes every tab in the current window except the one you're on and any pinned tabs."
  - question: "Can I close all tabs to the left?"
    answer: "Yes. Type `left` and press Enter on Close Tabs to the Left. It works like Close Tabs to the Right, on the other side of the current tab."
  - question: "Are pinned tabs closed too?"
    answer: "No. All three commands skip pinned tabs, even when they sit on the side you're closing."
  - question: "Does it close tabs in my other windows?"
    answer: "No. These commands only change the window you're in. To close copies of a page in every window, use Close Duplicate Tabs."
  - question: "Can I get the closed tabs back?"
    answer: "Yes. Type `:r` to list recently closed tabs and press Enter to reopen one, or run Undo Close Tab for the last one. Both need the Recently Closed permission, which you turn on in settings."
related:
  - close-duplicate-tabs
  - suspend-inactive-tabs
  - merge-windows
sitemap:
  priority: 0.8
  changefreq: monthly
---
