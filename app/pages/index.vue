<script setup lang="ts">
const { puzzles } = usePuzzles()
const { isSolved, markSolved, solvedCount, totalPuzzles, progressPercent } = useProgress()

useSeoMeta({
  title: "Regex Café — Learn Regex by Playing",
  description:
    "Learn regular expressions by solving interactive puzzles. A fun, hands-on way to master regex patterns.",
  ogTitle: "Regex Café — Learn Regex by Playing",
  ogDescription:
    "Learn regular expressions by solving interactive puzzles. A fun, hands-on way to master regex patterns.",
  ogUrl: "https://regex.cafe",
  twitterCard: "summary",
  twitterTitle: "Regex Café — Learn Regex by Playing",
  twitterDescription:
    "Learn regular expressions by solving interactive puzzles. A fun, hands-on way to master regex patterns.",
})
</script>

<template>
  <NuxtLayout>
    <div class="space-y-12">
      <ClientOnly>
        <NuxtLink
          to="/tutorial"
          class="card-latte group flex items-center gap-6 p-6 transition-all hover:shadow-latte-lg"
        >
          <div
            class="from-peach to-yellow flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-linear-to-tr shadow-lg shadow-peach/20 transition-transform group-hover:scale-110"
          >
            <span class="text-2xl">📖</span>
          </div>
          <div class="space-y-1">
            <span class="text-peach text-[10px] font-bold uppercase tracking-[0.2em]">
              New here?
            </span>
            <h3 class="text-text text-lg font-bold">Start with the Tutorial</h3>
            <p class="text-subtext1 text-sm leading-relaxed">
              Learn the fundamentals of regex before solving the puzzles.
            </p>
          </div>
          <div class="ml-auto text-subtext0 transition-transform group-hover:translate-x-1">→</div>
        </NuxtLink>

        <template #fallback>
          <div class="card-latte animate-pulse p-6">
            <div class="bg-surface1 h-10 w-full rounded" />
          </div>
        </template>
      </ClientOnly>

      <ClientOnly>
        <section class="card-latte group relative overflow-hidden p-6">
          <div
            class="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20"
          >
            <span class="block -rotate-12 text-6xl">☕</span>
          </div>

          <div class="mb-4 flex items-end justify-between">
            <div class="space-y-1">
              <span class="text-subtext0 text-[10px] font-bold tracking-[0.2em] uppercase"
                >Brew Progress</span
              >
              <h3 class="text-text text-xl font-bold">Your barista journey</h3>
            </div>
            <div class="text-right">
              <span class="text-rosewater text-3xl leading-none font-black">
                {{ solvedCount }}<span class="text-subtext1 text-lg">/{{ totalPuzzles }}</span>
              </span>
            </div>
          </div>

          <div
            class="bg-base/50 border-surface0/30 h-4 w-full overflow-hidden rounded-2xl border p-1"
          >
            <div
              class="from-rosewater to-flamingo cubic-bezier(0.34, 1.56, 0.64, 1) h-full rounded-full bg-linear-to-r transition-all duration-1000"
              :style="{ width: `${progressPercent}%` }"
            >
              <div
                class="h-full w-full animate-[progress_3s_linear_infinite] bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-size-[24px_24px]"
              />
            </div>
          </div>

          <div
            v-if="solvedCount === totalPuzzles"
            class="bg-green/10 border-green/20 mt-6 rounded-xl border p-4 text-center"
          >
            <p class="text-green flex items-center justify-center gap-2 text-lg font-bold">
              🏆 Master Barista!
              <span class="text-xs font-medium">You completed all orders.</span>
            </p>
          </div>
        </section>

        <template #fallback>
          <div class="card-latte border-surface0 animate-pulse p-6">
            <div class="bg-surface1 mb-4 h-4 w-32 rounded" />
            <div class="bg-surface1 h-4 w-full rounded-full" />
          </div>
        </template>
      </ClientOnly>

      <div class="relative py-8">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="border-surface0/50 w-full border-t" />
        </div>
        <div class="relative flex justify-center">
          <span class="bg-base text-subtext1 px-6 text-sm font-bold tracking-[0.3em] uppercase"
            >Today's Menu</span
          >
        </div>
      </div>

      <section class="grid grid-cols-1 gap-8">
        <PuzzleCard
          v-for="puzzle in puzzles"
          :key="puzzle.id"
          :puzzle="puzzle"
          :is-solved="isSolved(puzzle.id)"
          @solved="markSolved(puzzle.id)"
        />
      </section>
    </div>
  </NuxtLayout>
</template>
