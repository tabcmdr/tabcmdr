---
title: "Take a Screenshot of a Web Page in Chrome | TabCmdr"
linkTitle: "Screenshots"
description: "Screenshot a web page without another app. Type :ss in TabCmdr to capture the visible page, an area you drag or the full page, then copy it or save a PNG."
ogTitle: "Screenshot the page, an area or the whole thing"
ogDescription: "Six screenshot commands in your palette. Capture what's on screen, a box you drag or the full scrolling page, and copy it or save it as a PNG."
weight: 160
date: 2026-10-06
lastmod: 2026-10-06
group: page
icon: i-camera
token: ":ss"
docs: page-commands
eyebrow: "Screenshots"
heading: "Need a screenshot of this page?"
headingMuted: "Copy it or save a PNG."
lead: "Capture the visible page, an area you drag or the whole page. Press [kbd:mod][kbd:K], type `:ss`, pick copy or PNG and press [kbd:↵]."
howTitle: "Take a screenshot in three steps"
demo:
  name: shortcut
  layout: split
  token: ":ss"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Open the screenshot tool"
    typed: ":ss"
    text: "Six commands: three copy, three save a PNG."
  - title: "Pick one"
    keys: ["↵"]
    text: "Area commands wait for you to drag a box."
showcase:
  title: "How screenshots work"
  lead: "The palette closes first, so it never ends up in the picture. Then the browser captures the tab and TabCmdr copies or saves the image."
  rows:
    - title: "Three sizes, two ways to keep it"
      text: "Screenshot captures what you can see right now. Screenshot Area captures a box you drag. Full Page Screenshot captures the whole page from top to bottom. Each one comes in a Copy to Clipboard and a Download as PNG version."
      points:
        - "Copy puts a PNG on your clipboard, ready to paste into a chat, a doc or an email."
        - "Download saves a file named with the date and time, like `screenshot-2026-10-06T14-32-08.png`."
      mock: mocks/palette
      palette:
        query: ":ss"
        filter: tools
        groups:
          - label: "Screenshot"
            rows:
              - { glyph: i-camera, title: "Screenshot - Copy to Clipboard", sub: "Capture the visible tab and copy as image", selected: true }
              - { glyph: i-crop, title: "Screenshot Area - Download as PNG", sub: "Draw a selection, then save the cropped area" }
              - { glyph: i-monitor, title: "Full Page Screenshot - Copy to Clipboard", sub: "Scroll and stitch the entire page, then copy as image" }
    - title: "Drag a box around the part you need"
      text: "Area commands dim the page and turn the cursor into a crosshair. Drag over the part you want, and a label shows the size of the box in pixels as you go. Let go and TabCmdr crops the screenshot to that box."
      points:
        - "Press [kbd:Esc] before you let go to cancel."
        - "A drag smaller than 5 pixels counts as a cancel, so a stray click does nothing."
      mock: mocks/palette
      palette:
        query: ":ss area"
        highlight: ["area"]
        filter: tools
        toast: "Area copied"
        groups:
          - label: "Screenshot"
            rows:
              - { glyph: i-crop, title: "Screenshot Area - Copy to Clipboard", sub: "Draw a selection, then copy the cropped area", selected: true }
              - { glyph: i-crop, title: "Screenshot Area - Download as PNG", sub: "Draw a selection, then save the cropped area" }
    - title: "Full page, scrolled and stitched"
      text: "Full Page Screenshot scrolls down the page one screen at a time, captures each part and joins them into one tall image. When it's done, the page goes back to where you were. Very long pages are cut off at 16,000 pixels."
      points:
        - "A page that fits on one screen is captured in one shot."
        - "You see Full page screenshot saved or Full page screenshot copied when it's ready."
      mock: mocks/preview
      preview:
        type: palette
        query: ":c full page"
        highlight: ["full page"]
        group: "Commands"
        toast: "Full page screenshot saved"
        rows:
          - { glyph: i-monitor, title: "Full Page Screenshot - Download as PNG", sub: "Page command", selected: true }
          - { glyph: i-monitor, title: "Full Page Screenshot - Copy to Clipboard", sub: "Page command" }
detailsTitle: "More about screenshots"
details:
  - icon: i-zap
    title: "No screenshot app"
    text: "Nothing to install or switch to. The capture runs from the page you're on."
  - icon: i-terminal
    title: "Also in the command list"
    text: "All six screenshot commands show up when you type `:c screenshot` or just `screenshot`."
  - icon: i-check
    title: "A note for every result"
    text: "You see Screenshot copied, Screenshot saved, Area copied or Area screenshot saved, so you know it worked."
  - icon: i-download
    title: "Copy blocked? Save instead"
    text: "If the browser won't allow a copy, you see Copy failed - try download. Run the Download as PNG version."
  - icon: i-ruler
    title: "Capture one element"
    text: "In the Ruler, select an element and click its camera button to copy just that element as an image."
  - icon: i-shield
    title: "Never uploaded"
    text: "Images are made by the browser's own tab capture and stay on your computer. TabCmdr doesn't send them anywhere."
faqTitle: "Questions about screenshots"
faq:
  - question: "How do I take a screenshot of a web page in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `:ss`, pick one of the six screenshot commands and press Enter."
  - question: "How do I screenshot only part of a page?"
    answer: "Run Screenshot Area - Copy to Clipboard or Screenshot Area - Download as PNG, then drag a box over the part you want. Press Esc to cancel."
  - question: "Can I take a full page screenshot?"
    answer: "Yes. Full Page Screenshot scrolls the page, captures each screen and joins them into one PNG, up to 16,000 pixels tall."
  - question: "Where do the PNG files go?"
    answer: "They download like any other file, to the folder your browser saves downloads in. Names start with `screenshot-` and include the date and time."
  - question: "Can I paste a screenshot straight into Slack or a doc?"
    answer: "Yes. The Copy to Clipboard versions put a PNG on your clipboard, so you can paste it right away."
  - question: "Are my screenshots uploaded anywhere?"
    answer: "No. The browser captures the tab and TabCmdr copies or saves the image on your computer. Nothing is sent to a server."
related:
  - ruler
  - color-picker
  - page-commands
sitemap:
  priority: 0.8
  changefreq: monthly
---
