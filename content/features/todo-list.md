---
title: "Keep a Quick To-Do List in Your Browser | TabCmdr"
linkTitle: "To-do list"
description: "Remembered a task halfway through a page? Type :todo, write it and press Enter. Your list opens on any site, and you can check tasks off or clear them later."
ogTitle: "A to-do list one shortcut away on every page"
ogDescription: "Type :todo on any page, write a task and press Enter to save it. Check tasks off, delete them, or clear everything you've finished in one click."
weight: 260
date: 2026-10-06
lastmod: 2026-10-06
group: tools
icon: i-square-check
token: ":todo"
eyebrow: "To-do list"
heading: "Need to note a task quickly?"
headingMuted: "Add it from any page."
lead: "Save a task in two seconds without leaving the page. Press [kbd:mod][kbd:K], type `:todo`, write the task and press [kbd:↵] to add it."
demo:
  name: shortcut
  layout: split
  token: ":todo"
howTitle: "Add a task in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Open your list"
    typed: ":todo"
    text: "Or `:td`. The search box becomes the task box."
  - title: "Save the task"
    keys: ["↵"]
    text: "It's added to the list and the box clears."
showcase:
  title: "How the to-do list works"
  lead: "It's one short list that lives inside the palette. Open it on any site and you see the same tasks."
  rows:
    - title: "Type it, press Enter, done"
      text: "With the list open, the search box shows Add a todo here… (press ↵ to save). Type your task and press [kbd:↵]. A Todo added toast appears, the task joins the list, and the box is empty and ready for the next one."
      points:
        - "New tasks go to the bottom, so the list stays in the order you added things."
        - "Open tasks sit under a Todo heading with a count, like Todo · 2."
        - "Press [kbd:Esc] to go back to the Tools list."
      mock: mocks/preview
      preview:
        type: list
        variant: todo
        toast: "Todo added"
        rows:
          - { label: "Review PR #219" }
          - { label: "Book flights to Lisbon" }
    - title: "Check off, delete, clear"
      text: "Click the checkbox next to a task to mark it done. It moves down under Done, and a Clear 1 done button appears under it. To delete a task, hover it and click the x that appears. You'll see a Removed toast."
      points:
        - "Click the checkbox on a done task to mark it undone. It moves back to the open list."
        - "The Clear button deletes every finished task in one click and keeps the rest."
      mock: mocks/preview
      preview:
        type: list
        variant: todo
        rows:
          - { label: "Review PR #219" }
          - { label: "Book flights to Lisbon" }
          - { label: "Send Q3 roadmap to design", done: true }
    - title: "Saved in your browser, on this device"
      text: "Tasks are saved in your browser's local extension storage, so they're still there after you close the browser or restart your computer. They stay on this device. TabCmdr doesn't sync them or send them anywhere."
      points:
        - "The same list opens on every site, because it isn't tied to the page you're on."
        - "Don't need it? Switch off Todo under Tools in settings and it's hidden from the palette."
      mock: mocks/settings
      settings:
        title: "Tools"
        rows:
          - { label: "Emoji", desc: "Search and copy emoji from a grid picker", toggle: "on" }
          - { label: "Todo", desc: "Quick to-do list that persists across sessions", toggle: "on" }
          - { label: "RSS Reader", desc: "Latest headlines from your configured RSS/Atom feeds", toggle: "on" }
detailsTitle: "Why it beats a sticky note"
details:
  - icon: i-zap
    title: "No new tab"
    text: "The list opens over the page you're on, so writing a task down doesn't cost you your place."
  - icon: i-keyboard
    title: "Keyboard first"
    text: "Open the palette, type `:td`, write the task and press [kbd:↵]. Your hands never leave the keys."
  - icon: i-square-check
    title: "Done stays visible"
    text: "Finished tasks stay under Done until you clear them, so you can see what you got through today."
  - icon: i-x
    title: "One click to delete"
    text: "Hover a task and an x appears. Click it and the task is gone, with no confirm dialog."
  - icon: i-lock
    title: "No account"
    text: "There's nothing to sign up for. Your tasks sit in your browser, not on a server."
  - icon: i-sliders
    title: "Turn it off if you like"
    text: "Disabled tools are hidden from the palette and use no memory."
faqTitle: "Questions about the to-do list"
faq:
  - question: "How do I add a to-do from any page in Chrome?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `:todo` or `:td`, write your task and press Enter. TabCmdr saves it and clears the box for the next one."
  - question: "Where are my to-dos stored?"
    answer: "In your browser's local extension storage on this device. They aren't synced between computers and are never sent to a server."
  - question: "Will my tasks still be there tomorrow?"
    answer: "Yes. The list is saved as you go and stays after you close the browser or restart your computer."
  - question: "How do I mark a task as done?"
    answer: "Click the checkbox next to it. The task moves under Done. Click the checkbox again to move it back."
  - question: "Can I remove all the finished tasks at once?"
    answer: "Yes. Click the Clear button under the Done list, which shows how many it will remove, like Clear 2 done. Open tasks stay."
  - question: "Can I edit a task after adding it?"
    answer: "Not yet. Hover it, click the x to delete it, and add it again with the new wording."
related:
  - emoji-picker
  - rss-reader
  - weather
sitemap:
  priority: 0.8
  changefreq: monthly
---
