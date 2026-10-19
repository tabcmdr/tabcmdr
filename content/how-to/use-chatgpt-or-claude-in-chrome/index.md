---
title: "How to Use ChatGPT or Claude in Chrome | TabCmdr"
linkTitle: "Use ChatGPT or Claude in Chrome"
description: "Add your own OpenAI, Anthropic or other AI key to TabCmdr, then chat from any Chrome page and ask about the page you're reading with @page. Step by step."
ogTitle: "Chat with ChatGPT or Claude from any page"
ogDescription: "Paste your API key once, press ⌘K, type :ai and ask. Add @page to include the page you're reading."
ogImage: ai-chat-provider-picker.png
imageAlt: "TabCmdr AI Chat with ChatGPT and Claude set up, each showing its model"
cardText: "Add your own API key, then chat with ChatGPT, Claude or Gemini from any page and ask about the page with @page."
heading: "How to use ChatGPT or Claude in Chrome"
lead: "Add your own API key for ChatGPT, Claude, Gemini or six other providers in TabCmdr's AI settings. Then press ⌘K, type :ai and ask about any page with @page."
date: 2026-10-19
lastmod: 2026-10-19
weight: 610
group: tools
icon: i-sparkles
feature: ai-chat
author:
  name: "Abhimanyu Sharma"
  url: "https://github.com/abhimanyu003"
howTitle: "Ask AI about a page in three steps"
how:
  - title: "Open the palette"
    keys: ["mod", "K"]
    text: "Ctrl+K on Windows and Linux. Works on any page."
  - title: "Open AI chat"
    typed: ":ai"
    text: "The chat for your default provider opens."
  - title: "Ask and press Enter"
    keys: ["↵"]
    text: "Add @page to include the page you're on."
faqTitle: "Questions about AI chat in TabCmdr"
faq:
  - question: "Which AI providers can I use?"
    answer: "Nine are built in: OpenAI (ChatGPT), Google Gemini, Anthropic (Claude), Groq, DeepSeek, Mistral AI, Perplexity, Grok and OpenRouter. You can also add custom presets with their own name, model, API endpoint and system prompt."
  - question: "What does @page send to the AI?"
    answer: "The page title, its address and the first 5,000 characters of the text on the page. Without `@page`, only what you type is sent."
  - question: "Where is my API key stored?"
    answer: "In TabCmdr's storage in your browser, on this device. The AI Chat Settings page says keys are stored locally and never shared. The x button next to a key removes it."
  - question: "Does TabCmdr see my chats?"
    answer: "No. Messages go from your browser to the provider you picked, using your key. Each provider's chat history is saved in your browser so you can pick up where you left off, and the Clear button deletes it."
  - question: "Which provider does :ai open?"
    answer: "The one with Set as default provider turned on. If none is marked, `:ai` opens the first provider that has both a key and a model."
  - question: "Does it work in Edge and Brave?"
    answer: "Yes. TabCmdr runs in Chrome, Edge, Brave, Arc, Vivaldi and Opera, and you set up AI chat the same way in each."
relatedTitle: "Related features"
related:
  - ai-chat
  - web-search
  - private-by-design
sitemap:
  priority: 0.7
  changefreq: monthly
---

## Set up AI chat with your own key {.way-tabcmdr}

TabCmdr is a keyboard launcher that lives in your browser. Its AI chat sends your messages to the provider you choose, using your own API key, and shows the answer inside the palette on the page you're reading.

**Before you start:** add [TabCmdr from the Chrome Web Store](https://chromewebstore.google.com/detail/ejkkibnhfeccfnofeimpialoaipkojdc). It has a 7-day free trial and needs no account. You also need an API key from the AI provider you want to use.

### Step 1: Open AI settings

Press {{< kbd "⌘" "K" >}} on a Mac or {{< kbd "Ctrl" "K" >}} on Windows and Linux, and type `:ai`. Until a provider is set up, the palette shows **No AI Providers Configured**. Click **Open AI Settings**.

{{< screenshot src="ai-chat-no-provider.png" alt="TabCmdr palette showing No AI Providers Configured with an Open AI Settings button" caption="Before you add a key, `:ai` points you to the AI settings." >}}

You can also get there from TabCmdr's settings: choose **Tools** in the sidebar and click the settings button next to **AI Chat**.

### Step 2: Add your API key and choose a model

On **AI Chat Settings**, open the provider you want. Paste your key into **API Key**, click **Fetch Models** and pick a model from the **Model** list. Each provider has a link to the page where you create its key.

{{< screenshot src="ai-chat-settings-api-key.png" alt="TabCmdr AI Chat Settings with OpenAI open, an API key entered as dots, gpt-4o-mini as the model and Set as default provider turned on" caption="OpenAI with a key and a model, set as the default. Claude is set up too." >}}

Turn on **Set as default provider** for the one you use most. The page lists nine providers: OpenAI (ChatGPT), Google Gemini, Anthropic (Claude), Groq, DeepSeek, Mistral AI, Perplexity, Grok and OpenRouter.

### Step 3: Ask about the page you're on

Go back to any page, press {{< kbd "⌘" "K" >}} and type `:ai`. The chat for your default provider opens. Type your question and press {{< kbd "Enter" >}} to send it.

To ask about the page itself, put `@page` in your message. TabCmdr adds the page title, its address and the first 5,000 characters of its text to what it sends.

{{< screenshot src="ai-chat-page-question.png" alt="TabCmdr AI chat for OpenAI gpt-4o-mini with a question starting with @page typed in the search box" caption="`@page` adds the page you're reading to your question." >}}

The answer appears in the palette as it's written. Each provider keeps its own conversation, so you can come back to it later. **Clear** at the top of the chat deletes it after you confirm, and TabCmdr shows **Chat cleared**.

## Switch between providers {.way-tabcmdr}

With more than one provider set up, open the palette and press {{< kbd "→" >}} until the **Tools** filter is selected, then press {{< kbd "Enter" >}} on **AI Chat**. Every provider with a key and a model is listed with its model name. Pick one and press {{< kbd "Enter" >}} to chat with it.

{{< screenshot src="ai-chat-provider-picker.png" alt="TabCmdr AI Chat list with ChatGPT on gpt-4o-mini, Claude on claude-3-5-haiku and a Manage Providers row" caption="ChatGPT and Claude, each with its model. Manage Providers opens the AI settings." >}}

**Manage Providers** at the bottom opens AI Chat Settings again. Inside a chat, **Back to AI Providers** returns to this list.

## What gets sent where {.way-tabcmdr}

- **Your messages** go from your browser to the provider you picked, with your API key.
- **The page you're on** is only included when your message has `@page`.
- **Your keys and chat history** are saved in your browser on this device.
