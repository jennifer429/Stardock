# Stardock Marine — website

A mobile-first site for a Florida boat sales + mobile marine repair business.
Plain HTML/CSS/JavaScript — **no build step, no server, no database.** Open
`index.html` in a browser and it runs.

## What's in here

| File | What it is |
|------|-----------|
| `index.html` | Page shell (header, tabs, sticky call bar). |
| `app.js` | **The only file you'll normally edit.** All settings + content live in the `CONFIG` block at the very top. |
| `styles.css` | The "Industry" design system (colors, fonts, components). Don't hand-edit unless restyling. |
| `qrcode.js` | Bundled QR-code generator (used by the printable signs). No internet needed. |

## Editing content (no coding needed)

Open `app.js` and change the values inside the `CONFIG = { ... }` block at the top:

- **Phone number** — `phone:` — powers every "Call / Text" button *and* the QR signs.
- **Boats for sale** — `boats: [ ... ]` — copy a `{ ... }` block to add a boat, delete one to remove it. Prices, specs, and descriptions are plain text.
- **Boat photos** — put image files in an `images/` folder next to this site, then list them in a boat's `photos: [ "images/my-boat.jpg" ]`. Empty `[]` shows a placeholder.
- **Repair services** — `services: [ ... ]`.
- **Financing note / default tab** — `showFinancing`, `defaultTab`.

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
referring site, and remembers it in their browser. Then:

- **Every emailed request** (service, restoration, contact) includes a
  "How they found us" line, e.g. `Google Ads — google / cpc, landed on …`.
- **Every Call / Text tap and form send** is reported to Google Analytics as
  a `call_click`, `text_click` or `generate_lead` event tagged with
  `visit_source` / `visit_medium` / `visit_campaign`. In GA4, mark
  `call_click` and `generate_lead` as key events (Admin → Events) to see which
  channel produces them.

To make sources explicit, tag the links you control. The tags must go
**before the `#`** in the address:

- Facebook page/posts: `https://stardockmarine.com/?utm_source=facebook&utm_medium=social`
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

- **Netlify / Cloudflare Pages** — drag the folder onto their dashboard, or connect the repo.
- **GitHub Pages** — push the folder and enable Pages.
- Any web host — upload the files.

No environment variables, no secrets in the code except the Web3Forms key,
which is safe to expose publicly (that's how Web3Forms is designed).
