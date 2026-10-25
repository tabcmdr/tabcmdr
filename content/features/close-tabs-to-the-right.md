---
title: "Close All Tabs to the Right with One Command | TabCmdr"
linkTitle: "Close tabs to the right"
description: "Done with the tabs after this one? Close every tab to the right of the tab you're on in one command. Pinned tabs and your other windows stay as they are."
ogTitle: "Close every tab to the right in one command"
ogDescription: "Press ⌘K, type right and press Enter. TabCmdr closes the tabs after this one in the window you're in and leaves your pinned tabs open."
weight: 82
date: 2026-10-25
lastmod: 2026-10-25
group: tidy
icon: i-arrow-right-line
docs: page-commands
eyebrow: "Close tabs to the right"
heading: "Done with the tabs after this one?"
headingMuted: "Close them in one go."
lead: "Close every tab to the right of the one you're on, in the window you're in. Press [kbd:mod][kbd:K], type `right` and press [kbd:↵]."
demo:
  name: cleanup
  layout: split
  band: band-dark
  commands: [right, left, others, duplicates, sort, merge]
howTitle: "Close tabs to the right in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On the tab you want to keep as the last one. Ctrl+K on Windows and Linux."
  - title: "Find the command"
    typed: "right"
    text: "Close Tabs to the Right shows under Commands."
  - title: "Run it"
    keys: ["↵"]
    text: "Every unpinned tab after this one closes."
showcase:
  title: "What Close Tabs to the Right closes"
  lead: "It starts from the tab you opened the palette on and only changes the window you're in. Pinned tabs never close."
  rows:
    - title: "Every tab after this one"
      text: "TabCmdr looks at where the current tab sits in the tab bar and closes every tab after it. The tabs before it stay where they are, and so do the tabs in your other windows."
      points:
        - "A message at the bottom of the page says how many closed, like **Closed 4 tabs**."
        - "Nothing to the right? You see **No tabs to the right**."
      mock: mocks/preview
      preview:
        type: strip
        tabs:
          - { host: calendar.google.com, title: "Calendar" }
          - { host: docs.google.com, title: "Q4 planning", state: active }
          - { host: github.com, title: "Pull requests", state: gone }
          - { host: news.ycombinator.com, title: "Hacker News", state: gone }
          - { host: youtube.com, title: "Team sync", state: gone }
    - title: "Pinned tabs stay, grouped tabs don't"
      text: "A pinned tab is never closed. Tabs in a tab group close like any other tab, even when the group is collapsed, so check the groups to your right before you run it."
      points:
        - "Run it from a pinned tab and every unpinned tab in the window closes. The other pinned tabs stay."
        - "Type `:c right` to search only commands."
      mock: mocks/palette
      palette:
        query: ":c right"
        highlight: ["right"]
        toast: "Closed 4 tabs"
        groups:
          - label: "Commands"
            rows:
              - { glyph: i-arrow-right-line, title: "Close Tabs to the Right", sub: "Page command", type: i-terminal, selected: true }
    - title: "Closed one too many? Bring it back"
      text: "Every tab it closes gets its own row in Recently Closed. Type `:r` to see them, newest first, and press [kbd:↵] to reopen the one you want."
      points:
        - "Each row shows when you closed the tab, such as Just now."
        - "Undo Close Tab brings back one tab each time you run it."
      mock: mocks/recently-closed
detailsTitle: "More ways to clear out tabs"
details:
  - icon: i-arrow-left-line
    title: "Close Tabs to the Left"
    text: "The same command for the other side. It closes every tab before the one you're on, and your pinned tabs at the start of the bar stay."
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
faqTitle: "Questions about closing tabs to the right"
faq:
  - question: "How do I close all tabs to the right in Chrome?"
    answer: "Right-click the tab and choose Close tabs to the right. With TabCmdr, press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `right` and press Enter on Close Tabs to the Right."
  - question: "Is there a keyboard shortcut for it?"
    answer: "Chrome doesn't have one. Its keyboard shortcuts list covers closing the current tab or window, not the tabs to one side. With TabCmdr it takes ⌘K, the word `right` and Enter."
  - question: "Are pinned tabs closed too?"
    answer: "No. Close Tabs to the Right skips pinned tabs, even when you run it from a pinned tab."
  - question: "Does it close tabs in a tab group?"
    answer: "Yes. Grouped tabs to the right of yours close too, including the tabs in a collapsed group."
  - question: "Does it close tabs in my other windows?"
    answer: "No. It only changes the window you're in. To close copies of a page in every window, use Close Duplicate Tabs."
  - question: "Can I get the closed tabs back?"
    answer: "Yes. Type `:r` to list recently closed tabs and press Enter on the one you want, or run Undo Close Tab for the last one."
related:
  - close-tabs-to-the-left
  - close-tabs-left-right
  - recently-closed-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
