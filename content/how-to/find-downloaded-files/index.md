---
title: "How to Find Your Downloads in Chrome | TabCmdr"
linkTitle: "Find your downloads"
description: "Open Chrome's downloads with Ctrl+J, or find a file from any page: type :d and part of its name, then open it, show it in its folder or copy its source link."
ogTitle: "Find a downloaded file without leaving the page"
ogDescription: "Type :d and part of the file name. Open the file, show it in its folder, copy the link it came from or remove it from the list."
ogImage: downloads-list.png
imageAlt: "TabCmdr palette with :d typed, listing five recent downloads with their file sizes"
cardText: "Find a downloaded file by name from the page you're on, then open it or show it in its folder."
heading: "How to find your downloads in Chrome"
lead: "Press Ctrl+J (⌘+Shift+J on a Mac) to open Chrome's downloads. From any page, press ⌘K with TabCmdr, type :d and part of the file name, then press Enter."
date: 2026-10-19
lastmod: 2026-10-19
weight: 50
group: find
icon: i-download
feature: search-downloads
docs: downloads
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Open a downloaded file in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Search your downloads"
    typed: ":d invoice"
    text: "Part of the file name is enough."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The file opens."
faqTitle: "Questions about finding downloads"
faq:
  - question: "How do I see my downloads in Chrome?"
    answer: "Press Ctrl+J on Windows and Linux or ⌘+Shift+J on a Mac to open the Downloads page in a new tab. You can also open the More menu and choose Downloads."
  - question: "Does Remove from list delete the file?"
    answer: "No. In Chrome and in TabCmdr, removing a download takes it off the downloads list and leaves the file on your computer."
  - question: "How many downloads does TabCmdr show?"
    answer: "Your 100 most recent downloads, newest first."
  - question: "What does File missing mean?"
    answer: "Chrome reports that the file is no longer where it was saved, for example because you moved or deleted it. The download still shows in the list, but Enter can't open the file."
  - question: "Can I copy the link a file came from?"
    answer: "Yes. Highlight the download and click the copy button. TabCmdr copies its source address and shows URL copied."
relatedTitle: "Related features"
related:
  - search-downloads
  - search-history
  - search-open-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in ways to find a download {.way-chrome}

- **Downloads page.** Press {{< kbd "Ctrl" "J" >}} on Windows and Linux, or {{< kbd "⌘" "Shift" "J" >}} on a Mac. The Downloads page opens in a new tab. You can also open the More menu (⋮) and choose **Downloads**.
- **Show in Folder.** On the Downloads page, point to a file name to see extra actions such as **Show in Folder**.
- **Remove.** Click the remove icon next to a download to take it off the list. Chrome removes it from the Downloads page, not from your computer.

Source: Google's [download a file](https://support.google.com/chrome/answer/95759) and [keyboard shortcuts](https://support.google.com/chrome/answer/157179) help pages, checked in October 2026.

## Find a download from any page with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. It lists your downloads in the same search box as your tabs, so you can open a file without leaving the page you're on.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type `:d`

Your downloads are listed newest first, each with its file size. TabCmdr shows your 100 most recent downloads.

{{< screenshot src="downloads-list.png" alt="TabCmdr palette with :d typed, listing five recent downloads with their file sizes" caption="`:d` lists your recent downloads, newest first." >}}

Add part of the file name to narrow the list. Here, `:d invoice` leaves one file.

{{< screenshot src="downloads-search-invoice.png" alt="TabCmdr palette with :d invoice typed, showing invoice-1042.pdf with buttons to show it in its folder, copy its link or remove it" caption="`:d invoice` finds the file. The buttons on the right act on it." >}}

### Step 3: Press Enter

Pressing {{< kbd "Enter" >}} opens the finished file. If the download hasn't finished yet, Enter shows it in its folder instead.

## What the buttons on a download do {.way-tabcmdr}

The highlighted download has three buttons:

| Button | What it does |
|---|---|
| Show in folder | Shows the file in its folder in your file manager. |
| Copy source URL | Copies the address the file was downloaded from and shows URL copied. |
| Remove from list | Takes the download off the list and shows Removed from list. The file stays on your computer. |

The line under each file name shows its size. It reads Downloading… while a download is still running, Failed if it stopped, and File missing if Chrome reports the file is no longer there.
