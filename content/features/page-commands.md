---
title: "Zoom, Print or Copy the URL Without the Mouse | TabCmdr"
linkTitle: "Page commands"
description: "Stop digging through browser menus. Type :c in TabCmdr to zoom, print, hard reload, copy the page URL or open incognito, then press Enter to run it."
ogTitle: "Zoom, print and reload without touching a menu"
ogDescription: "47 browser commands in one searchable list. Press ⌘K, type :c and a word like zoom, print or copy, and press Enter to run the command."
weight: 140
date: 2026-10-06
lastmod: 2026-10-06
group: page
icon: i-terminal
token: ":c"
docs: page-commands
eyebrow: "Page commands"
heading: "Digging through menus to zoom?"
headingMuted: "Type the command instead."
lead: "Zoom, print, reload, scroll or copy the URL without menus. Press [kbd:mod][kbd:K], type `:c` and a word like `zoom`, then press [kbd:↵]."
howTitle: "Run a page command in three steps"
demo:
  name: shortcut
  layout: split
  token: ":c"
  query: "zoom"
  tries: ["zoom", "copy", "scroll", "new"]
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Find the command"
    typed: ":c zoom"
    text: "`:c` shows only commands. Add a word to narrow it."
  - title: "Run it"
    keys: ["↵"]
    text: "The command acts on the page you're on."
showcase:
  title: "How page commands work"
  lead: "There are 47 built-in commands. Each one has a plain name and a few extra search words, so you find it by what it does."
  rows:
    - title: "Search by name or by the keys you know"
      text: "Many commands carry their usual keyboard shortcut as a search word. Type `f11` and Toggle Full Screen comes up. Type `ctrl+p` and Print Page is at the top. You don't need the exact name either: `cache` finds Hard Reload (Clear Cache)."
      points:
        - "`:c` on its own lists every command."
        - "Commands also show at the end of a normal search, under your tabs, bookmarks and history."
      mock: mocks/palette
      palette:
        query: ":c f11"
        groups:
          - label: "Commands"
            rows:
              - { glyph: i-maximize, title: "Toggle Full Screen", sub: "Page command", type: i-terminal, selected: true }
    - title: "Zoom in steps without reopening"
      text: "Zoom In and Zoom Out leave the palette open, so you press [kbd:↵] again for each step. Every step changes the zoom by 10%, down to 25% or up to 500%. Reset Zoom puts the page back to 100%."
      points:
        - "You see Zoomed in, Zoomed out or Zoom reset after each step."
        - "Reset Zoom closes the palette once the page is back to 100%."
      mock: mocks/preview
      preview:
        type: palette
        query: ":c zoom"
        highlight: ["zoom"]
        group: "Commands"
        toast: "Zoomed in"
        rows:
          - { glyph: i-zoom-in, title: "Zoom In", sub: "Page command", selected: true }
          - { glyph: i-search, title: "Reset Zoom", sub: "Page command" }
          - { glyph: i-zoom-out, title: "Zoom Out", sub: "Page command" }
    - title: "Copy, save or open in one step"
      text: "Copy Page URL and Copy Page Title put the address or the title on your clipboard. Bookmark This Page saves the page you're on. New Tab, New Window and New Incognito Window open a fresh one, and View Page Source opens the page's HTML in a new tab."
      points:
        - "A short note confirms each copy: URL copied or Title copied."
        - "Bookmark This Page needs the Bookmarks permission. Without it you see Bookmark failed."
      mock: mocks/palette
      palette:
        query: ":c copy"
        highlight: ["copy"]
        toast: "URL copied"
        groups:
          - label: "Commands"
            rows:
              - { glyph: i-link, title: "Copy Page URL", sub: "Page command", type: i-terminal, selected: true }
              - { glyph: i-copy, title: "Copy Page Title", sub: "Page command", type: i-terminal }
detailsTitle: "More commands for the page you're on"
details:
  - icon: i-rotate
    title: "Hard reload"
    text: "Hard Reload (Clear Cache) reloads the tab without using the browser cache. Reload Page does a normal reload."
  - icon: i-arrow-up
    title: "Scroll to the top or bottom"
    text: "Scroll to Top and Scroll to Bottom glide the page to either end, even on long pages."
  - icon: i-arrow-left
    title: "Go back or forward"
    text: "Go Back and Go Forward move through the tab's history, like the arrows next to the address bar."
  - icon: i-volume-x
    title: "Mute this tab"
    text: "Mute Tab silences the tab you're on. Mute All Tabs silences every tab in every window."
  - icon: i-printer
    title: "Print the page"
    text: "Print Page closes the palette and opens the browser's print dialog, where you can also save a PDF."
  - icon: i-undo
    title: "Undo a closed tab"
    text: "Undo Close Tab brings back the last tab you closed. It uses the closed tabs permission, which you turn on in settings."
faqTitle: "Questions about page commands"
faq:
  - question: "How do I zoom in on a page in Chrome with the keyboard?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `zoom` and press Enter on Zoom In. The palette stays open, so press Enter again for each 10% step."
  - question: "How do I do a hard reload in Chrome?"
    answer: "Open the palette, type `hard` and press Enter on Hard Reload (Clear Cache). The tab reloads without using the browser cache."
  - question: "How many commands are there?"
    answer: "47 browser commands, from Zoom In to Close Duplicate Tabs. On nine sites, such as GitHub, Gmail and Figma, you also get that site's own actions in the same list."
  - question: "Can I find a command by its keyboard shortcut?"
    answer: "Yes. Many commands have their usual keys as search words, so `f11` finds Toggle Full Screen and `ctrl+p` brings up Print Page."
  - question: "Do page commands need extra permissions?"
    answer: "Most don't. Bookmark This Page needs the Bookmarks permission and Undo Close Tab needs the closed tabs permission. Run Manage Permissions to open settings and turn them on."
  - question: "Does it work in Edge, Brave and Arc?"
    answer: "Yes. TabCmdr runs in Chrome, Edge, Brave, Arc, Vivaldi, Opera and other Chromium-based browsers, and installs from the Chrome Web Store."
related:
  - site-shortcuts
  - screenshots
  - qr-code
sitemap:
  priority: 0.8
  changefreq: monthly
---
