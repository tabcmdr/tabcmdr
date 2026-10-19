---
title: "How to Convert Decimal to Binary or Hex | TabCmdr"
linkTitle: "Convert decimal to binary or hex"
description: "Convert numbers between decimal, hexadecimal, binary and octal from any page: type 255 to binary in the TabCmdr palette and press Enter to copy the answer."
ogTitle: "Decimal, hex, binary and octal, converted as you type"
ogDescription: "Type 255 to binary or 0xff to decimal in the TabCmdr palette. The answer shows at the top of the list, and Enter copies it."
ogImage: bases-decimal-to-binary.png
imageAlt: "TabCmdr palette with 255 to binary typed and the answer 0b11111111 at the top"
cardText: "Switch numbers between decimal, hexadecimal, binary and octal, and copy the result with Enter."
heading: "How to convert decimal to binary or hex"
lead: "Press ⌘K with TabCmdr and type 255 to binary or 255 to hex. To go back, type the number with its prefix: 0xff to decimal gives 255. Enter copies it."
date: 2026-10-19
lastmod: 2026-10-19
weight: 530
group: answers
icon: i-terminal
feature: color-conversion
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Convert a number in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Type the number and base"
    typed: "255 to binary"
    text: "The answer shows at the top of the list."
  - title: "Press Enter"
    keys: ["↵"]
    text: "The answer is copied, ready to paste."
faqTitle: "Questions about number bases"
faq:
  - question: "How do I convert decimal to binary?"
    answer: "Type the number and `to binary`, like `255 to binary`. The answer, 0b11111111, shows at the top of the list, and Enter copies it."
  - question: "Why does the answer start with 0x, 0b or 0o?"
    answer: "Those prefixes mark the base: 0x for hexadecimal, 0b for binary and 0o for octal. You can type them back in, so `0xff to decimal` gives 255."
  - question: "Does it handle negative or very large numbers?"
    answer: "Yes. A minus sign is kept, so `-10 to hex` gives -0xa. Large whole numbers stay exact: `18446744073709551615 to hex` gives 0xffffffffffffffff."
  - question: "Can I convert numbers with a decimal point?"
    answer: "No. Base conversion works on whole numbers, so `1.5 to binary` gives no answer."
relatedTitle: "Related features"
related:
  - color-conversion
  - calculator
  - developer-tools
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Use Google Search's calculator {.way-chrome}

Google lists base conversion among the things its search calculator can do. Type the conversion into the search box on google.com.

You can search from Chrome's address bar too. If Google is your default search engine, type the conversion there and press Enter. In some countries Google is Chrome's default, and in others Chrome asks you to pick one.

Sources: Google's [calculator and unit converter](https://support.google.com/websearch/answer/3284611) and [default search engine](https://support.google.com/chrome/answer/95426) help pages, checked in October 2026.

## Convert numbers in the TabCmdr palette {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its search box converts between decimal, hexadecimal, binary and octal as you type.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account.

### Step 1: Open the palette

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, on any page.

### Step 2: Type the number and the base you want

Type a number, `to`, and the base: `hex`, `binary`, `octal` or `decimal`. The short forms `bin`, `oct` and `dec` work too. The answer shows under **Calculator** at the top of the list.

{{< screenshot src="bases-decimal-to-binary.png" alt="TabCmdr palette with 255 to binary typed and the answer 0b11111111 under Calculator" caption="`255 to binary` gives 0b11111111." >}}

The answer starts with a prefix that names its base: `0x` for hex, `0b` for binary and `0o` for octal.

### Step 3: Press Enter to copy

The answer row is already highlighted. Press {{< kbd "Enter" >}} and TabCmdr copies it and closes the palette. For `255 to binary`, a "Copied 0b11111111" message shows at the bottom of the page.

## Convert back to decimal {.way-tabcmdr}

To turn a hex, binary or octal number into decimal, type it with its prefix, then `to decimal`:

{{< screenshot src="bases-hex-to-decimal.png" alt="TabCmdr palette with 0xff to decimal typed and the answer 255 under Calculator" caption="`0xff to decimal` gives 255." >}}

| You type | You get |
|---|---|
| `255 to hex` | 0xff |
| `42 in hex` | 0x2a |
| `64 to octal` | 0o100 |
| `0xff to binary` | 0b11111111 |
| `0b1010 to decimal` | 10 |
| `0o17 to decimal` | 15 |
| `1010 bin to decimal` | 10 |
| `ff to decimal` | 255 |
| `deadbeef to decimal` | 3735928559 |

No prefix? Name the base after the number instead, like `1010 bin`. A number made only of digits is read as decimal, and one with the letters a to f in it, like `ff`, is read as hex.

## If no answer shows up {.way-tabcmdr}

- **The number has a decimal point.** Only whole numbers convert, so `1.5 to binary` gives no answer.
- **The digits don't fit the base.** Binary only uses 0 and 1, and octal only uses 0 to 7, so `0b102 to decimal` and `0o89 to decimal` give no answer.
- **You wanted a color.** A HEX color like `#1a73e8` converts with `to rgb`. The [color conversion page]({{< relref "/features/color-conversion" >}}) covers colors.
