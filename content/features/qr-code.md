---
title: "Open This Page on Your Phone with a QR Code | TabCmdr"
linkTitle: "QR code"
description: "Want this page on your phone? Run QR Code for Current Page in TabCmdr and scan the code with your camera, or copy it as an image. Made on your computer."
ogTitle: "Send the page to your phone with a QR code"
ogDescription: "Press ⌘K, type qr and press Enter. A QR code for the page appears over it, ready to scan or copy. It's made on your computer and works offline."
weight: 190
date: 2026-10-06
lastmod: 2026-10-06
group: page
icon: i-qr
docs: page-commands
eyebrow: "QR code"
heading: "Want this page on your phone?"
headingMuted: "Show a QR code and scan it."
lead: "Show a QR code for the page you're on and scan it with your phone's camera. Press [kbd:mod][kbd:K], type `qr` and press [kbd:↵] to see it."
howTitle: "Get the page on your phone in three steps"
demo:
  name: shortcut
  layout: split
  token: "qr"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Find the command"
    typed: "qr"
    text: "QR Code for Current Page shows under Commands."
  - title: "Show the code"
    keys: ["↵"]
    text: "Point your phone's camera at it."
showcase:
  title: "How the QR code works"
  lead: "The code holds the full address of the page you're on. TabCmdr draws it on a card in the middle of the screen."
  rows:
    - title: "A clear code in the middle of the screen"
      text: "The page dims and a white card shows the QR code, with the address under it. The code is sized to fit your window, up to 336 pixels across, with sharp square edges."
      points:
        - "Addresses up to 160 characters get the strongest error correction. Longer ones use a lighter level so each square stays bigger."
        - "The address under the code shows its first 40 characters."
      mock: mocks/preview
      preview:
        type: qr
    - title: "Copy it as an image"
      text: "Copy Image puts the QR code on your clipboard as a PNG, shows QR code copied and closes the card. Paste it into a slide, a doc or a message."
      points:
        - "Press [kbd:Esc] or click outside the card to close it without copying."
        - "If the browser blocks the clipboard, you see Copy failed and the card stays open."
      mock: mocks/palette
      palette:
        query: "qr"
        highlight: ["QR"]
        toast: "QR code copied"
        groups:
          - label: "Commands"
            rows:
              - { glyph: i-qr, title: "QR Code for Current Page", sub: "Page command", type: i-terminal, selected: true }
    - title: "Made on your computer"
      text: "TabCmdr builds the code inside the page with a QR library that ships with the extension. The address never goes to a QR service, so it works offline and on private pages, like a staging site or an internal tool."
      points:
        - "No account, no sign-in and nothing to install on your phone. Any camera app that reads QR codes works."
      mock: mocks/preview
      preview:
        type: chips
        chips: ["Made on your computer", "Works offline", "No upload"]
detailsTitle: "More about QR codes"
details:
  - icon: i-wifi-off
    title: "Works offline"
    text: "The code is drawn in your browser, so it shows up even with no connection."
  - icon: i-link
    title: "The exact address"
    text: "The code holds the full address of the tab, including anything after `?` or `#`."
  - icon: i-copy
    title: "Copy Image"
    text: "One click puts the code on your clipboard as a PNG image."
  - icon: i-x
    title: "Easy to dismiss"
    text: "[kbd:Esc] or a click outside the card closes it. Running the command again replaces the old card."
  - icon: i-search
    title: "Find it by any name"
    text: "`qr`, `share`, `scan` and `barcode` all bring up QR Code for Current Page."
  - icon: i-camera
    title: "Need a picture of the page?"
    text: "For an image of the page itself, `:ss` captures the screen, an area or the full page."
faqTitle: "Questions about QR codes"
faq:
  - question: "How do I make a QR code for a web page in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `qr` and press Enter on QR Code for Current Page. Scan the code with your phone's camera."
  - question: "Is the QR code made online?"
    answer: "No. TabCmdr generates it on your computer. The address isn't sent to any QR service, and it works offline."
  - question: "Can I copy the QR code as an image?"
    answer: "Yes. Click Copy Image on the card. The code goes to your clipboard as a PNG and you see QR code copied."
  - question: "How do I close the QR code?"
    answer: "Press Esc or click anywhere outside the card."
  - question: "Does it work with long URLs?"
    answer: "Yes. The code holds the full address. Longer addresses use a lighter error correction level so the code stays easy to scan."
  - question: "Does it work in Edge, Brave and Arc?"
    answer: "Yes. TabCmdr runs in Chrome, Edge, Brave, Arc, Vivaldi, Opera and other Chromium-based browsers, and installs from the Chrome Web Store."
related:
  - page-commands
  - screenshots
  - private-by-design
sitemap:
  priority: 0.8
  changefreq: monthly
---
