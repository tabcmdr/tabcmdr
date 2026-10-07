---
title: "Read RSS Feeds Without a Reader App | TabCmdr"
linkTitle: "RSS reader"
description: "Want the latest headlines without opening a reader app? Type :rss on any page to see your feeds, newest first. Six come set up and you can add up to 20."
ogTitle: "Your RSS headlines on any page, one shortcut away"
ogDescription: "Type :rss to see the newest articles from your feeds in the command palette. Filter by feed, press Enter to open one, and add any HTTPS RSS or Atom feed."
weight: 270
date: 2026-10-06
lastmod: 2026-10-06
group: tools
icon: i-rss
token: ":rss"
eyebrow: "RSS reader"
heading: "Want the news without an app?"
headingMuted: "Read your feeds on any page."
lead: "See the latest articles from your RSS feeds, newest first, over the page you're on. Press [kbd:mod][kbd:K], type `:rss` and pick a story."
demo:
  name: shortcut
  layout: split
  token: ":rss"
howTitle: "Read your feeds in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Open the reader"
    typed: ":rss"
    text: "The newest articles from all your feeds load."
  - title: "Open an article"
    keys: ["↵"]
    text: "It opens in a new tab."
showcase:
  title: "How the RSS reader works"
  lead: "Your feeds are fetched when you open the reader, merged into one list and sorted by date. Each row shows the headline, its address, the feed it came from and how long ago it was posted."
  rows:
    - title: "Six feeds, ready the first time"
      text: "You don't have to set anything up to try it. TabCmdr starts with six feeds: BBC News World, The New York Times home page, Hacker News front page, The Verge, Smashing Magazine and Ars Technica. Remove any of them, or keep them and add your own."
      points:
        - "Each feed adds up to 20 of its newest articles to the list."
        - "Times read like the history list, such as 4m ago or 2h ago."
        - "A feed that won't load shows as Feed unavailable with its site name. The rest still load."
      mock: mocks/preview
      preview:
        type: list
        variant: rss
        rows:
          - { label: "BBC News", color: "#a1a1aa" }
          - { label: "NYT > Top Stories", color: "#a1a1aa" }
          - { label: "Hacker News: Front Page", color: "#a1a1aa" }
          - { label: "The Verge", color: "#a1a1aa" }
    - title: "Add your own feeds"
      text: "Choose RSS Settings at the bottom of the reader, or Configure next to RSS Reader under Tools in settings. On the RSS Reader page, paste a feed address and click Add Feed, or click Add next to one of the sample feeds, such as GitHub Blog or Martin Fowler. Changes save as you make them."
      points:
        - "Up to 20 feeds. RSS and Atom both work."
        - "Feed addresses must start with `https://`."
        - "Remove a feed with the Remove button next to it."
      mock: mocks/settings
      settings:
        title: "Tools"
        rows:
          - { label: "Todo", desc: "Quick to-do list that persists across sessions", toggle: "on" }
          - { label: "RSS Reader", desc: "Latest headlines from your configured RSS/Atom feeds", toggle: "on" }
          - { label: "Weather", desc: "Current conditions for your saved locations via Open-Meteo", toggle: "on" }
    - title: "Color each feed, then filter by it"
      text: "On the RSS Reader page, click the dot next to a feed to give it one of 20 colors. Its badge and its filter chip use that color in the palette. Click a chip above the list to see only that feed, and click All to see everything again."
      points:
        - "Or just type: words narrow the list to headlines or feed names that match."
        - "Feeds start out gray until you pick a color."
      mock: mocks/preview
      preview:
        type: list
        variant: rss
        rows:
          - { label: "BBC News", color: "#f87171" }
          - { label: "Hacker News: Front Page", color: "#fb923c" }
          - { label: "The Verge", color: "#c084fc" }
detailsTitle: "Small things that make it work"
details:
  - icon: i-sync
    title: "Fresh when you look"
    text: "Articles are kept for 15 minutes. Open the reader after that and the feeds are fetched again."
  - icon: i-rotate
    title: "Refresh Feeds"
    text: "Can't wait? Refresh Feeds at the bottom of the list reloads every feed right away."
  - icon: i-zap
    title: "Fast feeds show first"
    text: "Feeds load three at a time, and each one appears as soon as it arrives. A slow site doesn't hold up the rest."
  - icon: i-shield
    title: "Headlines only"
    text: "TabCmdr keeps just the title, link and date of each article. Article text and images in the feed are skipped."
  - icon: i-lock
    title: "No account needed"
    text: "Your browser fetches the feeds straight from each site. Your feed list stays in your browser."
  - icon: i-sliders
    title: "Turn it off if you like"
    text: "Switch off RSS Reader under Tools in settings and it's hidden from the palette."
faqTitle: "Questions about the RSS reader"
faq:
  - question: "How do I read RSS feeds in Chrome without an app?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux and type `:rss`. The newest articles from your feeds show up, newest first. Press Enter to open one in a new tab."
  - question: "How do I add an RSS feed?"
    answer: "Open the reader and choose RSS Settings at the bottom, then paste the feed's address and click Add Feed. You can also add one of the sample feeds with a single click."
  - question: "How many feeds can I add?"
    answer: "Up to 20. TabCmdr shows up to 20 of the newest articles from each feed."
  - question: "How often are feeds updated?"
    answer: "When you open the reader, any feed fetched more than 15 minutes ago is fetched again. Choose Refresh Feeds to reload all of them right away."
  - question: "Which feeds work?"
    answer: "RSS and Atom feeds served over HTTPS. Addresses that start with `http://` are not accepted."
  - question: "Do I need an account?"
    answer: "No. There's nothing to sign up for. Your browser fetches the feeds itself, and your feed list is saved in your browser."
related:
  - weather
  - todo-list
  - web-search
sitemap:
  priority: 0.8
  changefreq: monthly
---
