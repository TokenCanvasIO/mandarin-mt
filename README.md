# Mandarin — teacher-student method (Michel Thomas / Harold Goodman style)

Single-file web app. No framework, no build step. Open `index.html` in a browser,
click **Begin lesson**, and it runs the classroom automatically.

## Audio
- English (Harold + students): browser SpeechSynthesis — no API, free.
- Mandarin (Jingtao): Google Translate TTS (free, unofficial) by default,
  Youdao fallback, optional Azure Neural (paste key in Settings).

## Status
- Logic-verified: tone diacritics, sandhi (bù→bú, kěyǐ), méiyǒu-not-bùyǒu,
  liǎng-not-èr, Chinese punctuation. See docs/audit for model reviews.
- Not yet browser-tested for live audio playback.

## Deploy options
See docs/DEPLOY.md.
