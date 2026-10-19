---
title: "How to Resize and Move the Command Palette | TabCmdr"
linkTitle: "Resize and move the palette"
description: "Make TabCmdr's palette smaller, move it to the top or a corner, show fewer rows, or open it as a bare search box with the Spotlight and Notch styles."
ogTitle: "Make the palette fit your screen"
ogDescription: "Five sizes, nine positions, compact rows and two minimal styles. Set them on TabCmdr's Layout & Size and Appearance pages."
ogImage: palette-spotlight-empty.png
imageAlt: "TabCmdr palette in Spotlight style, showing only the search box and the hint bar"
cardText: "Pick a smaller size, move the palette to the top or a corner, or open it as just a search box."
heading: "How to resize and move the command palette"
lead: "In TabCmdr's settings, set Position and Palette Size under Layout & Size, or pick Spotlight or Notch under Appearance so the palette starts as a search box."
date: 2026-10-19
lastmod: 2026-10-19
weight: 730
group: own
icon: i-layout
feature: layouts
docs: settings
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Change the palette's size in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux."
  - title: "Find settings"
    typed: "settings"
    text: "TabCmdr Settings shows up under Commands."
  - title: "Open it and pick a size"
    keys: ["↵"]
    text: "Layout & Size has Position, Palette Size and more."
faqTitle: "Questions about the palette's size and position"
faq:
  - question: "What sizes can the palette be?"
    answer: "Extra Small, Small, Default, Large and Extra Large. Palette Size changes the width, height and font together."
  - question: "Where can the palette open?"
    answer: "Center, which is the default, or Top Center, Top Left, Top Right, Center Left, Center Right, Bottom Center, Bottom Left or Bottom Right."
  - question: "How do I see fewer results at once?"
    answer: "Set Visible Items on the Layout & Size page to a lower number, from 4 up to 15. The default is 8. Compact Mode also makes each row shorter and hides the address under each title."
  - question: "What's the difference between Spotlight and Notch?"
    answer: "Spotlight opens in the usual place with only the search box and the hint bar, and results appear as you type. Notch is a small pill at the top center of the page, and the results drop down from it."
  - question: "Can I hide the filter bar or the hint bar?"
    answer: "Yes. On the Layout & Size page, turn off Show Filter Tabs to hide the All, Tabs, Bookmarks bar, or Show Helper to hide the hint bar at the bottom. Tab Bar Position moves the filter bar to the bottom."
relatedTitle: "Related features"
related:
  - layouts
  - themes
  - custom-shortcut
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Change the size and position {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Out of the box, its palette opens in the middle of the page at the default size. You can make it smaller, move it and fit fewer rows.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open TabCmdr Settings

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, type `settings` and press {{< kbd "Enter" >}} on **TabCmdr Settings**.

### Step 2: Choose Layout & Size

Pick **Layout & Size** in the sidebar. The first section, **Placement & Size**, has four settings:

- **Position:** where the palette opens. Center is the default, and there are eight more spots, from Top Center to Bottom Right.
- **Palette Size:** Extra Small, Small, Default, Large or Extra Large. It scales the width, height and font together.
- **Visible Items:** roughly how many results show before the list scrolls, from 4 to 15. The default is 8.
- **Compact Mode:** shorter rows, with the address under each title hidden.

{{< screenshot src="palette-layout-size-settings.png" alt="TabCmdr settings on Layout & Size, with Position set to Top Center, Palette Size set to Small and Compact Mode on" caption="Top Center, Small and Compact Mode turned on." >}}

### Step 3: Open the palette to check it

Each change saves as you make it. Open the palette on any page to see the new size and spot.

{{< screenshot src="palette-small-compact-top.png" alt="A small, compact TabCmdr palette at the top center of the page, listing open tabs without addresses" caption="With those settings the palette opens small, near the top, and lists tabs without their addresses." >}}

## Open it as just a search box {.way-tabcmdr}

On the **Appearance** page, **Palette Style** has a **Mode** setting with three choices:

- **Default:** the full palette opens straight away.
- **Spotlight:** only the search box and hint bar, until you start typing.
- **Notch:** a small pill at the top center of the page. Results drop down from it as you type.

{{< screenshot src="palette-mode-setting.png" alt="TabCmdr settings on Appearance, Palette Style section, with the Default, Spotlight and Notch modes" caption="Pick Default, Spotlight or Notch under Palette Style." >}}

{{< screenshot src="palette-spotlight-empty.png" alt="TabCmdr palette in Spotlight style before typing, showing only the search box and the hint bar" caption="Spotlight before you type anything." >}}

{{< screenshot src="palette-notch-results.png" alt="TabCmdr in Notch style at the top of the page, with results for pull dropping down below the search pill" caption="Notch with results for `pull`." >}}

## Hide parts of the palette {.way-tabcmdr}

Further down **Layout & Size**, the **Palette Chrome** section controls what the palette shows around the results:

- **Show Filter Tabs:** the All, Tabs, Bookmarks, History bar. Turn it off to hide the bar.
- **Tab Bar Position:** puts that bar at the top or the bottom of the palette.
- **Show Helper:** the hint bar at the bottom, such as Navigate, Open and Close.
