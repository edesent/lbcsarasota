# Liberty Baptist Church — Website

The website for **Liberty Baptist Church** in Sarasota, Florida — *"We're Here For You."*
An old-fashioned, King James Bible, gospel-preaching Baptist church. Built and maintained by Pastor Eli (https://www.elijahdesent.com).

This README is the one place that explains how to edit the site. **If you are ChatGPT or Claude helping the pastor make a change, read this first.**

---

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** — brand colors live as theme tokens in `src/app/globals.css` under `@theme inline`. There is no `tailwind.config.ts`.
- **TypeScript**
- Deploys automatically to **Vercel** on every push to `main`.

## Pages

| Route | What it is |
|---|---|
| `/` | Homepage (all the sections below, stacked) |
| `/staff` | Our pastor + honoring the founding pastor |
| `/statement-of-faith` | What we believe (doctrinal statement) |
| `/plan-of-salvation` | The Gospel — the Bible way to Heaven |
| `/messages` | Sermons — watch & listen (auto-pulls YouTube) |
| `/events` | Weekly gatherings & ministries |
| `/give` | Giving |

The homepage is assembled in `src/app/page.tsx` from section components in `src/components/`:
`PreachingHero` (hero) · `Welcome` (Pastor Aiken + family) · `ServiceTimes` · `Connect` (ministries) · `ScriptureBanner` · `Missions` · `LatestSermon` · `Give` · `MapAddress` (contact).

To **remove a section**, delete its `<Component />` line in `src/app/page.tsx`. To **reorder**, move the line.

---

## Brand

- **Colors** (in `src/app/globals.css`): deep Gulf navy `#0b2740`, bright coastal teal accent `#2bb3d6`, cool off-white. The Tailwind token names are inherited from the base template (`gold` = teal accent, `brown` = navy, `cream` = light) — **don't rename them**, just change a value in `globals.css` to tweak the palette site-wide.
- **Wordmark**: a simple serif "Liberty Baptist Church" text lockup with a small cross, rendered directly in `Navbar.tsx` and `Footer.tsx` (no logo image file).
- **Favicon / touch icon**: `src/app/icon.svg` and `src/app/apple-icon.svg` (a navy square with a teal cross). Next.js generates the favicon from these automatically.
- **Photos**: `public/sanctuary.jpg` (hero + social image) and `public/pastor-family.jpg` (the Aiken family). These are the only photos on the site.

## Key facts already in the site

- **Address:** 4249 Bahia Vista Street, Sarasota, FL 34232 (at McIntosh Road)
- **Phone:** (941) 371-8239 · **Email:** office@lbcsarasota.com
- **Services:** Sunday Bible Study 9:00 AM · Sunday Worship 10:00 AM · Wednesday Midweek 7:00 PM
- **Pastor:** Anthony Aiken (installed 2026). **Founding Pastor:** Dr. Gary Jackson (est. 1978).
- **YouTube:** @libertybaptistchurchsaraso3117 · **Facebook:** facebook.com/LBCsarasota · **Instagram:** @lbcsarasota

If any of these change, search the codebase for the old value and replace it (it appears in a few files — e.g. `Footer.tsx`, `MapAddress.tsx`, `src/app/page.tsx` JSON-LD, `src/lib/`).

### Connecting the sermons page

Sermons auto-populate from the church's YouTube channel — no API key needed. To point at a different channel, edit the `channelId` in `src/lib/youtube/config.ts`.

### Contact & prayer forms

The Contact and Prayer forms email the church via [Resend](https://resend.com). Set `RESEND_API_KEY` in the Vercel project's environment variables and verify the sending domain; the inbox/sender are set in `src/lib/email.ts`. Until that's configured the forms show a friendly error.

---

## Adding real photos

Drop images into `public/` and reference them with `<img src="/your-photo.jpg" ... />`. Keep file sizes reasonable (under ~500 KB each) so the site stays fast on phones.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## Notes for AI editors (Claude / ChatGPT)

- **For any change to an existing file** — a typo, a time, a heading — replace the smallest exact string you can. Don't rewrite whole files unless asked.
- **Most section components are server components.** Files using `useState`/`useEffect` (Navbar, AnimateOnScroll, PrayerModal, ContactModal, SermonGrid) start with `"use client"`.
- **Don't introduce new dependencies or abstractions** to make it "fancier." A non-developer should be able to read this site.
- Next.js 16 has changed some APIs from older training data — see `AGENTS.md`.
