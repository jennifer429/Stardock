/* ============================================================================
   STARDOCK MARINE — site settings
   ============================================================================
   EVERYTHING you'd normally want to change lives in this CONFIG block.
   You do NOT need to know how to code to edit it — just change the text
   between the quotes. Keep the quotes and commas where they are.
   ========================================================================== */

const CONFIG = {

  /* --- Business ---------------------------------------------------------- */
  phone: "(386) 555-0142",          // Your call/text number. Shown on the site + QR signs.
  businessName: "Stardock Incorporated",
  websiteUrl: "https://stardock.com", // Your live web address (used to build each boat's shareable link + QR).

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
  defaultTab: "boats",              // "boats" or "repair" — which tab shows first.
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
      year:   "2019",
      price:  "$20,000",
      engine: "90 HP Mercury outboard",
      badge:  "For sale",
      hp:     "90 HP Mercury",
      hull:   "Center console",
      extra:  "Trailer included",
      photos: [],
      blurb:  "Clean center console, low hours, runs strong. Great all-around fishing and family boat.",
      desc:   "A well-kept 17-foot Key Largo center console with a 90 HP Mercury outboard. Low hours, recent service, and it comes on a matching aluminum trailer. Fishes great and easy to tow — a solid, dependable boat for the whole family.",
    },
    {
      slug:   "mckee-140",
      name:   "14′ McKee Craft",
      year:   "2014",
      price:  "$15,000",
      engine: "50 HP Mercury outboard",
      badge:  "For sale",
      hp:     "50 HP Mercury",
      hull:   "Center console",
      extra:  "Trailer included",
      photos: [],
      blurb:  "Tough little McKee with a 50 HP Merc. Perfect first boat or backwater skiff.",
      desc:   "A tough, well-built 14-foot McKee Craft with a 50 HP Mercury outboard. Aluminum trailer included, new bilge pump. Light, easy to launch, and gets you into the skinny water — an ideal first boat or backwater skiff.",
    },
  ],

  /* --- Repair services (the 2x2 grid on the repair tab) ------------------ */
  services: [
    { title: "Outboard & Inboard Motors", body: "Diagnostics, service, repair, installation & repowering.", icon: "wrench" },
    { title: "Boat Electronics",          body: "Wiring, gauges, GPS, fish finders & electrical troubleshooting.", icon: "bolt" },
    { title: "Marine Systems",            body: "Fuel systems, water pumps, impellers, bilge & steering.", icon: "drop" },
    { title: "Regular Maintenance",       body: "Annual service, winterizing, tune-ups & pre-purchase checks.", icon: "wrench" },
  ],
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
    return `<img src="${esc(boat.photos[0])}" alt="${esc(boat.name)}" style="width:100%;height:${height}px;object-fit:cover;display:block;border-bottom:1px solid var(--color-divider)">`;
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
          <div class="mono" style="font-weight:600;font-size:24px;color:var(--color-accent-700);white-space:nowrap">${esc(b.price)}</div>
        </div>
        <p class="text-muted" style="font-size:13px;margin:0;line-height:1.45">${esc(b.blurb)}</p>
        <a class="btn btn-primary btn-block" href="${telHref()}" style="margin-top:2px">${PHONE_SVG} Call or Text</a>
        <div style="display:flex;gap:8px">
          <a class="btn btn-secondary" href="#/boats/${esc(b.slug)}" style="flex:1;text-align:center;justify-content:center">View details</a>
          <a class="btn btn-secondary" href="${smsHref("Hi Stardock — is the " + b.name + " still available?")}" style="flex:1">Still available?</a>
        </div>
      </div>
    </article>`).join("");

  return `
    <main style="padding:18px 18px 26px;display:flex;flex-direction:column;gap:20px">
      <div style="display:flex;align-items:baseline;justify-content:space-between">
        <h3 style="margin:0">Boats for Sale</h3>
        <span class="text-muted" style="font-size:12px">${CONFIG.boats.length} available</span>
      </div>
      ${cards}
      <p class="text-muted" style="font-size:12px;text-align:center;line-height:1.5;margin:4px 0 0">Every boat has its own page &amp; QR code.<br>See one at the dock? Scan its sign for that exact boat.</p>
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
    <main style="padding:14px 18px 26px;display:flex;flex-direction:column;gap:16px">
      <a href="#/boats" class="btn btn-ghost" style="align-self:flex-start;padding-left:0">${BACK_SVG} All boats</a>

      <figure class="blueprint duotone" style="margin:0">
        <i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>
        ${boat.photos && boat.photos.length
          ? `<img src="${esc(boat.photos[0])}" alt="${esc(boat.name)}" style="width:100%;height:230px;object-fit:cover;display:block">`
          : `<div style="height:230px;display:grid;place-items:center;background:color-mix(in srgb,var(--color-accent) 8%,transparent)"><span class="text-muted mono" style="font-size:12px;letter-spacing:.12em;text-transform:uppercase">Hero Photo</span></div>`}
      </figure>

      <div>
        <div class="text-muted mono" style="font-size:12px;letter-spacing:.1em;text-transform:uppercase">${esc(boat.year)}</div>
        <h2 style="margin:2px 0 4px">${esc(boat.name)}</h2>
        <div class="mono" style="font-weight:600;font-size:34px;color:var(--color-accent-700);line-height:1">${esc(boat.price)}</div>
      </div>

      <div style="display:flex;flex-direction:column;border-top:1px solid var(--color-divider)">
        <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid var(--color-divider)"><span class="text-muted" style="font-size:13px">Engine</span><span class="mono" style="font-weight:600;font-size:14px;text-align:right">${esc(boat.hp)}</span></div>
        <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid var(--color-divider)"><span class="text-muted" style="font-size:13px">Hull</span><span class="mono" style="font-weight:600;font-size:14px;text-align:right">${esc(boat.hull)}</span></div>
        <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid var(--color-divider)"><span class="text-muted" style="font-size:13px">Included</span><span class="mono" style="font-weight:600;font-size:14px;text-align:right">${esc(boat.extra)}</span></div>
      </div>

      <p style="font-size:14px;margin:0;line-height:1.55">${esc(boat.desc)}</p>
      ${financing}

      <a class="btn btn-primary btn-block" href="${telHref()}">${PHONE_SVG} Call or Text about this boat</a>
      <a class="btn btn-secondary btn-block" href="${smsHref("Hi Stardock — is the " + boat.name + " still available?")}" style="margin-top:0">Is this still available?</a>
      <a class="btn btn-ghost btn-block" href="#/boats/${esc(boat.slug)}/sign" style="margin-top:0">Printable "For Sale" sign &amp; QR</a>
    </main>`;
}

function viewSign(boat) {
  const url = boatUrl(boat.slug);
  return `
    <main style="padding:14px 18px 26px;display:flex;flex-direction:column;gap:14px">
      <a href="#/boats/${esc(boat.slug)}" class="btn btn-ghost no-print" style="align-self:flex-start;padding-left:0">${BACK_SVG} Back to listing</a>
      <div class="text-muted no-print" style="font-size:12px;line-height:1.5">
        Print this at roughly letter size — the QR ends up about 4×4 in, readable from several feet. Zip-tie or laminate it to the boat.
        <button onclick="window.print()" class="btn btn-secondary btn-block" style="margin-top:10px">Print this sign</button>
      </div>

      <div class="blueprint sign-card" style="padding:26px 22px 28px;text-align:center;background:var(--color-bg)">
        <i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>
        <div class="mono" style="border:2px solid var(--color-text);padding:6px 4px;font-weight:600;font-size:15px;letter-spacing:.08em">${esc(CONFIG.businessName).toUpperCase()}</div>
        <div class="mono" style="font-weight:600;font-size:46px;color:var(--color-accent-700);margin:16px 0 0;line-height:.9">FOR SALE</div>
        <div class="mono" style="font-weight:600;font-size:34px;margin:2px 0 10px">${esc(boat.price)}</div>
        <div class="mono" style="font-weight:600;font-size:20px;line-height:1.05">${esc(boat.year)} ${esc(boat.name)}</div>
        <div class="text-muted" style="font-size:14px">${esc(boat.engine)}</div>
        <div class="text-muted mono" style="font-size:13px;letter-spacing:.06em;text-transform:uppercase;margin:16px 0 12px">Scan for photos, specs &amp; price</div>
        <div style="display:flex;justify-content:center">${qrSvg(url, 190)}</div>
        <div class="mono" style="font-weight:600;font-size:18px;margin-top:14px">Call or Text ${esc(CONFIG.phone)}</div>
        <div class="mono" style="font-weight:600;font-size:16px;color:var(--color-accent-700)">${esc(url.replace(/^https?:\/\//, ""))}</div>
      </div>
    </main>`;
}

function viewRepair() {
  const services = CONFIG.services.map(s => `
    <div class="blueprint" style="padding:13px 12px 14px">
      <i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>
      <div style="color:var(--color-accent)">${svgIcon(s.icon, 22)}</div>
      <div class="mono" style="font-weight:600;font-size:15px;margin-top:9px;line-height:1.1">${esc(s.title)}</div>
      <p class="text-muted" style="font-size:12px;margin:5px 0 0;line-height:1.4">${esc(s.body)}</p>
    </div>`).join("");

  return `
    <main style="padding:0 0 26px">
      <section style="padding:22px 18px 20px;background:var(--color-accent-900);color:var(--color-bg)">
        <div class="mono" style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.7">We come to you</div>
        <h2 style="margin:6px 0 8px;color:var(--color-bg);font-size:30px;line-height:1.02">Mobile boat &amp;<br>engine repair</h2>
        <p style="font-size:14px;line-height:1.5;margin:0;opacity:.85">Dockside, driveway or ramp — we service your boat where it sits, anywhere in Florida. Certified Mercury Marine mechanic.</p>
        <a class="btn btn-block" href="${telHref()}" style="margin-top:14px;background:var(--color-bg);color:var(--color-accent-900);border-color:var(--color-bg)">${PHONE_SVG} Call or Text Us</a>
      </section>

      <section style="padding:22px 18px 6px">
        <h3 style="margin:0 0 14px">What we service</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">${services}</div>
      </section>

      <section style="padding:20px 18px 6px">
        <div class="blueprint" style="padding:16px 15px;background:color-mix(in srgb,var(--color-accent) 6%,transparent)">
          <i class="corner tl"></i><i class="corner tr"></i><i class="corner bl"></i><i class="corner br"></i>
          <div style="display:flex;gap:13px;align-items:flex-start">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px"><path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/><path d="M8.5 8.5 12 12l3.5-3.5"/><path d="m8.5 14 -1.5 7 5-3 5 3-1.5-7"/></svg>
            <div>
              <div class="mono" style="font-weight:600;font-size:17px;line-height:1.1">Certified Mercury Marine Mechanic</div>
              <p class="text-muted" style="font-size:13px;margin:6px 0 0;line-height:1.5">Factory-trained and family-run. Straight answers, fair rates, and work we stand behind — the way it should be.</p>
            </div>
          </div>
        </div>
      </section>

      <section style="padding:22px 18px 6px">
        <h3 style="margin:0 0 4px">Request service</h3>
        <p class="text-muted" style="font-size:13px;margin:0 0 16px;line-height:1.5">Tell us what's going on and where the boat is. We'll get back to you — texting photos is fastest.</p>
        <div id="form-mount"></div>
      </section>
    </main>`;
}

function formHtml() {
  return `
    <form id="request-form" style="display:flex;flex-direction:column;gap:13px">
      <div class="field"><label>Your name</label><input class="input" name="name" required placeholder="First and last"/></div>
      <div class="field"><label>Phone number</label><input class="input" name="phone" type="tel" required placeholder="(___) ___-____"/></div>
      <div class="field"><label>Where is the boat?</label><input class="input" name="location" required placeholder="City, marina, ramp or address"/></div>
      <div class="field"><label>Boat &amp; engine</label><input class="input" name="boat" placeholder="e.g. 17′ Key Largo, 90 HP Mercury"/></div>
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

// --- router -----------------------------------------------------------------
function currentRoute() {
  const hash = location.hash.replace(/^#/, "");
  const parts = hash.split("/").filter(Boolean); // e.g. ["boats","key-largo-176","sign"]
  if (parts[0] === "repair") return { tab: "repair" };
  if (parts[0] === "boats" && parts[1] && parts[2] === "sign") return { tab: "boats", boat: parts[1], sign: true };
  if (parts[0] === "boats" && parts[1]) return { tab: "boats", boat: parts[1] };
  if (parts[0] === "boats") return { tab: "boats" };
  // default / empty hash
  return { tab: CONFIG.defaultTab === "repair" ? "repair" : "boats" };
}

function tabStyle(active) {
  return "flex:1;padding:14px 8px;border:0;text-decoration:none;text-align:center;border-bottom:3px solid " +
    (active ? "var(--color-accent)" : "transparent") +
    ";background:transparent;cursor:pointer;font-size:16px;font-weight:600;color:" +
    (active ? "var(--color-accent-700)" : "color-mix(in srgb,var(--color-text) 55%,transparent)") +
    ";font-family:'Barlow Condensed',system-ui,sans-serif";
}

function render() {
  const route = currentRoute();
  const app = document.getElementById("app");

  // Tab highlight
  document.querySelectorAll("[data-tab]").forEach(el => {
    el.setAttribute("style", tabStyle(el.getAttribute("data-tab") === route.tab));
  });

  if (route.tab === "repair") {
    app.innerHTML = viewRepair();
    wireForm(app.querySelector("#form-mount"));
  } else if (route.boat) {
    const boat = boatBySlug(route.boat);
    if (!boat) { location.hash = "#/boats"; return; }
    app.innerHTML = route.sign ? viewSign(boat) : viewDetail(boat);
  } else {
    app.innerHTML = viewBoats();
  }

  window.scrollTo(0, 0);
}

// --- wire the static call/text links + boot ---------------------------------
function applyPhoneLinks() {
  document.querySelectorAll("[data-tel]").forEach(a => (a.href = telHref()));
  document.querySelectorAll("[data-sms]").forEach(a =>
    (a.href = smsHref("Hi " + CONFIG.businessName + " — I've got a boat that needs service.")));
  document.querySelectorAll("[data-callbar-label]").forEach(el =>
    (el.textContent = "Call or Text " + CONFIG.phone));
  document.title = CONFIG.businessName + " · Marine Sales & Repair · Florida";
}

window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", () => {
  applyPhoneLinks();
  render();
});
