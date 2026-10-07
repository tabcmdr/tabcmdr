---
title: "Change Text Case and Make UUIDs or Passwords | TabCmdr"
linkTitle: "Developer tools"
description: "Need a name in camelCase, a fresh UUID or a strong password? Type :tx, :uuid or :pwd in the TabCmdr palette on any page and press Enter to copy the result."
ogTitle: "camelCase, UUIDs and passwords from any page"
ogDescription: "Type :tx and your text for seven case styles, :uuid for a new v4 UUID, or :pwd 24 for a random password. Press Enter to copy, no website needed."
weight: 230
date: 2026-10-06
lastmod: 2026-10-06
group: answers
icon: i-key
token: ":tx"
eyebrow: "Developer tools"
heading: "Need camelCase or a UUID?"
headingMuted: "Type it and copy the result."
lead: "Turn text into camelCase, snake_case and five more styles, or make a UUID or password. Press [kbd:mod][kbd:K] and type `:tx`, `:uuid` or `:pwd`."
howTitle: "Change text case in three steps"
demo:
  name: answers
  layout: split
  query: ":tx launch plan notes"
  examples: [":tx launch plan notes", ":tx userProfileId", ":uuid", ":pwd", ":pwd 24", ":pwd 20 a", ":pwd 12 c", ":pwd 6 n"]
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Type :tx and your text"
    typed: ":tx launch plan notes"
    text: "Or :uuid, or :pwd with a length."
  - title: "Copy the one you want"
    keys: ["↵"]
    text: "Arrow keys pick a style, Enter copies it."
showcase:
  title: "Three small tools you'd otherwise search for"
  lead: "No website to open and nothing to paste into a form. The result is made on your computer and shows at the top of the palette."
  rows:
    - title: "Seven case styles from one line"
      text: "Type `:tx` and your text to see it in UPPER CASE, lower case, Title Case, camelCase, PascalCase, snake_case and kebab-case, one row each. Move to the style you want and press [kbd:↵] to copy it."
      points:
        - "Names already in camelCase are split into words: `:tx userProfileId` gives user_profile_id."
        - "Spaces, dashes and other symbols count as word breaks."
      mock: mocks/preview
      preview:
        type: answer
        query: ":tx userProfileId"
        group: "Text Transform"
        rows:
          - { expression: "snake_case", result: "user_profile_id" }
          - { expression: "kebab-case", result: "user-profile-id" }
          - { expression: "PascalCase", result: "UserProfileId" }
    - title: "A password with the length and characters you need"
      text: "`:pwd` makes a 16-character password from letters, digits and symbols. Add a length from 1 to 128, like `:pwd 24`. Add a letter after the length to limit the characters: `a` for letters and digits, `c` for letters only, `n` for digits only."
      points:
        - "Made with the browser's `crypto.getRandomValues`, not `Math.random`."
        - "Not happy with it? Type a space and delete it, and you get a new one."
        - "Enter copies it and the toast says Password copied."
      mock: mocks/palette
      palette:
        query: ":pwd 20 a"
        toast: "Password copied"
        groups:
          - label: "Password"
            rows:
              - { glyph: i-key, title: "Pwn2zSeWrV95p8zCpDJr", sub: ":pwd 20 a", selected: true }
    - title: "A new UUID whenever you need one"
      text: "Type `:uuid` and a random version 4 UUID shows at the top, made with the browser's `crypto.randomUUID`. Press [kbd:↵] to copy it into a test, a config file or a database row."
      points:
        - "You get a different UUID every time you type it."
        - "It's lowercase with dashes, the standard 36-character form."
      mock: mocks/preview
      preview:
        type: answer
        query: ":uuid"
        group: "UUID"
        rows:
          - { expression: ":uuid", result: "3f6c2a1e-8b4d-4e7a-9c15-2d8f0b6a7e43" }
detailsTitle: "More reasons to keep these in the palette"
details:
  - icon: i-lock
    title: "Never saved"
    text: "Passwords and UUIDs are made on your computer when you type the command. TabCmdr doesn't store them or send them anywhere."
  - icon: i-keyboard
    title: "No mouse needed"
    text: "Arrow keys move between the seven case styles, and [kbd:↵] copies the one you're on."
  - icon: i-copy
    title: "Clear copy messages"
    text: "The toast tells you what happened: Copied, Password copied or UUID copied."
  - icon: i-zap
    title: "On any page"
    text: "Rename a variable while you read docs or review a pull request, without leaving the tab."
  - icon: i-palette
    title: "Colors and number bases"
    text: "`#f0013d to rgb` and `0xff to decimal` are answered in the same box."
  - icon: i-calculator
    title: "Math and px to rem"
    text: "Sums and conversions like `24px to rem` work without a token."
faqTitle: "Questions about text case, UUIDs and passwords"
faq:
  - question: "How do I convert text to camelCase in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `:tx` and your text, move to the camelCase row and press Enter. The result is copied."
  - question: "Which case styles can it make?"
    answer: "Seven: UPPER CASE, lower case, Title Case, camelCase, PascalCase, snake_case and kebab-case."
  - question: "How do I generate a UUID in Chrome?"
    answer: "Open the palette, type `:uuid` and press Enter. A new random v4 UUID is copied to your clipboard."
  - question: "How do I generate a strong password?"
    answer: "Type `:pwd` for 16 characters with letters, digits and symbols, or add a length, like `:pwd 32`. The longest is 128."
  - question: "Can I make a password without symbols?"
    answer: "Yes. Add a letter after the length: `:pwd 20 a` for letters and digits, `:pwd 12 c` for letters only, or `:pwd 6 n` for digits only."
  - question: "Are my passwords stored anywhere?"
    answer: "No. A password exists only in the palette until you copy it. TabCmdr doesn't keep a list or send it anywhere."
related:
  - calculator
  - color-conversion
  - time-zones
sitemap:
  priority: 0.8
  changefreq: monthly
---
