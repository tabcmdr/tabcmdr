---
title: "How to Ungroup Tabs in Chrome | TabCmdr"
linkTitle: "Ungroup tabs"
description: "Take one tab out of a tab group, or ungroup a whole group, in Chrome. Or press ⌘K with TabCmdr and run Remove Tab from Group, even for tabs you aren't on."
ogTitle: "Take a tab out of its group from the keyboard"
ogDescription: "See which group each tab is in, and remove the tab you're on, or any other, from its group."
ogImage: ungroup-row-button.png
imageAlt: "TabCmdr palette with figma typed, the Figma tab showing a Launch group badge and the pointer on its Remove from group button"
cardText: "Take a tab out of its group, or ungroup a whole group, and see which group each tab is in."
heading: "How to ungroup tabs in Chrome"
lead: "In Chrome, right-click a tab and choose Remove from group, or right-click the group and choose Ungroup. With TabCmdr, press ⌘K and run Remove Tab from Group."
date: 2026-10-19
lastmod: 2026-10-19
weight: 220
group: tidy
icon: i-ungroup
feature: tab-groups
docs: tab-groups
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Take the tab you're on out of its group"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type group"
    typed: "group"
    text: "Remove Tab from Group shows under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The tab leaves its group and stays open."
faqTitle: "Questions about ungrouping tabs"
faq:
  - question: "How do I ungroup tabs in Chrome?"
    answer: "Right-click the tab group, choose Ungroup and confirm. Every tab in it stays open. To take out one tab only, right-click that tab and choose Remove from group."
  - question: "Do the tabs close when I ungroup them?"
    answer: "No. Google says ungrouping leaves the tabs open on your device."
  - question: "How do I remove a tab from a group without switching to it?"
    answer: "Open TabCmdr, type part of the tab's title and click Remove from group on its row. You see Removed from group and stay on the page you're on."
  - question: "Can TabCmdr create or rename tab groups?"
    answer: "No. TabCmdr shows each tab's group and takes tabs out of groups one at a time. You create, name and color groups from Chrome's tab strip."
  - question: "Can I search tabs by group name?"
    answer: "No. Tab search matches titles and addresses. The group name shows as a badge on the row but isn't searched."
relatedTitle: "Related features"
related:
  - tab-groups
  - tab-actions
  - search-open-tabs
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's way to ungroup tabs {.way-chrome}

- **One tab:** right-click the tab and choose **Remove from group**.
- **A whole group:** right-click the tab group, choose **Ungroup** and confirm. Google notes that ungrouping leaves the tabs open.

Source: Google's [tabs help page](https://support.google.com/chrome/answer/2391819), checked in October 2026.

## Take the tab you're on out of its group {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. **Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux.

### Step 2: Type `group`

**Remove Tab from Group** shows up under Commands.

{{< screenshot src="ungroup-command.png" alt="TabCmdr palette with group typed, showing the Remove Tab from Group command" caption="`group` finds Remove Tab from Group." >}}

### Step 3: Press Enter

The tab you're on leaves its group and stays open, the palette closes, and **Removed from group** shows at the bottom of the page. If the tab isn't in a group, the message says **Tab not in a group** and nothing changes.

## See which group each tab is in {.way-tabcmdr}

Tabs in a group show the group's name on their row, in the group's color. Here, the Figma and Notion tabs are in a group called Launch.

{{< screenshot src="ungroup-group-badges.png" alt="TabCmdr palette listing open tabs, with a blue Launch badge on the Figma and Notion rows" caption="A badge on each row shows the tab's group." >}}

## Remove another tab from its group {.way-tabcmdr}

Type part of the tab's title or address so it's the highlighted row, then click **Remove from group** on that row.

{{< screenshot src="ungroup-row-button.png" alt="TabCmdr palette with figma typed, the Figma tab's Launch badge and the pointer on its Remove from group button" caption="Remove from group takes the tab on that row out of its group." >}}

You see **Removed from group** and stay on the page you're on. On a tab that isn't in a group, the button tells you **Tab not in a group** instead. TabCmdr takes tabs out one at a time; to ungroup a whole group at once, use Chrome's **Ungroup**. [Tab groups in TabCmdr]({{< relref "/features/tab-groups" >}}) has more.
