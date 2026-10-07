---
title: "Check the Weather in Several Cities at Once | TabCmdr"
linkTitle: "Weather"
description: "Checking the weather where your team or family lives? Type :wx on any page to see up to 15 cities at once, with temperature, wind and local time. No API key."
ogTitle: "Weather for all your cities in one shortcut"
ogDescription: "Type :wx on any page to see current conditions for up to 15 places, from Open-Meteo. Temperature in °C and °F, feels like, UV, wind, sunrise and local time."
weight: 280
date: 2026-10-06
lastmod: 2026-10-06
group: tools
icon: i-cloud
token: ":wx"
eyebrow: "Weather"
heading: "What's the weather where they are?"
headingMuted: "See every city at once."
lead: "Check current conditions for up to 15 cities without opening a weather site. Press [kbd:mod][kbd:K] and type `:wx`. No API key to set up."
demo:
  name: shortcut
  layout: split
  token: ":wx"
howTitle: "Check the weather in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Open Weather"
    typed: ":wx"
    text: "A card for each of your places loads."
  - title: "Narrow it down"
    typed: "london"
    text: "Type a city or country to see only that card."
showcase:
  title: "How the weather tool works"
  lead: "Each place gets one card with the conditions right now and today's range. The data comes from Open-Meteo, a free weather service, so there's no account or key to set up."
  rows:
    - title: "Everything on one card"
      text: "The left side shows the temperature in both °C and °F, with the sky right now, such as ⛅ Partly cloudy or 🌧️ Light rain. The right side shows the city and country with its local time, then a line of details and the sunrise and sunset times."
      points:
        - "Feels like, today's low and high, humidity, UV index, and wind speed in km/h with its direction."
        - "Local time for each city, so you know if it's a good time to call."
        - "Cards show in the order you set on the settings page."
      mock: mocks/preview
      preview:
        type: list
        variant: weather
        rows:
          - { label: "Jaipur, India", value: "31°C / 88°F" }
          - { label: "London, United Kingdom", value: "14°C / 57°F" }
          - { label: "Tokyo, Japan", value: "22°C / 72°F" }
    - title: "Your places, up to 15"
      text: "TabCmdr starts with ten cities, including Jaipur, New York, London, Tokyo and Sydney. To change them, choose Weather Settings at the bottom of the list, or Configure next to Weather under Tools in settings. Search for a city, click Add, and drag the handle to put your places in order."
      points:
        - "Remove the cities you don't need to make room for your own."
        - "Pin one city and its temperature shows in the footer bar of the palette, without opening Weather."
        - "Show in All Tab Search lets a city's card appear in your normal search once Weather has loaded."
      mock: mocks/settings
      settings:
        title: "Tools"
        rows:
          - { label: "RSS Reader", desc: "Latest headlines from your configured RSS/Atom feeds", toggle: "on" }
          - { label: "Weather", desc: "Current conditions for your saved locations via Open-Meteo", toggle: "on" }
        checks:
          - { label: "Show in All Tab Search", on: true }
    - title: "Find one city fast"
      text: "With Weather open, start typing and the list narrows to places whose city or country matches. Type `japan` or `tokyo` and only the Tokyo card is left. Clear the box to see them all again."
      points:
        - "Refresh Weather at the bottom of the list fetches new conditions right away."
        - "Press [kbd:Esc] to go back to the Tools list."
      mock: mocks/preview
      preview:
        type: list
        variant: weather
        rows:
          - { label: "Tokyo, Japan", value: "22°C / 72°F" }
detailsTitle: "Small things that make it useful"
details:
  - icon: i-key
    title: "No API key"
    text: "Open-Meteo is free to use, so there's nothing to sign up for and no key to paste in."
  - icon: i-clock
    title: "Local time on every card"
    text: "Each card shows the current time in that city, next to its name."
  - icon: i-sync
    title: "Updates every hour"
    text: "Conditions are kept for an hour, then fetched again the next time you open Weather."
  - icon: i-pin
    title: "Pin one to the footer"
    text: "A pinned city's temperature sits at the bottom of the palette, in °C and °F."
  - icon: i-globe
    title: "Any city Open-Meteo knows"
    text: "Search by name on the settings page, like London, and pick the right one from the list."
  - icon: i-sliders
    title: "Turn it off if you like"
    text: "Switch off Weather under Tools in settings and it's hidden from the palette."
faqTitle: "Questions about the weather tool"
faq:
  - question: "How do I check the weather in Chrome without opening a website?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux and type `:wx`. A card for each of your places shows the temperature, the sky, feels like, humidity, UV, wind and sunrise and sunset."
  - question: "How many cities can I add?"
    answer: "Up to 15. TabCmdr starts with ten, so remove the ones you don't need to make room for your own."
  - question: "How do I add a city?"
    answer: "Choose Weather Settings at the bottom of the weather list. Type a city name in the search box, then click Add next to the right result."
  - question: "Can I switch between Celsius and Fahrenheit?"
    answer: "There's no setting to switch, because the main temperature shows both, like 14°C / 57°F. Feels like and the day's low and high are in °C, and wind is in km/h."
  - question: "Do I need an API key?"
    answer: "No. The weather comes from Open-Meteo, which is free and needs no key or account."
  - question: "How often does the weather update?"
    answer: "Conditions are kept for an hour. After that, opening Weather fetches them again. Choose Refresh Weather to update right away."
related:
  - time-zones
  - rss-reader
  - todo-list
sitemap:
  priority: 0.8
  changefreq: monthly
---
