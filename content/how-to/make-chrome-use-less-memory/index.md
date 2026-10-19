---
title: "How to Make Chrome Use Less Memory | TabCmdr"
linkTitle: "Make Chrome use less memory"
description: "See which Chrome tabs use the most memory, turn on Memory Saver, and unload every idle tab in a window at once with one command. Steps for Windows and Mac."
ogTitle: "Too many tabs slowing Chrome down?"
ogDescription: "Find the tabs using the most memory, turn on Memory Saver, and suspend every idle tab in a window with one command."
ogImage: chrome-memory-suspend-command.png
imageAlt: "TabCmdr palette with suspend typed and the Suspend Inactive Tabs command highlighted"
cardText: "Find the tabs using the most memory, turn on Memory Saver, and unload every idle tab in a window at once."
heading: "How to make Chrome use less memory"
lead: "Turn on Memory Saver in Chrome's Settings > Performance so idle tabs sleep on their own. To free memory right now, press ⌘K with TabCmdr and run Suspend Inactive Tabs."
date: 2026-10-19
lastmod: 2026-10-19
weight: 100
group: tidy
icon: i-moon
feature: suspend-inactive-tabs
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Free memory now in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Use the window with too many tabs."
  - title: "Type suspend"
    typed: "suspend"
    text: "Suspend Inactive Tabs shows under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "Other tabs in this window unload. Pinned tabs stay."
faqTitle: "Questions about Chrome memory"
faq:
  - question: "Why does Chrome use so much memory?"
    answer: "Chrome keeps every open tab's page loaded so it's ready when you switch back. Each tab adds to the total, and pages with video, maps or large web apps add the most. Unloading or closing tabs you aren't using brings the number down."
  - question: "Does suspending a tab close it?"
    answer: "No. A suspended tab stays in the tab bar with its title and icon. Chrome unloads the page and loads it again when you click the tab."
  - question: "What's the difference between Memory Saver and Suspend Inactive Tabs?"
    answer: "Memory Saver is built into Chrome and unloads tabs after they've sat unused for a while. Suspend Inactive Tabs is a TabCmdr command that unloads tabs as soon as you run it, in the window you're in, and leaves pinned tabs alone. You can use both."
  - question: "How do I stop a tab from being suspended?"
    answer: "Pin it. Suspend Inactive Tabs skips pinned tabs. For Memory Saver, add the site under Always keep these sites active in Chrome's Settings > Performance."
  - question: "Does it work in Edge and Brave?"
    answer: "Yes. TabCmdr and its Suspend Inactive Tabs command work in Edge and Brave as well as Chrome."
relatedTitle: "Related features"
related:
  - suspend-inactive-tabs
  - close-duplicate-tabs
  - close-tabs-left-right
sitemap:
  priority: 0.7
  changefreq: monthly
---

## See which tabs use the most memory {.way-chrome}

Chrome has its own task manager. Press {{< kbd "Shift" "Esc" >}} on Windows and Linux. On a Mac, open the More menu (⋮) and choose **More tools** > **Task manager**.

It lists every open tab and extension with the memory it uses. Click the **Memory footprint** column to put the biggest at the top. To close one, select it and click **End process**.

## Turn on Memory Saver {.way-chrome}

Memory Saver is built into Chrome. It unloads tabs you haven't used for a while.

1. Open the More menu (⋮) and choose **Settings**.
2. Choose **Performance** on the left.
3. Turn on **Memory Saver**.
4. Pick how soon tabs go inactive. **Moderate** waits longest, **Balanced** is the recommended middle, and **Maximum** frees memory soonest.

A tab that Chrome made inactive reloads when you go back to it. To keep a site running, such as a music player or a web app you check all day, add it under **Always keep these sites active** on the same page.

Source: Google's [Chrome performance settings](https://support.google.com/chrome/answer/12929150) help page, checked in October 2026.

## Free memory right now with TabCmdr {.way-tabcmdr}

Memory Saver works on a timer. TabCmdr's **Suspend Inactive Tabs** command works the moment you run it. TabCmdr is a keyboard launcher that lives in your browser. [Add it from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc) first. It has a 7-day free trial and needs no account.

### Step 1: Open the palette in the crowded window

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux. Do it in the window with the tabs you want to unload, because the command only touches the window you're in.

### Step 2: Type `suspend`

**Suspend Inactive Tabs** shows up under Commands, already highlighted.

{{< screenshot src="chrome-memory-suspend-command.png" alt="TabCmdr palette with suspend typed and the Suspend Inactive Tabs command highlighted under Commands" caption="Typing `suspend` finds the Suspend Inactive Tabs command." >}}

### Step 3: Press Enter

The palette closes and every tab in the window is unloaded, apart from:

- the tab you're on,
- pinned tabs,
- tabs that are already suspended.

A message at the bottom of the page says how many it unloaded, such as **Suspended 7 tabs**, or **No tabs to suspend** if there was nothing to do. Suspended tabs stay in the tab bar with their titles and icons. Click one and it loads again.

Before you run it:

- **Pin anything that should keep running**, such as a tab playing music or a call. Suspend Inactive Tabs skips pinned tabs.
- **Save what you're typing in other tabs.** A suspended tab reloads when you come back to it, and some sites lose text you hadn't saved.

## Close the tabs you don't need {.way-tabcmdr}

Fewer open tabs means less for Chrome to keep in memory. Type `:c close` in the palette to see the commands that close several tabs at once.

{{< screenshot src="chrome-memory-close-commands.png" alt="TabCmdr palette with :c close typed, listing Undo Close Tab, Close Tab, Close Duplicate Tabs, Close Other Tabs, Close Tabs to the Left and Close Tabs to the Right" caption="`:c close` lists every close command." >}}

| Command | What it closes |
|---|---|
| Close Duplicate Tabs | Extra copies of the same page, in every window. The first copy stays open. |
| Close Other Tabs | Every tab in this window except the one you're on and your pinned tabs. |
| Close Tabs to the Right | Tabs to the right of the one you're on, in this window. Pinned tabs stay. |
| Close Tabs to the Left | Tabs to the left of the one you're on, in this window. Pinned tabs stay. |

Closed one you still needed? [Reopen it from the recently closed list]({{< relref "/how-to/reopen-closed-tabs" >}}).
