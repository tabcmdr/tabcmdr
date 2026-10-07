---
title: "Do Math and Unit Conversions in Chrome | TabCmdr"
linkTitle: "Calculator"
description: "Need a quick sum or a unit conversion? Type it in the TabCmdr palette on any page and the answer shows at the top of the list. Press Enter to copy it."
ogTitle: "Type the sum, press Enter, paste the answer"
ogDescription: "Percentages, functions, weights, distances, data sizes and px to rem, answered as you type. Press ⌘K, type 20% of 4500 and press Enter to copy."
weight: 200
date: 2026-10-06
lastmod: 2026-10-06
group: answers
icon: i-calculator
eyebrow: "Calculator"
heading: "Need a quick sum or conversion?"
headingMuted: "Type it and copy the answer."
lead: "Do math and unit conversions without a calculator tab. Press [kbd:mod][kbd:K], type `20% of 4500` or `90 kg in lbs`, and press [kbd:↵] to copy."
howTitle: "Get an answer in three steps"
demo:
  name: answers
  layout: split
  query: "20% of 4500"
  examples: ["20% of 4500", "15% on 80", "sqrt(144) + 2^5", "90 kg in lbs", "5 km to miles", "2.5 gb in mb", "24px to rem", "100 c to f"]
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Type the sum"
    typed: "20% of 4500"
    text: "The answer shows at the top as you type."
  - title: "Copy the answer"
    keys: ["↵"]
    text: "It goes to your clipboard and the palette closes."
showcase:
  title: "What the calculator understands"
  lead: "Write it the way you would say it. If TabCmdr can work it out, the answer shows in the Calculator group above everything else."
  rows:
    - title: "Percentages the way you say them"
      text: "`20% of 4500` gives 900. `15% on 80` adds 15% to 80 and gives 92, which is handy for tax or a tip. Plain math works too, with `+ - * /`, powers with `^` and brackets."
      points:
        - "Functions such as `sqrt`, `round`, `sin` and `cos`: `sqrt(144) + 2^5` gives 44."
        - "`(1200 - 300) / 12` gives 75."
        - "Answers are rounded to 12 significant digits, so you don't get long tails of decimals."
      mock: mocks/preview
      preview:
        type: answer
        query: "15% on 80"
        group: "Calculator"
        rows:
          - { expression: "15% on 80", result: "92" }
    - title: "Weights, distances and data sizes"
      text: "Write the amount and unit, then `in`, `to` or `as`, then the unit you want. `90 kg in lbs` gives 198.416035966 lbs and `5 km to miles` gives 3.10685596119 miles. Temperatures work too: `100 c to f` gives 212 °F."
      points:
        - "Weights such as kg, g, lb and oz. Distances such as km, m, cm, mi, ft and in."
        - "Data sizes count in steps of 1,000, so `2.5 gb in mb` gives 2500 mb."
        - "Speeds convert as well, such as `60 mph to kph`."
      mock: mocks/preview
      preview:
        type: answer
        query: "90 kg in lbs"
        group: "Calculator"
        rows:
          - { expression: "90 kg in lbs", result: "198.416035966 lbs" }
    - title: "px, rem and em for CSS"
      text: "`24px to rem` gives 1.5rem and `1.5rem to px` gives 24px, using a 16px root size. If your root size is different, add it at the end: `24px to rem at 10` gives 2.4rem."
      points:
        - "`em` works the same way as `rem`."
        - "Press [kbd:↵] and the value is copied, ready to paste into your stylesheet."
      mock: mocks/palette
      palette:
        query: "24px to rem"
        toast: "Copied 1.5rem"
        groups:
          - label: "Calculator"
            rows:
              - { glyph: i-calculator, title: "1.5rem", sub: "24px to rem", selected: true }
          - label: "Search"
            rows:
              - { host: google.com, title: "Search \"24px to rem\" on Google", sub: "Search with Google", type: i-search }
              - { host: bing.com, title: "Search \"24px to rem\" on Bing", sub: "Search with Bing", type: i-search }
detailsTitle: "More reasons to do your math here"
details:
  - icon: i-zap
    title: "Above your tabs"
    text: "The Calculator group sits at the top of the list, so the answer is the row that's already selected."
  - icon: i-copy
    title: "Enter copies"
    text: "A toast shows what you copied, such as Copied 900, so you know it worked."
  - icon: i-wifi-off
    title: "Works offline"
    text: "Math and conversions are worked out inside the extension. Nothing you type is sent to a server to be solved."
  - icon: i-search
    title: "Search when it isn't math"
    text: "The web search rows stay under the answer, so you can still look it up on Google, Bing or DuckDuckGo."
  - icon: i-clock
    title: "Times and dates too"
    text: "Ask `time in tokyo`, `now + 3 days` or `unix 1713000000` in the same box."
  - icon: i-palette
    title: "Colors and number bases"
    text: "`#f0013d to rgb` and `255 to binary` are answered the same way."
faqTitle: "Questions about the calculator"
faq:
  - question: "How do I use a calculator in Chrome without opening a new tab?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux and type the sum, like `20% of 4500`. The answer shows at the top of the list. Press Enter to copy it."
  - question: "How do I convert kg to lbs in Chrome?"
    answer: "Open the palette and type `90 kg in lbs`. You can put `in`, `to` or `as` between the two units."
  - question: "Can it work out percentages?"
    answer: "Yes. `20% of 4500` gives 900, and `15% on 80` adds 15% to 80 and gives 92."
  - question: "How do I convert px to rem?"
    answer: "Type `24px to rem`. TabCmdr uses a 16px root size unless you give your own, as in `24px to rem at 10`."
  - question: "Is a GB 1,000 MB or 1,024 MB?"
    answer: "1,000. `1500 mb to gb` gives 1.5 gb and `1 tb to gb` gives 1000 gb."
  - question: "Does the calculator need an internet connection?"
    answer: "No. Everything is worked out inside the extension, so it works offline and what you type stays on your computer."
related:
  - time-zones
  - color-conversion
  - developer-tools
sitemap:
  priority: 0.8
  changefreq: monthly
---
