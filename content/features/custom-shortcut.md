---
title: "Cmd+K Taken? Set Your Own Palette Shortcut | TabCmdr"
linkTitle: "Custom shortcut"
description: "Another app already uses Cmd+K or Ctrl+K? Click Change in TabCmdr settings and press new keys for Toggle Command Palette on the browser's shortcuts page."
ogTitle: "Open TabCmdr with the keys you want"
ogDescription: "TabCmdr opens with ⌘K or Ctrl+K. If that clashes with something else, set any other shortcut on your browser's shortcuts page in a few seconds."
weight: 310
date: 2026-10-06
lastmod: 2026-10-06
group: own
icon: i-keyboard
docs: keyboard-shortcuts
eyebrow: "Custom shortcut"
heading: "Another app already uses ⌘K?"
headingMuted: "Open TabCmdr with your own keys."
lead: "TabCmdr opens with [kbd:mod][kbd:K] out of the box. Set any other shortcut on the browser's shortcuts page, or click the toolbar icon."
demo:
  name: hotkey
  layout: split
howTitle: "Change the shortcut in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Or click the TabCmdr icon in the toolbar."
  - title: "Open settings"
    typed: "settings"
    text: "Run TabCmdr Settings, then click Change."
  - title: "Press your new keys"
    keys: ["mod", "P"]
    text: "In the box next to Toggle Command Palette."
showcase:
  title: "How the TabCmdr shortcut works"
  lead: "The shortcut is set in your browser, not on each website, so it works on every tab. TabCmdr shows it in settings and takes you to the right page to change it."
  rows:
    - title: "Change opens the browser's shortcuts page"
      text: "The first card in settings, **Your keyboard shortcut**, shows the keys that open TabCmdr right now. Click Change and chrome://extensions/shortcuts opens in a new tab. Find TabCmdr, click the pencil next to Toggle Command Palette and press the keys you want."
      points:
        - "Come back to the settings tab and the card already shows your new keys."
        - "If no shortcut is set, the card warns you and the button reads Set shortcut."
      mock: mocks/settings
      settings:
        title: "Keyboard Shortcut"
        rows:
          - { label: "Your keyboard shortcut", desc: "Press it on any page to open the TabCmdr palette." }
          - { label: "What happens when you press it", desc: "The TabCmdr palette opens on top of the page you're on - start typing to jump to any tab, bookmark, history entry or tool. Esc closes it again." }
    - title: "Prefer VS Code style?"
      text: "Code editors open their command palette with ⌘P on a Mac and Ctrl+P on Windows and Linux. Under the shortcut card, settings offers that combo with a **Set it →** button that takes you to the same shortcuts page."
      points:
        - "The tip only shows while your shortcut is something else."
        - "On Windows and Linux the tip names Ctrl+P instead of ⌘P."
      mock: mocks/preview
      preview:
        type: keys
        keys: ["mod", "P"]
        note: "the combo most editors use"
    - title: "No shortcut needed: click the icon"
      text: "Clicking the TabCmdr icon in the toolbar does the same thing as the shortcut. The palette opens on the page you're on, and a second click or a second press closes it."
      points:
        - "[kbd:Esc] also closes the palette."
        - "On a tab that was open before you installed TabCmdr, the first press reloads the page and then opens the palette."
      mock: mocks/palette
      palette:
        groups:
          - label: "Tabs"
            rows:
              - { host: github.com, title: "Pull requests · acme/web", sub: "https://github.com/acme/web/pulls", selected: true }
              - { host: mail.google.com, title: "Inbox (12) - Gmail", sub: "https://mail.google.com/mail/u/0/#inbox" }
              - { host: docs.google.com, title: "Q3 roadmap - Google Docs", sub: "https://docs.google.com/document/d/1x9Kq3/edit" }
detailsTitle: "More about opening TabCmdr"
details:
  - icon: i-command
    title: "⌘K on Mac, Ctrl+K elsewhere"
    text: "Those are the keys TabCmdr asks for when you install it, in Chrome, Edge, Brave and other Chromium browsers."
  - icon: i-monitor
    title: "Works on browser pages too"
    text: "Extensions can't draw on pages like the new tab page. There the shortcut opens TabCmdr in its own window, or in a new tab if you pick that in settings."
  - icon: i-settings
    title: "Settings open on first install"
    text: "Right after you install, the settings page opens on Getting Started, with your shortcut at the top."
  - icon: i-rotate
    title: "Refresh open tabs once"
    text: "On Getting Started, Refresh open tabs once reloads the tabs you had open before installing, so the shortcut works in all of them."
  - icon: i-ban
    title: "Off on sites you choose"
    text: "Add a site to the Block List on the Sites page of settings and TabCmdr won't open there or on its subdomains."
  - icon: i-sliders
    title: "Open settings from the palette"
    text: "Click the gear in the palette's bottom bar, or run TabCmdr Settings, to get back to your shortcut at any time."
faqTitle: "Questions about the TabCmdr shortcut"
faq:
  - question: "How do I change the TabCmdr shortcut in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `settings` and press Enter. Click Change next to Your keyboard shortcut, then on chrome://extensions/shortcuts click the pencil next to Toggle Command Palette and press your new keys."
  - question: "What is the default TabCmdr shortcut?"
    answer: "⌘K on a Mac and Ctrl+K on Windows and Linux. You can also click the TabCmdr icon in the toolbar."
  - question: "Why does settings say my shortcut is Not set?"
    answer: "The browser didn't give TabCmdr a shortcut, which can happen when another extension already uses those keys. Click Set shortcut and pick a free combo on the shortcuts page."
  - question: "Can I open TabCmdr with ⌘P or Ctrl+P like VS Code?"
    answer: "Yes. Settings shows a Prefer VS Code style? tip with a Set it → button. It opens the shortcuts page, where you press ⌘P or Ctrl+P next to Toggle Command Palette."
  - question: "Can I open TabCmdr without a keyboard shortcut?"
    answer: "Yes. Click the TabCmdr icon in the browser toolbar. It opens the palette on the page you're on, and clicking it again closes it."
  - question: "Why doesn't the shortcut work on a tab I opened before installing?"
    answer: "Tabs opened before TabCmdr was installed need one reload. The first press reloads the page and then opens the palette, or you can click Refresh open tabs once in settings."
related:
  - layouts
  - themes
  - private-by-design
sitemap:
  priority: 0.8
  changefreq: monthly
---
