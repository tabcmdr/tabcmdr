---
# One task per guide. Create with: hugo new content how-to/<slug>/index.md
# Title: 30 to 60 characters, starts with "How to". Description: 140 to 160 characters.
# Target a "how to ..." search, not the feature name the /features/ page already uses.
# Tag H2s with {.way-chrome} or {.way-tabcmdr} to show the "Chrome's way" / "TabCmdr's way" labels.
# Never write about granting permissions; capture screenshots with every permission on.
title: "How to {{ replace .File.ContentBaseName "-" " " }} | TabCmdr"
linkTitle: ""
description: ""
ogTitle: ""
ogDescription: ""
# A screenshot in this folder. Cropped to 1200x630 from the top for social cards.
ogImage: ""
imageAlt: ""
cardText: ""
heading: "How to {{ replace .File.ContentBaseName "-" " " }}"
# Answer the question in the first 40 to 60 words.
lead: ""
date: {{ .Date }}
lastmod: {{ .Date }}
weight: 100
draft: true
# Id from data/features/catalog.yaml, shown in the sidebar.
feature: ""
# Docs page slug for the FAQ "More in the documentation" link.
docs: ""
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: ""
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux."
  - title: ""
    typed: ""
    text: ""
  - title: ""
    keys: ["↵"]
    text: ""
faqTitle: ""
faq:
  - question: ""
    answer: ""
relatedTitle: "Related features"
related: []
sitemap:
  priority: 0.7
  changefreq: monthly
---

## What Chrome can do on its own {.way-chrome}

## Do it with TabCmdr {.way-tabcmdr}

### Step 1:

{{"{{"}}< screenshot src="" alt="" caption="" >{{"}}"}}

### Step 2:

### Step 3:

## If it doesn't work {.way-tabcmdr}
