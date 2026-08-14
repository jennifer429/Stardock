/* ============================================================================
   STARDOCK MARINE — site settings
   ============================================================================
   EVERYTHING you'd normally want to change lives in this CONFIG block.
   You do NOT need to know how to code to edit it — just change the text
   between the quotes. Keep the quotes and commas where they are.
   ========================================================================== */

const CONFIG = {

  /* --- Business ---------------------------------------------------------- */
  phone: "(386) 227-6883",          // Your call/text number. Shown on the site + QR signs.
  businessName: "Stardock Incorporated",
  logo: "images/stardock-logo.png", // Logo file in the images/ folder (transparent PNG works best). Shown on the printable sign. Falls back to the business name in text if the file isn't found.
  techName: "",                     // Name of your certified outboard technician (shown on the repair tab).
  websiteUrl: "https://stardockmarine.com", // Your live web address (used to build each boat's shareable link + QR).

  /* --- Where the "Request service" form goes ----------------------------- */
  // The form emails you through the free Web3Forms relay. To turn it on:
  //   1. Go to https://web3forms.com  ->  enter your Gmail  ->  you get an "Access Key".
  //   2. Paste that key between the quotes below.
  //   3. Emails then arrive in that Gmail inbox. Done.
  // Leave it as "" (empty) and the form falls back to opening a pre-filled
  // email in the visitor's own mail app, addressed to notifyEmail below.
  web3formsAccessKey: "84b84e9f-60ef-442a-8ec8-edd125e42619",

  // Your Gmail (or any email). Used as the mailto fallback address, and shown
  // as the reply-to on relayed messages.
  notifyEmail: "info@starling-enterprises-inc.com",

  /* --- Repair-tab options ------------------------------------------------ */
  defaultTab: "boats",              // "boats", "restoration" or "contact" — which tab shows first.
  showFinancing: true,              // Show the "50% down, installment plans" note on boat pages.

  /* --- Boats for sale ----------------------------------------------------
     To add a boat, copy one { ... } block, paste it, and edit the text.
     To remove a boat, delete its { ... } block. Keep the commas between blocks.
       photos: list of image file names/URLs. Drop image files in an "images"
               folder next to this site and reference them like "images/key-largo-1.jpg".
               Leave the list empty ([]) to show a "Photo" placeholder.
  */
  boats: [
    {
      slug:   "key-largo-176",                 // short id used in the web address (letters/numbers/dashes)
      name:   "17′ Key Largo",
      year:   "2004",
      price:  "$22,500",
      engine: "90 HP Mercury Command Thrust",
      badge:  "For sale",
      hp:     "90 HP Mercury Command Thrust",
      hull:   "Center console",
      extra:  "Aluminum trailer included",
      highlights: [               // Short selling points shown on the printable "For Sale" sign.
        "BRAND-NEW 90 HP Mercury Command Thrust",
        "Fully transferable 7-year warranty",
        "Lowrance GPS/fishfinder · new sound system",
        "Aluminum trailer included — turnkey",
      ],
      photos: ["images/keylargo-water-1.jpg", "images/keylargo-water-2.jpg", "images/keylargo-water-3.jpg", "images/keylargo-4.jpg", "images/keylargo-hull-warranty.jpg"],
      blurb:  "Well-kept 17-foot center console with a brand-new 90 HP Mercury and a fully transferable 7-year warranty. Turn-key and ready to fish.",
      desc:   "A well-kept 17-foot Key Largo center console with a brand-new, just-installed 90 HP Mercury Command Thrust outboard backed by a fully transferable 7-year warranty. The boat has been professionally rewired and updated and is equipped with a Lowrance GPS/fishfinder, livewell, and a new sound system.\n\nThe console also has a convenient built-in wireless phone charger.\n\nThe boat comes on a matching aluminum trailer and is truly turnkey — there are no issues, deferred maintenance, or projects to tackle. Just hitch it up, launch it, and go fishing.\n\n$22,500 or OBO\nFinancing available.",
    },
    {
      slug:   "mckee-140",
      name:   "14′ McKee Craft",
      year:   "1977",
      price:  "$15,000",
      engine: "50 HP Mariner FourStroke BigFoot",
      badge:  "For sale",
      hp:     "50 HP Mariner BigFoot 4-stroke (1997)",
      hull:   "Center console",
      extra:  "Galvanized trailer included",
      highlights: [
        "1997 Mariner 50 BigFoot 4-stroke",
        "Hydraulic steering · Bose sound · GPS",
        "Legendary “unsinkable” McKee hull",
        "Galvanized trailer included",
      ],
      photos: ["images/mckee-5.jpg", "images/mckee-3.jpg", "images/mckee-4.jpg", "images/mckee-brochure.jpg"],
      blurb:  "A classic 1977 McKee Craft — the legendary “unsinkable” skiff, lovingly restored. 1997 Mariner 50 BigFoot four-stroke, hydraulic steering, Bose sound & GPS.",
      desc:   "A true Florida classic. From the 1960s on, McKee Craft earned its nickname — “The Unsinkables” — with a double-hull, full-foam-flotation design that keeps the boat afloat even when swamped, built over a cathedral hull that runs dry and stable in a chop. Decades later they're still prized as tough, safe, seaworthy boats that punch well above their size.\n\nThis 1977 14-footer has been lovingly restored — original, beautifully finished woodwork blended with modern upgrades throughout. Power is a 1997 50 HP Mariner FourStroke BigFoot outboard, with hydraulic steering, a new Bose sound system, GPS and fishfinder, and professionally rewired electrics. It's been fully serviced and inspected by a certified outboard technician, with strong compression on all four cylinders. Light, unsinkable by design, and easy to launch — a one-of-a-kind first boat, backwater skiff or weekend fishing rig. Comes on a galvanized trailer.",
    },
  ],

  /* --- Restoration: what you do (the "What we do" list on the Restoration tab) --- */
  restorationWork: [
    { title: "Fiberglass",          body: "Hull repair, stringers, transom rebuilds and gelcoat." },
    { title: "Paint & finish",      body: "Full repaints, buffing, boot stripes and lettering." },
    { title: "Electrical",          body: "New panels, gauges, lighting, pumps and electronics." },
    { title: "Rewiring",            body: "Complete rewire to modern standards — no patchwork." },
    { title: "Mechanical",          body: "Controls, cables, steering, fuel systems and plumbing." },
    { title: "Full engine service", body: "Rebuilds, repowers and certified outboard engine work." },
  ],

  /* --- Restoration budget tiers (shown by the "Name your budget" slider) ---
     max = the top of that budget band; body = what it typically covers. */
  restorationTiers: [
    { max: 12000,    name: "Mechanical refresh",  body: "Full engine service, fluids, water pump and impeller, new controls and cables, plus safety gear — the work that makes an old boat dependable again." },
    { max: 25000,    name: "Refresh + cosmetics", body: "Everything in a mechanical refresh, plus hull buffing or spot paint, new upholstery, a fresh wiring harness and modern gauges." },
    { max: 40000,    name: "Full restoration",    body: "Stripped to the hull: fiberglass and transom repair, complete repaint, full rewire, and a rebuilt console and seating." },
    { max: Infinity, name: "RestoMod",            body: "A full restoration plus a repower with a new outboard, modern electronics, and a layout reworked the way you actually use the boat." },
  ],

  /* --- Restoration gallery (photos of work you've done) ------------------
     Add entries to fill the "Our work" gallery on the Restoration tab.
     Each entry: { src, label } — label is "Before" or "After" (shown as a
     small tag on the photo). Drop the files in the images folder.
     Leave it empty ([]) and the tab shows a friendly "coming soon" note. */
  restorationPhotos: [
    { src: "images/restore-before-1.jpg", label: "Before" },
    { src: "images/restore-before-2.jpg", label: "Before" },
    { src: "images/restore-after-2.jpg",  label: "After"  },
    { src: "images/restore-after.jpg",    label: "After"  },
  ],

  /* Certification badge shown in the credentials box on the Restoration tab.
     Point this at a (non–brand-specific) badge image in images/ to show it,
     or leave "" to use the clean drawn "certified" seal. */
  certifiedBadge: "",
};

/* ============================================================================
   Below this line is the site machinery. You normally won't need to touch it.
   ========================================================================== */

// --- phone / link helpers ---------------------------------------------------
function telHref() {
  const digits = CONFIG.phone.replace(/\D/g, "");
  const e164 = "+" + (digits.length === 10 ? "1" : "") + digits;
  return "tel:" + e164;
}
function smsHref(body) {
  const digits = CONFIG.phone.replace(/\D/g, "");
  const e164 = "+" + (digits.length === 10 ? "1" : "") + digits;
  // "?&body=" form is the most broadly compatible across iOS/Android
  return "sms:" + e164 + "?&body=" + encodeURIComponent(body || "");
}
function boatUrl(slug) {
  const base = CONFIG.websiteUrl.replace(/\/$/, "");
  return base + "/#/boats/" + slug;
}
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function boatBySlug(slug) {
  return CONFIG.boats.find(b => b.slug === slug) || null;
}

// --- icons ------------------------------------------------------------------
const ICON_PATHS = {
  wrench: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  bolt:   "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
  drop:   "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z",
};
function svgIcon(name, size) {
  const d = ICON_PATHS[name] || ICON_PATHS.wrench;
  return `<svg width="${size || 22}" height="${size || 22}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
}
const PHONE_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
const BACK_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`;
const SMS_SVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;

// Call + Text button pair. First tap on either reveals the number; after that
// Call dials and Text opens the SMS app with a prefilled message. `dark` styles
// them for the navy hero. `smsBody` is the prefilled text message.
function callTextButtons(smsBody, dark) {
  const callStyle = dark ? "flex:1;background:var(--color-bg);color:var(--color-accent-900);border-color:var(--color-bg)" : "flex:1";
  const textStyle = dark ? "flex:1;background:transparent;color:var(--color-bg);border-color:var(--color-bg)" : "flex:1";
  const textClass = dark ? "btn phone-link" : "btn btn-secondary phone-link";
  return `<div style="display:flex;gap:8px">
      <a class="btn btn-primary phone-link" data-phone="tel" href="#" style="${callStyle}">${PHONE_SVG} Call</a>
      <a class="${textClass}" data-phone="sms" data-sms-body="${esc(smsBody)}" href="#" style="${textStyle}">${SMS_SVG} Text</a>
    </div>`;
}

// A line that reveals the actual number as readable text once unlocked, so a
// visitor (especially on a computer) can copy it to call or text. `dark` uses
// light text for the navy hero.
function phoneOut(dark) {
  const color = dark ? "color:var(--color-bg);opacity:.85" : "color:color-mix(in srgb,var(--color-text) 60%,transparent)";
  return `<div class="phone-out" style="display:none;font-size:13px;text-align:center;${color}"></div>`;
}

// --- QR (real, scannable) ---------------------------------------------------
function qrSvg(text, size) {
  try {
    const qr = qrcode(0, "M");      // type 0 = auto-size, medium error correction
    qr.addData(text);
    qr.make();
    const count = qr.getModuleCount();
    const cell = size / count;
    let rects = "";
    for (let r = 0; r < count; r++) {
      for (let c = 0; c < count; c++) {
        if (qr.isDark(r, c)) {
          rects += `<rect x="${(c * cell).toFixed(2)}" y="${(r * cell).toFixed(2)}" width="${cell.toFixed(2)}" height="${cell.toFixed(2)}" fill="#000"/>`;
        }
      }
    }
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="display:block"><rect width="${size}" height="${size}" fill="#fff"/>${rects}</svg>`;
  } catch (e) {
    return `<div class="text-muted" style="font-size:11px">QR unavailable</div>`;
  }
}

// --- photo block (real <img> if provided, else the blueprint placeholder) ---
function photoBlock(boat, height) {
  if (boat.photos && boat.photos.length) {
    return `<img src="${esc(boat.photos[0])}" alt="${esc(boat.name)}" loading="lazy" style="width:100%;height:${height}px;object-fit:cover;object-position:center 60%;display:block;border-bottom:1px solid var(--color-divider)">`;
  }
  return `
    <div style="height:${height}px;border-bottom:1px solid var(--color-divider);display:grid;place-items:center;position:relative;background:color-mix(in srgb,var(--color-accent) 6%,transparent)">
      <div style="display:flex;flex-direction:column;align-items:center;gap:6px;color:var(--color-accent)">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.5-3.5L9 20"/></svg>
        <span class="text-muted" style="font-size:10px;letter-spacing:.1em;text-transform:uppercase">Photo</span>
      </div>
    </div>`;
}

// --- views ------------------------------------------------------------------
function viewBoats() {
  const cards = CONFIG.boats.map(b => `
    <article class="blueprint" style="padding:0;background:transparent">
      <i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>
      <a href="#/boats/${esc(b.slug)}" style="display:block;text-decoration:none;color:inherit">
        <div style="position:relative">
          ${photoBlock(b, 186)}
          <span class="tag tag-outline" style="position:absolute;top:10px;left:10px;background:var(--color-bg)">${esc(b.badge)}</span>
        </div>
      </a>
      <div style="padding:13px 14px 15px;display:flex;flex-direction:column;gap:9px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;gap:10px">
          <div>
            <div class="mono" style="font-weight:600;font-size:19px;line-height:1">${esc(b.name)}</div>
            <div class="text-muted" style="font-size:12px;margin-top:3px">${esc(b.engine)}</div>
          </div>
          <div class="mono" style="font-weight:600;font-size:${/^\s*\$/.test(b.price) ? "24px" : "16px"};color:var(--color-accent-700);white-space:nowrap">${esc(b.price)}</div>
        </div>
        <p class="text-muted" style="font-size:13px;margin:0;line-height:1.45">${esc(b.blurb)}</p>
        <div style="margin-top:2px">${callTextButtons("Hi Stardock — is the " + b.name + " still available?", false)}</div>
        <a class="btn btn-secondary btn-block" href="#/boats/${esc(b.slug)}" style="margin-top:8px;text-align:center;justify-content:center">View details</a>
      </div>
    </article>`).join("");

  return `
    <main style="padding:0 0 26px">
      <section style="padding:22px 18px 20px;background:var(--color-accent-900);color:var(--color-bg)">
        <div class="mono" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.7">Boat sales &amp; restoration · Florida</div>
        <h2 style="margin:6px 0 8px;color:var(--color-bg);font-size:30px;line-height:1.02">Boats for sale</h2>
        <p style="font-size:14px;line-height:1.5;margin:0;opacity:.85">Clean, well-kept boats ready to fish. Call or text to come take a look — every boat has its own page and QR code.</p>
        <div class="phone-out" style="display:none;font-size:15px;color:var(--color-bg);opacity:.95;margin-top:12px;font-weight:600"></div>
      </section>

      <section style="padding:22px 18px 6px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:18px">
          <h3 style="margin:0">Available now</h3>
          <span class="text-muted" style="font-size:12px">${CONFIG.boats.length} boats</span>
        </div>
        <div class="boat-grid">${cards}</div>
        <p class="text-muted" style="font-size:12px;text-align:center;line-height:1.5;margin:22px 0 0">See one at the dock? Scan its sign to open that exact boat.</p>
      </section>
    </main>`;
}

function viewDetail(boat) {
  const financing = CONFIG.showFinancing ? `
    <div class="blueprint" style="padding:11px 13px;display:flex;gap:10px;align-items:center;background:color-mix(in srgb,var(--color-accent) 6%,transparent)">
      <i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14"/><path d="M2 10h20"/></svg>
      <div style="font-size:13px;line-height:1.35"><b class="mono">Installment plans available with 50% upfront.</b><br><span class="text-muted">Put half down and pay the rest over time — ask when you reach out.</span></div>
    </div>` : "";

  return `
    <main class="view-narrow" style="padding:14px 18px 26px;display:flex;flex-direction:column;gap:16px">
      <a href="#/boats" class="btn btn-ghost" style="align-self:flex-start;padding-left:0">${BACK_SVG} All boats</a>

      <figure class="blueprint" style="margin:0">
        ${boat.photos && boat.photos.length
          ? `<img id="detail-hero" src="${esc(boat.photos[0])}" alt="${esc(boat.name)}" style="width:100%;max-height:74vh;object-fit:contain;display:block;background:var(--color-neutral-200)">`
          : `<div style="height:230px;display:grid;place-items:center;background:color-mix(in srgb,var(--color-accent) 8%,transparent)"><span class="text-muted mono" style="font-size:12px;letter-spacing:.12em;text-transform:uppercase">Hero Photo</span></div>`}
      </figure>
      ${boat.photos && boat.photos.length > 1
        ? `<div style="display:flex;flex-wrap:wrap;gap:8px">${boat.photos.map(p => `<img src="${esc(p)}" alt="" loading="lazy" onclick="var h=document.getElementById('detail-hero');if(h)h.src=this.src" style="width:74px;height:56px;object-fit:cover;object-position:center 60%;border:1px solid var(--color-divider);cursor:pointer;background:var(--color-neutral-200)">`).join("")}</div>`
        : ""}

      <div>
        ${boat.year ? `<div class="text-muted mono" style="font-size:12px;letter-spacing:.1em;text-transform:uppercase">${esc(boat.year)}</div>` : ""}
        <h2 style="margin:2px 0 4px">${esc(boat.name)}</h2>
        <div class="mono" style="font-weight:600;font-size:34px;color:var(--color-accent-700);line-height:1">${esc(boat.price)}</div>
      </div>

      <div style="display:flex;flex-direction:column;border-top:1px solid var(--color-divider)">
        <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid var(--color-divider)"><span class="text-muted" style="font-size:13px">Engine</span><span class="mono" style="font-weight:600;font-size:14px;text-align:right">${esc(boat.hp)}</span></div>
        <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid var(--color-divider)"><span class="text-muted" style="font-size:13px">Hull</span><span class="mono" style="font-weight:600;font-size:14px;text-align:right">${esc(boat.hull)}</span></div>
        <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid var(--color-divider)"><span class="text-muted" style="font-size:13px">Included</span><span class="mono" style="font-weight:600;font-size:14px;text-align:right">${esc(boat.extra)}</span></div>
      </div>

      <p style="font-size:14px;margin:0;line-height:1.55;white-space:pre-line">${esc(boat.desc)}</p>
      ${financing}

      ${callTextButtons("Hi Stardock — is the " + boat.name + " still available?", false)}
      ${phoneOut(false)}
      <a class="btn btn-ghost btn-block" href="#/boats/${esc(boat.slug)}/sign" style="margin-top:0">Printable "For Sale" sign &amp; QR</a>
    </main>`;
}

function viewSign(boat) {
  const url = boatUrl(boat.slug);
  return `
    <main class="view-narrow" style="padding:14px 18px 26px;display:flex;flex-direction:column;gap:14px">
      <a href="#/boats/${esc(boat.slug)}" class="btn btn-ghost no-print" style="align-self:flex-start;padding-left:0">${BACK_SVG} Back to listing</a>
      <div class="text-muted no-print" style="font-size:12px;line-height:1.5">
        Print this at roughly letter size — the QR ends up about 4×4 in, readable from several feet. Zip-tie or laminate it to the boat.
        <button onclick="window.print()" class="btn btn-secondary btn-block" style="margin-top:10px">Print this sign</button>
      </div>

      <div class="blueprint sign-card" style="padding:24px 22px 26px;text-align:center;background:var(--color-bg)">
        <i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>

        <div style="text-align:center;margin-bottom:6px">
          ${CONFIG.logo
            ? `<img src="${esc(CONFIG.logo)}" alt="${esc(CONFIG.businessName)}" style="height:104px;width:auto;display:block;margin:0 auto" onerror="this.remove();var f=document.getElementById('sign-brand-fb');if(f)f.style.display='inline-block'">
               <div id="sign-brand-fb" class="mono" style="display:none;border:2px solid var(--color-text);padding:6px 12px;font-weight:600;font-size:15px;letter-spacing:.08em">${esc(CONFIG.businessName).toUpperCase()}</div>`
            : `<div class="mono" style="border:2px solid var(--color-text);padding:6px 12px;font-weight:600;font-size:15px;letter-spacing:.08em;display:inline-block">${esc(CONFIG.businessName).toUpperCase()}</div>`}
        </div>

        <div class="mono" style="font-weight:600;font-size:48px;color:var(--color-accent-700);margin:10px 0 0;line-height:.9">FOR SALE</div>
        <div class="mono" style="font-weight:600;font-size:22px;line-height:1.05;margin-top:8px">${esc([boat.year, boat.name].filter(Boolean).join(" "))}</div>
        <div class="mono" style="font-weight:600;font-size:38px;color:var(--color-text);margin:2px 0 2px">${esc(boat.price)}</div>

        ${(boat.highlights && boat.highlights.length)
          ? `<ul style="list-style:none;margin:14px auto 4px;padding:0;max-width:320px;text-align:left;display:flex;flex-direction:column;gap:6px">
              ${boat.highlights.map(h => `<li style="display:flex;gap:8px;align-items:flex-start;font-size:14px;line-height:1.3">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-700)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>${esc(h)}</span>
                </li>`).join("")}
            </ul>`
          : `<div class="text-muted" style="font-size:14px;margin-top:8px">${esc(boat.engine)}</div>`}

        <div class="hr" style="margin:16px 0 14px"></div>
        <div class="text-muted mono" style="font-size:13px;letter-spacing:.06em;text-transform:uppercase;margin-bottom:12px">Scan for photos, full specs &amp; more</div>
        <div style="display:flex;justify-content:center">${qrSvg(url, 180)}</div>
        <div class="mono" style="font-weight:600;font-size:20px;margin-top:14px">Call or Text ${esc(CONFIG.phone)}</div>
        <div class="mono" style="font-weight:600;font-size:15px;color:var(--color-accent-700)">${esc(url.replace(/^https?:\/\//, ""))}</div>
      </div>
    </main>`;
}

function viewRestoration() {
  const restoreSms = "Hi Stardock — I've got a boat I'd like to restore. Here's a bit about it and my budget:";

  const caps = (CONFIG.restorationWork || []).map(c => `
        <div style="display:flex;gap:16px;align-items:baseline;flex-wrap:wrap;padding:13px 2px 14px;border-bottom:1px solid var(--color-divider)">
          <div class="mono" style="font-weight:600;font-size:18px;line-height:1.1;min-width:150px">${esc(c.title)}</div>
          <p class="text-muted" style="font-size:13.5px;margin:0;line-height:1.45;flex:1;min-width:180px">${esc(c.body)}</p>
        </div>`).join("");

  const photos = CONFIG.restorationPhotos || [];
  // Normalize (support legacy plain-string entries too) and split by label.
  const norm = photos.map(p => typeof p === "string" ? { src: p, label: "" } : p);
  const befores = norm.filter(p => /before/i.test(p.label || ""));
  const afters  = norm.filter(p => /after/i.test(p.label || ""));
  const tag = (l) => l
    ? `<figcaption class="mono" style="position:absolute;top:0;left:0;padding:4px 10px;background:var(--color-accent-900);color:var(--color-bg);font-size:11px;letter-spacing:.14em;text-transform:uppercase">${esc(l)}</figcaption>`
    : "";
  const frame = (p, ratio) => `<figure class="blueprint" style="margin:0;position:relative;overflow:hidden"><img src="${esc(p.src)}" alt="${esc(p.label || "Restoration work")}" loading="lazy" style="display:block;width:100%;aspect-ratio:${ratio};object-fit:cover;background:var(--color-neutral-200)">${tag(p.label)}</figure>`;
  const galleryRow = (arr) => `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px">${arr.map(p => frame(p, "3/4")).join("")}</div>`;
  const ourWork = norm.length
    ? `${befores.length ? `<div class="mono" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-text-muted);margin:0 0 7px">Where it started</div>${galleryRow(befores)}` : ""}
       ${afters.length ? `<div class="mono" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700);margin:16px 0 7px">Finished &amp; on the water</div>${galleryRow(afters)}` : ""}
       <div class="text-muted" style="font-size:12px;text-align:center;margin-top:10px">A recent restoration — torn down up north, rebuilt and back on the water in Florida.</div>`
    : `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">${["Before", "After"].map(l => `<figure class="blueprint" style="margin:0;position:relative"><div style="aspect-ratio:4/3;background:color-mix(in srgb,var(--color-accent) 7%,transparent)"></div><figcaption class="mono" style="position:absolute;bottom:0;left:0;padding:5px 9px;background:var(--color-bg);font-size:11px;letter-spacing:.14em;text-transform:uppercase;border-top:1px solid var(--color-divider);border-right:1px solid var(--color-divider)">${l}</figcaption></figure>`).join("")}</div>
       <div class="text-muted" style="font-size:11.5px;text-align:center;margin-top:8px">Before/after photos of finished restorations coming soon.</div>`;

  return `
    <main style="padding:0 0 26px">
      <section style="padding:22px 18px 20px;background:var(--color-accent-900);color:var(--color-bg)">
        <div class="mono" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.7">Restoration &amp; RestoMods · Florida</div>
        <h2 style="margin:6px 0 8px;color:var(--color-bg);font-size:30px;line-height:1.02">Have a beloved boat with some years on it?</h2>
        <p style="font-size:14px;line-height:1.5;margin:0;opacity:.85">We restore and <b>RestoMod</b> classic boats — we keep the soul of your sweetheart and bring it up to date, so a vintage boat gives you a modern boat feel and experience. Tell us what you're after and we'll work up an estimate, or name a budget and we'll lay out what we can do for it, as options.</p>
        ${phoneOut(true)}
      </section>

      <div class="view-narrow">
      <section style="padding:20px 18px 2px">
        <div class="blueprint" style="padding:18px 16px;background:color-mix(in srgb,var(--color-accent) 9%,transparent);display:flex;gap:16px;align-items:center">
          ${CONFIG.certifiedBadge
            ? `<img src="${esc(CONFIG.certifiedBadge)}" alt="Certified outboard technician" width="82" height="82" style="flex:none;width:82px;height:82px;border-radius:50%;object-fit:cover">`
            : `<svg width="72" height="72" viewBox="0 0 100 100" fill="none" style="flex:none">
            <circle cx="50" cy="50" r="46" stroke="var(--color-accent-700)" stroke-width="2.5"/>
            <circle cx="50" cy="50" r="37" stroke="var(--color-accent-700)" stroke-width="1"/>
            <path d="M33 51 l11 11 l23 -25" stroke="var(--color-accent-700)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`}
          <div>
            <div class="mono" style="font-weight:600;font-size:24px;line-height:1.05">Certified Outboard Mechanic</div>
          </div>
        </div>
      </section>

      <section style="padding:26px 18px 0">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:2px">
          <h3 style="margin:0">What we do</h3>
          <span class="text-muted mono" style="font-size:12px;letter-spacing:.1em;text-transform:uppercase">All in-house</span>
        </div>
        <div style="display:flex;flex-direction:column;margin-top:12px;border-top:1px solid var(--color-divider)">${caps}</div>
      </section>

      <section style="padding:26px 18px 0">
        <h3 style="margin:0 0 12px">Our work</h3>
        ${ourWork}
      </section>

      <section style="padding:28px 18px 6px">
        <h3 style="margin:0 0 4px">Two ways to start</h3>
        <p class="text-muted" style="font-size:13px;margin:0 0 14px;line-height:1.5">Tell us the boat and what you'd like done and we'll work up a plan and a price — or name a budget and we'll lay out what we can do for it, as options.</p>

        <div id="resto-toggle" style="display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--color-divider);margin-bottom:16px">
          <button type="button" class="resto-mode" data-mode="estimate" style="border:0;cursor:pointer">
            <span class="mono" style="display:block;font-weight:600;font-size:16px">Get an estimate</span>
            <span style="display:block;font-size:11.5px;opacity:.75;line-height:1.3">Tell us what you want done</span>
          </button>
          <button type="button" class="resto-mode" data-mode="budget" style="border:0;border-left:1px solid var(--color-divider);cursor:pointer">
            <span class="mono" style="display:block;font-weight:600;font-size:16px">Name your budget</span>
            <span style="display:block;font-size:11.5px;opacity:.75;line-height:1.3">We'll lay out the options</span>
          </button>
        </div>

        <div id="budget-panel" class="blueprint" style="display:none;padding:17px 16px 19px;margin-bottom:16px">
          <div style="display:flex;align-items:baseline;justify-content:space-between;gap:12px">
            <span id="budget-amount" class="mono" style="font-weight:600;font-size:34px;color:var(--color-accent-700);line-height:1">$18,000</span>
            <span class="mono text-muted" style="font-size:13px;letter-spacing:.1em;text-transform:uppercase">Your budget</span>
          </div>
          <input id="budget-slider" type="range" min="5000" max="60000" step="1000" value="18000" style="width:100%;accent-color:var(--color-accent);margin:14px 0 4px">
          <div class="text-muted" style="display:flex;justify-content:space-between;font-size:11px"><span>$5k</span><span>$60k+</span></div>
          <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--color-divider)">
            <div class="mono" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-700)">Typically covers</div>
            <div id="tier-name" class="mono" style="font-weight:600;font-size:20px;line-height:1.05;margin-top:5px"></div>
            <p id="tier-body" class="text-muted" style="font-size:13px;margin:7px 0 0;line-height:1.55"></p>
          </div>
        </div>

        <div id="resto-mount"></div>
      </section>
      </div>
    </main>`;
}

// Restoration interactivity: estimate/budget toggle, budget slider, and the
// "tell us about your boat" form (emails you via Web3Forms, mailto fallback).
function wireRestoration() {
  const toggle = document.getElementById("resto-toggle");
  if (!toggle) return;
  const panel = document.getElementById("budget-panel");
  const slider = document.getElementById("budget-slider");
  const amountEl = document.getElementById("budget-amount");
  const tierNameEl = document.getElementById("tier-name");
  const tierBodyEl = document.getElementById("tier-body");
  const mount = document.getElementById("resto-mount");
  let mode = "estimate";

  const money = n => "$" + Math.round(n).toLocaleString("en-US");
  const tiers = CONFIG.restorationTiers || [];
  const tierFor = v => tiers.find(t => v <= t.max) || tiers[tiers.length - 1];
  function updateBudget() {
    const v = Number(slider.value);
    amountEl.textContent = money(v) + (v >= 60000 ? "+" : "");
    const t = tierFor(v);
    if (t) { tierNameEl.textContent = t.name; tierBodyEl.textContent = t.body; }
  }
  function modeStyle(on, second) {
    return "padding:12px 10px;text-align:left;cursor:pointer;border:0;" +
      (second ? "border-left:1px solid var(--color-divider);" : "") +
      (on ? "background:var(--color-accent);color:var(--color-bg)" : "background:transparent;color:var(--color-text)");
  }
  function setMode(m) {
    mode = m;
    toggle.querySelectorAll(".resto-mode").forEach((b, i) =>
      b.setAttribute("style", modeStyle(b.dataset.mode === m, i === 1)));
    panel.style.display = m === "budget" ? "block" : "none";
    const wl = document.getElementById("resto-wish-label");
    if (wl) wl.textContent = m === "budget" ? "What matters most to you?" : "What would you like done?";
    if (m === "budget") updateBudget();
  }
  toggle.querySelectorAll(".resto-mode").forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
  if (slider) slider.addEventListener("input", updateBudget);

  function showSuccess() {
    mount.innerHTML = `
      <div class="blueprint" style="padding:24px 18px;text-align:center;background:color-mix(in srgb,var(--color-accent) 6%,transparent)">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="margin:0 auto"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
        <div class="mono" style="font-weight:600;font-size:20px;margin-top:12px">Request sent</div>
        <p class="text-muted" style="font-size:13px;margin:6px 0 14px;line-height:1.5">Thanks — we'll look it over and get back to you with a plan, usually the same day.</p>
        <button id="resto-again" class="btn btn-secondary">Send another</button>
      </div>`;
    mount.querySelector("#resto-again").addEventListener("click", renderForm);
  }

  function renderForm() {
    mount.innerHTML = `
      <form id="resto-form" style="display:flex;flex-direction:column;gap:13px">
        <div class="field"><label>Your name</label><input class="input" name="name" required placeholder="First and last"></div>
        <div class="field"><label>Phone number</label><input class="input" name="phone" type="tel" required placeholder="(___) ___-____"></div>
        <div class="field"><label>Where is the boat?</label><input class="input" name="location" required placeholder="City, marina, ramp or address"></div>
        <div class="field"><label>Boat &amp; engine</label><input class="input" name="boat" placeholder="e.g. 1969 Chris-Craft, 90 HP outboard"></div>
        <div class="field"><label id="resto-wish-label">What would you like done?</label><textarea class="input" name="wish" required placeholder="Full restoration, repower, new upholstery, rewire…"></textarea></div>
        <div class="field">
          <label>Preferred contact</label>
          <div class="seg">
            <label class="seg-opt"><input type="radio" name="contact" value="Text" checked>Text</label>
            <label class="seg-opt"><input type="radio" name="contact" value="Call">Call</label>
            <label class="seg-opt"><input type="radio" name="contact" value="Email">Email</label>
          </div>
        </div>
        <div class="field" id="resto-email-field" style="display:none"><label>Your email</label><input class="input" name="email" type="email" placeholder="you@example.com"></div>
        <button type="submit" class="btn btn-primary btn-block">Send request</button>
        <div id="resto-error" class="text-muted" style="display:none;font-size:13px;color:var(--color-accent-800)"></div>
      </form>`;
    const form = mount.querySelector("#resto-form");
    const emailField = mount.querySelector("#resto-email-field");
    const errorBox = mount.querySelector("#resto-error");
    form.querySelectorAll('input[name="contact"]').forEach(r => r.addEventListener("change", () => {
      const wantEmail = form.querySelector('input[name="contact"]:checked').value === "Email";
      emailField.style.display = wantEmail ? "" : "none";
      emailField.querySelector("input").required = wantEmail;
    }));
    setMode(mode);   // re-apply the current wish-label wording
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      errorBox.style.display = "none";
      const btn = form.querySelector('button[type="submit"]');
      const data = Object.fromEntries(new FormData(form).entries());
      const budget = mode === "budget"
        ? (Number(slider.value) >= 60000 ? "$60,000+" : money(Number(slider.value)))
        : "";
      const subject = "Restoration request from " + (data.name || "website");
      if (!CONFIG.web3formsAccessKey) {
        const body = ["Name: " + (data.name || ""), "Phone: " + (data.phone || ""),
          "Preferred contact: " + (data.contact || ""), data.email ? "Email: " + data.email : "",
          "Boat location: " + (data.location || ""), "Boat & engine: " + (data.boat || ""),
          budget ? "Budget: " + budget : "", "", "What they want:", data.wish || ""]
          .filter(Boolean).join("\n");
        window.location.href = "mailto:" + CONFIG.notifyEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        showSuccess(); return;
      }
      btn.disabled = true; btn.textContent = "Sending…";
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: CONFIG.web3formsAccessKey, subject,
            from_name: CONFIG.businessName + " website (restoration)",
            replyto: data.email || CONFIG.notifyEmail,
            name: data.name, phone: data.phone, preferred_contact: data.contact,
            email: data.email || "", boat_location: data.location, boat_and_engine: data.boat,
            budget: budget || "n/a", what_they_want: data.wish,
          }),
        });
        const json = await res.json();
        if (json.success) showSuccess(); else throw new Error(json.message || "Send failed");
      } catch (err) {
        btn.disabled = false; btn.textContent = "Send request";
        errorBox.textContent = "Sorry — that didn't go through. Please call or text us at " + CONFIG.phone + ".";
        errorBox.style.display = "";
      }
    });
  }

  setMode("estimate");
  renderForm();
}

function formHtml() {
  return `
    <form id="request-form" style="display:flex;flex-direction:column;gap:13px">
      <div class="field"><label>Your name</label><input class="input" name="name" required placeholder="First and last"/></div>
      <div class="field"><label>Phone number</label><input class="input" name="phone" type="tel" required placeholder="(___) ___-____"/></div>
      <div class="field"><label>Where is the boat?</label><input class="input" name="location" required placeholder="City, marina, ramp or address"/></div>
      <div class="field"><label>Boat &amp; engine</label><input class="input" name="boat" placeholder="e.g. 17′ Key Largo, 90 HP outboard"/></div>
      <div class="field"><label>What's the problem?</label><textarea class="input" name="problem" required placeholder="Won't start, overheating, rough idle…"></textarea></div>
      <div class="field">
        <label>Preferred contact</label>
        <div class="seg">
          <label class="seg-opt"><input type="radio" name="contact" value="Text" checked/>Text</label>
          <label class="seg-opt"><input type="radio" name="contact" value="Call"/>Call</label>
          <label class="seg-opt"><input type="radio" name="contact" value="Email"/>Email</label>
        </div>
      </div>
      <div class="field" id="email-field" style="display:none"><label>Your email</label><input class="input" name="email" type="email" placeholder="you@example.com"/></div>
      <button type="submit" class="btn btn-primary btn-block">Send request</button>
      <div id="form-error" class="text-muted" style="display:none;font-size:13px;color:var(--color-accent-800)"></div>
    </form>`;
}

function formSuccessHtml() {
  return `
    <div class="blueprint" style="padding:24px 18px;text-align:center;background:color-mix(in srgb,var(--color-accent) 6%,transparent)">
      <i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="margin:0 auto"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
      <div class="mono" style="font-weight:600;font-size:20px;margin-top:12px">Request sent</div>
      <p class="text-muted" style="font-size:13px;margin:6px 0 14px;line-height:1.5">Thanks — we'll reach out at the contact method you chose, usually the same day.</p>
      <button id="send-another" class="btn btn-secondary">Send another</button>
    </div>`;
}

// --- form submission (email via Web3Forms, with mailto fallback) ------------
function wireForm(mount) {
  mount.innerHTML = formHtml();
  const form = mount.querySelector("#request-form");
  const emailField = mount.querySelector("#email-field");
  const errorBox = mount.querySelector("#form-error");

  // Reveal the email input when "Email" is the preferred contact.
  form.querySelectorAll('input[name="contact"]').forEach(radio => {
    radio.addEventListener("change", () => {
      const wantEmail = form.querySelector('input[name="contact"]:checked').value === "Email";
      emailField.style.display = wantEmail ? "" : "none";
      emailField.querySelector("input").required = wantEmail;
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorBox.style.display = "none";
    const btn = form.querySelector('button[type="submit"]');
    const data = Object.fromEntries(new FormData(form).entries());

    // No relay key configured yet -> fall back to the visitor's email app.
    if (!CONFIG.web3formsAccessKey) {
      const subject = `Service request from ${data.name || "website"}`;
      const body =
        `Name: ${data.name || ""}\n` +
        `Phone: ${data.phone || ""}\n` +
        `Preferred contact: ${data.contact || ""}\n` +
        (data.email ? `Email: ${data.email}\n` : "") +
        `Boat location: ${data.location || ""}\n` +
        `Boat & engine: ${data.boat || ""}\n\n` +
        `Problem:\n${data.problem || ""}\n`;
      window.location.href = `mailto:${CONFIG.notifyEmail}` +
        `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      mount.innerHTML = formSuccessHtml();
      mount.querySelector("#send-another").addEventListener("click", () => wireForm(mount));
      return;
    }

    // Relay configured -> send through Web3Forms (delivers to your Gmail).
    btn.disabled = true;
    btn.textContent = "Sending…";
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: CONFIG.web3formsAccessKey,
          subject: `Service request from ${data.name || "website"}`,
          from_name: `${CONFIG.businessName} website`,
          replyto: data.email || CONFIG.notifyEmail,
          name: data.name,
          phone: data.phone,
          preferred_contact: data.contact,
          email: data.email || "",
          boat_location: data.location,
          boat_and_engine: data.boat,
          problem: data.problem,
        }),
      });
      const json = await res.json();
      if (json.success) {
        mount.innerHTML = formSuccessHtml();
        mount.querySelector("#send-another").addEventListener("click", () => wireForm(mount));
      } else {
        throw new Error(json.message || "Send failed");
      }
    } catch (err) {
      btn.disabled = false;
      btn.textContent = "Send request";
      errorBox.textContent = "Sorry — that didn't go through. Please call or text us at " + CONFIG.phone + ".";
      errorBox.style.display = "";
    }
  });
}

// --- contact tab ------------------------------------------------------------
// The number is written into the page by JS (this function runs at render
// time), so bots that fetch the static index.html never see a dialable number
// or a tel:/sms: link — same anti-scrape guarantee as the rest of the site —
// while real visitors get it right up front, the way a contact page should.
function viewContact() {
  return `
    <main style="padding:0 0 30px">
      <section style="padding:22px 18px 20px;background:var(--color-accent-900);color:var(--color-bg)">
        <div class="mono" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.7">Get in touch</div>
        <h2 style="margin:6px 0 8px;color:var(--color-bg);font-size:30px;line-height:1.02">Texting is the fastest way to reach us</h2>
        <p style="font-size:14px;line-height:1.5;margin:0;opacity:.85">Or send a quick message below and we'll get right back to you. Serving all of Florida.</p>
        ${phoneOut(true)}
      </section>

      <div class="view-narrow">
        <section style="padding:24px 18px 2px">
          <div id="contact-mount"></div>
        </section>
      </div>
    </main>`;
}

// Contact: one simple message form — name, how to reach you, message. Emails
// you via Web3Forms, with a mailto fallback.
function wireContact() {
  const mount = document.getElementById("contact-mount");
  if (!mount) return;

  function showSuccess() {
    mount.innerHTML = `
      <div class="blueprint" style="padding:24px 18px;text-align:center;background:color-mix(in srgb,var(--color-accent) 6%,transparent)">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="margin:0 auto"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
        <div class="mono" style="font-weight:600;font-size:20px;margin-top:12px">Message sent</div>
        <p class="text-muted" style="font-size:13px;margin:6px 0 14px;line-height:1.5">Thanks — we'll get back to you at the contact method you chose, usually the same day.</p>
        <button id="contact-again" class="btn btn-secondary">Send another</button>
      </div>`;
    mount.querySelector("#contact-again").addEventListener("click", renderForm);
  }

  function renderForm() {
    mount.innerHTML = `
      <form id="contact-form" style="display:flex;flex-direction:column;gap:13px">
        <div class="field"><label>Your name</label><input class="input" name="name" required placeholder="First and last"></div>
        <div class="field"><label>Your message</label><textarea class="input" name="message" required placeholder="How can we help? Tell us about the boat and what you need…"></textarea></div>
        <div class="field">
          <label>How should we reach you? <span class="text-muted" style="font-weight:400">(a phone or an email — at least one)</span></label>
          <input class="input" name="phone" type="tel" inputmode="tel" placeholder="Phone number" style="margin-top:6px">
          <div class="seg" style="margin-top:8px">
            <label class="seg-opt"><input type="radio" name="phonepref" value="Text" checked>Text this number</label>
            <label class="seg-opt"><input type="radio" name="phonepref" value="Call">Call this number</label>
          </div>
          <input class="input" name="email" type="email" placeholder="Email address" style="margin-top:10px">
          <div id="reach-note" style="display:none;font-size:12.5px;color:#b42318;margin-top:8px"></div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Send message</button>
        <div id="contact-error" class="text-muted" style="display:none;font-size:13px;color:var(--color-accent-800)"></div>
      </form>`;
    const form = mount.querySelector("#contact-form");
    const errorBox = mount.querySelector("#contact-error");
    const phoneEl = form.querySelector('input[name="phone"]');
    const emailEl = form.querySelector('input[name="email"]');
    const reachNote = form.querySelector("#reach-note");
    const clearReach = () => {
      phoneEl.style.borderColor = ""; emailEl.style.borderColor = ""; reachNote.style.display = "none";
    };
    phoneEl.addEventListener("input", clearReach);
    emailEl.addEventListener("input", clearReach);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      errorBox.style.display = "none";
      const btn = form.querySelector('button[type="submit"]');
      const data = Object.fromEntries(new FormData(form).entries());
      const phone = (data.phone || "").trim();
      const email = (data.email || "").trim();
      const phonePref = data.phonepref || "Text";
      const phoneValid = phone !== "" && phone.replace(/\D/g, "").length >= 10;
      const emailValid = email !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const RED = "#b42318";
      clearReach();
      if (!phone && !email) {
        phoneEl.style.borderColor = RED; emailEl.style.borderColor = RED;
        reachNote.textContent = "Add a phone number or an email so we can reach you.";
        reachNote.style.display = ""; phoneEl.focus(); return;
      }
      if (phone && !phoneValid) {
        phoneEl.style.borderColor = RED;
        reachNote.textContent = "That phone number doesn't look right — please include the area code.";
        reachNote.style.display = ""; phoneEl.focus(); return;
      }
      if (email && !emailValid) {
        emailEl.style.borderColor = RED;
        reachNote.textContent = "That email doesn't look right — please double-check it.";
        reachNote.style.display = ""; emailEl.focus(); return;
      }
      const reach = phone
        ? phonePref + " " + phone + (email ? ", or email " + email : "")
        : "Email " + email;
      const subject = "Website contact — " + (data.name || "website");
      if (!CONFIG.web3formsAccessKey) {
        const body = ["Name: " + (data.name || ""),
          phone ? "Phone: " + phone + " (prefers " + phonePref.toLowerCase() + ")" : "",
          email ? "Email: " + email : "",
          "Best way to reach: " + reach,
          "", "Message:", data.message || ""].filter(Boolean).join("\n");
        window.location.href = "mailto:" + CONFIG.notifyEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        showSuccess(); return;
      }
      btn.disabled = true; btn.textContent = "Sending…";
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: CONFIG.web3formsAccessKey, subject,
            from_name: CONFIG.businessName + " website (contact)",
            replyto: email || CONFIG.notifyEmail,
            name: data.name,
            phone: phone || "", phone_preference: phone ? phonePref : "",
            email: email || "", best_way_to_reach: reach,
            message: data.message,
          }),
        });
        const json = await res.json();
        if (json.success) showSuccess(); else throw new Error(json.message || "Send failed");
      } catch (err) {
        btn.disabled = false; btn.textContent = "Send message";
        errorBox.textContent = "Sorry — that didn't go through. Please call or text us at " + CONFIG.phone + ".";
        errorBox.style.display = "";
      }
    });
  }

  renderForm();
}


// --- router -----------------------------------------------------------------
function currentRoute() {
  const hash = location.hash.replace(/^#/, "");
  const parts = hash.split("/").filter(Boolean); // e.g. ["boats","key-largo-176","sign"]
  if (parts[0] === "restoration") return { tab: "restoration" };
  if (parts[0] === "contact") return { tab: "contact" };
  if (parts[0] === "boats" && parts[1] && parts[2] === "sign") return { tab: "boats", boat: parts[1], sign: true };
  if (parts[0] === "boats" && parts[1]) return { tab: "boats", boat: parts[1] };
  if (parts[0] === "boats") return { tab: "boats" };
  // default / empty hash
  const d = CONFIG.defaultTab;
  return { tab: (d === "restoration" || d === "contact") ? d : "boats" };
}

function tabStyle(active) {
  // Fluid size: a touch bigger on desktop, scaled down (and never wrapping)
  // on phones so "Boats for Sale" stays on one line. Mixed case to match the
  // rest of the site.
  return "flex:1;padding:17px 6px;border:0;text-decoration:none;text-align:center;white-space:nowrap;border-bottom:3px solid " +
    (active ? "var(--color-accent)" : "transparent") +
    ";background:" + (active ? "color-mix(in srgb,var(--color-accent) 7%,transparent)" : "transparent") +
    ";cursor:pointer;font-size:clamp(16px,4vw,21px);font-weight:700;color:" +
    (active ? "var(--color-accent-700)" : "color-mix(in srgb,var(--color-text) 62%,transparent)") +
    ";font-family:'Barlow Condensed',system-ui,sans-serif";
}

function render() {
  const route = currentRoute();
  const app = document.getElementById("app");

  // Let CSS suppress the redundant header/callbar Call-Text chrome on the
  // Contact tab, where the hero already leads with Call/Text. (Distinct attr
  // name so it doesn't get picked up by the [data-tab] tab-highlight loop.)
  document.body.setAttribute("data-active-tab", route.tab);

  // Tab highlight
  document.querySelectorAll("[data-tab]").forEach(el => {
    el.setAttribute("style", tabStyle(el.getAttribute("data-tab") === route.tab));
  });

  if (route.tab === "restoration") {
    app.innerHTML = viewRestoration();
    wireRestoration();
  } else if (route.tab === "contact") {
    app.innerHTML = viewContact();
    wireContact();
  } else if (route.boat) {
    const boat = boatBySlug(route.boat);
    if (!boat) { location.hash = "#/boats"; return; }
    app.innerHTML = route.sign ? viewSign(boat) : viewDetail(boat);
  } else {
    app.innerHTML = viewBoats();
  }

  refreshPhoneLinks();   // wire freshly-rendered Call/Text buttons to the reveal state
  window.scrollTo(0, 0);
  // gtag('config') already counts the first page_view (and is what Google's
  // tag detector looks for). From the first in-app navigation onward, send a
  // labeled page_view per view (tab or boat) so nothing is double-counted.
  if (render.gaInitDone) trackPageview(route);
  render.gaInitDone = true;
}

// Send a labeled GA4 page_view for the current view so the reports show which
// section people land on (Boats for Sale / Restoration / Contact) and which
// individual boat they open. Safe no-op if analytics isn't loaded.
function trackPageview(route) {
  if (typeof window.gtag !== "function") return;
  let path = "/boats", title = "Boats for Sale";
  if (route.tab === "restoration") { path = "/restoration"; title = "Restoration"; }
  else if (route.tab === "contact") { path = "/contact"; title = "Contact"; }
  else if (route.boat) {
    const boat = boatBySlug(route.boat);
    const name = boat ? boat.name : route.boat;
    path = "/boats/" + route.boat + (route.sign ? "/sign" : "");
    title = name + (route.sign ? " — For-sale sign" : " — Boat details");
  }
  window.gtag("event", "page_view", {
    page_title: title,
    page_path: path,
    page_location: location.href,
  });
}

// --- tap-to-reveal phone links ----------------------------------------------
// Anti-scrape guard: the number is NOT written into the page or the Call/Text
// links until a real visitor taps one. Bots that fetch the page (or don't run
// JS / don't click) never get a dialable number or a tel:/sms: link. The first
// tap reveals the number site-wide and does not dial; after that every phone
// button is a normal live link.
let phoneRevealed = false;

function defaultSmsBody() {
  return "Hi " + CONFIG.businessName + " — I have a question about a boat.";
}

function refreshPhoneLinks() {
  document.querySelectorAll(".phone-link").forEach(a => {
    if (phoneRevealed) {
      a.href = a.getAttribute("data-phone") === "sms"
        ? smsHref(a.getAttribute("data-sms-body") || defaultSmsBody())
        : telHref();
    } else {
      a.setAttribute("href", "#");
    }
  });
  document.querySelectorAll("[data-callbar-label]").forEach(el =>
    (el.textContent = phoneRevealed ? "Call or Text " + CONFIG.phone : "Tap to show number"));
  document.querySelectorAll(".phone-out").forEach(el => {
    if (phoneRevealed) { el.textContent = "Call or text " + CONFIG.phone; el.style.display = "block"; }
    else { el.style.display = "none"; }
  });
}

// First tap on any Call/Text control just reveals the number; the tap does not
// dial. Subsequent taps use the now-live tel:/sms: link.
document.addEventListener("click", (e) => {
  const link = e.target.closest(".phone-link");
  if (!link || phoneRevealed) return;
  e.preventDefault();
  phoneRevealed = true;
  refreshPhoneLinks();
});

window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", () => {
  document.title = CONFIG.businessName + " · Boat Sales & Restoration · Florida";
  render();   // render() calls refreshPhoneLinks() for both static and rendered buttons
});
