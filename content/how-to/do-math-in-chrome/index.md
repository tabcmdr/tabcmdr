---
title: "How to Calculate Percentages and Sums in Chrome | TabCmdr"
linkTitle: "Calculate percentages and sums"
description: "Work out 20% of 4500, add tax to a price or do any sum from the page you're on: type it in the TabCmdr palette and press Enter to copy the answer."
ogTitle: "Do the math without opening a calculator"
ogDescription: "Type 20% of 4500 or (1299 * 3) - 150 in the TabCmdr palette. The answer shows at the top of the list, and Enter copies it."
ogImage: math-percent-of.png
imageAlt: "TabCmdr palette with 20% of 4500 typed and the answer 900 at the top of the list"
cardText: "Work out percentages, prices and any other sum from the page you're on, then copy the answer with Enter."
heading: "How to calculate percentages and sums in Chrome"
lead: "Press ⌘K with TabCmdr on any page and type the sum, like 20% of 4500 or (1299 * 3) - 150. The answer shows at the top of the list, and Enter copies it."
date: 2026-10-19
lastmod: 2026-10-19
weight: 500
group: answers
icon: i-calculator
feature: calculator
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Do a sum in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type the sum"
    typed: "20% of 4500"
    text: "The answer shows at the top of the list."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The answer is copied, ready to paste."
faqTitle: "Questions about doing math in Chrome"
faq:
  - question: "How do I work out a percentage of a number?"
    answer: "Type it the way you'd say it, with `of`: `20% of 4500` gives 900. Press Enter to copy the answer."
  - question: "How do I add a percentage, like tax, to a price?"
    answer: "Use `on`: `18% on 250` gives 295, which is 250 plus 18 percent. You can also write it as a sum: `80 + 15%` gives 92."
  - question: "How do I take a percentage off?"
    answer: "Write it as a sum with a minus sign: `80 - 20%` gives 64, which is 80 minus 20 percent."
  - question: "How many decimal places does the answer show?"
    answer: "Answers are rounded to 12 significant digits, so `1250 / 12` gives 104.166666667."
  - question: "Does the calculator work offline?"
    answer: "Yes. The math is done inside TabCmdr on your computer, so it doesn't need an internet connection."
relatedTitle: "Related features"
related:
  - calculator
  - time-zones
  - color-conversion
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Use Google Search's calculator {.way-chrome}

Google Search has a calculator built in. Type your equation into the search box on google.com and Google works it out. You can also search for `calculator` to open it on its own.

You can search from Chrome's address bar too. If Google is your default search engine, type the sum there and press Enter to get the same answer. In some countries Google is Chrome's default, and in others Chrome asks you to pick one.

Sources: Google's [calculator and unit converter](https://support.google.com/websearch/answer/3284611) and [default search engine](https://support.google.com/chrome/answer/95426) help pages, checked in October 2026.

## Do the math in the TabCmdr palette {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its search box works as a calculator too, so you can do a sum without leaving the page or opening a new tab.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type the sum

The answer appears under **Calculator** at the top of the list while you type. Here, `20% of 4500` gives 900.

{{< screenshot src="math-percent-of.png" alt="TabCmdr palette with 20% of 4500 typed and the answer 900 under Calculator" caption="The answer shows at the top of the list as you type." >}}

You can write sums the way you would on paper:

- Use `+`, `-`, `*` and `/`, and `^` for powers. Brackets work as you'd expect: `(1299 * 3) - 150` gives 3747.
- Functions work too: `sqrt(144) + 2^5` gives 44 and `log(1000, 10)` gives 3.
- Long answers are rounded to 12 significant digits: `1250 / 12` gives 104.166666667.

{{< screenshot src="math-expression.png" alt="TabCmdr palette with (1299 * 3) - 150 typed and the answer 3747 under Calculator" caption="Brackets and the usual operators work in one line." >}}

### Step 3: Press Enter to copy

The answer row is already highlighted. Press {{< kbd "Enter" >}} and TabCmdr copies the answer and closes the palette, so you can paste it straight into a form, a sheet or a message. A "Copied 900" message shows at the bottom of the page.

## Work out percentages {.way-tabcmdr}

Type percentages the way you'd say them out loud:

| You type | You get | What it means |
|---|---|---|
| `20% of 4500` | 900 | 20 percent of 4500 |
| `18% on 250` | 295 | 250 plus 18 percent |
| `80 + 15%` | 92 | 80 plus 15 percent |
| `80 - 20%` | 64 | 80 minus 20 percent |

`on` is handy for tax, tips and markups, and the minus form works for discounts.

## If no answer shows up {.way-tabcmdr}

- **There's no operator.** A number on its own, like `4500`, isn't a sum, so no answer appears. Add an operator or a function.
- **The symbol isn't one TabCmdr reads.** `!` for factorials doesn't work, so `5!` gives no answer.
- **You're after a conversion.** Units, colors and number bases use `to`, like `100 km to miles`. The [calculator page]({{< relref "/features/calculator" >}}) lists those too.
