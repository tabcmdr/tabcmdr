---
title: "How to Hard Reload a Page in Chrome | TabCmdr"
linkTitle: "Hard reload a page"
description: "Reload a Chrome page without its cached files using Ctrl+Shift+R or Shift+F5, or run TabCmdr's Hard Reload from the page. Plus how to empty the cache."
ogTitle: "Page still showing the old version?"
ogDescription: "Hard reload a page in Chrome with Ctrl+Shift+R or ⌘+Shift+R, or from TabCmdr's search box, and empty the cache when you need to."
ogImage: hard-reload-command.png
imageAlt: "TabCmdr palette with hard typed and the Hard Reload (Clear Cache) command highlighted"
cardText: "Reload a page without its cached files from the keyboard, and empty Chrome's cache when a reload isn't enough."
heading: "How to hard reload a page in Chrome"
lead: "Press Ctrl+Shift+R or Shift+F5 (⌘+Shift+R on a Mac) to reload a page without its cached files. With TabCmdr, press ⌘K, type hard and press Enter."
date: 2026-10-19
lastmod: 2026-10-19
weight: 310
group: page
icon: i-rotate
feature: page-commands
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Hard reload in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux, on the page to reload."
  - title: "Type hard"
    typed: "hard"
    text: "Hard Reload (Clear Cache) shows up."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The page reloads without its cached files."
faqTitle: "Questions about hard reloading"
faq:
  - question: "What is a hard reload?"
    answer: "A normal reload can reuse files Chrome saved from your last visit, such as images, styles and scripts. A hard reload ignores those saved copies and loads the page fresh from the site."
  - question: "What is the shortcut for a hard reload in Chrome?"
    answer: "Ctrl+Shift+R or Shift+F5 on Windows and Linux, and ⌘+Shift+R on a Mac."
  - question: "Does a hard reload clear the cache?"
    answer: "No. It skips the saved copies for that one reload and doesn't empty Chrome's cache. To delete cached files, press Ctrl+Shift+Delete (⌘+Shift+Delete on a Mac) to open Chrome's Delete browsing data options."
  - question: "Which tab does TabCmdr's Hard Reload reload?"
    answer: "The tab you opened the palette on."
  - question: "Is there a normal reload in TabCmdr too?"
    answer: "Yes. Type `reload page` and press Enter on Reload Page for a normal reload."
relatedTitle: "Related features"
related:
  - page-commands
  - tab-actions
  - screenshots
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in ways to hard reload {.way-chrome}

| To do this | Windows and Linux | Mac |
|---|---|---|
| Reload, ignoring cached content | {{< kbd "Ctrl" "Shift" "R" >}} or {{< kbd "Shift" "F5" >}} | {{< kbd "⌘" "Shift" "R" >}} |
| Open the Delete browsing data options | {{< kbd "Ctrl" "Shift" "Delete" >}} | {{< kbd "⌘" "Shift" "Delete" >}} |

On Windows and Linux, {{< kbd "F5" >}} or {{< kbd "Ctrl" "R" >}} is a normal reload, which can reuse files Chrome saved earlier.

A hard reload only skips the cache for that one load. When you need to empty the cache itself, open the More menu (⋮) and choose **Delete browsing data**, pick a time range, select what to delete and confirm with **Delete data**.

Source: Google's [Chrome keyboard shortcuts](https://support.google.com/chrome/answer/157179) and [clear cache and cookies](https://support.google.com/accounts/answer/32050) help pages, checked in October 2026.

## Hard reload from the TabCmdr palette {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its **Hard Reload (Clear Cache)** command does the same as Chrome's shortcut: it reloads the tab without using the copies Chrome saved.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette on the page

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux on the page you want to reload.

### Step 2: Type `hard`

**Hard Reload (Clear Cache)** shows up under Commands, already highlighted.

{{< screenshot src="hard-reload-command.png" alt="TabCmdr palette with hard typed and the Hard Reload (Clear Cache) command highlighted" caption="Typing `hard` finds Hard Reload (Clear Cache)." >}}

### Step 3: Press Enter

The palette closes and the tab reloads, skipping the cached copies. Despite the name, it doesn't empty Chrome's cache.

If you don't remember the name, type `cache` instead.

{{< screenshot src="hard-reload-search-cache.png" alt="TabCmdr palette with cache typed, showing Hard Reload (Clear Cache) at the top" caption="`cache` finds the same command." >}}

For a normal reload, type `reload page` and press {{< kbd "Enter" >}} on **Reload Page**.
