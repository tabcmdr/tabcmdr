---
title: "How to Generate a Strong Random Password | TabCmdr"
linkTitle: "Generate a strong password"
description: "Let Chrome suggest a strong password on a sign-up form, or type :pwd in TabCmdr for a random password of any length up to 128 characters, copied with Enter."
ogTitle: "A random password on any page"
ogDescription: "Type :pwd in the TabCmdr palette for a 16-character password, or :pwd 24 a for 24 letters and digits. Press Enter to copy it."
ogImage: password-pwd-default.png
imageAlt: "TabCmdr palette with :pwd typed, showing a new 16-character password with a Copy hint"
cardText: "Let Chrome suggest a password on sign-up forms, or type :pwd in TabCmdr for a random one of any length."
heading: "How to generate a strong random password"
lead: "Press ⌘K with TabCmdr (Ctrl+K on Windows and Linux) and type :pwd for a random 16-character password, or :pwd 24 for 24 characters. Enter copies it."
date: 2026-10-19
lastmod: 2026-10-19
weight: 600
group: answers
icon: i-lock
feature: developer-tools
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Copy a new password in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type :pwd"
    typed: ":pwd 24"
    text: "Add a length, or leave it at 16."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The password is copied."
faqTitle: "Questions about generating passwords"
faq:
  - question: "How long can the password be?"
    answer: "From 1 to 128 characters. A bigger number, such as `:pwd 500`, gives 128 characters. With no number you get 16."
  - question: "Can I leave out symbols?"
    answer: "Yes. Add `a` after the length for letters and digits only, such as `:pwd 20 a`. Use `c` for letters only and `n` for digits only."
  - question: "How random is it?"
    answer: "TabCmdr uses the browser's `crypto.getRandomValues()`, which gives cryptographically strong random values, to pick each character."
  - question: "Does TabCmdr save the password?"
    answer: "No. The password is made in your browser and only goes to your clipboard when you press Enter. Save it in your password manager."
  - question: "Can I type :password instead of :pwd?"
    answer: "Yes. `:password` works the same way, with the same length and letters, such as `:password 20 a`."
  - question: "Which symbols can it use?"
    answer: "These: ! @ # $ % ^ & * ( ) - _ = + [ ] { } | ; : , . < > ?"
relatedTitle: "Related features"
related:
  - developer-tools
  - private-by-design
  - calculator
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Let Chrome suggest a password {.way-chrome}

When you create an account, Chrome can fill in a strong password for you and save it to your Google Account.

1. Sign in to Chrome.
2. On the site's sign-up page, select the password box and choose **Use strong password**. If you don't see it, right-click the box and choose **Generate password**.
3. Check the password and choose **Use suggested password**.

Source: Google's [Manage passwords in Chrome](https://support.google.com/chrome/answer/95606) help page, checked in October 2026.

## Make a password with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its `:pwd` command makes a random password on any page, for anything that needs one: a sign-up form, an API secret or a Wi-Fi network.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux.

### Step 2: Type `:pwd`

A new 16-character password shows under **Password**, made from letters, digits and symbols. The left side of the row shows the length it used.

{{< screenshot src="password-pwd-default.png" alt="TabCmdr palette with :pwd typed, showing a 16-character password row labelled :pwd 16 with a Copy hint" caption="`:pwd` on its own gives 16 characters." >}}

Add a length and a letter to change it:

| You type | You get |
|---|---|
| `:pwd` | 16 letters, digits and symbols |
| `:pwd 24` | 24 letters, digits and symbols |
| `:pwd 20 a` | 20 letters and digits |
| `:pwd 12 c` | 12 letters |
| `:pwd 6 n` | 6 digits |
| `:password 20` | 20 letters, digits and symbols |

`:password` is a longer name for `:pwd` and takes the same length and letter. The row still shows `:pwd`.

{{< screenshot src="password-pwd-24-a.png" alt="TabCmdr palette with :pwd 24 a typed, showing a password of letters and digits" caption="`:pwd 24 a` gives 24 letters and digits, with no symbols." >}}

### Step 3: Press Enter

TabCmdr copies the password, closes the palette and shows **Password copied** at the bottom of the page. Paste it with {{< kbd "⌘" "V" >}} or {{< kbd "Ctrl" "V" >}}. TabCmdr doesn't keep a copy, so save it in your password manager before you move on.
