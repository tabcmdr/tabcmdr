---
title: "How to Use YouTube Keyboard Shortcuts | TabCmdr"
linkTitle: "YouTube keyboard shortcuts"
description: "The YouTube player shortcuts for pausing, skipping, volume and speed, plus how to run 25 YouTube actions by name from the TabCmdr palette on any video."
ogTitle: "Control YouTube without hunting for the right key"
ogDescription: "K pauses, J and L skip 10 seconds, F goes full screen. Or press ⌘K with TabCmdr and type seek, speed or captions."
ogImage: youtube-shortcuts-seek.png
imageAlt: "TabCmdr palette on a YouTube video with seek typed, listing Seek Back 5 Seconds, Seek Forward 5 Seconds, Seek Back 10 Seconds and Seek Forward 10 Seconds"
cardText: "YouTube's player shortcuts, plus how to pause, skip, change speed and more by typing the action's name."
heading: "How to use YouTube keyboard shortcuts"
lead: "Press K to pause, J and L to jump 10 seconds and F for full screen. Or press ⌘K with TabCmdr on YouTube and type what you want, such as seek or speed."
date: 2026-10-19
lastmod: 2026-10-19
weight: 430
group: page
icon: i-play
feature: site-shortcuts
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Control a YouTube video in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On a YouTube video page. Ctrl+K on Windows and Linux."
  - title: "Type the action"
    typed: "seek"
    text: "YouTube actions show under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "TabCmdr does it on the video."
faqTitle: "Questions about YouTube shortcuts"
faq:
  - question: "How do I see all YouTube keyboard shortcuts?"
    answer: "Press Shift and ? on a YouTube page. YouTube shows the list of its keyboard shortcuts."
  - question: "How do I skip forward or back 10 seconds on YouTube?"
    answer: "Press L to go forward 10 seconds and J to go back. With TabCmdr, run Seek Forward 10 Seconds or Seek Back 10 Seconds."
  - question: "How do I change the playback speed with the keyboard?"
    answer: "Press > to speed the video up and < to slow it down. In TabCmdr, Increase Playback Speed and Decrease Playback Speed change it by 0.25x at a time, and Normal Speed (1x) puts it back."
  - question: "Does it matter what's focused on the page?"
    answer: "Not for TabCmdr's playback actions. Play / Pause, Mute / Unmute, volume, seeking and speed act on the video itself. YouTube's own arrow-key shortcuts need the seek bar selected."
  - question: "Can I turn off TabCmdr's YouTube actions?"
    answer: "Yes. In TabCmdr's settings, open Sites and untick YouTube under Site Shortcuts. Turn off Enable Site Shortcuts to hide the actions for every site."
relatedTitle: "Related features"
related:
  - site-shortcuts
  - tab-actions
  - custom-shortcut
sitemap:
  priority: 0.7
  changefreq: monthly
---

## YouTube's own shortcuts

The YouTube player has single-key shortcuts. Press {{< kbd "Shift" "?" >}} on YouTube to see the full list.

| To do this | Press |
|---|---|
| Pause or play | {{< kbd "K" >}} |
| Back 10 seconds | {{< kbd "J" >}} |
| Forward 10 seconds | {{< kbd "L" >}} |
| Back or forward 5 seconds | {{< kbd "←" >}} or {{< kbd "→" >}}, with the seek bar selected |
| Volume up or down 5% | {{< kbd "↑" >}} or {{< kbd "↓" >}}, with the seek bar selected |
| Mute or unmute | {{< kbd "M" >}} |
| Full screen | {{< kbd "F" >}} |
| Captions | {{< kbd "C" >}} |
| Miniplayer | {{< kbd "I" >}} |
| Next video | {{< kbd "Shift" "N" >}} |
| Faster or slower | {{< kbd ">" >}} or {{< kbd "<" >}} |
| Back to the start | {{< kbd "0" >}} |

Source: YouTube's [keyboard shortcuts](https://support.google.com/youtube/answer/7631406) help page, checked in October 2026.

## Run YouTube actions by name with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. On youtube.com it adds 25 YouTube actions to its search box. Playback actions act on the video itself, so it doesn't matter what's focused on the page.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette on a video

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on a YouTube video page.

### Step 2: Type the action

Type a word from the action's name. `seek` lists the four ways to jump back or forward. YouTube actions sit under Commands, marked Page command.

{{< screenshot src="youtube-shortcuts-seek.png" alt="TabCmdr palette on a YouTube video with seek typed, listing Seek Back 5 Seconds, Seek Forward 5 Seconds, Seek Back 10 Seconds and Seek Forward 10 Seconds" caption="`seek` lists the four seek actions." >}}

### Step 3: Press Enter

The palette closes and the video jumps. `speed` finds the three speed actions: each press of Increase Playback Speed adds 0.25x, and Normal Speed (1x) resets it.

{{< screenshot src="youtube-shortcuts-speed.png" alt="TabCmdr palette on a YouTube video with speed typed, showing Increase Playback Speed, Decrease Playback Speed and Normal Speed (1x)" caption="`speed` finds Increase Playback Speed, Decrease Playback Speed and Normal Speed (1x)." >}}

## All 25 YouTube actions {.way-tabcmdr}

| Group | Actions |
|---|---|
| Playback | Play / Pause, Mute / Unmute, Volume Up (+10%), Volume Down (-10%), Seek Back 5 Seconds, Seek Forward 5 Seconds, Seek Back 10 Seconds, Seek Forward 10 Seconds, Go to Beginning |
| Speed | Increase Playback Speed, Decrease Playback Speed, Normal Speed (1x) |
| Player | Toggle Fullscreen, Toggle Theater Mode, Toggle Miniplayer, Toggle Captions, Next Video |
| Video | Like Video, Dislike Video, Subscribe / Unsubscribe |
| Go to | Focus Search Box, Go to YouTube Home, Go to Subscriptions, Go to Watch History, Go to Library |

Player and Video actions click the matching button on the YouTube page for you.

## Turn YouTube actions off {.way-tabcmdr}

Open TabCmdr's settings, choose **Sites** and find **Site Shortcuts**, which is marked Experimental. Untick **YouTube** to keep its actions out of the palette, or turn off **Enable Site Shortcuts** to hide the actions for every site.

{{< screenshot src="youtube-site-shortcuts-setting.png" alt="TabCmdr settings, Sites pane, Site Shortcuts section with Enable Site Shortcuts on and YouTube among the ticked sites" caption="Each supported site has its own tick box under Site Shortcuts." >}}
