---
title: "Search Google, Bing or DuckDuckGo from Any Page | TabCmdr"
linkTitle: "Web search"
description: "Look something up without the address bar. Type :s and your question to search Google, Bing or DuckDuckGo in a new tab, or type an address to open it."
ogTitle: "Search the web from the box you already have open"
ogDescription: "Type your question, pick Google, Bing or DuckDuckGo and press Enter. Results open in a new tab. Type an address and it opens directly."
weight: 70
date: 2026-10-06
lastmod: 2026-10-06
group: find
icon: i-globe
token: ":s"
docs: keyboard-shortcuts
eyebrow: "Web search"
heading: "Need to look it up?"
headingMuted: "Search it from any page."
lead: "Search Google, Bing or DuckDuckGo from the box you already have open. Type your search, or start with `:s`, and press [kbd:↵] to open the results in a new tab."
howTitle: "Search the web in three steps"
demo:
  name: browser-palette
  layout: wide
  tour: search
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Type your search"
    typed: ":s tailwind grid"
    text: "Leave out :s to check your tabs first."
  - title: "See the results"
    keys: ["↵"]
    text: "They open in a new tab."
showcase:
  title: "How web search works in TabCmdr"
  lead: "Your open tabs and history are checked first. When nothing there is what you want, the web is one row away."
  rows:
    - title: "Your search engines at the end of every search"
      text: "Whatever you type, the last rows offer to search for it on the web, one row per engine. When nothing in your tabs or history matches, those rows are all you see. With `:s` in front, they're the only rows."
      points:
        - "Results open in a new tab, so the page you're on stays where it is."
        - "Each row says which engine it uses, such as Search with Google."
        - "A calculation or a conversion gets answered at the top before you search at all."
      mock: mocks/palette
      palette:
        query: ":s tailwind grid"
        highlight: ["tailwind grid"]
        groups:
          - label: "Search"
            rows:
              - { host: google.com, title: "Search \"tailwind grid\" on Google", sub: "Search with Google", type: i-search, selected: true }
              - { host: bing.com, title: "Search \"tailwind grid\" on Bing", sub: "Search with Bing", type: i-search }
              - { host: duckduckgo.com, title: "Search \"tailwind grid\" on DuckDuckGo", sub: "Search with DuckDuckGo", type: i-search }
    - title: "Choose which engines appear"
      text: "Google, Bing and DuckDuckGo are on by default. In the Search Engines setting you can turn on Yahoo or Brave Search, or turn off any engine you never use, so the rows match how you search."
      points:
        - "Enabled engines show in the order of this list."
        - "Turn an engine off and its row disappears from every search."
      mock: mocks/settings
      settings:
        title: "Search Engines"
        rows:
          - { label: "Search Engines", desc: "Enabled engines appear as quick-search suggestions when you type a query." }
        checks:
          - { label: "Google", on: true }
          - { label: "Bing", on: true }
          - { label: "DuckDuckGo", on: true }
          - { label: "Yahoo", on: false }
          - { label: "Brave Search", on: false }
    - title: "Type an address, open it"
      text: "Type something that looks like a web address and TabCmdr adds an Open URL row above the search rows. [kbd:↵] opens it in a new tab, with no need to type https:// first."
      points:
        - "The search rows stay below it, in case you meant to search for the words."
        - "If one of your open tabs matches what you typed, it shows above the Open URL row, so you can switch to it instead."
      mock: mocks/palette
      palette:
        query: "github.com/acme/web/issues"
        groups:
          - label: "Open URL"
            rows:
              - { glyph: i-globe, title: "Open github.com/acme/web/issues", sub: "Open URL in new tab", type: i-globe, selected: true }
          - label: "Search"
            rows:
              - { host: google.com, title: "Search \"github.com/acme/web/issues\" on Google", sub: "Search with Google", type: i-search }
              - { host: bing.com, title: "Search \"github.com/acme/web/issues\" on Bing", sub: "Search with Bing", type: i-search }
detailsTitle: "More reasons to search from the palette"
details:
  - icon: i-zap
    title: "No trip to the address bar"
    text: "Search from the box that's already open, without clicking into the address bar or opening a new tab first."
  - icon: i-layers
    title: "Your tabs come first"
    text: "Open tabs, recent history and closed tabs are matched before the search rows, so a page you already have doesn't get searched for again."
  - icon: i-globe
    title: "Five engines to choose from"
    text: "Google, Bing, DuckDuckGo, Yahoo and Brave Search. Turn on the ones you use."
  - icon: i-calculator
    title: "Answers before searches"
    text: "Type a sum, a conversion or a city's time and the answer shows at the top of the list, often making a search unnecessary."
  - icon: i-keyboard
    title: "Pick an engine with the arrow keys"
    text: "[kbd:↑] and [kbd:↓] move between engines, and [kbd:↵] opens the results."
  - icon: i-shield
    title: "Straight to the engine"
    text: "TabCmdr opens the engine's own results page in a new tab. Your search goes to that engine, not through TabCmdr."
faqTitle: "Questions about searching the web"
faq:
  - question: "How do I search Google without clicking the address bar?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type your search and press Enter on Search on Google. Start with `:s` to show only the search engines."
  - question: "Which search engines does TabCmdr support?"
    answer: "Google, Bing, DuckDuckGo, Yahoo and Brave Search. Google, Bing and DuckDuckGo are on by default, and you can change that in the Search Engines setting."
  - question: "Can I add a custom search engine?"
    answer: "Not at the moment. You can turn the five built-in engines on or off."
  - question: "Do results open in the current tab?"
    answer: "No, they open in a new tab, so the page you were reading stays open."
  - question: "What does :s do?"
    answer: "It hides tabs, history and commands and shows only the search engine rows for what you typed."
  - question: "Does TabCmdr see what I search for?"
    answer: "No. TabCmdr opens the search engine's results page in a new tab, and your query goes straight to that engine."
related:
  - search-open-tabs
  - search-history
  - calculator
sitemap:
  priority: 0.8
  changefreq: monthly
---
