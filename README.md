# Stardock Marine — website

A mobile-first site for a Florida boat sales + mobile marine repair business.
Plain HTML/CSS/JavaScript — **no build step, no server, no database.** To
preview it locally run `python3 -m http.server` in this folder and open
<http://localhost:8000/> (links and images use site-absolute paths such as
`/images/…`, so opening the files straight from disk won't show them).

## What's in here

Every section of the site is its own HTML file and real address:

| Address | File | What it is |
|---------|------|-----------|
| `/` and `/repair` | `index.html` | **Mobile Repair** — the home page. The full page (hero, services, service-area towns, "common calls", weekend/emergency callout) is written in plain HTML so Google reads it without running JavaScript. `/repair` is the canonical address. |
| `/boats`, `/boats/<slug>`, `/boats/<slug>/sign` | `boats.html` | **Boats for Sale.** The hero is plain HTML; the listing, each boat's page and its printable sign are filled in by `app.js` from the `boats` list, so prices never go stale. |
| `/restoration` | `restoration.html` | **Restoration** — copy, "What we do" list, before/after photos, all plain HTML. `app.js` wires the estimate/budget toggle and the form. |
| `/contact` | `contact.html` | **Contact** — static hero; `app.js` renders the message form. |
| — | `app.js` | Settings + the boats list in the `CONFIG` block at the top, then the site machinery (routing, forms, tracking, QR signs). |
| — | `styles.css` | The "Industry" design system (colors, fonts, components). Don't hand-edit unless restyling. |
| — | `shell.css` | Page layout shared by every page (header, tabs, call bar, section bands). |
| — | `qrcode.js` | Bundled QR-code generator (used by the printable signs). No internet needed. |
| — | `404.html` | The not-found page, so stray addresses get a real 404 instead of a broken copy of the home page. |
| — | `_redirects`, `_headers` | Cloudflare Pages / Netlify config: serves `index.html` at `/repair` and `boats.html` at `/boats/<slug>`, redirects old addresses, and keeps HTML/code files from caching stale. |
| — | `robots.txt`, `sitemap.xml` | Tell search engines the site is open to crawl and which four addresses to index. |

The header, tabs and call bar are repeated in each HTML file (there's no
build step to share them), so a change to those goes in all four.

Old-style links (`/#/repair`, `/#/boats/key-largo-176`, …) still work: the
page redirects them to the new addresses, so printed QR signs stay valid.

## Editing content (no coding needed)

Open `app.js` and change the values inside the `CONFIG = { ... }` block at the top:

- **Phone number** — `phone:` — powers every "Call / Text" button *and* the QR signs.
- **Boats for sale** — `boats: [ ... ]` — copy a `{ ... }` block to add a boat, delete one to remove it. Prices, specs, and descriptions are plain text.
- **Boat photos** — put image files in an `images/` folder next to this site, then list them in a boat's `photos: [ "images/my-boat.jpg" ]`. Empty `[]` shows a placeholder.
- **Financing note / default tab** — `showFinancing`, `defaultTab`.

The **Mobile Repair, Restoration and Contact pages** are the exception: their
copy lives in `index.html`, `restoration.html` and `contact.html` inside
`<div id="app">`, not in `app.js`. That's deliberate — keeping them as plain
HTML is what lets Google read the services, the towns we serve and the phone
number without running JavaScript. (`index.html` is served at both
`stardockmarine.com/` and `stardockmarine.com/repair`; `/repair` is the
canonical address, so use it in ads and profiles.)
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
  `first: Facebook ad (facebook / cpc / fiberglass_repair), 2026-08-20 · latest: Google Ads (google / cpc), landed /repair, 2026-09-11`
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

To make sources explicit, tag the links you control. `utm_medium=cpc` means *paid*, and every
paid link should carry a `utm_campaign` naming the ad — that's what lets you
compare ad against ad, not just Facebook against Yelp:

- Paid Facebook ad: `https://stardockmarine.com/repair?utm_source=facebook&utm_medium=cpc&utm_campaign=fiberglass_repair`
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

> The QR encodes `websiteUrl + /boats/<slug>`, so set `websiteUrl` in CONFIG
> to your real live address before printing signs. Signs printed earlier with
> the old `/#/boats/<slug>` address still work.

## Publishing it (free options)

It's static files, so any of these work:

- **Netlify / Cloudflare Pages** — drag the folder onto their dashboard, or connect the repo. Both honor the `_redirects` and `_headers` files, so `/repair` works out of the box.
- **GitHub Pages** — not recommended: it has no `_redirects` support, so `/repair` and `/boats/<slug>` would 404 there.
- Any web host — upload the files.

No environment variables, no secrets in the code except the Web3Forms key,
which is safe to expose publicly (that's how Web3Forms is designed).
