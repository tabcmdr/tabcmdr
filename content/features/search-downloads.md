---
title: "Find Downloaded Files by Name in Chrome | TabCmdr"
linkTitle: "Downloads search"
description: "Can't find the file you just downloaded? Type :d and part of its name, then press Enter to open it or show it in its folder. Covers your last 100 downloads."
ogTitle: "Open a recent download by typing its name"
ogDescription: "Type :d and part of a file name. Open the file, show it in its folder, copy where it came from or clear it from the list."
weight: 60
date: 2026-10-06
lastmod: 2026-10-06
group: find
icon: i-download
token: ":d"
docs: downloads
eyebrow: "Downloads search"
heading: "Downloaded it, now it's lost?"
headingMuted: "Find any file by name."
lead: "Search your downloads by file name. Press [kbd:mod][kbd:K], type `:d` and part of the name, and press [kbd:↵] to open the file or show it in its folder."
howTitle: "Open a download in three steps"
demo:
  name: browser-palette
  layout: wide
  tour: downloads
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Find the file"
    typed: ":d invoice"
    text: "Any part of the file name."
  - title: "Open it"
    keys: ["↵"]
    text: "Or see it in its folder if it moved."
showcase:
  title: "How downloads search works"
  lead: "TabCmdr reads the downloads list your browser already keeps, so the files you want are a few letters away."
  rows:
    - title: "Your last 100 downloads, searchable"
      text: "TabCmdr reads the 100 most recent entries in your downloads list. Each row shows the file name and its size, or Downloading… while it's still coming in, Failed if it stopped, and File missing if it's been moved or deleted since."
      points:
        - "Type part of the file name, in any order, such as `brand zip` for brand-assets-v3.zip."
        - "Results are ranked by how well they match. Without a search, the newest download is first."
        - "Downloads stay out of the default list, so they only appear when you ask with `:d` or the Downloads filter."
      mock: mocks/palette
      palette:
        query: ":d"
        filter: "all"
        groups:
          - label: "Downloads"
            rows:
              - { glyph: i-file, title: "invoice-2041.pdf", sub: "182.0 KB", type: i-download, actions: download, selected: true }
              - { glyph: i-file, title: "dataset-2026-10.csv", sub: "Downloading…", type: i-download }
              - { glyph: i-file, title: "brand-assets-v3.zip", sub: "24.1 MB", type: i-download }
              - { glyph: i-file, title: "old-contract.pdf", sub: "File missing", type: i-download }
    - title: "Open the file, or find it in its folder"
      text: "[kbd:↵] opens a finished download with your system's default app. The row's buttons cover the rest: show the file in its folder, copy the address it was downloaded from, or remove it from the downloads list."
      points:
        - "Show in folder opens the file's folder in Finder or File Explorer."
        - "Copy source URL copies the address the file came from and confirms with URL copied."
        - "Remove from list clears the entry from the downloads list. The file itself stays on your disk."
      mock: mocks/palette
      palette:
        query: ":d invoice"
        highlight: ["invoice"]
        tip: "Show in folder"
        groups:
          - label: "Downloads"
            rows:
              - { glyph: i-file, title: "invoice-2041.pdf", sub: "182.0 KB", type: i-download, actions: download, selected: true }
              - { glyph: i-file, title: "invoice-2017.pdf", sub: "176.4 KB", type: i-download }
    - title: "One permission, asked once"
      text: "Downloads is an optional permission. The first time you open the Downloads filter, the palette asks for it with a Grant Permission button, and you can turn it off later in settings."
      points:
        - "TabCmdr reads file names, sizes and where each file came from. It doesn't open or read the files themselves unless you press [kbd:↵]."
        - "Nothing about your downloads leaves your browser."
      mock: mocks/permission
      permission:
        filter: "downloads"
        label: "Downloads"
        description: "View, open, and manage your recent downloads."
detailsTitle: "More reasons to find files this way"
details:
  - icon: i-search
    title: "Search by any part of the name"
    text: "Type a word from the file name and the matching downloads rise to the top, best match first."
  - icon: i-folder
    title: "Show in folder"
    text: "Jump to the file in Finder or File Explorer without opening the browser's downloads page."
  - icon: i-link
    title: "Copy source URL"
    text: "Copy the address a file came from, to share it or download it again later."
  - icon: i-x
    title: "Clear the list, keep the file"
    text: "Remove from list tidies your downloads list. The file on your disk isn't touched."
  - icon: i-sliders
    title: "Browse with the Tab key"
    text: "[kbd:Tab] steps to the Downloads filter, which lists your recent downloads, including ones still in progress."
  - icon: i-shield
    title: "Stays in your browser"
    text: "Download names and addresses are read when the palette opens and dropped when it closes."
faqTitle: "Questions about finding downloads"
faq:
  - question: "How do I find a downloaded file in Chrome by name?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `:d` and part of the file name, and press Enter to open it. Use Show in folder on the row to see where it's saved."
  - question: "Does Remove from list delete the file?"
    answer: "No. It only clears the entry from your browser's downloads list. The file stays on your disk."
  - question: "What happens if I moved or deleted the file?"
    answer: "The row says File missing. Pressing Enter on a download that is missing or not finished asks the browser to show it in its folder instead of opening it."
  - question: "How many downloads can I search?"
    answer: "Your 100 most recent downloads, including ones still in progress."
  - question: "Why don't downloads show up in a normal search?"
    answer: "Downloads aren't part of the default list. Start with `:d` or press Tab to move to the Downloads filter."
  - question: "Does TabCmdr upload or read my files?"
    answer: "No. It reads the list of downloads, meaning names, sizes and addresses, in your browser. Files only open when you press Enter, in your own app."
related:
  - search-history
  - search-open-tabs
  - recently-closed-tabs
sitemap:
  priority: 0.8
  changefreq: monthly
---
