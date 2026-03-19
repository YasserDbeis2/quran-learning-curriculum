// ============================================================
// LESSONS DATA — 21 lessons across 5 units
// Each lesson has a full exercise sequence with real Arabic content
//
// KNOWLEDGE TRACKING:
// Every meaning-match, fill-the-gap, tap-to-translate, and
// ayah-assembly only uses words formally taught in newWords
// of the current or prior lessons within the same unit,
// plus Unit 1 words (the baseline).
//
// cold-read and root-discovery may introduce unknown words by design.
// fill-the-gap DISTRACTORS (wrong answers) may be untaught —
// the student only needs to recognize the correct answer.
// ============================================================

export const LESSONS = {

  // ────────────────────────────────────────────────────────────
  // UNIT 1 — Bismillah (3 lessons)
  //
  // Vocabulary taught in this unit:
  //   L1: بِسْمِ, ٱللَّهِ
  //   L2: ٱلرَّحْمَـٰنِ, ٱلرَّحِيمِ, رَحْمَة
  //   L3: ٱلْ, ٱلْحَمْدُ, رَبِّ, ٱلْعَـٰلَمِينَ
  // ────────────────────────────────────────────────────────────

  L1: {
    id: 'L1', unitId: 'unit-1', number: 1,
    name: 'In the Name', type: 'new-words', typeLabel: 'New Words',
    newWords: ['بِسْمِ', 'ٱللَّهِ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        ayahRef: '1:1',
        words: ['بِسْمِ', 'ٱللَّهِ', 'ٱلرَّحْمَـٰنِ', 'ٱلرَّحِيمِ'],
        highlightIndex: 0,
        question: 'What does the highlighted word mean?',
        options: ['In the name of', 'Praise be to', 'Lord of', 'The Most'],
        answer: 'In the name of',
        detail: 'بِسْمِ is from the root س-م-و meaning "name". Combined with بِ (in/by).',
      },
      {
        type: 'word-spotlight',
        ayah: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        ayahRef: '1:1',
        words: ['بِسْمِ', 'ٱللَّهِ', 'ٱلرَّحْمَـٰنِ', 'ٱلرَّحِيمِ'],
        highlightIndex: 1,
        question: 'What does this word mean?',
        options: ['The Lord', 'Allah', 'The King', 'The Creator'],
        answer: 'Allah',
        detail: 'ٱللَّهِ — the proper name of God. Appears 2,699 times in the Quran.',
      },
      {
        // Preview — student sees these 4 words together.
        // بِسْمِ and ٱللَّهِ are being tested (just taught).
        // ٱلرَّحْمَـٰنِ and ٱلرَّحِيمِ are preview exposure for L2.
        type: 'meaning-match',
        pairs: [
          ['بِسْمِ', 'In the name of'],
          ['ٱللَّهِ', 'Allah'],
          ['ٱلرَّحْمَـٰنِ', 'The Most Gracious'],
          ['ٱلرَّحِيمِ', 'The Most Merciful'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'ٱللَّهِ', 'ٱلرَّحْمَـٰنِ', 'ٱلرَّحِيمِ'],
        gapIndex: 0,
        // Distractors don't need to be taught — student knows the right answer
        options: ['بِسْمِ', 'رَبِّ', 'مَـٰلِكِ'],
        answer: 'بِسْمِ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        ayahRef: '1:1',
        translationWords: ['In the name of', 'Allah,', 'the Most Gracious,', 'the Most Merciful'],
      },
      {
        type: 'fill-the-gap',
        ayah: ['بِسْمِ', '______', 'ٱلرَّحْمَـٰنِ', 'ٱلرَّحِيمِ'],
        gapIndex: 1,
        options: ['ٱللَّهِ', 'رَبِّ', 'مَلِكِ'],
        answer: 'ٱللَّهِ',
      },
      {
        type: 'ayah-assembly',
        translation: 'In the name of Allah, the Most Gracious, the Most Merciful',
        words: ['بِسْمِ', 'ٱللَّهِ', 'ٱلرَّحْمَـٰنِ', 'ٱلرَّحِيمِ'],
      },
      {
        type: 'cold-read',
        ayah: 'إِنَّهُ مِن سُلَيْمَانَ وَإِنَّهُ بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        ayahRef: '27:30',
        words: [
          { ar: 'إِنَّهُ', en: null },
          { ar: 'مِن', en: null },
          { ar: 'سُلَيْمَانَ', en: null },
          { ar: 'وَإِنَّهُ', en: null },
          { ar: 'بِسْمِ', en: 'In the name of' },
          { ar: 'ٱللَّهِ', en: 'Allah' },
          { ar: 'ٱلرَّحْمَـٰنِ', en: 'the Most Gracious' },
          { ar: 'ٱلرَّحِيمِ', en: 'the Most Merciful' },
        ],
      },
    ],
  },

  L2: {
    id: 'L2', unitId: 'unit-1', number: 2,
    name: 'The Root of Mercy', type: 'root', typeLabel: 'Root Deep Dive',
    newWords: ['ٱلرَّحْمَـٰنِ', 'ٱلرَّحِيمِ', 'رَحْمَة'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        ayahRef: '1:1',
        words: ['بِسْمِ', 'ٱللَّهِ', 'ٱلرَّحْمَـٰنِ', 'ٱلرَّحِيمِ'],
        highlightIndex: 2,
        question: 'What does the highlighted word mean?',
        options: ['The Most Gracious', 'The Most Merciful', 'The Lord', 'The King'],
        answer: 'The Most Gracious',
        detail: 'ٱلرَّحْمَـٰنِ — an intensive form meaning "abundantly merciful". From root ر-ح-م.',
      },
      {
        type: 'word-spotlight',
        ayah: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        ayahRef: '1:1',
        words: ['بِسْمِ', 'ٱللَّهِ', 'ٱلرَّحْمَـٰنِ', 'ٱلرَّحِيمِ'],
        highlightIndex: 3,
        question: 'And this word?',
        options: ['The Most Merciful', 'The Most Gracious', 'The Creator', 'The Wise'],
        answer: 'The Most Merciful',
        detail: 'ٱلرَّحِيمِ — "enduringly merciful". Same root ر-ح-م, different pattern.',
      },
      {
        type: 'root-discovery',
        root: 'ر-ح-م',
        rootMeaning: 'mercy, compassion',
        knownWords: [
          { ar: 'ٱلرَّحْمَـٰنِ', en: 'Most Gracious' },
          { ar: 'ٱلرَّحِيمِ', en: 'Most Merciful' },
        ],
        newWord: { ar: 'رَحْمَة', en: 'mercy' },
        question: 'They share root ر-ح-م. Can you guess this new word?',
        options: ['Mercy', 'Power', 'Knowledge'],
        answer: 'Mercy',
      },
      {
        // All 4 words are taught: ٱلرَّحْمَـٰنِ, ٱلرَّحِيمِ (this lesson), رَحْمَة (just discovered), بِسْمِ (L1)
        type: 'meaning-match',
        pairs: [
          ['ٱلرَّحْمَـٰنِ', 'Most Gracious'],
          ['ٱلرَّحِيمِ', 'Most Merciful'],
          ['رَحْمَة', 'Mercy'],
          ['بِسْمِ', 'In the name of'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['بِسْمِ', 'ٱللَّهِ', '______', 'ٱلرَّحِيمِ'],
        gapIndex: 2,
        options: ['ٱلرَّحْمَـٰنِ', 'رَحْمَة', 'بِسْمِ'],
        answer: 'ٱلرَّحْمَـٰنِ',
      },
      {
        type: 'transform-predict',
        given: { ar: 'ٱلرَّحْمَـٰنِ', en: 'Most Gracious (intensive, overwhelming)' },
        instruction: 'Same root ر-ح-م, but pattern فَعِيل instead of فَعْلَان.',
        result: { ar: 'ٱلرَّحِيمِ' },
        question: 'What does ٱلرَّحِيمِ mean?',
        options: ['Most Merciful (enduring)', 'Most Powerful', 'Most Wise'],
        answer: 'Most Merciful (enduring)',
      },
      {
        type: 'tap-to-translate',
        ayah: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        ayahRef: '1:1',
        translationWords: ['In the name of', 'Allah,', 'the Most Gracious,', 'the Most Merciful'],
      },
      {
        type: 'ayah-assembly',
        translation: 'In the name of Allah, the Most Gracious, the Most Merciful',
        words: ['بِسْمِ', 'ٱللَّهِ', 'ٱلرَّحْمَـٰنِ', 'ٱلرَّحِيمِ'],
      },
      {
        type: 'cold-read',
        ayah: 'وَإِلَـٰهُكُمْ إِلَـٰهٌ وَاحِدٌ لَّا إِلَـٰهَ إِلَّا هُوَ ٱلرَّحْمَـٰنُ ٱلرَّحِيمُ',
        ayahRef: '2:163',
        words: [
          { ar: 'وَإِلَـٰهُكُمْ', en: null },
          { ar: 'إِلَـٰهٌ', en: null },
          { ar: 'وَاحِدٌ', en: null },
          { ar: 'لَّا', en: null },
          { ar: 'إِلَـٰهَ', en: null },
          { ar: 'إِلَّا', en: null },
          { ar: 'هُوَ', en: null },
          { ar: 'ٱلرَّحْمَـٰنُ', en: 'the Most Gracious' },
          { ar: 'ٱلرَّحِيمُ', en: 'the Most Merciful' },
        ],
      },
    ],
  },

  L3: {
    id: 'L3', unitId: 'unit-1', number: 3,
    name: '"The" in Arabic', type: 'grammar', typeLabel: 'Grammar Unlock',
    // FIXED: Now formally introduces ٱلْحَمْدُ, رَبِّ, ٱلْعَـٰلَمِينَ alongside ٱلْ
    newWords: ['ٱلْ', 'ٱلْحَمْدُ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
    exercises: [
      {
        // Introduce the new ayah — spotlight the first new word
        type: 'word-spotlight',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        words: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
        highlightIndex: 0,
        question: 'What does ٱلْحَمْدُ mean?',
        options: ['The praise / all praise', 'The Lord', 'The mercy', 'The name'],
        answer: 'The praise / all praise',
        detail: 'ٱلْحَمْدُ — "the praise" or "all praise". Notice ٱلْ at the start — it means "the"!',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        words: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
        highlightIndex: 2,
        question: 'What does رَبِّ mean?',
        options: ['Lord of', 'King of', 'Name of', 'Praise of'],
        answer: 'Lord of',
        detail: 'رَبِّ — "Lord of". From root ر-ب-ب. One of the most common words in the Quran (975×).',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        words: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
        highlightIndex: 3,
        question: 'What does ٱلْعَـٰلَمِينَ mean?',
        options: ['The worlds', 'The heavens', 'The people', 'The angels'],
        answer: 'The worlds',
        detail: 'ٱلْعَـٰلَمِينَ — "the worlds/all creation". ٱلْ makes it definite: "THE worlds".',
      },
      {
        // Now teach the grammar concept: ٱلْ = "the"
        type: 'transform-predict',
        given: { ar: 'رَحِيم', en: 'merciful (indefinite)' },
        instruction: 'Add ٱلْ to make it definite — "the..."',
        result: { ar: 'ٱلرَّحِيم' },
        question: 'What is the result?',
        options: ['ٱلرَّحِيم (the Merciful)', 'رَحْمَة (mercy)', 'رَحْمَـٰن (gracious)'],
        answer: 'ٱلرَّحِيم (the Merciful)',
      },
      {
        type: 'transform-predict',
        given: { ar: 'رَبّ', en: 'lord (indefinite)' },
        instruction: 'Add ٱلْ to make it definite',
        result: { ar: 'ٱلرَّبّ' },
        question: 'What is the result?',
        options: ['ٱلرَّبّ (the Lord)', 'رَبَّنَا (our Lord)', 'رَبِّي (my Lord)'],
        answer: 'ٱلرَّبّ (the Lord)',
      },
      {
        // All 4 words taught in this unit
        type: 'meaning-match',
        pairs: [
          ['ٱلْحَمْدُ', 'The praise'],
          ['رَبِّ', 'Lord of'],
          ['ٱلْعَـٰلَمِينَ', 'The worlds'],
          ['ٱللَّهِ', 'Allah'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', '______'],
        gapIndex: 3,
        options: ['ٱلْعَـٰلَمِينَ', 'ٱلرَّحِيمِ', 'ٱلرَّحْمَـٰنِ'],
        answer: 'ٱلْعَـٰلَمِينَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        translationWords: ['All praise', 'is for Allah,', 'Lord of', 'the worlds'],
      },
      {
        type: 'ayah-assembly',
        translation: 'All praise is for Allah, Lord of the worlds',
        words: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
      },
      {
        type: 'cold-read',
        ayah: 'ذَٰلِكَ ٱلْكِتَابُ لَا رَيْبَ فِيهِ',
        ayahRef: '2:2',
        words: [
          { ar: 'ذَٰلِكَ', en: null },
          { ar: 'ٱلْكِتَابُ', en: 'the Book (ٱلْ = the!)' },
          { ar: 'لَا', en: null },
          { ar: 'رَيْبَ', en: null },
          { ar: 'فِيهِ', en: null },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 8 — Al-Ikhlas (5 lessons)
  //
  // Assumed known from Unit 1: بِسْمِ, ٱللَّهِ, ٱلرَّحْمَـٰنِ, ٱلرَّحِيمِ, رَحْمَة, ٱلْحَمْدُ, رَبِّ, ٱلْعَـٰلَمِينَ
  //
  // Vocabulary taught in this unit:
  //   L26: قُلْ, هُوَ, أَحَدٌ
  //   L27: ٱلصَّمَدُ
  //   L28: لَمْ, يَلِدْ, يُولَدْ, وَلَا
  //   L29: يَكُن, كُفُوًا
  //   L30: (mastery — no new words)
  // ────────────────────────────────────────────────────────────

  L26: {
    id: 'L26', unitId: 'unit-8', number: 26,
    name: 'Say!', type: 'root', typeLabel: 'Root Deep Dive',
    // FIXED: Added هُوَ to newWords — it's used in meaning-match and exercises
    newWords: ['قُلْ', 'هُوَ', 'أَحَدٌ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ',
        ayahRef: '112:1',
        words: ['قُلْ', 'هُوَ', 'ٱللَّهُ', 'أَحَدٌ'],
        highlightIndex: 0,
        question: 'What does the highlighted word mean?',
        options: ['Say!', 'He', 'Read!', 'Know!'],
        answer: 'Say!',
        detail: 'قُلْ is a command from root ق-و-ل (to say/speak). It appears 332 times.',
      },
      {
        type: 'word-spotlight',
        ayah: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ',
        ayahRef: '112:1',
        words: ['قُلْ', 'هُوَ', 'ٱللَّهُ', 'أَحَدٌ'],
        highlightIndex: 1,
        question: 'What does هُوَ mean?',
        options: ['He', 'Say', 'Lord', 'One'],
        answer: 'He',
        detail: 'هُوَ — "He/He is". The most basic pronoun. Appears 500+ times.',
      },
      {
        type: 'word-spotlight',
        ayah: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ',
        ayahRef: '112:1',
        words: ['قُلْ', 'هُوَ', 'ٱللَّهُ', 'أَحَدٌ'],
        highlightIndex: 3,
        question: 'What does أَحَدٌ mean?',
        options: ['One', 'Eternal', 'Most High', 'Creator'],
        answer: 'One',
        detail: 'أَحَدٌ means "One" — absolute uniqueness. Different from وَاحِد (numerical one).',
      },
      {
        type: 'root-discovery',
        root: 'ق-و-ل',
        rootMeaning: 'to say, speak',
        knownWords: [
          { ar: 'قُلْ', en: 'Say! (command)' },
        ],
        newWord: { ar: 'قَوْل', en: 'speech/saying' },
        question: 'قُلْ comes from root ق-و-ل. What might قَوْل mean?',
        options: ['Speech/saying', 'Reading', 'Prayer'],
        answer: 'Speech/saying',
      },
      {
        // All 4 words taught: قُلْ (this lesson), هُوَ (this lesson), أَحَدٌ (this lesson), ٱللَّهُ (Unit 1)
        type: 'meaning-match',
        pairs: [
          ['قُلْ', 'Say!'],
          ['هُوَ', 'He'],
          ['أَحَدٌ', 'One'],
          ['ٱللَّهُ', 'Allah'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'هُوَ', 'ٱللَّهُ', 'أَحَدٌ'],
        gapIndex: 0,
        // FIXED: distractors are now from Unit 1 (بِسْمِ) or plausible Arabic
        options: ['قُلْ', 'بِسْمِ', 'رَبِّ'],
        answer: 'قُلْ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ',
        ayahRef: '112:1',
        translationWords: ['Say:', '"He is', 'Allah,', 'the One"'],
      },
      {
        type: 'ayah-assembly',
        translation: 'Say: "He is Allah, the One"',
        words: ['قُلْ', 'هُوَ', 'ٱللَّهُ', 'أَحَدٌ'],
      },
      {
        type: 'cold-read',
        ayah: 'قُلْ يَا أَيُّهَا ٱلْكَافِرُونَ',
        ayahRef: '109:1',
        words: [
          { ar: 'قُلْ', en: 'Say!' },
          { ar: 'يَا', en: null },
          { ar: 'أَيُّهَا', en: null },
          { ar: 'ٱلْكَافِرُونَ', en: null },
        ],
      },
    ],
  },

  L27: {
    id: 'L27', unitId: 'unit-8', number: 27,
    name: 'The Eternal Refuge', type: 'new-words', typeLabel: 'New Words',
    newWords: ['ٱلصَّمَدُ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'ٱللَّهُ ٱلصَّمَدُ',
        ayahRef: '112:2',
        words: ['ٱللَّهُ', 'ٱلصَّمَدُ'],
        highlightIndex: 1,
        question: 'What does ٱلصَّمَدُ mean?',
        options: ['The Eternal Refuge', 'The Creator', 'The Most High', 'The Wise'],
        answer: 'The Eternal Refuge',
        detail: 'ٱلصَّمَدُ — "The Self-Sufficient, the one all depend on." Appears only once in the Quran.',
      },
      {
        // All 4 words taught: ٱلصَّمَدُ (this lesson), ٱللَّهُ (Unit 1), أَحَدٌ (L26), قُلْ (L26)
        type: 'meaning-match',
        pairs: [
          ['ٱلصَّمَدُ', 'The Eternal Refuge'],
          ['ٱللَّهُ', 'Allah'],
          ['أَحَدٌ', 'One'],
          ['قُلْ', 'Say!'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱللَّهُ', '______'],
        gapIndex: 1,
        // FIXED: ٱلرَّحِيمُ from Unit 1 instead of ٱلْعَلِيمُ
        options: ['ٱلصَّمَدُ', 'أَحَدٌ', 'ٱلرَّحِيمُ'],
        answer: 'ٱلصَّمَدُ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱللَّهُ ٱلصَّمَدُ',
        ayahRef: '112:2',
        translationWords: ['Allah,', 'the Eternal Refuge'],
      },
      {
        // All words taught: قُلْ, هُوَ, أَحَدٌ (L26), ٱللَّهُ (Unit 1), ٱلصَّمَدُ (this lesson)
        type: 'ayah-assembly',
        translation: 'Say: "He is Allah, the One. Allah, the Eternal Refuge."',
        words: ['قُلْ', 'هُوَ', 'ٱللَّهُ', 'أَحَدٌ', '·', 'ٱللَّهُ', 'ٱلصَّمَدُ'],
        isAyahLevel: true,
      },
      {
        type: 'fill-the-gap',
        ayah: ['قُلْ', 'هُوَ', '______', 'أَحَدٌ'],
        gapIndex: 2,
        options: ['ٱللَّهُ', 'رَبِّ', 'بِسْمِ'],
        answer: 'ٱللَّهُ',
      },
      {
        type: 'cold-read',
        ayah: 'قُلْ أَرَأَيْتُمْ إِنْ أَخَذَ ٱللَّهُ سَمْعَكُمْ',
        ayahRef: '6:46',
        words: [
          { ar: 'قُلْ', en: 'Say!' },
          { ar: 'أَرَأَيْتُمْ', en: null },
          { ar: 'إِنْ', en: null },
          { ar: 'أَخَذَ', en: null },
          { ar: 'ٱللَّهُ', en: 'Allah' },
          { ar: 'سَمْعَكُمْ', en: null },
        ],
      },
    ],
  },

  L28: {
    id: 'L28', unitId: 'unit-8', number: 28,
    name: 'Neither Begets', type: 'root', typeLabel: 'Root Deep Dive',
    // FIXED: Added لَمْ and وَلَا as formal new words since they're used throughout
    newWords: ['لَمْ', 'يَلِدْ', 'يُولَدْ', 'وَلَا'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        ayahRef: '112:3',
        words: ['لَمْ', 'يَلِدْ', 'وَلَمْ', 'يُولَدْ'],
        highlightIndex: 0,
        question: 'What does لَمْ mean?',
        options: ['Did not', 'Indeed', 'Say', 'He'],
        answer: 'Did not',
        detail: 'لَمْ — negates the past. "He did NOT..."',
      },
      {
        type: 'word-spotlight',
        ayah: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        ayahRef: '112:3',
        words: ['لَمْ', 'يَلِدْ', 'وَلَمْ', 'يُولَدْ'],
        highlightIndex: 1,
        question: 'What does يَلِدْ mean?',
        options: ['He begets', 'He creates', 'He gives', 'He knows'],
        answer: 'He begets',
        detail: 'يَلِدْ — "to beget/give birth" from root و-ل-د.',
      },
      {
        type: 'word-spotlight',
        ayah: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        ayahRef: '112:3',
        words: ['لَمْ', 'يَلِدْ', 'وَلَمْ', 'يُولَدْ'],
        highlightIndex: 3,
        question: 'What does يُولَدْ mean?',
        options: ['Was begotten', 'Was created', 'Was given', 'Was known'],
        answer: 'Was begotten',
        detail: 'يُولَدْ — passive voice of the same root و-ل-د. Active → passive.',
      },
      {
        type: 'root-discovery',
        root: 'و-ل-د',
        rootMeaning: 'birth, offspring',
        knownWords: [
          { ar: 'يَلِدْ', en: 'he begets (active)' },
          { ar: 'يُولَدْ', en: 'was begotten (passive)' },
        ],
        newWord: { ar: 'وَلَد', en: 'child' },
        question: 'Both share root و-ل-د. What might وَلَد mean?',
        options: ['Child', 'Father', 'Brother'],
        answer: 'Child',
      },
      {
        type: 'transform-predict',
        given: { ar: 'يَلِدْ', en: 'he begets (active voice)' },
        instruction: 'Change active voice → passive voice',
        result: { ar: 'يُولَدْ' },
        question: 'What is the passive form?',
        options: ['يُولَدْ (was begotten)', 'وَلَدَ (child)', 'يَلِدُونَ (they beget)'],
        answer: 'يُولَدْ (was begotten)',
      },
      {
        // All 4 words taught in this lesson
        type: 'meaning-match',
        pairs: [
          ['يَلِدْ', 'begets'],
          ['يُولَدْ', 'was begotten'],
          ['لَمْ', 'did not'],
          ['وَلَا', 'and not'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['لَمْ', '______', 'وَلَمْ', 'يُولَدْ'],
        gapIndex: 1,
        options: ['يَلِدْ', 'يَكُن', 'هُوَ'],
        answer: 'يَلِدْ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        ayahRef: '112:3',
        translationWords: ['He neither', 'begets', 'nor was He', 'begotten'],
      },
      {
        type: 'ayah-assembly',
        translation: 'He neither begets nor was He begotten',
        words: ['لَمْ', 'يَلِدْ', 'وَلَمْ', 'يُولَدْ'],
      },
      {
        type: 'cold-read',
        ayah: 'مَا كَانَ لِلَّهِ أَن يَتَّخِذَ مِن وَلَدٍ',
        ayahRef: '19:35',
        words: [
          { ar: 'مَا', en: null },
          { ar: 'كَانَ', en: null },
          { ar: 'لِلَّهِ', en: 'for Allah' },
          { ar: 'أَن', en: null },
          { ar: 'يَتَّخِذَ', en: null },
          { ar: 'مِن', en: null },
          { ar: 'وَلَدٍ', en: 'child (root و-ل-د!)' },
        ],
      },
    ],
  },

  L29: {
    id: 'L29', unitId: 'unit-8', number: 29,
    name: 'None Like Him', type: 'new-words', typeLabel: 'New Words',
    // FIXED: Separated يَكُن from لَمْ (لَمْ already taught in L28)
    newWords: ['يَكُن', 'كُفُوًا'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        ayahRef: '112:4',
        words: ['وَلَمْ', 'يَكُن', 'لَّهُ', 'كُفُوًا', 'أَحَدٌ'],
        highlightIndex: 1,
        question: 'What does يَكُن mean?',
        options: ['There is/was', 'He begets', 'He creates', 'He says'],
        answer: 'There is/was',
        detail: 'يَكُن — "there is/was" or "to be". With لَمْ: "there was NOT."',
      },
      {
        type: 'word-spotlight',
        ayah: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        ayahRef: '112:4',
        words: ['وَلَمْ', 'يَكُن', 'لَّهُ', 'كُفُوًا', 'أَحَدٌ'],
        highlightIndex: 3,
        question: 'What does كُفُوًا mean?',
        options: ['Equal/equivalent', 'Greater', 'Similar', 'Worthy'],
        answer: 'Equal/equivalent',
        detail: 'كُفُوًا — "comparable, equivalent, equal to." None is equal to Allah.',
      },
      {
        // All 4 words taught: كُفُوًا + يَكُن (this lesson), لَمْ (L28), أَحَدٌ (L26)
        type: 'meaning-match',
        pairs: [
          ['كُفُوًا', 'equal/equivalent'],
          ['يَكُن', 'there is/was'],
          ['لَمْ', 'did not'],
          ['أَحَدٌ', 'one/anyone'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['وَلَمْ', 'يَكُن', 'لَّهُ', '______', 'أَحَدٌ'],
        gapIndex: 3,
        options: ['كُفُوًا', 'يَلِدْ', 'هُوَ'],
        answer: 'كُفُوًا',
      },
      {
        type: 'tap-to-translate',
        ayah: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        ayahRef: '112:4',
        translationWords: ['And there is', 'none', 'equivalent', 'to Him'],
      },
      {
        type: 'transform-predict',
        given: { ar: 'لَمْ يَلِدْ', en: 'He did not beget' },
        instruction: 'Same pattern لَمْ + verb. Now with يَكُن:',
        result: { ar: 'لَمْ يَكُن' },
        question: 'What does لَمْ يَكُن mean?',
        options: ['There was not', 'He did not beget', 'He was not born'],
        answer: 'There was not',
      },
      {
        type: 'ayah-assembly',
        translation: 'And there is none equivalent to Him',
        words: ['وَلَمْ', 'يَكُن', 'لَّهُ', 'كُفُوًا', 'أَحَدٌ'],
      },
      {
        type: 'cold-read',
        ayah: 'لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ',
        ayahRef: '42:11',
        words: [
          { ar: 'لَيْسَ', en: null },
          { ar: 'كَمِثْلِهِ', en: null },
          { ar: 'شَيْءٌ', en: null },
          { ar: 'وَهُوَ', en: 'and He' },
          { ar: 'ٱلسَّمِيعُ', en: null },
          { ar: 'ٱلْبَصِيرُ', en: null },
        ],
      },
    ],
  },

  L30: {
    id: 'L30', unitId: 'unit-8', number: 30,
    name: 'Al-Ikhlas Mastery', type: 'surah', typeLabel: 'Surah Story',
    newWords: [],
    exercises: [
      {
        type: 'listen',
        surahName: 'Al-Ikhlas',
        surahRef: '112:1-4',
        ayahs: [
          { num: 1, ar: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ' },
          { num: 2, ar: 'ٱللَّهُ ٱلصَّمَدُ' },
          { num: 3, ar: 'لَمْ يَلِدْ وَلَمْ يُولَدْ' },
          { num: 4, ar: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ' },
        ],
      },
      {
        type: 'tap-to-translate',
        ayah: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ',
        ayahRef: '112:1',
        translationWords: ['Say:', '"He is', 'Allah,', 'the One"'],
      },
      {
        type: 'fill-the-gap',
        ayah: ['قُلْ', '______', 'ٱللَّهُ', 'أَحَدٌ'],
        gapIndex: 1,
        options: ['هُوَ', 'لَمْ', 'وَلَا'],
        answer: 'هُوَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱللَّهُ ٱلصَّمَدُ',
        ayahRef: '112:2',
        translationWords: ['Allah,', 'the Eternal Refuge'],
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱللَّهُ', '______'],
        gapIndex: 1,
        options: ['ٱلصَّمَدُ', 'أَحَدٌ', 'ٱلرَّحِيمُ'],
        answer: 'ٱلصَّمَدُ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        ayahRef: '112:3',
        translationWords: ['He neither', 'begets', 'nor was He', 'begotten'],
      },
      {
        type: 'tap-to-translate',
        ayah: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        ayahRef: '112:4',
        translationWords: ['And there is', 'none', 'equivalent', 'to Him'],
      },
      {
        type: 'ayah-assembly',
        translation: 'Arrange the ayahs of Surah Al-Ikhlas in order',
        words: ['قُلْ هُوَ ٱللَّهُ أَحَدٌ', 'ٱللَّهُ ٱلصَّمَدُ', 'لَمْ يَلِدْ وَلَمْ يُولَدْ', 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ'],
        isAyahLevel: true,
      },
      {
        type: 'cold-read',
        ayah: 'شَهِدَ ٱللَّهُ أَنَّهُ لَا إِلَـٰهَ إِلَّا هُوَ',
        ayahRef: '3:18',
        words: [
          { ar: 'شَهِدَ', en: null },
          { ar: 'ٱللَّهُ', en: 'Allah' },
          { ar: 'أَنَّهُ', en: null },
          { ar: 'لَا', en: null },
          { ar: 'إِلَـٰهَ', en: null },
          { ar: 'إِلَّا', en: null },
          { ar: 'هُوَ', en: 'He' },
        ],
      },
      {
        type: 'cold-read',
        ayah: 'هُوَ ٱللَّهُ ٱلَّذِي لَا إِلَـٰهَ إِلَّا هُوَ',
        ayahRef: '59:22',
        words: [
          { ar: 'هُوَ', en: 'He' },
          { ar: 'ٱللَّهُ', en: 'Allah' },
          { ar: 'ٱلَّذِي', en: null },
          { ar: 'لَا', en: null },
          { ar: 'إِلَـٰهَ', en: null },
          { ar: 'إِلَّا', en: null },
          { ar: 'هُوَ', en: 'He' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 11 — By Time / Al-Asr (3 lessons)
  //
  // Assumed known: Unit 1 words + Unit 8 words
  //
  // Vocabulary taught in this unit:
  //   L39: وَٱلْعَصْرِ, وَ
  //   L40: إِنَّ, ٱلْإِنسَـٰنَ, لَفِى, خُسْرٍ
  //   L41: إِلَّا, ٱلَّذِينَ, آمَنُوا
  // ────────────────────────────────────────────────────────────

  L39: {
    id: 'L39', unitId: 'unit-11', number: 39,
    name: 'The Oath', type: 'new-words', typeLabel: 'New Words',
    // FIXED: Added وَ explicitly since it's taught as oath particle
    newWords: ['وَٱلْعَصْرِ', 'وَ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'وَٱلْعَصْرِ',
        ayahRef: '103:1',
        words: ['وَٱلْعَصْرِ'],
        highlightIndex: 0,
        question: 'What does وَٱلْعَصْرِ mean?',
        options: ['By time', 'By the morning', 'By the night', 'By the soul'],
        answer: 'By time',
        detail: 'وَٱلْعَصْرِ — وَ here is an oath particle ("By...!"), ٱلْعَصْرِ means "time/era".',
      },
      {
        type: 'transform-predict',
        given: { ar: 'ٱلْعَصْرِ', en: 'time/era' },
        instruction: 'Add وَ as an oath particle (meaning "By...!")',
        result: { ar: 'وَٱلْعَصْرِ' },
        question: 'What does وَٱلْعَصْرِ mean?',
        options: ['By time!', 'And time', 'In time'],
        answer: 'By time!',
      },
      {
        // All words taught: وَٱلْعَصْرِ + وَ (this lesson), بِسْمِ (Unit 1), ٱللَّهِ (Unit 1)
        type: 'meaning-match',
        pairs: [
          ['وَٱلْعَصْرِ', 'By time'],
          ['وَ', 'and / by (oath)'],
          ['بِسْمِ', 'In the name of'],
          ['ٱللَّهِ', 'Allah'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['______'],
        gapIndex: 0,
        // Distractors are other oath openings — student doesn't need to know them, just picks the right one
        options: ['وَٱلْعَصْرِ', 'وَٱلْفَجْرِ', 'وَٱلضُّحَىٰ'],
        answer: 'وَٱلْعَصْرِ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'وَٱلْعَصْرِ',
        ayahRef: '103:1',
        translationWords: ['By time'],
      },
      {
        type: 'cold-read',
        ayah: 'وَٱلتِّينِ وَٱلزَّيْتُونِ',
        ayahRef: '95:1',
        words: [
          { ar: 'وَٱلتِّينِ', en: 'By the fig (same وَ oath!)' },
          { ar: 'وَٱلزَّيْتُونِ', en: null },
        ],
      },
    ],
  },

  L40: {
    id: 'L40', unitId: 'unit-11', number: 40,
    name: 'Mankind is in Loss', type: 'grammar', typeLabel: 'Grammar Unlock',
    newWords: ['إِنَّ', 'ٱلْإِنسَـٰنَ', 'لَفِى', 'خُسْرٍ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ',
        ayahRef: '103:2',
        words: ['إِنَّ', 'ٱلْإِنسَـٰنَ', 'لَفِى', 'خُسْرٍ'],
        highlightIndex: 0,
        question: 'What does إِنَّ mean?',
        options: ['Indeed/truly', 'Not', 'If', 'Say'],
        answer: 'Indeed/truly',
        detail: 'إِنَّ is an emphasis particle — it makes the statement stronger: "INDEED..."',
      },
      {
        type: 'word-spotlight',
        ayah: 'إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ',
        ayahRef: '103:2',
        words: ['إِنَّ', 'ٱلْإِنسَـٰنَ', 'لَفِى', 'خُسْرٍ'],
        highlightIndex: 1,
        question: 'What does ٱلْإِنسَـٰنَ mean?',
        options: ['Mankind', 'The soul', 'The world', 'The believer'],
        answer: 'Mankind',
        detail: 'ٱلْإِنسَـٰنَ — "mankind/the human being". From root أ-ن-س.',
      },
      {
        type: 'word-spotlight',
        ayah: 'إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ',
        ayahRef: '103:2',
        words: ['إِنَّ', 'ٱلْإِنسَـٰنَ', 'لَفِى', 'خُسْرٍ'],
        highlightIndex: 3,
        question: 'What does خُسْرٍ mean?',
        options: ['Loss', 'Pain', 'Darkness', 'Sin'],
        answer: 'Loss',
        detail: 'خُسْرٍ — "loss, ruin." Mankind is in a state of loss... unless?',
      },
      {
        type: 'transform-predict',
        given: { ar: 'ٱلْإِنسَـٰنَ فِى خُسْرٍ', en: 'mankind is in loss' },
        instruction: 'Add إِنَّ at the start for emphasis',
        result: { ar: 'إِنَّ ٱلْإِنسَـٰنَ فِى خُسْرٍ' },
        question: 'What changes?',
        options: ['INDEED mankind is in loss', 'Mankind is NOT in loss', 'IF mankind is in loss'],
        answer: 'INDEED mankind is in loss',
      },
      {
        type: 'transform-predict',
        given: { ar: 'فِى خُسْرٍ', en: 'in loss' },
        instruction: 'Add لَ for double emphasis (إِنَّ ... لَفِى)',
        result: { ar: 'لَفِى خُسْرٍ' },
        question: 'What does لَفِى mean?',
        options: ['Surely in (emphatic)', 'Not in', 'Perhaps in'],
        answer: 'Surely in (emphatic)',
      },
      {
        // All words from this lesson
        type: 'meaning-match',
        pairs: [
          ['إِنَّ', 'Indeed'],
          ['ٱلْإِنسَـٰنَ', 'mankind'],
          ['خُسْرٍ', 'loss'],
          ['لَفِى', 'surely in'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['إِنَّ', '______', 'لَفِى', 'خُسْرٍ'],
        gapIndex: 1,
        options: ['ٱلْإِنسَـٰنَ', 'ٱللَّهَ', 'ٱلْعَصْرِ'],
        answer: 'ٱلْإِنسَـٰنَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ',
        ayahRef: '103:2',
        translationWords: ['Indeed,', 'mankind', 'is surely in', 'loss'],
      },
      {
        type: 'ayah-assembly',
        translation: 'Indeed, mankind is surely in loss',
        words: ['إِنَّ', 'ٱلْإِنسَـٰنَ', 'لَفِى', 'خُسْرٍ'],
      },
      {
        type: 'cold-read',
        ayah: 'لَقَدْ خَلَقْنَا ٱلْإِنسَـٰنَ فِى أَحْسَنِ تَقْوِيمٍ',
        ayahRef: '95:4',
        words: [
          { ar: 'لَقَدْ', en: null },
          { ar: 'خَلَقْنَا', en: null },
          { ar: 'ٱلْإِنسَـٰنَ', en: 'mankind' },
          { ar: 'فِى', en: null },
          { ar: 'أَحْسَنِ', en: null },
          { ar: 'تَقْوِيمٍ', en: null },
        ],
      },
    ],
  },

  L41: {
    id: 'L41', unitId: 'unit-11', number: 41,
    name: 'Except...', type: 'new-words', typeLabel: 'New Words',
    // FIXED: Added ٱلَّذِينَ and آمَنُوا since they appear in exercises
    newWords: ['إِلَّا', 'ٱلَّذِينَ', 'آمَنُوا'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'إِلَّا ٱلَّذِينَ آمَنُوا',
        ayahRef: '103:3',
        words: ['إِلَّا', 'ٱلَّذِينَ', 'آمَنُوا'],
        highlightIndex: 0,
        question: 'What does إِلَّا mean?',
        options: ['Except', 'Indeed', 'Not', 'And'],
        answer: 'Except',
        detail: 'إِلَّا — "except, unless". The great exception that saves mankind from loss.',
      },
      {
        type: 'word-spotlight',
        ayah: 'إِلَّا ٱلَّذِينَ آمَنُوا',
        ayahRef: '103:3',
        words: ['إِلَّا', 'ٱلَّذِينَ', 'آمَنُوا'],
        highlightIndex: 1,
        question: 'What does ٱلَّذِينَ mean?',
        options: ['Those who', 'Indeed', 'Mankind', 'Except'],
        answer: 'Those who',
        detail: 'ٱلَّذِينَ — "those who." One of the most common words in the Quran (1,000+×).',
      },
      {
        type: 'word-spotlight',
        ayah: 'إِلَّا ٱلَّذِينَ آمَنُوا',
        ayahRef: '103:3',
        words: ['إِلَّا', 'ٱلَّذِينَ', 'آمَنُوا'],
        highlightIndex: 2,
        question: 'What does آمَنُوا mean?',
        options: ['Believed', 'Worshipped', 'Created', 'Said'],
        answer: 'Believed',
        detail: 'آمَنُوا — "they believed." From root أ-م-ن (faith, security). Same root as إِيمَان (faith).',
      },
      {
        type: 'transform-predict',
        given: { ar: 'إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ', en: 'Indeed, mankind is in loss' },
        instruction: 'Add إِلَّا to create an exception',
        result: { ar: 'إِلَّا ٱلَّذِينَ آمَنُوا' },
        question: 'What does إِلَّا ٱلَّذِينَ آمَنُوا mean?',
        options: ['Except those who believed', 'Indeed those who believed', 'Not those who believed'],
        answer: 'Except those who believed',
      },
      {
        // All words taught: إِلَّا + ٱلَّذِينَ + آمَنُوا (this lesson), إِنَّ (L40)
        type: 'meaning-match',
        pairs: [
          ['إِلَّا', 'except'],
          ['ٱلَّذِينَ', 'those who'],
          ['آمَنُوا', 'believed'],
          ['إِنَّ', 'indeed'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'ٱلَّذِينَ', 'آمَنُوا'],
        gapIndex: 0,
        options: ['إِلَّا', 'إِنَّ', 'وَ'],
        answer: 'إِلَّا',
      },
      {
        type: 'tap-to-translate',
        ayah: 'إِلَّا ٱلَّذِينَ آمَنُوا',
        ayahRef: '103:3',
        translationWords: ['Except', 'those who', 'believed'],
      },
      {
        // FIXED: Now uses isAyahLevel with full phrases — all are taught
        type: 'ayah-assembly',
        translation: 'By time. Indeed, mankind is in loss. Except those who believed.',
        words: ['وَٱلْعَصْرِ', 'إِنَّ ٱلْإِنسَـٰنَ لَفِى خُسْرٍ', 'إِلَّا ٱلَّذِينَ آمَنُوا'],
        isAyahLevel: true,
      },
      {
        type: 'cold-read',
        ayah: 'لَا إِلَـٰهَ إِلَّا هُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ',
        ayahRef: '3:6',
        words: [
          { ar: 'لَا', en: null },
          { ar: 'إِلَـٰهَ', en: null },
          { ar: 'إِلَّا', en: 'except' },
          { ar: 'هُوَ', en: 'He' },
          { ar: 'ٱلْعَزِيزُ', en: null },
          { ar: 'ٱلْحَكِيمُ', en: null },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 13 — Five Ways to Say No (5 lessons)
  //
  // Assumed known: Unit 1 + Unit 8 + Unit 11 words
  //
  // Vocabulary taught in this unit:
  //   L46: لَا, مَا
  //   L47: لَنْ  (لَمْ already taught in Unit 8)
  //   L48: لَيْسَ, غَيْرِ
  //   L49: نَعْبُدُ, أَعْبُدُ, تَعْبُدُونَ, عَبْد
  //   L50: (mastery — no new words)
  // ────────────────────────────────────────────────────────────

  L46: {
    id: 'L46', unitId: 'unit-13', number: 46,
    name: 'لَا and مَا', type: 'grammar', typeLabel: 'Grammar Unlock',
    newWords: ['لَا', 'مَا'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'لَا إِلَـٰهَ إِلَّا ٱللَّهُ',
        ayahRef: '47:19',
        words: ['لَا', 'إِلَـٰهَ', 'إِلَّا', 'ٱللَّهُ'],
        highlightIndex: 0,
        question: 'What does لَا mean?',
        options: ['No / not', 'Indeed', 'Say', 'Except'],
        answer: 'No / not',
        detail: 'لَا — the most common negation in Arabic. "No god" → لَا إِلَـٰهَ.',
      },
      {
        // FIXED: Uses هُوَ (taught in Unit 8) instead of أَعْبُدُ (not taught yet)
        type: 'transform-predict',
        given: { ar: 'هُوَ ٱللَّهُ', en: 'He is Allah' },
        instruction: 'Add لَا to negate — "not..."',
        result: { ar: 'لَا إِلَـٰهَ إِلَّا ٱللَّهُ' },
        question: 'لَا negates. What does لَا إِلَـٰهَ mean?',
        options: ['No god / there is no god', 'The god', 'Indeed a god'],
        answer: 'No god / there is no god',
      },
      {
        // مَا as "what" — uses هُوَ (taught in Unit 8)
        type: 'transform-predict',
        given: { ar: 'هُوَ', en: 'He' },
        instruction: 'مَا can mean "what" or "not" depending on context',
        result: { ar: 'مَا هُوَ' },
        question: 'مَا هُوَ can mean:',
        options: ['What is it? / It is not', 'He is great', 'Indeed he'],
        answer: 'What is it? / It is not',
      },
      {
        // All 4 words taught: لَا + مَا (this lesson), إِلَّا (Unit 11), إِنَّ (Unit 11)
        type: 'meaning-match',
        pairs: [
          ['لَا', 'no / not'],
          ['مَا', 'what / not'],
          ['إِلَّا', 'except'],
          ['إِنَّ', 'indeed'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'إِلَـٰهَ', 'إِلَّا', 'ٱللَّهُ'],
        gapIndex: 0,
        options: ['لَا', 'مَا', 'إِنَّ'],
        answer: 'لَا',
      },
      {
        type: 'tap-to-translate',
        ayah: 'لَا إِلَـٰهَ إِلَّا ٱللَّهُ',
        ayahRef: '47:19',
        translationWords: ['There is no', 'god', 'except', 'Allah'],
      },
      {
        type: 'cold-read',
        ayah: 'ٱللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ',
        ayahRef: '2:255',
        words: [
          { ar: 'ٱللَّهُ', en: 'Allah' },
          { ar: 'لَا', en: 'no / not' },
          { ar: 'إِلَـٰهَ', en: null },
          { ar: 'إِلَّا', en: 'except' },
          { ar: 'هُوَ', en: 'He' },
          { ar: 'ٱلْحَىُّ', en: null },
          { ar: 'ٱلْقَيُّومُ', en: null },
        ],
      },
    ],
  },

  L47: {
    id: 'L47', unitId: 'unit-13', number: 47,
    name: 'لَمْ and لَنْ', type: 'grammar', typeLabel: 'Grammar Unlock',
    // FIXED: لَمْ already taught in Unit 8 L28 — only لَنْ is new here
    newWords: ['لَنْ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        ayahRef: '112:3',
        words: ['لَمْ', 'يَلِدْ', 'وَلَمْ', 'يُولَدْ'],
        highlightIndex: 0,
        question: 'You learned لَمْ in Al-Ikhlas. What does it mean?',
        options: ['Did not (past negation)', 'Will not', 'No', 'Indeed'],
        answer: 'Did not (past negation)',
        detail: 'لَمْ negates the past — "He did NOT beget." Now let\'s compare it to لَنْ...',
      },
      {
        type: 'transform-predict',
        given: { ar: 'يَلِدْ', en: 'he begets' },
        instruction: 'لَمْ negates the PAST — add it:',
        result: { ar: 'لَمْ يَلِدْ' },
        question: 'What does لَمْ يَلِدْ mean?',
        options: ['He did not beget', 'He will not beget', 'He does not beget'],
        answer: 'He did not beget',
      },
      {
        // Now introduce لَنْ — uses يَكُن (taught in Unit 8 L29)
        type: 'transform-predict',
        given: { ar: 'يَكُن', en: 'there is/was' },
        instruction: 'لَنْ negates the FUTURE permanently — add it:',
        result: { ar: 'لَنْ يَكُن' },
        question: 'What does لَنْ يَكُن mean?',
        options: ['There will never be', 'There was not', 'There is not'],
        answer: 'There will never be',
      },
      {
        // All 4 words taught: لَنْ (this lesson), لَمْ (Unit 8), لَا (L46), مَا (L46)
        type: 'meaning-match',
        pairs: [
          ['لَمْ', 'did not (past)'],
          ['لَنْ', 'will never (future)'],
          ['لَا', 'no / not (general)'],
          ['مَا', 'what / not'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'يَلِدْ', 'وَلَمْ', 'يُولَدْ'],
        gapIndex: 0,
        options: ['لَمْ', 'لَنْ', 'لَا'],
        answer: 'لَمْ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        ayahRef: '112:3',
        translationWords: ['He neither', 'begets', 'nor was He', 'begotten'],
      },
      {
        type: 'cold-read',
        ayah: 'لَن تَنَالُوا ٱلْبِرَّ حَتَّىٰ تُنفِقُوا مِمَّا تُحِبُّونَ',
        ayahRef: '3:92',
        words: [
          { ar: 'لَن', en: 'will never' },
          { ar: 'تَنَالُوا', en: null },
          { ar: 'ٱلْبِرَّ', en: null },
          { ar: 'حَتَّىٰ', en: null },
          { ar: 'تُنفِقُوا', en: null },
          { ar: 'مِمَّا', en: null },
          { ar: 'تُحِبُّونَ', en: null },
        ],
      },
    ],
  },

  L48: {
    id: 'L48', unitId: 'unit-13', number: 48,
    name: 'لَيْسَ and غَيْرِ', type: 'grammar', typeLabel: 'Grammar Unlock',
    newWords: ['لَيْسَ', 'غَيْرِ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'لَيْسَ كَمِثْلِهِ شَيْءٌ',
        ayahRef: '42:11',
        words: ['لَيْسَ', 'كَمِثْلِهِ', 'شَيْءٌ'],
        highlightIndex: 0,
        question: 'What does لَيْسَ mean?',
        options: ['Is not / there is not', 'Indeed', 'Will not', 'Except'],
        answer: 'Is not / there is not',
        detail: 'لَيْسَ — negates "being". "There is nothing like Him" — an existence negation.',
      },
      {
        // FIXED: Uses only words from earlier units. No untaught Al-Fatiha vocabulary.
        type: 'word-spotlight',
        ayah: 'لَيْسَ كَمِثْلِهِ شَيْءٌ',
        ayahRef: '42:11',
        words: ['لَيْسَ', 'كَمِثْلِهِ', 'شَيْءٌ'],
        highlightIndex: 0,
        question: 'لَيْسَ negates existence. How is it different from لَا?',
        options: ['لَيْسَ = "is not" (being), لَا = "no/not" (general)', 'They mean the same thing', 'لَيْسَ is for the future'],
        answer: 'لَيْسَ = "is not" (being), لَا = "no/not" (general)',
        detail: 'لَيْسَ specifically negates a state of being. "He is NOT..." vs لَا which is general negation.',
      },
      {
        type: 'transform-predict',
        given: { ar: 'هُوَ ٱللَّهُ', en: 'He is Allah' },
        instruction: 'Negate with لَيْسَ — "It is NOT..."',
        result: { ar: 'لَيْسَ كَمِثْلِهِ شَيْءٌ' },
        question: 'لَيْسَ negates:',
        options: ['Existence/being (is not)', 'Past action (did not)', 'Future action (will not)'],
        answer: 'Existence/being (is not)',
      },
      {
        type: 'transform-predict',
        given: { ar: 'ٱلَّذِينَ آمَنُوا', en: 'those who believed' },
        instruction: 'غَيْرِ means "other than" — add it before:',
        result: { ar: 'غَيْرِ ٱلَّذِينَ آمَنُوا' },
        question: 'What does غَيْرِ ٱلَّذِينَ آمَنُوا mean?',
        options: ['Other than those who believed', 'Those who believed', 'Except those who believed'],
        answer: 'Other than those who believed',
      },
      {
        // All 4 words taught: لَيْسَ + غَيْرِ (this lesson), لَمْ (Unit 8), لَنْ (L47)
        type: 'meaning-match',
        pairs: [
          ['لَيْسَ', 'is not'],
          ['غَيْرِ', 'other than'],
          ['لَمْ', 'did not'],
          ['لَنْ', 'will never'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'كَمِثْلِهِ', 'شَيْءٌ'],
        gapIndex: 0,
        options: ['لَيْسَ', 'لَمْ', 'إِنَّ'],
        answer: 'لَيْسَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'لَيْسَ كَمِثْلِهِ شَيْءٌ',
        ayahRef: '42:11',
        translationWords: ['There is nothing', 'like', 'Him'],
      },
      {
        type: 'cold-read',
        ayah: 'أَلَيْسَ ٱللَّهُ بِأَحْكَمِ ٱلْحَاكِمِينَ',
        ayahRef: '95:8',
        words: [
          { ar: 'أَلَيْسَ', en: 'Is not? (rhetorical — root لَيْسَ!)' },
          { ar: 'ٱللَّهُ', en: 'Allah' },
          { ar: 'بِأَحْكَمِ', en: null },
          { ar: 'ٱلْحَاكِمِينَ', en: null },
        ],
      },
    ],
  },

  L49: {
    id: 'L49', unitId: 'unit-13', number: 49,
    name: "I Don't Worship", type: 'root', typeLabel: 'Root Deep Dive',
    // FIXED: Explicitly teaches all 4 forms including نَعْبُدُ and عَبْد
    newWords: ['نَعْبُدُ', 'أَعْبُدُ', 'تَعْبُدُونَ', 'عَبْد'],
    exercises: [
      {
        // First teach نَعْبُدُ — the form from Al-Fatiha they may know from prayer
        type: 'word-spotlight',
        ayah: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        ayahRef: '1:5',
        words: ['إِيَّاكَ', 'نَعْبُدُ', 'وَإِيَّاكَ', 'نَسْتَعِينُ'],
        highlightIndex: 1,
        question: 'What does نَعْبُدُ mean?',
        options: ['We worship', 'We pray', 'We ask', 'We believe'],
        answer: 'We worship',
        detail: 'نَعْبُدُ — "we worship". نَ prefix = "we". Root ع-ب-د (worship/serve).',
      },
      {
        // Now teach أَعْبُدُ
        type: 'word-spotlight',
        ayah: 'لَا أَعْبُدُ مَا تَعْبُدُونَ',
        ayahRef: '109:2',
        words: ['لَا', 'أَعْبُدُ', 'مَا', 'تَعْبُدُونَ'],
        highlightIndex: 1,
        question: 'What does أَعْبُدُ mean?',
        options: ['I worship', 'You worship', 'We worship', 'He worships'],
        answer: 'I worship',
        detail: 'أَعْبُدُ — "I worship". أَ prefix = "I". Same root ع-ب-د as نَعْبُدُ.',
      },
      {
        // Now teach تَعْبُدُونَ
        type: 'word-spotlight',
        ayah: 'لَا أَعْبُدُ مَا تَعْبُدُونَ',
        ayahRef: '109:2',
        words: ['لَا', 'أَعْبُدُ', 'مَا', 'تَعْبُدُونَ'],
        highlightIndex: 3,
        question: 'What does تَعْبُدُونَ mean?',
        options: ['You (all) worship', 'I worship', 'We worship', 'They worship'],
        answer: 'You (all) worship',
        detail: 'تَعْبُدُونَ — "you all worship". تَ prefix + ونَ suffix = "you all".',
      },
      {
        // Root discovery — all 3 forms are now taught, discover عَبْد
        type: 'root-discovery',
        root: 'ع-ب-د',
        rootMeaning: 'to worship, to serve',
        knownWords: [
          { ar: 'نَعْبُدُ', en: 'we worship' },
          { ar: 'أَعْبُدُ', en: 'I worship' },
          { ar: 'تَعْبُدُونَ', en: 'you all worship' },
        ],
        newWord: { ar: 'عَبْد', en: 'servant/worshipper' },
        question: 'All share root ع-ب-د. What might عَبْد mean?',
        options: ['Servant/worshipper', 'Prayer', 'Fasting'],
        answer: 'Servant/worshipper',
      },
      {
        type: 'transform-predict',
        given: { ar: 'نَعْبُدُ', en: 'we worship (نَ = we)' },
        instruction: 'Swap نَ for أَ to change "we" → "I"',
        result: { ar: 'أَعْبُدُ' },
        question: 'What is the result?',
        options: ['أَعْبُدُ (I worship)', 'تَعْبُدُ (you worship)', 'يَعْبُدُ (he worships)'],
        answer: 'أَعْبُدُ (I worship)',
      },
      {
        type: 'transform-predict',
        given: { ar: 'أَعْبُدُ', en: 'I worship (أَ = I)' },
        instruction: 'Swap أَ for تَ and add ونَ to change "I" → "you all"',
        result: { ar: 'تَعْبُدُونَ' },
        question: 'What is the result?',
        options: ['تَعْبُدُونَ (you all worship)', 'يَعْبُدُونَ (they worship)', 'نَعْبُدُ (we worship)'],
        answer: 'تَعْبُدُونَ (you all worship)',
      },
      {
        // All 4 words taught in this lesson
        type: 'meaning-match',
        pairs: [
          ['أَعْبُدُ', 'I worship'],
          ['تَعْبُدُونَ', 'you all worship'],
          ['نَعْبُدُ', 'we worship'],
          ['عَبْد', 'servant'],
        ],
      },
      {
        type: 'tap-to-translate',
        ayah: 'لَا أَعْبُدُ مَا تَعْبُدُونَ',
        ayahRef: '109:2',
        translationWords: ['I do not', 'worship', 'what', 'you worship'],
      },
      {
        type: 'cold-read',
        ayah: 'وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ',
        ayahRef: '51:56',
        words: [
          { ar: 'وَمَا', en: 'and not' },
          { ar: 'خَلَقْتُ', en: null },
          { ar: 'ٱلْجِنَّ', en: null },
          { ar: 'وَٱلْإِنسَ', en: 'and mankind' },
          { ar: 'إِلَّا', en: 'except' },
          { ar: 'لِيَعْبُدُونِ', en: 'to worship Me (root ع-ب-د!)' },
        ],
      },
    ],
  },

  L50: {
    id: 'L50', unitId: 'unit-13', number: 50,
    name: 'Al-Kafirun via Negation', type: 'surah', typeLabel: 'Surah Story',
    newWords: [],
    exercises: [
      {
        type: 'listen',
        surahName: 'Al-Kafirun',
        surahRef: '109:1-6',
        ayahs: [
          { num: 1, ar: 'قُلْ يَا أَيُّهَا ٱلْكَافِرُونَ' },
          { num: 2, ar: 'لَا أَعْبُدُ مَا تَعْبُدُونَ' },
          { num: 3, ar: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ' },
          { num: 4, ar: 'وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ' },
          { num: 5, ar: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ' },
          { num: 6, ar: 'لَكُمْ دِينُكُمْ وَلِىَ دِينِ' },
        ],
      },
      {
        type: 'tap-to-translate',
        ayah: 'لَا أَعْبُدُ مَا تَعْبُدُونَ',
        ayahRef: '109:2',
        translationWords: ['I do not', 'worship', 'what', 'you worship'],
      },
      {
        // FIXED: All options are taught words from L49
        type: 'fill-the-gap',
        ayah: ['لَا', '______', 'مَا', 'تَعْبُدُونَ'],
        gapIndex: 1,
        options: ['أَعْبُدُ', 'نَعْبُدُ', 'عَبْد'],
        answer: 'أَعْبُدُ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'قُلْ يَا أَيُّهَا ٱلْكَافِرُونَ',
        ayahRef: '109:1',
        translationWords: ['Say:', '"O', 'disbelievers"'],
      },
      {
        type: 'fill-the-gap',
        ayah: ['لَا', 'أَعْبُدُ', '______', 'تَعْبُدُونَ'],
        gapIndex: 2,
        options: ['مَا', 'لَا', 'إِنَّ'],
        answer: 'مَا',
      },
      {
        type: 'tap-to-translate',
        ayah: 'لَكُمْ دِينُكُمْ وَلِىَ دِينِ',
        ayahRef: '109:6',
        translationWords: ['For you', 'is your religion,', 'and for me', 'is mine'],
      },
      {
        // FIXED: Uses isAyahLevel — full phrases so untaught individual words are OK
        type: 'ayah-assembly',
        translation: 'Arrange the key ayahs of Surah Al-Kafirun',
        words: [
          'قُلْ يَا أَيُّهَا ٱلْكَافِرُونَ',
          'لَا أَعْبُدُ مَا تَعْبُدُونَ',
          'لَكُمْ دِينُكُمْ وَلِىَ دِينِ',
        ],
        isAyahLevel: true,
      },
      {
        type: 'cold-read',
        ayah: 'قُلْ يَا أَيُّهَا ٱلنَّاسُ إِن كُنتُمْ فِى شَكٍّ مِّن دِينِى',
        ayahRef: '10:104',
        words: [
          { ar: 'قُلْ', en: 'Say!' },
          { ar: 'يَا', en: null },
          { ar: 'أَيُّهَا', en: null },
          { ar: 'ٱلنَّاسُ', en: null },
          { ar: 'إِن', en: null },
          { ar: 'كُنتُمْ', en: null },
          { ar: 'فِى', en: null },
          { ar: 'شَكٍّ', en: null },
          { ar: 'مِّن', en: null },
          { ar: 'دِينِى', en: 'my religion' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 15 — The Names of Allah (5 lessons)
  //
  // Assumed known: Unit 1 + Unit 8 + Unit 11 + Unit 13 words
  //
  // Vocabulary taught in this unit:
  //   L54: ٱلْعَلِيمُ, ٱلْقَدِيرُ
  //   L55: ٱلسَّمِيعُ, ٱلْبَصِيرُ
  //   L56: ٱلْمَلِكُ, ٱلْقُدُّوسُ, ٱلسَّلَامُ, ٱلْعَزِيزُ
  //   L57: ٱلْجَبَّارُ, ٱلْمُتَكَبِّرُ, ٱلْخَالِقُ
  //   L58: (mastery — no new words)
  // ────────────────────────────────────────────────────────────

  L54: {
    id: 'L54', unitId: 'unit-15', number: 54,
    name: 'All-Knowing, All-Powerful', type: 'new-words', typeLabel: 'New Words',
    newWords: ['ٱلْعَلِيمُ', 'ٱلْقَدِيرُ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'وَهُوَ بِكُلِّ شَيْءٍ عَلِيمٌ',
        ayahRef: '2:29',
        words: ['وَهُوَ', 'بِكُلِّ', 'شَيْءٍ', 'عَلِيمٌ'],
        highlightIndex: 3,
        question: 'What does عَلِيمٌ mean?',
        options: ['All-Knowing', 'All-Powerful', 'All-Seeing', 'Most Merciful'],
        answer: 'All-Knowing',
        detail: 'عَلِيمٌ from root ع-ل-م (knowledge). Pattern فَعِيل intensifies the meaning.',
      },
      {
        type: 'word-spotlight',
        ayah: 'وَهُوَ ٱلْقَدِيرُ',
        ayahRef: '30:54',
        words: ['وَهُوَ', 'ٱلْقَدِيرُ'],
        highlightIndex: 1,
        question: 'What does ٱلْقَدِيرُ mean?',
        options: ['The All-Powerful', 'The All-Knowing', 'The Most High', 'The Creator'],
        answer: 'The All-Powerful',
        detail: 'ٱلْقَدِيرُ from root ق-د-ر (power/ability). Same فَعِيل pattern as عَلِيم.',
      },
      {
        type: 'root-discovery',
        root: 'ع-ل-م',
        rootMeaning: 'knowledge, to know',
        knownWords: [
          { ar: 'ٱلْعَلِيمُ', en: 'The All-Knowing' },
        ],
        newWord: { ar: 'عِلْم', en: 'knowledge' },
        question: 'ٱلْعَلِيمُ comes from root ع-ل-م. What might عِلْم mean?',
        options: ['Knowledge', 'Power', 'Mercy'],
        answer: 'Knowledge',
      },
      {
        // All 4 words taught: ٱلْعَلِيمُ + ٱلْقَدِيرُ (this lesson), ٱلرَّحِيمُ (Unit 1), ٱلصَّمَدُ (Unit 8)
        type: 'meaning-match',
        pairs: [
          ['ٱلْعَلِيمُ', 'All-Knowing'],
          ['ٱلْقَدِيرُ', 'All-Powerful'],
          ['ٱلرَّحِيمُ', 'Most Merciful'],
          ['ٱلصَّمَدُ', 'Eternal Refuge'],
        ],
      },
      {
        // Pattern Spotter as transform-predict
        type: 'transform-predict',
        given: { ar: 'عَلِيم ، قَدِير ، رَحِيم', en: 'All-Knowing, All-Powerful, Most Merciful' },
        instruction: 'These all follow the فَعِيل pattern — it intensifies quality',
        result: { ar: 'فَعِيل' },
        question: 'The فَعِيل pattern means:',
        options: ['Intensely/abundantly (quality)', 'Place of (location)', 'One who does (doer)'],
        answer: 'Intensely/abundantly (quality)',
      },
      {
        type: 'fill-the-gap',
        ayah: ['وَهُوَ', 'بِكُلِّ', 'شَيْءٍ', '______'],
        gapIndex: 3,
        options: ['عَلِيمٌ', 'قَدِيرٌ', 'رَحِيمٌ'],
        answer: 'عَلِيمٌ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'وَهُوَ ٱلْعَلِيمُ ٱلْقَدِيرُ',
        ayahRef: '30:54',
        translationWords: ['And He is', 'the All-Knowing,', 'the All-Powerful'],
      },
      {
        type: 'cold-read',
        ayah: 'سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا إِنَّكَ أَنتَ ٱلْعَلِيمُ ٱلْحَكِيمُ',
        ayahRef: '2:32',
        words: [
          { ar: 'سُبْحَانَكَ', en: null },
          { ar: 'لَا', en: 'no/not' },
          { ar: 'عِلْمَ', en: 'knowledge (root ع-ل-م!)' },
          { ar: 'لَنَا', en: null },
          { ar: 'إِلَّا', en: 'except' },
          { ar: 'مَا', en: 'what' },
          { ar: 'عَلَّمْتَنَا', en: null },
          { ar: 'إِنَّكَ', en: 'indeed You' },
          { ar: 'أَنتَ', en: null },
          { ar: 'ٱلْعَلِيمُ', en: 'the All-Knowing' },
          { ar: 'ٱلْحَكِيمُ', en: null },
        ],
      },
    ],
  },

  L55: {
    id: 'L55', unitId: 'unit-15', number: 55,
    name: 'All-Hearing, All-Seeing', type: 'new-words', typeLabel: 'New Words',
    newWords: ['ٱلسَّمِيعُ', 'ٱلْبَصِيرُ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'إِنَّ ٱللَّهَ سَمِيعٌ بَصِيرٌ',
        ayahRef: '22:75',
        words: ['إِنَّ', 'ٱللَّهَ', 'سَمِيعٌ', 'بَصِيرٌ'],
        highlightIndex: 2,
        question: 'What does سَمِيعٌ mean?',
        options: ['All-Hearing', 'All-Seeing', 'All-Knowing', 'All-Powerful'],
        answer: 'All-Hearing',
        detail: 'سَمِيعٌ from root س-م-ع (hearing). Another فَعِيل Name of Allah.',
      },
      {
        type: 'word-spotlight',
        ayah: 'إِنَّ ٱللَّهَ سَمِيعٌ بَصِيرٌ',
        ayahRef: '22:75',
        words: ['إِنَّ', 'ٱللَّهَ', 'سَمِيعٌ', 'بَصِيرٌ'],
        highlightIndex: 3,
        question: 'What does بَصِيرٌ mean?',
        options: ['All-Seeing', 'All-Hearing', 'All-Wise', 'Most Merciful'],
        answer: 'All-Seeing',
        detail: 'بَصِيرٌ from root ب-ص-ر (sight/vision). فَعِيل pattern again!',
      },
      {
        type: 'transform-predict',
        given: { ar: 'عَلِيم ، رَحِيم ، قَدِير ، سَمِيع ، بَصِير', en: 'Knowing, Merciful, Powerful, Hearing, Seeing' },
        instruction: 'All 5 follow فَعِيل. Spot the pattern!',
        result: { ar: 'فَعِيل' },
        question: 'How many of Allah\'s Names use فَعِيل?',
        options: ['Many — it\'s the most common Name pattern', 'Only these 5', 'Just 2-3'],
        answer: 'Many — it\'s the most common Name pattern',
      },
      {
        // All 4 words taught: ٱلسَّمِيعُ + ٱلْبَصِيرُ (this lesson), ٱلْعَلِيمُ + ٱلْقَدِيرُ (L54)
        type: 'meaning-match',
        pairs: [
          ['ٱلسَّمِيعُ', 'All-Hearing'],
          ['ٱلْبَصِيرُ', 'All-Seeing'],
          ['ٱلْعَلِيمُ', 'All-Knowing'],
          ['ٱلْقَدِيرُ', 'All-Powerful'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['إِنَّ', 'ٱللَّهَ', '______', 'بَصِيرٌ'],
        gapIndex: 2,
        options: ['سَمِيعٌ', 'عَلِيمٌ', 'قَدِيرٌ'],
        answer: 'سَمِيعٌ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'إِنَّ ٱللَّهَ سَمِيعٌ بَصِيرٌ',
        ayahRef: '22:75',
        translationWords: ['Indeed,', 'Allah is', 'All-Hearing,', 'All-Seeing'],
      },
      {
        type: 'cold-read',
        ayah: 'لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ',
        ayahRef: '42:11',
        words: [
          { ar: 'لَيْسَ', en: 'is not' },
          { ar: 'كَمِثْلِهِ', en: null },
          { ar: 'شَيْءٌ', en: null },
          { ar: 'وَهُوَ', en: 'and He' },
          { ar: 'ٱلسَّمِيعُ', en: 'the All-Hearing' },
          { ar: 'ٱلْبَصِيرُ', en: 'the All-Seeing' },
        ],
      },
    ],
  },

  L56: {
    id: 'L56', unitId: 'unit-15', number: 56,
    name: 'Holy, Peace, Almighty', type: 'new-words', typeLabel: 'New Words',
    // FIXED: Added ٱلْمَلِكُ and ٱلْعَزِيزُ — they appear in exercises
    newWords: ['ٱلْمَلِكُ', 'ٱلْقُدُّوسُ', 'ٱلسَّلَامُ', 'ٱلْعَزِيزُ'],
    exercises: [
      {
        // FIXED: Now formally introduces ٱلْمَلِكُ
        type: 'word-spotlight',
        ayah: 'ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَامُ',
        ayahRef: '59:23',
        words: ['ٱلْمَلِكُ', 'ٱلْقُدُّوسُ', 'ٱلسَّلَامُ'],
        highlightIndex: 0,
        question: 'What does ٱلْمَلِكُ mean?',
        options: ['The King/Sovereign', 'The Holy', 'The Peace', 'The Creator'],
        answer: 'The King/Sovereign',
        detail: 'ٱلْمَلِكُ — "The King, The Sovereign." From root م-ل-ك (sovereignty).',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَامُ',
        ayahRef: '59:23',
        words: ['ٱلْمَلِكُ', 'ٱلْقُدُّوسُ', 'ٱلسَّلَامُ'],
        highlightIndex: 1,
        question: 'What does ٱلْقُدُّوسُ mean?',
        options: ['The Holy', 'The Peace', 'The King', 'The Pure'],
        answer: 'The Holy',
        detail: 'ٱلْقُدُّوسُ — "The Holy, The Pure." From root ق-د-س (sanctity).',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَامُ',
        ayahRef: '59:23',
        words: ['ٱلْمَلِكُ', 'ٱلْقُدُّوسُ', 'ٱلسَّلَامُ'],
        highlightIndex: 2,
        question: 'What does ٱلسَّلَامُ mean?',
        options: ['The Source of Peace', 'The Holy', 'The Almighty', 'The Guardian'],
        answer: 'The Source of Peace',
        detail: 'ٱلسَّلَامُ — root س-ل-م. Same root as "Salaam" and "Islam"!',
      },
      {
        type: 'root-discovery',
        root: 'س-ل-م',
        rootMeaning: 'peace, submission, safety',
        knownWords: [
          { ar: 'ٱلسَّلَامُ', en: 'The Source of Peace' },
        ],
        newWord: { ar: 'إِسْلَام', en: 'Islam (submission to peace)' },
        question: 'ٱلسَّلَامُ shares root س-ل-م with إِسْلَام. What does إِسْلَام mean?',
        options: ['Submission (to God\'s peace)', 'Knowledge', 'Power'],
        answer: 'Submission (to God\'s peace)',
      },
      {
        // All 4 words taught in this lesson
        type: 'meaning-match',
        pairs: [
          ['ٱلْمَلِكُ', 'The King'],
          ['ٱلْقُدُّوسُ', 'The Holy'],
          ['ٱلسَّلَامُ', 'The Source of Peace'],
          ['ٱلْعَلِيمُ', 'The All-Knowing'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱلْمَلِكُ', 'ٱلْقُدُّوسُ', '______'],
        gapIndex: 2,
        options: ['ٱلسَّلَامُ', 'ٱلْعَلِيمُ', 'ٱلصَّمَدُ'],
        answer: 'ٱلسَّلَامُ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَامُ',
        ayahRef: '59:23',
        translationWords: ['The King,', 'the Holy,', 'the Source of Peace'],
      },
      {
        type: 'cold-read',
        ayah: 'هُوَ ٱللَّهُ ٱلَّذِي لَا إِلَـٰهَ إِلَّا هُوَ ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَامُ',
        ayahRef: '59:23',
        words: [
          { ar: 'هُوَ', en: 'He' },
          { ar: 'ٱللَّهُ', en: 'Allah' },
          { ar: 'ٱلَّذِي', en: 'the one who' },
          { ar: 'لَا', en: 'no/not' },
          { ar: 'إِلَـٰهَ', en: null },
          { ar: 'إِلَّا', en: 'except' },
          { ar: 'هُوَ', en: 'He' },
          { ar: 'ٱلْمَلِكُ', en: 'the King' },
          { ar: 'ٱلْقُدُّوسُ', en: 'the Holy' },
          { ar: 'ٱلسَّلَامُ', en: 'the Source of Peace' },
        ],
      },
    ],
  },

  L57: {
    id: 'L57', unitId: 'unit-15', number: 57,
    name: 'Compeller, Supreme, Creator', type: 'new-words', typeLabel: 'New Words',
    newWords: ['ٱلْجَبَّارُ', 'ٱلْمُتَكَبِّرُ', 'ٱلْخَالِقُ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'ٱلْعَزِيزُ ٱلْجَبَّارُ ٱلْمُتَكَبِّرُ',
        ayahRef: '59:23',
        words: ['ٱلْعَزِيزُ', 'ٱلْجَبَّارُ', 'ٱلْمُتَكَبِّرُ'],
        highlightIndex: 1,
        question: 'What does ٱلْجَبَّارُ mean?',
        options: ['The Compeller', 'The Creator', 'The Most High', 'The Judge'],
        answer: 'The Compeller',
        detail: 'ٱلْجَبَّارُ — "The Compeller, The Irresistible." Pattern فَعَّال = one who does intensely.',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱلْعَزِيزُ ٱلْجَبَّارُ ٱلْمُتَكَبِّرُ',
        ayahRef: '59:23',
        words: ['ٱلْعَزِيزُ', 'ٱلْجَبَّارُ', 'ٱلْمُتَكَبِّرُ'],
        highlightIndex: 2,
        question: 'What does ٱلْمُتَكَبِّرُ mean?',
        options: ['The Supreme/Greatest', 'The Compeller', 'The Holy', 'The Judge'],
        answer: 'The Supreme/Greatest',
        detail: 'ٱلْمُتَكَبِّرُ — root ك-ب-ر. Same root as أَكْبَرُ in "Allahu Akbar"!',
      },
      {
        type: 'root-discovery',
        root: 'ك-ب-ر',
        rootMeaning: 'greatness, grandeur',
        knownWords: [
          { ar: 'ٱلْمُتَكَبِّرُ', en: 'The Supreme' },
        ],
        newWord: { ar: 'أَكْبَرُ', en: 'Greatest (as in Allahu Akbar)' },
        question: 'ٱلْمُتَكَبِّرُ shares root ك-ب-ر with أَكْبَرُ. What does أَكْبَرُ mean?',
        options: ['Greatest', 'Most Merciful', 'Most Knowing'],
        answer: 'Greatest',
      },
      {
        // All 4 words taught: ٱلْجَبَّارُ + ٱلْمُتَكَبِّرُ + ٱلْخَالِقُ (this lesson), ٱلْعَزِيزُ (L56)
        type: 'meaning-match',
        pairs: [
          ['ٱلْجَبَّارُ', 'The Compeller'],
          ['ٱلْمُتَكَبِّرُ', 'The Supreme'],
          ['ٱلْخَالِقُ', 'The Creator'],
          ['ٱلْعَزِيزُ', 'The Almighty'],
        ],
      },
      {
        // Teach ٱلْخَالِقُ
        type: 'word-spotlight',
        ayah: 'هُوَ ٱللَّهُ ٱلْخَالِقُ ٱلْبَارِئُ ٱلْمُصَوِّرُ',
        ayahRef: '59:24',
        words: ['هُوَ', 'ٱللَّهُ', 'ٱلْخَالِقُ', 'ٱلْبَارِئُ', 'ٱلْمُصَوِّرُ'],
        highlightIndex: 2,
        question: 'What does ٱلْخَالِقُ mean?',
        options: ['The Creator', 'The Fashioner', 'The Originator', 'The Compeller'],
        answer: 'The Creator',
        detail: 'ٱلْخَالِقُ — root خ-ل-ق (to create). One of the most fundamental Names.',
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱلْعَزِيزُ', '______', 'ٱلْمُتَكَبِّرُ'],
        gapIndex: 1,
        options: ['ٱلْجَبَّارُ', 'ٱلسَّلَامُ', 'ٱلْقُدُّوسُ'],
        answer: 'ٱلْجَبَّارُ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱلْعَزِيزُ ٱلْجَبَّارُ ٱلْمُتَكَبِّرُ',
        ayahRef: '59:23',
        translationWords: ['The Almighty,', 'the Compeller,', 'the Supreme'],
      },
      {
        type: 'cold-read',
        ayah: 'هُوَ ٱللَّهُ ٱلْخَالِقُ ٱلْبَارِئُ ٱلْمُصَوِّرُ',
        ayahRef: '59:24',
        words: [
          { ar: 'هُوَ', en: 'He' },
          { ar: 'ٱللَّهُ', en: 'Allah' },
          { ar: 'ٱلْخَالِقُ', en: 'the Creator' },
          { ar: 'ٱلْبَارِئُ', en: null },
          { ar: 'ٱلْمُصَوِّرُ', en: null },
        ],
      },
    ],
  },

  L58: {
    id: 'L58', unitId: 'unit-15', number: 58,
    name: 'Names in 59:22-24', type: 'surah', typeLabel: 'Surah Story',
    newWords: [],
    exercises: [
      {
        // Listen shows full ayahs — untaught words OK in listen context
        type: 'listen',
        surahName: 'Al-Hashr (Names of Allah)',
        surahRef: '59:22-24',
        ayahs: [
          { num: 22, ar: 'هُوَ ٱللَّهُ ٱلَّذِي لَا إِلَـٰهَ إِلَّا هُوَ عَـٰلِمُ ٱلْغَيْبِ وَٱلشَّهَـٰدَةِ هُوَ ٱلرَّحْمَـٰنُ ٱلرَّحِيمُ' },
          { num: 23, ar: 'ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَامُ ... ٱلْعَزِيزُ ٱلْجَبَّارُ ٱلْمُتَكَبِّرُ' },
          { num: 24, ar: 'هُوَ ٱللَّهُ ٱلْخَالِقُ ٱلْبَارِئُ ٱلْمُصَوِّرُ' },
        ],
      },
      {
        type: 'tap-to-translate',
        ayah: 'هُوَ ٱلرَّحْمَـٰنُ ٱلرَّحِيمُ',
        ayahRef: '59:22',
        translationWords: ['He is', 'the Most Gracious,', 'the Most Merciful'],
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱلْمَلِكُ', 'ٱلْقُدُّوسُ', '______'],
        gapIndex: 2,
        options: ['ٱلسَّلَامُ', 'ٱلْعَلِيمُ', 'ٱلصَّمَدُ'],
        answer: 'ٱلسَّلَامُ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱلْعَزِيزُ ٱلْجَبَّارُ ٱلْمُتَكَبِّرُ',
        ayahRef: '59:23',
        translationWords: ['The Almighty,', 'the Compeller,', 'the Supreme'],
      },
      {
        // All 4 words from L56/L57
        type: 'meaning-match',
        pairs: [
          ['ٱلْقُدُّوسُ', 'The Holy'],
          ['ٱلسَّلَامُ', 'Source of Peace'],
          ['ٱلْجَبَّارُ', 'The Compeller'],
          ['ٱلْمُتَكَبِّرُ', 'The Supreme'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱلْعَزِيزُ', '______', 'ٱلْمُتَكَبِّرُ'],
        gapIndex: 1,
        options: ['ٱلْجَبَّارُ', 'ٱلْقُدُّوسُ', 'ٱلسَّلَامُ'],
        answer: 'ٱلْجَبَّارُ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'هُوَ ٱللَّهُ ٱلْخَالِقُ',
        ayahRef: '59:24',
        translationWords: ['He is Allah,', 'the Creator'],
      },
      {
        // Arrange the 3 ayah groups — all Names taught
        type: 'ayah-assembly',
        translation: 'Arrange the three Name clusters in order (59:22-24)',
        words: [
          'ٱلرَّحْمَـٰنُ ٱلرَّحِيمُ',
          'ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَامُ ... ٱلْعَزِيزُ ٱلْجَبَّارُ ٱلْمُتَكَبِّرُ',
          'ٱلْخَالِقُ ٱلْبَارِئُ ٱلْمُصَوِّرُ',
        ],
        isAyahLevel: true,
      },
      {
        type: 'cold-read',
        ayah: 'لَهُ ٱلْأَسْمَاءُ ٱلْحُسْنَىٰ يُسَبِّحُ لَهُ مَا فِى ٱلسَّمَـٰوَاتِ وَٱلْأَرْضِ',
        ayahRef: '59:24',
        words: [
          { ar: 'لَهُ', en: null },
          { ar: 'ٱلْأَسْمَاءُ', en: null },
          { ar: 'ٱلْحُسْنَىٰ', en: null },
          { ar: 'يُسَبِّحُ', en: null },
          { ar: 'لَهُ', en: null },
          { ar: 'مَا', en: 'what/whatever' },
          { ar: 'فِى', en: null },
          { ar: 'ٱلسَّمَـٰوَاتِ', en: null },
          { ar: 'وَٱلْأَرْضِ', en: null },
        ],
      },
      {
        type: 'cold-read',
        ayah: 'وَهُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ',
        ayahRef: '59:24',
        words: [
          { ar: 'وَهُوَ', en: 'and He' },
          { ar: 'ٱلْعَزِيزُ', en: 'the Almighty' },
          { ar: 'ٱلْحَكِيمُ', en: null },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 2 — All Praise (4 lessons)
  //
  // Assumes known from Unit 1: بِسْمِ, ٱللَّهِ, ٱلرَّحْمَـٰنِ, ٱلرَّحِيمِ, رَحْمَة, ٱلْ, ٱلْحَمْدُ, رَبِّ, ٱلْعَـٰلَمِينَ
  // Vocabulary taught in this unit:
  //   L4: ٱلْحَمْدُ, لِلَّهِ
  //   L5: رَبِّ, ٱلْعَـٰلَمِينَ
  //   L6: مَـٰلِكِ, يَوْمِ, ٱلدِّينِ
  //   L7: حَمِيد (root ح-م-د)
  // ────────────────────────────────────────────────────────────

  L4: {
    id: 'L4', unitId: 'unit-2', number: 4,
    name: 'Praise to Allah', type: 'new-words', typeLabel: 'New Words',
    newWords: ['ٱلْحَمْدُ', 'لِلَّهِ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        words: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
        highlightIndex: 0,
        question: 'What does the highlighted word mean?',
        options: ['All praise', 'The Lord', 'The worlds', 'The merciful'],
        answer: 'All praise',
        detail: 'ٱلْحَمْدُ — all praise, gratitude, and thanks. From root ح-م-د.',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        words: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
        highlightIndex: 1,
        question: 'What does this word mean?',
        options: ['for Allah', 'the Lord', 'the worlds', 'in the name of'],
        answer: 'for Allah',
        detail: 'لِلَّهِ = لِ (for/to) + ٱللَّهِ (Allah). The praise belongs TO Allah.',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['ٱلْحَمْدُ', 'All praise'],
          ['لِلَّهِ', 'for Allah'],
          ['بِسْمِ', 'In the name of'],
          ['ٱللَّهِ', 'Allah'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
        gapIndex: 0,
        options: ['ٱلْحَمْدُ', 'بِسْمِ', 'رَحْمَة'],
        answer: 'ٱلْحَمْدُ',
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱلْحَمْدُ', '______', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
        gapIndex: 1,
        options: ['لِلَّهِ', 'بِسْمِ', 'ٱلرَّحِيمِ'],
        answer: 'لِلَّهِ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        translationWords: ['All praise', 'is for Allah,', 'Lord of', 'the worlds'],
      },
      {
        type: 'ayah-assembly',
        translation: 'All praise is for Allah, Lord of the worlds',
        ayahRef: '1:2',
        words: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
      },
      {
        type: 'cold-read',
        ayah: 'ٱلْحَمْدُ لِلَّهِ ٱلَّذِى خَلَقَ ٱلسَّمَـٰوَاتِ وَٱلْأَرْضَ',
        ayahRef: '6:1',
        words: [
          { ar: 'ٱلْحَمْدُ', en: 'All praise' },
          { ar: 'لِلَّهِ', en: 'is for Allah' },
          { ar: 'ٱلَّذِى', en: null },
          { ar: 'خَلَقَ', en: null },
          { ar: 'ٱلسَّمَـٰوَاتِ', en: null },
          { ar: 'وَٱلْأَرْضَ', en: null },
        ],
      },
    ],
  },

  L5: {
    id: 'L5', unitId: 'unit-2', number: 5,
    name: 'Lord of the Worlds', type: 'new-words', typeLabel: 'New Words',
    newWords: ['رَبِّ', 'ٱلْعَـٰلَمِينَ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        words: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
        highlightIndex: 2,
        question: 'What does the highlighted word mean?',
        options: ['Lord of', 'King of', 'Name of', 'Praise of'],
        answer: 'Lord of',
        detail: 'رَبِّ — Lord, Master, Sustainer. From root ر-ب-ب. Appears 975 times in the Quran.',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        words: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
        highlightIndex: 3,
        question: 'What does this word mean?',
        options: ['The worlds', 'The heavens', 'The people', 'The angels'],
        answer: 'The worlds',
        detail: 'ٱلْعَـٰلَمِينَ — all the worlds, all of creation. From root ع-ل-م (knowledge).',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['رَبِّ', 'Lord of'],
          ['ٱلْعَـٰلَمِينَ', 'The worlds'],
          ['ٱلرَّحْمَـٰنِ', 'The Most Gracious'],
          ['ٱلرَّحِيمِ', 'The Most Merciful'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱلْحَمْدُ', 'لِلَّهِ', '______', 'ٱلْعَـٰلَمِينَ'],
        gapIndex: 2,
        options: ['رَبِّ', 'مَـٰلِكِ', 'بِسْمِ'],
        answer: 'رَبِّ',
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', '______'],
        gapIndex: 3,
        options: ['ٱلْعَـٰلَمِينَ', 'ٱلرَّحِيمِ', 'ٱلرَّحْمَـٰنِ'],
        answer: 'ٱلْعَـٰلَمِينَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        translationWords: ['All praise', 'is for Allah,', 'Lord of', 'the worlds'],
      },
      {
        type: 'ayah-assembly',
        translation: 'All praise is for Allah, Lord of the worlds',
        words: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
      },
      {
        type: 'cold-read',
        ayah: 'رَبُّ ٱلسَّمَـٰوَاتِ وَٱلْأَرْضِ وَمَا بَيْنَهُمَا',
        ayahRef: '19:65',
        words: [
          { ar: 'رَبُّ', en: 'Lord of' },
          { ar: 'ٱلسَّمَـٰوَاتِ', en: null },
          { ar: 'وَٱلْأَرْضِ', en: null },
          { ar: 'وَمَا', en: null },
          { ar: 'بَيْنَهُمَا', en: null },
        ],
      },
    ],
  },

  L6: {
    id: 'L6', unitId: 'unit-2', number: 6,
    name: 'Master of the Day', type: 'new-words', typeLabel: 'New Words',
    newWords: ['مَـٰلِكِ', 'يَوْمِ', 'ٱلدِّينِ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ',
        ayahRef: '1:4',
        words: ['مَـٰلِكِ', 'يَوْمِ', 'ٱلدِّينِ'],
        highlightIndex: 0,
        question: 'What does the highlighted word mean?',
        options: ['Master/Owner of', 'Lord of', 'Creator of', 'King of'],
        answer: 'Master/Owner of',
        detail: 'مَـٰلِكِ — Master, Owner, Sovereign. From root م-ل-ك (dominion).',
      },
      {
        type: 'word-spotlight',
        ayah: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ',
        ayahRef: '1:4',
        words: ['مَـٰلِكِ', 'يَوْمِ', 'ٱلدِّينِ'],
        highlightIndex: 1,
        question: 'What does this word mean?',
        options: ['Day of', 'Night of', 'Time of', 'Path of'],
        answer: 'Day of',
        detail: 'يَوْمِ — Day. Appears 405 times in the Quran.',
      },
      {
        type: 'word-spotlight',
        ayah: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ',
        ayahRef: '1:4',
        words: ['مَـٰلِكِ', 'يَوْمِ', 'ٱلدِّينِ'],
        highlightIndex: 2,
        question: 'What does ٱلدِّينِ mean?',
        options: ['The Judgement/Religion', 'The World', 'The Mercy', 'The Creation'],
        answer: 'The Judgement/Religion',
        detail: 'ٱلدِّينِ — Judgement, recompense, or religion. From root د-ي-ن.',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['مَـٰلِكِ', 'Master/Owner of'],
          ['يَوْمِ', 'Day of'],
          ['ٱلدِّينِ', 'The Judgement'],
          ['رَبِّ', 'Lord of'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'يَوْمِ', 'ٱلدِّينِ'],
        gapIndex: 0,
        options: ['مَـٰلِكِ', 'رَبِّ', 'بِسْمِ'],
        answer: 'مَـٰلِكِ',
      },
      {
        type: 'fill-the-gap',
        ayah: ['مَـٰلِكِ', '______', 'ٱلدِّينِ'],
        gapIndex: 1,
        options: ['يَوْمِ', 'رَبِّ', 'ٱللَّهِ'],
        answer: 'يَوْمِ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ',
        ayahRef: '1:4',
        translationWords: ['Master of', 'the Day of', 'Judgement'],
      },
      {
        type: 'ayah-assembly',
        translation: 'Master of the Day of Judgement',
        words: ['مَـٰلِكِ', 'يَوْمِ', 'ٱلدِّينِ'],
      },
      {
        type: 'cold-read',
        ayah: 'يَوْمَ يَقُومُ ٱلنَّاسُ لِرَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '83:6',
        words: [
          { ar: 'يَوْمَ', en: 'Day' },
          { ar: 'يَقُومُ', en: null },
          { ar: 'ٱلنَّاسُ', en: null },
          { ar: 'لِرَبِّ', en: 'for the Lord of' },
          { ar: 'ٱلْعَـٰلَمِينَ', en: 'the worlds' },
        ],
      },
    ],
  },

  L7: {
    id: 'L7', unitId: 'unit-2', number: 7,
    name: 'Root of Praise', type: 'root', typeLabel: 'Root Deep Dive',
    newWords: ['حَمِيد'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        words: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
        highlightIndex: 0,
        question: 'You know this word — what does it mean?',
        options: ['All praise', 'The Lord', 'The worlds', 'The merciful'],
        answer: 'All praise',
        detail: 'ٱلْحَمْدُ — from root ح-م-د (praise). Let\'s explore this root!',
      },
      {
        type: 'root-discovery',
        root: 'ح-م-د',
        rootMeaning: 'praise, commendation',
        knownWords: [
          { ar: 'ٱلْحَمْدُ', en: 'All praise' },
        ],
        newWord: { ar: 'حَمِيد', en: 'Praiseworthy' },
        question: 'From root ح-م-د (praise), what might حَمِيد mean?',
        options: ['Praiseworthy', 'Powerful', 'Merciful'],
        answer: 'Praiseworthy',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['ٱلْحَمْدُ', 'All praise'],
          ['حَمِيد', 'Praiseworthy'],
          ['ٱلرَّحِيمِ', 'The Most Merciful'],
          ['رَبِّ', 'Lord of'],
        ],
      },
      {
        type: 'transform-predict',
        given: { ar: 'ٱلْحَمْدُ', en: 'the praise (noun)' },
        instruction: 'Same root ح-م-د, but pattern فَعِيل (adjective).',
        result: { ar: 'حَمِيد' },
        question: 'What does حَمِيد mean?',
        options: ['Praiseworthy (the one praised)', 'The praised one', 'Praise-giver'],
        answer: 'Praiseworthy (the one praised)',
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
        gapIndex: 0,
        options: ['ٱلْحَمْدُ', 'بِسْمِ', 'مَـٰلِكِ'],
        answer: 'ٱلْحَمْدُ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        translationWords: ['All praise', 'is for Allah,', 'Lord of', 'the worlds'],
      },
      {
        type: 'ayah-assembly',
        translation: 'All praise is for Allah, Lord of the worlds',
        words: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
      },
      {
        type: 'cold-read',
        ayah: 'إِنَّ ٱللَّهَ غَنِىٌّ حَمِيدٌ',
        ayahRef: '31:26',
        words: [
          { ar: 'إِنَّ', en: null },
          { ar: 'ٱللَّهَ', en: 'Allah' },
          { ar: 'غَنِىٌّ', en: null },
          { ar: 'حَمِيدٌ', en: 'Praiseworthy' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 3 — You Alone (3 lessons)
  //
  // Vocabulary taught in this unit:
  //   L8: إِيَّاكَ, نَعْبُدُ, نَسْتَعِينُ
  //   L9: ٱهْدِنَا, ٱلصِّرَٰطَ, ٱلْمُسْتَقِيمَ
  //   L10: أَنْعَمْتَ, عَلَيْهِمْ
  // ────────────────────────────────────────────────────────────

  L8: {
    id: 'L8', unitId: 'unit-3', number: 8,
    name: 'You Alone We Worship', type: 'grammar', typeLabel: 'Grammar',
    newWords: ['إِيَّاكَ', 'نَعْبُدُ', 'نَسْتَعِينُ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        ayahRef: '1:5',
        words: ['إِيَّاكَ', 'نَعْبُدُ', 'وَإِيَّاكَ', 'نَسْتَعِينُ'],
        highlightIndex: 0,
        question: 'What does the highlighted word mean?',
        options: ['You alone', 'We worship', 'We seek help', 'Our Lord'],
        answer: 'You alone',
        detail: 'إِيَّاكَ — "You alone." Placed BEFORE the verb for emphasis: it\'s YOU we worship, no one else.',
      },
      {
        type: 'word-spotlight',
        ayah: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        ayahRef: '1:5',
        words: ['إِيَّاكَ', 'نَعْبُدُ', 'وَإِيَّاكَ', 'نَسْتَعِينُ'],
        highlightIndex: 1,
        question: 'What does this word mean?',
        options: ['we worship', 'we seek help', 'You alone', 'we praise'],
        answer: 'we worship',
        detail: 'نَعْبُدُ — "we worship." The نَـ prefix means "we." Root: ع-ب-د (worship/servitude).',
      },
      {
        type: 'word-spotlight',
        ayah: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        ayahRef: '1:5',
        words: ['إِيَّاكَ', 'نَعْبُدُ', 'وَإِيَّاكَ', 'نَسْتَعِينُ'],
        highlightIndex: 3,
        question: 'What does this word mean?',
        options: ['we seek help', 'we worship', 'we praise', 'we believe'],
        answer: 'we seek help',
        detail: 'نَسْتَعِينُ — "we seek help." From root ع-و-ن (help/assistance).',
      },
      {
        type: 'meaning-match',
        pairs: [
          { ar: 'إِيَّاكَ', en: 'You alone' },
          { ar: 'نَعْبُدُ', en: 'we worship' },
          { ar: 'نَسْتَعِينُ', en: 'we seek help' },
          { ar: 'ٱلْحَمْدُ', en: 'All praise' },
        ],
      },
      {
        type: 'transform-predict',
        given: { ar: 'نَعْبُدُ', en: 'we worship' },
        instruction: 'Add إِيَّاكَ before it for emphasis',
        result: { ar: 'إِيَّاكَ نَعْبُدُ' },
        question: 'What does إِيَّاكَ نَعْبُدُ mean?',
        options: ['You alone we worship', 'We all worship', 'He worships'],
        answer: 'You alone we worship',
      },
      {
        type: 'fill-the-gap',
        ayah: ['إِيَّاكَ', '______', 'وَإِيَّاكَ', 'نَسْتَعِينُ'],
        gapIndex: 1,
        options: ['نَعْبُدُ', 'ٱلْحَمْدُ', 'رَبِّ'],
        answer: 'نَعْبُدُ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        ayahRef: '1:5',
        translationWords: ['You alone', 'we worship,', 'and You alone', 'we seek help from'],
      },
      {
        type: 'ayah-assembly',
        translation: 'You alone we worship, and You alone we seek help from',
        ayahRef: '1:5',
        words: ['إِيَّاكَ', 'نَعْبُدُ', 'وَإِيَّاكَ', 'نَسْتَعِينُ'],
      },
      {
        type: 'cold-read',
        ayah: 'وَٱعْبُدُوا ٱللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْـًٔا',
        ayahRef: '4:36',
        words: [
          { ar: 'وَٱعْبُدُوا', en: 'and worship' },
          { ar: 'ٱللَّهَ', en: 'Allah' },
          { ar: 'وَلَا', en: null },
          { ar: 'تُشْرِكُوا', en: null },
          { ar: 'بِهِ', en: null },
          { ar: 'شَيْـًٔا', en: null },
        ],
      },
    ],
  },

  L9: {
    id: 'L9', unitId: 'unit-3', number: 9,
    name: 'Guide Us', type: 'new-words', typeLabel: 'New Words',
    newWords: ['ٱهْدِنَا', 'ٱلصِّرَٰطَ', 'ٱلْمُسْتَقِيمَ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        ayahRef: '1:6',
        words: ['ٱهْدِنَا', 'ٱلصِّرَٰطَ', 'ٱلْمُسْتَقِيمَ'],
        highlightIndex: 0,
        question: 'What does the highlighted word mean?',
        options: ['Guide us', 'Help us', 'Show us', 'Teach us'],
        answer: 'Guide us',
        detail: 'ٱهْدِنَا — Guide us! From root ه-د-ي (guidance). The ـنَا means "us".',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        ayahRef: '1:6',
        words: ['ٱهْدِنَا', 'ٱلصِّرَٰطَ', 'ٱلْمُسْتَقِيمَ'],
        highlightIndex: 1,
        question: 'What does ٱلصِّرَٰطَ mean?',
        options: ['The path', 'The day', 'The world', 'The mercy'],
        answer: 'The path',
        detail: 'ٱلصِّرَٰطَ — the path, the way. A key Quranic word for the right way.',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        ayahRef: '1:6',
        words: ['ٱهْدِنَا', 'ٱلصِّرَٰطَ', 'ٱلْمُسْتَقِيمَ'],
        highlightIndex: 2,
        question: 'What does ٱلْمُسْتَقِيمَ mean?',
        options: ['The straight', 'The long', 'The clear', 'The blessed'],
        answer: 'The straight',
        detail: 'ٱلْمُسْتَقِيمَ — straight, upright. From root ق-و-م (to stand firm).',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['ٱهْدِنَا', 'Guide us'],
          ['ٱلصِّرَٰطَ', 'The path'],
          ['ٱلْمُسْتَقِيمَ', 'The straight'],
          ['نَعْبُدُ', 'We worship'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'ٱلصِّرَٰطَ', 'ٱلْمُسْتَقِيمَ'],
        gapIndex: 0,
        options: ['ٱهْدِنَا', 'نَعْبُدُ', 'ٱلْحَمْدُ'],
        answer: 'ٱهْدِنَا',
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱهْدِنَا', 'ٱلصِّرَٰطَ', '______'],
        gapIndex: 2,
        options: ['ٱلْمُسْتَقِيمَ', 'ٱلْعَـٰلَمِينَ', 'ٱلرَّحِيمِ'],
        answer: 'ٱلْمُسْتَقِيمَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        ayahRef: '1:6',
        translationWords: ['Guide us', 'to the path,', 'the straight'],
      },
      {
        type: 'ayah-assembly',
        translation: 'Guide us to the straight path',
        words: ['ٱهْدِنَا', 'ٱلصِّرَٰطَ', 'ٱلْمُسْتَقِيمَ'],
      },
      {
        type: 'cold-read',
        ayah: 'وَأَنَّ هَـٰذَا صِرَٰطِى مُسْتَقِيمًا فَٱتَّبِعُوهُ',
        ayahRef: '6:153',
        words: [
          { ar: 'وَأَنَّ', en: null },
          { ar: 'هَـٰذَا', en: null },
          { ar: 'صِرَٰطِى', en: 'my path' },
          { ar: 'مُسْتَقِيمًا', en: 'straight' },
          { ar: 'فَٱتَّبِعُوهُ', en: null },
        ],
      },
    ],
  },

  L10: {
    id: 'L10', unitId: 'unit-3', number: 10,
    name: 'Those You Blessed', type: 'new-words', typeLabel: 'New Words',
    newWords: ['أَنْعَمْتَ', 'عَلَيْهِمْ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ',
        ayahRef: '1:7',
        words: ['صِرَٰطَ', 'ٱلَّذِينَ', 'أَنْعَمْتَ', 'عَلَيْهِمْ'],
        highlightIndex: 2,
        question: 'What does the highlighted word mean?',
        options: ['You have blessed', 'You have guided', 'You have created', 'You have known'],
        answer: 'You have blessed',
        detail: 'أَنْعَمْتَ — You have favored/blessed. From root ن-ع-م (blessing, favor).',
      },
      {
        type: 'word-spotlight',
        ayah: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ',
        ayahRef: '1:7',
        words: ['صِرَٰطَ', 'ٱلَّذِينَ', 'أَنْعَمْتَ', 'عَلَيْهِمْ'],
        highlightIndex: 3,
        question: 'What does عَلَيْهِمْ mean?',
        options: ['Upon them', 'For them', 'In them', 'From them'],
        answer: 'Upon them',
        detail: 'عَلَيْهِمْ — upon them. عَلَى (upon) + هِمْ (them).',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['أَنْعَمْتَ', 'You have blessed'],
          ['عَلَيْهِمْ', 'Upon them'],
          ['ٱهْدِنَا', 'Guide us'],
          ['ٱلصِّرَٰطَ', 'The path'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['صِرَٰطَ', 'ٱلَّذِينَ', '______', 'عَلَيْهِمْ'],
        gapIndex: 2,
        options: ['أَنْعَمْتَ', 'نَعْبُدُ', 'ٱهْدِنَا'],
        answer: 'أَنْعَمْتَ',
      },
      {
        type: 'fill-the-gap',
        ayah: ['صِرَٰطَ', 'ٱلَّذِينَ', 'أَنْعَمْتَ', '______'],
        gapIndex: 3,
        options: ['عَلَيْهِمْ', 'لِلَّهِ', 'بِسْمِ'],
        answer: 'عَلَيْهِمْ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ',
        ayahRef: '1:7',
        translationWords: ['The path of', 'those', 'You have blessed', 'upon them'],
      },
      {
        type: 'ayah-assembly',
        translation: 'The path of those You have blessed',
        words: ['صِرَٰطَ', 'ٱلَّذِينَ', 'أَنْعَمْتَ', 'عَلَيْهِمْ'],
      },
      {
        type: 'cold-read',
        ayah: 'أُولَـٰئِكَ ٱلَّذِينَ أَنْعَمَ ٱللَّهُ عَلَيْهِم',
        ayahRef: '19:58',
        words: [
          { ar: 'أُولَـٰئِكَ', en: null },
          { ar: 'ٱلَّذِينَ', en: null },
          { ar: 'أَنْعَمَ', en: 'blessed' },
          { ar: 'ٱللَّهُ', en: 'Allah' },
          { ar: 'عَلَيْهِم', en: 'upon them' },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 4 — The Complete Fatiha (3 lessons)
  //
  // Vocabulary taught in this unit:
  //   L11: غَيْرِ, ٱلْمَغْضُوبِ, وَلَا, ٱلضَّآلِّينَ
  //   L12: صِرَٰطَ, ٱلَّذِينَ
  //   L13: (surah mastery — no new words)
  // ────────────────────────────────────────────────────────────

  L11: {
    id: 'L11', unitId: 'unit-4', number: 11,
    name: 'Not Those Who Strayed', type: 'new-words', typeLabel: 'New Words',
    newWords: ['غَيْرِ', 'ٱلْمَغْضُوبِ', 'وَلَا', 'ٱلضَّآلِّينَ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ',
        ayahRef: '1:7',
        words: ['صِرَٰطَ', 'ٱلَّذِينَ', 'أَنْعَمْتَ', 'عَلَيْهِمْ', 'غَيْرِ', 'ٱلْمَغْضُوبِ', 'عَلَيْهِمْ', 'وَلَا', 'ٱلضَّآلِّينَ'],
        highlightIndex: 4,
        question: 'What does the highlighted word mean?',
        options: ['not / other than', 'the path', 'those who', 'upon them'],
        answer: 'not / other than',
        detail: 'غَيْرِ — "not" or "other than." It excludes what follows.',
      },
      {
        type: 'word-spotlight',
        ayah: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ',
        ayahRef: '1:7',
        words: ['صِرَٰطَ', 'ٱلَّذِينَ', 'أَنْعَمْتَ', 'عَلَيْهِمْ', 'غَيْرِ', 'ٱلْمَغْضُوبِ', 'عَلَيْهِمْ', 'وَلَا', 'ٱلضَّآلِّينَ'],
        highlightIndex: 5,
        question: 'What does this word mean?',
        options: ['those who earned anger', 'the blessed ones', 'the guided ones', 'the merciful'],
        answer: 'those who earned anger',
        detail: 'ٱلْمَغْضُوبِ — "those who earned anger/wrath." From root غ-ض-ب (anger).',
      },
      {
        type: 'word-spotlight',
        ayah: 'غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ',
        ayahRef: '1:7',
        words: ['غَيْرِ', 'ٱلْمَغْضُوبِ', 'عَلَيْهِمْ', 'وَلَا', 'ٱلضَّآلِّينَ'],
        highlightIndex: 3,
        question: 'What does وَلَا mean?',
        options: ['and not', 'and they', 'upon them', 'other than'],
        answer: 'and not',
        detail: 'وَلَا = وَ (and) + لَا (not). "...and not the ones who went astray."',
      },
      {
        type: 'word-spotlight',
        ayah: 'غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ',
        ayahRef: '1:7',
        words: ['غَيْرِ', 'ٱلْمَغْضُوبِ', 'عَلَيْهِمْ', 'وَلَا', 'ٱلضَّآلِّينَ'],
        highlightIndex: 4,
        question: 'What does this word mean?',
        options: ['those who went astray', 'those who earned anger', 'the guided ones', 'the worlds'],
        answer: 'those who went astray',
        detail: 'ٱلضَّآلِّينَ — "those who went astray." From root ض-ل-ل (to go astray).',
      },
      {
        type: 'meaning-match',
        pairs: [
          { ar: 'غَيْرِ', en: 'not / other than' },
          { ar: 'ٱلْمَغْضُوبِ', en: 'those who earned anger' },
          { ar: 'وَلَا', en: 'and not' },
          { ar: 'ٱلضَّآلِّينَ', en: 'those who went astray' },
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'ٱلْمَغْضُوبِ', 'عَلَيْهِمْ', 'وَلَا', 'ٱلضَّآلِّينَ'],
        gapIndex: 0,
        options: ['غَيْرِ', 'صِرَٰطَ', 'رَبِّ'],
        answer: 'غَيْرِ',
      },
      {
        type: 'fill-the-gap',
        ayah: ['غَيْرِ', 'ٱلْمَغْضُوبِ', 'عَلَيْهِمْ', '______', 'ٱلضَّآلِّينَ'],
        gapIndex: 3,
        options: ['وَلَا', 'ٱللَّهِ', 'بِسْمِ'],
        answer: 'وَلَا',
      },
      {
        type: 'tap-to-translate',
        ayah: 'غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ',
        ayahRef: '1:7',
        translationWords: ['not', 'those who earned anger,', 'and not', 'those who went astray'],
      },
      {
        type: 'cold-read',
        ayah: 'وَمَن يُشَاقِقِ ٱلرَّسُولَ مِن بَعْدِ مَا تَبَيَّنَ لَهُ ٱلْهُدَىٰ وَيَتَّبِعْ غَيْرَ سَبِيلِ ٱلْمُؤْمِنِينَ',
        ayahRef: '4:115',
        words: [
          { ar: 'وَمَن', en: null },
          { ar: 'يُشَاقِقِ', en: null },
          { ar: 'ٱلرَّسُولَ', en: null },
          { ar: 'مِن', en: null },
          { ar: 'بَعْدِ', en: null },
          { ar: 'مَا', en: null },
          { ar: 'تَبَيَّنَ', en: null },
          { ar: 'لَهُ', en: null },
          { ar: 'ٱلْهُدَىٰ', en: null },
          { ar: 'وَيَتَّبِعْ', en: null },
          { ar: 'غَيْرَ', en: 'other than' },
          { ar: 'سَبِيلِ', en: null },
          { ar: 'ٱلْمُؤْمِنِينَ', en: null },
        ],
      },
    ],
  },

  L12: {
    id: 'L12', unitId: 'unit-4', number: 12,
    name: 'The Connecting Words', type: 'new-words', typeLabel: 'New Words',
    newWords: ['صِرَٰطَ', 'ٱلَّذِينَ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ',
        ayahRef: '1:7',
        words: ['صِرَٰطَ', 'ٱلَّذِينَ', 'أَنْعَمْتَ', 'عَلَيْهِمْ'],
        highlightIndex: 0,
        question: 'What does the highlighted word mean?',
        options: ['Path of', 'Lord of', 'Day of', 'Name of'],
        answer: 'Path of',
        detail: 'صِرَٰطَ — path, way. Without ٱلْ it\'s in construct state: "path OF..."',
      },
      {
        type: 'word-spotlight',
        ayah: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ',
        ayahRef: '1:7',
        words: ['صِرَٰطَ', 'ٱلَّذِينَ', 'أَنْعَمْتَ', 'عَلَيْهِمْ'],
        highlightIndex: 1,
        question: 'What does ٱلَّذِينَ mean?',
        options: ['Those who', 'All of', 'Lord of', 'Master of'],
        answer: 'Those who',
        detail: 'ٱلَّذِينَ — "those who". A connector word linking groups to descriptions.',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['صِرَٰطَ', 'Path of'],
          ['ٱلَّذِينَ', 'Those who'],
          ['أَنْعَمْتَ', 'You have blessed'],
          ['غَيْرِ', 'Not / other than'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'ٱلَّذِينَ', 'أَنْعَمْتَ', 'عَلَيْهِمْ'],
        gapIndex: 0,
        options: ['صِرَٰطَ', 'رَبِّ', 'يَوْمِ'],
        answer: 'صِرَٰطَ',
      },
      {
        type: 'fill-the-gap',
        ayah: ['صِرَٰطَ', '______', 'أَنْعَمْتَ', 'عَلَيْهِمْ'],
        gapIndex: 1,
        options: ['ٱلَّذِينَ', 'ٱلْحَمْدُ', 'غَيْرِ'],
        answer: 'ٱلَّذِينَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ',
        ayahRef: '1:7',
        translationWords: ['The path of', 'those who', 'You have blessed'],
      },
      {
        type: 'ayah-assembly',
        translation: 'The path of those You have blessed',
        words: ['صِرَٰطَ', 'ٱلَّذِينَ', 'أَنْعَمْتَ', 'عَلَيْهِمْ'],
      },
      {
        type: 'cold-read',
        ayah: 'وَٱلَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ',
        ayahRef: '2:4',
        words: [
          { ar: 'وَٱلَّذِينَ', en: 'and those who' },
          { ar: 'يُؤْمِنُونَ', en: null },
          { ar: 'بِمَا', en: null },
          { ar: 'أُنزِلَ', en: null },
          { ar: 'إِلَيْكَ', en: null },
        ],
      },
    ],
  },

  L13: {
    id: 'L13', unitId: 'unit-4', number: 13,
    name: 'Al-Fatiha Mastery', type: 'surah', typeLabel: 'Surah Story',
    newWords: [],
    exercises: [
      {
        type: 'listen',
        surahName: 'Al-Fatiha',
        surahRef: 'Surah 1 — The Opening',
        ayahs: [
          { ar: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ', num: 1 },
          { ar: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ', num: 2 },
          { ar: 'ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ', num: 3 },
          { ar: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ', num: 4 },
          { ar: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', num: 5 },
          { ar: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ', num: 6 },
          { ar: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ', num: 7 },
        ],
      },
      {
        type: 'tap-to-translate',
        ayah: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        ayahRef: '1:1',
        translationWords: ['In the name of', 'Allah,', 'the Most Gracious,', 'the Most Merciful'],
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        translationWords: ['All praise', 'is for Allah,', 'Lord of', 'the worlds'],
      },
      {
        type: 'fill-the-gap',
        ayah: ['مَـٰلِكِ', '______', 'ٱلدِّينِ'],
        gapIndex: 1,
        options: ['يَوْمِ', 'رَبِّ', 'ٱللَّهِ'],
        answer: 'يَوْمِ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        ayahRef: '1:5',
        translationWords: ['You alone', 'we worship,', 'and You alone', 'we seek help from'],
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱهْدِنَا', '______', 'ٱلْمُسْتَقِيمَ'],
        gapIndex: 1,
        options: ['ٱلصِّرَٰطَ', 'ٱلْحَمْدُ', 'يَوْمِ'],
        answer: 'ٱلصِّرَٰطَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        ayahRef: '1:6',
        translationWords: ['Guide us', 'to the path,', 'the straight'],
      },
      {
        type: 'fill-the-gap',
        ayah: ['صِرَٰطَ', 'ٱلَّذِينَ', '______', 'عَلَيْهِمْ'],
        gapIndex: 2,
        options: ['أَنْعَمْتَ', 'نَعْبُدُ', 'ٱلْحَمْدُ'],
        answer: 'أَنْعَمْتَ',
      },
      {
        type: 'ayah-assembly',
        translation: 'In the name of Allah, the Most Gracious, the Most Merciful. All praise is for Allah, Lord of the worlds.',
        words: ['بِسْمِ', 'ٱللَّهِ', 'ٱلرَّحْمَـٰنِ', 'ٱلرَّحِيمِ', 'ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
      },
      {
        type: 'cold-read',
        ayah: 'قُلِ ٱللَّهُمَّ مَـٰلِكَ ٱلْمُلْكِ',
        ayahRef: '3:26',
        words: [
          { ar: 'قُلِ', en: null },
          { ar: 'ٱللَّهُمَّ', en: 'O Allah' },
          { ar: 'مَـٰلِكَ', en: 'Master of' },
          { ar: 'ٱلْمُلْكِ', en: null },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 5 — Connectors (4 lessons)
  //
  // Vocabulary taught in this unit:
  //   L14: فِي, عَلَىٰ, إِلَىٰ
  //   L15: مِن, عَن
  //   L16: بِ, لِ
  //   L17: وَ (review remix of all particles)
  // ────────────────────────────────────────────────────────────

  L14: {
    id: 'L14', unitId: 'unit-5', number: 14,
    name: 'In, On, Towards', type: 'grammar', typeLabel: 'Grammar',
    newWords: ['فِي', 'عَلَىٰ', 'إِلَىٰ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'ذَٰلِكَ ٱلْكِتَابُ لَا رَيْبَ فِيهِ',
        ayahRef: '2:2',
        words: ['ذَٰلِكَ', 'ٱلْكِتَابُ', 'لَا', 'رَيْبَ', 'فِيهِ'],
        highlightIndex: 4,
        question: 'فِيهِ contains the particle فِي. What does فِي mean?',
        options: ['in / within', 'on / upon', 'from', 'towards'],
        answer: 'in / within',
        detail: 'فِي — "in, within." One of the most common words in the Quran (~1,700 times).',
      },
      {
        type: 'word-spotlight',
        ayah: 'أَنْعَمْتَ عَلَيْهِمْ',
        ayahRef: '1:7',
        words: ['أَنْعَمْتَ', 'عَلَيْهِمْ'],
        highlightIndex: 1,
        question: 'عَلَيْهِمْ contains عَلَىٰ. What does عَلَىٰ mean?',
        options: ['on / upon', 'in / within', 'from', 'towards'],
        answer: 'on / upon',
        detail: 'عَلَىٰ — "on, upon." You already know it from عَلَيْهِمْ (upon them) in Al-Fatiha!',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        ayahRef: '1:6',
        words: ['ٱهْدِنَا', 'ٱلصِّرَٰطَ', 'ٱلْمُسْتَقِيمَ'],
        highlightIndex: 0,
        question: 'ٱهْدِنَا means "guide us." The direction إِلَىٰ means…?',
        options: ['towards / to', 'in / within', 'on / upon', 'from'],
        answer: 'towards / to',
        detail: 'إِلَىٰ — "towards, to." Indicates direction or destination.',
      },
      {
        type: 'meaning-match',
        pairs: [
          { ar: 'فِي', en: 'in / within' },
          { ar: 'عَلَىٰ', en: 'on / upon' },
          { ar: 'إِلَىٰ', en: 'towards / to' },
          { ar: 'بِسْمِ', en: 'In the name of' },
        ],
      },
      {
        type: 'transform-predict',
        given: { ar: 'فِي', en: 'in' },
        instruction: 'Attach هِ (him) to فِي',
        result: { ar: 'فِيهِ' },
        question: 'What does فِيهِ mean?',
        options: ['in it / in him', 'on it', 'to it'],
        answer: 'in it / in him',
      },
      {
        type: 'transform-predict',
        given: { ar: 'عَلَىٰ', en: 'upon' },
        instruction: 'Attach هِمْ (them) to عَلَىٰ',
        result: { ar: 'عَلَيْهِمْ' },
        question: 'What does عَلَيْهِمْ mean?',
        options: ['upon them', 'in them', 'towards them'],
        answer: 'upon them',
      },
      {
        type: 'fill-the-gap',
        ayah: ['ذَٰلِكَ', 'ٱلْكِتَابُ', 'لَا', 'رَيْبَ', '______'],
        gapIndex: 4,
        options: ['فِيهِ', 'عَلَيْهِ', 'إِلَيْهِ'],
        answer: 'فِيهِ',
      },
      {
        type: 'cold-read',
        ayah: 'وَلَا تَمْشِ فِى ٱلْأَرْضِ مَرَحًا',
        ayahRef: '17:37',
        words: [
          { ar: 'وَلَا', en: 'and do not' },
          { ar: 'تَمْشِ', en: null },
          { ar: 'فِى', en: 'in' },
          { ar: 'ٱلْأَرْضِ', en: null },
          { ar: 'مَرَحًا', en: null },
        ],
      },
    ],
  },

  L15: {
    id: 'L15', unitId: 'unit-5', number: 15,
    name: 'From & About', type: 'grammar', typeLabel: 'Grammar',
    newWords: ['مِن', 'عَن'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'خَلَقَ ٱلْإِنسَـٰنَ مِنْ عَلَقٍ',
        ayahRef: '96:2',
        words: ['خَلَقَ', 'ٱلْإِنسَـٰنَ', 'مِنْ', 'عَلَقٍ'],
        highlightIndex: 2,
        question: 'What does the highlighted word mean?',
        options: ['From', 'In', 'On', 'To'],
        answer: 'From',
        detail: 'مِن — from, out of. Indicates origin or source.',
      },
      {
        type: 'word-spotlight',
        ayah: 'وَمَا يَنطِقُ عَنِ ٱلْهَوَىٰ',
        ayahRef: '53:3',
        words: ['وَمَا', 'يَنطِقُ', 'عَنِ', 'ٱلْهَوَىٰ'],
        highlightIndex: 2,
        question: 'What does عَن mean?',
        options: ['About / from (away)', 'In', 'Upon', 'Towards'],
        answer: 'About / from (away)',
        detail: 'عَن — about, concerning, away from. Indicates separation or topic.',
      },
      {
        type: 'transform-predict',
        given: { ar: 'فِي ٱلْأَرْضِ', en: 'IN the earth' },
        instruction: 'Change فِي to مِن.',
        result: { ar: 'مِنَ ٱلْأَرْضِ' },
        question: 'What does مِنَ ٱلْأَرْضِ mean?',
        options: ['FROM the earth', 'IN the earth', 'ON the earth'],
        answer: 'FROM the earth',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['مِن', 'From'],
          ['عَن', 'About / away from'],
          ['فِي', 'In'],
          ['عَلَىٰ', 'Upon'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['خَلَقَ', 'ٱلْإِنسَـٰنَ', '______', 'عَلَقٍ'],
        gapIndex: 2,
        options: ['مِنْ', 'فِي', 'عَنْ'],
        answer: 'مِنْ',
      },
      {
        type: 'transform-predict',
        given: { ar: 'يَسْأَلُونَكَ عَنِ ٱلْأَهِلَّةِ', en: 'They ask you ABOUT the crescents' },
        instruction: 'عَن means "about" — it marks the topic of a question.',
        result: { ar: 'عَن' },
        question: 'In "they ask you ___ the crescents", which particle fits?',
        options: ['عَن (about)', 'مِن (from)', 'فِي (in)'],
        answer: 'عَن (about)',
      },
      {
        type: 'tap-to-translate',
        ayah: 'خَلَقَ ٱلْإِنسَـٰنَ مِنْ عَلَقٍ',
        ayahRef: '96:2',
        translationWords: ['He created', 'mankind', 'from', 'a clot'],
      },
      {
        type: 'cold-read',
        ayah: 'وَمَا يَعْزُبُ عَن رَّبِّكَ مِن مِّثْقَالِ ذَرَّةٍ',
        ayahRef: '10:61',
        words: [
          { ar: 'وَمَا', en: null },
          { ar: 'يَعْزُبُ', en: null },
          { ar: 'عَن', en: 'from' },
          { ar: 'رَّبِّكَ', en: 'your Lord' },
          { ar: 'مِن', en: 'of' },
          { ar: 'مِّثْقَالِ', en: null },
          { ar: 'ذَرَّةٍ', en: null },
        ],
      },
    ],
  },

  L16: {
    id: 'L16', unitId: 'unit-5', number: 16,
    name: 'Attached Particles', type: 'grammar', typeLabel: 'Grammar',
    newWords: ['بِ', 'لِ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        ayahRef: '1:1',
        words: ['بِسْمِ', 'ٱللَّهِ', 'ٱلرَّحْمَـٰنِ', 'ٱلرَّحِيمِ'],
        highlightIndex: 0,
        question: 'The بِ at the start of بِسْمِ means…',
        options: ['In / by / with', 'From', 'About', 'Upon'],
        answer: 'In / by / with',
        detail: 'بِ — "in, by, with". It attaches directly to the next word. بِسْمِ = بِ + ٱسْمِ.',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ',
        ayahRef: '1:2',
        words: ['ٱلْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
        highlightIndex: 1,
        question: 'The لِ in لِلَّهِ means…',
        options: ['For / to / belonging to', 'From', 'In', 'Upon'],
        answer: 'For / to / belonging to',
        detail: 'لِ — "for, to, belonging to". لِلَّهِ = لِ + ٱللَّهِ (for Allah).',
      },
      {
        type: 'transform-predict',
        given: { ar: 'ٱسْمِ', en: 'name' },
        instruction: 'Attach بِ (in/by) to the front.',
        result: { ar: 'بِٱسْمِ' },
        question: 'What does بِٱسْمِ mean?',
        options: ['In the name', 'From the name', 'About the name'],
        answer: 'In the name',
      },
      {
        type: 'transform-predict',
        given: { ar: 'ٱللَّهِ', en: 'Allah' },
        instruction: 'Attach لِ (for/to) to the front.',
        result: { ar: 'لِلَّهِ' },
        question: 'What does لِلَّهِ mean?',
        options: ['For Allah / belonging to Allah', 'From Allah', 'In Allah'],
        answer: 'For Allah / belonging to Allah',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['بِ', 'In / by / with'],
          ['لِ', 'For / to'],
          ['مِن', 'From'],
          ['عَن', 'About'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱلْحَمْدُ', '______', 'رَبِّ', 'ٱلْعَـٰلَمِينَ'],
        gapIndex: 1,
        options: ['لِلَّهِ', 'بِٱللَّهِ', 'عَنِ ٱللَّهِ'],
        answer: 'لِلَّهِ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ',
        ayahRef: '1:1',
        translationWords: ['In the name of', 'Allah,', 'the Most Gracious,', 'the Most Merciful'],
      },
      {
        type: 'cold-read',
        ayah: 'وَبِٱلْوَالِدَيْنِ إِحْسَانًا',
        ayahRef: '2:83',
        words: [
          { ar: 'وَبِٱلْوَالِدَيْنِ', en: 'and to parents (بِ = to)' },
          { ar: 'إِحْسَانًا', en: null },
        ],
      },
    ],
  },

  L17: {
    id: 'L17', unitId: 'unit-5', number: 17,
    name: 'The Connector', type: 'grammar', typeLabel: 'Grammar',
    newWords: ['وَ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        ayahRef: '1:5',
        words: ['إِيَّاكَ', 'نَعْبُدُ', 'وَإِيَّاكَ', 'نَسْتَعِينُ'],
        highlightIndex: 2,
        question: 'The وَ at the start means…',
        options: ['And', 'Or', 'But', 'Then'],
        answer: 'And',
        detail: 'وَ — the most common word in Arabic! "And" — it connects words, phrases, and sentences.',
      },
      {
        type: 'transform-predict',
        given: { ar: 'ٱلرَّحْمَـٰنِ', en: 'the Most Gracious' },
        instruction: 'Add وَ before ٱلرَّحِيمِ to connect them.',
        result: { ar: 'ٱلرَّحْمَـٰنِ وَٱلرَّحِيمِ' },
        question: 'What does this mean?',
        options: ['The Most Gracious AND the Most Merciful', 'The Most Gracious OR the Most Merciful', 'The Most Gracious BUT the Most Merciful'],
        answer: 'The Most Gracious AND the Most Merciful',
      },
      {
        type: 'transform-predict',
        given: { ar: 'ٱلْعَصْرِ', en: 'time/era' },
        instruction: 'Add وَ as an oath particle: "BY time!"',
        result: { ar: 'وَٱلْعَصْرِ' },
        question: 'When وَ starts a surah, it often means…',
        options: ['By! (oath)', 'And', 'Or'],
        answer: 'By! (oath)',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['وَ', 'And / By'],
          ['بِ', 'In / by / with'],
          ['لِ', 'For / to'],
          ['مِن', 'From'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['إِيَّاكَ', 'نَعْبُدُ', '______', 'نَسْتَعِينُ'],
        gapIndex: 2,
        options: ['وَإِيَّاكَ', 'بِإِيَّاكَ', 'لِإِيَّاكَ'],
        answer: 'وَإِيَّاكَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        ayahRef: '1:5',
        translationWords: ['You alone', 'we worship,', 'and You alone', 'we seek help from'],
      },
      {
        type: 'ayah-assembly',
        translation: 'You alone we worship, and You alone we ask for help',
        words: ['إِيَّاكَ', 'نَعْبُدُ', 'وَإِيَّاكَ', 'نَسْتَعِينُ'],
      },
      {
        type: 'cold-read',
        ayah: 'وَٱلضُّحَىٰ وَٱلَّيْلِ إِذَا سَجَىٰ',
        ayahRef: '93:1-2',
        words: [
          { ar: 'وَٱلضُّحَىٰ', en: 'By the morning light (وَ = by!)' },
          { ar: 'وَٱلَّيْلِ', en: 'and the night (وَ = and)' },
          { ar: 'إِذَا', en: null },
          { ar: 'سَجَىٰ', en: null },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 6 — Who's Speaking? (4 lessons)
  //
  // Vocabulary taught in this unit:
  //   L18: هُوَ, هِيَ, هُمْ
  //   L19: أَنتَ, أَنَا, نَحْنُ
  //   L20: ـهُ, ـهُمْ
  //   L21: ـنَا, ـكَ
  // ────────────────────────────────────────────────────────────

  L18: {
    id: 'L18', unitId: 'unit-6', number: 18,
    name: 'He, She, They', type: 'grammar', typeLabel: 'Grammar',
    newWords: ['هُوَ', 'هِيَ', 'هُمْ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ',
        ayahRef: '112:1',
        words: ['قُلْ', 'هُوَ', 'ٱللَّهُ', 'أَحَدٌ'],
        highlightIndex: 1,
        question: 'What does the highlighted word mean?',
        options: ['He', 'She', 'They', 'You'],
        answer: 'He',
        detail: 'هُوَ — "He." The masculine singular pronoun. Used for Allah throughout the Quran.',
      },
      {
        type: 'word-spotlight',
        ayah: 'وَمَا هِيَ إِلَّا ذِكْرَىٰ لِلْبَشَرِ',
        ayahRef: '74:31',
        words: ['وَمَا', 'هِيَ', 'إِلَّا', 'ذِكْرَىٰ', 'لِلْبَشَرِ'],
        highlightIndex: 1,
        question: 'What does this word mean?',
        options: ['She / it (fem.)', 'He', 'They', 'We'],
        answer: 'She / it (fem.)',
        detail: 'هِيَ — "She" or "it" (feminine). Arabic assigns gender to all nouns.',
      },
      {
        type: 'word-spotlight',
        ayah: 'أُولَـٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ',
        ayahRef: '2:5',
        words: ['أُولَـٰئِكَ', 'عَلَىٰ', 'هُدًى', 'مِّن', 'رَّبِّهِمْ'],
        highlightIndex: 0,
        question: 'هُمْ means "they/them." In رَّبِّهِمْ, what does ـهِمْ add?',
        options: ['their (Lord)', 'his (Lord)', 'our (Lord)', 'your (Lord)'],
        answer: 'their (Lord)',
        detail: 'هُمْ — "they/them." When attached to a noun as ـهِمْ, it means "their."',
      },
      {
        type: 'meaning-match',
        pairs: [
          { ar: 'هُوَ', en: 'He' },
          { ar: 'هِيَ', en: 'She / it' },
          { ar: 'هُمْ', en: 'They / them' },
          { ar: 'إِيَّاكَ', en: 'You alone' },
        ],
      },
      {
        type: 'transform-predict',
        given: { ar: 'رَبِّ', en: 'Lord of' },
        instruction: 'Attach ـهُ (his) to make it possessive',
        result: { ar: 'رَبُّهُ' },
        question: 'What does رَبُّهُ mean?',
        options: ['his Lord', 'their Lord', 'our Lord'],
        answer: 'his Lord',
      },
      {
        type: 'transform-predict',
        given: { ar: 'رَبُّهُ', en: 'his Lord' },
        instruction: 'Replace ـهُ (his) with ـهُمْ (their)',
        result: { ar: 'رَبُّهُمْ' },
        question: 'What does رَبُّهُمْ mean?',
        options: ['their Lord', 'his Lord', 'her Lord'],
        answer: 'their Lord',
      },
      {
        type: 'fill-the-gap',
        ayah: ['قُلْ', '______', 'ٱللَّهُ', 'أَحَدٌ'],
        gapIndex: 1,
        options: ['هُوَ', 'هِيَ', 'هُمْ'],
        answer: 'هُوَ',
      },
      {
        type: 'cold-read',
        ayah: 'هُوَ ٱلْأَوَّلُ وَٱلْآخِرُ وَٱلظَّـٰهِرُ وَٱلْبَاطِنُ',
        ayahRef: '57:3',
        words: [
          { ar: 'هُوَ', en: 'He' },
          { ar: 'ٱلْأَوَّلُ', en: null },
          { ar: 'وَٱلْآخِرُ', en: null },
          { ar: 'وَٱلظَّـٰهِرُ', en: null },
          { ar: 'وَٱلْبَاطِنُ', en: null },
        ],
      },
    ],
  },

  L19: {
    id: 'L19', unitId: 'unit-6', number: 19,
    name: 'You, I, We', type: 'grammar', typeLabel: 'Grammar',
    newWords: ['أَنتَ', 'أَنَا', 'نَحْنُ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'إِنَّكَ أَنتَ ٱلْعَلِيمُ ٱلْحَكِيمُ',
        ayahRef: '2:32',
        words: ['إِنَّكَ', 'أَنتَ', 'ٱلْعَلِيمُ', 'ٱلْحَكِيمُ'],
        highlightIndex: 1,
        question: 'What does أَنتَ mean?',
        options: ['You (singular)', 'He', 'I', 'We'],
        answer: 'You (singular)',
        detail: 'أَنتَ — You (masculine singular). Used when speaking directly to one person.',
      },
      {
        type: 'word-spotlight',
        ayah: 'قَالَ أَنَا خَيْرٌ مِّنْهُ',
        ayahRef: '7:12',
        words: ['قَالَ', 'أَنَا', 'خَيْرٌ', 'مِّنْهُ'],
        highlightIndex: 1,
        question: 'What does أَنَا mean?',
        options: ['I', 'You', 'He', 'We'],
        answer: 'I',
        detail: 'أَنَا — I, me. The first-person singular pronoun.',
      },
      {
        type: 'transform-predict',
        given: { ar: 'هُوَ', en: 'He' },
        instruction: 'Change from 3rd person to 1st person plural.',
        result: { ar: 'نَحْنُ' },
        question: 'What does نَحْنُ mean?',
        options: ['We', 'You all', 'They'],
        answer: 'We',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['أَنتَ', 'You'],
          ['أَنَا', 'I'],
          ['نَحْنُ', 'We'],
          ['هُوَ', 'He'],
        ],
      },
      {
        type: 'transform-predict',
        given: { ar: 'إِيَّاكَ نَعْبُدُ', en: 'You alone we worship' },
        instruction: 'The ـكَ in إِيَّاكَ refers to "you" — same as أَنتَ!',
        result: { ar: 'أَنتَ' },
        question: 'Who is إِيَّاكَ addressing?',
        options: ['You (أَنتَ)', 'He (هُوَ)', 'We (نَحْنُ)'],
        answer: 'You (أَنتَ)',
      },
      {
        type: 'fill-the-gap',
        ayah: ['إِنَّكَ', '______', 'ٱلْعَلِيمُ', 'ٱلْحَكِيمُ'],
        gapIndex: 1,
        options: ['أَنتَ', 'أَنَا', 'هُوَ'],
        answer: 'أَنتَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'إِنَّكَ أَنتَ ٱلْعَلِيمُ ٱلْحَكِيمُ',
        ayahRef: '2:32',
        translationWords: ['Indeed You,', 'You are', 'the All-Knowing,', 'the All-Wise'],
      },
      {
        type: 'cold-read',
        ayah: 'نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ ٱلْقَصَصِ',
        ayahRef: '12:3',
        words: [
          { ar: 'نَحْنُ', en: 'We' },
          { ar: 'نَقُصُّ', en: null },
          { ar: 'عَلَيْكَ', en: 'upon you' },
          { ar: 'أَحْسَنَ', en: null },
          { ar: 'ٱلْقَصَصِ', en: null },
        ],
      },
    ],
  },

  L20: {
    id: 'L20', unitId: 'unit-6', number: 20,
    name: 'Attached: His & Their', type: 'grammar', typeLabel: 'Grammar',
    newWords: ['ـهُ', 'ـهُمْ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'قُلْ هُوَ ٱللَّهُ أَحَدٌ',
        ayahRef: '112:1',
        words: ['قُلْ', 'هُوَ', 'ٱللَّهُ', 'أَحَدٌ'],
        highlightIndex: 1,
        question: 'هُوَ is a standalone pronoun. When attached, ـهُ means…',
        options: ['His / him / it', 'Their', 'Your', 'Our'],
        answer: 'His / him / it',
        detail: 'ـهُ — his, him, it. Attaches to nouns (possession) and verbs (object).',
      },
      {
        type: 'transform-predict',
        given: { ar: 'رَبِّ', en: 'Lord of' },
        instruction: 'Attach ـهُ (his) to make "his Lord".',
        result: { ar: 'رَبُّهُ' },
        question: 'What does رَبُّهُ mean?',
        options: ['His Lord', 'Their Lord', 'Your Lord'],
        answer: 'His Lord',
      },
      {
        type: 'transform-predict',
        given: { ar: 'رَبُّهُ', en: 'his Lord' },
        instruction: 'Change ـهُ (his) to ـهُمْ (their).',
        result: { ar: 'رَبُّهُمْ' },
        question: 'What does رَبُّهُمْ mean?',
        options: ['Their Lord', 'His Lord', 'Your Lord'],
        answer: 'Their Lord',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['ـهُ', 'His / him'],
          ['ـهُمْ', 'Their / them'],
          ['هُوَ', 'He'],
          ['هُمْ', 'They'],
        ],
      },
      {
        type: 'transform-predict',
        given: { ar: 'عَلَيْهِمْ', en: 'upon them' },
        instruction: 'Change ـهِمْ (them) to ـهِ (him).',
        result: { ar: 'عَلَيْهِ' },
        question: 'What does عَلَيْهِ mean?',
        options: ['Upon him', 'Upon them', 'Upon you'],
        answer: 'Upon him',
      },
      {
        type: 'fill-the-gap',
        ayah: ['أَنْعَمْتَ', '______'],
        gapIndex: 1,
        options: ['عَلَيْهِمْ', 'عَلَيْهِ', 'عَلَيْنَا'],
        answer: 'عَلَيْهِمْ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ',
        ayahRef: '1:7',
        translationWords: ['The path of', 'those', 'You have blessed', 'upon them'],
      },
      {
        type: 'cold-read',
        ayah: 'لَهُ مَا فِى ٱلسَّمَـٰوَاتِ وَمَا فِى ٱلْأَرْضِ',
        ayahRef: '2:255',
        words: [
          { ar: 'لَهُ', en: 'to Him (لِ + ـهُ)' },
          { ar: 'مَا', en: null },
          { ar: 'فِى', en: 'in' },
          { ar: 'ٱلسَّمَـٰوَاتِ', en: null },
          { ar: 'وَمَا', en: null },
          { ar: 'فِى', en: 'in' },
          { ar: 'ٱلْأَرْضِ', en: null },
        ],
      },
    ],
  },

  L21: {
    id: 'L21', unitId: 'unit-6', number: 21,
    name: 'Attached: Our & Your', type: 'grammar', typeLabel: 'Grammar',
    newWords: ['ـنَا', 'ـكَ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        ayahRef: '1:6',
        words: ['ٱهْدِنَا', 'ٱلصِّرَٰطَ', 'ٱلْمُسْتَقِيمَ'],
        highlightIndex: 0,
        question: 'The ـنَا at the end of ٱهْدِنَا means…',
        options: ['Us / our', 'You / your', 'Him / his', 'Them / their'],
        answer: 'Us / our',
        detail: 'ـنَا — us, our. ٱهْدِ + نَا = "Guide US". Also used for possession: رَبَّنَا = "our Lord".',
      },
      {
        type: 'transform-predict',
        given: { ar: 'رَبُّهُ', en: 'his Lord' },
        instruction: 'Change ـهُ (his) to ـنَا (our).',
        result: { ar: 'رَبَّنَا' },
        question: 'What does رَبَّنَا mean?',
        options: ['Our Lord', 'His Lord', 'Your Lord'],
        answer: 'Our Lord',
      },
      {
        type: 'transform-predict',
        given: { ar: 'رَبَّنَا', en: 'our Lord' },
        instruction: 'Change ـنَا (our) to ـكَ (your).',
        result: { ar: 'رَبَّكَ' },
        question: 'What does رَبَّكَ mean?',
        options: ['Your Lord', 'Our Lord', 'Their Lord'],
        answer: 'Your Lord',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['ـنَا', 'Us / our'],
          ['ـكَ', 'You / your'],
          ['ـهُ', 'Him / his'],
          ['ـهُمْ', 'Their / them'],
        ],
      },
      {
        type: 'transform-predict',
        given: { ar: 'عَلَيْهِمْ', en: 'upon them' },
        instruction: 'Change ـهِمْ (them) to ـنَا (us).',
        result: { ar: 'عَلَيْنَا' },
        question: 'What does عَلَيْنَا mean?',
        options: ['Upon us', 'Upon them', 'Upon you'],
        answer: 'Upon us',
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'ٱلصِّرَٰطَ', 'ٱلْمُسْتَقِيمَ'],
        gapIndex: 0,
        options: ['ٱهْدِنَا', 'ٱهْدِهُمْ', 'ٱهْدِكَ'],
        answer: 'ٱهْدِنَا',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        ayahRef: '1:6',
        translationWords: ['Guide us', 'to the path,', 'the straight'],
      },
      {
        type: 'cold-read',
        ayah: 'رَبَّنَا آتِنَا فِى ٱلدُّنْيَا حَسَنَةً',
        ayahRef: '2:201',
        words: [
          { ar: 'رَبَّنَا', en: 'Our Lord (ـنَا = our)' },
          { ar: 'آتِنَا', en: 'give us (ـنَا = us)' },
          { ar: 'فِى', en: 'in' },
          { ar: 'ٱلدُّنْيَا', en: null },
          { ar: 'حَسَنَةً', en: null },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 7 — Your Salah (4 lessons)
  //
  // Vocabulary taught in this unit:
  //   L22: أَكْبَرُ, سُبْحَانَ
  //   L23: رَبِّيَ, ٱلْعَظِيمِ, ٱلْأَعْلَى
  //   L24: سَمِعَ, ٱلسَّلَامُ عَلَيْكُمْ, وَرَحْمَةُ ٱللَّهِ
  //   L25: (surah mastery — full salah walkthrough)
  // ────────────────────────────────────────────────────────────

  L22: {
    id: 'L22', unitId: 'unit-7', number: 22,
    name: 'Allahu Akbar', type: 'new-words', typeLabel: 'New Words',
    newWords: ['أَكْبَرُ', 'سُبْحَانَ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'ٱللَّهُ أَكْبَرُ',
        ayahRef: 'Takbir',
        words: ['ٱللَّهُ', 'أَكْبَرُ'],
        highlightIndex: 1,
        question: 'You say this many times in salah. What does أَكْبَرُ mean?',
        options: ['Greatest / greater', 'Most Merciful', 'All-Knowing', 'The One'],
        answer: 'Greatest / greater',
        detail: 'أَكْبَرُ — "Greatest" or "greater." From root ك-ب-ر (bigness, greatness). Allah is greater than everything.',
      },
      {
        type: 'word-spotlight',
        ayah: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ',
        ayahRef: 'Ruku',
        words: ['سُبْحَانَ', 'رَبِّيَ', 'ٱلْعَظِيمِ'],
        highlightIndex: 0,
        question: 'You say this in ruku. What does سُبْحَانَ mean?',
        options: ['Glory be to / How perfect is', 'All praise for', 'In the name of', 'Peace be upon'],
        answer: 'Glory be to / How perfect is',
        detail: 'سُبْحَانَ — "Glory be to" or "How perfect is." Declares Allah free from any imperfection.',
      },
      {
        type: 'meaning-match',
        pairs: [
          { ar: 'أَكْبَرُ', en: 'Greatest' },
          { ar: 'سُبْحَانَ', en: 'Glory be to' },
          { ar: 'ٱللَّهُ', en: 'Allah' },
          { ar: 'ٱلْحَمْدُ', en: 'All praise' },
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱللَّهُ', '______'],
        gapIndex: 1,
        options: ['أَكْبَرُ', 'أَحَدٌ', 'ٱلصَّمَدُ'],
        answer: 'أَكْبَرُ',
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'رَبِّيَ', 'ٱلْعَظِيمِ'],
        gapIndex: 0,
        options: ['سُبْحَانَ', 'بِسْمِ', 'ٱلْحَمْدُ'],
        answer: 'سُبْحَانَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱللَّهُ أَكْبَرُ',
        ayahRef: 'Takbir',
        translationWords: ['Allah', 'is the Greatest'],
      },
      {
        type: 'tap-to-translate',
        ayah: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ',
        ayahRef: 'Ruku',
        translationWords: ['Glory be to', 'my Lord,', 'the Magnificent'],
      },
      {
        type: 'cold-read',
        ayah: 'فَسَبِّحْ بِٱسْمِ رَبِّكَ ٱلْعَظِيمِ',
        ayahRef: '56:96',
        words: [
          { ar: 'فَسَبِّحْ', en: 'so glorify' },
          { ar: 'بِٱسْمِ', en: 'in the name of' },
          { ar: 'رَبِّكَ', en: 'your Lord' },
          { ar: 'ٱلْعَظِيمِ', en: null },
        ],
      },
    ],
  },

  L23: {
    id: 'L23', unitId: 'unit-7', number: 23,
    name: 'In Ruku & Sujud', type: 'new-words', typeLabel: 'New Words',
    newWords: ['رَبِّيَ', 'ٱلْعَظِيمِ', 'ٱلْأَعْلَى'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ',
        ayahRef: 'Ruku',
        words: ['سُبْحَانَ', 'رَبِّيَ', 'ٱلْعَظِيمِ'],
        highlightIndex: 1,
        question: 'What does رَبِّيَ mean?',
        options: ['My Lord', 'His Lord', 'Our Lord', 'Your Lord'],
        answer: 'My Lord',
        detail: 'رَبِّيَ — my Lord. رَبّ + ـيَ (my). You say this in ruku!',
      },
      {
        type: 'word-spotlight',
        ayah: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ',
        ayahRef: 'Ruku',
        words: ['سُبْحَانَ', 'رَبِّيَ', 'ٱلْعَظِيمِ'],
        highlightIndex: 2,
        question: 'What does ٱلْعَظِيمِ mean?',
        options: ['The Magnificent', 'The Merciful', 'The Powerful', 'The Wise'],
        answer: 'The Magnificent',
        detail: 'ٱلْعَظِيمِ — the Magnificent, the Great. From root ع-ظ-م.',
      },
      {
        type: 'word-spotlight',
        ayah: 'سُبْحَانَ رَبِّيَ ٱلْأَعْلَى',
        ayahRef: 'Sujud',
        words: ['سُبْحَانَ', 'رَبِّيَ', 'ٱلْأَعْلَى'],
        highlightIndex: 2,
        question: 'In sujud, you say ٱلْأَعْلَى instead of ٱلْعَظِيمِ. What does it mean?',
        options: ['The Most High', 'The Most Great', 'The Most Wise', 'The Most Merciful'],
        answer: 'The Most High',
        detail: 'ٱلْأَعْلَى — the Most High, the Highest. You say this in the lowest position!',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['رَبِّيَ', 'My Lord'],
          ['ٱلْعَظِيمِ', 'The Magnificent'],
          ['ٱلْأَعْلَى', 'The Most High'],
          ['سُبْحَانَ', 'Glory be to'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['سُبْحَانَ', 'رَبِّيَ', '______'],
        gapIndex: 2,
        options: ['ٱلْعَظِيمِ', 'ٱلْأَعْلَى', 'ٱلرَّحِيمِ'],
        answer: 'ٱلْعَظِيمِ',
      },
      {
        type: 'fill-the-gap',
        ayah: ['سُبْحَانَ', '______', 'ٱلْأَعْلَى'],
        gapIndex: 1,
        options: ['رَبِّيَ', 'ٱللَّهُ', 'ٱلْحَمْدُ'],
        answer: 'رَبِّيَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ',
        ayahRef: 'Ruku',
        translationWords: ['Glory be to', 'my Lord,', 'the Magnificent'],
      },
      {
        type: 'tap-to-translate',
        ayah: 'سُبْحَانَ رَبِّيَ ٱلْأَعْلَى',
        ayahRef: 'Sujud',
        translationWords: ['Glory be to', 'my Lord,', 'the Most High'],
      },
      {
        type: 'cold-read',
        ayah: 'سَبِّحِ ٱسْمَ رَبِّكَ ٱلْأَعْلَى',
        ayahRef: '87:1',
        words: [
          { ar: 'سَبِّحِ', en: null },
          { ar: 'ٱسْمَ', en: 'name of' },
          { ar: 'رَبِّكَ', en: 'your Lord' },
          { ar: 'ٱلْأَعْلَى', en: 'the Most High' },
        ],
      },
    ],
  },

  L24: {
    id: 'L24', unitId: 'unit-7', number: 24,
    name: 'Rising & Closing', type: 'new-words', typeLabel: 'New Words',
    newWords: ['سَمِعَ', 'ٱلسَّلَامُ', 'عَلَيْكُمْ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'سَمِعَ ٱللَّهُ لِمَنْ حَمِدَهُ',
        ayahRef: 'Rising from ruku',
        words: ['سَمِعَ', 'ٱللَّهُ', 'لِمَنْ', 'حَمِدَهُ'],
        highlightIndex: 0,
        question: 'What does سَمِعَ mean?',
        options: ['He heard', 'He saw', 'He knew', 'He said'],
        answer: 'He heard',
        detail: 'سَمِعَ — He heard. From root س-م-ع (hearing). Said when rising from ruku.',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّهِ',
        ayahRef: 'Tasleem',
        words: ['ٱلسَّلَامُ', 'عَلَيْكُمْ', 'وَرَحْمَةُ', 'ٱللَّهِ'],
        highlightIndex: 0,
        question: 'What does ٱلسَّلَامُ mean?',
        options: ['Peace', 'Mercy', 'Blessing', 'Praise'],
        answer: 'Peace',
        detail: 'ٱلسَّلَامُ — Peace. Also a Name of Allah! From root س-ل-م.',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّهِ',
        ayahRef: 'Tasleem',
        words: ['ٱلسَّلَامُ', 'عَلَيْكُمْ', 'وَرَحْمَةُ', 'ٱللَّهِ'],
        highlightIndex: 1,
        question: 'What does عَلَيْكُمْ mean?',
        options: ['Upon you (all)', 'Upon them', 'Upon us', 'Upon him'],
        answer: 'Upon you (all)',
        detail: 'عَلَيْكُمْ — upon you all. عَلَى + كُمْ. Compare: عَلَيْهِمْ = upon them.',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['سَمِعَ', 'He heard'],
          ['ٱلسَّلَامُ', 'Peace'],
          ['عَلَيْكُمْ', 'Upon you all'],
          ['رَحْمَة', 'Mercy'],
        ],
      },
      {
        type: 'transform-predict',
        given: { ar: 'عَلَيْهِمْ', en: 'upon them' },
        instruction: 'Change ـهِمْ (them) to ـكُمْ (you all).',
        result: { ar: 'عَلَيْكُمْ' },
        question: 'What does عَلَيْكُمْ mean?',
        options: ['Upon you all', 'Upon them', 'Upon us'],
        answer: 'Upon you all',
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱلسَّلَامُ', '______', 'وَرَحْمَةُ', 'ٱللَّهِ'],
        gapIndex: 1,
        options: ['عَلَيْكُمْ', 'عَلَيْهِمْ', 'عَلَيْنَا'],
        answer: 'عَلَيْكُمْ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّهِ',
        ayahRef: 'Tasleem',
        translationWords: ['Peace', 'be upon you', 'and the mercy of', 'Allah'],
      },
      {
        type: 'cold-read',
        ayah: 'وَإِذَا حُيِّيتُم بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا',
        ayahRef: '4:86',
        words: [
          { ar: 'وَإِذَا', en: null },
          { ar: 'حُيِّيتُم', en: null },
          { ar: 'بِتَحِيَّةٍ', en: null },
          { ar: 'فَحَيُّوا', en: null },
          { ar: 'بِأَحْسَنَ', en: null },
          { ar: 'مِنْهَا', en: 'from it (مِن + ها)' },
        ],
      },
    ],
  },

  L25: {
    id: 'L25', unitId: 'unit-7', number: 25,
    name: 'Your Full Salah', type: 'surah', typeLabel: 'Surah Story',
    newWords: [],
    exercises: [
      {
        type: 'listen',
        surahName: 'Your Salah',
        surahRef: 'Words of Prayer',
        ayahs: [
          { ar: 'ٱللَّهُ أَكْبَرُ', num: 1 },
          { ar: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ', num: 2 },
          { ar: 'سَمِعَ ٱللَّهُ لِمَنْ حَمِدَهُ', num: 3 },
          { ar: 'سُبْحَانَ رَبِّيَ ٱلْأَعْلَى', num: 4 },
          { ar: 'ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّهِ', num: 5 },
        ],
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱللَّهُ أَكْبَرُ',
        ayahRef: 'Takbir',
        translationWords: ['Allah', 'is the Greatest'],
      },
      {
        type: 'tap-to-translate',
        ayah: 'سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ',
        ayahRef: 'Ruku',
        translationWords: ['Glory be to', 'my Lord,', 'the Magnificent'],
      },
      {
        type: 'fill-the-gap',
        ayah: ['سَمِعَ', '______', 'لِمَنْ', 'حَمِدَهُ'],
        gapIndex: 1,
        options: ['ٱللَّهُ', 'رَبِّيَ', 'ٱلْحَمْدُ'],
        answer: 'ٱللَّهُ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'سُبْحَانَ رَبِّيَ ٱلْأَعْلَى',
        ayahRef: 'Sujud',
        translationWords: ['Glory be to', 'my Lord,', 'the Most High'],
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱلسَّلَامُ', 'عَلَيْكُمْ', '______', 'ٱللَّهِ'],
        gapIndex: 2,
        options: ['وَرَحْمَةُ', 'وَبَرَكَاتُ', 'وَنِعْمَةُ'],
        answer: 'وَرَحْمَةُ',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['أَكْبَرُ', 'Greatest'],
          ['ٱلْعَظِيمِ', 'The Magnificent'],
          ['ٱلْأَعْلَى', 'The Most High'],
          ['ٱلسَّلَامُ', 'Peace'],
        ],
      },
      {
        type: 'ayah-assembly',
        translation: 'Peace be upon you and the mercy of Allah',
        words: ['ٱلسَّلَامُ', 'عَلَيْكُمْ', 'وَرَحْمَةُ', 'ٱللَّهِ'],
      },
      {
        type: 'cold-read',
        ayah: 'فَسُبْحَانَ ٱللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ',
        ayahRef: '30:17',
        words: [
          { ar: 'فَسُبْحَانَ', en: 'So glory be to' },
          { ar: 'ٱللَّهِ', en: 'Allah' },
          { ar: 'حِينَ', en: null },
          { ar: 'تُمْسُونَ', en: null },
          { ar: 'وَحِينَ', en: null },
          { ar: 'تُصْبِحُونَ', en: null },
        ],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 9 — I Seek Refuge / Al-Falaq (4 lessons)
  //
  // Vocabulary taught in this unit:
  //   L31: أَعُوذُ, بِرَبِّ, ٱلْفَلَقِ
  //   L32: شَرِّ, مَا خَلَقَ
  //   L33: غَاسِقٍ, ٱلنَّفَّـٰثَـٰتِ, حَاسِدٍ
  //   L34: (surah mastery)
  // ────────────────────────────────────────────────────────────

  L31: {
    id: 'L31', unitId: 'unit-9', number: 31,
    name: 'Seeking Refuge', type: 'grammar', typeLabel: 'Grammar',
    newWords: ['أَعُوذُ', 'بِرَبِّ', 'ٱلْفَلَقِ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ',
        ayahRef: '113:1',
        words: ['قُلْ', 'أَعُوذُ', 'بِرَبِّ', 'ٱلْفَلَقِ'],
        highlightIndex: 1,
        question: 'What does the highlighted word mean?',
        options: ['I seek refuge', 'I say', 'I worship', 'I praise'],
        answer: 'I seek refuge',
        detail: 'أَعُوذُ — "I seek refuge/protection." The أَ prefix = "I." Root: ع-و-ذ.',
      },
      {
        type: 'word-spotlight',
        ayah: 'قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ',
        ayahRef: '113:1',
        words: ['قُلْ', 'أَعُوذُ', 'بِرَبِّ', 'ٱلْفَلَقِ'],
        highlightIndex: 2,
        question: 'بِرَبِّ combines بِ + رَبِّ. What does it mean?',
        options: ['in the Lord of', 'by the Lord of', 'for the Lord of', 'the Lord of'],
        answer: 'in the Lord of',
        detail: 'بِرَبِّ = بِ (in/by) + رَبِّ (Lord of). You know رَبِّ from Al-Fatiha!',
      },
      {
        type: 'word-spotlight',
        ayah: 'قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ',
        ayahRef: '113:1',
        words: ['قُلْ', 'أَعُوذُ', 'بِرَبِّ', 'ٱلْفَلَقِ'],
        highlightIndex: 3,
        question: 'What does ٱلْفَلَقِ mean?',
        options: ['the daybreak', 'the night', 'the sky', 'the earth'],
        answer: 'the daybreak',
        detail: 'ٱلْفَلَقِ — "the daybreak." From root ف-ل-ق (to split/cleave). Dawn splits the darkness.',
      },
      {
        type: 'meaning-match',
        pairs: [
          { ar: 'أَعُوذُ', en: 'I seek refuge' },
          { ar: 'بِرَبِّ', en: 'in the Lord of' },
          { ar: 'ٱلْفَلَقِ', en: 'the daybreak' },
          { ar: 'قُلْ', en: 'Say!' },
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['قُلْ', '______', 'بِرَبِّ', 'ٱلْفَلَقِ'],
        gapIndex: 1,
        options: ['أَعُوذُ', 'نَعْبُدُ', 'ٱلْحَمْدُ'],
        answer: 'أَعُوذُ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ',
        ayahRef: '113:1',
        translationWords: ['Say:', 'I seek refuge', 'in the Lord of', 'the daybreak'],
      },
      {
        type: 'ayah-assembly',
        translation: 'Say: I seek refuge in the Lord of the daybreak',
        ayahRef: '113:1',
        words: ['قُلْ', 'أَعُوذُ', 'بِرَبِّ', 'ٱلْفَلَقِ'],
      },
      {
        type: 'cold-read',
        ayah: 'قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ',
        ayahRef: '114:1',
        words: [
          { ar: 'قُلْ', en: 'Say!' },
          { ar: 'أَعُوذُ', en: 'I seek refuge' },
          { ar: 'بِرَبِّ', en: 'in the Lord of' },
          { ar: 'ٱلنَّاسِ', en: null },
        ],
      },
    ],
  },

  L32: {
    id: 'L32', unitId: 'unit-9', number: 32,
    name: 'Evil of Creation', type: 'root', typeLabel: 'Root Deep Dive',
    newWords: ['شَرِّ', 'خَلَقَ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'مِن شَرِّ مَا خَلَقَ',
        ayahRef: '113:2',
        words: ['مِن', 'شَرِّ', 'مَا', 'خَلَقَ'],
        highlightIndex: 1,
        question: 'What does شَرِّ mean?',
        options: ['Evil of', 'Good of', 'Lord of', 'Name of'],
        answer: 'Evil of',
        detail: 'شَرِّ — evil, harm. The opposite of خَيْر (good).',
      },
      {
        type: 'word-spotlight',
        ayah: 'مِن شَرِّ مَا خَلَقَ',
        ayahRef: '113:2',
        words: ['مِن', 'شَرِّ', 'مَا', 'خَلَقَ'],
        highlightIndex: 3,
        question: 'What does خَلَقَ mean?',
        options: ['He created', 'He heard', 'He said', 'He knew'],
        answer: 'He created',
        detail: 'خَلَقَ — He created. From root خ-ل-ق. Allah is ٱلْخَالِقُ (the Creator).',
      },
      {
        type: 'root-discovery',
        root: 'خ-ل-ق',
        rootMeaning: 'to create',
        knownWords: [
          { ar: 'خَلَقَ', en: 'He created' },
        ],
        newWord: { ar: 'ٱلْخَالِقُ', en: 'The Creator' },
        question: 'From root خ-ل-ق, what might ٱلْخَالِقُ mean?',
        options: ['The Creator', 'The Merciful', 'The Hearer'],
        answer: 'The Creator',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['شَرِّ', 'Evil of'],
          ['خَلَقَ', 'He created'],
          ['أَعُوذُ', 'I seek refuge'],
          ['بِرَبِّ', 'In the Lord of'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['مِن', '______', 'مَا', 'خَلَقَ'],
        gapIndex: 1,
        options: ['شَرِّ', 'خَيْرِ', 'رَبِّ'],
        answer: 'شَرِّ',
      },
      {
        type: 'fill-the-gap',
        ayah: ['مِن', 'شَرِّ', 'مَا', '______'],
        gapIndex: 3,
        options: ['خَلَقَ', 'سَمِعَ', 'عَلِمَ'],
        answer: 'خَلَقَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'مِن شَرِّ مَا خَلَقَ',
        ayahRef: '113:2',
        translationWords: ['From', 'the evil of', 'what', 'He created'],
      },
      {
        type: 'cold-read',
        ayah: 'خَلَقَ ٱلْإِنسَـٰنَ مِنْ عَلَقٍ',
        ayahRef: '96:2',
        words: [
          { ar: 'خَلَقَ', en: 'He created' },
          { ar: 'ٱلْإِنسَـٰنَ', en: null },
          { ar: 'مِنْ', en: 'from' },
          { ar: 'عَلَقٍ', en: null },
        ],
      },
    ],
  },

  L33: {
    id: 'L33', unitId: 'unit-9', number: 33,
    name: 'Darkness, Blowers, Enviers', type: 'new-words', typeLabel: 'New Words',
    newWords: ['غَاسِقٍ', 'ٱلنَّفَّـٰثَـٰتِ', 'حَاسِدٍ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
        ayahRef: '113:3',
        words: ['وَمِن', 'شَرِّ', 'غَاسِقٍ', 'إِذَا', 'وَقَبَ'],
        highlightIndex: 2,
        question: 'What does غَاسِقٍ mean?',
        options: ['Darkness / night', 'Wind', 'Fire', 'Enemy'],
        answer: 'Darkness / night',
        detail: 'غَاسِقٍ — darkness, the night. The second evil you seek refuge from.',
      },
      {
        type: 'word-spotlight',
        ayah: 'وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ',
        ayahRef: '113:4',
        words: ['وَمِن', 'شَرِّ', 'ٱلنَّفَّـٰثَـٰتِ', 'فِى', 'ٱلْعُقَدِ'],
        highlightIndex: 2,
        question: 'What does ٱلنَّفَّـٰثَـٰتِ mean?',
        options: ['Those who blow (on knots)', 'Those who pray', 'Those who speak', 'Those who run'],
        answer: 'Those who blow (on knots)',
        detail: 'ٱلنَّفَّـٰثَـٰتِ — those who blow. Refers to those who practice sorcery.',
      },
      {
        type: 'word-spotlight',
        ayah: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
        ayahRef: '113:5',
        words: ['وَمِن', 'شَرِّ', 'حَاسِدٍ', 'إِذَا', 'حَسَدَ'],
        highlightIndex: 2,
        question: 'What does حَاسِدٍ mean?',
        options: ['An envier', 'A helper', 'A believer', 'A speaker'],
        answer: 'An envier',
        detail: 'حَاسِدٍ — an envier, one who envies. The fourth evil in the surah.',
      },
      {
        type: 'meaning-match',
        pairs: [
          ['غَاسِقٍ', 'Darkness'],
          ['ٱلنَّفَّـٰثَـٰتِ', 'Those who blow'],
          ['حَاسِدٍ', 'An envier'],
          ['شَرِّ', 'Evil of'],
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['وَمِن', 'شَرِّ', '______', 'إِذَا', 'وَقَبَ'],
        gapIndex: 2,
        options: ['غَاسِقٍ', 'حَاسِدٍ', 'خَالِقٍ'],
        answer: 'غَاسِقٍ',
      },
      {
        type: 'fill-the-gap',
        ayah: ['وَمِن', 'شَرِّ', '______', 'إِذَا', 'حَسَدَ'],
        gapIndex: 2,
        options: ['حَاسِدٍ', 'غَاسِقٍ', 'ٱلنَّفَّـٰثَـٰتِ'],
        answer: 'حَاسِدٍ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
        ayahRef: '113:5',
        translationWords: ['And from', 'the evil of', 'an envier', 'when he envies'],
      },
      {
        type: 'cold-read',
        ayah: 'أَمْ يَحْسُدُونَ ٱلنَّاسَ عَلَىٰ مَا آتَاهُمُ ٱللَّهُ مِن فَضْلِهِ',
        ayahRef: '4:54',
        words: [
          { ar: 'أَمْ', en: null },
          { ar: 'يَحْسُدُونَ', en: 'they envy' },
          { ar: 'ٱلنَّاسَ', en: null },
          { ar: 'عَلَىٰ', en: 'upon' },
          { ar: 'مَا', en: null },
          { ar: 'آتَاهُمُ', en: null },
          { ar: 'ٱللَّهُ', en: 'Allah' },
          { ar: 'مِن', en: 'from' },
          { ar: 'فَضْلِهِ', en: null },
        ],
      },
    ],
  },

  L34: {
    id: 'L34', unitId: 'unit-9', number: 34,
    name: 'Al-Falaq Mastery', type: 'surah', typeLabel: 'Surah Story',
    newWords: [],
    exercises: [],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 10 — Mankind / An-Nas (4 lessons)
  //
  // Vocabulary taught in this unit:
  //   L35: ٱلنَّاسِ, مَلِكِ, إِلَـٰهِ
  //   L36: ٱلْوَسْوَاسِ, ٱلْخَنَّاسِ
  //   L37: صُدُورِ, ٱلْجِنَّةِ
  //   L38: (surah mastery)
  // ────────────────────────────────────────────────────────────

  L35: {
    id: 'L35', unitId: 'unit-10', number: 35,
    name: 'Lord, King, God', type: 'grammar', typeLabel: 'Grammar',
    newWords: ['ٱلنَّاسِ', 'مَلِكِ', 'إِلَـٰهِ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ',
        ayahRef: '114:1',
        words: ['قُلْ', 'أَعُوذُ', 'بِرَبِّ', 'ٱلنَّاسِ'],
        highlightIndex: 3,
        question: 'What does ٱلنَّاسِ mean?',
        options: ['mankind / the people', 'the daybreak', 'the worlds', 'the jinn'],
        answer: 'mankind / the people',
        detail: 'ٱلنَّاسِ — "mankind, the people." Appears ~240 times in the Quran.',
      },
      {
        type: 'word-spotlight',
        ayah: 'مَلِكِ ٱلنَّاسِ',
        ayahRef: '114:2',
        words: ['مَلِكِ', 'ٱلنَّاسِ'],
        highlightIndex: 0,
        question: 'What does مَلِكِ mean?',
        options: ['King of', 'Lord of', 'God of', 'Creator of'],
        answer: 'King of',
        detail: 'مَلِكِ — "King of." Compare with مَـٰلِكِ (Owner/Master) from Al-Fatiha 1:4.',
      },
      {
        type: 'word-spotlight',
        ayah: 'إِلَـٰهِ ٱلنَّاسِ',
        ayahRef: '114:3',
        words: ['إِلَـٰهِ', 'ٱلنَّاسِ'],
        highlightIndex: 0,
        question: 'What does إِلَـٰهِ mean?',
        options: ['God of', 'Lord of', 'King of', 'Praise of'],
        answer: 'God of',
        detail: 'إِلَـٰهِ — "God of." From the same root as ٱللَّهِ (Allah).',
      },
      {
        type: 'meaning-match',
        pairs: [
          { ar: 'رَبِّ ٱلنَّاسِ', en: 'Lord of mankind' },
          { ar: 'مَلِكِ ٱلنَّاسِ', en: 'King of mankind' },
          { ar: 'إِلَـٰهِ ٱلنَّاسِ', en: 'God of mankind' },
          { ar: 'رَبِّ ٱلْعَـٰلَمِينَ', en: 'Lord of the worlds' },
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['قُلْ', 'أَعُوذُ', 'بِرَبِّ', '______'],
        gapIndex: 3,
        options: ['ٱلنَّاسِ', 'ٱلْفَلَقِ', 'ٱلْعَـٰلَمِينَ'],
        answer: 'ٱلنَّاسِ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'رَبِّ ٱلنَّاسِ · مَلِكِ ٱلنَّاسِ · إِلَـٰهِ ٱلنَّاسِ',
        ayahRef: '114:1-3',
        translationWords: ['Lord of mankind,', 'King of mankind,', 'God of mankind'],
      },
      {
        type: 'ayah-assembly',
        translation: 'Lord of mankind, King of mankind, God of mankind',
        ayahRef: '114:1-3',
        words: ['رَبِّ', 'ٱلنَّاسِ', 'مَلِكِ', 'ٱلنَّاسِ', 'إِلَـٰهِ', 'ٱلنَّاسِ'],
      },
      {
        type: 'cold-read',
        ayah: 'يَـٰأَيُّهَا ٱلنَّاسُ ٱعْبُدُوا رَبَّكُمُ',
        ayahRef: '2:21',
        words: [
          { ar: 'يَـٰأَيُّهَا', en: null },
          { ar: 'ٱلنَّاسُ', en: 'mankind' },
          { ar: 'ٱعْبُدُوا', en: 'worship' },
          { ar: 'رَبَّكُمُ', en: 'your Lord' },
        ],
      },
    ],
  },

  L36: {
    id: 'L36', unitId: 'unit-10', number: 36,
    name: 'The Whisperer', type: 'new-words', typeLabel: 'New Words',
    newWords: ['ٱلْوَسْوَاسِ', 'ٱلْخَنَّاسِ'],
    exercises: [],
  },

  L37: {
    id: 'L37', unitId: 'unit-10', number: 37,
    name: 'In Hearts of Men & Jinn', type: 'new-words', typeLabel: 'New Words',
    newWords: ['صُدُورِ', 'ٱلْجِنَّةِ'],
    exercises: [],
  },

  L38: {
    id: 'L38', unitId: 'unit-10', number: 38,
    name: 'An-Nas Mastery', type: 'surah', typeLabel: 'Surah Story',
    newWords: [],
    exercises: [],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 12 — The Four Conditions (4 lessons)
  //
  // Vocabulary taught in this unit:
  //   L42: ٱلَّذِينَ, آمَنُوا, إِيمَان
  //   L43: عَمِلُوا, ٱلصَّـٰلِحَـٰتِ
  //   L44: تَوَاصَوْا, بِٱلْحَقِّ, بِٱلصَّبْرِ
  //   L45: (surah mastery)
  // ────────────────────────────────────────────────────────────

  L42: {
    id: 'L42', unitId: 'unit-12', number: 42,
    name: 'Those Who Believed', type: 'root', typeLabel: 'Root Deep Dive',
    newWords: ['ٱلَّذِينَ', 'آمَنُوا', 'إِيمَان'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'إِلَّا ٱلَّذِينَ آمَنُوا وَعَمِلُوا ٱلصَّـٰلِحَـٰتِ',
        ayahRef: '103:3',
        words: ['إِلَّا', 'ٱلَّذِينَ', 'آمَنُوا', 'وَعَمِلُوا', 'ٱلصَّـٰلِحَـٰتِ'],
        highlightIndex: 1,
        question: 'What does ٱلَّذِينَ mean?',
        options: ['those who', 'except', 'indeed', 'and not'],
        answer: 'those who',
        detail: 'ٱلَّذِينَ — "those who." A relative pronoun that introduces a description.',
      },
      {
        type: 'word-spotlight',
        ayah: 'إِلَّا ٱلَّذِينَ آمَنُوا وَعَمِلُوا ٱلصَّـٰلِحَـٰتِ',
        ayahRef: '103:3',
        words: ['إِلَّا', 'ٱلَّذِينَ', 'آمَنُوا', 'وَعَمِلُوا', 'ٱلصَّـٰلِحَـٰتِ'],
        highlightIndex: 2,
        question: 'What does آمَنُوا mean?',
        options: ['they believed', 'they worshipped', 'they praised', 'they sought refuge'],
        answer: 'they believed',
        detail: 'آمَنُوا — "they believed." From root ا-م-ن (safety, trust, faith).',
      },
      {
        type: 'root-discovery',
        rootLetters: 'ا-م-ن',
        knownWords: [
          { ar: 'آمَنُوا', en: 'they believed' },
        ],
        newWord: { ar: 'إِيمَان', en: 'faith/belief' },
        question: 'From root ا-م-ن (safety/trust), what might إِيمَان mean?',
        options: ['faith / belief', 'mercy', 'knowledge'],
        answer: 'faith / belief',
        detail: 'إِيمَان — "faith, belief." Same root as أَمَان (safety) and أَمِين (trustworthy).',
      },
      {
        type: 'meaning-match',
        pairs: [
          { ar: 'ٱلَّذِينَ', en: 'those who' },
          { ar: 'آمَنُوا', en: 'they believed' },
          { ar: 'إِيمَان', en: 'faith' },
          { ar: 'إِلَّا', en: 'except' },
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['إِلَّا', '______', 'آمَنُوا'],
        gapIndex: 1,
        options: ['ٱلَّذِينَ', 'إِنَّ', 'بِسْمِ'],
        answer: 'ٱلَّذِينَ',
      },
      {
        type: 'fill-the-gap',
        ayah: ['إِلَّا', 'ٱلَّذِينَ', '______'],
        gapIndex: 2,
        options: ['آمَنُوا', 'ٱلْحَمْدُ', 'أَعُوذُ'],
        answer: 'آمَنُوا',
      },
      {
        type: 'tap-to-translate',
        ayah: 'إِلَّا ٱلَّذِينَ آمَنُوا',
        ayahRef: '103:3',
        translationWords: ['Except', 'those who', 'believed'],
      },
      {
        type: 'cold-read',
        ayah: 'يَـٰأَيُّهَا ٱلَّذِينَ آمَنُوا ٱسْتَعِينُوا بِٱلصَّبْرِ وَٱلصَّلَوٰةِ',
        ayahRef: '2:153',
        words: [
          { ar: 'يَـٰأَيُّهَا', en: null },
          { ar: 'ٱلَّذِينَ', en: 'those who' },
          { ar: 'آمَنُوا', en: 'believed' },
          { ar: 'ٱسْتَعِينُوا', en: null },
          { ar: 'بِٱلصَّبْرِ', en: null },
          { ar: 'وَٱلصَّلَوٰةِ', en: null },
        ],
      },
    ],
  },

  L43: {
    id: 'L43', unitId: 'unit-12', number: 43,
    name: 'Righteous Deeds', type: 'root', typeLabel: 'Root Deep Dive',
    newWords: ['عَمِلُوا', 'ٱلصَّـٰلِحَـٰتِ'],
    exercises: [],
  },

  L44: {
    id: 'L44', unitId: 'unit-12', number: 44,
    name: 'Truth & Patience', type: 'new-words', typeLabel: 'New Words',
    newWords: ['تَوَاصَوْا', 'بِٱلْحَقِّ', 'بِٱلصَّبْرِ'],
    exercises: [],
  },

  L45: {
    id: 'L45', unitId: 'unit-12', number: 45,
    name: 'Al-Asr Mastery', type: 'surah', typeLabel: 'Surah Story',
    newWords: [],
    exercises: [],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 14 — Good & Evil (3 lessons)
  //
  // Vocabulary taught in this unit:
  //   L51: خَيْر, شَرّ
  //   L52: فَمَن, يَعْمَلْ, مِثْقَالَ, ذَرَّةٍ
  //   L53: يَرَهُ, وَمَن
  // ────────────────────────────────────────────────────────────

  L51: {
    id: 'L51', unitId: 'unit-14', number: 51,
    name: 'Good & Evil', type: 'new-words', typeLabel: 'New Words',
    newWords: ['خَيْر', 'شَرّ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ',
        ayahRef: '99:7',
        words: ['فَمَن', 'يَعْمَلْ', 'مِثْقَالَ', 'ذَرَّةٍ', 'خَيْرًا', 'يَرَهُ'],
        highlightIndex: 4,
        question: 'What does خَيْرًا mean?',
        options: ['good', 'evil', 'weight', 'atom'],
        answer: 'good',
        detail: 'خَيْر — "good." One of the most common words in the Quran (~180 times).',
      },
      {
        type: 'word-spotlight',
        ayah: 'وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ',
        ayahRef: '99:8',
        words: ['وَمَن', 'يَعْمَلْ', 'مِثْقَالَ', 'ذَرَّةٍ', 'شَرًّا', 'يَرَهُ'],
        highlightIndex: 4,
        question: 'What does شَرًّا mean?',
        options: ['evil', 'good', 'weight', 'atom'],
        answer: 'evil',
        detail: 'شَرّ — "evil." The opposite of خَيْر. You know this from مِن شَرِّ (from the evil of) in Al-Falaq!',
      },
      {
        type: 'meaning-match',
        pairs: [
          { ar: 'خَيْر', en: 'good' },
          { ar: 'شَرّ', en: 'evil' },
          { ar: 'ٱلرَّحْمَـٰنِ', en: 'Most Gracious' },
          { ar: 'ٱلرَّحِيمِ', en: 'Most Merciful' },
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['فَمَن', 'يَعْمَلْ', 'مِثْقَالَ', 'ذَرَّةٍ', '______', 'يَرَهُ'],
        gapIndex: 4,
        options: ['خَيْرًا', 'شَرًّا', 'ٱللَّهِ'],
        answer: 'خَيْرًا',
      },
      {
        type: 'fill-the-gap',
        ayah: ['وَمَن', 'يَعْمَلْ', 'مِثْقَالَ', 'ذَرَّةٍ', '______', 'يَرَهُ'],
        gapIndex: 4,
        options: ['شَرًّا', 'خَيْرًا', 'ٱللَّهِ'],
        answer: 'شَرًّا',
      },
      {
        type: 'transform-predict',
        given: { ar: 'خَيْرًا', en: 'good' },
        instruction: 'Replace خَيْرًا with its opposite',
        result: { ar: 'شَرًّا' },
        question: '99:7 says "an atom\'s weight of good." 99:8 changes it to…?',
        options: ['an atom\'s weight of evil', 'an atom\'s weight of mercy', 'an atom\'s weight of praise'],
        answer: 'an atom\'s weight of evil',
      },
      {
        type: 'cold-read',
        ayah: 'وَٱللَّهُ يَعْلَمُ ٱلْمُفْسِدَ مِنَ ٱلْمُصْلِحِ',
        ayahRef: '2:220',
        words: [
          { ar: 'وَٱللَّهُ', en: 'and Allah' },
          { ar: 'يَعْلَمُ', en: null },
          { ar: 'ٱلْمُفْسِدَ', en: null },
          { ar: 'مِنَ', en: 'from' },
          { ar: 'ٱلْمُصْلِحِ', en: null },
        ],
      },
    ],
  },

  L52: {
    id: 'L52', unitId: 'unit-14', number: 52,
    name: "An Atom's Weight", type: 'new-words', typeLabel: 'New Words',
    newWords: ['فَمَن', 'يَعْمَلْ', 'مِثْقَالَ', 'ذَرَّةٍ'],
    exercises: [],
  },

  L53: {
    id: 'L53', unitId: 'unit-14', number: 53,
    name: 'He Will See It', type: 'new-words', typeLabel: 'New Words',
    newWords: ['يَرَهُ', 'وَمَن'],
    exercises: [],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 16 — Read! / Al-Alaq (4 lessons)
  //
  // Vocabulary taught in this unit:
  //   L59: ٱقْرَأْ, خَلَقَ
  //   L60: عَلَقٍ
  //   L61: ٱلْقَلَمِ, عَلَّمَ
  //   L62: أَرْض, سَمَاء, مَاء
  // ────────────────────────────────────────────────────────────

  L59: {
    id: 'L59', unitId: 'unit-16', number: 59,
    name: 'Read! He Created', type: 'root', typeLabel: 'Root Deep Dive',
    newWords: ['ٱقْرَأْ', 'خَلَقَ'],
    exercises: [
      {
        type: 'word-spotlight',
        ayah: 'ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ',
        ayahRef: '96:1',
        words: ['ٱقْرَأْ', 'بِٱسْمِ', 'رَبِّكَ', 'ٱلَّذِى', 'خَلَقَ'],
        highlightIndex: 0,
        question: 'The very first word revealed. What does ٱقْرَأْ mean?',
        options: ['Read! / Recite!', 'Say!', 'Write!', 'Listen!'],
        answer: 'Read! / Recite!',
        detail: 'ٱقْرَأْ — "Read!" or "Recite!" The first word revealed to Prophet Muhammad ﷺ. Root: ق-ر-أ.',
      },
      {
        type: 'word-spotlight',
        ayah: 'ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ',
        ayahRef: '96:1',
        words: ['ٱقْرَأْ', 'بِٱسْمِ', 'رَبِّكَ', 'ٱلَّذِى', 'خَلَقَ'],
        highlightIndex: 4,
        question: 'What does خَلَقَ mean?',
        options: ['He created', 'He said', 'He wrote', 'He knew'],
        answer: 'He created',
        detail: 'خَلَقَ — "He created." Root: خ-ل-ق. You saw شَرِّ مَا خَلَقَ (evil of what He created) in Al-Falaq!',
      },
      {
        type: 'root-discovery',
        rootLetters: 'خ-ل-ق',
        knownWords: [
          { ar: 'خَلَقَ', en: 'He created' },
        ],
        newWord: { ar: 'ٱلْخَالِقُ', en: 'The Creator' },
        question: 'From root خ-ل-ق (creation), what might ٱلْخَالِقُ mean?',
        options: ['The Creator', 'The Knower', 'The Merciful'],
        answer: 'The Creator',
        detail: 'ٱلْخَالِقُ — "The Creator." One of the Names of Allah you learned in Unit 15!',
      },
      {
        type: 'meaning-match',
        pairs: [
          { ar: 'ٱقْرَأْ', en: 'Read! / Recite!' },
          { ar: 'خَلَقَ', en: 'He created' },
          { ar: 'ٱلْخَالِقُ', en: 'The Creator' },
          { ar: 'قُلْ', en: 'Say!' },
        ],
      },
      {
        type: 'fill-the-gap',
        ayah: ['______', 'بِٱسْمِ', 'رَبِّكَ', 'ٱلَّذِى', 'خَلَقَ'],
        gapIndex: 0,
        options: ['ٱقْرَأْ', 'قُلْ', 'أَعُوذُ'],
        answer: 'ٱقْرَأْ',
      },
      {
        type: 'fill-the-gap',
        ayah: ['ٱقْرَأْ', 'بِٱسْمِ', 'رَبِّكَ', 'ٱلَّذِى', '______'],
        gapIndex: 4,
        options: ['خَلَقَ', 'عَلَّمَ', 'سَمِعَ'],
        answer: 'خَلَقَ',
      },
      {
        type: 'tap-to-translate',
        ayah: 'ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ',
        ayahRef: '96:1',
        translationWords: ['Read!', 'In the name of', 'your Lord', 'who', 'created'],
      },
      {
        type: 'cold-read',
        ayah: 'خَلَقَ ٱلْإِنسَـٰنَ مِنْ عَلَقٍ',
        ayahRef: '96:2',
        words: [
          { ar: 'خَلَقَ', en: 'He created' },
          { ar: 'ٱلْإِنسَـٰنَ', en: 'mankind' },
          { ar: 'مِنْ', en: 'from' },
          { ar: 'عَلَقٍ', en: null },
        ],
      },
    ],
  },

  L60: {
    id: 'L60', unitId: 'unit-16', number: 60,
    name: 'From a Clot', type: 'new-words', typeLabel: 'New Words',
    newWords: ['عَلَقٍ'],
    exercises: [],
  },

  L61: {
    id: 'L61', unitId: 'unit-16', number: 61,
    name: 'Taught by the Pen', type: 'root', typeLabel: 'Root Deep Dive',
    newWords: ['ٱلْقَلَمِ', 'عَلَّمَ'],
    exercises: [],
  },

  L62: {
    id: 'L62', unitId: 'unit-16', number: 62,
    name: 'Earth, Sky, Water', type: 'new-words', typeLabel: 'New Words',
    newWords: ['أَرْض', 'سَمَاء', 'مَاء'],
    exercises: [],
  },

  // ────────────────────────────────────────────────────────────
  // UNIT 17 — Grand Mastery (3 lessons)
  //
  // No new vocabulary — this is all review and cold reads
  // ────────────────────────────────────────────────────────────

  L63: {
    id: 'L63', unitId: 'unit-17', number: 63,
    name: 'Root Web', type: 'review', typeLabel: 'Review',
    newWords: [],
    exercises: [
      {
        type: 'root-discovery',
        rootLetters: 'ر-ح-م',
        knownWords: [
          { ar: 'ٱلرَّحْمَـٰنِ', en: 'Most Gracious' },
          { ar: 'ٱلرَّحِيمِ', en: 'Most Merciful' },
          { ar: 'رَحْمَة', en: 'mercy' },
        ],
        newWord: { ar: 'رَحِمَ', en: 'He had mercy' },
        question: 'Root ر-ح-م gave you 3 words. What might رَحِمَ mean?',
        options: ['He had mercy', 'He created', 'He knew'],
        answer: 'He had mercy',
        detail: 'رَحِمَ — the original verb form. From it comes everything: mercy, the Most Gracious, the Most Merciful.',
      },
      {
        type: 'root-discovery',
        rootLetters: 'ع-ل-م',
        knownWords: [
          { ar: 'ٱلْعَلِيمُ', en: 'All-Knowing' },
          { ar: 'عَلَّمَ', en: 'He taught' },
        ],
        newWord: { ar: 'عِلْم', en: 'knowledge' },
        question: 'Root ع-ل-م: All-Knowing + He taught. What is عِلْم?',
        options: ['knowledge', 'worship', 'creation'],
        answer: 'knowledge',
        detail: 'عِلْم — "knowledge." The noun form. You\'ve built a full family: knowing → teaching → knowledge.',
      },
      {
        type: 'meaning-match',
        pairs: [
          { ar: 'خَلَقَ', en: 'He created' },
          { ar: 'عَلَّمَ', en: 'He taught' },
          { ar: 'آمَنُوا', en: 'they believed' },
          { ar: 'سَمِعَ', en: 'He heard' },
        ],
      },
      {
        type: 'meaning-match',
        pairs: [
          { ar: 'ٱلرَّحِيمِ', en: 'Most Merciful' },
          { ar: 'ٱلْعَلِيمُ', en: 'All-Knowing' },
          { ar: 'ٱلْخَالِقُ', en: 'The Creator' },
          { ar: 'ٱلسَّمِيعُ', en: 'All-Hearing' },
        ],
      },
      {
        type: 'root-discovery',
        rootLetters: 'ع-ب-د',
        knownWords: [
          { ar: 'نَعْبُدُ', en: 'we worship' },
          { ar: 'أَعْبُدُ', en: 'I worship' },
          { ar: 'تَعْبُدُونَ', en: 'you (all) worship' },
        ],
        newWord: { ar: 'عِبَادَة', en: 'worship (noun)' },
        question: 'You know 3 verb forms of ع-ب-د. What is عِبَادَة?',
        options: ['worship (noun)', 'servant', 'prayer'],
        answer: 'worship (noun)',
        detail: 'عِبَادَة — "worship" as a noun. The act itself. From the same root as عَبْد (servant).',
      },
      {
        type: 'cold-read',
        ayah: 'إِنَّ ٱللَّهَ هُوَ ٱلرَّزَّاقُ ذُو ٱلْقُوَّةِ ٱلْمَتِينُ',
        ayahRef: '51:58',
        words: [
          { ar: 'إِنَّ', en: 'Indeed' },
          { ar: 'ٱللَّهَ', en: 'Allah' },
          { ar: 'هُوَ', en: 'He' },
          { ar: 'ٱلرَّزَّاقُ', en: null },
          { ar: 'ذُو', en: null },
          { ar: 'ٱلْقُوَّةِ', en: null },
          { ar: 'ٱلْمَتِينُ', en: null },
        ],
      },
      {
        type: 'cold-read',
        ayah: 'رَبَّنَا ٱغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِى أَمْرِنَا',
        ayahRef: '3:147',
        words: [
          { ar: 'رَبَّنَا', en: 'our Lord' },
          { ar: 'ٱغْفِرْ', en: null },
          { ar: 'لَنَا', en: 'for us' },
          { ar: 'ذُنُوبَنَا', en: null },
          { ar: 'وَإِسْرَافَنَا', en: null },
          { ar: 'فِى', en: 'in' },
          { ar: 'أَمْرِنَا', en: null },
        ],
      },
      {
        type: 'cold-read',
        ayah: 'وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ',
        ayahRef: '51:56',
        words: [
          { ar: 'وَمَا', en: 'and not' },
          { ar: 'خَلَقْتُ', en: 'I created' },
          { ar: 'ٱلْجِنَّ', en: 'the jinn' },
          { ar: 'وَٱلْإِنسَ', en: 'and mankind' },
          { ar: 'إِلَّا', en: 'except' },
          { ar: 'لِيَعْبُدُونِ', en: 'to worship Me' },
        ],
      },
    ],
  },

  L64: {
    id: 'L64', unitId: 'unit-17', number: 64,
    name: 'Cold Read Challenge', type: 'review', typeLabel: 'Review',
    newWords: [],
    exercises: [],
  },

  L65: {
    id: 'L65', unitId: 'unit-17', number: 65,
    name: 'Complete Review', type: 'surah', typeLabel: 'Surah Story',
    newWords: [],
    exercises: [],
  },
};
