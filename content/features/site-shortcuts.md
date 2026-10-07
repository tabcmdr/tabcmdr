---
title: "Keyboard Shortcuts for GitHub, Gmail and Figma | TabCmdr"
linkTitle: "Site shortcuts"
description: "Tired of learning shortcuts for every web app? On GitHub, Gmail, Figma and six more sites, TabCmdr adds their actions to the palette. Search them by name."
ogTitle: "Every site's shortcuts, searchable by name"
ogDescription: "208 actions for GitHub, Gmail, Figma, Notion, GitLab, Jira, Discord, YouTube and X. Press ⌘K on the site, type what you want and press Enter."
weight: 150
date: 2026-10-06
lastmod: 2026-10-06
group: page
icon: i-command
docs: settings
eyebrow: "Site shortcuts"
heading: "Can't remember site shortcuts?"
headingMuted: "Search them by name."
lead: "On GitHub, Gmail, Figma and six more sites, that site's actions join your palette. Press [kbd:mod][kbd:K], type what you want and press [kbd:↵]."
howTitle: "Use a site shortcut in three steps"
demo:
  name: sites
  layout: split
how:
  - title: "Open the palette on the site"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux."
  - title: "Type what you want to do"
    typed: "issues"
    text: "On GitHub, Go to Issues Tab shows under Commands."
  - title: "Run it"
    keys: ["↵"]
    text: "TabCmdr does it on the page for you."
showcase:
  title: "How site shortcuts work"
  lead: "TabCmdr checks the address of the page when it loads. On a supported site, that site's actions are added to your commands."
  rows:
    - title: "208 actions across nine sites"
      text: "TabCmdr knows GitHub (17), Gmail (23), Figma (32), Notion (25), GitLab (25), Jira (20), Discord (20), YouTube (25) and X (21). The actions only appear while you're on that site or one of its subdomains, so your Jira at `acme.atlassian.net` counts."
      points:
        - "They show under Commands next to your tabs, labeled Page command."
        - "`:c` with nothing after it lists the 47 browser commands first, then the site's actions."
      mock: mocks/palette
      palette:
        query: "go to"
        highlight: ["go to"]
        groups:
          - label: "Commands"
            rows:
              - { glyph: i-keyboard, title: "Go to Issues Tab", sub: "Page command", type: i-terminal, selected: true }
              - { glyph: i-keyboard, title: "Go to Pull Requests Tab", sub: "Page command", type: i-terminal }
              - { glyph: i-keyboard, title: "Go to Actions Tab", sub: "Page command", type: i-terminal }
    - title: "Each site handled its own way"
      text: "On GitHub and GitLab, actions like Go to Pull Requests Tab open that page of the repo or project you're in. On YouTube they control the video, such as Seek Forward 10 Seconds or Volume Up (+10%). Gmail actions click the right button or open the right folder. On Figma, Notion and Discord, TabCmdr presses the site's own shortcut for you."
      points:
        - "Jira and X use a mix of direct links and their own shortcuts."
        - "Repo actions on GitHub need you to be inside a repository."
      mock: mocks/preview
      preview:
        type: palette
        query: "seek"
        highlight: ["seek"]
        group: "Commands"
        note: "on youtube.com"
        rows:
          - { glyph: i-keyboard, title: "Seek Forward 10 Seconds", sub: "Page command", selected: true }
          - { glyph: i-keyboard, title: "Seek Back 10 Seconds", sub: "Page command" }
    - title: "Pick the sites you want"
      text: "Enable Site Shortcuts is on by default, with all nine sites ticked. Untick a site to keep its actions out of your palette, or turn the whole thing off. The setting is under Sites in settings and is marked Experimental."
      points:
        - "Your choice is saved with your settings, which sync through your browser profile."
        - "Type `shortcut` on a supported site to list all of its actions."
      mock: mocks/settings
      settings:
        title: "Site Shortcuts"
        rows:
          - { label: "Enable Site Shortcuts", desc: "Adds site-specific actions to the palette when you're on a supported site (GitHub, YouTube, Notion, etc.).", toggle: "on" }
        checks:
          - { label: "GitHub", on: true }
          - { label: "YouTube", on: true }
          - { label: "Gmail", on: true }
          - { label: "Notion", on: true }
          - { label: "Figma", on: true }
          - { label: "Discord", on: false }
          - { label: "GitLab", on: true }
          - { label: "Jira", on: true }
          - { label: "X (Twitter)", on: true }
detailsTitle: "Why use site shortcuts this way"
details:
  - icon: i-search
    title: "Find it by what it does"
    text: "Type `blame`, `snooze` or `theater` and the matching action shows up. No key combos to learn."
  - icon: i-keyboard
    title: "Same shortcut on every site"
    text: "[kbd:mod][kbd:K] opens the same palette on GitHub, Gmail and YouTube, so there's one habit to keep."
  - icon: i-play
    title: "Video controls on YouTube"
    text: "Play / Pause, Toggle Captions, Increase Playback Speed and more work without clicking the player first."
  - icon: i-layers
    title: "Mixed in with your tabs"
    text: "Site actions sit in the same list as your open tabs and browser commands, so one search covers all of them."
  - icon: i-ban
    title: "Keep a site's own Cmd+K"
    text: "If a site needs its own ⌘K, add it to the Block List under Sites in settings and TabCmdr won't open there."
  - icon: i-lock
    title: "No extra permission"
    text: "Site actions run inside the page you're on. They don't need any of TabCmdr's optional permissions."
faqTitle: "Questions about site shortcuts"
faq:
  - question: "How do I use GitHub shortcuts without memorizing them?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux while you're in a repo, type part of the action, like `issues` or `pull requests`, and press Enter. TabCmdr opens that tab of the repo."
  - question: "Which sites have shortcuts?"
    answer: "GitHub, Gmail, Figma, Notion, GitLab, Jira, Discord, YouTube and X, with 208 actions in total."
  - question: "Does it work on my company's Jira or GitLab?"
    answer: "Jira actions load on any address that ends in `atlassian.net`. GitLab actions load on `gitlab.com` and its subdomains, so a self-hosted GitLab on another domain isn't covered."
  - question: "Can I turn off shortcuts for one site?"
    answer: "Yes. Open settings, go to Sites and untick that site under Site Shortcuts. Turn off Enable Site Shortcuts to hide them on every site."
  - question: "Why does a GitHub action do nothing?"
    answer: "Actions like Go to Issues Tab need you to be inside a repository. Open Blame View only works when you're looking at a file."
  - question: "Can I add my own sites?"
    answer: "No. The nine sites and their actions are built into TabCmdr."
related:
  - page-commands
  - custom-shortcut
  - search-open-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
