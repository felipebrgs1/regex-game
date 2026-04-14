<script setup lang="ts">
useSeoMeta({
  title: "Regex Tutorial — Regex Café",
  description:
    "Learn regex fundamentals step by step: literal characters, metacharacters, anchors, quantifiers, character classes, groups, and escaping.",
  ogTitle: "Regex Tutorial — Regex Café",
  ogDescription:
    "Learn regex fundamentals step by step: literal characters, metacharacters, anchors, quantifiers, character classes, groups, and escaping.",
  ogUrl: "https://regex.cafe/tutorial",
  twitterCard: "summary",
  twitterTitle: "Regex Tutorial — Regex Café",
  twitterDescription:
    "Learn regex fundamentals step by step: literal characters, metacharacters, anchors, quantifiers, character classes, groups, and escaping.",
})

interface TutorialStep {
  id: number
  title: string
  icon: string
  concept: string
  examples: { regex: string; meaning: string }[]
  tip: string
}

const steps: TutorialStep[] = [
  {
    id: 1,
    title: "What is Regex?",
    icon: "☕",
    concept:
      "Regular expressions (regex) are patterns used to search, validate, and manipulate text. Think of it like a recipe: you describe the format of the text you want to find.",
    examples: [],
    tip: "Regex is like a coffee filter — only what matches the pattern gets through!",
  },
  {
    id: 2,
    title: "Literal Characters",
    icon: "🅰️",
    concept:
      'The simplest patterns are literal characters: they match themselves. Writing "cat" matches exactly the word "cat".',
    examples: [
      { regex: "cat", meaning: 'Matches the word "cat"' },
      { regex: "a", meaning: 'Matches the letter "a"' },
    ],
    tip: "Always start simple — write what you want to find literally.",
  },
  {
    id: 3,
    title: "Metacharacters",
    icon: "🔮",
    concept:
      "Metacharacters are special wildcards. The dot (.) matches any character. \\d matches digits, \\w matches letters/numbers/_ and \\s matches whitespace.",
    examples: [
      { regex: ".", meaning: "Any single character" },
      { regex: "\\d", meaning: "A digit (0–9)" },
      { regex: "\\w", meaning: "A letter, number, or _" },
      { regex: "\\s", meaning: "A whitespace character" },
    ],
    tip: "Uppercase versions (\\D, \\W, \\S) do the opposite — they match what is NOT a digit, word, or space.",
  },
  {
    id: 4,
    title: "Anchors",
    icon: "⚓",
    concept:
      "Anchors define position, not characters. ^ marks the start of a string and $ marks the end. Without them, regex matches anywhere in the text.",
    examples: [
      { regex: "^a", meaning: 'Starts with "a"' },
      { regex: "ing$", meaning: 'Ends with "ing"' },
      { regex: "^abc$", meaning: 'Exactly "abc"' },
    ],
    tip: "In Regex Café, puzzles use anchors automatically — your regex must match the entire text!",
  },
  {
    id: 5,
    title: "Quantifiers",
    icon: "🔢",
    concept:
      "Quantifiers define how many times something appears: * (0 or more), + (1 or more), ? (0 or 1), {n} (exactly n), {n,m} (between n and m).",
    examples: [
      { regex: "a*", meaning: 'Zero or more "a"s' },
      { regex: "a+", meaning: 'One or more "a"s' },
      { regex: "a?", meaning: 'Zero or one "a"' },
      { regex: "a{3,5}", meaning: 'Between 3 and 5 "a"s' },
    ],
    tip: "* is greedy — it matches as much as possible. Use with care!",
  },
  {
    id: 6,
    title: "Character Classes",
    icon: "📦",
    concept:
      "Brackets [ ] define a set of accepted characters. [abc] matches a, b, or c. [a-z] matches any lowercase letter. [^abc] matches everything EXCEPT a, b, c.",
    examples: [
      { regex: "[aeiou]", meaning: "Any vowel" },
      { regex: "[a-z]", meaning: "Any lowercase letter" },
      { regex: "[0-9]", meaning: "Any digit (same as \\d)" },
      { regex: "[^0-9]", meaning: "Any non-digit character" },
    ],
    tip: "Inside [ ], most metacharacters lose their special meaning.",
  },
  {
    id: 7,
    title: "Groups & Alternation",
    icon: "🔀",
    concept:
      'Parentheses ( ) create groups. The pipe | works as "or". You can match alternatives within a group.',
    examples: [
      { regex: "(cat|dog)", meaning: 'Matches "cat" or "dog"' },
      { regex: "(ab)+", meaning: '"ab" repeated one or more times' },
      {
        regex: "([a-z])([0-9])",
        meaning: "A lowercase letter followed by a digit",
      },
    ],
    tip: "Groups also capture text for later use — but for now, think of them as organizational boxes.",
  },
  {
    id: 8,
    title: "Escaping Characters",
    icon: "🪄",
    concept:
      "To use a metacharacter literally, escape it with a backslash: \\. matches a literal dot, \\* matches a literal asterisk, \\? matches a literal question mark.",
    examples: [
      { regex: "\\.", meaning: "Matches a literal dot" },
      { regex: "\\?", meaning: "Matches a literal question mark" },
      { regex: "\\+", meaning: "Matches a literal plus sign" },
    ],
    tip: "If you want to match something that looks like regex, try escaping it with \\!",
  },
]

const activeStep = ref(0)

function next() {
  if (activeStep.value < steps.length - 1) activeStep.value++
}

function prev() {
  if (activeStep.value > 0) activeStep.value--
}
</script>

<template>
  <NuxtLayout>
    <div class="space-y-12">
      <section class="mx-auto max-w-2xl space-y-4 py-8 text-center">
        <h2 class="text-text text-4xl leading-tight font-extrabold tracking-tight">
          Tutorial
          <span class="from-peach to-yellow bg-linear-to-r bg-clip-text text-transparent"
            >Basics</span
          >
          📖
        </h2>
        <p class="text-subtext1 px-4 text-lg leading-relaxed font-medium">
          Before brewing your first orders, learn the essential ingredients of regular expressions.
        </p>
      </section>

      <div class="card-latte p-8 space-y-8">
        <div class="flex items-center gap-3 mb-6">
          <button
            v-for="(step, i) in steps"
            :key="step.id"
            class="h-2 flex-1 rounded-full transition-all cursor-pointer border-none"
            :class="i <= activeStep ? 'bg-rosewater' : 'bg-surface1'"
            @click="activeStep = i"
          />
        </div>

        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <span class="text-4xl">{{ steps[activeStep].icon }}</span>
            <div>
              <span class="text-subtext0 text-[10px] font-bold tracking-[0.2em] uppercase"
                >Step {{ steps[activeStep].id }} of {{ steps.length }}</span
              >
              <h3 class="text-text text-2xl font-black tracking-tight">
                {{ steps[activeStep].title }}
              </h3>
            </div>
          </div>

          <p class="text-subtext1 leading-relaxed font-medium">
            {{ steps[activeStep].concept }}
          </p>

          <div v-if="steps[activeStep].examples.length" class="space-y-3">
            <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-rosewater/80">
              Examples
            </h4>
            <div class="grid gap-2">
              <div
                v-for="ex in steps[activeStep].examples"
                :key="ex.regex"
                class="flex items-center gap-4 bg-base/60 border border-surface0/50 rounded-xl px-4 py-3"
              >
                <code
                  class="bg-mantle border border-surface0 text-rosewater rounded-lg px-3 py-1 font-mono text-sm font-bold"
                  >/{{ ex.regex }}/</code
                >
                <span class="text-subtext1 text-sm font-medium">{{ ex.meaning }}</span>
              </div>
            </div>
          </div>

          <div class="bg-peach/5 border-peach/20 rounded-xl border p-4 flex items-start gap-3">
            <span class="text-lg mt-0.5">💡</span>
            <p class="text-subtext1 text-sm leading-relaxed font-medium">
              {{ steps[activeStep].tip }}
            </p>
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-surface0/50">
          <button
            :disabled="activeStep === 0"
            class="btn-coffee bg-surface1 text-text hover:bg-surface2 disabled:cursor-not-allowed"
            @click="prev"
          >
            ← Previous
          </button>

          <NuxtLink
            v-if="activeStep === steps.length - 1"
            to="/"
            class="btn-coffee from-rosewater to-flamingo bg-linear-to-r text-mantle font-bold"
          >
            Go to Puzzles 🧩
          </NuxtLink>
          <button
            v-else
            class="btn-coffee from-rosewater to-flamingo bg-linear-to-r text-mantle font-bold"
            @click="next"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
