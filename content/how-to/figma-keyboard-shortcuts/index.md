---
title: "How to Use Figma Keyboard Shortcuts | TabCmdr"
linkTitle: "Figma keyboard shortcuts"
description: "Open Figma's shortcuts panel, learn the keys for frames, shapes and text, or pick a Figma tool by name from the TabCmdr palette on figma.com in Chrome."
ogTitle: "Figma shortcuts by name, not by memory"
ogDescription: "Ctrl+Shift+? opens Figma's shortcuts panel. Or press ⌘K with TabCmdr on figma.com and type rectangle, text or frame."
ogImage: figma-shortcuts-tools.png
imageAlt: "TabCmdr palette on a Figma file with tool typed, listing Line Tool, Arrow Tool, Frame Tool, Text Tool and other Figma tools"
cardText: "Figma's shortcut keys for frames, shapes and text, plus how to pick a Figma tool by typing its name."
heading: "How to use Figma keyboard shortcuts"
lead: "Press Ctrl+Shift+? in Figma to open its shortcuts panel, or R for a rectangle and T for text. With TabCmdr, press ⌘K on figma.com and type a tool's name."
date: 2026-10-19
lastmod: 2026-10-19
weight: 450
# Held back: TabCmdr sends synthetic key events to Figma, and nobody has confirmed on a
# signed-in live Figma file that Figma acts on them. Test one tool, then remove this line.
draft: true
group: page
icon: i-palette
feature: site-shortcuts
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Pick a Figma tool in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "In a file on figma.com. Ctrl+K on Windows and Linux."
  - title: "Type the tool"
    typed: "rectangle"
    text: "Figma actions show under Commands."
  - title: "Press Enter"
    keys: ["↵"]
    text: "TabCmdr presses Figma's shortcut for it."
faqTitle: "Questions about Figma shortcuts"
faq:
  - question: "How do I see all Figma keyboard shortcuts?"
    answer: "Press Control+Shift+? on a Mac or Ctrl+Shift+? on Windows to open Figma's keyboard shortcuts panel. You can also click Help and resources in the bottom-right corner and choose Keyboard shortcuts."
  - question: "What happens when I pick a Figma action in TabCmdr?"
    answer: "The palette closes and TabCmdr presses Figma's own shortcut for that action on the page. Rectangle Tool presses R, Text Tool presses T and Pencil Tool presses Shift+P."
  - question: "Does TabCmdr work in the Figma desktop app?"
    answer: "No. TabCmdr is a browser extension, so its Figma actions are there when you use Figma at figma.com in your browser."
  - question: "Can I turn off TabCmdr's Figma actions?"
    answer: "Yes. In TabCmdr's settings, open Sites and untick Figma under Site Shortcuts. Turn off Enable Site Shortcuts to hide the actions for every site."
relatedTitle: "Related features"
related:
  - site-shortcuts
  - color-picker
  - ruler
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Figma's own shortcuts

Figma has a shortcuts panel that lists every key. Open it with {{< kbd "Control" "Shift" "?" >}} on a Mac or {{< kbd "Ctrl" "Shift" "?" >}} on Windows, or click **Help and resources** in the bottom-right corner and choose **Keyboard shortcuts**.

| To do this | Mac | Windows |
|---|---|---|
| Frame tool | {{< kbd "F" >}} or {{< kbd "A" >}} | {{< kbd "F" >}} or {{< kbd "A" >}} |
| Rectangle | {{< kbd "R" >}} | {{< kbd "R" >}} |
| Ellipse | {{< kbd "O" >}} | {{< kbd "O" >}} |
| Line | {{< kbd "L" >}} | {{< kbd "L" >}} |
| Arrow | {{< kbd "Shift" "L" >}} | {{< kbd "Shift" "L" >}} |
| Pencil | {{< kbd "Shift" "P" >}} | {{< kbd "Shift" "P" >}} |
| Text | {{< kbd "T" >}} | {{< kbd "T" >}} |
| Comments | {{< kbd "C" >}} | {{< kbd "C" >}} |
| Duplicate | {{< kbd "⌘" "D" >}} | {{< kbd "Ctrl" "D" >}} |
| Group | {{< kbd "⌘" "G" >}} | {{< kbd "Ctrl" "G" >}} |
| Zoom to fit | {{< kbd "Shift" "1" >}} | {{< kbd "Shift" "1" >}} |
| Zoom to selection | {{< kbd "Shift" "2" >}} | {{< kbd "Shift" "2" >}} |
| Show outlines | {{< kbd "⌘" "Shift" "O" >}} | {{< kbd "Ctrl" "Shift" "O" >}} |
| Create component | {{< kbd "Option" "⌘" "K" >}} | {{< kbd "Ctrl" "Alt" "K" >}} |
| Detach instance | {{< kbd "Option" "⌘" "B" >}} | {{< kbd "Ctrl" "Alt" "B" >}} |
| Assets | {{< kbd "Option" "2" >}} | {{< kbd "Alt" "2" >}} |
| Libraries | {{< kbd "Option" "3" >}} | {{< kbd "Alt" "3" >}} |

Sources: Figma Help Center pages on [using Figma with a keyboard](https://help.figma.com/hc/en-us/articles/360040328653-Use-Figma-products-with-a-keyboard), [shape tools](https://help.figma.com/hc/en-us/articles/360040450133-Shape-tools), [frames](https://help.figma.com/hc/en-us/articles/360041539473-Frames-in-Figma-Design), [the pencil tool](https://help.figma.com/hc/en-us/articles/4402723791511-Sketch-on-the-canvas-with-the-pencil-tool), [the toolbar](https://help.figma.com/hc/en-us/articles/360041064174-Access-design-tools-from-the-toolbar), [designing a file thumbnail](https://help.figma.com/hc/en-us/articles/23510169950871-Design-a-file-thumbnail), [layer outlines](https://help.figma.com/hc/en-us/articles/5724448965527-View-layer-outlines-in-Figma-Design), [creating a component](https://help.figma.com/hc/en-us/articles/39746162998551-Create-a-simple-button-component), [detaching an instance](https://help.figma.com/hc/en-us/articles/360038665754-Detach-an-instance-from-the-component), [the left sidebar](https://help.figma.com/hc/en-us/articles/360039831974-Explore-the-navigation-bar-and-left-sidebar) and [accessibility](https://help.figma.com/hc/en-us/articles/35063862380311-Accessibility-at-Figma), checked in October 2026.

## Pick Figma tools by name with TabCmdr {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. On figma.com it adds 32 Figma actions to its search box. When you pick one, TabCmdr presses Figma's own shortcut for it on the page, so you type the tool's name instead of remembering its key.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette in a Figma file

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, with a design file open on figma.com.

### Step 2: Type the tool

Type a word from the action's name. `tool` lists Figma's tools. Figma actions sit under Commands, marked Page command.

{{< screenshot src="figma-shortcuts-tools.png" alt="TabCmdr palette on a Figma file with tool typed, listing Line Tool, Arrow Tool, Frame Tool, Text Tool, Scale Tool, Move Tool, Pen Tool and Pencil Tool" caption="`tool` lists the Figma tools TabCmdr can pick." >}}

### Step 3: Press Enter

The palette closes and TabCmdr presses the action's key on the page. These actions press the same keys as Figma's own shortcuts:

| TabCmdr action | Key it presses |
|---|---|
| Frame Tool | {{< kbd "F" >}} |
| Rectangle Tool | {{< kbd "R" >}} |
| Ellipse Tool | {{< kbd "O" >}} |
| Line Tool | {{< kbd "L" >}} |
| Arrow Tool | {{< kbd "Shift" "L" >}} |
| Pencil Tool | {{< kbd "Shift" "P" >}} |
| Text Tool | {{< kbd "T" >}} |
| Add / Show Comments | {{< kbd "C" >}} |
| Duplicate Selection | {{< kbd "⌘" "D" >}} or {{< kbd "Ctrl" "D" >}} |
| Group Selection | {{< kbd "⌘" "G" >}} or {{< kbd "Ctrl" "G" >}} |
| Zoom to Fit | {{< kbd "Shift" "1" >}} |
| Zoom to Selection | {{< kbd "Shift" "2" >}} |
| Show Outlines | {{< kbd "⌘" "Shift" "O" >}} or {{< kbd "Ctrl" "Shift" "O" >}} |
| Create Component | {{< kbd "Option" "⌘" "K" >}} or {{< kbd "Ctrl" "Alt" "K" >}} |
| Detach Instance | {{< kbd "Option" "⌘" "B" >}} or {{< kbd "Ctrl" "Alt" "B" >}} |
| Show Assets Panel | {{< kbd "Option" "2" >}} or {{< kbd "Alt" "2" >}} |
| Open Team Library | {{< kbd "Option" "3" >}} or {{< kbd "Alt" "3" >}} |

Actions such as Duplicate Selection, Group Selection, Create Component and Detach Instance act on what you have selected, the same as their shortcuts. Type `component` to find the component actions.

{{< screenshot src="figma-shortcuts-component.png" alt="TabCmdr palette on a Figma file with component typed, showing Create Component, Detach Instance and Show Assets Panel" caption="`component` finds Create Component, Detach Instance and Show Assets Panel." >}}

## Turn Figma actions off {.way-tabcmdr}

Open TabCmdr's settings, choose **Sites** and find **Site Shortcuts**, which is marked Experimental. Untick **Figma** to keep its actions out of the palette, or turn off **Enable Site Shortcuts** to hide the actions for every site.

{{< screenshot src="figma-site-shortcuts-setting.png" alt="TabCmdr settings, Sites pane, Site Shortcuts section with Enable Site Shortcuts on and Figma among the ticked sites" caption="Each supported site has its own tick box under Site Shortcuts." >}}
