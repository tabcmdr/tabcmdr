---
title: "How to Change Extension Shortcuts in Chrome | TabCmdr"
linkTitle: "Change an extension shortcut"
description: "Set or change the keyboard shortcut for any Chrome extension on chrome://extensions/shortcuts, and see which key combinations Chrome allows for extensions."
ogTitle: "Change any extension's keyboard shortcut"
ogDescription: "Chrome keeps extension shortcuts on one page, chrome://extensions/shortcuts. TabCmdr's settings show your shortcut and open that page for you."
ogImage: shortcut-settings-card.png
imageAlt: "TabCmdr settings, Getting Started, Keyboard Shortcut card showing ⌘ K and a Change button"
cardText: "Set or change the shortcut for any Chrome extension on chrome://extensions/shortcuts, including the keys that open TabCmdr."
heading: "How to change an extension's keyboard shortcut in Chrome"
lead: "Type chrome://extensions/shortcuts in the address bar, find the extension and click the pencil next to its command. In TabCmdr, Change in settings opens that page."
date: 2026-10-19
lastmod: 2026-10-19
weight: 700
group: own
icon: i-keyboard
feature: custom-shortcut
docs: settings
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Change TabCmdr's shortcut in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux."
  - title: "Open TabCmdr Settings"
    typed: "settings"
    text: "Press Enter, then click Change on the Keyboard Shortcut card."
  - title: "Press your new keys"
    keys: ["mod", "P"]
    text: "In the box next to Toggle Command Palette."
faqTitle: "Questions about extension shortcuts"
faq:
  - question: "Where are extension shortcuts in Chrome?"
    answer: "On `chrome://extensions/shortcuts`. You can also open the More menu, choose Extensions, then Manage extensions, and pick Keyboard shortcuts on the left."
  - question: "Which keys can an extension shortcut use?"
    answer: "It has to include Ctrl or Alt. On a Mac, ⌘ can take the place of Ctrl. Shift is optional, and combinations with both Ctrl and Alt aren't allowed."
  - question: "Why doesn't my new shortcut work?"
    answer: "Some Chrome and operating system shortcuts, such as window management keys, always win over extension shortcuts. Pick a combination that nothing else on your computer uses."
  - question: "What does TabCmdr use by default?"
    answer: "⌘K on a Mac and Ctrl+K on Windows and Linux. The command is called Toggle Command Palette on the shortcuts page."
  - question: "Can I open TabCmdr without a shortcut?"
    answer: "Yes. Click the TabCmdr icon in the toolbar and the palette opens."
relatedTitle: "Related features"
related:
  - custom-shortcut
  - layouts
  - themes
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Change any extension's shortcut in Chrome {.way-chrome}

Chrome keeps the keyboard shortcuts for all your extensions on one page.

1. Type `chrome://extensions/shortcuts` in the address bar and press {{< kbd "Enter" >}}. You can also open the More menu (⋮), choose **Extensions**, then **Manage extensions**, and pick **Keyboard shortcuts** on the left.
2. Find the extension. Each of its commands has a box that shows its shortcut, or **Not set**.
3. Click the pencil next to the command and press the keys you want.

Chrome has a few rules for extension shortcuts:

- The shortcut has to include {{< kbd "Ctrl" >}} or {{< kbd "Alt" >}}. On a Mac, {{< kbd "⌘" >}} can take the place of {{< kbd "Ctrl" >}}.
- {{< kbd "Shift" >}} is optional.
- Combinations with both {{< kbd "Ctrl" >}} and {{< kbd "Alt" >}} aren't allowed.
- Some Chrome and operating system shortcuts always take priority and can't be replaced.

Sources: Chrome for Developers' [chrome.commands](https://developer.chrome.com/docs/extensions/reference/api/commands) reference and Google's [Install and manage extensions](https://support.google.com/chrome_webstore/answer/2664769) help page, checked in October 2026.

## Change TabCmdr's shortcut {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. It opens with {{< kbd "⌘" "K" >}} on a Mac and {{< kbd "Ctrl" "K" >}} on Windows and Linux. Its settings show the shortcut you have now and take you to Chrome's shortcuts page in one click.

### Step 1: Open TabCmdr Settings

Press {{< kbd "⌘" "K" >}} or {{< kbd "Ctrl" "K" >}}, type `settings` and press {{< kbd "Enter" >}} on **TabCmdr Settings**. Choose **Getting Started** in the sidebar if it isn't already open. The first card is **Keyboard Shortcut**.

{{< screenshot src="shortcut-settings-card.png" alt="TabCmdr settings on Getting Started, with the Keyboard Shortcut card showing ⌘ K and a Change button" caption="The Keyboard Shortcut card shows the keys that open TabCmdr now." >}}

### Step 2: Click Change

**Change** opens `chrome://extensions/shortcuts` in a new tab. If no shortcut is set, the card says **Not set** and the button reads **Set shortcut**.

### Step 3: Press your new keys

Find TabCmdr, click the pencil next to **Toggle Command Palette** and press the keys you want. Go back to the settings tab and the card shows the new keys.

Under the card, settings also suggests {{< kbd "⌘" "P" >}}, or {{< kbd "Ctrl" "P" >}} on Windows and Linux, the shortcut most code editors use for their command palette. **Set it** opens the same shortcuts page. The suggestion goes away once your shortcut already is that combination.
