---
title: "Private Tab Search with No Account or Tracking | TabCmdr"
linkTitle: "Private by design"
description: "Worried what a tab extension does with your data? TabCmdr has no account and no analytics, asks before each extra permission and keeps your history in Chrome."
ogTitle: "No account, no analytics, no tracking"
ogDescription: "TabCmdr reads your tabs, bookmarks and history only when you open it, and doesn't send them anywhere. Each extra permission asks first and can be turned off."
weight: 320
date: 2026-10-06
lastmod: 2026-10-06
group: own
icon: i-shield
docs: privacy
eyebrow: "Private by design"
heading: "Worried what an extension reads?"
headingMuted: "No account. No tracking."
lead: "TabCmdr reads your tabs, history and bookmarks when you open it and never sends them anywhere. Extra permissions ask first and can be turned off."
demo:
  name: permissions
  layout: split
howTitle: "Check what TabCmdr can see in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Find the permissions"
    typed: "permissions"
    text: "Manage Permissions shows up under Commands."
  - title: "Turn each one on or off"
    keys: ["↵"]
    text: "Settings opens. Off hides the feature that needs it."
showcase:
  title: "What TabCmdr reads, sends and keeps"
  lead: "Everything below comes from how the extension is built. You can check the permissions yourself on your browser's extensions page."
  rows:
    - title: "Three permissions to start, six you choose"
      text: "To install, TabCmdr needs **storage** for your settings, **tabs** to list your open tabs, and **activeTab** to work on the page you're on. The other six stay off until you turn them on: Clipboard Write, Bookmarks, Browsing History, Downloads, Recently Closed and Tab Groups. Open a filter that needs one and the palette shows a Grant Permission button, which takes you to the Permissions page in settings."
      points:
        - "Turn a permission off and the feature that uses it is hidden from the palette."
        - "Enable All Permissions turns them all on in one go, if you'd rather not be asked."
        - "TabCmdr can copy to your clipboard when you ask, and never reads from it."
      mock: mocks/permission
      permission:
        filter: "history"
        label: "Browsing History"
        description: "Search your browsing history to quickly revisit pages."
    - title: "Every connection it makes"
      text: "Your tabs, bookmarks, history and downloads are read from the browser when you open the palette and are never sent anywhere. TabCmdr only goes online for the jobs listed here. There is no analytics or tracking code in the extension."
      points:
        - "**Site icons:** only the site name, such as `github.com`, goes to Google's favicon service. Icons are then kept on your device."
        - "**License and price:** your license key goes to Gumroad when you activate it and about every 12 to 16 days after. The price comes from tabcmdr.com, at most once a day."
        - "**Tools you set up:** the RSS feeds in your list, Open-Meteo for weather in cities you add, and the AI provider whose API key you enter."
      mock: mocks/preview
      preview:
        type: chips
        chips: ["No account", "No analytics", "No tracking"]
    - title: "Nothing to sign up for"
      text: "There's no TabCmdr account, email or login. The 7-day free trial starts on your device the day you install. After that, you buy a license key through Gumroad and paste it into settings, and the key stays in your browser."
      points:
        - "After the trial ends, TabCmdr still works 10 times a day until you add a key."
        - "Reset to Defaults clears your settings but keeps your license key."
      mock: mocks/settings
      settings:
        title: "License"
        rows:
          - { label: "License Key", desc: "TabCmdr includes a free trial. Once it ends, enter a license key to restore full access." }
detailsTitle: "Where your data lives"
details:
  - icon: i-sync
    title: "Settings sync through your browser"
    text: "Theme, layout, block list and the rest are saved in the browser's own sync storage. They follow you between computers and never pass through a TabCmdr server."
  - icon: i-drive
    title: "Tool data stays on this device"
    text: "To-dos, your RSS feed list, weather cities, AI keys and AI chats are kept in the extension's local storage on your computer."
  - icon: i-key
    title: "AI keys go to one place"
    text: "An API key you add is sent only to that provider, with your message. Typing `@page` also sends the page's title, address and up to 5,000 characters of its text."
  - icon: i-eye-off
    title: "Browsing data isn't saved"
    text: "Tabs, bookmarks, history and downloads are fetched from the browser each time and aren't copied into storage. The icon cache keeps only site names and their icons."
  - icon: i-ban
    title: "Block sites you choose"
    text: "Add a domain to the Block List on the Sites page of settings and TabCmdr won't open there or on its subdomains."
  - icon: i-wifi-off
    title: "Switch off tools you don't use"
    text: "AI Chat, RSS Reader and Weather each have a switch on the Tools page of settings. Turn one off and it disappears from the palette."
faqTitle: "Questions about TabCmdr and privacy"
faq:
  - question: "How do I see what TabCmdr can access in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `permissions` and press Enter on Manage Permissions. On the Permissions page in settings, each optional permission has its own switch."
  - question: "Does TabCmdr need an account?"
    answer: "No. There's no sign-up and no login. The free trial starts when you install, and after it you paste in a license key bought through Gumroad."
  - question: "Does TabCmdr send my browsing history anywhere?"
    answer: "No. History, tabs, bookmarks and downloads are read from the browser when you open the palette and stay there. The only part that leaves is a site's name, such as `github.com`, to fetch its icon."
  - question: "Why does TabCmdr need the tabs permission?"
    answer: "To list your open tabs in every window so you can search and switch to them. `storage` saves your settings, and `activeTab` lets it work on the page you're looking at."
  - question: "Which servers does TabCmdr connect to?"
    answer: "Google's favicon service for site icons, Gumroad for license checks and tabcmdr.com for the price. RSS feeds, Open-Meteo and AI providers are only contacted when you use those tools."
  - question: "Where are my AI API keys stored?"
    answer: "In the extension's local storage on your computer. A key is only sent to the provider it belongs to, such as OpenAI, Anthropic or Google, when you chat."
related:
  - search-history
  - ai-chat
  - custom-shortcut
sitemap:
  priority: 0.8
  changefreq: monthly
---
