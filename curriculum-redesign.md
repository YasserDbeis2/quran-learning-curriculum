# Quran Learning Curriculum — Redesign

## The Core Problem

The Quranle curriculum provides good **content** (126 words, 62 roots, 6 surahs) but every lesson plays identically: intro → flashcard → translate the ayah. 183 lessons, same 3 beats.

This redesign keeps the same vocabulary and ayah data but completely rethinks:
1. How lessons are structured (varied exercise types)
2. How progression works (skill-based, not just sequential)
3. How old words stay alive (spaced reinforcement)
4. How understanding is tested (transfer to unseen text)

---

## Part 1: Exercise Types

Instead of "intro / practice / master", lessons draw from a pool of **12 exercise types**, grouped by what cognitive skill they train:

### Recognition (passive recall)

**1. Word Spotlight**
- Ayah audio plays. One word pulses/highlights.
- 4 English options appear. Tap the correct meaning.
- Fast, low-stakes. Good for early exposure.
- *Uses: anchor ayah audio + vocab translation*

**2. Meaning Match**
- 4 Arabic words on left, 4 English meanings on right (shuffled).
- Connect pairs by tapping.
- Good for batching 3-4 words in one exercise.
- *Uses: vocab arabic + translation*

**3. Listen & Pick**
- Audio of a single word plays (no Arabic text shown).
- 4 Arabic text options appear. Tap the one you heard.
- Trains: connecting sound → script.
- *Uses: vocab audio + arabic text*

### Recall (active production)

**4. Tap to Translate**
- Arabic ayah displayed at top.
- English word bank (shuffled) at bottom.
- Tap words in order to build the translation.
- Key: forces you to process each Arabic word sequentially.
- *Uses: anchor ayah + vocab translations*

**5. Fill the Gap**
- Ayah shown with ONE word replaced by _____.
- 3 Arabic options below. Tap the correct word.
- Tests: can you recall which word belongs in context?
- *Uses: anchor ayah + vocab arabic*

**6. Ayah Assembly**
- English translation shown at top.
- Arabic words (shuffled) at bottom.
- Arrange Arabic words in correct ayah order.
- Tests: word order + reading comprehension simultaneously.
- *Uses: anchor ayah + vocab arabic*

### Root & Pattern (morphological awareness)

**7. Root Discovery**
- Show 2 known words: رَحْمَة (mercy) + ٱلرَّحْمَـٰنِ (Most Gracious)
- "These share root ر-ح-م"
- Show a NEW word from same root: رَحِيم
- "Can you guess? (a) Merciful (b) Powerful (c) Knowing"
- Trains: predicting meaning from root — the #1 Arabic superpower.
- *Uses: rootFamilies + vocabulary with shared rootLetters*

**8. Word Family Tree**
- Root letters shown at center: ع - ب - د
- Known words branch out: عَبْد (servant), نَعْبُدُ (we worship)
- New word appears dimmed: عِبَادَة → tap to reveal "worship (noun)"
- Builds mental map of root → derived words.
- *Uses: rootFamilies from roots.json*

**9. Pattern Spotter**
- Show 3 words: عَلِيم، سَمِيع، قَدِير
- "What pattern do these share?" → فَعِيل
- Show new word in same pattern: بَصِير
- "This follows فَعِيل from root ب-ص-ر (sight). What might it mean?"
- Trains: morphological pattern recognition.
- *Uses: grammarTip examples + vocabulary*

### Grammar in Action (not as a sidebar)

**10. Transform & Predict**
- Given: رَبُّنَا = "our Lord"
- Action: "Swap ـنَا for ـهُمْ"
- Answer: رَبُّهُمْ = ? → "their Lord"
- Works for: pronouns, definite article, negation, emphasis particles.
- Trains: grammar as manipulation, not trivia.
- *Uses: grammarTip + vocabulary*

**11. Parallel Split**
- Two similar ayahs side by side (e.g., 99:7 and 99:8)
- Identical words greyed out. Different word(s) highlighted.
- "What changes?" خَيْرًا → شَرًّا (good → evil)
- "How does the meaning change?"
- Trains: comprehension through comparison.
- *Uses: anchor ayahs that form pairs*

### Comprehension (the real test)

**12. Cold Read**
- An ayah the user has NEVER studied appears.
- Words they know are highlighted in blue. Unknown words in grey.
- "How much can you understand? Tap known words for their meanings."
- Then: full translation revealed. "You understood 5/8 words!"
- Trains: transfer. This is the lesson type that proves learning works.
- *Uses: any Quran ayah containing previously learned vocabulary*

---

## Part 2: Lesson Patterns

Each "step" in the curriculum generates ONE lesson of ~12 exercises (~3-5 min). But the exercise MIX varies based on what the step is teaching:

### Pattern A: "New Words" Lesson
*For steps introducing 2-3 new vocabulary words*

```
Exercise Flow (12 exercises):
1. Word Spotlight        — hear word 1 in ayah context
2. Word Spotlight        — hear word 2 in ayah context
3. Meaning Match         — match both new words + 2 review words
4. Fill the Gap          — word 1 in its anchor ayah
5. Fill the Gap          — word 2 in its anchor ayah
6. Listen & Pick         — audio of word 1, pick Arabic
7. Root Discovery        — if words have roots, guess a related word
8. Tap to Translate      — translate the anchor ayah (guided)
9. Meaning Match         — new words + 2 different review words
10. Fill the Gap         — randomized, either word
11. Ayah Assembly        — arrange the anchor ayah
12. Cold Read            — new ayah containing one of the words
```

### Pattern B: "Grammar Unlock" Lesson
*For steps focused on a grammar concept (particles, pronouns, negation, emphasis)*

```
Exercise Flow (12 exercises):
1. Word Spotlight        — hear the grammar element in ayah
2. Transform & Predict   — apply the rule (e.g., add ال, swap pronoun)
3. Transform & Predict   — apply again with different word
4. Meaning Match         — match transformed forms
5. Fill the Gap          — which particle/pronoun fits?
6. Transform & Predict   — now reverse (given result, what was original?)
7. Parallel Split        — compare ayah with/without the grammar element
8. Tap to Translate      — translate ayah using the grammar rule
9. Fill the Gap          — harder, more options
10. Transform & Predict  — combine with a different word
11. Ayah Assembly        — arrange ayah with grammar element
12. Cold Read            — new ayah, spot the grammar pattern you learned
```

### Pattern C: "Root Deep Dive" Lesson
*For steps exploring a root family (ر-ح-م, ع-ب-د, خ-ل-ق)*

```
Exercise Flow (12 exercises):
1. Word Spotlight        — hear word form 1 in ayah
2. Word Spotlight        — hear word form 2 in ayah
3. Root Discovery        — given 2 known forms, guess 3rd
4. Word Family Tree      — build the root map
5. Meaning Match         — match all forms of this root
6. Pattern Spotter       — if applicable (فعيل, فاعل, etc.)
7. Fill the Gap          — which form fits this ayah?
8. Root Discovery        — another new form from same root
9. Tap to Translate      — ayah with multiple words from this root
10. Parallel Split       — compare ayahs using different forms of same root
11. Ayah Assembly        — arrange ayah
12. Cold Read            — unseen ayah with a word from this root
```

### Pattern D: "Surah Story" Lesson (Milestone)
*For mastery steps — putting a whole surah together*

```
Exercise Flow (15 exercises, longer):
1. Listen to full surah recitation (no exercises, just experience)
2. Tap to Translate      — ayah 1
3. Fill the Gap          — ayah 1, key word
4. Tap to Translate      — ayah 2
5. Parallel Split        — compare ayah patterns within the surah
6. Tap to Translate      — ayah 3
7. Ayah Assembly         — hardest ayah
8. Root Discovery        — connect roots across the surah
9. Fill the Gap          — random ayah, harder
10. Tap to Translate     — another ayah
11. Fill the Gap         — another gap
12. Ayah Assembly        — full surah (arrange all ayahs in order)
13. Cold Read            — similar ayah from DIFFERENT surah
14. Cold Read            — another unseen ayah
15. Listen again — now with understanding
```

### Pattern E: "Review Remix" Lesson
*Triggered by spaced repetition — reviews old words in new combinations*

```
Exercise Flow (12 exercises):
1. Listen & Pick         — old word, audio only
2. Meaning Match         — 4 words from different past units
3. Fill the Gap          — old word in a NEW ayah you haven't seen
4. Root Discovery        — connect words across units by root
5. Transform & Predict   — apply grammar from an old unit
6. Fill the Gap          — another old word, new context
7. Pattern Spotter       — spot pattern across words from different units
8. Parallel Split        — two ayahs from different surahs, shared vocab
9. Cold Read             — new ayah, how many words do you know?
10. Meaning Match        — mix of old + recently learned
11. Ayah Assembly        — assemble an ayah using words from 3+ units
12. Cold Read            — another new ayah
```

---

## Part 3: Redesigned Curriculum Path

Reorganized to maximize variety and build skills progressively.

### Phase 1: Al-Fatiha Journey (Units 1-6)

**Unit 1: "Bismillah"** — 3 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 1 | In the Name | A (New Words) | بِسْمِ، ٱللَّهِ | First exposure, audio-heavy |
| 2 | The Root of Mercy | C (Root) | ٱلرَّحْمَـٰنِ، ٱلرَّحِيمِ، رَحْمَة | Root ر-ح-م family |
| 3 | "The" in Arabic | B (Grammar) | ٱلْ | Definite article — transform & predict |

**Unit 2: "All Praise"** — 4 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 4 | Praise to Allah | A (New Words) | ٱلْحَمْدُ، لِلَّهِ | + review بِسْمِ ٱللَّهِ |
| 5 | Lord of the Worlds | A (New Words) | رَبِّ، ٱلْعَـٰلَمِينَ | + review ٱلرَّحْمَـٰنِ |
| 6 | Master of the Day | A (New Words) | مَـٰلِكِ، يَوْمِ، ٱلدِّينِ | ayah 1:4 |
| 7 | Root of Praise | C (Root) | حَمِيد | Root ح-م-د: ٱلْحَمْدُ → حَمِيد |

**Unit 3: "You Alone"** — 3 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 8 | You Alone We Worship | B (Grammar) | إِيَّاكَ، نَعْبُدُ، نَسْتَعِينُ | Emphasis/fronting grammar |
| 9 | Guide Us | A (New Words) | ٱهْدِنَا، ٱلصِّرَٰطَ، ٱلْمُسْتَقِيمَ | ayah 1:6 |
| 10 | Those You Blessed | A (New Words) | أَنْعَمْتَ، عَلَيْهِمْ | ayah 1:7 first half |

**Unit 4: "The Complete Fatiha"** — 3 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 11 | Not Those Who Strayed | A (New Words) | غَيْرِ، ٱلْمَغْضُوبِ، وَلَا، ٱلضَّآلِّينَ | ayah 1:7 second half |
| 12 | The Full Picture | A (New Words) | صِرَٰطَ، ٱلَّذِينَ | connecting words |
| 13 | **Al-Fatiha Mastery** | **D (Surah Story)** | — | Full surah, milestone! |

> **Checkpoint Test after Unit 4** — gate to Phase 2

**Unit 5: "Connectors"** — 4 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 14 | In, On, Towards | B (Grammar) | فِي، عَلَىٰ، إِلَىٰ | Particles as sentence builders |
| 15 | From & About | B (Grammar) | مِن، عَن | Source/separation particles |
| 16 | Attached Particles | B (Grammar) | بِ، لِ | Particles that attach to words |
| 17 | The Connector | B (Grammar) | وَ | + Review Remix of all 8 particles |

**Unit 6: "Who's Speaking?"** — 4 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 18 | He, She, They | B (Grammar) | هُوَ، هِيَ، هُمْ | Independent pronouns |
| 19 | You, I, We | B (Grammar) | أَنتَ، أَنَا، نَحْنُ | + review إِيَّاكَ |
| 20 | Attached: His & Their | B (Grammar) | ـهُ، ـهُمْ | Transform & Predict heavy |
| 21 | Attached: Our & Your | B (Grammar) | ـنَا، ـكَ | + review عَلَيْهِمْ, ٱهْدِنَا |

### Phase 2: Surahs You Know by Heart (Units 7-12)

**Unit 7: "Your Salah"** — 4 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 22 | Allahu Akbar | A (New Words) | اللَّهُ أَكْبَرُ، سُبْحَانَ | Position-based (standing) |
| 23 | In Ruku & Sujud | A (New Words) | رَبِّيَ، ٱلْعَظِيمِ، ٱلْأَعْلَى | Parallel Split: ruku vs sujud |
| 24 | Rising & Closing | A (New Words) | سَمِعَ، ٱلسَّلَامُ عَلَيْكُمْ، وَرَحْمَةُ ٱللَّهِ | Transform: عَلَيْكُمْ → عَلَيْهِمْ |
| 25 | **Your Full Salah** | **D (Surah Story)** | — | Walk through rakat, milestone |

**Unit 8: "Say: He is Allah, One"** — 4 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 26 | Say! | C (Root) | قُلْ، هُوَ، أَحَدٌ | Root ق-و-ل + command form grammar |
| 27 | The Eternal Refuge | A (New Words) | ٱلصَّمَدُ | Rare word — frequency context |
| 28 | Neither Begets | C (Root) | لَمْ يَلِدْ، لَمْ يُولَدْ | Root و-ل-د active vs passive |
| 29 | None Like Him | A (New Words) | لَمْ يَكُن، كُفُوًا | + negation preview |
| 30 | **Al-Ikhlas Mastery** | **D (Surah Story)** | — | Full surah, milestone |

**Unit 9: "I Seek Refuge" (Al-Falaq)** — 4 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 31 | Seeking Refuge | B (Grammar) | أَعُوذُ، بِرَبِّ، ٱلْفَلَقِ | أَعُوذُ بِ pattern |
| 32 | Evil of Creation | C (Root) | شَرِّ، مَا خَلَقَ | Root خ-ل-ق callback to Unit 8 |
| 33 | Darkness, Blowers, Enviers | A (New Words) | غَاسِقٍ، ٱلنَّفَّـٰثَـٰتِ، حَاسِدٍ | 4 evils enumerated |
| 34 | **Al-Falaq Mastery** | **D (Surah Story)** | — | Full surah, milestone |

> **Checkpoint Test after Unit 9** — gate to Phase 3

**Unit 10: "Mankind" (An-Nas)** — 4 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 35 | Lord, King, God | B (Grammar) | ٱلنَّاسِ، مَلِكِ، إِلَـٰهِ | Three titles — Parallel Split |
| 36 | The Whisperer | A (New Words) | ٱلْوَسْوَاسِ، ٱلْخَنَّاسِ | Onomatopoeia, vivid imagery |
| 37 | In Hearts of Men & Jinn | A (New Words) | صُدُورِ، ٱلْجِنَّةِ، دِينُكُمْ | + pronoun review ـكُمْ |
| 38 | **An-Nas Mastery** | **D (Surah Story)** | — | Full surah, milestone |

**Unit 11: "By Time" (Al-Asr)** — 3 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 39 | The Oath | A (New Words) | وَٱلْعَصْرِ | Shortest lesson — وَ particle callback |
| 40 | Mankind is in Loss | B (Grammar) | إِنَّ، ٱلْإِنسَـٰنَ، لَفِى، خُسْرٍ | Double emphasis إِنَّ + لَ |
| 41 | Except... | A (New Words) | إِلَّا | Exception word — cliffhanger into Unit 12 |

**Unit 12: "The Four Conditions"** — 4 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 42 | Those Who Believed | C (Root) | ٱلَّذِينَ، آمَنُوا، إِيمَان | Root ا-م-ن family |
| 43 | Righteous Deeds | C (Root) | عَمِلُوا، ٱلصَّـٰلِحَـٰتِ | Root ع-م-ل family |
| 44 | Truth & Patience | A (New Words) | تَوَاصَوْا، بِٱلْحَقِّ، بِٱلصَّبْرِ | بِ particle callback |
| 45 | **Al-Asr Mastery** | **D (Surah Story)** | — | Full surah, milestone |

### Phase 3: Going Deeper (Units 13-17)

**Unit 13: "Five Ways to Say No"** — 4 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 46 | لَا and مَا | B (Grammar) | لَا، مَا | General negation + Transform |
| 47 | لَمْ and لَنْ | B (Grammar) | لَمْ، لَنْ | Past vs future negation |
| 48 | لَيْسَ and غَيْرِ | B (Grammar) | لَيْسَ، غَيْرِ | "Is not" + "other than" |
| 49 | I Don't Worship What You Worship | C (Root) | أَعْبُدُ، تَعْبُدُونَ | Root ع-ب-د across verb forms |
| 50 | **Al-Kafirun via Negation** | **D (Surah Story)** | — | Surah 109, milestone |

> **Checkpoint Test after Unit 13**

**Unit 14: "Good & Evil"** — 3 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 51 | Good & Evil | A (New Words) | خَيْر، شَرّ | Opposites — Parallel Split 99:7 vs 99:8 |
| 52 | An Atom's Weight | A (New Words) | فَمَن، يَعْمَلْ، مِثْقَالَ، ذَرَّةٍ | Root ع-م-ل callback |
| 53 | He Will See It | A (New Words) | يَرَهُ، وَمَن | + Parallel Split both ayahs |

**Unit 15: "The Names of Allah"** — 5 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 54 | All-Knowing, All-Powerful | A (New Words) | ٱلْعَلِيمُ، ٱلْقَدِيرُ | Introduce فَعِيل pattern |
| 55 | All-Hearing, All-Seeing | A (New Words) | ٱلسَّمِيعُ، ٱلْبَصِيرُ | Pattern Spotter: 4 فَعِيل words |
| 56 | Holy, Peace, Almighty | A (New Words) | ٱلْقُدُّوسُ، ٱلسَّلَامُ، ٱلْعَزِيزُ | Root callbacks: س-ل-م from salah |
| 57 | Compeller, Supreme, Creator | A (New Words) | ٱلْجَبَّارُ، ٱلْمُتَكَبِّرُ، ٱلْخَالِقُ | Root ك-ب-ر callback to أَكْبَرُ |
| 58 | **Names of Allah in 59:22-24** | **D (Surah Story)** | — | Full passage milestone |

**Unit 16: "Read!" (Al-Alaq)** — 4 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 59 | Read! He Created | C (Root) | ٱقْرَأْ، خَلَقَ | Root خ-ل-ق deep dive |
| 60 | From a Clot | A (New Words) | عَلَقٍ | Rare word, creation imagery |
| 61 | Taught by the Pen | C (Root) | ٱلْقَلَمِ، عَلَّمَ | Root ع-ل-م: عَلِيم → عَلَّمَ → ٱلْعَـٰلَمِينَ |
| 62 | Earth, Sky, Water | A (New Words) | أَرْض، سَمَاء، مَاء | High-frequency nature words |

**Unit 17: "Grand Mastery"** — 3 lessons
| # | Lesson Name | Pattern | New Words | Exercise Focus |
|---|------------|---------|-----------|----------------|
| 63 | Root Web | E (Review Remix) | — | Cross-unit root connections |
| 64 | Cold Read Challenge | E (Review Remix) | — | 8 unseen ayahs, test comprehension |
| 65 | **Complete Review** | **D (Surah Story)** | — | All surahs, final milestone |

---

## Part 4: What Makes Each Lesson Feel Different

The lesson pattern (A/B/C/D/E) determines the exercise mix, but within each pattern, the **content** naturally creates variety:

### Content-Driven Variation

| When the step teaches... | The exercises naturally feel like... |
|---|---|
| Bismillah words | Audio-first — you've heard this 1000x, now SEE the meaning |
| Root families | Detective work — "can you crack the code of this new word?" |
| Particles (فِي، عَلَى) | Lego blocks — snap pieces together to build phrases |
| Pronouns (ـهُ، ـنَا) | Substitution game — swap one piece, everything shifts |
| Salah phrases | Body-position quiz — "you're in sujud, what do you say?" |
| Opposites (خَيْر/شَرّ) | Spot-the-difference — two ayahs, one word changes |
| Allah's Names | Pattern recognition — "what do these all have in common?" |
| Negation (لَا/لَمْ/لَنْ) | Transformation — "negate this sentence, which word do you use?" |
| Surah mastery | Story mode — progressive reveal, building to full comprehension |

### Review Word Injection

Every lesson slots 2-4 review words into Meaning Match and Fill the Gap exercises. Selection uses spaced repetition:

```
Review word selection priority:
1. Words due for review (approaching forgetting curve)
2. Words from the same root family as current lesson
3. Words from the most recent 2 units (recency reinforcement)
4. Random high-frequency words (keeps common words fresh)
```

This means even a "New Words" lesson about Al-Falaq might include:
- A Meaning Match pairing شَرِّ with رَحْمَة (from Unit 1) — opposites!
- A Fill the Gap using رَبِّ in a new ayah (from Unit 2)

**The user never does the same lesson twice** because review words rotate.

---

## Part 5: Cold Read — The Differentiator

This is the exercise type that makes this curriculum actually teach comprehension, not just recognition.

### How Cold Read works:

1. Select an ayah the user has NEVER studied
2. Scan it for words the user has learned
3. Highlight known words (tappable for meaning), grey out unknown
4. Ask: "How much can you understand?"
5. User taps known words, builds partial understanding
6. Full translation revealed: "You understood 7/11 words! (64%)"
7. Unknown words briefly introduced (seeds for future lessons)

### Cold Read ayah selection:

| After completing... | Cold Read pulls from... | Expected comprehension |
|---|---|---|
| Unit 4 (Fatiha) | Other ayahs with ٱللَّهِ، رَبِّ، يَوْمِ | ~20-30% |
| Unit 9 (Al-Falaq) | Short ayahs with particles + known nouns | ~35-45% |
| Unit 12 (Al-Asr) | آمَنُوا وَعَمِلُوا ayahs (very common pattern) | ~50-60% |
| Unit 15 (Names) | Ayahs ending with Name pairs (العزيز الحكيم) | ~55-65% |
| Unit 17 (Grand) | Random ayahs from Juz Amma | ~40-70% |

**This is the metric that matters**: not "can you translate Al-Fatiha" but "what % of a random ayah can you decode?" That number growing is real, visible progress.

---

## Part 6: Lesson Session Flow

A single lesson session (3-5 min, 12-15 exercises):

```
┌─────────────────────────────────────┐
│  Lesson: "Root of Mercy" (Unit 1)   │
│  Pattern C: Root Deep Dive          │
│  Root: ر-ح-م                        │
├─────────────────────────────────────┤
│                                     │
│  Ex 1: Word Spotlight               │  ← Audio of 1:1, ٱلرَّحْمَـٰنِ pulses
│  "What does the highlighted         │     Pick: Most Gracious ✓
│   word mean?"                       │
│                                     │
│  Ex 2: Word Spotlight               │  ← Same ayah, ٱلرَّحِيمِ pulses
│  "What does THIS word mean?"        │     Pick: Most Merciful ✓
│                                     │
│  Ex 3: Root Discovery               │  ← "Both words share root ر-ح-م"
│  "Here's a new word: رَحْمَة"       │     "It means: (a) mercy ✓
│  "Can you guess from the root?"     │      (b) power (c) knowledge"
│                                     │
│  Ex 4: Word Family Tree             │  ← Build the tree:
│  "Root: ر-ح-م"                      │     ر-ح-م → رَحْمَة → ٱلرَّحْمَـٰنِ
│                                     │              → ٱلرَّحِيمِ
│                                     │
│  Ex 5: Meaning Match                │  ← Match 4 pairs:
│  (includes review: بِسْمِ، ٱللَّهِ  │     ٱلرَّحْمَـٰنِ ↔ Most Gracious
│   from previous lesson)             │     ٱلرَّحِيمِ ↔ Most Merciful
│                                     │     بِسْمِ ↔ In the name of
│                                     │     ٱللَّهِ ↔ Allah
│                                     │
│  Ex 6: Fill the Gap                 │  ← بِسْمِ ٱللَّهِ ____ ٱلرَّحِيمِ
│                                     │     (a) ٱلرَّحْمَـٰنِ ✓ (b) رَبِّ (c) يَوْمِ
│                                     │
│  Ex 7: Pattern Spotter              │  ← "ٱلرَّحْمَـٰنِ follows pattern فَعْلَان"
│  (preview of pattern concept)       │     "ٱلرَّحِيمِ follows pattern فَعِيل"
│                                     │     "Both intensify the root meaning"
│                                     │
│  Ex 8: Tap to Translate             │  ← بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
│  "Build the English translation"    │     [In the name of] [Allah]
│                                     │     [the Most Gracious] [the Most Merciful]
│                                     │
│  Ex 9: Listen & Pick                │  ← Audio: "ar-Rahmaan"
│  "Which word did you hear?"         │     Pick Arabic text ✓
│                                     │
│  Ex 10: Ayah Assembly               │  ← Given English, arrange Arabic:
│                                     │     بِسْمِ | ٱللَّهِ | ٱلرَّحْمَـٰنِ | ٱلرَّحِيمِ
│                                     │
│  Ex 11: Fill the Gap                │  ← Different ayah (e.g., 2:163):
│  (new context!)                     │     وَإِلَـٰهُكُمْ إِلَـٰهٌ وَاحِدٌ...
│                                     │     هُوَ ____ ٱلرَّحِيمُ
│                                     │     (a) ٱلرَّحْمَـٰنُ ✓ (b) ٱلْعَلِيمُ
│                                     │
│  Ex 12: Cold Read                   │  ← New ayah (e.g., 19:58):
│  "How much can you understand?"     │     Known: ٱلرَّحْمَـٰنِ (highlighted)
│                                     │     "You knew 1/9 words (11%)"
│                                     │     "You'll learn more soon!"
│                                     │
├─────────────────────────────────────┤
│  ✅ Lesson Complete!                │
│  Words mastered: 3 (رَحْمَة +      │
│   ٱلرَّحْمَـٰنِ + ٱلرَّحِيمِ)       │
│  Root unlocked: ر-ح-م              │
│  Streak: 2 days 🔥                 │
└─────────────────────────────────────┘
```

---

## Part 7: Summary Stats

| Metric | Original | Redesigned |
|--------|----------|------------|
| Total units | 16 | 17 |
| Total lessons | 61 steps × 3 = 183 (same format) | 65 lessons (5 distinct formats) |
| Exercise types per lesson | 1-2 (match + translate) | 6-8 (from pool of 12) |
| Review/reinforcement | None | Every lesson includes 2-4 review words |
| Unseen ayah exposure | Never | Cold Read in every lesson |
| Root system training | Mentioned in tips | Dedicated Root Deep Dive lessons |
| Grammar practice | Sidebar tips | Transform & Predict exercises |
| Milestone celebrations | None | 7 Surah Story milestones |
| Checkpoint gates | None | 3 checkpoint tests |
| Time per lesson | Unclear | ~3-5 min (12-15 exercises) |
| Measurable outcome | "I translated Al-Fatiha" | "I understand X% of random ayahs" |

The same 126 words, same 62 roots, same ayahs — but **how** you encounter them changes every lesson.
