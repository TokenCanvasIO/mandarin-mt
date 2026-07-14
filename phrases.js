/* My Phrases — edit this file to add/remove phrases. Pure JSON inside the assignment.
 * Loaded as a script (not fetch) so the app still works when index.html is opened
 * straight from disk (file:// blocks fetch of local JSON in Chrome).
 * Order = play order: easiest first, hardest last. Fields:
 *   en = English meaning, py = pinyin with tone marks, zh = characters.
 * Audio: pre-generated mp3s are used when present (scripts/gen-audio.py),
 * otherwise Youdao/Google TTS fetches each phrase at runtime — new phrases
 * work immediately with no build step.
 */
window.MY_PHRASES = {
  "settings": {
    "repeatsPerPhrase": 3,
    "recallGapMs": 2200,
    "betweenPhrasesMs": 900
  },
  "phrases": [
    { "en": "Hello",                          "py": "nǐ hǎo",                          "zh": "你好" },
    { "en": "Thank you",                      "py": "xièxie",                          "zh": "谢谢" },
    { "en": "Sorry",                          "py": "duìbuqǐ",                         "zh": "对不起" },
    { "en": "No problem",                     "py": "méi guānxi",                      "zh": "没关系" },
    { "en": "Excuse me, may I ask…",          "py": "qǐngwèn",                         "zh": "请问" },
    { "en": "I don't understand",             "py": "wǒ bù dǒng",                      "zh": "我不懂" },
    { "en": "I want this one",                "py": "wǒ yào zhège",                    "zh": "我要这个" },
    { "en": "How much is it?",                "py": "duōshao qián",                    "zh": "多少钱" },
    { "en": "Please say it again",            "py": "qǐng zài shuō yí biàn",           "zh": "请再说一遍" },
    { "en": "Do you speak English?",          "py": "nǐ huì shuō Yīngwén ma",          "zh": "你会说英文吗" },
    { "en": "Where is the bathroom?",         "py": "xǐshǒujiān zài nǎlǐ",             "zh": "洗手间在哪里" },
    { "en": "Can I pay by phone?",            "py": "wǒ kěyǐ yòng shǒujī zhīfù ma",    "zh": "我可以用手机支付吗" }
  ]
};
