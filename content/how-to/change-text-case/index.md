---
title: "How to Change Text to Uppercase or camelCase | TabCmdr"
linkTitle: "Change text case"
description: "Turn any text into UPPER CASE, lower case, Title Case, camelCase, PascalCase, snake_case or kebab-case from any page in Chrome, then copy it with Enter."
ogTitle: "Seven text cases from one line"
ogDescription: "Type :tx and your text in the TabCmdr palette to see it in seven case styles. Pick one and press Enter to copy it."
ogImage: text-case-tx-sales-report.png
imageAlt: "TabCmdr palette with :tx sales report typed, showing the text in UPPER CASE, lower case, Title Case, camelCase, PascalCase and snake_case"
cardText: "Turn any text into UPPER CASE, camelCase, snake_case and four more styles, then copy the one you need."
heading: "How to change text to uppercase, camelCase or snake_case"
lead: "Press ⌘K with TabCmdr (Ctrl+K on Windows and Linux), type :tx and your text, then pick UPPER CASE, camelCase, snake_case or another style. Enter copies it."
date: 2026-10-19
lastmod: 2026-10-19
weight: 580
group: answers
icon: i-code
feature: developer-tools
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Change text case in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type :tx and your text"
    typed: ":tx sales report"
    text: "Seven styles appear, one per row."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The highlighted style is copied."
faqTitle: "Questions about changing text case"
faq:
  - question: "Which case styles can TabCmdr make?"
    answer: "Seven: UPPER CASE, lower case, Title Case, camelCase, PascalCase, snake_case and kebab-case. Type `:tx` followed by your text and each style gets its own row."
  - question: "Can it turn camelCase into snake_case?"
    answer: "Yes. snake_case and kebab-case split words where a lowercase letter meets a capital, so `:tx userProfileId` gives user_profile_id and user-profile-id."
  - question: "Why does camelCase keep my capital letters?"
    answer: "camelCase and PascalCase only change the first letter of each word and keep the rest as you typed it. `:tx HELLO WORLD` gives hELLOWORLD. Type the text in lowercase first, or use snake_case and kebab-case, which lowercase everything."
  - question: "Does it work with accented letters?"
    answer: "UPPER CASE, lower case and Title Case keep accented letters. camelCase, PascalCase, snake_case and kebab-case only keep the letters A to Z and digits, so `:tx café menu` gives caf_menu."
  - question: "Is my text sent anywhere?"
    answer: "No. The styles are worked out inside the palette on your computer. Nothing is sent to a website or a server."
relatedTitle: "Related features"
related:
  - developer-tools
  - calculator
  - color-conversion
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Change text case with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its `:tx` command shows the text you type in seven case styles, so you don't need a converter website.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type `:tx` and your text

Type `:tx`, a space, then the text you want to change. Seven rows appear under **Text Transform**, one for each style:

| Style | `:tx sales report` gives |
|---|---|
| UPPER CASE | SALES REPORT |
| lower case | sales report |
| Title Case | Sales Report |
| camelCase | salesReport |
| PascalCase | SalesReport |
| snake_case | sales_report |
| kebab-case | sales-report |

{{< screenshot src="text-case-tx-sales-report.png" alt="TabCmdr palette with :tx sales report typed, showing UPPER CASE, lower case, Title Case, camelCase, PascalCase and snake_case rows" caption="`:tx sales report` in each style. kebab-case is one row further down." >}}

### Step 3: Pick a style and press Enter

The first row is highlighted. Press {{< kbd "↓" >}} or {{< kbd "↑" >}} to move to the style you want, then press {{< kbd "Enter" >}}. TabCmdr copies that version, closes the palette and shows **Copied** at the bottom of the page. Paste it with {{< kbd "⌘" "V" >}} or {{< kbd "Ctrl" "V" >}}.

## How each style reads your text {.way-tabcmdr}

- **Spaces, hyphens and other symbols split words.** `:tx order-total` gives orderTotal in camelCase and order_total in snake_case.
- **snake_case and kebab-case also split camelCase.** `:tx userProfileId` gives user_profile_id and user-profile-id.
- **Title Case capitalizes the first letter of each word and lowercases the rest.** That means userProfileId becomes Userprofileid.
- **camelCase and PascalCase keep the inside of each word as typed.** `:tx SALES REPORT` gives sALESREPORT. Type the text in lowercase to get salesReport.
