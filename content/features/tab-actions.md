---
title: "Pin, Mute or Close Any Tab Without Switching | TabCmdr"
linkTitle: "Tab actions"
description: "Need to mute one tab and close another? Find each one in the palette and use the buttons on its row: reload, mute, pin, duplicate, move or close. No switching."
ogTitle: "Mute, pin or close a tab without going to it"
ogDescription: "Press ⌘K, type part of a tab's name and click a button on its row. Reload, mute, pin, duplicate, move or close it, and stay on the page you're on."
weight: 120
date: 2026-10-06
lastmod: 2026-10-06
group: tidy
icon: i-pin
docs: tabs
eyebrow: "Tab actions"
heading: "Mute a tab without going to it?"
headingMuted: "Do it from the tab list."
lead: "Reload, mute, pin, move or close any tab without leaving the page you're on. Press [kbd:mod][kbd:K], find the tab and click a button on its row."
demo:
  name: row-actions
  layout: split
howTitle: "Act on a tab in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Find the tab"
    typed: "acme"
    text: "Type part of its title or address."
  - title: "Close it, or click a button"
    keys: ["mod", "⌫"]
    text: "Or use any button on the highlighted row."
showcase:
  title: "Nine buttons on every tab row"
  lead: "The buttons show on the highlighted row and on the row under your mouse. Each one acts on that tab, even when it's in another window."
  rows:
    - title: "Change a tab without switching to it"
      text: "**Reload tab** refreshes the page in the background. **Mute tab** silences it, and the button turns into Unmute tab. **Pin tab** pins it or unpins it. **Duplicate tab** opens a second copy of the page."
      points:
        - "Each one confirms with a short message: Tab reloaded, Tab muted, Tab pinned or Tab duplicated."
        - "The palette stays open, so you can go straight on to the next tab."
        - "A pinned tab has a pin badge on its row. Click the badge to unpin it."
      mock: mocks/palette
      palette:
        query: "acme"
        highlight: ["acme"]
        tip: "Mute tab"
        toast: "Tab muted"
        groups:
          - label: "Tabs"
            rows:
              - { host: github.com, title: "Pull requests · acme/web", sub: "https://github.com/acme/web/pulls", type: i-monitor, actions: tab, selected: true }
              - { host: vercel.com, title: "Deployments - acme-web - Vercel", sub: "https://vercel.com/acme/web/deployments", type: i-monitor }
    - title: "Move it, copy it or open it in incognito"
      text: "**Move to new window** gives the tab a window of its own. **Copy URL** puts its address on your clipboard. **Open in incognito** opens the same page in a new private window. **Remove from group** takes the tab out of its tab group."
      points:
        - "Open in incognito leaves the original tab open and closes the palette."
        - "Bookmark and history rows have Open in incognito and Copy URL too."
        - "If the tab isn't in a group, Remove from group says **Tab not in a group**."
      mock: mocks/preview
      preview:
        type: palette
        query: "acme"
        highlight: ["acme"]
        group: "Tabs"
        actions: true
        toast: "URL copied"
        rows:
          - { host: github.com, title: "Pull requests · acme/web", sub: "https://github.com/acme/web/pulls", selected: true }
          - { host: vercel.com, title: "Deployments - acme-web - Vercel", sub: "https://vercel.com/acme/web/deployments" }
    - title: "Close tabs from the keyboard"
      text: "Move to a tab with the arrow keys and press [kbd:mod][kbd:⌫] to close it. The row goes away and the next tab takes its place, so you can close a run of tabs with a few key presses."
      points:
        - "On Windows and Linux, press Ctrl+Backspace or Ctrl+Delete."
        - "Closed the wrong one? `:r` lists recently closed tabs once you turn on the Recently Closed permission."
      mock: mocks/palette
      palette:
        query: "youtube"
        highlight: ["youtube"]
        tip: "Close tab"
        toast: "Tab closed"
        groups:
          - label: "Tabs"
            rows:
              - { host: youtube.com, title: "Weekly design review - YouTube", sub: "https://www.youtube.com/watch?v=k7Fq2", type: i-monitor, actions: tab, selected: true }
detailsTitle: "More ways to handle tabs"
details:
  - icon: i-terminal
    title: "Commands for the tab you're on"
    text: "Pin Tab, Mute Tab, Duplicate Tab, Close Tab, Move Tab to New Window and Remove Tab from Group act on the current tab."
  - icon: i-volume-x
    title: "Mute All Tabs"
    text: "Silences every tab in every window at once. Unmute All Tabs turns the sound back on."
  - icon: i-undo
    title: "Undo Close Tab"
    text: "Brings back the last tab you closed. It uses the Recently Closed permission."
  - icon: i-monitor
    title: "Tabs in every window"
    text: "The list holds the tabs from all your windows, so you can mute or close a tab in a window you can't see."
  - icon: i-download
    title: "Buttons on download rows"
    text: "Downloads get their own: Show in folder, Copy source URL and Remove from list."
  - icon: i-pin
    title: "Pinned tabs only"
    text: "Start with `:p` to list only your pinned tabs, from every window."
faqTitle: "Questions about tab actions"
faq:
  - question: "How do I mute a tab in Chrome without switching to it?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type part of the tab's title and click the speaker button on its row. You see Tab muted. Click it again to unmute."
  - question: "What's the shortcut to close a tab from the list?"
    answer: "Highlight the tab and press ⌘Backspace on a Mac. On Windows and Linux, press Ctrl+Backspace or Ctrl+Delete."
  - question: "Can I pin or close a tab in another window?"
    answer: "Yes. The tab list includes the tabs from every open window, and the buttons work on any tab in it."
  - question: "Does Open in incognito close the original tab?"
    answer: "No. It opens the same address in a new incognito window. The original tab stays where it was."
  - question: "Why does Remove from group say Tab not in a group?"
    answer: "That tab isn't in a tab group, so there's nothing to take it out of. Tabs in a group show the group's name on their row once you turn on the Tab Groups permission."
  - question: "Can I undo closing a tab?"
    answer: "Yes. Run Undo Close Tab to bring back the last one, or type `:r` to pick from your recently closed tabs. Both need the Recently Closed permission, which you turn on in settings."
related:
  - search-open-tabs
  - tab-groups
  - recently-closed-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
