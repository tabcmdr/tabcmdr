---
title: "How to Check the Weather from Any Chrome Tab | TabCmdr"
linkTitle: "Check the weather from any tab"
description: "Save up to 15 cities in TabCmdr and check each one's temperature, feels-like, wind, sunrise and local time from any Chrome tab, without opening a weather site."
ogTitle: "The weather in all your cities, one shortcut away"
ogDescription: "Save the cities you care about, then press ⌘K and type :wx to see current conditions for every one of them."
ogImage: weather-cities-palette.png
imageAlt: "TabCmdr weather list showing current conditions for Jaipur, New York, London, Tokyo and San Francisco"
cardText: "Save up to 15 cities and see the temperature, wind and local time in each from any tab with :wx."
heading: "How to check the weather from any Chrome tab"
lead: "Add up to 15 cities in TabCmdr's weather settings, then press ⌘K and type :wx. Each city shows its temperature, feels-like, wind and local time from Open-Meteo."
date: 2026-10-19
lastmod: 2026-10-19
weight: 650
group: tools
icon: i-cloud
feature: weather
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "See the weather in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Open the weather list"
    typed: ":wx"
    text: "Every saved city, in your order."
  - title: "Read or refresh"
    keys: ["↵"]
    text: "Refresh Weather fetches the latest conditions."
faqTitle: "Questions about weather in TabCmdr"
faq:
  - question: "Where does the weather data come from?"
    answer: "From Open-Meteo, a free weather service that doesn't need an API key. TabCmdr asks it for the places you saved."
  - question: "How many cities can I add?"
    answer: "Up to 15. TabCmdr starts with 10: Jaipur, New York, London, Tokyo, San Francisco, Paris, Shanghai, Sydney, Cairo and São Paulo. Remove the ones you don't need."
  - question: "Can I see Fahrenheit?"
    answer: "Yes. Each city shows its temperature in both Celsius and Fahrenheit, such as 11°C / 52°F."
  - question: "How often does the weather update?"
    answer: "TabCmdr keeps each city's conditions for an hour. Choose Refresh Weather at the bottom of the list to fetch them again right away."
  - question: "Can I see one city's weather all the time?"
    answer: "Yes. Click Pin next to a city in weather settings. Its temperature then shows in the bar at the bottom of the palette every time you open it."
relatedTitle: "Related features"
related:
  - weather
  - time-zones
  - rss-reader
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Check the weather from any page with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its weather list shows current conditions for every city you save, so you can check the weather at home and where your team is without opening a weather site.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Choose your cities

Open the palette, type `:wx` and choose **Weather Settings** under **Quick Actions** at the bottom of the list. You can also get there from TabCmdr's settings: choose **Tools** in the sidebar and click the settings button next to **Weather**.

Under **Add Location**, type a city and click **Search**, then click **Add** next to the right one. You can save up to 15 places. Drag the handle on the left of a city to change the order, or click **Remove** to take it off.

{{< screenshot src="weather-locations-settings.png" alt="TabCmdr Weather settings with an Add Location search box and saved cities, with London pinned" caption="Your cities, in the order they'll appear. London is pinned." >}}

TabCmdr starts with 10 cities, from Jaipur to São Paulo, so remove the ones you don't need.

### Step 2: Open the weather list

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, and type `:wx`. Each city shows:

- the temperature in Celsius and Fahrenheit, and the sky, such as **Overcast**,
- the local time there,
- feels-like, the day's low and high, humidity, UV index and wind,
- sunrise and sunset.

{{< screenshot src="weather-cities-palette.png" alt="TabCmdr palette with the weather list open, showing temperature, conditions, local time, wind, sunrise and sunset for several cities" caption="Live conditions for every saved city. The pinned city's temperature shows at the bottom right." >}}

### Step 3: Refresh when you need to

TabCmdr keeps each city's conditions for an hour. **Refresh Weather** under **Quick Actions** at the bottom of the list fetches them again right away.

## Pin a city to the palette {.way-tabcmdr}

In weather settings, click **Pin** next to one city. Its temperature then shows in the bar at the bottom of the palette whenever you open it, without opening the weather list. Click **Unpin** to remove it.

## Find a city's weather from the normal search {.way-tabcmdr}

Once the weather list has loaded, typing `weather` or a city name in the normal search also shows weather cards for your saved cities, next to your tabs and other results.

{{< screenshot src="weather-search-results.png" alt="TabCmdr palette with weather typed in the normal search, showing the Weather tool and weather cards for saved cities" caption="`weather` in the normal search shows the Weather tool and your cities." >}}
