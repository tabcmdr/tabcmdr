---
title: "How to View Page Source in Chrome | TabCmdr"
linkTitle: "View page source"
description: "See the HTML source of any web page in Chrome with Ctrl+U or ⌘+Option+U, or open it from TabCmdr's search box in a new tab without touching a menu."
ogTitle: "See a page's HTML in one shortcut"
ogDescription: "Open the source of the page you're on with Ctrl+U or ⌘+Option+U, or type source in TabCmdr and press Enter."
ogImage: view-page-source-command.png
imageAlt: "TabCmdr palette with source typed and the View Page Source command highlighted"
cardText: "Open the HTML source of the page you're on in a new tab, with Chrome's shortcut or from TabCmdr."
heading: "How to view page source in Chrome"
lead: "Press Ctrl+U on Windows and Linux or ⌘+Option+U on a Mac to see a page's HTML. With TabCmdr, press ⌘K, type source and press Enter."
date: 2026-10-19
lastmod: 2026-10-19
weight: 330
group: page
icon: i-code
feature: page-commands
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "View the source in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux, on the page you want."
  - title: "Type source"
    typed: "source"
    text: "View Page Source shows up."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The source opens in a new tab."
faqTitle: "Questions about viewing page source"
faq:
  - question: "What is the shortcut to view page source in Chrome?"
    answer: "Ctrl+U on Windows and Linux, and ⌘+Option+U on a Mac. Chrome shows the page's HTML source, which you can read but not edit."
  - question: "Where does TabCmdr open the source?"
    answer: "TabCmdr opens it in a new tab at the end of your tab bar and brings that tab to the front. The page you were on stays open."
  - question: "Can I edit the source?"
    answer: "No. Google describes it as non-editable HTML source code, and the page you were on stays as it is."
  - question: "Which pages does TabCmdr's View Page Source work on?"
    answer: "Web pages whose address starts with http:// or https://."
relatedTitle: "Related features"
related:
  - page-commands
  - developer-tools
  - ruler
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in way to view source {.way-chrome}

| To do this | Windows and Linux | Mac |
|---|---|---|
| Show the HTML source of the page | {{< kbd "Ctrl" "U" >}} | {{< kbd "⌘" "Option" "U" >}} |

Google calls it non-editable HTML source code: you can read it, but not change it.

Source: Google's [Chrome keyboard shortcuts](https://support.google.com/chrome/answer/157179) help page, checked in October 2026.

## View the source from the TabCmdr palette {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its **View Page Source** command opens the source of the page you're on, so you don't need to remember a different shortcut on each computer.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette on the page

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux on the page whose source you want.

### Step 2: Type `source`

**View Page Source** shows up under Commands, already highlighted.

{{< screenshot src="view-page-source-command.png" alt="TabCmdr palette with source typed and the View Page Source command highlighted" caption="Typing `source` finds View Page Source." >}}

### Step 3: Press Enter

The palette closes and the source opens in a new tab at the end of your tab bar. The page you were on stays open, so you can switch back to it with TabCmdr or close the source tab when you're done.

View Page Source works on web pages whose address starts with `http://` or `https://`.
