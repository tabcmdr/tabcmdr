---
title: "How to Use GitHub Keyboard Shortcuts | TabCmdr"
linkTitle: "GitHub keyboard shortcuts"
description: "See GitHub's own shortcuts with ?, jump between repository tabs with G and a letter, or run 17 GitHub actions by name from the TabCmdr palette."
ogTitle: "GitHub shortcuts you don't have to memorize"
ogDescription: "Press ? on GitHub for its shortcut list, or press ⌘K with TabCmdr and type issues, pull requests or new issue."
ogImage: github-shortcuts-go-to.png
imageAlt: "TabCmdr palette on GitHub with go to typed, listing GitHub actions such as Go to Issues Tab and Go to Actions Tab"
cardText: "GitHub's own shortcut keys, plus how to run 17 GitHub actions by typing their name."
heading: "How to use GitHub keyboard shortcuts"
lead: "Press ? on any GitHub page to see its shortcuts, such as G then I for Issues. Or press ⌘K with TabCmdr and type what you want, like issues or new pull request."
date: 2026-10-19
lastmod: 2026-10-19
weight: 410
group: page
icon: i-code
feature: site-shortcuts
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Run a GitHub action in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any github.com page. Ctrl+K on Windows and Linux."
  - title: "Type the action"
    typed: "issues"
    text: "GitHub actions show under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "TabCmdr opens that page of the repository you're in."
faqTitle: "Questions about GitHub shortcuts"
faq:
  - question: "How do I see all GitHub keyboard shortcuts?"
    answer: "Press ? on any GitHub page. A dialog lists the shortcuts that work on the page you're on."
  - question: "How do I go to Issues or Pull requests with the keyboard?"
    answer: "On a repository page, press G then I for Issues, or G then P for Pull requests. With TabCmdr, press ⌘K or Ctrl+K and type issues or pull requests instead."
  - question: "Why don't GitHub's single-key shortcuts work?"
    answer: "GitHub lets you turn off character key shortcuts in your accessibility settings. Shortcuts that use Ctrl or Command keep working when you do."
  - question: "Do TabCmdr's GitHub actions work outside a repository?"
    answer: "Go to Notifications, Go to Explore, Go to Dashboard and Focus Search Bar work on any GitHub page. The repository actions, such as Go to Issues Tab, need you to be inside a repository, and Open Blame View needs a file page."
  - question: "Do they work on GitHub Enterprise?"
    answer: "TabCmdr adds its GitHub actions on github.com and its subdomains. A GitHub Enterprise Server on your company's own address isn't covered."
  - question: "Can I turn off TabCmdr's GitHub actions?"
    answer: "Yes. In TabCmdr's settings, open Sites and untick GitHub under Site Shortcuts. Turn off Enable Site Shortcuts to hide the actions for every site."
relatedTitle: "Related features"
related:
  - site-shortcuts
  - page-commands
  - custom-shortcut
sitemap:
  priority: 0.7
  changefreq: monthly
---

## GitHub's own shortcuts

GitHub has keyboard shortcuts on most pages. Press {{< kbd "?" >}} on any page to see the ones that work there.

| To do this | Press |
|---|---|
| See the shortcuts for this page | {{< kbd "?" >}} |
| Focus the search bar | {{< kbd "S" >}} or {{< kbd "/" >}} |
| Go to Code | {{< kbd "G" >}} then {{< kbd "C" >}} |
| Go to Issues | {{< kbd "G" >}} then {{< kbd "I" >}} |
| Go to Pull requests | {{< kbd "G" >}} then {{< kbd "P" >}} |
| Go to Actions | {{< kbd "G" >}} then {{< kbd "A" >}} |
| Go to Wiki | {{< kbd "G" >}} then {{< kbd "W" >}} |
| Go to Discussions | {{< kbd "G" >}} then {{< kbd "G" >}} |
| Open the repository in github.dev | {{< kbd "." >}} |
| Open github.dev in a new tab | {{< kbd ">" >}} |

The G shortcuts work on a repository page. You need to be signed in to use github.dev.

Sources: GitHub Docs [keyboard shortcuts](https://docs.github.com/en/get-started/accessibility/keyboard-shortcuts) and [github.dev](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor) pages, checked in October 2026.

## Run GitHub actions by name with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. On github.com it adds 17 GitHub actions to its search box, so you type what you want instead of remembering which letter does it.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette on GitHub

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on a repository page such as its pull requests.

### Step 2: Type the action

Type a word from the action's name. `go to` lists the pages you can jump to. GitHub actions sit under Commands, marked Page command.

{{< screenshot src="github-shortcuts-go-to.png" alt="TabCmdr palette on GitHub with go to typed, listing Go to Notifications, Go to Explore, Go to Dashboard, Go to Code Tab, Go to Issues Tab and more" caption="`go to` lists the GitHub pages TabCmdr can open." >}}

### Step 3: Press Enter

TabCmdr opens that page of the repository you're in. From the pull requests of `acme/web`, Go to Issues Tab opens the issues of `acme/web`.

`create` finds the two actions that start something new. Create New Pull Request opens the repository's compare page.

{{< screenshot src="github-shortcuts-create.png" alt="TabCmdr palette on GitHub with create typed, showing Create New Issue and Create New Pull Request" caption="`create` finds Create New Issue and Create New Pull Request." >}}

## All 17 GitHub actions {.way-tabcmdr}

| Action | What it does |
|---|---|
| Go to Code Tab | Opens the repository's main page |
| Go to Issues Tab | Opens the repository's issues |
| Go to Pull Requests Tab | Opens the repository's pull requests |
| Go to Actions Tab | Opens the repository's actions |
| Go to Wiki Tab | Opens the repository's wiki |
| Go to Discussions Tab | Opens the repository's discussions |
| Go to Security Tab | Opens the repository's security page |
| Go to Projects Tab | Opens the repository's projects |
| Go to Repo Settings | Opens the repository's settings |
| Create New Issue | Opens a new issue form for the repository |
| Create New Pull Request | Opens the repository's compare page |
| Open in github.dev Editor | Opens the repository in github.dev |
| Open Blame View | Switches a file page to its blame view |
| Go to Notifications | Opens your notifications |
| Go to Explore | Opens Explore |
| Go to Dashboard | Opens your dashboard |
| Focus Search Bar | Puts the cursor in GitHub's search |

The repository actions need you to be inside a repository. On a page such as your notifications, they do nothing. Open Blame View only works on a file page.

## Turn GitHub actions off {.way-tabcmdr}

Open TabCmdr's settings, choose **Sites** and find **Site Shortcuts**, which is marked Experimental. Untick **GitHub** to keep its actions out of the palette, or turn off **Enable Site Shortcuts** to hide the actions for every site.

{{< screenshot src="github-site-shortcuts-setting.png" alt="TabCmdr settings, Sites pane, Site Shortcuts section with Enable Site Shortcuts on and GitHub, YouTube, Gmail, Notion, Figma, Discord, GitLab, Jira and X ticked" caption="Each supported site has its own tick box under Site Shortcuts." >}}
