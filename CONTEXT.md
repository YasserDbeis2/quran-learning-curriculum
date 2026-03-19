# Quran Learning Curriculum — Session Context

This document captures the full conversation context for continuing this work.

## Source Data

The curriculum data comes from https://github.com/Quranle/quranle-curriculum

Raw `curriculum.json` is cached at:
```
~/.claude/projects/-Users-yasser-Documents-Personal-Projects-yawm-app-test-dkhatt/e5d88a32-7a24-43b0-a73b-5527e75f5ef2/tool-results/toolu_01FskTm2x2gZ11DcwwW7Mzn8.txt
```

### What the Quranle curriculum contains
- 4 sections, 16 units, 126 vocabulary words, 62 root families
- Covers 6 complete short surahs: Al-Fatiha (1), Al-Ikhlas (112), Al-Falaq (113), An-Nas (114), Al-Asr (103), Al-Kafirun (109)
- Partial coverage: Al-Alaq 96:1-5, Az-Zalzalah 99:7-8, Al-Hashr 59:22-24, Al-Baqarah 2:3-5, Aal-Imran 3:26, At-Tin 95:6
- Each unit has: vocabulary with frequencies, grammar tips, root families, anchor ayahs

## Coverage Analysis

- ~40 ayahs out of 6,236 = 0.6% of Quran ayahs
- 126 unique vocab words out of ~14,870 = 0.8%
- 62 root families out of ~1,800 = 3.4%
- **Estimated ~50-65% of word occurrences by frequency** (but this is a rough estimate — the particle/pronoun frequencies were estimated, not from the actual corpus. Only content word frequencies are real data from the dataset.)
- The coverage is heavily skewed: particles (وَ, فِي, مِن) account for ~28% alone. Actual meaning-carrying content words are only ~13% of occurrences.
- Just وَ ("and") = 13.4% by itself

## Critique of Original Curriculum

### What works
- Root-based learning is genuinely effective for Arabic
- Anchoring to surahs users already recite (Fatiha, short surahs from salah) creates emotional "aha" moments
- Frequency-first prioritization is smart (Allah 2699x, Rabb 975x before rare words)

### What doesn't work
1. **Repetitive lesson format**: Every lesson is intro → flashcard → translate. Same 3 beats repeated 183 times.
2. **Recognition, not comprehension**: Teaches dictionary entries (خَلَقَ = He created) but not morphology — user won't recognize يَخْلُقُ, خُلِقَ, مَخْلُوق from the same root
3. **126 words is feel-good, not functional**: Open to a random mushaf page after completing this and you're still lost
4. **Grammar is decorative**: Tips like "إِنَّ means indeed" are trivia, not tools for parsing sentences
5. **No transfer to unfamiliar text**: Every "master" lesson is "translate the surah you just studied" — never tests comprehension of NEW ayahs
6. **Doesn't scale past ~100-150 lessons**: Diminishing vocabulary returns (first 50 words = ~40% coverage, next 50 = ~20% more, next 100 = ~8% more), short surahs run out, and real comprehension requires grammar not just vocab

## Redesign (in curriculum-redesign.md)

Keeps the same 126 words and ayah data but restructures into:
- **12 exercise types** (instead of 3) grouped by cognitive skill: Recognition, Recall, Root & Pattern, Grammar in Action, Comprehension
- **5 lesson patterns** (A: New Words, B: Grammar Unlock, C: Root Deep Dive, D: Surah Story milestone, E: Review Remix)
- **65 lessons** across 17 units in 3 phases
- **Cold Read** exercise type: unseen ayahs to test transfer (the key differentiator)
- **Spaced repetition** of review words injected into every lesson

## Open Design Questions

### Tafsir Integration
- User's idea: center lessons around 1-2 tafsir insights each, rooted in actual tafsir
- Consensus: these should come AFTER (or unlock after) the vocabulary lessons
- Three possible approaches discussed:
  1. Vocab first, then tafsir (clean but two passes)
  2. Interleaved (every lesson has a "wow" moment but may overload beginners)
  3. **Vocab lesson → Tafsir unlock** (gamification-friendly: completing vocab exercises unlocks a tafsir insight card as reward) ← preferred

### Scaling Beyond 65 Lessons
- The current approach does NOT scale well past ~100-150 lessons
- Diminishing vocabulary returns, short surahs run out, grammar becomes the real bottleneck
- **Proposed scaling path for Yawm:**
  - Phase 1: This curriculum (~65 lessons, standalone, completable) — "I understand Al-Fatiha and 5 short surahs"
  - Phase 2: Tafsir insight cards for the same surahs — "I understand WHY it says it that way"
  - Phase 3: **Reading Companion** (the real scale) — NOT a standalone course, but tied to whatever the user is reading in the Mushaf tab. "You're reading Al-Kahf? Here are 5 words for this page." Scales infinitely because the content is the Quran itself.

## What This Project Is For

This is for Yawm (a Quran reading app built with React Native/Expo). The app already has a Mushaf reader, daily goals, and a Learn tab. This curriculum work is exploring what the Learn tab's lessons should actually look like.

## Files in This Directory

- `curriculum-redesign.md` — Full redesigned curriculum with exercise types, lesson patterns, unit path, and session flow
- `sample-lessons.md` — 5 detailed exercise-by-exercise lesson walkthroughs (Lesson 6, 20, 32, 40, 50)
- `CONTEXT.md` — This file (handoff context)
