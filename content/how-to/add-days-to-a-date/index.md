---
title: "How to Find the Date 90 Days From Today | TabCmdr"
linkTitle: "Find the date 90 days from today"
description: "Count days, weeks, months or years forward or back from today: type today + 90 days or today - 3 months in the TabCmdr palette and press Enter to copy the date."
ogTitle: "What's the date 90 days from today?"
ogDescription: "Type today + 90 days in the TabCmdr palette and the date shows straight away. now + 36 hours adds the time too."
ogImage: days-today-plus-90.png
imageAlt: "TabCmdr palette with today + 90 days typed, showing the date Sun, 17 Jan 2027"
cardText: "Count days, weeks, months or years forward or back from today, and copy the date with Enter."
heading: "How to find the date 90 days from today"
lead: "Press ⌘K with TabCmdr and type today + 90 days. The date shows straight away, and today - 3 months or now + 36 hours work the same way."
date: 2026-10-19
lastmod: 2026-10-19
weight: 570
group: answers
icon: i-history
feature: time-zones
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Count from today in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type today and the amount"
    typed: "today + 90 days"
    text: "The date shows at the top of the list."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The date is copied, ready to paste."
faqTitle: "Questions about counting days"
faq:
  - question: "How do I find the date a number of days from today?"
    answer: "Type `today +`, the number and `days`, like `today + 90 days`. TabCmdr shows the date at the top of the list, and Enter copies it."
  - question: "Can I count backwards?"
    answer: "Yes. Use a minus sign: `today - 3 months` shows the date three months ago."
  - question: "Can I add weeks, months or years?"
    answer: "Yes. Use `weeks`, `months` or `years`, or the short forms `w`, `mo` and `y`. Days can be written `d`, so `today + 30 d` works too."
  - question: "Can I count from a date other than today?"
    answer: "No. Counting starts from `today` or `now`, so `2026-12-25 + 10 days` gives no answer."
  - question: "What's the difference between today and now?"
    answer: "`today` gives just the date when you add days, weeks, months or years. `now` also shows the time, which is handy for hours and minutes, like `now + 36 hours`."
relatedTitle: "Related features"
related:
  - time-zones
  - calculator
  - todo-list
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Count from today in the TabCmdr palette {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its search box does date math as you type, so you can work out a deadline, a notice period or a delivery date without counting on a calendar.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type today, a plus or minus, and the amount

Type `today + 90 days`. The date shows under **Calculator** at the top of the list. When this screenshot was taken, on October 19, 2026, it showed Sun, 17 Jan 2027.

{{< screenshot src="days-today-plus-90.png" alt="TabCmdr palette with today + 90 days typed, showing Sun, 17 Jan 2027" caption="`today + 90 days`, typed on October 19, 2026." >}}

### Step 3: Press Enter to copy

The answer row is already highlighted. Press {{< kbd "Enter" >}} and TabCmdr copies the date and closes the palette. A message like "Copied Sun, 17 Jan 2027" shows at the bottom of the page.

## Count in other units {.way-tabcmdr}

Write a number and a unit after `today +` or `today -`:

| Unit | You can write |
|---|---|
| Days | `days`, `day` or `d` |
| Weeks | `weeks`, `week` or `w` |
| Months | `months`, `month` or `mo` |
| Years | `years`, `year`, `yr` or `y` |
| Hours | `hours`, `hour`, `hr` or `h` |
| Minutes | `minutes`, `minute` or `min` |
| Seconds | `seconds`, `second`, `sec` or `s` |

For example, `today - 3 months`, `today + 2 weeks` and `today + 1 year` all give a date.

## Add hours and minutes with now {.way-tabcmdr}

Start with `now` instead of `today` to see the time as well as the date. `now + 36 hours` shows the time 36 hours from the moment you type it, and `now - 90 minutes` goes back.

{{< screenshot src="days-now-plus-36-hours.png" alt="TabCmdr palette with now + 36 hours typed, showing 4:36 PM on Tue, 20 Oct 2026" caption="`now + 36 hours` shows both the time and the date." >}}

## If no answer shows up {.way-tabcmdr}

- **It starts from another date.** Counting works from `today` or `now` only, so `2026-12-25 + 10 days` gives no answer.
- **The unit is missing.** Write it after the number, like `90 days`.
- **You wanted the time somewhere else.** Type `time in tokyo` or `10am ist to tokyo`. The [time zones page]({{< relref "/features/time-zones" >}}) covers those.
