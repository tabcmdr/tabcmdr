---
title: "Search Chrome History from Any Page | TabCmdr"
linkTitle: "History search"
description: "Find a page you visited last week without opening Chrome's history page. Type :h and a word you remember, and matching pages show up, newest first."
ogTitle: "Find a page you visited without opening the history page"
ogDescription: "Type :h and a word from the title or address. Your recent history is searched as you type, newest first, with when you were last there."
weight: 40
date: 2026-10-06
lastmod: 2026-10-06
group: find
icon: i-history
token: ":h"
docs: history
eyebrow: "History search"
heading: "Saw it last week, lost it today?"
headingMuted: "Search your history."
lead: "Search your browsing history without opening the history page. Press [kbd:mod][kbd:K], type `:h` and a word you remember, and press [kbd:↵] to open it."
howTitle: "Search your history in three steps"
demo:
  name: browser-palette
  layout: wide
  tour: history
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Search your history"
    typed: ":h invoice"
    text: "Words as they appear in the title or address."
  - title: "Open the page"
    keys: ["↵"]
    text: "It opens in a new tab, newest match first."
showcase:
  title: "How history search works"
  lead: "TabCmdr loads your recent history when the palette opens and searches it while you type. You decide how far back it reaches."
  rows:
    - title: "Newest first, with when you were there"
      text: "History results keep the order you visited them in, with the most recent at the top. Each row shows the page's full address and when you last opened it, such as 2h ago, Yesterday or Mon 5 Oct."
      points:
        - "What you type is matched as written, so `stripe invoice` finds pages with those words side by side in the title or address."
        - "Results keep their visit order instead of being re-ranked, so the latest visit is always first."
        - "`:h` lists up to 500 matching pages."
      mock: mocks/palette
      palette:
        query: ":h invoice"
        highlight: ["invoice"]
        groups:
          - label: "History"
            rows:
              - { host: dashboard.stripe.com, title: "Invoice #2041 - Stripe", sub: "https://dashboard.stripe.com/invoices/in_2041", meta: "2h ago", type: i-clock, actions: history, selected: true }
              - { host: drive.google.com, title: "Contractor invoices - Google Drive", sub: "https://drive.google.com/drive/folders/invoices", meta: "Yesterday", type: i-clock }
              - { host: dashboard.stripe.com, title: "Invoice #2017 - Stripe", sub: "https://dashboard.stripe.com/invoices/in_2017", meta: "Wed 30 Sep", type: i-clock }
    - title: "Choose how far back it looks"
      text: "History Timeframe in settings sets the stretch of history TabCmdr searches: the last hour, the last 24 hours, the last week, month or year, or all time. Last Week is the default, which keeps results recent and quick to scan."
      points:
        - "TabCmdr loads up to 5,000 pages from the timeframe you pick."
        - "Turn off Browsing History to keep history out of the default list. `:h` and the History filter still work."
      mock: mocks/settings
      settings:
        title: "Default Search Content"
        selected: "Last Week"
        rows:
          - { label: "Browsing History", desc: "Show recent browsing history. Configure how far back below.", toggle: "on" }
          - { label: "History Timeframe", desc: "Limit history to a recent window to keep results relevant.", options: ["Last Hour", "Last 24 Hours", "Last Week", "Last Month", "Last Year", "All Time"] }
    - title: "History in every search"
      text: "You don't always need `:h`. In a normal search, up to five history matches appear under your open tabs, so a page you closed and forgot about is still a few rows away."
      points:
        - "Press [kbd:Tab] to move to the History filter and see the full list."
        - "Each history row can open the page in an incognito window or copy its address."
      mock: mocks/palette
      palette:
        query: "acme"
        highlight: ["acme"]
        groups:
          - label: "Tabs"
            rows:
              - { host: github.com, title: "Pull requests · acme/web", sub: "https://github.com/acme/web/pulls", type: i-monitor, actions: tab, selected: true }
          - label: "History"
            rows:
              - { host: linear.app, title: "Sprint 42 - Linear", sub: "https://linear.app/acme/cycle/42", meta: "5h ago", type: i-clock }
              - { host: github.com, title: "Release v4.2 · acme/design-system", sub: "https://github.com/acme/design-system/releases/tag/v4.2", meta: "Mon 5 Oct", type: i-clock }
detailsTitle: "More reasons to search history this way"
details:
  - icon: i-zap
    title: "No trip to the history page"
    text: "The palette opens over the page you're on, so looking something up doesn't cost you your place."
  - icon: i-incognito
    title: "Open in incognito"
    text: "Open a page from your history in a private window, straight from its row."
  - icon: i-link
    title: "Copy the address"
    text: "Copy URL puts a page's address on your clipboard without opening it."
  - icon: i-undo
    title: "Closed tabs have their own list"
    text: "For tabs you closed recently, `:r` lists them newest first and reopens one with [kbd:↵]."
  - icon: i-key
    title: "A permission you control"
    text: "Browsing History is an optional permission. Grant it once from the palette and revoke it any time in settings."
  - icon: i-shield
    title: "Stays in your browser"
    text: "History is read through the browser's own history API when the palette opens. TabCmdr never saves it or sends it anywhere."
faqTitle: "Questions about searching history"
faq:
  - question: "How do I search my Chrome history without opening the history page?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `:h` and a word from the page's title or address, and press Enter. The page opens in a new tab."
  - question: "How far back does it search?"
    answer: "The last week by default. Change History Timeframe in settings to the last hour, 24 hours, month, year or all time. TabCmdr loads up to 5,000 pages from that range."
  - question: "Does it show when I visited a page?"
    answer: "Yes. Each result shows when you last opened it, such as 5m ago, 2h ago, Yesterday or a date like Mon 5 Oct."
  - question: "Can I delete history from TabCmdr?"
    answer: "No. TabCmdr only reads your history. To delete pages, use your browser's history page."
  - question: "Why do I see history when I search my tabs?"
    answer: "Up to five history matches show under your open tabs so you can find pages you already closed. Turn off Browsing History under Default Search Content to hide them. `:h` keeps working either way."
  - question: "Is my browsing history sent anywhere?"
    answer: "No. History is read in your browser when the palette opens and dropped when it closes. It isn't sent anywhere."
related:
  - recently-closed-tabs
  - search-bookmarks
  - search-open-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
