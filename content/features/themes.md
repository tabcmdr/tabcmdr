---
title: "Dark Mode Command Palette with 28 Themes | TabCmdr"
linkTitle: "Palette themes"
description: "Bright palette on a dark screen? Pick from 28 themes, like Dracula, Nord or Tokyo Night, or choose System to follow your light or dark mode. One click does it."
ogTitle: "28 themes for your command palette"
ogDescription: "Dracula, Nord, Tokyo Night, Catppuccin, GitHub Light and 23 more. Or pick System and the palette turns dark when your computer does."
weight: 290
date: 2026-10-06
lastmod: 2026-10-06
group: own
icon: i-palette
docs: settings
eyebrow: "Themes"
heading: "A bright palette at night?"
headingMuted: "Pick from 28 themes."
lead: "Choose from 16 dark and 12 light themes, or let System switch with your computer's light or dark mode. Press [kbd:mod][kbd:K] and type `settings`."
demo:
  name: themes
  layout: split
howTitle: "Change the theme in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Find settings"
    typed: "settings"
    text: "TabCmdr Settings shows up under Commands."
  - title: "Open it and click a theme"
    keys: ["↵"]
    text: "Themes sit under Appearance. It saves at once."
showcase:
  title: "Every theme in TabCmdr"
  lead: "The themes are named after the editor and terminal color schemes you may already use. Each one sets the palette's background, text, selected row, keys and caret."
  rows:
    - title: "16 dark themes for late nights"
      text: "Dark, Midnight, Rosé Pine, Catppuccin Mocha, Dracula, Nord, Tokyo Night, Gruvbox Dark, One Dark, Monokai, Solarized Dark, Material Palenight, Kanagawa, Everforest Dark, Night Owl and Ayu Dark. If your code editor uses one of these, the palette can match it."
      points:
        - "Each theme colors the whole palette: search bar, rows, filter tabs and the helper bar."
        - "The highlighted row and the text caret use the theme's own colors, so the palette never looks half themed."
      mock: mocks/preview
      preview:
        type: swatches
        themes: [catppuccin, dracula, nord, tokyoNight, gruvbox, kanagawa]
    - title: "12 light themes, and System"
      text: "Light, Solarized Light, Catppuccin Latte, Rosé Pine Dawn, Gruvbox Light, Nord Light, One Light, Everforest Light, Ayu Light, Tomorrow Light, Material Light and GitHub Light. Then there's **System**, the default: it uses Light when your computer is in light mode and Dark when it's in dark mode."
      points:
        - "System switches the moment your computer does, even while the palette is open. No reload."
        - "Pick a named theme and it stays the same, day or night."
      mock: mocks/preview
      preview:
        type: swatches
        themes: [solarizedLight, catppuccinLatte, roseDawn, nordLight, oneLight, githubLight]
    - title: "See it before you close settings"
      text: "Run **TabCmdr Settings** from the palette, or click the gear in the palette's bottom bar, and go to Appearance. Click a theme and the live preview on the same page shows the palette in it straight away. A Settings saved note confirms it, and tabs you already have open pick up the new colors."
      points:
        - "There's no Save button. Every click is saved."
        - "The name of the current theme sits next to the Theme label, so you always know which one is on."
      mock: mocks/palette
      palette:
        query: "settings"
        highlight: ["settings"]
        groups:
          - label: "Commands"
            rows:
              - { glyph: i-settings, title: "TabCmdr Settings", sub: "Page command", selected: true }
detailsTitle: "More about how themes work"
details:
  - icon: i-sliders
    title: "Show only dark or light"
    text: "Buttons above the theme grid filter it to All, Dark or Light. System stays in the list under every filter."
  - icon: i-layout
    title: "Works in every layout"
    text: "The theme applies the same way to the full palette, Spotlight and the slim Notch bar at the top."
  - icon: i-sync
    title: "Follows you to other computers"
    text: "Your theme is saved in the browser's sync storage, so it comes with you wherever you're signed in with sync on."
  - icon: i-monitor
    title: "Same colors on browser pages"
    text: "On pages where extensions can't run, like the new tab page, TabCmdr opens in its own window. It uses your theme there too."
  - icon: i-moon
    title: "Settings page has its own switch"
    text: "The sun and moon buttons at the top of the settings page only change how the settings page looks. They don't touch the palette's theme."
  - icon: i-undo
    title: "Back to the start"
    text: "Reset to Defaults, under About in settings, sets the theme back to System. Your license key stays."
faqTitle: "Questions about TabCmdr themes"
faq:
  - question: "How do I change the TabCmdr theme?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `settings` and press Enter on TabCmdr Settings. Open Appearance and click a theme. It's saved right away."
  - question: "Does TabCmdr have a dark mode?"
    answer: "Yes. There are 16 dark themes, from plain Dark to Dracula, Nord and Tokyo Night. The default, System, is dark whenever your computer is in dark mode."
  - question: "Can the palette follow my system's light and dark mode?"
    answer: "Yes. Pick System under Appearance. The palette uses the Light theme in light mode and the Dark theme in dark mode, and switches as soon as your computer does."
  - question: "Is there a Dracula, Nord or Catppuccin theme?"
    answer: "Yes, all three. You also get Tokyo Night, Gruvbox, One Dark, Monokai, Solarized, Rosé Pine, Kanagawa, Everforest, Night Owl, Ayu, Material, Tomorrow and GitHub Light, many in both a dark and a light version."
  - question: "Can I make my own theme?"
    answer: "No. TabCmdr has 28 ready-made themes and no color editor. To change how big or dense the palette is, use Palette Size and Compact Mode under Layout & Size."
  - question: "Does the theme change the websites I visit?"
    answer: "No. It only colors the TabCmdr palette. The page behind it looks the same as before."
related:
  - layouts
  - custom-shortcut
  - private-by-design
sitemap:
  priority: 0.8
  changefreq: monthly
---
