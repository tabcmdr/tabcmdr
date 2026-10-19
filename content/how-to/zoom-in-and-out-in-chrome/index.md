---
title: "How to Zoom In and Out in Chrome | TabCmdr"
linkTitle: "Zoom in and out"
description: "Zoom a page in Chrome with Ctrl and + or ⌘ and +, set a default zoom for every page, or zoom 10% at a time from TabCmdr's search box. Steps for Windows and Mac."
ogTitle: "Zoom any page without the menu"
ogDescription: "Chrome's zoom shortcuts, where to set a default page zoom, and how to zoom 10% at a time from TabCmdr without the mouse."
ogImage: zoom-palette-commands.png
imageAlt: "TabCmdr palette with zoom typed, listing Zoom In, Reset Zoom and Zoom Out"
cardText: "Chrome's zoom shortcuts, a default zoom for every page, and 10% steps from the TabCmdr palette."
heading: "How to zoom in and out in Chrome"
lead: "Press Ctrl and + to zoom in, Ctrl and - to zoom out and Ctrl+0 to reset (⌘ on a Mac). With TabCmdr, type zoom and press Enter once for each 10% step."
date: 2026-10-19
lastmod: 2026-10-19
weight: 300
group: page
icon: i-zoom-in
feature: page-commands
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Zoom a page in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type zoom"
    typed: "zoom"
    text: "Zoom In, Reset Zoom and Zoom Out show up."
  - title: "Press Enter"
    keys: ["↵"]
    text: "Press it again for each 10% step."
faqTitle: "Questions about zooming in Chrome"
faq:
  - question: "What is the keyboard shortcut to zoom in Chrome?"
    answer: "On Windows and Linux, Ctrl and + zooms in, Ctrl and - zooms out and Ctrl+0 returns the page to its default size. On a Mac, use ⌘ and +, ⌘ and - and ⌘+0."
  - question: "How do I make every page bigger in Chrome?"
    answer: "Open the More menu, choose Settings, then Appearance, and pick a size next to Page zoom. That sets the default zoom for all pages."
  - question: "Does zoom change one tab or the whole site?"
    answer: "The whole site. Chrome saves zoom per site, and TabCmdr's zoom commands work the same way, so other open tabs from the same site change too."
  - question: "How far can I zoom with TabCmdr?"
    answer: "From 25% up to 500%, in steps of 10%. Reset Zoom sets the page back to 100%."
  - question: "Why did the TabCmdr palette get bigger when I zoomed in?"
    answer: "The palette sits on top of the page, so it grows and shrinks with the page's zoom. It goes back to its usual size when you reset the zoom."
  - question: "How do I clear a zoom level Chrome saved for a site?"
    answer: "Go to Settings, then Privacy and security, Site settings, Additional content settings and Zoom levels. Click X next to the site to remove its saved zoom."
relatedTitle: "Related features"
related:
  - page-commands
  - screenshots
  - tab-actions
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in ways to zoom {.way-chrome}

| To do this | Windows and Linux | Mac |
|---|---|---|
| Zoom in | {{< kbd "Ctrl" "+" >}} | {{< kbd "⌘" "+" >}} |
| Zoom out | {{< kbd "Ctrl" "-" >}} | {{< kbd "⌘" "-" >}} |
| Back to the default size | {{< kbd "Ctrl" "0" >}} | {{< kbd "⌘" "0" >}} |

You can also open the More menu (⋮) and use the zoom buttons next to **Zoom**.

Chrome remembers the zoom for each site. To make every page bigger or smaller, open the More menu, choose **Settings**, then **Appearance**, and pick a size next to **Page zoom**. Saved zoom levels for single sites are listed under **Settings** > **Privacy and security** > **Site settings** > **Additional content settings** > **Zoom levels**, where you can remove them.

Source: Google's [Chrome keyboard shortcuts](https://support.google.com/chrome/answer/157179) and [zoom](https://support.google.com/chrome/answer/96810) help pages, checked in October 2026.

## Zoom from the TabCmdr palette {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its zoom commands sit in the same search box you use to find tabs, and each one shows a short note when it's done.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette and type `zoom`

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, then type `zoom`. **Zoom In**, **Reset Zoom** and **Zoom Out** show up under Commands.

{{< screenshot src="zoom-palette-commands.png" alt="TabCmdr palette with zoom typed, listing the Zoom In, Reset Zoom and Zoom Out commands" caption="Typing `zoom` lists all three zoom commands." >}}

### Step 2: Press Enter for each step

Zoom In is already highlighted. Press {{< kbd "Enter" >}} and the zoom goes up 10%, for example from 100% to 110%. The palette stays open and shows **Zoomed in**, so press {{< kbd "Enter" >}} again for the next step. To make the page smaller, press {{< kbd "↓" >}} to **Zoom Out** first.

{{< screenshot src="zoom-palette-zoomed-in.png" alt="TabCmdr palette at 120% zoom, larger than before, with a Zoomed in message at the bottom" caption="After two presses of Enter the page is at 120%, and the palette grew with it." >}}

The palette sits on top of the page, so it grows and shrinks with the page's zoom. TabCmdr zooms from 25% up to 500%. Like Chrome's own zoom, the new level applies to every open tab from the same site.

### Step 3: Reset when you're done

Type `reset zoom` and press {{< kbd "Enter" >}}. The page goes back to 100%, the palette closes and **Zoom reset** shows at the bottom of the page.

Reset Zoom always sets 100%. If you picked a different default under **Page zoom** in Chrome's settings, press {{< kbd "Ctrl" "0" >}} ({{< kbd "⌘" "0" >}} on a Mac) to go back to that size instead.
