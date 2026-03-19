// ============================================================
// LESSON INTROS — Ayah data + enrichment context for each lesson
//
// Dynamic strategy:
//   - Each lesson declares its primary ayah(s) with full Arabic,
//     translation, and wordCount for audio playback.
//   - A context blurb gives background before exercises begin.
//   - Lessons without an explicit entry here get a generic intro
//     derived from their lesson metadata (see getIntro() below).
// ============================================================

const SURAH_NAMES = {
  1: 'Al-Fatiha', 2: 'Al-Baqarah', 7: 'Al-A\'raf', 22: 'Al-Hajj',
  27: 'An-Naml', 30: 'Ar-Rum', 42: 'Ash-Shura', 47: 'Muhammad',
  53: 'An-Najm', 59: 'Al-Hashr', 74: 'Al-Muddathir',
  96: 'Al-Alaq', 99: 'Az-Zalzalah', 103: 'Al-Asr',
  109: 'Al-Kafirun', 112: 'Al-Ikhlas', 113: 'Al-Falaq', 114: 'An-Nas',
};

export function getSurahName(surahNum) {
  return SURAH_NAMES[surahNum] || `Surah ${surahNum}`;
}

export function formatAyahRef(ref) {
  const m = ref.match(/^(\d+):(\d+)$/);
  if (!m) return ref;
  const surah = parseInt(m[1], 10);
  return `${getSurahName(surah)} ${ref}`;
}

// ── Per-lesson intro data ───────────────────────────────────
// ayahs[]: { ref, arabic, translation, wordCount }
// context: { label, text }

export const LESSON_INTROS = {

  // ═══════════════════════════════════════════════════════════
  // UNIT 1 — Bismillah
  // ═══════════════════════════════════════════════════════════

  L1: {
    ayahs: [
      { ref: '1:1', arabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ', translation: 'In the name of Allah, the Most Gracious, the Most Merciful', wordCount: 4 },
    ],
    context: {
      label: 'Did You Know?',
      text: 'The Bismillah opens every surah in the Quran except one — Surah At-Tawbah. Muslims recite it before eating, traveling, and starting anything important. Today you\'ll learn the first two words of this powerful phrase.',
    },
  },

  L2: {
    ayahs: [
      { ref: '1:1', arabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ', translation: 'In the name of Allah, the Most Gracious, the Most Merciful', wordCount: 4 },
    ],
    context: {
      label: 'The Root of Mercy',
      text: 'ٱلرَّحْمَـٰنِ and ٱلرَّحِيمِ both come from the root ر-ح-م (mercy). One describes Allah\'s overwhelming, all-encompassing mercy — the other describes His enduring, personal mercy. This one root appears over 300 times in the Quran.',
    },
  },

  L3: {
    ayahs: [
      { ref: '1:2', arabic: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ', translation: 'All praise is for Allah, Lord of all the worlds', wordCount: 4 },
    ],
    context: {
      label: 'Grammar Spotlight',
      text: 'Arabic has a tiny but mighty prefix: ٱلْ — it means "the". When you see it attached to a word, that word becomes definite. You\'ll start spotting it everywhere in the Quran.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 2 — All Praise
  // ═══════════════════════════════════════════════════════════

  L4: {
    ayahs: [
      { ref: '1:2', arabic: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ', translation: 'All praise is for Allah, Lord of all the worlds', wordCount: 4 },
    ],
    context: {
      label: 'Verse Context',
      text: 'This ayah is the first thing said after the Bismillah in every prayer. ٱلْحَمْدُ doesn\'t just mean "praise" — it means all praise, in every form, belongs to Allah. It\'s a statement of fact, not just a feeling.',
    },
  },

  L5: {
    ayahs: [
      { ref: '1:2', arabic: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ', translation: 'All praise is for Allah, Lord of all the worlds', wordCount: 4 },
    ],
    context: {
      label: 'Did You Know?',
      text: 'رَبِّ (Lord) appears 975 times in the Quran — it\'s one of the most frequent words you\'ll encounter. It implies nurturing, sustaining, and guiding to maturity. ٱلْعَـٰلَمِينَ means "the worlds" — all of creation, seen and unseen.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 3 — You Alone
  // ═══════════════════════════════════════════════════════════

  L8: {
    ayahs: [
      { ref: '1:5', arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', translation: 'You alone we worship, and You alone we ask for help', wordCount: 4 },
    ],
    context: {
      label: 'Why This Matters',
      text: 'This is the turning point of Al-Fatiha. The first ayahs praised Allah — now the speaker talks directly to Him. إِيَّاكَ is placed first for emphasis: "YOU alone, no one else." Every time you pray, you renew this personal pledge.',
    },
  },

  L9: {
    ayahs: [
      { ref: '1:6', arabic: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ', translation: 'Guide us to the straight path', wordCount: 3 },
    ],
    context: {
      label: 'Verse Context',
      text: 'After declaring worship and asking for help, the very first request is guidance. ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ — the straight path — is the single most repeated du\'a in Islam, said at least 17 times daily in the five prayers.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 4 — The Complete Fatiha
  // ═══════════════════════════════════════════════════════════

  L11: {
    ayahs: [
      { ref: '1:7', arabic: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ', translation: 'The path of those You have blessed — not those who earned anger, nor those who went astray', wordCount: 9 },
    ],
    context: {
      label: 'Completing the Picture',
      text: 'The final ayah of Al-Fatiha names three groups: those blessed by Allah, those who earned His anger, and those who went astray. By asking for the first path, you\'re also asking to be kept from the other two.',
    },
  },

  L12: {
    ayahs: [
      { ref: '1:7', arabic: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ', translation: 'The path of those You have blessed', wordCount: 4 },
    ],
    context: {
      label: 'Key Connectors',
      text: 'صِرَٰطَ (path) and ٱلَّذِينَ (those who) are connecting words that appear hundreds of times in the Quran. Once you know them, you\'ll recognize them in almost every page.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 5 — Connectors
  // ═══════════════════════════════════════════════════════════

  L14: {
    ayahs: [
      { ref: '2:2', arabic: 'ذَٰلِكَ ٱلْكِتَابُ لَا رَيْبَ فِيهِ', translation: 'This is the Book about which there is no doubt, in it...', wordCount: 5 },
    ],
    context: {
      label: 'The Glue Words',
      text: 'فِي (in), عَلَىٰ (on/upon), and إِلَىٰ (towards) are tiny words that hold Arabic sentences together. They appear thousands of times in the Quran. Master these three and you unlock huge chunks of meaning.',
    },
  },

  L15: {
    ayahs: [
      { ref: '96:2', arabic: 'خَلَقَ ٱلْإِنسَـٰنَ مِنْ عَلَقٍ', translation: 'He created mankind from a clinging clot', wordCount: 4 },
    ],
    context: {
      label: 'From the First Revelation',
      text: 'This ayah is from the very first words revealed to Prophet Muhammad ﷺ. مِن (from) shows origin — mankind was created from something humble. عَن (about/away from) is its cousin, showing separation or topic.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 6 — Who's Speaking?
  // ═══════════════════════════════════════════════════════════

  L18: {
    ayahs: [
      { ref: '112:1', arabic: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ', translation: 'Say: He is Allah, the One', wordCount: 4 },
    ],
    context: {
      label: 'Pronouns in the Quran',
      text: 'هُوَ (He), هِيَ (She), and هُمْ (They) — Arabic pronouns are everywhere in the Quran. In Surah Al-Ikhlas, هُوَ opens the very first declaration about who Allah is. Recognizing these tiny words unlocks the speaker and subject of every verse.',
    },
  },

  L19: {
    ayahs: [
      { ref: '1:5', arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', translation: 'You alone we worship, and You alone we ask for help', wordCount: 4 },
    ],
    context: {
      label: 'Who Is Speaking?',
      text: 'In Al-Fatiha, نَحْنُ (we) is hidden inside the verb نَعْبُدُ — "we worship." Arabic packs the pronoun right into the verb. Today you\'ll learn أَنتَ (you), أَنَا (I), and نَحْنُ (we) — the voices behind every conversation in the Quran.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 7 — Your Salah
  // ═══════════════════════════════════════════════════════════

  L22: {
    ayahs: [
      { ref: 'salah', arabic: 'ٱللَّهُ أَكْبَرُ', translation: 'Allah is the Greatest', wordCount: 2, noAudio: true },
    ],
    context: {
      label: 'Words You Already Know',
      text: 'You say ٱللَّهُ أَكْبَرُ dozens of times every day in prayer — but have you thought about what each word means? أَكْبَرُ doesn\'t just mean "great" — it means "greater than anything you can imagine." Today those familiar sounds become understood words.',
    },
  },

  L23: {
    ayahs: [
      { ref: 'salah', arabic: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ', translation: 'Glory be to my Lord, the Magnificent', wordCount: 3, noAudio: true },
      { ref: 'salah', arabic: 'سُبْحَانَ رَبِّيَ ٱلْأَعْلَى', translation: 'Glory be to my Lord, the Most High', wordCount: 3, noAudio: true },
    ],
    context: {
      label: 'In Your Ruku & Sujud',
      text: 'When you bow, you call Allah ٱلْعَظِيمِ (the Magnificent). When you prostrate — your lowest point — you call Him ٱلْأَعْلَى (the Most High). The contrast is intentional and beautiful.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 8 — Al-Ikhlas
  // ═══════════════════════════════════════════════════════════

  L26: {
    ayahs: [
      { ref: '112:1', arabic: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ', translation: 'Say: He is Allah, the One', wordCount: 4 },
    ],
    context: {
      label: 'One-Third of the Quran',
      text: 'The Prophet ﷺ said that Surah Al-Ikhlas is equal to one-third of the Quran in meaning. In just four short ayahs, it captures the entire concept of Tawhid — the oneness of Allah. قُلْ (Say!) is a command that appears 332 times in the Quran.',
    },
  },

  L27: {
    ayahs: [
      { ref: '112:2', arabic: 'ٱللَّهُ ٱلصَّمَدُ', translation: 'Allah, the Eternal Refuge', wordCount: 2 },
    ],
    context: {
      label: 'A Unique Word',
      text: 'ٱلصَّمَدُ appears only once in the entire Quran — right here. It means the One everyone turns to for their needs, who Himself needs nothing and no one. Scholars say no single English word fully captures it.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 9 — Al-Falaq
  // ═══════════════════════════════════════════════════════════

  L31: {
    ayahs: [
      { ref: '113:1', arabic: 'قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ', translation: 'Say: I seek refuge in the Lord of the daybreak', wordCount: 4 },
    ],
    context: {
      label: 'Protection Surahs',
      text: 'Al-Falaq and An-Nas are called Al-Mu\'awwidhatayn — the two surahs of refuge. The Prophet ﷺ would recite them every night before sleep, blowing into his hands and wiping over his body. أَعُوذُ means "I seek protection" — a deeply personal plea.',
    },
  },

  L32: {
    ayahs: [
      { ref: '113:2', arabic: 'مِن شَرِّ مَا خَلَقَ', translation: 'From the evil of that which He created', wordCount: 4 },
    ],
    context: {
      label: 'Evil & Creation',
      text: 'شَرِّ (evil) and خَلَقَ (He created) — this ayah acknowledges that harmful things exist within Allah\'s creation, and the response is to seek refuge in the Creator Himself. The root خ-ل-ق (creation) appears over 250 times in the Quran.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 10 — An-Nas
  // ═══════════════════════════════════════════════════════════

  L35: {
    ayahs: [
      { ref: '114:1', arabic: 'قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ', translation: 'Say: I seek refuge in the Lord of mankind', wordCount: 4 },
      { ref: '114:2', arabic: 'مَلِكِ ٱلنَّاسِ', translation: 'The King of mankind', wordCount: 2 },
      { ref: '114:3', arabic: 'إِلَـٰهِ ٱلنَّاسِ', translation: 'The God of mankind', wordCount: 2 },
    ],
    context: {
      label: 'Three Titles, One God',
      text: 'Allah introduces Himself here with three titles in ascending order: Lord (رَبِّ — the one who nurtures), King (مَلِكِ — the one who rules), and God (إِلَـٰهِ — the one who is worshipped). Each title adds a deeper layer of authority.',
    },
  },

  L36: {
    ayahs: [
      { ref: '114:4', arabic: 'مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ', translation: 'From the evil of the retreating whisperer', wordCount: 4 },
    ],
    context: {
      label: 'The Whisperer',
      text: 'ٱلْوَسْوَاسِ describes the repeated, quiet whisper of Shaytan — not a shout, but a gentle nudge toward doubt and disobedience. ٱلْخَنَّاسِ means "the one who retreats" — the moment you remember Allah, the whisperer pulls back.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 11 — By Time (Al-Asr)
  // ═══════════════════════════════════════════════════════════

  L39: {
    ayahs: [
      { ref: '103:1', arabic: 'وَٱلْعَصْرِ', translation: 'By time', wordCount: 1 },
    ],
    context: {
      label: 'An Oath',
      text: 'When Allah swears by something, it signals its immense importance. وَ at the start is the oath particle. العصر can mean "time," "the afternoon," or "the era." Imam Ash-Shafi\'i said if only this surah was revealed, it would be enough guidance for all of humanity.',
    },
  },

  L40: {
    ayahs: [
      { ref: '103:2', arabic: 'إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ', translation: 'Indeed, mankind is in loss', wordCount: 4 },
    ],
    context: {
      label: 'A Bold Statement',
      text: 'إِنَّ (indeed) + لَفِى (certainly in) — Arabic stacks two emphasis particles to drive the point home. All of humanity is in a state of loss. But don\'t worry — the next ayah reveals four ways out.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 12 — The Four Conditions
  // ═══════════════════════════════════════════════════════════

  L42: {
    ayahs: [
      { ref: '103:3', arabic: 'إِلَّا ٱلَّذِينَ آمَنُوا وَعَمِلُوا ٱلصَّـٰلِحَـٰتِ', translation: 'Except those who believed and did righteous deeds', wordCount: 5 },
    ],
    context: {
      label: 'The Exception',
      text: 'After declaring all humanity in loss, إِلَّا (except) introduces the escape. آمَنُوا comes from the root أ-م-ن — the same root as "Ameen" and "Iman." Belief isn\'t passive — it\'s an active, conscious choice.',
    },
  },

  L43: {
    ayahs: [
      { ref: '103:3', arabic: 'إِلَّا ٱلَّذِينَ آمَنُوا وَعَمِلُوا ٱلصَّـٰلِحَـٰتِ', translation: 'Except those who believed and did righteous deeds', wordCount: 5 },
    ],
    context: {
      label: 'Faith + Action',
      text: 'Notice how the Quran pairs آمَنُوا (believed) with وَعَمِلُوا (and did deeds) — faith and action always go together. ٱلصَّـٰلِحَـٰتِ comes from the root ص-ل-ح meaning "to fix, repair, make right." Righteous deeds are those that set things right.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 13 — Five Ways to Say No
  // ═══════════════════════════════════════════════════════════

  L46: {
    ayahs: [
      { ref: '47:19', arabic: 'لَا إِلَـٰهَ إِلَّا ٱللَّهُ', translation: 'There is no god except Allah', wordCount: 4 },
    ],
    context: {
      label: 'The Shahada\'s Core',
      text: 'لَا إِلَـٰهَ إِلَّا ٱللَّهُ — the most important sentence in Islam begins with a negation: لَا (no/not). Arabic has five different ways to say "no," each with its own rules and power. Today you start mastering them.',
    },
  },

  L47: {
    ayahs: [
      { ref: '112:3', arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', translation: 'He neither begets nor is born', wordCount: 4 },
    ],
    context: {
      label: 'Past vs. Future Negation',
      text: 'لَمْ negates the past — "He did not (ever) beget." لَنْ negates the future — "He will never..." These two particles give you precise control over time in Arabic negation.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 14 — Good & Evil (Az-Zalzalah)
  // ═══════════════════════════════════════════════════════════

  L51: {
    ayahs: [
      { ref: '99:7', arabic: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ', translation: 'So whoever does an atom\'s weight of good will see it', wordCount: 6 },
      { ref: '99:8', arabic: 'وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ', translation: 'And whoever does an atom\'s weight of evil will see it', wordCount: 6 },
    ],
    context: {
      label: 'Perfect Balance',
      text: 'These twin ayahs are mirror images — identical structure, only خَيْرًا (good) swapped for شَرًّا (evil). Nothing is too small to matter. Even a ذَرَّة — an atom, a speck of dust — will be weighed on the Day of Judgment.',
    },
  },

  L52: {
    ayahs: [
      { ref: '99:7', arabic: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ', translation: 'So whoever does an atom\'s weight of good will see it', wordCount: 6 },
    ],
    context: {
      label: 'Word by Word',
      text: 'فَمَن (so whoever) يَعْمَلْ (does) مِثْقَالَ (weight of) ذَرَّةٍ (an atom) — each word adds precision. The Quran chose the smallest measurable thing an ancient Arab could imagine to make the point: nothing escapes Allah\'s accounting.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 15 — The Names of Allah
  // ═══════════════════════════════════════════════════════════

  L54: {
    ayahs: [
      { ref: '2:29', arabic: 'وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ', translation: 'And He is, of all things, Knowing', wordCount: 4 },
    ],
    context: {
      label: 'The فَعِيل Pattern',
      text: 'Many of Allah\'s names follow the فَعِيل pattern: عَلِيم (All-Knowing), قَدِير (All-Powerful), سَمِيع (All-Hearing), بَصِير (All-Seeing). Once you recognize this pattern, you can spot divine attributes across the entire Quran.',
    },
  },

  L55: {
    ayahs: [
      { ref: '22:75', arabic: 'إِنَّ ٱللَّهَ سَمِيعٌ بَصِيرٌ', translation: 'Indeed, Allah is All-Hearing, All-Seeing', wordCount: 4 },
    ],
    context: {
      label: 'Paired Names',
      text: 'Allah\'s names often appear in pairs that complement each other. سَمِيعٌ بَصِيرٌ — He hears everything and sees everything. This pairing reminds us that nothing in creation goes unnoticed, not a whisper nor a hidden glance.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 16 — Read! (Al-Alaq)
  // ═══════════════════════════════════════════════════════════

  L59: {
    ayahs: [
      { ref: '96:1', arabic: 'ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ', translation: 'Read! In the name of your Lord who created', wordCount: 5 },
    ],
    context: {
      label: 'The First Word Revealed',
      text: 'ٱقْرَأْ (Read!) — this was the very first word of the Quran revealed to Prophet Muhammad ﷺ in the Cave of Hira. The first command from God to humanity wasn\'t to pray or fast — it was to read, to seek knowledge.',
    },
  },

  L60: {
    ayahs: [
      { ref: '96:2', arabic: 'خَلَقَ ٱلْإِنسَـٰنَ مِنْ عَلَقٍ', translation: 'He created mankind from a clinging clot', wordCount: 4 },
    ],
    context: {
      label: 'Science in the Quran',
      text: 'عَلَقٍ means a "clinging clot" — a stage of embryonic development. 1,400 years ago, the Quran described human creation starting from something that clings to the uterine wall, matching what modern embryology confirms today.',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // UNIT 17 — Grand Mastery
  // ═══════════════════════════════════════════════════════════

  L63: {
    ayahs: [],
    context: {
      label: 'Connecting the Dots',
      text: 'You\'ve learned roots, patterns, and vocabulary from across the Quran. Now it\'s time to see how they connect — how one root branches into many meanings, and how patterns you\'ve mastered show up in new and unexpected places.',
    },
  },

  L64: {
    ayahs: [
      { ref: '103:3', arabic: 'إِلَّا ٱلَّذِينَ آمَنُوا وَعَمِلُوا ٱلصَّـٰلِحَـٰتِ', translation: 'Except those who believed and did righteous deeds', wordCount: 5 },
    ],
    context: {
      label: 'Cold Read Challenge',
      text: 'Time to prove how far you\'ve come. You\'ll read a verse and see how many words you recognize without any hints. Trust the vocabulary you\'ve built — you know more than you think.',
    },
  },
};

// ── Dynamic fallback for lessons without explicit intros ─────

/**
 * Derive primary ayah refs from a lesson's exercises.
 * Strategy: collect all unique ayahRefs, keep only those sharing
 * the same surah as the first ref (filters out cross-references).
 */
export function derivePrimaryAyahs(lesson) {
  const seen = new Set();
  const refs = [];
  for (const ex of (lesson.exercises || [])) {
    const ref = ex.ayahRef;
    if (ref && !seen.has(ref) && /^\d+:\d+$/.test(ref)) {
      seen.add(ref);
      refs.push(ref);
    }
  }
  if (refs.length === 0) return [];

  // Keep only refs from the same surah as the first
  const firstSurah = refs[0].split(':')[0];
  const filtered = refs.filter(r => r.split(':')[0] === firstSurah);

  // Build ayah objects from exercise data
  return filtered.map(ref => {
    // Find the exercise with the full ayah text
    const ex = lesson.exercises.find(e =>
      e.ayahRef === ref && e.ayah && typeof e.ayah === 'string'
    );
    // Or find one with a words array
    const exWords = lesson.exercises.find(e =>
      e.ayahRef === ref && e.words
    );
    const wordCount = exWords
      ? exWords.words.length
      : (ex && typeof ex.ayah === 'string' ? ex.ayah.split(/\s+/).length : 0);

    return {
      ref,
      arabic: ex ? ex.ayah : (exWords ? exWords.words.join(' ') : ''),
      translation: '',
      wordCount,
    };
  }).filter(a => a.arabic); // drop any with empty text
}

/**
 * Get intro data for a lesson (explicit or dynamically derived).
 */
export function getIntro(lesson) {
  const explicit = LESSON_INTROS[lesson.id];
  const ayahs = explicit?.ayahs ?? derivePrimaryAyahs(lesson);
  const context = explicit?.context ?? {
    label: 'About This Lesson',
    text: lesson.newWords.length
      ? `You'll learn ${lesson.newWords.length} new word${lesson.newWords.length > 1 ? 's' : ''} and practice them through ${lesson.exercises.length} exercises.`
      : `Practice and review through ${lesson.exercises.length} exercises.`,
  };

  return { ayahs, context };
}
