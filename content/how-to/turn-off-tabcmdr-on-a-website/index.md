---
title: "How to Turn Off an Extension on One Website | TabCmdr"
linkTitle: "Turn off TabCmdr on a site"
description: "Choose where a Chrome extension may run from its Details page, or add a site to TabCmdr's Block List so its shortcut stays off there and works everywhere else."
ogTitle: "Keep TabCmdr off one site"
ogDescription: "Add a domain to TabCmdr's Block List and the palette stops opening there. Subdomains are covered too, and every other site keeps working."
ogImage: blocked-sites-block-list.png
imageAlt: "TabCmdr settings, Sites, Blocked Sites with mail.google.com and figma.com in the Block List"
cardText: "Add a site to TabCmdr's Block List so the palette stays off there, or limit where any extension runs in Chrome."
heading: "How to turn off an extension on one website"
lead: "In TabCmdr's settings, choose Sites and add the domain to the Block List, one per line. The palette stops opening there and keeps working on every other site."
date: 2026-10-19
lastmod: 2026-10-19
weight: 710
group: own
icon: i-ban
feature: custom-shortcut
docs: settings
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Block a site in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux."
  - title: "Find settings"
    typed: "settings"
    text: "TabCmdr Settings shows up under Commands."
  - title: "Open it and add the site"
    keys: ["↵"]
    text: "Sites, then the Block List. One domain per line."
faqTitle: "Questions about blocking sites"
faq:
  - question: "Does blocking a domain also block its subdomains?"
    answer: "Yes. `github.com` also covers `gist.github.com`. `www.` is ignored, so `notion.so` and `www.notion.so` are the same entry."
  - question: "Can I block one page instead of a whole site?"
    answer: "No. Each line is a domain. If you paste a full address, TabCmdr keeps only the domain, so `https://mail.google.com/mail/u/0/` becomes `mail.google.com`."
  - question: "What happens when I press the shortcut on a blocked site?"
    answer: "Nothing. The palette doesn't open on that site. On every other site the shortcut works as usual."
  - question: "Can I still use TabCmdr while I'm on a blocked site?"
    answer: "Yes. Click the TabCmdr icon in the toolbar. The palette opens from the toolbar instead of on the page."
  - question: "What if I type something that isn't a domain?"
    answer: "TabCmdr lists it under the box as an invalid entry and doesn't save that line. The other lines still save. Fix or delete the invalid one."
relatedTitle: "Related features"
related:
  - custom-shortcut
  - site-shortcuts
  - private-by-design
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Limit where an extension runs in Chrome {.way-chrome}

Chrome lets you choose where each extension can read and change sites:

1. Open the More menu (⋮), choose **Extensions**, then **Manage extensions**.
2. Choose **Details** on the extension.
3. Change **Allow this extension to read and change all your data on websites you visit** to **On select**, **On specific sites** or **On all sites**. With **On specific sites**, you add the sites the extension is allowed on.

These options pick the sites an extension may run on, rather than one site to leave out.

Source: Google's [Install and manage extensions](https://support.google.com/chrome_webstore/answer/2664769) help page, checked in October 2026.

## Turn off TabCmdr on one site {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. If a site already uses {{< kbd "⌘" "K" >}} or {{< kbd "Ctrl" "K" >}} for its own search, or you just don't want the palette there, add the site to TabCmdr's Block List. Everywhere else stays as it is.

### Step 1: Open TabCmdr Settings

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, type `settings` and press {{< kbd "Enter" >}} on **TabCmdr Settings**.

### Step 2: Choose Sites

Pick **Sites** in the sidebar. **Blocked Sites** is the second section on the page.

### Step 3: Add the domain to the Block List

Type the domain in the **Block List** box, one per line. The list saves on its own a moment after you stop typing.

{{< screenshot src="blocked-sites-block-list.png" alt="TabCmdr settings on the Sites page, with mail.google.com and figma.com in the Blocked Sites Block List" caption="Two sites in the Block List. TabCmdr won't open on either of them or their subdomains." >}}

On those sites, pressing the shortcut does nothing. To turn TabCmdr back on for a site, delete its line.

## How TabCmdr reads the list {.way-tabcmdr}

- **Subdomains are included.** `github.com` also blocks `gist.github.com`.
- **`www.` doesn't matter.** `www.notion.so` and `notion.so` are the same entry.
- **Full addresses are trimmed to the domain.** Paste `https://mail.google.com/mail/u/0/` and TabCmdr keeps `mail.google.com`.
- **Lines that aren't domains are flagged.** They're listed under the box as invalid entries and left out until you fix them.
