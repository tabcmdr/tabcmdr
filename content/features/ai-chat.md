---
title: "Ask ChatGPT or Claude About Any Page | TabCmdr"
linkTitle: "AI chat"
description: "Want a summary of the page you're reading? Type :ai in TabCmdr, add @page to your question and send it to ChatGPT, Claude, Gemini or six more with your own key."
ogTitle: "Ask AI about the page you're on"
ogDescription: "Chat with nine AI providers from the command palette using your own API key. Add @page and the page you're reading goes along with your question."
weight: 240
date: 2026-10-06
lastmod: 2026-10-06
group: tools
icon: i-sparkles
token: ":ai"
eyebrow: "AI chat"
heading: "Want to ask AI about this page?"
headingMuted: "Add @page to your message."
lead: "Chat with ChatGPT, Claude, Gemini and six more from any page. Press [kbd:mod][kbd:K], type `:ai`, and add `@page` to include the page you're on."
howTitle: "Ask about a page in three steps"
demo:
  name: ai
  layout: split
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "On any page. Ctrl+K on Windows and Linux."
  - title: "Start a chat"
    typed: ":ai"
    text: "Opens a chat with your default provider."
  - title: "Send your question"
    keys: ["↵"]
    text: "Add @page to include the page you're on."
showcase:
  title: "How AI chat works"
  lead: "TabCmdr is the chat window. The answers come from the provider and model you pick, paid for with your own API key."
  rows:
    - title: "@page sends the page with your question"
      text: "Type `@page` anywhere in your message. When you send it, TabCmdr puts the page title, its address and the first 5,000 characters of the page's text in its place. In the chat you see a small Page tag instead of all that text."
      points:
        - "Only the message with `@page` carries the page. Your saved chat keeps the tag, not the page text."
        - "On a long page, only the first 5,000 characters go along."
        - "Replies show as formatted text, with a Copy button under each one."
      mock: mocks/preview
      preview:
        type: chat
        prompt: "summarize"
    - title: "Nine providers, your own keys"
      text: "Add an API key for OpenAI (ChatGPT), Google Gemini, Anthropic Claude, Groq, DeepSeek, Mistral AI, Perplexity, Grok from xAI or OpenRouter. TabCmdr loads the provider's list of models so you can pick one, and you can set one provider as the default for `:ai`."
      points:
        - "Every provider with a key and a model shows up in the list, so you can switch between them."
        - "OpenRouter gives you models from many companies with a single key."
        - "Perplexity answers are grounded in a live web search."
      mock: mocks/palette
      palette:
        filter: tools
        groups:
          - label: "AI Chat"
            rows:
              - { glyph: i-sparkles, title: "ChatGPT", sub: "gpt-4o", selected: true }
              - { glyph: i-sparkles, title: "Claude", sub: "claude-3-5-sonnet-20241022" }
              - { glyph: i-sparkles, title: "Perplexity", sub: "sonar-pro" }
          - label: "Quick Actions"
            rows:
              - { glyph: i-settings, title: "Manage Providers", sub: "Add or configure AI providers" }
    - title: "Keys and chats stay in your browser"
      text: "Your API keys, model choices and chats are saved in the extension's local storage on this computer. When you send a message, it goes straight from your browser to the provider you picked. TabCmdr has no server in between."
      points:
        - "Each provider keeps its own chat, so you can pick up where you left off. Clear empties it."
        - "Don't need AI? Turn off AI Chat under Tools in settings and it's hidden from the palette."
      mock: mocks/settings
      settings:
        title: "Tools"
        rows:
          - { label: "AI Chat", desc: "Chat with AI providers - OpenAI, Claude, Gemini, Groq and more", toggle: "on" }
          - { label: "Emoji", desc: "Search and copy emoji from a grid picker", toggle: "on" }
detailsTitle: "More about AI chat"
details:
  - icon: i-star
    title: "Pick a default"
    text: "Turn on Set as default provider and `:ai` opens that chat straight away. Without one, it opens the first provider that has a key and a model."
  - icon: i-settings
    title: "One settings page"
    text: "AI Chat Settings has a section per provider with the API key, the model and a link to get a key."
  - icon: i-message
    title: "Chats are remembered"
    text: "Close the palette and come back later. The conversation with each provider is still there."
  - icon: i-x
    title: "Clear a chat"
    text: "Clear removes every message in the current chat after you confirm."
  - icon: i-copy
    title: "Copy a reply"
    text: "Each reply has a Copy button that copies the full text, even while it's still coming in."
  - icon: i-key
    title: "You pay the provider"
    text: "Requests use your own API key, so usage is billed by the provider on your account."
faqTitle: "Questions about AI chat"
faq:
  - question: "How do I ask ChatGPT about the page I'm on?"
    answer: "Press ⌘K on a Mac or Ctrl+K on Windows and Linux, type `:ai`, write your question with `@page` in it and press Enter. The page title, address and first 5,000 characters of its text go with your message."
  - question: "Which AI providers does TabCmdr support?"
    answer: "Nine: OpenAI (ChatGPT), Google Gemini, Anthropic Claude, Groq, DeepSeek, Mistral AI, Perplexity, Grok from xAI and OpenRouter."
  - question: "Do I need my own API key?"
    answer: "Yes. Get a key from the provider's website and paste it into AI Chat Settings. Each provider's section links to the page where you create one."
  - question: "Where is my API key stored?"
    answer: "In the extension's local storage on this computer. It is only sent to the provider it belongs to, with each request."
  - question: "Does TabCmdr see my chats or the pages I send?"
    answer: "No. Your messages, and the page when you use `@page`, go straight from your browser to the provider. They don't pass through TabCmdr."
  - question: "Can I turn AI chat off?"
    answer: "Yes. In settings, open Tools and switch off AI Chat. Disabled tools use no memory and are hidden from the palette."
related:
  - developer-tools
  - page-commands
  - todo-list
sitemap:
  priority: 0.8
  changefreq: monthly
---
