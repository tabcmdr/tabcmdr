---
title: "Smaller Command Palette: Spotlight and Notch | TabCmdr"
linkTitle: "Layouts and size"
description: "Palette too big for your screen? Switch to Spotlight, a search bar that shows results as you type, or Notch, a slim bar at the top. Then set its size and spot."
ogTitle: "Full palette, Spotlight or Notch"
ogDescription: "Open TabCmdr as the full list, as a search bar that fills in as you type, or as a small pill at the top of the window. Then pick its size and position."
weight: 300
date: 2026-10-06
lastmod: 2026-10-06
group: own
icon: i-layout
docs: settings
eyebrow: "Layouts"
heading: "Palette covering the page?"
headingMuted: "Switch to Spotlight or Notch."
lead: "Open TabCmdr as the full list, as a search bar, or as a slim pill at the top. Then pick its size, its spot on screen and which bars show."
demo:
  name: themes
  layout: split
howTitle: "Change the layout in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Find settings"
    typed: "settings"
    text: "TabCmdr Settings shows up under Commands."
  - title: "Open it and pick a Mode"
    keys: ["↵"]
    text: "Mode sits under Appearance, then Palette Style."
showcase:
  title: "How each layout behaves"
  lead: "The three layouts search the same things and use the same keys. They differ in how much shows before you type and how much of the page they cover."
  rows:
    - title: "Default, Spotlight or Notch"
      text: "**Default** is the full palette: search bar, filter tabs, the list and a helper bar, all at once. **Spotlight** opens as a search bar alone, and the filter tabs and results appear once you type. **Notch** is a small pill that hangs from the top of the window, and results drop down below it as you type."
      points:
        - "Default and Spotlight dim and blur the page behind them. Notch leaves the page as it is."
        - "In settings they read: Full palette opens immediately, Clean input, results appear on type, and Compact pill at top of screen."
      mock: mocks/preview
      preview:
        type: layouts
    - title: "Set the size and the spot on screen"
      text: "Under Layout & Size you choose where the palette opens: Center, or one of eight spots along the top, sides and bottom. Palette Size scales its width, height and text from Extra Small to Extra Large. Visible Items sets roughly how many rows show before the list scrolls, from 4 to 15."
      points:
        - "Compact Mode makes rows shorter and hides the address under each title."
        - "Notch always sits at the top center and is always compact. Palette Size and Visible Items still apply to it."
      mock: mocks/settings
      settings:
        title: "Placement & Size"
        selected: "Small"
        rows:
          - { label: "Position", desc: "Where on screen the palette is anchored when it opens." }
          - { label: "Compact Mode", desc: "Reduces item height and hides URL subtitles for a denser list.", toggle: "on" }
          - { label: "Palette Size", desc: "Scale the palette width, height and font to fit your display.", options: ["Extra Small", "Small", "Default", "Large", "Extra Large"] }
    - title: "Hide the bars you don't use"
      text: "Palette Chrome turns the bars around the list on or off. Show Filter Tabs controls the All, Tabs, Bookmarks and History row, and Tab Bar Position moves it to the top or bottom. Show Helper controls the hint bar along the bottom with ↑↓ navigate, ↵ open and Esc close."
      points:
        - "With the filter tabs hidden, the list sits right under the search bar."
        - "Notch has no helper bar. Its filter tabs show above the results once you type."
      mock: mocks/settings
      settings:
        title: "Palette Chrome"
        selected: "Bottom"
        rows:
          - { label: "Show Filter Tabs", desc: "Show the Tabs / Bookmarks / History category bar inside the palette.", toggle: "on" }
          - { label: "Show Helper", desc: "Show the keyboard hint bar at the bottom of the palette (↑↓ navigate, ↵ open, etc.).", toggle: "off" }
          - { label: "Tab Bar Position", desc: "Move the category bar to the top or bottom of the palette.", options: ["Top", "Bottom"] }
detailsTitle: "More layout settings"
details:
  - icon: i-zap
    title: "Saved as you click"
    text: "There's no Save button. Each change shows a Settings saved note, and tabs you already have open use it the next time you open the palette."
  - icon: i-maximize
    title: "Live preview"
    text: "A preview on the settings page shows the palette with your choices, labeled with the theme, position and mode in use."
  - icon: i-monitor
    title: "On browser pages"
    text: "Extensions can't run on pages like the new tab page or chrome:// pages. There, Restricted Pages Mode opens TabCmdr in a New Window or a New Tab."
  - icon: i-palette
    title: "Any theme, any layout"
    text: "All 28 themes work in Default, Spotlight and Notch, so you can mix a slim layout with the colors you like."
  - icon: i-keyboard
    title: "Same keys everywhere"
    text: "Arrow keys move, [kbd:↵] opens and [kbd:Esc] closes in every layout. Your shortcut opens and closes them all."
  - icon: i-undo
    title: "Back to the start"
    text: "Reset to Defaults, under About, brings back Default mode, Center, Default size and 8 visible items."
faqTitle: "Questions about palette layouts"
faq:
  - question: "How do I make the TabCmdr palette smaller?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `settings` and press Enter on TabCmdr Settings. Under Layout & Size, set Palette Size to Small or Extra Small, or turn on Compact Mode."
  - question: "What is Spotlight mode?"
    answer: "Spotlight opens TabCmdr as a search bar only. The filter tabs and the list of results appear once you start typing, and go away again when you clear the search."
  - question: "What is Notch mode?"
    answer: "Notch is a small pill at the top center of the window, a bit like a phone's notch. Results drop down under it as you type, and the page behind it isn't dimmed."
  - question: "Can I move the palette to the top or the side of the screen?"
    answer: "Yes. Position, under Layout & Size, has nine choices: Center, Top Center, Top Left, Top Right, Center Left, Center Right, Bottom Center, Bottom Left and Bottom Right. Notch always stays at the top."
  - question: "How do I show more results at once?"
    answer: "Change Visible Items under Layout & Size. It goes from 4 to 15 rows, and the default is 8. Compact Mode fits more rows in the same space."
  - question: "Can I hide the filter tabs or the shortcut hints?"
    answer: "Yes. Turn off Show Filter Tabs or Show Helper under Palette Chrome in Layout & Size. You can also move the filter tabs to the bottom with Tab Bar Position."
related:
  - themes
  - custom-shortcut
  - search-open-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
