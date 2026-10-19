---
title: "How to Switch Tabs in Chrome with the Keyboard | TabCmdr"
linkTitle: "Switch tabs with the keyboard"
description: "Every Chrome shortcut for switching tabs on Windows, Mac and Linux, plus how to jump to any tab by name in any window, or back to the last one you used."
ogTitle: "Switch Chrome tabs without touching the mouse"
ogDescription: "Ctrl+Tab, Ctrl+1 to 9, tab search, and a faster way: press ⌘K, type a few letters of the tab's name and press Enter."
ogImage: switch-tabs-search-pull.png
imageAlt: "TabCmdr palette with pull typed, showing three matching tabs from two Chrome windows"
cardText: "Chrome's tab shortcuts for Windows, Mac and Linux, and how to jump to any tab by typing a few letters of its name."
heading: "How to switch tabs in Chrome with the keyboard"
lead: "Ctrl+Tab moves to the next tab and Ctrl+1 to Ctrl+8 pick a tab by position (⌘+Option+→ and ⌘1 to ⌘8 on a Mac). To jump to any tab by name, press ⌘K with TabCmdr."
date: 2026-10-19
lastmod: 2026-10-19
weight: 10
group: find
feature: search-open-tabs
docs: tabs
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Switch to any tab in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type part of the tab's name"
    typed: "pull"
    text: "Titles and addresses from every window match."
  - title: "Press Enter"
    keys: ["↵"]
    text: "You land on the tab, and its window comes to the front."
faqTitle: "Questions about switching tabs"
faq:
  - question: "What is the keyboard shortcut to switch tabs in Chrome?"
    answer: "On Windows and Linux, Ctrl+Tab goes to the next tab and Ctrl+Shift+Tab to the previous one. On a Mac, use ⌘+Option+Right arrow and ⌘+Option+Left arrow. Ctrl+1 to Ctrl+8 (⌘1 to ⌘8 on a Mac) jump to a tab by its position, and Ctrl+9 (⌘9) jumps to the last tab."
  - question: "How do I switch to a tab in another Chrome window?"
    answer: "Chrome's next and previous tab shortcuts only move within the current window. Press Ctrl+Shift+A (⌘+Shift+A on a Mac) to search your open tabs, or with TabCmdr installed press ⌘K or Ctrl+K, type part of the tab's title and press Enter. TabCmdr brings the tab's window to the front."
  - question: "How do I go back to the tab I was just on?"
    answer: "Chrome's shortcuts move by position, so Ctrl+Shift+Tab goes to the tab on the left. In TabCmdr's settings, set Open Tabs Order to Recently Used and Current Tab Position to Always last. After that, ⌘K or Ctrl+K followed by Enter takes you back to the tab you used before this one."
  - question: "Do these shortcuts work in Edge and Brave?"
    answer: "Yes. Edge and Brave use the same Ctrl+Tab and Ctrl+1 to Ctrl+9 shortcuts as Chrome. TabCmdr runs in both, with the same ⌘K or Ctrl+K."
  - question: "Why doesn't TabCmdr open on chrome:// pages?"
    answer: "Browsers don't let extensions draw on their own pages, such as `chrome://settings` or the Chrome Web Store. On those pages TabCmdr opens the palette in a small window of its own, so you can still search and switch tabs."
  - question: "Does TabCmdr read what's on my tabs?"
    answer: "No. Tab search uses each tab's title and address. They're read when you open the palette and dropped when you close it, and they aren't sent anywhere."
relatedTitle: "Related features"
related:
  - search-open-tabs
  - custom-shortcut
  - recently-closed-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in shortcuts for switching tabs {.way-chrome}

Chrome's own shortcuts move between the tabs in the window you're in. Edge and Brave use the same keys.

| To do this | Windows and Linux | Mac |
|---|---|---|
| Next tab | {{< kbd "Ctrl" "Tab" >}} or {{< kbd "Ctrl" "PgDn" >}} | {{< kbd "⌘" "Option" "→" >}} |
| Previous tab | {{< kbd "Ctrl" "Shift" "Tab" >}} or {{< kbd "Ctrl" "PgUp" >}} | {{< kbd "⌘" "Option" "←" >}} |
| Tab 1 to 8 | {{< kbd "Ctrl" "1" >}} to {{< kbd "Ctrl" "8" >}} | {{< kbd "⌘" "1" >}} to {{< kbd "⌘" "8" >}} |
| Last tab | {{< kbd "Ctrl" "9" >}} | {{< kbd "⌘" "9" >}} |
| Search open tabs | {{< kbd "Ctrl" "Shift" "A" >}} | {{< kbd "⌘" "Shift" "A" >}} |
| Reopen the last closed tab | {{< kbd "Ctrl" "Shift" "T" >}} | {{< kbd "⌘" "Shift" "T" >}} |

Sources: Google's [Chrome keyboard shortcuts](https://support.google.com/chrome/answer/157179) and [tab search](https://support.google.com/chrome/answer/2391819) help pages, checked in October 2026.

These are enough with five or six tabs open. With more, three things get in the way:

- **They count by position.** Past the eighth tab there's no number to press, so you press {{< kbd "Ctrl" "Tab" >}} again and again until the right tab comes up.
- **They stay in one window.** Next tab, previous tab and the number keys never leave the window you're in.
- **They don't know which tab you used last.** {{< kbd "Ctrl" "Shift" "Tab" >}} goes to the tab on the left, which may not be the one you came from.

Chrome's tab search, {{< kbd "Ctrl" "Shift" "A" >}}, opens a list of your open tabs that you filter by typing. Typing `@tabs` in the address bar does the same from there.

## Switch to any tab by name with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser instead of on your desktop. Press ⌘K on any page, type a few letters of a tab's title or address, and press Enter to go to that tab, in whichever window it's in. The same box also searches your bookmarks and history, runs 47 browser commands and does quick math. It works in Chrome, Edge, Brave, Arc, Vivaldi and Opera, with nothing to install outside the browser.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux. Clicking the TabCmdr icon in the toolbar opens it too. The palette lists your open tabs from every window, in tab bar order.

{{< screenshot src="switch-tabs-palette-open.png" alt="TabCmdr palette open over a web page, listing open tabs with their titles and addresses" caption="The palette lists every open tab with its title and address." >}}

On pages where Chrome doesn't allow extensions, such as `chrome://settings` or the Chrome Web Store, the palette opens in a small window of its own instead.

### Step 2: Type part of the tab's title or address

Start typing and the list narrows with each letter. Here, `pull` matches three tabs: a list of pull requests in this window, and a pull request and a Notion page in a second window.

{{< screenshot src="switch-tabs-search-pull.png" alt="TabCmdr palette with pull typed, showing three matching tabs, then the same pages under History with when they were visited" caption="Typing `pull` finds three tabs across two windows, then matching pages from your history." >}}

A few rules help a short search find the right tab:

- Each word matches the start of a word, so `pul` already finds "Pull requests".
- A word in the title counts for more than the same word in the address.
- Every word you type has to match. `pull 482` leaves only pull request #482.
- Words of five letters or more allow a typo, so `onbording` still finds "Onboarding flow v3".

Pages from your history that match come next, with when you last visited them, and below those the palette offers to search Google, Bing or DuckDuckGo for what you typed.

### Step 3: Press Enter to switch

The best match is already highlighted. Press {{< kbd "↓" >}} or {{< kbd "↑" >}} to pick a different row, then press {{< kbd "Enter" >}}. TabCmdr switches to that tab, and if it's in another window, brings that window to the front. {{< kbd "Esc" >}} closes the palette without switching.

## Jump back to the tab you were just on {.way-tabcmdr}

{{< kbd "Alt" "Tab" >}} on Windows, or {{< kbd "⌘" "Tab" >}} on a Mac, takes you back to the last app you used. None of the tab shortcuts in the table above does that for tabs. TabCmdr can, after a one-time change in its settings:

1. Open the palette, type `settings` and press {{< kbd "Enter" >}} on **TabCmdr Settings**.
2. Choose **Tabs & Ordering** in the sidebar.
3. Under **Open Tabs Order**, pick **Recently Used**.
4. Set **Current Tab Position** to **Always last**.

{{< screenshot src="switch-tabs-recently-used-setting.png" alt="TabCmdr settings, Open Tabs Order section, with Recently Used selected and Current Tab Position set to Always last" caption="Recently Used with Always last puts the tab you used before this one at the top." >}}

Now the list is sorted by when you last used each tab, and the tab you're on moves to the bottom. The tab you came from sits first and is already highlighted, so {{< kbd "⌘" "K" >}} then {{< kbd "Enter" >}} takes you back. Press them again to return.

{{< screenshot src="switch-tabs-jump-back.png" alt="TabCmdr palette sorted by recent use, with the MDN tab used a moment ago highlighted at the top" caption="After moving from the MDN tab to Google Docs, MDN is first in the list." >}}

## Keys that work in the list {.way-tabcmdr}

| Key | What it does |
|---|---|
| {{< kbd "↑" >}} {{< kbd "↓" >}} | Move the highlight up or down |
| {{< kbd "Enter" >}} | Go to the highlighted tab |
| {{< kbd "←" >}} {{< kbd "→" >}} | Switch between the All, Tabs, Bookmarks, History, Downloads, Recently Closed and Tools filters |
| {{< kbd "⌘" "⌫" >}} or {{< kbd "Ctrl" "Backspace" >}} | Close the highlighted tab |
| {{< kbd "Esc" >}} | Close the palette |

Start a search with `:p` to list only your pinned tabs. `:t` lists your open tabs together with TabCmdr's commands.

The highlighted row has buttons for that tab: reload, mute, pin, duplicate, open in an incognito window, remove from its tab group, move to a new window, copy the address and close. The palette stays open afterwards, so you can tidy several tabs in a row. The [keyboard shortcuts page]({{< relref "/docs/keyboard-shortcuts" >}}) in the docs lists the rest.

## If the palette doesn't open {.way-tabcmdr}

- **Another app already uses {{< kbd "⌘" "K" >}}.** In TabCmdr's settings, click **Change** under **Keyboard Shortcut**. Chrome's shortcuts page opens, and you can give TabCmdr different keys there. [Changing an extension's shortcut]({{< relref "/how-to/change-an-extension-keyboard-shortcut" >}}) walks through it. Clicking the toolbar icon works in the meantime.
- **The tab was open before you installed TabCmdr.** Reload that tab once.
- **The site is on your blocked list.** TabCmdr stays off on sites listed under **Blocked Sites** in its settings. Remove the site there to turn it back on.
