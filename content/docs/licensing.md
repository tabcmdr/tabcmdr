---
title: Licensing
description: "Learn about TabCmdr's free trial, grace period, and how to purchase and activate a license key. Fully offline-friendly with no subscriptions."
weight: 11
---

## Free Trial

When you first install TabCmdr, you get a free trial period with full access to all features. The trial starts from the moment you install the extension.

## After the Trial

Once the trial ends, TabCmdr enters a **grace period**. During the grace period you still get a limited number of free uses per day. The counter resets every 24 hours.

If you've used up your daily grace uses, TabCmdr will prompt you to activate a license.

## Purchasing a License

Buy a license key from the [TabCmdr page on Gumroad](/buy?wanted=true). You'll receive a license key by email after purchase.

## Activating a License

1. Open the TabCmdr **Settings** page.
2. Find the **License** section.
3. Paste your license key into the input field.
4. Click **Activate**.

TabCmdr sends your license key to Gumroad's API to verify it. If valid, the extension unlocks immediately and stays unlocked.

## Re-validation

TabCmdr periodically re-validates your license in the background (roughly every 12–16 days, randomized). This is the only automatic network request the extension makes.

If re-validation fails (e.g., you're offline), TabCmdr continues working with the last known license state. It does not block you or retry aggressively.

## Offline Use

TabCmdr works fully offline. The only thing that requires a network connection is license activation and periodic re-validation. All other features run entirely inside your browser.

## Refunds & Cancellations

If a license is refunded or cancelled on Gumroad, the next re-validation will detect this and the extension will revert to grace-period mode.

## What Is Stored

| Key | Location | Contents |
|---|---|---|
| `_lk` | `browser.storage.local` | A signed token containing your license key, a timestamp, and a validity flag |
| `_trial` | `browser.storage.local` | The timestamp when you first installed the extension |
| `_grace` | `browser.storage.local` | How many free uses remain today |

None of this data is ever sent to TabCmdr servers (there are none). The only external service involved is Gumroad for license verification.
