---
title: "How to Open a Page in Incognito in Chrome | TabCmdr"
linkTitle: "Open a page in Incognito"
description: "Open an empty Incognito window with Ctrl+Shift+N, or send the page you're on, or any tab, bookmark or history entry, to Incognito with TabCmdr's row button."
ogTitle: "Open the page you're on in Incognito"
ogDescription: "Send any open tab, bookmark or page from your history to a new Incognito window, without copying its address."
ogImage: incognito-row-button.png
imageAlt: "TabCmdr palette with pull typed and the pointer on the Open in incognito button of a GitHub tab's row"
cardText: "Open an empty Incognito window, or send a tab, bookmark or history page straight to one."
heading: "How to open a page in Incognito in Chrome"
lead: "Press Ctrl+Shift+N (⌘+Shift+N on a Mac) for an empty Incognito window. To open a page you already have in one, press ⌘K with TabCmdr and use Open in incognito."
date: 2026-10-19
lastmod: 2026-10-19
weight: 210
group: tidy
icon: i-incognito
feature: tab-actions
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Open a tab in Incognito in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Find the page"
    typed: "pull"
    text: "Any open tab, bookmark or history entry."
  - title: "Click Open in incognito"
    icon: i-incognito
    text: "The page opens in a new Incognito window."
faqTitle: "Questions about Incognito"
faq:
  - question: "How do I open Incognito in Chrome?"
    answer: "Press Ctrl+Shift+N on Windows, Linux and ChromeOS, or ⌘+Shift+N on a Mac. You can also open the More menu and choose New Incognito window."
  - question: "How do I open the page I'm on in Incognito?"
    answer: "Open TabCmdr, find the tab you're on in the list and click the Open in incognito button on its row. The same address opens in a new Incognito window."
  - question: "Does the original tab close?"
    answer: "No. Open in incognito opens the same address in a new Incognito window. The original tab stays where it was."
  - question: "Can I open a bookmark or a page from my history in Incognito?"
    answer: "Yes. Bookmark and history rows in TabCmdr have the same Open in incognito button, so the page doesn't have to be open first."
  - question: "Does Incognito hide what I do from websites?"
    answer: "No. Google says Incognito limits what Chrome saves on your device, but websites, your employer or school, and your internet service provider may still see your activity."
relatedTitle: "Related features"
related:
  - tab-actions
  - search-bookmarks
  - search-history
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's way to open Incognito {.way-chrome}

Press {{< kbd "Ctrl" "Shift" "N" >}} on Windows, Linux and ChromeOS, or {{< kbd "⌘" "Shift" "N" >}} on a Mac. You can also open the More menu (⋮) and choose **New Incognito window**.

Once you close every Incognito window, Chrome doesn't keep site data or a record of the sites you visited in them. Bookmarks you saved and files you downloaded stay on your device.

The new window starts empty, so to take a page you already have open into it, copy the page's address and paste it there.

Source: Google's [Incognito help page](https://support.google.com/chrome/answer/95464), checked in October 2026.

## Open a page you have in Incognito {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. **Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux.

### Step 2: Find the page

Type part of its title or address so it's the highlighted row. It can be any open tab, the tab you're on included.

### Step 3: Click Open in incognito

Click the button with two people on the highlighted row.

{{< screenshot src="incognito-row-button.png" alt="TabCmdr palette with pull typed and the pointer on the Open in incognito button of the Pull requests tab's row" caption="Open in incognito sends the page on that row to a new Incognito window." >}}

TabCmdr opens the same address in a new Incognito window and closes the palette. The original tab stays open where it was.

Bookmark and history rows have the same button, so you can open a saved page, or one from your history, in Incognito without opening it normally first. It works for web addresses that start with `http` or `https`.

## Open an empty Incognito window {.way-tabcmdr}

Type `incognito` and press {{< kbd "Enter" >}} on **New Incognito Window**.

{{< screenshot src="incognito-command.png" alt="TabCmdr palette with incognito typed, showing the New Incognito Window command" caption="New Incognito Window opens an empty Incognito window." >}}

To find a page to open this way, [search your bookmarks]({{< relref "/features/search-bookmarks" >}}) or [your history]({{< relref "/features/search-history" >}}) in the same box.
