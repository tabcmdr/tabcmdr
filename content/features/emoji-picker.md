---
title: "Find and Copy Any Emoji from Your Browser | TabCmdr"
linkTitle: "Emoji picker"
description: "Can't find the emoji you need? Type :emoji and a word like rocket, pick a skin tone and press Enter to copy it. Search 1,900+ emoji from any page in Chrome."
ogTitle: "Search 1,900+ emoji and copy one with Enter"
ogDescription: "Type :emoji on any page, search by name or keyword, and press Enter to copy the emoji. Shift+Enter copies its :name: for Slack or GitHub."
weight: 250
date: 2026-10-06
lastmod: 2026-10-06
group: tools
icon: i-smile
token: ":emoji"
eyebrow: "Emoji picker"
heading: "Can't find the emoji you want?"
headingMuted: "Search it by name and copy it."
lead: "Search 1,900+ emoji by name or keyword and copy one to your clipboard. Press [kbd:mod][kbd:K], type `:emoji` and then a word like heart."
demo:
  name: shortcut
  layout: split
  token: ":emoji"
howTitle: "Copy an emoji in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Open Emoji and search"
    typed: ":emoji"
    text: "Or the short `:em`. Then type a word like rocket."
  - title: "Copy it"
    keys: ["↵"]
    text: "Shift+Enter copies its :name: instead."
showcase:
  title: "How the emoji picker works"
  lead: "The picker opens inside the palette, over the page you're on. Search narrows the grid as you type, and a copy closes the palette so you can paste straight away."
  rows:
    - title: "Search by name or by what it means"
      text: "Every emoji is matched on its full name, its short names and a list of extra keywords. So `party` finds 🥳 and 🎉, and also 🍾, 🎈 and 🎊. Matches that start with your word come first."
      points:
        - "`thumbs` finds 👍 and 👎. `coffee` finds ☕."
        - "With no search, the grid is grouped by category, from Smileys & Emotion to Flags, with a count on each group."
        - "Use the arrow keys to move around the grid. Up and down jump a whole row."
      mock: mocks/preview
      preview:
        type: emoji
        emoji: ["🥳", "🎉", "👯", "🍕", "🎂", "🍾", "🍺", "🍻", "🥂", "🎪", "🎈", "🎊"]
    - title: "Six skin tones, one click"
      text: "Six swatches sit next to the preview at the top: Default, Light, Medium-Light, Medium, Medium-Dark and Dark. Click one and every hand and person in the grid changes to that tone. TabCmdr remembers your pick on that site the next time you open Emoji."
      points:
        - "323 emoji have skin tone versions, such as 👋, 👍 and 👏."
        - "Emoji without skin tones, like 🎉 or ☕, stay as they are."
      mock: mocks/preview
      preview:
        type: emoji
        emoji: ["👋🏽", "🤚🏽", "✋🏽", "👌🏽", "👍🏽", "👎🏽", "👏🏽", "🙌🏽", "🙏🏽", "💪🏽", "✌🏽", "🤞🏽"]
    - title: "Copy the emoji or its :name:"
      text: "Press [kbd:↵] or click an emoji to copy it, and you'll see a toast like Copied 🎉. Press Shift+Enter, or click the `:name:` button, to copy its short code instead, such as `:tada:`. Paste that into apps that turn codes into emoji, like Slack or GitHub."
      points:
        - "The preview at the top shows the emoji under your cursor and its name."
        - "Emoji you copy show up in Recently Used at the top of the grid."
      mock: mocks/preview
      preview:
        type: keys
        keys: ["Shift", "↵"]
        note: "Copied :tada:"
detailsTitle: "Small things that make it quick"
details:
  - icon: i-zap
    title: "Opens on any page"
    text: "No new tab, no system picker. The grid opens in the palette over the page you're reading."
  - icon: i-clock
    title: "Recently used first"
    text: "Before you search, the emoji you copied last sit at the top of the grid, up to 32 of them."
  - icon: i-copy
    title: "Closes after copying"
    text: "Once the emoji is on your clipboard, the palette closes so you can paste it right away."
  - icon: i-keyboard
    title: "Mouse or keyboard"
    text: "Hover to preview and click to copy, or move with the arrow keys and press [kbd:↵]."
  - icon: i-undo
    title: "Esc goes back"
    text: "Press [kbd:Esc] in the picker to go back to the Tools list instead of closing the palette."
  - icon: i-sliders
    title: "Turn it off if you like"
    text: "Switch off Emoji under Tools in settings and it's hidden from the palette."
faqTitle: "Questions about the emoji picker"
faq:
  - question: "How do I search and copy an emoji in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `:emoji`, then type a word like heart. Press Enter to copy the highlighted emoji and paste it anywhere."
  - question: "Is there a shorter way to open it?"
    answer: "Yes. `:em` opens the same emoji picker as `:emoji`."
  - question: "How do I change the skin tone?"
    answer: "Click one of the six swatches next to the preview at the top of the picker. The grid redraws in that tone, and TabCmdr remembers it for the site you're on."
  - question: "How do I copy the :shortcode: instead of the emoji?"
    answer: "Press Shift+Enter, or click the `:name:` button. TabCmdr copies the short code, such as `:tada:` for 🎉 or `:+1:` for 👍."
  - question: "How many emoji can I search?"
    answer: "More than 1,900, in every category from Smileys & Emotion to Flags. Search matches names, short names and extra keywords, so `party` finds more than just 🎉."
  - question: "Does it work in Edge, Brave and Arc?"
    answer: "Yes. TabCmdr runs in Chrome, Edge, Brave, Arc, Vivaldi, Opera and other Chromium-based browsers, and installs from the Chrome Web Store."
related:
  - todo-list
  - developer-tools
  - qr-code
sitemap:
  priority: 0.8
  changefreq: monthly
---
