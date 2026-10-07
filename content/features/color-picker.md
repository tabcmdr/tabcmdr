---
title: "Get the Hex Code of Any Color on a Page | TabCmdr"
linkTitle: "Color picker"
description: "Need the exact color from a web page? Type :cp in TabCmdr, move the loupe over any pixel to see its HEX and RGB values, then click to copy the hex code."
ogTitle: "Grab the hex code of any color on the page"
ogDescription: "A magnifying loupe shows the HEX and RGB value under your cursor. Click to copy the hex code, or press Esc to cancel. No EyeDropper API needed."
weight: 170
date: 2026-10-06
lastmod: 2026-10-06
group: page
icon: i-pipette
token: ":cp"
eyebrow: "Color picker"
heading: "What color is that, exactly?"
headingMuted: "Point at it, copy the hex."
lead: "See the HEX and RGB value of any pixel on the page. Press [kbd:mod][kbd:K], type `:cp`, then click a color to copy its hex code."
howTitle: "Pick a color in three steps"
demo:
  name: shortcut
  layout: split
  token: ":cp"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Start the picker"
    typed: ":cp"
    text: "The page dims and a loupe follows your cursor."
  - title: "Copy or cancel"
    keys: ["Esc"]
    text: "Click copies the hex code. Esc cancels."
showcase:
  title: "How the color picker works"
  lead: "The palette closes and a loupe opens over the page. You read the value, click once, and the hex code is on your clipboard."
  rows:
    - title: "A loupe that shows single pixels"
      text: "The loupe zooms in on an 11 by 11 pixel grid around your cursor and outlines the pixel in the middle. Under it, a label shows that pixel as an uppercase hex code, like #F0013D, and as rgb(240, 1, 61)."
      points:
        - "Near the edge of the screen, the loupe flips to the other side so it stays in view."
        - "The label has a strip of the color itself, so you can check it at a glance."
      mock: mocks/preview
      preview:
        type: color
    - title: "One click copies the hex code"
      text: "Click and the hex code goes to your clipboard, ready to paste into CSS, a design file or a chat. The picker closes and a small note at the bottom of the page shows what you copied, such as Copied #F0013D."
      points:
        - "Need RGB or HSL instead? Type the hex code into the palette, like `#f0013d to rgb`, and press [kbd:↵] to copy the answer."
        - "[kbd:Esc] closes the picker without copying anything."
      mock: mocks/preview
      preview:
        type: answer
        query: "#f0013d to rgb"
        group: "Calculator"
        rows:
          - { expression: "#f0013d to rgb", result: "rgb(240, 1, 61)" }
    - title: "No EyeDropper API needed"
      text: "Many color picker extensions depend on the browser's EyeDropper API. TabCmdr doesn't. When you start it, it takes one screenshot of the visible tab and reads colors from that image, so it works the same in every Chromium browser."
      points:
        - "Because it reads a still image, a playing video or animation holds still while you pick."
        - "It only sees what's on screen. Scroll to the color first, then start the picker."
      mock: mocks/settings
      settings:
        title: "Tools"
        rows:
          - { label: "Color Picker", desc: "Sample any color from the screen - copies hex to clipboard", toggle: "on" }
          - { label: "Ruler", desc: "Pixel rulers, guides and element measurement overlay", toggle: "on" }
detailsTitle: "More about the color picker"
details:
  - icon: i-terminal
    title: "Two ways to start it"
    text: "Type `:cp`, or search for the Pick Color from Screen command. Both open the same loupe."
  - icon: i-palette
    title: "Convert the color"
    text: "Paste the hex code back into the palette with `to rgb` or `to hsl` to get the other formats."
  - icon: i-ruler
    title: "Colors of an element"
    text: "The Ruler's style panel lists an element's text and background colors as hex codes."
  - icon: i-zap
    title: "No extra tab"
    text: "You stay on the page. There's no picker window or separate app to open."
  - icon: i-settings
    title: "Turn it off if you don't need it"
    text: "Color Picker has its own switch under Tools in settings. Off, `:cp` and its Tools entry go away."
  - icon: i-shield
    title: "Stays on your computer"
    text: "The screenshot it reads is used only while the picker is open and isn't saved or sent anywhere."
faqTitle: "Questions about the color picker"
faq:
  - question: "How do I get the hex code of a color on a website?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `:cp` and move the loupe over the color. Click to copy its hex code."
  - question: "Does it show RGB too?"
    answer: "Yes. The label under the loupe shows the hex code and the RGB value. A click copies the hex code."
  - question: "Is the hex code uppercase?"
    answer: "Yes. Codes are copied in uppercase with a leading #, like `#F0013D`."
  - question: "Does it need the EyeDropper API?"
    answer: "No. It reads colors from a screenshot of the visible tab, so it doesn't depend on the EyeDropper API."
  - question: "Can I pick a color outside the browser window?"
    answer: "No. It only reads the visible part of the tab you're on."
  - question: "How do I cancel without copying?"
    answer: "Press Esc. The loupe closes and your clipboard stays as it was."
related:
  - color-conversion
  - ruler
  - screenshots
sitemap:
  priority: 0.8
  changefreq: monthly
---
