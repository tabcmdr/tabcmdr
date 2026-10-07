---
title: "Convert HEX to RGB or HSL in Chrome | TabCmdr"
linkTitle: "Color conversion"
description: "Got a HEX code and need RGB or HSL? Type #f0013d to rgb in the TabCmdr palette and press Enter to copy it. Number bases like 255 to binary work the same way."
ogTitle: "HEX, RGB, HSL and binary, converted as you type"
ogDescription: "Type #f0013d to hsl or 0xff to decimal on any page. The answer shows at the top of the palette in CSS-ready form, and Enter copies it."
weight: 220
date: 2026-10-06
lastmod: 2026-10-06
group: answers
icon: i-palette
eyebrow: "Color conversion"
heading: "Need that HEX code as RGB?"
headingMuted: "Convert it as you type."
lead: "Convert colors between HEX, RGB and HSL, or numbers between decimal, hex and binary. Press [kbd:mod][kbd:K], type `#f0013d to rgb` and press [kbd:↵]."
howTitle: "Convert a value in three steps"
demo:
  name: answers
  layout: split
  query: "#f0013d to rgb"
  examples: ["#f0013d to rgb", "#f0013d to hsl", "rgb(240, 1, 61) to hex", "#0af to rgb", "255 to binary", "255 to hex", "64 to octal", "0xff to decimal"]
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Type what you have"
    typed: "#f0013d to rgb"
    text: "The value, then to and the format you want."
  - title: "Copy the result"
    keys: ["↵"]
    text: "It's on your clipboard, ready to paste."
showcase:
  title: "What you can convert"
  lead: "Write the value, then `to` and the format you want. The result is written the way CSS expects it."
  rows:
    - title: "HEX, RGB and HSL"
      text: "`#f0013d to rgb` gives rgb(240, 1, 61) and `#f0013d to hsl` gives hsl(344.94, 99.17%, 47.25%). It works the other way too: `rgb(240, 1, 61) to hex` gives #f0013d. Short codes like `#0af` are expanded for you."
      points:
        - "Color names work: `tomato to hex` gives #ff6347."
        - "Newer CSS formats are there too, such as `oklch`, `lab`, `lch`, `hwb` and `p3`."
        - "A color with transparency becomes 8-digit HEX: `rgba(240, 1, 61, 0.5) to hex` gives #f0013d80."
      mock: mocks/preview
      preview:
        type: answer
        query: "#f0013d to hsl"
        group: "Calculator"
        rows:
          - { expression: "#f0013d to hsl", result: "hsl(344.94, 99.17%, 47.25%)" }
    - title: "Decimal, hex, octal and binary"
      text: "`255 to binary` gives 0b11111111, `255 to hex` gives 0xff and `64 to octal` gives 0o100. To go back to decimal, write the number with its prefix: `0xff to decimal` gives 255."
      points:
        - "The `0x`, `0b` and `0o` prefixes are read for you."
        - "Negative numbers keep their sign: `-255 to hex` gives -0xff."
        - "Very large numbers keep every digit, so 64-bit values convert exactly."
      mock: mocks/palette
      palette:
        query: "255 to binary"
        toast: "Copied 0b11111111"
        groups:
          - label: "Calculator"
            rows:
              - { glyph: i-calculator, title: "0b11111111", sub: "255 to binary", selected: true }
          - label: "Search"
            rows:
              - { host: google.com, title: "Search \"255 to binary\" on Google", sub: "Search with Google", type: i-search }
    - title: "Take a color from the page first"
      text: "Don't have the code yet? Type `:cp` to open the Color Picker, click anywhere on the page and the HEX code is copied. Then open the palette again and convert it to RGB or HSL."
      points:
        - "The picker shows the HEX and RGB value under your cursor as you move."
        - "Press [kbd:Esc] to close it without picking."
      mock: mocks/preview
      preview:
        type: color
detailsTitle: "More reasons to convert colors here"
details:
  - icon: i-copy
    title: "Enter copies the value"
    text: "A toast shows what you copied, such as Copied rgb(240, 1, 61)."
  - icon: i-code
    title: "Ready to paste into CSS"
    text: "Results come out as `rgb(...)`, `hsl(...)` or `#hex`, so they go straight into a stylesheet."
  - icon: i-zap
    title: "At the top of the list"
    text: "The answer shows above your tabs, so it's the row that's already selected."
  - icon: i-wifi-off
    title: "Works offline"
    text: "Conversions run inside the extension. Nothing you type is sent anywhere."
  - icon: i-ruler
    title: "px to rem as well"
    text: "`24px to rem` gives 1.5rem, for the other numbers you copy between design and code."
  - icon: i-calculator
    title: "Math in the same box"
    text: "Sums, percentages and unit conversions are answered the same way."
faqTitle: "Questions about color conversion"
faq:
  - question: "How do I convert HEX to RGB in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux and type the code with `to rgb`, like `#f0013d to rgb`. The result shows at the top. Press Enter to copy it."
  - question: "How do I convert RGB to HEX?"
    answer: "Type the color the way CSS writes it, then `to hex`: `rgb(240, 1, 61) to hex` gives #f0013d."
  - question: "Can it convert to HSL or OKLCH?"
    answer: "Yes. Use `to hsl` or `to oklch`. `lab`, `lch`, `hwb`, `p3` and `rgba` work too."
  - question: "How do I convert a number to binary or hex?"
    answer: "Type `255 to binary`, `255 to hex` or `255 to octal`. You get 0b11111111, 0xff or 0o377."
  - question: "How do I convert hex to decimal?"
    answer: "Type `0xff to decimal`. A hex number with a letter in it also works without the prefix, like `ff to decimal`."
  - question: "Does it work offline?"
    answer: "Yes. Colors and numbers are converted inside the extension, with no network request."
related:
  - color-picker
  - calculator
  - developer-tools
sitemap:
  priority: 0.8
  changefreq: monthly
---
