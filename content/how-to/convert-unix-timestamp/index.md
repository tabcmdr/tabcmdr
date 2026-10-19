---
title: "How to Convert a Unix Timestamp to a Date | TabCmdr"
linkTitle: "Convert a Unix timestamp to a date"
description: "Turn a Unix timestamp into a readable date and time, or a date into a timestamp, from any page: type unix 1713000000 or time to unix in the TabCmdr palette."
ogTitle: "Unix timestamps to dates, and back"
ogDescription: "Type unix 1713000000 to utc in the TabCmdr palette to see Sat, 13 Apr 2024, 9:20 AM. Type time to unix for the current timestamp."
ogImage: unix-timestamp-to-utc.png
imageAlt: "TabCmdr palette with unix 1713000000 to utc typed, showing 9:20 AM on Sat, 13 Apr 2024 in UTC"
cardText: "Read a Unix timestamp as a date in any time zone, or turn a date into a timestamp, then copy it."
heading: "How to convert a Unix timestamp to a date"
lead: "Press ⌘K with TabCmdr and type unix 1713000000 to see the date in your time zone, or add to utc. For the current timestamp, type time to unix."
date: 2026-10-19
lastmod: 2026-10-19
weight: 560
group: answers
icon: i-clock
feature: time-zones
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Read a timestamp in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type unix and the number"
    typed: "unix 1713000000"
    text: "The date and time show at the top of the list."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The date, time and zone are copied as one line."
faqTitle: "Questions about Unix timestamps"
faq:
  - question: "How do I convert a Unix timestamp to a date?"
    answer: "Type `unix` and the number, like `unix 1713000000`. TabCmdr shows the date and time in your own time zone. Add `to utc` or a city to see it somewhere else."
  - question: "Does it read timestamps in milliseconds?"
    answer: "Yes. A timestamp longer than 10 digits is read as milliseconds, so `unix 1713000000000` shows the same date as `unix 1713000000`."
  - question: "How do I get the current Unix timestamp?"
    answer: "Type `time to unix`. TabCmdr shows the current time in seconds, and Enter copies it."
  - question: "How do I turn a date into a Unix timestamp?"
    answer: "Type the date, time and zone, then `to unix`: `2026-12-25 9am utc to unix` gives 1798189200."
  - question: "Why doesn't a plain number show a date?"
    answer: "TabCmdr needs to know you mean a timestamp. Add `unix`, `epoch` or `timestamp` before or after the number, or a place after it, like `1713000000 to utc`."
relatedTitle: "Related features"
related:
  - time-zones
  - calculator
  - developer-tools
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Convert a timestamp in the TabCmdr palette {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its search box reads Unix timestamps as you type, so you can check a log line or an API response without opening a converter site.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type unix and the number

Type `unix` and the timestamp, like `unix 1713000000`. The date and time show under **Calculator** at the top of the list, in your own time zone. To see it somewhere else, add `to` and a place:

{{< screenshot src="unix-timestamp-to-utc.png" alt="TabCmdr palette with unix 1713000000 to utc typed, showing 9:20 AM, Sat, 13 Apr 2024 and UTC+00:00" caption="`unix 1713000000 to utc` gives 9:20 AM on Sat, 13 Apr 2024." >}}

A few ways of writing it all work:

| You type | What it shows |
|---|---|
| `unix 1713000000` | The date and time in your time zone |
| `epoch 1713000000` | The same, using the word epoch |
| `1713000000 timestamp` | The same, with the word after the number |
| `unix 1713000000 to tokyo` | 6:20 PM on Sat, 13 Apr 2024, in Tokyo |
| `1713000000 to utc` | 9:20 AM on Sat, 13 Apr 2024, in UTC |
| `unix 1713000000000` | The same moment, read as milliseconds |

Timestamps of 9 to 13 digits work. Anything longer than 10 digits is read as milliseconds.

### Step 3: Press Enter to copy

The answer row is already highlighted. Press {{< kbd "Enter" >}} and TabCmdr copies the time, date and zone as one line, then closes the palette. For `unix 1713000000 to utc`, the message at the bottom of the page reads "Copied 9:20 AM · Sat, 13 Apr 2024 (UTC, UTC+00:00)".

## Turn a date into a timestamp {.way-tabcmdr}

Type the date, time and zone, then `to unix`. TabCmdr shows the timestamp in seconds.

{{< screenshot src="unix-date-to-timestamp.png" alt="TabCmdr palette with 2026-12-25 9am utc to unix typed, showing the timestamp 1798189200" caption="`2026-12-25 9am utc to unix` gives 1798189200." >}}

For the timestamp right now, type `time to unix`, `now to unix` or `unix now`.

## If no answer shows up {.way-tabcmdr}

- **It's just a number.** `1713000000` on its own could be anything. Add `unix`, `epoch` or `timestamp`, or a place like `to utc`.
- **The number is too short or too long.** Timestamps need 9 to 13 digits.
- **You wanted a time in another city.** Type `time in tokyo` or `10am ist to tokyo`. The [time zones page]({{< relref "/features/time-zones" >}}) has more examples.
