---
title: "How to Reopen Closed Tabs in Chrome | TabCmdr"
linkTitle: "Reopen closed tabs"
description: "Reopen the tab you just closed with Ctrl+Shift+T, or find any recently closed tab by name and see when you closed it. Steps for Windows, Mac and Linux."
ogTitle: "Closed a tab by mistake? Get it back"
ogDescription: "Ctrl+Shift+T brings back the last tab. To pick any recently closed tab by name, press ⌘K, type :r and press Enter."
ogImage: reopen-recently-closed-list.png
imageAlt: "TabCmdr palette with :r typed, listing recently closed tabs newest first with how long ago each was closed"
cardText: "Bring back the tab you just closed, or find any recently closed tab by name and see when you closed it."
heading: "How to reopen closed tabs in Chrome"
lead: "Press Ctrl+Shift+T (⌘+Shift+T on a Mac) to reopen the last tab you closed. To find an older one by name, press ⌘K with TabCmdr, type :r and pick it from the list."
date: 2026-10-19
lastmod: 2026-10-19
weight: 20
group: find
icon: i-undo
feature: recently-closed-tabs
docs: recently-closed
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Reopen any closed tab in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "List closed tabs"
    typed: ":r"
    text: "Newest first, with when you closed each one."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The highlighted tab opens again."
faqTitle: "Questions about reopening tabs"
faq:
  - question: "How do I reopen a closed tab in Chrome?"
    answer: "Press Ctrl+Shift+T on Windows and Linux or ⌘+Shift+T on a Mac. To pick a tab other than the last one, press ⌘K or Ctrl+K with TabCmdr, type `:r`, choose the tab and press Enter."
  - question: "How do I reopen a tab I closed earlier, not the last one?"
    answer: "In Chrome, open the More menu and choose History to see recently closed tabs, or press Ctrl+Shift+T until it comes back. In TabCmdr, type `:r` followed by a word from the tab's title, such as `:r invoice`, and press Enter. Only that tab reopens."
  - question: "Can I reopen a closed window?"
    answer: "Yes. If the window was the last thing you closed, Ctrl+Shift+T (⌘+Shift+T on a Mac) brings it back. TabCmdr's `:r` list shows tabs only, but its Undo Close Tab command also restores a window when that was the last thing you closed."
  - question: "How many closed tabs can I get back?"
    answer: "TabCmdr reads the last 24 entries in Chrome's recently closed list and shows the tabs among them. For anything older, search your history with `:h` in TabCmdr, or press Ctrl+H (⌘Y on a Mac) to open Chrome's history page."
  - question: "Does TabCmdr keep a copy of the tabs I close?"
    answer: "No. The list comes from Chrome itself. TabCmdr reads it when you open the palette and doesn't save it anywhere."
relatedTitle: "Related features"
related:
  - recently-closed-tabs
  - search-history
  - close-duplicate-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in ways to reopen a tab {.way-chrome}

- **Keyboard shortcut.** Press {{< kbd "Ctrl" "Shift" "T" >}} on Windows and Linux, or {{< kbd "⌘" "Shift" "T" >}} on a Mac. It reopens the last tab you closed. Press it again for the one before that. If the last thing you closed was a whole window, the shortcut brings the window back.
- **History menu.** Open the More menu (⋮) and choose **History**. The menu lists the tabs and windows you closed recently.
- **History page.** Press {{< kbd "Ctrl" "H" >}} on Windows and Linux, or {{< kbd "⌘" "Y" >}} on a Mac, to search everything you've visited.

Source: Google's [tabs](https://support.google.com/chrome/answer/2391819) and [keyboard shortcuts](https://support.google.com/chrome/answer/157179) help pages, checked in October 2026.

The shortcut only works backwards, one tab at a time. To get back a tab you closed five tabs ago, you reopen the four you closed after it first.

## Find and reopen any closed tab with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. It lists your recently closed tabs newest first, shows when you closed each one, and lets you search them by name, so only the tab you pick reopens.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type `:r`

Your closed tabs are listed newest first, and each row shows how long ago you closed it, such as Just now, 2m ago or 3h ago.

{{< screenshot src="reopen-recently-closed-list.png" alt="TabCmdr palette with :r typed, listing recently closed tabs with how long ago each was closed" caption="`:r` lists the tabs you closed, newest first." >}}

TabCmdr reads the last 24 entries Chrome keeps and lists the tabs among them. Closed windows aren't in this list.

To narrow the list, add a word from the tab's title or address after `:r`. Here, `:r invoice` leaves one tab.

{{< screenshot src="reopen-search-invoice.png" alt="TabCmdr palette with :r invoice typed, showing the closed Stripe invoice tab" caption="`:r invoice` finds the closed invoice tab." >}}

### Step 3: Press Enter

The highlighted tab opens again. The other closed tabs stay in the list for later.

You don't always need `:r`. In a normal search, matching closed tabs show up below your open tabs, and up to five of them appear before you type anything.

## Reopen the last tab with one command {.way-tabcmdr}

Type `undo` in the palette and press {{< kbd "Enter" >}} on **Undo Close Tab**. Like {{< kbd "Ctrl" "Shift" "T" >}}, it reopens the last tab you closed, or the window if that was the last thing you closed.

## Closed it days ago?

Chrome's list of closed tabs is short. For anything older, search your browsing history instead. In TabCmdr, type `:h` and a word from the page. In Chrome, press {{< kbd "Ctrl" "H" >}} or {{< kbd "⌘" "Y" >}}. [Searching your history]({{< relref "/features/search-history" >}}) covers the TabCmdr side in more detail.
