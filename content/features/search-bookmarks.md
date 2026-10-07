---
title: "Search Chrome Bookmarks by Name, Folder or URL | TabCmdr"
linkTitle: "Bookmark search"
description: "Stop clicking through bookmark folders. Type :b and a word from a bookmark's name, folder or address, then press Enter to open it in a new tab."
ogTitle: "Find any bookmark without opening a single folder"
ogDescription: "Type :b and a word you remember. Every bookmark in every folder is searched by name, folder and address, and Enter opens it in a new tab."
weight: 30
date: 2026-10-06
lastmod: 2026-10-06
group: find
icon: i-bookmark
token: ":b"
docs: bookmarks
eyebrow: "Bookmark search"
heading: "Saved it, can't find it now?"
headingMuted: "Search every bookmark."
lead: "Search every bookmark by name, address or folder. Press [kbd:mod][kbd:K], type `:b` and a word you remember, and press [kbd:↵] to open it in a new tab."
howTitle: "Search bookmarks in three steps"
demo:
  name: browser-palette
  layout: wide
  tour: bookmarks
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Search your bookmarks"
    typed: ":b tokens"
    text: "A word from the name, address or folder."
  - title: "Open it"
    keys: ["↵"]
    text: "The bookmark opens in a new tab."
showcase:
  title: "How bookmark search works"
  lead: "Every bookmark in every folder goes into one search. Each result shows where it's filed, and you choose how to open it."
  rows:
    - title: "Find a bookmark by name, address or folder"
      text: "TabCmdr reads your whole bookmark tree, from the bookmarks bar to Other bookmarks and every folder inside them. Each word you type has to match the bookmark's name, its address or the folders it sits in, so `:b design` also finds bookmarks filed under a Design folder."
      points:
        - "The folder path shows on the right of each result, such as Bookmarks bar › Work › Design."
        - "The site's address sits under the name, so two bookmarks with similar names are easy to tell apart."
        - "Results are ranked by how well they match, and a match in the name counts most."
      mock: mocks/palette
      palette:
        query: ":b design"
        highlight: ["design"]
        groups:
          - label: "Bookmarks"
            rows:
              - { host: notion.so, title: "Design tokens - acme wiki", sub: "notion.so", meta: "Bookmarks bar › Work", type: i-bookmark, actions: bookmark, selected: true }
              - { host: figma.com, title: "Component library - Figma", sub: "figma.com", meta: "Bookmarks bar › Work › Design", type: i-bookmark }
              - { host: figma.com, title: "Pricing page explorations - Figma", sub: "figma.com", meta: "Bookmarks bar › Work › Design", type: i-bookmark }
    - title: "Bookmarks in your everyday searches"
      text: "Turn on Bookmarks under Default Search Content in TabCmdr's settings, and matching bookmarks appear in the normal list too, right under your open tabs. Then you don't need `:b` at all: type a few letters and the tab or the bookmark is right there."
      points:
        - "Up to five bookmark matches show in the default list, so your open tabs stay on top."
        - "`:b` and the Bookmarks filter always search every bookmark, whether this setting is on or off."
        - "Press [kbd:Tab] to step through the filters to Bookmarks and browse the full list."
      mock: mocks/settings
      settings:
        title: "Default Search Content"
        rows:
          - { label: "Bookmarks", desc: "Show your saved bookmarks in the default view.", toggle: "on" }
          - { label: "Browsing History", desc: "Show recent browsing history. Configure how far back below.", toggle: "on" }
          - { label: "Pinned Tabs", desc: "Show pinned tabs alongside regular open tabs.", toggle: "on" }
    - title: "Open it the way you need"
      text: "[kbd:↵] opens the highlighted bookmark in a new tab. The row also has buttons to open it in an incognito window or to copy its address without opening it at all."
      points:
        - "Copy URL puts the address on your clipboard and confirms with URL copied."
        - "Open in incognito opens the bookmark in a private window."
        - "Bookmark This Page, one of TabCmdr's commands, saves the tab you're on as a new bookmark."
      mock: mocks/palette
      palette:
        query: ":b okr"
        highlight: ["okr"]
        tip: "Copy URL"
        toast: "URL copied"
        groups:
          - label: "Bookmarks"
            rows:
              - { host: docs.google.com, title: "Team OKRs 2026", sub: "docs.google.com", meta: "Bookmarks bar › Work", type: i-bookmark, actions: bookmark, selected: true }
detailsTitle: "More reasons to keep your bookmarks one keystroke away"
details:
  - icon: i-layers
    title: "Every folder at once"
    text: "The bookmarks bar, Other bookmarks, Mobile bookmarks and every folder inside them are searched together."
  - icon: i-sliders
    title: "Browse with the Tab key"
    text: "[kbd:Tab] steps to the Bookmarks filter, which lists every bookmark with the folder it's in."
  - icon: i-bookmark
    title: "Save pages too"
    text: "Run Bookmark This Page from the palette to bookmark the tab you're on. TabCmdr confirms with Page bookmarked."
  - icon: i-zap
    title: "Quick on big collections"
    text: "Bookmarks are indexed when the palette opens. In our search benchmark, a query over 15,000 items took under 3 ms."
  - icon: i-key
    title: "You grant access once"
    text: "Bookmarks is an optional permission. The first time you search them, the palette asks with a Grant Permission button. Turn it off any time in settings."
  - icon: i-shield
    title: "Read-only by default"
    text: "TabCmdr reads your bookmarks to search them. The only change it ever makes is the bookmark you add with Bookmark This Page."
faqTitle: "Questions about searching bookmarks"
faq:
  - question: "How do I search my Chrome bookmarks from any page?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `:b` followed by a word from the bookmark's name, address or folder, and press Enter. The bookmark opens in a new tab."
  - question: "Can I search bookmarks by folder name?"
    answer: "Yes. Folder names are part of the search, so `:b travel` finds bookmarks filed in a Travel folder even when the word isn't in their names. Each result shows its folder path."
  - question: "Why don't bookmarks show up when I search without :b?"
    answer: "Bookmarks are left out of the default list until you turn on Bookmarks under Default Search Content in settings. With it on, up to five matching bookmarks show under your open tabs."
  - question: "Does TabCmdr change or sync my bookmarks?"
    answer: "No. It reads the bookmarks already in your browser. The only bookmark it adds is the one you save with the Bookmark This Page command. Your browser's own sync carries on as before."
  - question: "Can I open a bookmark in incognito?"
    answer: "Yes. Highlight the bookmark and click Open in incognito on its row. Copy URL on the same row copies the address instead."
  - question: "Why does the palette ask for permission the first time?"
    answer: "Bookmarks access is an optional permission, so TabCmdr asks before it reads them. Click Grant Permission once, and you can revoke it later in settings."
related:
  - search-history
  - search-open-tabs
  - recently-closed-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
