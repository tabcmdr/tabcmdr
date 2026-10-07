---
title: "Measure Elements on a Web Page in Pixels | TabCmdr"
linkTitle: "Ruler"
description: "Check an element's size and spacing without DevTools. Type :rl in TabCmdr, hover to see width and height, then select one to see the gap to the next."
ogTitle: "Measure any element on the page in pixels"
ogDescription: "Hover for size, click to select, hover another element for the gap. Drag guides out of the rulers and press C to copy a size like 148 × 40."
weight: 180
date: 2026-10-06
lastmod: 2026-10-06
group: page
icon: i-ruler
token: ":rl"
eyebrow: "Ruler"
heading: "How wide is that button?"
headingMuted: "Hover it to see the pixels."
lead: "See any element's size and the gap between two of them, in pixels. Press [kbd:mod][kbd:K], type `:rl` and point at the page to measure it."
howTitle: "Measure an element in three steps"
demo:
  name: shortcut
  layout: split
  token: ":rl"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Start the ruler"
    typed: ":rl"
    text: "Rulers appear along the top and left edges."
  - title: "Copy the size"
    keys: ["C"]
    text: "Click an element to select it, then press C."
showcase:
  title: "How the ruler works"
  lead: "The ruler lays a see-through layer over the page. Everything you point at is measured, and nothing on the page changes."
  rows:
    - title: "Hover for size, click to compare"
      text: "Point at an element to outline it with its tag, like `button.btn`, and its width × height. Click it to select it. Then point at a second element and the ruler draws the gap between them in pixels."
      points:
        - "The selected element keeps its outline and size label while you point at others."
        - "Click the element again or press [kbd:Delete] to deselect it."
      mock: mocks/preview
      preview:
        type: ruler
    - title: "Guides you drag out of the rulers"
      text: "Drag down from the top ruler for a horizontal guide, or right from the left ruler for a vertical one. Guides stay pinned to the page as you scroll. Two guides on the same axis show the distance between them, and a selected element shows its distance to each guide."
      points:
        - "Drag a guide back into the ruler, or double-click it, to remove it."
        - "Press `G` to hide or show all guides."
      mock: mocks/preview
      preview:
        type: keys
        keys: ["G"]
        note: "hides or shows every guide"
    - title: "Margins, styles and free measuring"
      text: "Margin and padding are shaded around the element you point at, and a panel lists its styles, such as font size, line height and colors as hex codes. Press `M` to switch to free measuring and drag a line between any two points."
      points:
        - "`B` hides or shows margin and padding, and `S` hides or shows the style panel."
        - "In free measuring, hold Shift to keep the line straight. `X` clears your lines."
        - "A hint bar at the bottom lists every key while the ruler is open."
      mock: mocks/settings
      settings:
        title: "Tools"
        rows:
          - { label: "Ruler", desc: "Pixel rulers, guides and element measurement overlay", toggle: "on" }
          - { label: "Screenshot", desc: "Capture or crop the current page - copy or download as PNG", toggle: "on" }
detailsTitle: "More about the ruler"
details:
  - icon: i-copy
    title: "Copy the size"
    text: "Press `C` with an element selected to copy its size, like `148 × 40`. You see Copied: 148 × 40."
  - icon: i-camera
    title: "Copy the element as an image"
    text: "Click the camera button next to a selection to copy just that element as a PNG, even when it's taller than the screen."
  - icon: i-arrow-right-line
    title: "Live position on the rulers"
    text: "Both rulers mark where your cursor is, in page pixels, so you can line things up by eye."
  - icon: i-keyboard
    title: "Keys stay with the ruler"
    text: "While it's open, key presses go to the ruler, not the page. Reload with ⌘R or Ctrl+R still works."
  - icon: i-zap
    title: "No DevTools"
    text: "Check sizes and spacing on any page without opening the inspector or knowing its code."
  - icon: i-x
    title: "Esc to leave"
    text: "[kbd:Esc] first cancels a line you're drawing, then leaves free measuring, then closes the ruler."
faqTitle: "Questions about the ruler"
faq:
  - question: "How do I measure an element on a web page?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `:rl` and point at the element. Its width and height in pixels show next to it."
  - question: "How do I measure the space between two elements?"
    answer: "Click the first element to select it, then point at the second. The ruler draws the gap between them in pixels."
  - question: "Can I add guides like in a design app?"
    answer: "Yes. Drag one out of the top or left ruler. Guides stay with the page as you scroll, and you remove one by dragging it back or double-clicking it."
  - question: "How do I copy an element's size?"
    answer: "Select the element and press `C`. A size like `148 × 40` goes to your clipboard."
  - question: "Does it show padding and margin?"
    answer: "Yes, shaded around the element. Press `B` to hide or show them."
  - question: "How do I close the ruler?"
    answer: "Press Esc. If you're in the middle of a free measurement, the first Esc cancels that line."
related:
  - color-picker
  - screenshots
  - developer-tools
sitemap:
  priority: 0.8
  changefreq: monthly
---
