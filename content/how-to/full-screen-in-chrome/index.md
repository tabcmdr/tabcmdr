---
title: "How to Go Full Screen in Chrome | TabCmdr"
linkTitle: "Go full screen"
description: "Make Chrome fill your screen with F11 on Windows, Fn+F or Control+⌘+F on a Mac, or toggle full screen from TabCmdr's search box. And how to get out again."
ogTitle: "Full screen in Chrome, and back again"
ogDescription: "The full screen shortcuts for Windows and Mac, how to leave full screen, and how to toggle it for a page from TabCmdr."
ogImage: full-screen-command.png
imageAlt: "TabCmdr palette with f11 typed and the Toggle Full Screen command highlighted"
cardText: "Chrome's full screen shortcuts for Windows and Mac, how to leave full screen, and a toggle in the TabCmdr palette."
heading: "How to go full screen in Chrome"
lead: "Press F11 on Windows and Linux, or Fn+F on a Mac, to fill the screen. With TabCmdr, press ⌘K, type f11 and press Enter to toggle full screen for the page."
date: 2026-10-19
lastmod: 2026-10-19
weight: 340
group: page
icon: i-maximize
feature: page-commands
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Go full screen in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type f11"
    typed: "f11"
    text: "Toggle Full Screen shows up."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The page fills the screen. Esc takes you back."
faqTitle: "Questions about full screen in Chrome"
faq:
  - question: "What is the shortcut for full screen in Chrome?"
    answer: "F11 on Windows and Linux. On a Mac, Google lists Fn+F, and Control+⌘+F works in any Mac app that supports full screen."
  - question: "How do I exit full screen in Chrome?"
    answer: "Press F11 again or press and hold Esc. On a Mac, press Fn+F again or press and hold Esc. If TabCmdr put the page in full screen, press Esc or run Toggle Full Screen again."
  - question: "Is TabCmdr's full screen the same as F11?"
    answer: "Not quite. F11 turns on Chrome's full-screen mode. TabCmdr's Toggle Full Screen asks the page you're on to go full screen, the same way a video player's full screen button does, so Esc takes you out of it."
  - question: "Can I use TabCmdr while the page is full screen?"
    answer: "Yes. Press ⌘K or Ctrl+K and the palette opens over the full-screen page, so you can run Toggle Full Screen again to leave."
relatedTitle: "Related features"
related:
  - page-commands
  - screenshots
  - tab-actions
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in ways to go full screen {.way-chrome}

| To do this | Windows and Linux | Mac |
|---|---|---|
| Turn on full-screen mode | {{< kbd "F11" >}} | {{< kbd "Fn" "F" >}} |
| Turn off full-screen mode | {{< kbd "F11" >}} or press and hold {{< kbd "Esc" >}} | {{< kbd "Fn" "F" >}} or press and hold {{< kbd "Esc" >}} |

On a Mac, {{< kbd "Control" "⌘" "F" >}} also works: it's the standard Mac shortcut for full screen in any app that supports it. You can also open Chrome's More menu (⋮) and choose the full screen button next to **Zoom**.

Source: Google's [Chrome keyboard shortcuts](https://support.google.com/chrome/answer/157179) and [zoom](https://support.google.com/chrome/answer/96810) help pages, and Apple's [Mac keyboard shortcuts](https://support.apple.com/en-us/102650), checked in October 2026.

## Toggle full screen from the TabCmdr palette {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its **Toggle Full Screen** command asks the page you're on to fill the screen, the same way a video player's full screen button does.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux on the page you want to see full screen.

### Step 2: Type `f11`

TabCmdr's commands answer to their usual shortcut too, so `f11` finds **Toggle Full Screen**. Typing `full` works as well.

{{< screenshot src="full-screen-command.png" alt="TabCmdr palette with f11 typed and the Toggle Full Screen command highlighted" caption="Typing `f11` finds Toggle Full Screen." >}}

### Step 3: Press Enter

The palette closes and the page fills the screen.

To leave, press {{< kbd "Esc" >}}, or open the palette with {{< kbd "⌘" "K" >}} or {{< kbd "Ctrl" "K" >}} and run **Toggle Full Screen** again. The palette opens over the full-screen page, so the rest of TabCmdr keeps working too.
