---
title: "Close All Tabs to the Left with One Command | TabCmdr"
linkTitle: "Close tabs to the left"
description: "Chrome has no Close tabs to the left option. TabCmdr adds one: close every tab before the one you're on in one command, and keep your pinned tabs open."
ogTitle: "Close every tab to the left in one command"
ogDescription: "Press ⌘K, type left and press Enter. TabCmdr closes the tabs before this one in the window you're in and keeps your pinned tabs at the start."
weight: 84
date: 2026-10-25
lastmod: 2026-10-25
group: tidy
icon: i-arrow-left-line
docs: page-commands
eyebrow: "Close tabs to the left"
heading: "Done with the tabs before this one?"
headingMuted: "Close them in one go."
lead: "Close every tab to the left of the one you're on and keep your pinned tabs. Press [kbd:mod][kbd:K], type `left` and press [kbd:↵]."
demo:
  name: cleanup
  layout: split
  band: band-dark
  commands: [left, right, others, duplicates, sort, merge]
howTitle: "Close tabs to the left in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On the tab you want to keep as the first one. Ctrl+K on Windows and Linux."
  - title: "Find the command"
    typed: "left"
    text: "Close Tabs to the Left shows under Commands."
  - title: "Run it"
    keys: ["↵"]
    text: "Every unpinned tab before this one closes."
showcase:
  title: "What Close Tabs to the Left closes"
  lead: "It starts from the tab you opened the palette on and only changes the window you're in. Pinned tabs never close."
  rows:
    - title: "Every tab before this one"
      text: "TabCmdr looks at where the current tab sits in the tab bar and closes every tab before it. The tabs after it stay where they are, and so do the tabs in your other windows."
      points:
        - "A message at the bottom of the page says how many closed, like **Closed 3 tabs**."
        - "Nothing to the left? You see **No tabs to the left**."
      mock: mocks/preview
      preview:
        type: strip
        tabs:
          - { host: calendar.google.com, title: "Calendar", state: gone }
          - { host: github.com, title: "Pull requests", state: gone }
          - { host: news.ycombinator.com, title: "Hacker News", state: gone }
          - { host: docs.google.com, title: "Q4 planning", state: active }
          - { host: youtube.com, title: "Team sync" }
    - title: "Your pinned tabs stay at the start"
      text: "Pinned tabs sit at the start of the tab bar, so they're always to your left. Close Tabs to the Left skips them, and the tab bar ends up as your pinned tabs, then the tab you're on, then everything after it."
      points:
        - "Tabs in a tab group close like any other tab, even when the group is collapsed."
        - "Type `:c left` to search only commands."
      mock: mocks/palette
      palette:
        query: ":c left"
        highlight: ["left"]
        toast: "Closed 3 tabs"
        groups:
          - label: "Commands"
            rows:
              - { glyph: i-arrow-left-line, title: "Close Tabs to the Left", sub: "Page command", type: i-terminal, selected: true }
    - title: "Closed one too many? Bring it back"
      text: "Every tab it closes gets its own row in Recently Closed. Type `:r` to see them, newest first, and press [kbd:↵] to reopen the one you want."
      points:
        - "Each row shows when you closed the tab, such as Just now."
        - "Undo Close Tab brings back one tab each time you run it."
      mock: mocks/recently-closed
detailsTitle: "More ways to clear out tabs"
details:
  - icon: i-arrow-right-line
    title: "Close Tabs to the Right"
    text: "The same command for the other side. It closes every tab after the one you're on."
  - icon: i-x
    title: "Close Other Tabs"
    text: "Closes both sides at once. Only the tab you're on and your pinned tabs are left in the window."
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
faqTitle: "Questions about closing tabs to the left"
faq:
  - question: "Can Chrome close tabs to the left?"
    answer: "Not in one click. Chrome's tab menu has Close tabs to the right and Close other tabs, but no option for the left side. You can Shift-click to highlight the tabs on the left, then right-click one and choose Close."
  - question: "How do I close all tabs to the left with TabCmdr?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `left` and press Enter on Close Tabs to the Left. Every unpinned tab before the one you're on closes."
  - question: "Are pinned tabs closed too?"
    answer: "No. Pinned tabs are always on the left of the tab bar, and Close Tabs to the Left leaves them open."
  - question: "Does it close tabs in a tab group?"
    answer: "Yes. Grouped tabs to the left of yours close too, including the tabs in a collapsed group."
  - question: "Does it close tabs in my other windows?"
    answer: "No. It only changes the window you're in."
  - question: "Can I get the closed tabs back?"
    answer: "Yes. Type `:r` to list recently closed tabs and press Enter on the one you want, or run Undo Close Tab for the last one."
related:
  - close-tabs-to-the-right
  - close-tabs-left-right
  - recently-closed-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
