# Stardock Marine — website

A mobile-first site for a Florida boat sales + mobile marine repair business.
Plain HTML/CSS/JavaScript — **no build step, no server, no database.** Open
`index.html` in a browser and it runs.

## What's in here

| File | What it is |
|------|-----------|
| `index.html` | Page shell (header, tabs, sticky call bar) **plus the full Mobile Repair page** — hero copy, services grid, service-area towns, "common calls" list and the search-engine metadata (description, structured data). It's written out in plain HTML so Google reads it without running JavaScript. |
| `app.js` | **The only file you'll normally edit.** All settings + content live in the `CONFIG` block at the very top. |
| `styles.css` | The "Industry" design system (colors, fonts, components). Don't hand-edit unless restyling. |
| `qrcode.js` | Bundled QR-code generator (used by the printable signs). No internet needed. |
| `_redirects`, `_headers` | Cloudflare Pages / Netlify config. `_redirects` serves `index.html` at **`/repair`** so the Mobile Repair page has a real address search engines can rank on its own; `_headers` keeps the HTML and code files from being cached stale. |
| `robots.txt`, `sitemap.xml` | Tell search engines the site is open to crawl and that `/repair` is the page to index. |

## Editing content (no coding needed)

Open `app.js` and change the values inside the `CONFIG = { ... }` block at the top:

- **Phone number** — `phone:` — powers every "Call / Text" button *and* the QR signs.
- **Boats for sale** — `boats: [ ... ]` — copy a `{ ... }` block to add a boat, delete one to remove it. Prices, specs, and descriptions are plain text.
- **Boat photos** — put image files in an `images/` folder next to this site, then list them in a boat's `photos: [ "images/my-boat.jpg" ]`. Empty `[]` shows a placeholder.
- **Financing note / default tab** — `showFinancing`, `defaultTab`.

The **Mobile Repair page** is the one exception: its copy lives in
`index.html` inside `<div id="app">`, not in `app.js`. It is served at both
`stardockmarine.com/` and `stardockmarine.com/repair`; the `/repair` address is
the canonical one (the one Google indexes), so use it in ads and profiles. That's deliberate —
it's the home page, and keeping it as plain HTML is what lets Google read the
services, the towns we serve and the phone number without running JavaScript.
To change it, edit the text there:

- **Service cards** — each `<div class="blueprint">` under "Marine repair services".
- **Towns / counties** — the two lists under "Where we go". Change the same
  towns in the `"areaServed"` list of the structured-data block in `<head>`
  (and the `<meta name="description">` if you move the headline towns).
- **"Common calls we get"** — the question-and-answer list; each is an `<h3>`
  plus a paragraph. These exist to match what people type into Google
  ("boat won't start", "tilt and trim", "bilge pump", "jet ski repair"), so
  keep the plain-English problem names in the headings.

## The "Call / Text" button

Already works — no setup. It's a `tel:` link, so tapping it on a phone opens
the dialer with your number pre-filled. The "Text" / "Still available?" buttons
are `sms:` links pre-filled with a message. Just set `phone` in CONFIG.

## The "Request service" form → your Gmail

The form emails you through **Web3Forms**, a free relay (no server to run).

1. Go to <https://web3forms.com>, enter your Gmail, and copy the **Access Key** they email you.
2. In `app.js`, paste it into `web3formsAccessKey: "..."`.
3. Set `notifyEmail:` to that Gmail.

Submissions now arrive in your Gmail inbox with the sender's name, phone,
location, boat, and problem description.

**Before you add the key** (or if the relay ever fails): the form falls back to
opening the visitor's own email app, pre-addressed to `notifyEmail`. Nothing
breaks — you just get the message a little less reliably until the key is in.

## Knowing where visitors (and callers) come from

The site works out each visitor's traffic source — **Google Ads, Google
search, Facebook/Instagram, Yelp, another site, or direct** — from the link
they arrived on (utm tags, Google's `gclid`, Facebook's `fbclid`) and the
referring site, and remembers **two answers** in their browser: the *first
touch* (how they originally discovered us) and the *last touch* (what brought
them back for the visit where they called — usually the one that should guide
ad spend). Either memory expires after **30 days**, so an ad click from months
ago can't keep claiming credit. Then:

- **Every emailed request** (service, restoration, contact) includes a
  "How they found us" line, e.g.
  `first: Facebook ad (facebook / cpc / fiberglass_repair), 2026-08-20 · latest: Google Ads (google / cpc), landed /#/repair, 2026-09-11`
  (a single line when both touches are the same). Landing pages are recorded
  without query strings, so raw click IDs never appear in the emails.
- **Every Call / Text tap and form send** is reported to Google Analytics as
  a `call_click`, `text_click` or `generate_lead` event tagged with
  `visit_source` / `visit_medium` / `visit_campaign` (last touch) and
  `first_source`. In GA4, mark `call_click` and `generate_lead` as key events
  (Admin → Events) to see which channel produces them.
- **Matching taps to real calls:** a `call_click` proves the tap, not the
  conversation. To confirm, line up the tap's time (in the GA4 event, or the
  request email) with the phone log — a `call_click` at 10:52 and an incoming
  call at 10:54 is almost certainly that lead.

**Google Ads phone-click conversions (recommended):** the payoff is seeing
*"mobile marine mechanic ad → clicked Call"* in the Ads dashboard instead of
just a visit. In Google Ads: **Goals → Conversions → New conversion action →
Website → add an action manually** (category "Phone call lead", count "One").
Choosing the "Google tag / event snippet" option shows a tag ID
(`AW-123456789`) and a conversion label — paste both into `googleAdsId:` and
`googleAdsCallLabel:` in `app.js`. Every Call/Text tap then reports as a
conversion, and you can tell campaigns to optimize for it. (It counts the
tap, not whether the call connected — that's as close as it gets without a
paid call-tracking number.)

To make sources explicit, tag the links you control. The tags must go
**before the `#`** in the address, `utm_medium=cpc` means *paid*, and every
paid link should carry a `utm_campaign` naming the ad — that's what lets you
compare ad against ad, not just Facebook against Yelp:

- Paid Facebook ad: `https://stardockmarine.com/?utm_source=facebook&utm_medium=cpc&utm_campaign=fiberglass_repair`
- Unpaid Facebook post: `https://stardockmarine.com/?utm_source=facebook&utm_medium=social`
- Yelp profile: `https://stardockmarine.com/?utm_source=yelp&utm_medium=referral`
- Google Ads needs nothing — it tags its own clicks (keep auto-tagging on).

**Meta Pixel (optional):** to count Facebook-ad results inside Meta too, get
your Pixel ID from Meta Events Manager and paste it into `metaPixelId:` in
`app.js`. The site then reports `PageView`, `Contact` (call/text taps) and
`Lead` (form sends) to Meta. Leave it `""` and no pixel loads.

## Printable "For Sale" signs

On any boat's detail page, tap **"Printable 'For Sale' sign & QR"**, then
**Print**. Each sign shows the price, specs, your phone number, and a **real QR
code** that scans to that exact boat's page. Print at letter size and
laminate/zip-tie it to the boat at the dock.

> The QR encodes `websiteUrl + /#/boats/<slug>`, so set `websiteUrl` in CONFIG
> to your real live address before printing signs.

## Publishing it (free options)

It's static files, so any of these work:

- **Netlify / Cloudflare Pages** — drag the folder onto their dashboard, or connect the repo. Both honor the `_redirects` and `_headers` files, so `/repair` works out of the box.
- **GitHub Pages** — push the folder and enable Pages. (No `_redirects` support, so `/repair` would 404 there; the home page still shows the repair content.)
- Any web host — upload the files.

No environment variables, no secrets in the code except the Web3Forms key,
which is safe to expose publicly (that's how Web3Forms is designed).
