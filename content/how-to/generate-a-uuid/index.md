---
title: "How to Generate a UUID in Your Browser | TabCmdr"
linkTitle: "Generate a UUID"
description: "Make a random v4 UUID without a generator website: use crypto.randomUUID() in Chrome's DevTools Console, or type :uuid in TabCmdr and press Enter to copy it."
ogTitle: "A fresh UUID in two keystrokes"
ogDescription: "Type :uuid in the TabCmdr palette for a new random v4 UUID and press Enter to copy it. Works on any page."
ogImage: uuid-palette-result.png
imageAlt: "TabCmdr palette with :uuid typed, showing a new UUID with a Copy hint"
cardText: "Make a random v4 UUID in Chrome's DevTools Console, or type :uuid in TabCmdr and copy it with Enter."
heading: "How to generate a UUID in your browser"
lead: "In Chrome's DevTools Console, run crypto.randomUUID(). Or press ⌘K with TabCmdr (Ctrl+K on Windows and Linux), type :uuid and press Enter to copy a new one."
date: 2026-10-19
lastmod: 2026-10-19
weight: 590
group: answers
icon: i-key
feature: developer-tools
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Copy a new UUID in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type :uuid"
    typed: ":uuid"
    text: "A new random UUID appears."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The whole UUID is copied."
faqTitle: "Questions about generating UUIDs"
faq:
  - question: "Which UUID version does TabCmdr make?"
    answer: "Version 4, the random kind. TabCmdr calls the browser's own `crypto.randomUUID()`, the same function you can run in the DevTools Console."
  - question: "Do I get a new UUID each time?"
    answer: "Yes. Each time you type `:uuid` the palette makes a fresh one."
  - question: "Can I get the UUID in uppercase?"
    answer: "The UUID comes in lowercase. To change it, paste it after `:tx` in the palette and pick UPPER CASE."
  - question: "Why does `:UUID` show nothing?"
    answer: "The command only matches `:uuid` in lowercase, with nothing after it."
  - question: "Is the UUID made on my computer?"
    answer: "Yes. It's generated in your browser and isn't sent anywhere."
relatedTitle: "Related features"
related:
  - developer-tools
  - color-conversion
  - calculator
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Make a UUID in Chrome's DevTools {.way-chrome}

Chrome's DevTools Console can run `crypto.randomUUID()`, which returns a random, 36-character version 4 UUID.

1. Open a page whose address starts with `https://`. The function only works on secure pages.
2. Press {{< kbd "Ctrl" "Shift" "J" >}} on Windows and Linux, or {{< kbd "⌘" "Option" "J" >}} on a Mac, to open the Console.
3. Type `crypto.randomUUID()` and press {{< kbd "Enter" >}}. The Console prints the new UUID.

Sources: Chrome for Developers' [Console guide](https://developer.chrome.com/docs/devtools/console/javascript) and MDN's [crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) page, checked in October 2026.

## Make a UUID with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. It makes the same kind of UUID from any page, without opening DevTools.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux.

### Step 2: Type `:uuid`

A new UUID shows at the top of the list, under **UUID**. Type it in lowercase.

{{< screenshot src="uuid-palette-result.png" alt="TabCmdr palette with :uuid typed, showing a new UUID row with a Copy hint above web search options" caption="`:uuid` makes a new version 4 UUID. Long values are cut off in the row, but the whole UUID is copied." >}}

### Step 3: Press Enter

TabCmdr copies the full UUID, closes the palette and shows **UUID copied** at the bottom of the page. Paste it with {{< kbd "⌘" "V" >}} or {{< kbd "Ctrl" "V" >}}. To get another one, open the palette and type `:uuid` again.
