---
title: "How to Bookmark a Page in Chrome | TabCmdr"
linkTitle: "Bookmark a page"
description: "Bookmark the page you're on with Ctrl+D or ⌘+D, or with the Bookmark This Page command in TabCmdr, then find it again later by typing :b and a word."
ogTitle: "Save a page for later in one keystroke"
ogDescription: "Bookmark the page you're on with Ctrl+D or ⌘+D, or from TabCmdr's search box, and find it again by typing :b."
ogImage: bookmark-this-page-command.png
imageAlt: "TabCmdr palette with bookmark this typed and the Bookmark This Page command highlighted"
cardText: "Save the page you're on as a bookmark from the keyboard, then find it again by typing :b and a word."
heading: "How to bookmark a page in Chrome"
lead: "Press Ctrl+D (⌘+D on a Mac) to bookmark the page you're on. With TabCmdr, press ⌘K, type bookmark this and press Enter. It saves to Other bookmarks."
date: 2026-10-19
lastmod: 2026-10-19
weight: 350
group: page
icon: i-bookmark
feature: page-commands
docs: bookmarks
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Bookmark a page in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux, on the page to save."
  - title: "Type bookmark this"
    typed: "bookmark this"
    text: "Bookmark This Page shows up."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The page is saved to Other bookmarks."
faqTitle: "Questions about bookmarking pages"
faq:
  - question: "What is the shortcut to bookmark a page in Chrome?"
    answer: "Ctrl+D on Windows and Linux, and ⌘+D on a Mac. You can also select Bookmark to the right of the address bar."
  - question: "Where does TabCmdr save the bookmark?"
    answer: "In Chrome's Other bookmarks folder, named after the page's title."
  - question: "What if the page is already bookmarked?"
    answer: "TabCmdr checks first. If the same address is already in your bookmarks, in any folder, it shows Already bookmarked and doesn't save a second copy."
  - question: "How do I find the bookmark later?"
    answer: "Press ⌘K or Ctrl+K, type `:b` and a word from its title or address, and press Enter to open it."
  - question: "How do I organize my bookmarks?"
    answer: "Use Chrome's Bookmark Manager. Open the More menu, choose Bookmarks and lists, then Bookmark Manager."
relatedTitle: "Related features"
related:
  - search-bookmarks
  - page-commands
  - search-history
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in ways to bookmark a page {.way-chrome}

- **Keyboard shortcut.** Press {{< kbd "Ctrl" "D" >}} on Windows and Linux, or {{< kbd "⌘" "D" >}} on a Mac, to save the page you're on as a bookmark.
- **Address bar.** Select **Bookmark** to the right of the address bar.
- **Bookmark Manager.** To see and organize your bookmarks, open the More menu (⋮) and choose **Bookmarks and lists** > **Bookmark Manager**. Typing `@bookmarks` in the address bar, then {{< kbd "Tab" >}} or {{< kbd "Space" >}}, searches them from there.

Source: Google's [Chrome keyboard shortcuts](https://support.google.com/chrome/answer/157179) and [bookmarks](https://support.google.com/chrome/answer/188842) help pages, checked in October 2026.

## Bookmark from the TabCmdr palette {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its **Bookmark This Page** command saves the page you're on, and the same search box finds the bookmark again later.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette on the page

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux on the page you want to save.

### Step 2: Type `bookmark this`

**Bookmark This Page** shows up under Commands, already highlighted.

{{< screenshot src="bookmark-this-page-command.png" alt="TabCmdr palette with bookmark this typed and the Bookmark This Page command highlighted" caption="Typing `bookmark this` finds Bookmark This Page." >}}

### Step 3: Press Enter

The palette closes, **Page bookmarked** shows at the bottom of the page, and the page is saved in Chrome's **Other bookmarks** folder, named after the page's title.

If the same address is already bookmarked, in any folder, you see **Already bookmarked** instead and nothing new is saved, so you won't end up with copies.

## Find the bookmark again {.way-tabcmdr}

Open the palette and type `:b` followed by a word from the page's title or address. Each bookmark shows the folder it's in. Press {{< kbd "Enter" >}} to open it.

{{< screenshot src="bookmark-in-other-bookmarks.png" alt="TabCmdr palette with :b fetch typed, showing the saved Fetch API bookmark in the Other bookmarks folder" caption="`:b fetch` finds the new bookmark in Other bookmarks." >}}

[Searching your bookmarks]({{< relref "/features/search-bookmarks" >}}) covers the `:b` search in more detail.
