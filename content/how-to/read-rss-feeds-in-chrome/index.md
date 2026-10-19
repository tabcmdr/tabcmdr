---
title: "How to Read RSS Feeds in Chrome | TabCmdr"
linkTitle: "Read RSS feeds in Chrome"
description: "Add up to 20 RSS or Atom feeds to TabCmdr and read the newest headlines from all of them in one list from any Chrome page. Filter by feed and open articles."
ogTitle: "Your feeds' newest headlines on any page"
ogDescription: "Add your feed links once, then press ⌘K and type :rss to see the latest articles from every feed in one list."
ogImage: rss-reader-headlines.png
imageAlt: "TabCmdr RSS reader listing the newest articles from three placeholder feeds with feed tags and times"
cardText: "Add your RSS or Atom feeds once, then read the newest headlines from all of them in one list from any page."
heading: "How to read RSS feeds in Chrome"
lead: "Add HTTPS feed links in TabCmdr's RSS settings, then press ⌘K and type :rss to read the newest headlines from all your feeds in one list, without a reader app."
date: 2026-10-19
lastmod: 2026-10-19
weight: 640
group: tools
icon: i-rss
feature: rss-reader
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Read your feeds in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Open the RSS reader"
    typed: ":rss"
    text: "Headlines from every feed, newest first."
  - title: "Press Enter on one"
    keys: ["↵"]
    text: "The article opens in a new tab."
faqTitle: "Questions about reading RSS in TabCmdr"
faq:
  - question: "Which feed formats work?"
    answer: "RSS 2.0 and Atom. The feed address has to start with https://."
  - question: "How many feeds can I add?"
    answer: "Up to 20. TabCmdr reads up to 20 articles from each one."
  - question: "Which feeds are there to start with?"
    answer: "Until you change the list, TabCmdr uses six sample feeds: BBC News World, The New York Times, Hacker News, The Verge, Smashing Magazine and Ars Technica. Remove any of them in RSS settings."
  - question: "How often do feeds update?"
    answer: "TabCmdr keeps each feed for 15 minutes before fetching it again. To fetch every feed right now, choose Refresh Feeds under Quick Actions at the bottom of the list."
  - question: "Can I search my headlines?"
    answer: "Yes. Type after `:rss` to filter by article title or feed name, or click a feed's tag at the top to see only that feed."
relatedTitle: "Related features"
related:
  - rss-reader
  - weather
  - todo-list
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Read your feeds from any page with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its RSS reader pulls the newest articles from all the feeds you add into one list in the palette, so you can catch up from whatever page you're on.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Add your feeds

Open the palette, type `:rss` and choose **RSS Settings** under **Quick Actions** at the bottom of the list. You can also get there from TabCmdr's settings: choose **Tools** in the sidebar and click the settings button next to **RSS Reader**.

Paste a feed address into the box under **Your Feeds** and click **Add Feed**. The address has to start with `https://`, and you can add up to 20 feeds. Click the dot next to a feed to give it a color, or **Remove** to take it off the list.

{{< screenshot src="rss-reader-feed-settings.png" alt="TabCmdr RSS Reader settings with three feed addresses, each with a colored dot and a Remove button, and an Add Feed box" caption="Three feeds, each with its own color." >}}

Below your feeds, **Sample Feeds** lists well-known feeds you can add with one click.

### Step 2: Open the reader

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, and type `:rss`. Articles from every feed are listed newest first, each with its feed's name and how long ago it was posted.

{{< screenshot src="rss-reader-headlines.png" alt="TabCmdr palette with the RSS reader open, feed filter tags at the top and articles from three feeds sorted newest first" caption="The newest articles from all your feeds in one list." >}}

To see one feed, click its tag at the top of the list. To find an article, type a word from its title or the feed's name.

### Step 3: Open an article

Move to an article with {{< kbd "↓" >}} and {{< kbd "↑" >}} and press {{< kbd "Enter" >}}. It opens in a new tab and the palette closes.

## Keep the list fresh {.way-tabcmdr}

TabCmdr fetches your feeds in the background and keeps them for 15 minutes. **Refresh Feeds** at the bottom of the list fetches them all again right away. If a feed can't be reached, the list shows it as an error and the other feeds still load.
