---
title: "How to Check Element Sizes and Spacing in Chrome | TabCmdr"
linkTitle: "Check element sizes and spacing"
description: "See the size, padding, margin and gap of any element on a web page. Use Chrome's inspect mode, or open TabCmdr's ruler with :rl and hover to measure."
ogTitle: "Measure any element on a page by hovering it"
ogDescription: "Open TabCmdr's ruler with :rl and hover an element to see its size, padding and styles. Select one to see the gap to the next."
ogImage: ruler-hover-element.png
imageAlt: "TabCmdr ruler over a button, showing 112 × 48, its padding and a panel of its styles"
cardText: "Hover any element to see its size, padding, margin and styles, and the gap between two elements."
heading: "How to check element sizes and spacing in Chrome"
lead: "Press Ctrl+Shift+C (⌘+Option+C on a Mac) for Chrome's inspect tooltip. For more, press ⌘K with TabCmdr, type :rl and hover any element to see its size and spacing."
date: 2026-10-19
lastmod: 2026-10-19
weight: 390
group: page
icon: i-ruler
feature: ruler
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Measure an element in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux, on the page to measure."
  - title: "Type :rl"
    typed: ":rl"
    text: "The ruler opens straight away."
  - title: "Hover, then press Esc"
    keys: ["Esc"]
    text: "Read the size and spacing, then close the ruler."
faqTitle: "Questions about measuring elements"
faq:
  - question: "How do I see the size of an element on a web page?"
    answer: "In Chrome, press Ctrl+Shift+C (⌘+Option+C on a Mac) and hover the element. The tooltip shows its size in pixels. With TabCmdr, press ⌘K or Ctrl+K, type `:rl` and hover the element to see its width and height on a label."
  - question: "How do I measure the space between two elements?"
    answer: "Open the ruler with `:rl`, click the first element to select it, then hover the second. TabCmdr draws the distance between them in pixels."
  - question: "How do I see an element's padding and margin?"
    answer: "Hover the element with the ruler open. Its padding and margin are shaded around it, with the size of each side in pixels. Press B to turn this box model view on or off."
  - question: "Can I copy the size?"
    answer: "Yes. Select an element and press C to copy its size, such as `304 × 184`. The camera button above a selected element copies a picture of that element instead."
  - question: "Does the ruler change the page?"
    answer: "No. It draws on a layer above the page. Press Esc and the page is exactly as it was."
relatedTitle: "Related features"
related:
  - ruler
  - color-picker
  - screenshots
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's inspect mode {.way-chrome}

Chrome's developer tools can show an element's size when you point at it:

1. Press {{< kbd "Ctrl" "Shift" "C" >}} on Windows, Linux and ChromeOS, or {{< kbd "⌘" "Option" "C" >}} on a Mac. DevTools opens the **Elements** panel in inspect mode.
2. Hover an element on the page.

The tooltip lists the element's dimensions in pixels, its selectors, its background and text colors, its font, and its padding and margin.

Source: Google's [DevTools inspect mode](https://developer.chrome.com/docs/devtools/inspect-mode) page, checked in October 2026.

## Measure with TabCmdr's ruler {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its ruler puts rulers along the edges of the page and measures whatever you point at, including the gap between two elements.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the ruler

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux and type `:rl`. The ruler opens as soon as you finish typing. You can also type `ruler` and press {{< kbd "Enter" >}} on the **Ruler** tool.

{{< screenshot src="ruler-tool-search.png" alt="TabCmdr palette with ruler typed, showing the Ruler tool with the :rl shortcut" caption="The Ruler tool, with its `:rl` shortcut." >}}

Rulers appear along the top and left edges, and a bar at the bottom lists the keys you can press.

### Step 2: Hover an element

Point at anything on the page. TabCmdr outlines it in blue and shows:

- its width and height, such as `112 × 48`, and its tag and class, such as `a.btn.primary`,
- its padding and margin on each side, in pixels,
- a panel with its position, size and styles: font size, weight, font, line height, colors, background and corner radius.

Lines from the cursor to the rulers mark your exact position on the page.

{{< screenshot src="ruler-hover-element.png" alt="TabCmdr ruler hovering a Start free button, labelled 112 × 48 and a.btn.primary, with padding values and a styles panel showing bg #4F46E5 and radius 10px" caption="Hovering the button shows its size, its padding and its styles." >}}

### Step 3: Select one element and hover another

Click an element to select it. It turns red. Then hover a second element and TabCmdr shows the distance between the two in pixels.

{{< screenshot src="ruler-distance-between-elements.png" alt="Two cards measured with the TabCmdr ruler: the selected card outlined in red, the hovered card in blue, and a 20px gap between them" caption="With the first card selected, hovering the second shows the 20px gap between them." >}}

Click the selected element again, or press {{< kbd "Delete" >}}, to deselect it. Press {{< kbd "Esc" >}} to close the ruler.

## Keys you can use with the ruler {.way-tabcmdr}

| Key | What it does |
|---|---|
| {{< kbd "E" >}} | Turn the element selector on or off |
| {{< kbd "M" >}} | Measure between any two points. Drag, or click twice. Hold {{< kbd "Shift" >}} to keep the line horizontal or vertical, and press {{< kbd "X" >}} to clear |
| {{< kbd "B" >}} | Show or hide the padding and margin |
| {{< kbd "S" >}} | Show or hide the styles panel |
| {{< kbd "G" >}} | Show or hide guides |
| {{< kbd "R" >}} | Show or hide the rulers |
| {{< kbd "C" >}} | Copy the size of the selected element, such as `304 × 184` |
| {{< kbd "Delete" >}} | Deselect the element |
| {{< kbd "Esc" >}} | Close the ruler. In measure mode, the first press leaves measure mode |

To line things up, press on the top ruler and drag down to place a horizontal guide, or drag from the left ruler for a vertical one. Drag a guide back into the ruler, or double-click it, to remove it.

A selected element also gets a camera button. Click it to copy a picture of just that element. If a message reads **To capture, open TabCmdr from its toolbar icon or browser shortcut**, open the palette that way and try again.

The [ruler feature page]({{< relref "/features/ruler" >}}) covers the rest.
