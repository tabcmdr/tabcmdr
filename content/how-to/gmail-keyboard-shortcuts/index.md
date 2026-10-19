---
title: "How to Use Gmail Keyboard Shortcuts | TabCmdr"
linkTitle: "Gmail keyboard shortcuts"
description: "Turn on Gmail's keyboard shortcuts and see the full list with ?, or run 23 Gmail actions by name from the TabCmdr palette, with no setting to change first."
ogTitle: "Gmail shortcuts, with or without memorizing them"
ogDescription: "Turn on Gmail's shortcuts in its settings, or press ⌘K with TabCmdr and type archive, compose or go to sent."
ogImage: gmail-shortcuts-go-to.png
imageAlt: "TabCmdr palette on Gmail with go to typed, listing Go to Inbox, Go to Starred, Go to Drafts and other Gmail folders"
cardText: "Turn on Gmail's own shortcuts, or run 23 Gmail actions such as Archive and Go to Sent Mail by typing their name."
heading: "How to use Gmail keyboard shortcuts"
lead: "Turn on keyboard shortcuts in Gmail's settings, then press ? to see them all. Or press ⌘K with TabCmdr and type an action, such as archive or go to sent."
date: 2026-10-19
lastmod: 2026-10-19
weight: 420
group: page
icon: i-message
feature: site-shortcuts
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Run a Gmail action in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On mail.google.com. Ctrl+K on Windows and Linux."
  - title: "Type the action"
    typed: "archive"
    text: "Gmail actions show under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "TabCmdr opens the folder or clicks the button."
faqTitle: "Questions about Gmail shortcuts"
faq:
  - question: "How do I turn on keyboard shortcuts in Gmail?"
    answer: "In Gmail, click Settings at the top right, then See all settings. In the Keyboard shortcuts section, select Keyboard shortcuts on, then click Save Changes at the bottom of the page."
  - question: "How do I see all Gmail keyboard shortcuts?"
    answer: "Press Shift and / (the ? key) while Gmail is open. Gmail shows a list of its shortcuts."
  - question: "Do TabCmdr's Gmail actions need Gmail's keyboard shortcuts turned on?"
    answer: "No. TabCmdr doesn't press Gmail's shortcut keys. It opens the folder's address or clicks the matching button, so the actions work with Gmail's shortcuts on or off."
  - question: "Why does Archive or Delete do nothing?"
    answer: "Those actions click Gmail's Archive or Delete button at the top of the list, which acts on the messages you've selected. Check the box next to a message first, then run the action again."
  - question: "Can I turn off TabCmdr's Gmail actions?"
    answer: "Yes. In TabCmdr's settings, open Sites and untick Gmail under Site Shortcuts. Turn off Enable Site Shortcuts to hide the actions for every site."
relatedTitle: "Related features"
related:
  - site-shortcuts
  - page-commands
  - custom-shortcut
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Gmail's own shortcuts

Gmail has keyboard shortcuts, but most of them only work after you turn them on:

1. In Gmail, click **Settings** at the top right, then **See all settings**.
2. In the **Keyboard shortcuts** section, select **Keyboard shortcuts on**.
3. Click **Save Changes** at the bottom of the page.

| To do this | Press |
|---|---|
| See all shortcuts | {{< kbd "Shift" "/" >}} |
| Compose | {{< kbd "C" >}} |
| Archive | {{< kbd "E" >}} |
| Delete | {{< kbd "#" >}} |
| Mark as read | {{< kbd "Shift" "I" >}} |
| Mark as unread | {{< kbd "Shift" "U" >}} |
| Go to Inbox | {{< kbd "G" >}} then {{< kbd "I" >}} |
| Go to Starred | {{< kbd "G" >}} then {{< kbd "S" >}} |
| Go to Sent | {{< kbd "G" >}} then {{< kbd "T" >}} |
| Go to Drafts | {{< kbd "G" >}} then {{< kbd "D" >}} |
| Search mail | {{< kbd "/" >}} |

Source: Google's [Gmail keyboard shortcuts](https://support.google.com/mail/answer/6594) help page, checked in October 2026.

## Run Gmail actions by name with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. On mail.google.com it adds 23 Gmail actions to its search box. They don't press Gmail's shortcut keys: TabCmdr opens the folder's address or clicks the matching button, so you don't have to turn anything on in Gmail first.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette in Gmail

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, with Gmail open.

### Step 2: Type the action

Type a word from the action's name. `go to` lists the folders and pages you can jump to. Gmail actions sit under Commands, marked Page command.

{{< screenshot src="gmail-shortcuts-go-to.png" alt="TabCmdr palette on Gmail with go to typed, listing Go to Inbox, Go to Starred, Go to Drafts, Go to Spam, Go to Trash, Go to Sent Mail, Go to All Mail and Go to Contacts" caption="`go to` lists the Gmail folders TabCmdr can open." >}}

### Step 3: Press Enter

For a folder, TabCmdr opens it in the tab you're on. For a message action such as Mark as Read, it clicks Gmail's button for you.

{{< screenshot src="gmail-shortcuts-mark-as.png" alt="TabCmdr palette on Gmail with mark as typed, showing Mark as Read and Mark as Unread" caption="`mark as` finds Mark as Read and Mark as Unread." >}}

Message actions click the button you'd click yourself, so select a message first by checking the box next to it.

## All 23 Gmail actions {.way-tabcmdr}

| Group | Actions |
|---|---|
| Folders | Go to Inbox, Go to Starred, Go to Sent Mail, Go to Drafts, Go to All Mail, Go to Spam, Go to Trash |
| Other pages | Go to Gmail Settings opens Gmail's general settings. Go to Contacts opens Google Contacts in a new tab. |
| Writing | Compose New Email, Send Email, Discard Draft, Attach Files |
| Messages | Archive, Delete, Mark as Read, Mark as Unread, Snooze, Move to..., Label as..., Report Spam, Select All |
| Search | Focus Search Mail puts the cursor in Gmail's search box |

## Turn Gmail actions off {.way-tabcmdr}

Open TabCmdr's settings, choose **Sites** and find **Site Shortcuts**, which is marked Experimental. Untick **Gmail** to keep its actions out of the palette, or turn off **Enable Site Shortcuts** to hide the actions for every site.

{{< screenshot src="gmail-site-shortcuts-setting.png" alt="TabCmdr settings, Sites pane, Site Shortcuts section with Enable Site Shortcuts on and Gmail among the ticked sites" caption="Each supported site has its own tick box under Site Shortcuts." >}}
