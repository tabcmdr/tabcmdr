---
title: "How to Convert Time Zones for a Meeting | TabCmdr"
linkTitle: "Convert time zones for a meeting"
description: "Convert a meeting time between cities, countries or time zones from any page: type 10am ist to tokyo, or one time to several places, in the TabCmdr palette."
ogTitle: "What time is 10am IST in Tokyo?"
ogDescription: "Type 10am ist to tokyo in the TabCmdr palette and see 1:30 PM, the date and the UTC offset there. Enter copies it."
ogImage: tz-ist-to-tokyo.png
imageAlt: "TabCmdr palette with 10am ist to tokyo typed, showing 1:30 PM with the date and JST UTC+09:00"
cardText: "Turn a meeting time into the time somewhere else, or in several places at once, without a time zone site."
heading: "How to convert time zones for a meeting"
lead: "Press ⌘K with TabCmdr and type the time and both places, like 10am ist to tokyo. You get the time there with its date and UTC offset, and Enter copies it."
date: 2026-10-19
lastmod: 2026-10-19
weight: 550
group: answers
icon: i-globe
feature: time-zones
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Convert a time in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type the time and places"
    typed: "10am ist to tokyo"
    text: "The time there shows at the top of the list."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The time, date and zone are copied as one line."
faqTitle: "Questions about converting time zones"
faq:
  - question: "How do I convert a time from one time zone to another?"
    answer: "Type the time, where it is, `to`, and where you want it, like `10am ist to tokyo`. TabCmdr shows 1:30 PM with the date and Tokyo's UTC offset."
  - question: "Can I convert one time to several time zones at once?"
    answer: "Yes. List the places after `to` or `in`, separated by commas or `and`: `10:30pm ist in pst, est and uk` shows a row for each one. Press Enter to copy them all."
  - question: "Does it handle daylight saving time?"
    answer: "Yes. Times follow each place's daylight saving rules, and the card shows the abbreviation in use. In summer, `pst` shows as PDT."
  - question: "How do I convert a time to my own time zone?"
    answer: "Leave out the second place: `10am pst` converts 10 AM Pacific time to your time. To go the other way, write `10am to pst`."
  - question: "Does it work offline?"
    answer: "Yes. TabCmdr uses the time zone data built into your browser, so it doesn't need an internet connection."
relatedTitle: "Related features"
related:
  - time-zones
  - calculator
  - web-search
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Convert a time in the TabCmdr palette {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its search box converts times between places as you type, so you can plan a call without opening a time zone site.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type the time, where it is, and where you want it

Type the time, the place it's in, `to`, and the place you want. The answer shows under **Calculator** at the top of the list, with the date and the UTC offset.

{{< screenshot src="tz-ist-to-tokyo.png" alt="TabCmdr palette with 10am ist to tokyo typed, showing 1:30 PM, the date and JST UTC+09:00" caption="`10am ist to tokyo` gives 1:30 PM in Tokyo." >}}

Places can be written in several ways:

- **Cities**, like `tokyo`, `london`, `new york` or `bangalore`. TabCmdr knows 358 of them.
- **Countries**, like `uk`.
- **Time zone abbreviations**, like `ist`, `pst`, `est`, `cet` or `jst`.
- **UTC offsets**, like `10am utc+5:30 to gmt-8`.

Times can be `10am`, `10:30pm`, `noon`, `midnight`, `22:00` or `2200 hrs`.

### Step 3: Press Enter to copy

The answer row is already highlighted. Press {{< kbd "Enter" >}} and TabCmdr copies the time, date and zone as one line, then closes the palette. A message starting with "Copied" shows that line at the bottom of the page.

## Convert one time to several places {.way-tabcmdr}

List the places after `to` or `in`, separated by commas or `and`. Each place gets its own row with its time, date and zone.

{{< screenshot src="tz-one-time-three-zones.png" alt="TabCmdr palette with 10:30pm ist in pst, est and uk typed, showing one row each for PST, EST and UK" caption="`10:30pm ist in pst, est and uk` shows all three at once." >}}

Press {{< kbd "Enter" >}} on the card to copy every row, one line per place. When a place is already on the next day, or still on the day before, its date says `next day` or `previous day`.

To see every time zone in a country, type `time in usa` or `time zones in australia`.

## Pick a date, or use your own time {.way-tabcmdr}

- **Another day.** Add a day or date to the start: `tomorrow`, `friday`, `25 dec` or `2026-12-25`. For example, `friday 4pm sydney to london`.
- **Your own time zone.** Leave out the second place: `10am pst` converts 10 AM Pacific time to your time. To go the other way, type `10am to pst`.
- **Right now.** Type `time in tokyo` to see the current time there.

Abbreviations follow daylight saving time. `pst` means the time in Los Angeles, so in summer the card shows PDT. In the same way, London shows as BST in summer and GMT in winter: `25 dec 9am london to tokyo` starts from 9:00 AM GMT.

## If no answer shows up {.way-tabcmdr}

- **The connecting word is missing.** Put `to` or `in` between the two places, like `10am ist to jst`.
- **The place isn't recognised.** Try the nearest big city, or a time zone abbreviation like `cet`.
- **You meant a timestamp.** Unix times like `unix 1713000000` work too. The [time zones page]({{< relref "/features/time-zones" >}}) covers them.
