# Deployment + audio + API decisions

## Is it HTML? Yes.
Single self-contained HTML file. No framework, no build step. That IS the app.
Correct choice for this — it runs anywhere, forever, with nothing to maintain.

## Audio vs website — not either/or
The same file works both ways:
- Local: double-click / file:// — audio plays.
- Hosted website (GitHub Pages, Netlify, Cloudflare Pages — all free): audio plays,
  usable on phones by URL, installable to home screen as a PWA.
For a daily-use language app on phones, HOST IT. Same file, just put it on a host.

## Do we need APIs? Depends on personal vs released.

English teacher/students: browser SpeechSynthesis. No API. Free. Always.

Mandarin (Jingtao) — three postures:

1. NOW / personal — Google Translate TTS (current default).
   - No key, free. BUT unofficial endpoint: rate-limits, can break, and relying on it
     for a public product breaks Google ToS. Fine for you personally. Not for release.

2. RELEASE, recommended — PRE-GENERATED STATIC AUDIO.
   - The vocabulary is FIXED (~150 words/phrases, all known at build time).
   - Generate them ONCE with a quality TTS (Azure/Google Cloud/ElevenLabs), save as
     audio/*.mp3, ship with the site.
   - Result: NO runtime API, NO key in the browser, NO rate limits, instant playback,
     works offline, free to serve. This is the professional path.
   - scripts/gen-audio.mjs (to be built) reads the phrase list and produces the files.

3. RELEASE, dynamic — official TTS API behind a proxy.
   - Only if you later want unlimited/new content. Azure Neural ~ $16 / 1M chars (cheap).
   - The key MUST live in a tiny serverless proxy (Cloudflare Worker / Netlify function),
     NEVER in the client. More moving parts.

## Recommendation
- Personal, today: leave as-is (Google free). Zero setup, no API.
- Product: host the single file + pre-generated static MP3s. No runtime API, no key,
  reliable and free. Add the Azure-key path only as a power-user option.
