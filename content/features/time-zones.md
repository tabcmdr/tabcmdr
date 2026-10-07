---
title: "Check the Time in Another City from Chrome | TabCmdr"
linkTitle: "Time zones"
description: "What time is it in Tokyo right now? Type time in tokyo in the TabCmdr palette to see the time, date and UTC offset, or convert a meeting time or a timestamp."
ogTitle: "The time anywhere, without a search"
ogDescription: "Type time in tokyo, 2pm london to tokyo or unix 1713000000. The time, date and zone show at the top of the palette, and Enter copies them."
weight: 210
date: 2026-10-06
lastmod: 2026-10-06
group: answers
icon: i-clock
eyebrow: "Time zones"
heading: "What time is it in Tokyo?"
headingMuted: "Ask the palette and copy it."
lead: "Check the time in another city without a search. Press [kbd:mod][kbd:K], type `time in tokyo`, and see the time, date and UTC offset there."
howTitle: "Check a time in three steps"
demo:
  name: answers
  layout: split
  query: "time in tokyo"
  examples: ["time in tokyo", "time in london", "time in new york", "time in sydney", "now + 3 days", "now - 90 minutes", "unix 1713000000", "time to unix"]
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Ask for the time"
    typed: "time in tokyo"
    text: "A city, a zone like PST, or a date sum."
  - title: "Copy it"
    keys: ["↵"]
    text: "Time, date and zone go to your clipboard."
showcase:
  title: "What you can ask"
  lead: "Times are worked out from the time zone data built into your browser, so nothing is looked up online."
  rows:
    - title: "Any city, with the date and offset"
      text: "Type `time in` and a city. You see the time there, the date there, and the zone with its offset, such as JST · UTC+09:00. Press [kbd:↵] and you get all of it in one line, like 3:24 AM · Thu, 08 Oct 2026 (JST, UTC+09:00)."
      points:
        - "Zone names work: `time in pst`, `time in ist` or `time in cet`."
        - "So do other ways of asking: `Tokyo time` or `what time is it in lisbon`."
        - "Name a country with several zones, like `time in usa`, to see all of them in one card."
      mock: mocks/preview
      preview:
        type: answer
        query: "time in tokyo"
        group: "Calculator"
        rows:
          - { expression: "time in tokyo", result: "3:24 AM", meta: "JST · UTC+09:00" }
    - title: "Convert a meeting time"
      text: "Type a time, where it is, and where you want it. `2pm london to tokyo` shows 10:00 PM, the same moment in Tokyo. The time is taken as today in the first place, and the date shown is the date in the second."
      points:
        - "Zone names work on either side: `9:30 am pst in berlin`."
        - "Use `to` or `in` between the two places."
      mock: mocks/preview
      preview:
        type: answer
        query: "2pm london to tokyo"
        group: "Calculator"
        rows:
          - { expression: "2 PM BST → tokyo", result: "10:00 PM", meta: "JST · UTC+09:00" }
    - title: "Date math and Unix timestamps"
      text: "`now + 3 days` shows the time and date three days from now, and `now - 90 minutes` goes back. `unix 1713000000` turns a timestamp into a date in your own zone. `time to unix` gives the current timestamp in seconds."
      points:
        - "Add or take away seconds, minutes, hours, days, weeks, months or years."
        - "Start with `today` for a date only: `today + 1 year`."
        - "Timestamps longer than 10 digits are read as milliseconds. Add a place to see one somewhere else: `unix 1713000000 to tokyo`."
      mock: mocks/palette
      palette:
        query: "time to unix"
        toast: "Copied 1791277200"
        groups:
          - label: "Calculator"
            rows:
              - { glyph: i-clock, title: "1791277200", sub: "Unix timestamp (seconds)", selected: true }
          - label: "Search"
            rows:
              - { host: google.com, title: "Search \"time to unix\" on Google", sub: "Search with Google", type: i-search }
detailsTitle: "More reasons to check the time this way"
details:
  - icon: i-globe
    title: "Cities, zones and countries"
    text: "Common cities and short names like PST, CET and IST are built in. Full zone names such as `America/Denver` work too."
  - icon: i-sync
    title: "Daylight saving included"
    text: "Offsets follow the date, so you see BST, CEST or EDT when summer time applies and GMT, CET or EST when it doesn't."
  - icon: i-layers
    title: "Whole countries at once"
    text: "`time in usa` lists ten zones, from Atlantic to Chamorro. `time in australia` lists seven. Enter copies them all."
  - icon: i-wifi-off
    title: "Works offline"
    text: "Nothing is fetched. The answer comes from the time zone data your browser already has."
  - icon: i-zap
    title: "At the top of the list"
    text: "The answer shows above your tabs, so it's the row that's already selected."
  - icon: i-calculator
    title: "Math in the same box"
    text: "Sums and unit conversions like `90 kg in lbs` are answered the same way."
faqTitle: "Questions about time zones"
faq:
  - question: "How do I check the time in another city in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux and type `time in` and the city, like `time in tokyo`. The time, date and UTC offset show at the top. Press Enter to copy them."
  - question: "Can I convert a meeting time between time zones?"
    answer: "Yes. Type `2pm london to tokyo` or `9:30 am pst in berlin`. The time is read as today in the first place and shown for the second."
  - question: "How do I convert a Unix timestamp to a date?"
    answer: "Type `unix` and the number, like `unix 1713000000`. It shows in your own zone. Add `to tokyo` or another place to see it there."
  - question: "How do I get the current Unix timestamp?"
    answer: "Type `time to unix` or `now unix`. You get the current time in seconds, and Enter copies it."
  - question: "How do I add days to today's date?"
    answer: "Type `now + 3 days` for a date and time, or `today + 2 weeks` for the date only. Months and years work too."
  - question: "Does it know about daylight saving time?"
    answer: "Yes. The offset is worked out for the date in question, so London shows BST in summer and GMT in winter."
related:
  - calculator
  - developer-tools
  - weather
sitemap:
  priority: 0.8
  changefreq: monthly
---
