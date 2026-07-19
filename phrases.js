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
  {
   "en": "He / she / it (all sound the same)",
   "py": "tā",
   "zh": "他"
  },
  {
   "en": "All",
   "py": "dōu",
   "zh": "都"
  },
  {
   "en": "And (joining nouns)",
   "py": "hé",
   "zh": "和"
  },
  {
   "en": "And also / too",
   "py": "yě",
   "zh": "也"
  },
  {
   "en": "Who?",
   "py": "shéi?",
   "zh": "谁？"
  },
  {
   "en": "To buy",
   "py": "mǎi",
   "zh": "买"
  },
  {
   "en": "Hi",
   "py": "nǐ hǎo",
   "zh": "你好"
  },
  {
   "en": "Very good",
   "py": "hěn hǎo",
   "zh": "很好"
  },
  {
   "en": "Good night",
   "py": "wǎnān",
   "zh": "晚安"
  },
  {
   "en": "Not bad",
   "py": "hái xíng",
   "zh": "还行"
  },
  {
   "en": "Of course",
   "py": "dāngrán",
   "zh": "当然"
  },
  {
   "en": "Thank you",
   "py": "xièxie",
   "zh": "谢谢"
  },
  {
   "en": "Excuse me, may I ask…",
   "py": "qǐngwèn",
   "zh": "请问"
  },
  {
   "en": "Because",
   "py": "yīnwei",
   "zh": "因为"
  },
  {
   "en": "My / mine",
   "py": "wǒde",
   "zh": "我的"
  },
  {
   "en": "Your / yours",
   "py": "nǐde",
   "zh": "你的"
  },
  {
   "en": "His / hers",
   "py": "tāde",
   "zh": "他的"
  },
  {
   "en": "Friend",
   "py": "péngyǒu",
   "zh": "朋友"
  },
  {
   "en": "Teacher",
   "py": "lǎoshī",
   "zh": "老师"
  },
  {
   "en": "Student",
   "py": "xuéshēng",
   "zh": "学生"
  },
  {
   "en": "Goodbye (see you again)",
   "py": "zàijiàn",
   "zh": "再见"
  },
  {
   "en": "Thing / things",
   "py": "dōngxi",
   "zh": "东西"
  },
  {
   "en": "Where?",
   "py": "nǎr?",
   "zh": "哪儿？"
  },
  {
   "en": "Here",
   "py": "zhèr",
   "zh": "这儿"
  },
  {
   "en": "There",
   "py": "nàr",
   "zh": "那儿"
  },
  {
   "en": "Good morning",
   "py": "zǎoshang hǎo",
   "zh": "早上好"
  },
  {
   "en": "How are you?",
   "py": "nǐ hǎo ma?",
   "zh": "你好吗？"
  },
  {
   "en": "I am hungry",
   "py": "wǒ è le",
   "zh": "我饿了"
  },
  {
   "en": "I am thirsty",
   "py": "wǒ kě le",
   "zh": "我渴了"
  },
  {
   "en": "I am tired",
   "py": "wǒ lèi le",
   "zh": "我累了"
  },
  {
   "en": "Both",
   "py": "liǎnggè dōu",
   "zh": "两个都"
  },
  {
   "en": "See you tomorrow",
   "py": "míngtiān jiàn",
   "zh": "明天见"
  },
  {
   "en": "I am fine",
   "py": "wǒ hěn hǎo",
   "zh": "我很好"
  },
  {
   "en": "I am busy",
   "py": "wǒ hěn máng",
   "zh": "我很忙"
  },
  {
   "en": "I am not busy",
   "py": "wǒ bù máng",
   "zh": "我不忙"
  },
  {
   "en": "I am cold",
   "py": "wǒ hěn lěng",
   "zh": "我很冷"
  },
  {
   "en": "I am hot",
   "py": "wǒ hěn rè",
   "zh": "我很热"
  },
  {
   "en": "It is raining",
   "py": "xià yǔ le",
   "zh": "下雨了"
  },
  {
   "en": "Really?",
   "py": "zhēn de ma?",
   "zh": "真的吗？"
  },
  {
   "en": "No problem",
   "py": "méi wèntí",
   "zh": "没问题"
  },
  {
   "en": "That's fine / it doesn't matter",
   "py": "méi guānxi",
   "zh": "没关系"
  },
  {
   "en": "Wait a moment",
   "py": "děng yīxià",
   "zh": "等一下"
  },
  {
   "en": "You're welcome",
   "py": "bù kèqi",
   "zh": "不客气"
  },
  {
   "en": "I am sorry",
   "py": "duìbuqǐ",
   "zh": "对不起"
  },
  {
   "en": "That is great",
   "py": "tài hǎo le",
   "zh": "太好了"
  },
  {
   "en": "I agree",
   "py": "wǒ tóngyì",
   "zh": "我同意"
  },
  {
   "en": "Our / ours",
   "py": "wǒmende",
   "zh": "我们的"
  },
  {
   "en": "Who is she?",
   "py": "tā shì shéi?",
   "zh": "她是谁？"
  },
  {
   "en": "Hi, how is it going?",
   "py": "nǐ zěnmeyàng?",
   "zh": "你怎么样？"
  },
  {
   "en": "What time is it?",
   "py": "xiànzài jǐ diǎn?",
   "zh": "现在几点？"
  },
  {
   "en": "I don't understand",
   "py": "wǒ tīng bù dǒng",
   "zh": "我听不懂"
  },
  {
   "en": "I am back",
   "py": "wǒ huí lái le",
   "zh": "我回来了"
  },
  {
   "en": "Welcome back",
   "py": "huānyíng huí lái",
   "zh": "欢迎回来"
  },
  {
   "en": "Are you ok?",
   "py": "nǐ hái hǎo ma?",
   "zh": "你还好吗？"
  },
  {
   "en": "I am full",
   "py": "wǒ chī bǎo le",
   "zh": "我吃饱了"
  },
  {
   "en": "I am going out",
   "py": "wǒ chūqù le",
   "zh": "我出去了"
  },
  {
   "en": "I am working",
   "py": "wǒ zài gōngzuò",
   "zh": "我在工作"
  },
  {
   "en": "I don't know",
   "py": "wǒ bù zhīdào",
   "zh": "我不知道"
  },
  {
   "en": "I think so",
   "py": "wǒ juéde shì",
   "zh": "我觉得是"
  },
  {
   "en": "Thank you so much",
   "py": "fēicháng gǎnxiè",
   "zh": "非常感谢"
  },
  {
   "en": "I am happy",
   "py": "wǒ hěn gāoxìng",
   "zh": "我很高兴"
  },
  {
   "en": "I don't agree",
   "py": "wǒ bù tóngyì",
   "zh": "我不同意"
  },
  {
   "en": "I want this one",
   "py": "wǒ yào zhège",
   "zh": "我要这个"
  },
  {
   "en": "Where is he?",
   "py": "tā zài nǎr?",
   "zh": "他在哪儿？"
  },
  {
   "en": "Did you sleep ok?",
   "py": "nǐ shuì de hǎo ma?",
   "zh": "你睡得好吗？"
  },
  {
   "en": "Do you want a cup of tea?",
   "py": "nǐ yào hē chá ma?",
   "zh": "你要喝茶吗？"
  },
  {
   "en": "That was delicious",
   "py": "zhège zhēn hǎochī",
   "zh": "这个真好吃"
  },
  {
   "en": "I am going to the shop",
   "py": "wǒ qù shāngdiàn le",
   "zh": "我去商店了"
  },
  {
   "en": "How much is that?",
   "py": "zhège duōshao qián?",
   "zh": "这个多少钱？"
  },
  {
   "en": "What is that?",
   "py": "nàge shì shénme?",
   "zh": "那个是什么？"
  },
  {
   "en": "How do you say that?",
   "py": "zhège zěnme shuō?",
   "zh": "这个怎么说？"
  },
  {
   "en": "I am a person",
   "py": "wǒ shì yīgè rén",
   "zh": "我是一个人"
  },
  {
   "en": "You are a person",
   "py": "nǐ shì yīgè rén",
   "zh": "你是一个人"
  },
  {
   "en": "She is a person",
   "py": "tā shì yīgè rén",
   "zh": "她是一个人"
  },
  {
   "en": "He is a person",
   "py": "tā shì yīgè rén",
   "zh": "他是一个人"
  },
  {
   "en": "You are Chinese",
   "py": "nǐ shì Zhōngguórén",
   "zh": "你是中国人"
  },
  {
   "en": "I am Chinese",
   "py": "wǒ shì Zhōngguórén",
   "zh": "我是中国人"
  },
  {
   "en": "I am English / British",
   "py": "wǒ shì Yīngguórén",
   "zh": "我是英国人"
  },
  {
   "en": "Do you want some water?",
   "py": "nǐ yào hē shuǐ ma?",
   "zh": "你要喝水吗？"
  },
  {
   "en": "I am coming back soon",
   "py": "wǒ mǎshàng huí lái",
   "zh": "我马上回来"
  },
  {
   "en": "I am going for a walk",
   "py": "wǒ qù sànbù le",
   "zh": "我去散步了"
  },
  {
   "en": "What are you doing?",
   "py": "nǐ zài zuò shénme?",
   "zh": "你在做什么？"
  },
  {
   "en": "I am on the phone",
   "py": "wǒ zài dǎ diànhuà",
   "zh": "我在打电话"
  },
  {
   "en": "I don't think so",
   "py": "wǒ juéde bú shì",
   "zh": "我觉得不是"
  },
  {
   "en": "Can you help me?",
   "py": "nǐ néng bāng wǒ ma?",
   "zh": "你能帮我吗？"
  },
  {
   "en": "You are American",
   "py": "nǐ shì Měiguórén",
   "zh": "你是美国人"
  },
  {
   "en": "I want to buy things (go shopping)",
   "py": "wǒ yào mǎi dōngxi",
   "zh": "我要买东西"
  },
  {
   "en": "I am off to get some lunch",
   "py": "wǒ qù chī wǔfàn le",
   "zh": "我去吃午饭了"
  },
  {
   "en": "It's so good to be here",
   "py": "néng lái zhèr zhēn hǎo",
   "zh": "能来这儿真好"
  },
  {
   "en": "What a nice day",
   "py": "jīntiān tiānqì zhēn hǎo",
   "zh": "今天天气真好"
  },
  {
   "en": "Do you want to go for a walk?",
   "py": "nǐ xiǎng qù sànbù ma?",
   "zh": "你想去散步吗？"
  },
  {
   "en": "I will be back in a minute",
   "py": "wǒ yīhuìr huí lái",
   "zh": "我一会儿回来"
  },
  {
   "en": "That is very interesting",
   "py": "zhège hěn yǒu yìsi",
   "zh": "这个很有意思"
  },
  {
   "en": "I am learning Chinese",
   "py": "wǒ zhèngzài xué zhōngwén",
   "zh": "我正在学中文"
  },
  {
   "en": "I want to come back to Guiyang",
   "py": "wǒ xiǎng zài lái Guìyáng",
   "zh": "我想再来贵阳"
  },
  {
   "en": "Do you speak English?",
   "py": "nǐ huì shuō Yīngwén ma",
   "zh": "你会说英文吗"
  },
  {
   "en": "Where is the bathroom?",
   "py": "xǐshǒujiān zài nǎlǐ",
   "zh": "洗手间在哪里"
  },
  {
   "en": "Because I am too busy",
   "py": "yīnwei wǒ tài máng le",
   "zh": "因为我太忙了"
  },
  {
   "en": "This is my friend",
   "py": "zhè shì wǒde péngyǒu",
   "zh": "这是我的朋友"
  },
  {
   "en": "Do you want to get some lunch?",
   "py": "nǐ xiǎng qù chī wǔfàn ma?",
   "zh": "你想去吃午饭吗？"
  },
  {
   "en": "Do you want to eat something?",
   "py": "nǐ xiǎng chī diǎn shénme ma?",
   "zh": "你想吃点什么吗？"
  },
  {
   "en": "That smells good",
   "py": "zhège wén qǐlái hěn xiāng",
   "zh": "这个闻起来很香"
  },
  {
   "en": "Can you say it again?",
   "py": "nǐ néng zài shuō yīcì ma?",
   "zh": "你能再说一次吗？"
  },
  {
   "en": "Can you speak more slowly?",
   "py": "nǐ néng shuō màn yīdiǎn ma?",
   "zh": "你能说慢一点吗？"
  },
  {
   "en": "My Chinese is not very good",
   "py": "wǒ de zhōngwén bù tài hǎo",
   "zh": "我的中文不太好"
  },
  {
   "en": "The food in Guizhou is very good",
   "py": "Guìzhōu de cài hěn hǎochī",
   "zh": "贵州的菜很好吃"
  },
  {
   "en": "We are both American",
   "py": "wǒmen dōu shì Měiguórén",
   "zh": "我们都是美国人"
  },
  {
   "en": "You're all Chinese people",
   "py": "nǐmen dōu shì Zhōngguórén",
   "zh": "你们都是中国人"
  },
  {
   "en": "I really like Guiyang",
   "py": "wǒ zhēn de hěn xǐhuān Guìyáng",
   "zh": "我真的很喜欢贵阳"
  },
  {
   "en": "You and I are both Chinese",
   "py": "nǐ hé wǒ dōu shì Zhōngguórén",
   "zh": "你和我都是中国人"
  },
  {
   "en": "Can I pay by phone?",
   "py": "wǒ kěyǐ yòng shǒujī zhīfù ma",
   "zh": "我可以用手机支付吗"
  },
  {
   "en": "You are Chinese and I am English",
   "py": "nǐ shì Zhōngguórén, wǒ shì Yīngguórén",
   "zh": "你是中国人，我是英国人"
  },
  {
   "en": "Can you speak Chinese with me slowly?",
   "py": "nǐ néng mànmàn de gēn wǒ shuō zhōngwén ma?",
   "zh": "你能慢慢地跟我说中文吗？"
  },
  {
   "en": "Do you want some coffee or another drink?",
   "py": "nǐ yào hē kāfēi háishì biéde yǐnliào ma?",
   "zh": "你要喝咖啡还是别的饮料吗？"
  },
  {
   "en": "We are both teachers, but he is a student",
   "py": "wǒmen dōu shì lǎoshī, dànshì tā shì xuéshēng",
   "zh": "我们都是老师，但是他是学生"
  },
  {
   "en": "I am off to work, see you later, have a good day",
   "py": "wǒ qù shàngbān le, dàihuìr jiàn, zhù nǐ jīntiān yúkuài",
   "zh": "我去上班了，待会儿见，祝你今天愉快"
  }
 ],
 "learnt": [
  {
   "en": "You are American",
   "py": "nǐ shì Měiguórén",
   "zh": "你是美国人"
  },
  {
   "en": "We are both American",
   "py": "wǒmen dōu shì Měiguórén",
   "zh": "我们都是美国人"
  },
  {
   "en": "You're all Chinese people",
   "py": "nǐmen dōu shì Zhōngguórén",
   "zh": "你们都是中国人"
  },
  {
   "en": "You are Chinese and I am English",
   "py": "nǐ shì Zhōngguórén, wǒ shì Yīngguórén",
   "zh": "你是中国人，我是英国人"
  },
  {
   "en": "You're all Chinese and we are English but they are both American",
   "py": "nǐmen dōu shì Zhōngguórén, wǒmen shì Yīngguórén, kěshì tāmen dōu shì Měiguórén",
   "zh": "你们都是中国人，我们是英国人，可是他们都是美国人"
  },
  {
   "en": "How about you?",
   "py": "nǐ ne?",
   "zh": "你呢？"
  },
  {
   "en": "Are you busy?",
   "py": "nǐ máng ma?",
   "zh": "你忙吗？"
  },
  {
   "en": "Is she busy?",
   "py": "tā máng ma?",
   "zh": "她忙吗？"
  },
  {
   "en": "You are not busy",
   "py": "nǐ bù máng",
   "zh": "你不忙"
  },
  {
   "en": "Are you not busy?",
   "py": "nǐ bù máng ma?",
   "zh": "你不忙吗？"
  },
  {
   "en": "Are you both busy?",
   "py": "nǐmen liǎnggè dōu máng ma?",
   "zh": "你们两个都忙吗？"
  },
  {
   "en": "She is busy and he is not busy",
   "py": "tā hěn máng, tā bù máng",
   "zh": "她很忙，他不忙"
  },
  {
   "en": "We are both busy, are you?",
   "py": "wǒmen dōu hěn máng, nǐ ne?",
   "zh": "我们都很忙，你呢？"
  },
  {
   "en": "Why?",
   "py": "wèishénme?",
   "zh": "为什么？"
  },
  {
   "en": "Water",
   "py": "shuǐ",
   "zh": "水"
  },
  {
   "en": "Fire",
   "py": "huǒ",
   "zh": "火"
  },
  {
   "en": "Wind",
   "py": "fēng",
   "zh": "风"
  },
  {
   "en": "Tree / wood",
   "py": "mù",
   "zh": "木"
  },
  {
   "en": "Grove (two trees)",
   "py": "lín",
   "zh": "林"
  },
  {
   "en": "Forest (three trees)",
   "py": "sēn",
   "zh": "森"
  },
  {
   "en": "Rest (person leaning on a tree)",
   "py": "xiū",
   "zh": "休"
  },
  {
   "en": "Mountain",
   "py": "shān",
   "zh": "山"
  },
  {
   "en": "Sun / day",
   "py": "rì",
   "zh": "日"
  },
  {
   "en": "Moon / month",
   "py": "yuè",
   "zh": "月"
  },
  {
   "en": "To read (a book)",
   "py": "kàn shū",
   "zh": "看书"
  },
  {
   "en": "Why is she busy?",
   "py": "tā wèishénme máng?",
   "zh": "她为什么忙？"
  },
  {
   "en": "Why is he busy?",
   "py": "tā wèishénme máng?",
   "zh": "他为什么忙？"
  },
  {
   "en": "Why are they busy?",
   "py": "tāmen wèishénme máng?",
   "zh": "他们为什么忙？"
  },
  {
   "en": "Why are they busy now?",
   "py": "tāmen xiànzài wèishénme máng?",
   "zh": "他们现在为什么忙？"
  },
  {
   "en": "Why are they so busy now?",
   "py": "tāmen xiànzài wèishénme zhème máng?",
   "zh": "他们现在为什么这么忙？"
  },
  {
   "en": "He is ok now",
   "py": "tā xiànzài hěn hǎo",
   "zh": "他现在很好"
  },
  {
   "en": "Why are you so busy now?",
   "py": "wèishénme nǐ xiànzài zhème máng?",
   "zh": "为什么你现在这么忙？"
  },
  {
   "en": "He and I are both doing well now",
   "py": "tā hé wǒ xiànzài dōu hěn hǎo",
   "zh": "他和我现在都很好"
  },
  {
   "en": "He reads books",
   "py": "tā kàn shū",
   "zh": "他看书"
  },
  {
   "en": "He is reading a book (right now)",
   "py": "tā zài kàn shū",
   "zh": "他在看书"
  },
  {
   "en": "He is reading a book now",
   "py": "tā xiànzài zài kàn shū",
   "zh": "他现在在看书"
  },
  {
   "en": "You are too busy right now",
   "py": "nǐ xiànzài tài máng le",
   "zh": "你现在太忙了"
  },
  {
   "en": "Why are you now too busy to see me?",
   "py": "wèishénme nǐ xiànzài tài máng bù néng jiàn wǒ?",
   "zh": "为什么你现在太忙不能见我？"
  },
  {
   "en": "Can he see her now?",
   "py": "tā xiànzài néng jiàn tā ma?",
   "zh": "他现在能见她吗？"
  },
  {
   "en": "I want to see you now but you don't want to see me",
   "py": "wǒ xiànzài xiǎng jiàn nǐ, dànshì nǐ bù xiǎng jiàn wǒ",
   "zh": "我现在想见你，但是你不想见我"
  }
 ]
};
