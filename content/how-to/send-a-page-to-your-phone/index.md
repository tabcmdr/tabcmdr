---
title: "How to Send a Web Page to Your Phone | TabCmdr"
linkTitle: "Send a web page to your phone"
description: "Open the page you're reading on your computer on your phone by scanning a QR code. Use Chrome's Create QR code option, or press ⌘K with TabCmdr and type qr."
ogTitle: "Open this page on your phone in one scan"
ogDescription: "Press ⌘K, type qr and press Enter. TabCmdr shows a QR code for the page's full address. Scan it with your phone's camera."
ogImage: qr-code-card.png
imageAlt: "TabCmdr QR code card over a blurred web page, with the page address and a Copy Image button"
cardText: "Show a QR code for the page you're on and scan it with your phone, with Chrome's share menu or with TabCmdr."
heading: "How to send a web page to your phone"
lead: "In Chrome, choose More, then Cast, save, and share, then Create QR code. With TabCmdr, press ⌘K, type qr, press Enter and scan the code with your phone's camera."
date: 2026-10-19
lastmod: 2026-10-19
weight: 400
group: page
icon: i-qr
feature: qr-code
docs: page-commands
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Send a page to your phone in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux, on the page to send."
  - title: "Type qr"
    typed: "qr"
    text: "Press Enter on QR Code for Current Page."
  - title: "Scan the code"
    keys: ["Esc"]
    text: "Open it on your phone, then press Esc to close."
faqTitle: "Questions about sending pages to your phone"
faq:
  - question: "How do I open a web page from my computer on my phone?"
    answer: "Show a QR code for the page and scan it with your phone's camera. In Chrome, open the More menu, choose Cast, save, and share, then Create QR code. With TabCmdr, press ⌘K or Ctrl+K, type `qr` and press Enter."
  - question: "Does the QR code include the whole address?"
    answer: "Yes. TabCmdr's code holds the page's full address, including anything after a `?` or `#`, so your phone opens the same page and the same spot on it."
  - question: "Does TabCmdr send the link anywhere?"
    answer: "No. TabCmdr makes the QR code in your browser. Nothing is uploaded, and your phone only gets the address when you scan it."
  - question: "Can I save the QR code?"
    answer: "Click Copy Image on TabCmdr's card to copy the code as a picture, ready to paste into a message or a document. TabCmdr confirms with QR code copied. Chrome's own Create QR code option has a Download button."
  - question: "How do I close the QR code?"
    answer: "Press Esc, or click anywhere outside the white card."
relatedTitle: "Related features"
related:
  - qr-code
  - page-commands
  - screenshots
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Chrome's built-in QR code {.way-chrome}

Chrome can make a QR code for the page you're on:

1. Go to the page you want to open on your phone.
2. Open the **More** menu (⋮), choose **Cast, save, and share**, then **Create QR code**.
3. Scan the code with your phone's camera. You can also copy the link, or click **Download** to save the code.

Source: Google's [Share pages with a QR code](https://support.google.com/chrome/answer/9979877) help page, checked in October 2026.

## Show a QR code with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. It puts a QR code for the page on screen in two keystrokes, without going through menus.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette and type `qr`

On the page you want to send, press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux and type `qr`. **QR Code for Current Page** comes first.

{{< screenshot src="qr-code-command.png" alt="TabCmdr palette with qr typed, showing the QR Code for Current Page command" caption="Typing `qr` finds the QR Code for Current Page command." >}}

### Step 2: Press Enter

The page blurs behind a white card with the QR code, the start of the page's address and a **Copy Image** button.

{{< screenshot src="qr-code-card.png" alt="TabCmdr QR code card over a blurred blog article, with the address https://acme-studio.example/blog/plan-yo… and a Copy Image button" caption="The card shows the start of the address so you can check it's the right page." >}}

### Step 3: Scan it with your phone

Point your phone's camera at the code and open the link it finds. Press {{< kbd "Esc" >}}, or click outside the card, to close it.

The code holds the page's full address, including anything after a `?` or `#`, so your phone lands on the same page and the same spot. If the page needs you to sign in, you'll have to sign in on your phone too.

## Copy the QR code as a picture {.way-tabcmdr}

Click **Copy Image** on the card to copy the code as a picture. The card closes and **QR code copied** appears at the bottom of the page. Paste it into a chat, an email or a slide to share the link with someone else.

TabCmdr makes the code in your browser, so the address isn't sent anywhere. The [QR code feature page]({{< relref "/features/qr-code" >}}) has more.
