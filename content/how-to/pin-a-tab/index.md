---
title: "How to Pin a Tab in Chrome | TabCmdr"
linkTitle: "Pin a tab"
description: "Pin a tab in Chrome from its right-click menu, or press ⌘K with TabCmdr to pin the page you're on, pin any tab from its row and list pinned tabs with :p."
ogTitle: "Pin a tab without reaching for the mouse"
ogDescription: "Pin the tab you're on, pin any other tab from its row, and see only your pinned tabs with :p."
ogImage: pin-a-tab-pinned-list.png
imageAlt: "TabCmdr palette with :p typed, listing two pinned tabs under a Pinned heading"
cardText: "Pin the tab you're on, pin any other tab from its row, and list only your pinned tabs."
heading: "How to pin a tab in Chrome"
lead: "In Chrome, right-click a tab and choose Pin. With TabCmdr, press ⌘K and run Pin Tab, pin any tab from its row, or type :p to see only your pinned tabs."
date: 2026-10-19
lastmod: 2026-10-19
weight: 180
group: tidy
icon: i-pin
feature: tab-actions
docs: tabs
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Pin the tab you're on in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type pin tab"
    typed: "pin tab"
    text: "Pin Tab shows under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The tab moves to the start of the tab bar."
faqTitle: "Questions about pinned tabs"
faq:
  - question: "How do I pin a tab in Chrome?"
    answer: "Right-click the tab and choose Pin. With TabCmdr, press ⌘K or Ctrl+K, type `pin tab` and press Enter to pin the tab you're on."
  - question: "How do I unpin a tab?"
    answer: "Right-click it and choose Unpin. In TabCmdr, type `unpin` and run Unpin Tab for the tab you're on, or click the crossed-out pin on a pinned tab's row."
  - question: "How do I see all my pinned tabs?"
    answer: "Open TabCmdr and type `:p`. Only your pinned tabs are listed, under a Pinned heading."
  - question: "Do pinned tabs get closed when I tidy up?"
    answer: "Close Other Tabs, Close Tabs to the Left and Close Tabs to the Right leave pinned tabs open, and Suspend Inactive Tabs leaves them loaded. Close Duplicate Tabs does count them, so a pinned copy of a page can be the one that stays while the others close."
  - question: "Can I leave pinned tabs out of TabCmdr's search?"
    answer: "Yes. Turn off Pinned Tabs in TabCmdr's settings, under Search & Results. Pinned tabs then stay out of the list, `:p` included."
relatedTitle: "Related features"
related:
  - tab-actions
  - close-tabs-left-right
  - suspend-inactive-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's way to pin a tab {.way-chrome}

Right-click the tab and choose **Pin**. A pinned tab shrinks to the site's icon. To undo it, right-click the tab and choose **Unpin**.

To pin several tabs at once, highlight them first. On Windows and Linux, press {{< kbd "Ctrl" >}} and click each tab, or click the first, press {{< kbd "Shift" >}} and click the last. Then right-click one of them and choose **Pin**.

Source: Google's [tabs help page](https://support.google.com/chrome/answer/2391819), checked in October 2026.

## Pin the tab you're on {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. **Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux.

### Step 2: Type `pin tab`

**Pin Tab** shows up under Commands.

{{< screenshot src="pin-a-tab-commands.png" alt="TabCmdr palette with pin tab typed, showing the Pin Tab command" caption="`pin tab` finds the Pin Tab command." >}}

### Step 3: Press Enter

Pin Tab pins the tab you're on and closes the palette, and **Tab pinned** shows at the bottom of the page. Chrome moves the tab to the start of the tab bar. To undo it, type `unpin` and run **Unpin Tab**, which confirms with **Tab unpinned**.

## Pin a tab without switching to it {.way-tabcmdr}

Type part of the tab's title or address so it's the highlighted row, then click the pin button on that row.

{{< screenshot src="pin-a-tab-row-button.png" alt="TabCmdr palette with figma typed and the pointer on the Pin tab button of the Figma tab's row" caption="The pin button on a tab's row pins it without leaving the page you're on." >}}

You see **Tab pinned** and stay on the page you're on. The button works on tabs in every window.

## See only your pinned tabs {.way-tabcmdr}

Type `:p` to list your pinned tabs and nothing else. Each one has a crossed-out pin badge: click it to unpin that tab.

{{< screenshot src="pin-a-tab-pinned-list.png" alt="TabCmdr palette with :p typed, listing the pinned Gmail and Calendar tabs under a Pinned heading" caption="`:p` lists only your pinned tabs." >}}

In a normal search, pinned tabs that match show under their own **Pinned** heading, below your other tabs.

Pinned tabs also stay put when you tidy up. Close Other Tabs and [Close Tabs to the Left or Right]({{< relref "/features/close-tabs-left-right" >}}) leave them open, and Suspend Inactive Tabs leaves them loaded when you [free up memory]({{< relref "/how-to/make-chrome-use-less-memory" >}}).
