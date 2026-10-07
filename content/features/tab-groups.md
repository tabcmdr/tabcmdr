---
title: "Remove a Tab from Its Tab Group in Chrome | TabCmdr"
linkTitle: "Tab groups"
description: "Tab in the wrong group? Run Remove Tab from Group, or click Remove from group on any tab in the palette. Turn on Tab Groups and results show each tab's group."
ogTitle: "Take a tab out of its group in one command"
ogDescription: "Press ⌘K, type group and press Enter. The tab you're on leaves its tab group and stays open. Any tab in the list can be ungrouped the same way."
weight: 130
date: 2026-10-06
lastmod: 2026-10-06
group: tidy
icon: i-ungroup
docs: tab-groups
eyebrow: "Tab groups"
heading: "Tab stuck in the wrong group?"
headingMuted: "Take it out with one command."
lead: "Pull the tab you're on, or any tab in the list, out of its tab group. Press [kbd:mod][kbd:K], type `group` and press [kbd:↵]."
demo:
  name: shortcut
  layout: split
  token: ":c"
  query: "group"
  tries: ["group", "remove tab", "move tab"]
howTitle: "Remove a tab from its group in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On the tab you want to move out."
  - title: "Find the command"
    typed: ":c group"
    text: "Remove Tab from Group shows under Commands."
  - title: "Run it"
    keys: ["↵"]
    text: "The tab leaves its group and stays open."
showcase:
  title: "What TabCmdr does with tab groups"
  lead: "TabCmdr takes tabs out of groups and shows which group a tab is in. Making, naming and coloring groups stays in the browser's own tab bar."
  rows:
    - title: "Remove the tab you're on from its group"
      text: "Run **Remove Tab from Group** and the tab you're on leaves its group. The tab stays open. If it was the last tab in the group, the browser removes the empty group."
      points:
        - "It works without the Tab Groups permission."
        - "The message reads **Removed from group** when it's done."
      mock: mocks/preview
      preview:
        type: palette
        query: ":c group"
        highlight: ["group"]
        group: "Commands"
        toast: "Removed from group"
        rows:
          - { glyph: i-ungroup, title: "Remove Tab from Group", sub: "Page command", selected: true }
    - title: "See each tab's group in the results"
      text: "Turn on the Tab Groups permission in TabCmdr's settings and every grouped tab gets a small badge with its group's name, in the group's color. A group without a name shows its color instead, such as blue."
      points:
        - "Search looks at tab titles and addresses. Typing a group's name doesn't find the tabs in it."
        - "The permission is marked Chrome only, and TabCmdr's settings don't offer it in Edge."
      mock: mocks/palette
      palette:
        query: "acme"
        highlight: ["acme"]
        groups:
          - label: "Tabs"
            rows:
              - { host: github.com, title: "Pull requests · acme/web", sub: "https://github.com/acme/web/pulls", meta: "Review", type: i-monitor, selected: true }
              - { host: vercel.com, title: "Deployments - acme-web - Vercel", sub: "https://vercel.com/acme/web/deployments", type: i-monitor }
              - { host: notion.so, title: "Design tokens - acme wiki", sub: "https://www.notion.so/acme/Design-tokens-31aa", meta: "Review", type: i-monitor }
    - title: "Ungroup any tab from the list"
      text: "Every tab row in the palette has a **Remove from group** button, so you can take a tab out of its group without switching to it. The group badge on that row goes away right after."
      points:
        - "If the tab isn't in a group, you see **Tab not in a group**."
        - "The same row can also move the tab to a new window or close it."
      mock: mocks/palette
      palette:
        query: "acme"
        highlight: ["acme"]
        tip: "Remove from group"
        toast: "Removed from group"
        groups:
          - label: "Tabs"
            rows:
              - { host: github.com, title: "Pull requests · acme/web", sub: "https://github.com/acme/web/pulls", type: i-monitor, actions: tab, selected: true }
              - { host: notion.so, title: "Design tokens - acme wiki", sub: "https://www.notion.so/acme/Design-tokens-31aa", meta: "Review", type: i-monitor }
detailsTitle: "More ways to rearrange tabs"
details:
  - icon: i-maximize
    title: "Move Tab to New Window"
    text: "Gives the tab you're on a window of its own. Every row in the list has the same button."
  - icon: i-lock
    title: "Off until you turn it on"
    text: "Tab Groups is an optional permission. Turn it on or off in the Permissions section of settings at any time."
  - icon: i-search
    title: "Grouped tabs in search"
    text: "Tabs in a group show up in tab search like any other tab, from every window."
  - icon: i-sort
    title: "Sorting and groups"
    text: "Sort Tabs Alphabetically goes by title only, so it can take tabs out of their groups. Sort first, then group."
  - icon: i-layers
    title: "Merge All Windows into One"
    text: "Moves the tabs from your other windows into the one you're in and closes the windows it emptied."
  - icon: i-pin
    title: "Tab actions on every row"
    text: "Reload, mute, pin, duplicate, copy the address or close a tab, right from its row in the list."
faqTitle: "Questions about tab groups"
faq:
  - question: "How do I remove a tab from a tab group in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `group` and press Enter on Remove Tab from Group. The tab you're on leaves its group and stays open."
  - question: "Can I ungroup a tab without switching to it?"
    answer: "Yes. Find the tab in the palette and click Remove from group on its row. You stay on the page you're on."
  - question: "Can TabCmdr create or rename tab groups?"
    answer: "No. TabCmdr takes tabs out of groups and shows group names. You make, name and color groups in the browser's tab bar."
  - question: "Can I search tabs by group name?"
    answer: "No. Tab search matches titles and addresses. The group name shows as a badge on the row but isn't searched."
  - question: "Why don't I see group names in the results?"
    answer: "Group names need the Tab Groups permission. Open TabCmdr's settings, go to Permissions and turn on Tab Groups."
  - question: "Does it work in Edge?"
    answer: "TabCmdr's settings don't offer the Tab Groups permission in Edge, so group names don't show in results there."
related:
  - tab-actions
  - sort-tabs
  - search-open-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
