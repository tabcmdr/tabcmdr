---
title: "How to Convert px to rem for CSS | TabCmdr"
linkTitle: "Convert px to rem"
description: "Turn pixels into rem or em, and back again, while you code: type 24px to rem in the TabCmdr palette to get 1.5rem, or set your own root size with at 10."
ogTitle: "px to rem, answered as you type"
ogDescription: "Type 24px to rem in the TabCmdr palette and get 1.5rem. Using a different root size? Type 24px to rem at 10."
ogImage: css-px-to-rem.png
imageAlt: "TabCmdr palette with 24px to rem typed and the answer 1.5rem at the top"
cardText: "Turn pixels into rem or em and back, with a 16px root or the root size you set."
heading: "How to convert px to rem for CSS"
lead: "Press ⌘K with TabCmdr and type 24px to rem to get 1.5rem, based on a 16px root. If your root font size is different, add it at the end: 24px to rem at 10."
date: 2026-10-19
lastmod: 2026-10-19
weight: 520
group: answers
icon: i-code
feature: calculator
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Convert px to rem in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type the size"
    typed: "24px to rem"
    text: "The rem value shows at the top of the list."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The value is copied, ready to paste into your CSS."
faqTitle: "Questions about px and rem"
faq:
  - question: "How do I convert px to rem?"
    answer: "Divide the pixels by the root font size. With the common 16px root, 24px is 1.5rem. In TabCmdr, type `24px to rem` and press Enter to copy 1.5rem."
  - question: "What if my root font size isn't 16px?"
    answer: "Add your root size at the end with `at`, `base` or `@`. `24px to rem at 10` gives 2.4rem and `32px to rem base 20` gives 1.6rem."
  - question: "How do I convert rem back to px?"
    answer: "Swap the units: `1.5rem to px` gives 24px."
  - question: "Does it work for em?"
    answer: "Yes, `18px to em` gives 1.125em. TabCmdr works out em from the same 16px base, or the base you give, so the answer is right when the parent element's font size matches that base."
relatedTitle: "Related features"
related:
  - calculator
  - color-conversion
  - developer-tools
sitemap:
  priority: 0.7
  changefreq: monthly
---

## How px and rem relate

A `rem` is the font size of the page's root element, usually `<html>`. A common browser default is 16px, but people can change it in their settings and your CSS can set its own. So to turn pixels into rem, divide by the root size: 24px at a 16px root is 1.5rem.

An `em` works the same way, but it's relative to the font size of the element itself, which usually comes from its parent.

Source: MDN's [CSS length units](https://developer.mozilla.org/en-US/docs/Web/CSS/length) page, checked in October 2026.

## Convert px to rem in the TabCmdr palette {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its search box does the division for you, so you don't need a converter tab open while you write CSS.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type the size and the unit you want

Type `24px to rem`. The answer, 1.5rem, shows under **Calculator** at the top of the list. TabCmdr uses a 16px root unless you tell it otherwise.

{{< screenshot src="css-px-to-rem.png" alt="TabCmdr palette with 24px to rem typed and the answer 1.5rem under Calculator" caption="`24px to rem` gives 1.5rem with a 16px root." >}}

### Step 3: Press Enter to copy

The answer row is already highlighted. Press {{< kbd "Enter" >}} and TabCmdr copies the value and closes the palette, ready to paste into your stylesheet. A "Copied 1.5rem" message shows at the bottom of the page.

## Use your own root size {.way-tabcmdr}

If your site sets a different root font size, add it at the end with `at`, `base` or `@`:

{{< screenshot src="css-px-to-rem-root-10.png" alt="TabCmdr palette with 24px to rem at 10 typed and the answer 2.4rem under Calculator" caption="With a 10px root, `24px to rem at 10` gives 2.4rem." >}}

| You type | You get |
|---|---|
| `24px to rem at 10` | 2.4rem |
| `24px to rem @ 10` | 2.4rem |
| `32px to rem base 20` | 1.6rem |
| `14px in rem` | 0.875rem |
| `1.5rem to px` | 24px |
| `18px to em` | 1.125em |
| `2em to px` | 32px |

`em` is worked out from the same base as `rem`, so check that your parent element's font size matches before you use the result.

## If no answer shows up {.way-tabcmdr}

- **The number has no unit.** `24 to rem` doesn't say what to convert from. Write `24px to rem`.
- **The unit isn't px, rem or em.** These three are the CSS sizes TabCmdr converts. For other units, like `12 inches to cm`, see the [calculator page]({{< relref "/features/calculator" >}}).
