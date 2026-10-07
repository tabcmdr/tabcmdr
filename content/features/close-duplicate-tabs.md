---
title: "Close Duplicate Tabs in Chrome with One Command | TabCmdr"
linkTitle: "Close duplicate tabs"
description: "Same page open three times? Run Close Duplicate Tabs from the command palette and the extra copies close in every Chrome window. One copy of each page stays."
ogTitle: "Close every duplicate tab in one command"
ogDescription: "TabCmdr checks every tab in every window, finds pages open more than once and closes the extra copies. Press ⌘K, type dup, press Enter."
weight: 20
date: 2026-10-06
lastmod: 2026-10-06
group: tidy
icon: i-copy-minus
token: ":c"
docs: page-commands
eyebrow: "Close duplicate tabs"
heading: "The same page open three times?"
headingMuted: "Close every copy at once."
lead: "Close every extra copy of a page across all your windows and keep one of each. Press [kbd:mod][kbd:K], type `dup` and press [kbd:↵]."
demo:
  name: cleanup
  layout: split
  band: band-dark
howTitle: "Close duplicate tabs in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Find the command"
    typed: "dup"
    text: "Close Duplicate Tabs shows up under Commands."
  - title: "Run it"
    keys: ["↵"]
    text: "Extra copies close in every window."
showcase:
  title: "How Close Duplicate Tabs decides what to close"
  lead: "It makes one pass over all your open tabs. The same address means a duplicate, the first copy stays, and anything it closes can be reopened."
  rows:
    - title: "Only exact copies count as duplicates"
      text: "Two tabs are duplicates when their addresses match exactly, character for character. A different part after `#` or `?` makes it a different page, so two sections of the same doc, or a filtered list next to the full one, both stay open."
      points:
        - "The same address in two tabs: one of them closes."
        - "`/edit` and `/edit#heading=h.2` are different pages, so both stay."
        - "`/pulls` and `/pulls?q=is%3Aopen` are different pages, so both stay."
      mock: mocks/duplicate-rules
    - title: "Every window, cleaned in one pass"
      text: "Close Duplicate Tabs looks at the tabs in all your open windows, not only the one you're in, so a page open in two windows counts as a duplicate too. TabCmdr keeps the first copy it finds and closes the rest."
      points:
        - "Pinned tabs count like any other tab. A pinned tab sits first in its window, so in that window it's the copy that stays."
        - "The tab you're on can be one of the copies that closes."
        - "To tidy only this window, use Close Tabs to the Right, Close Tabs to the Left or Close Other Tabs. They work on the current window and leave pinned tabs alone."
      mock: mocks/windows-before-after
    - title: "Closed the wrong one? Bring it back"
      text: "Duplicates close the same way as any tab you close, so they show up in Recently Closed. Type `:r` to see them newest first and press [kbd:↵] to reopen one, or run **Undo Close Tab** to bring back the last tab you closed."
      points:
        - "Recently Closed and Undo Close Tab use the closed tabs permission, which you turn on in settings."
        - "Each row shows when you closed the tab, such as Just now or 5m ago."
      mock: mocks/recently-closed
detailsTitle: "More commands for a tidy tab bar"
detailsLead: "Close Duplicate Tabs is one of 47 browser commands. These also clean up your tabs, and each one runs from the same palette."
details:
  - icon: i-arrow-right-line
    title: "Close Tabs to the Left or Right"
    text: "Closes every tab on one side of the tab you're on, in the current window. Pinned tabs stay open."
  - icon: i-x
    title: "Close Other Tabs"
    text: "Keeps the tab you're on and closes the rest of the current window, apart from pinned tabs."
  - icon: i-layers
    title: "Merge All Windows into One"
    text: "Moves the tabs from your other windows into the one you're in and closes the windows it emptied."
  - icon: i-moon
    title: "Suspend Inactive Tabs"
    text: "Unloads the tabs in this window that you aren't looking at, so they stop using memory. Pinned tabs and the tab you're on stay loaded, and a suspended tab reloads when you click it."
  - icon: i-sort
    title: "Sort Tabs Alphabetically"
    text: "Puts the tabs in this window in A to Z order by title. Pinned tabs are sorted among themselves and stay at the start."
  - icon: i-volume-x
    title: "Mute All Tabs"
    text: "Mutes every tab in every window in one go. Unmute All Tabs turns the sound back on."
faqTitle: "Questions about closing duplicate tabs"
faq:
  - question: "How do I close duplicate tabs in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `dup`, and press Enter on Close Duplicate Tabs. TabCmdr closes every extra copy of a page across all your windows and tells you how many it closed."
  - question: "Which copy of a page is kept?"
    answer: "TabCmdr keeps the first copy it finds as it goes through your windows and closes the later ones. That can include the tab you're on. In a single window, a pinned tab comes first, so it's the copy that stays."
  - question: "Does it close duplicates in other windows?"
    answer: "Yes. It checks every open window at once. To close tabs in only the current window, use Close Tabs to the Left, Close Tabs to the Right or Close Other Tabs."
  - question: "Are tabs with a different #anchor or ?query treated as duplicates?"
    answer: "No. Tabs count as duplicates only when their addresses match exactly, including everything after `#` or `?`. Two sections of the same document stay open."
  - question: "Can I undo it?"
    answer: "Yes. Closed duplicates go to Recently Closed. Type `:r` to see them newest first and press Enter to reopen one, or run Undo Close Tab to bring back the last tab you closed. Both need the closed tabs permission, which you turn on in settings."
  - question: "Does it work in Edge, Brave and Arc?"
    answer: "Yes. TabCmdr runs in Chrome, Edge, Brave, Arc, Vivaldi, Opera and other Chromium-based browsers, and installs from the Chrome Web Store."
related:
  - search-open-tabs
  - suspend-inactive-tabs
  - merge-windows
sitemap:
  priority: 0.8
  changefreq: monthly
---
