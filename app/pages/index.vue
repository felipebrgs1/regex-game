<script setup lang="ts">
const { puzzles } = usePuzzles()
const { isSolved, markSolved, solvedCount, totalPuzzles, progressPercent } = useProgress()
</script>

<template>
  <NuxtLayout>
    <div class="space-y-12">
      <section class="mx-auto max-w-2xl space-y-4 py-8 text-center">
        <h2 class="text-text text-4xl leading-tight font-extrabold tracking-tight">
          Bem-vindo ao Regex <span class="from-rosewater to-peach bg-gradient-to-r bg-clip-text text-transparent">Café</span> ☕
        </h2>
        <p class="text-subtext1 px-4 text-lg leading-relaxed font-medium">
          Escreva expressões regulares para resolver cada puzzle. Cada sucesso é um grão a mais no seu estoque de conhecimento!
        </p>
      </section>

      <ClientOnly>
        <section class="card-latte group relative overflow-hidden p-6">
          <div class="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
            <span class="block -rotate-12 text-6xl">☕</span>
          </div>
          
          <div class="mb-4 flex items-end justify-between">
            <div class="space-y-1">
              <span class="text-subtext0 text-[10px] font-bold tracking-[0.2em] uppercase">Painel de Preparo</span>
              <h3 class="text-text text-xl font-bold">Seu barista progresso</h3>
            </div>
            <div class="text-right">
              <span class="text-rosewater text-3xl leading-none font-black">
                {{ solvedCount }}<span class="text-subtext1 text-lg">/{{ totalPuzzles }}</span>
              </span>
            </div>
          </div>

          <div class="bg-base/50 border-surface0/30 h-4 w-full overflow-hidden rounded-2xl border p-1">
            <div
              class="from-rosewater to-flamingo cubic-bezier(0.34, 1.56, 0.64, 1) h-full rounded-full bg-gradient-to-r transition-all duration-1000"
              :style="{ width: `${progressPercent}%` }"
            >
              <div class="h-full w-full animate-[progress_3s_linear_infinite] bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:24px_24px]"/>
            </div>
          </div>

          <div
            v-if="solvedCount === totalPuzzles"
            class="bg-green/10 border-green/20 mt-6 rounded-xl border p-4 text-center"
          >
            <p class="text-green flex items-center justify-center gap-2 text-lg font-bold">
              🏆 Master Barista! <span class="text-xs font-medium">Você completou todos os pedidos.</span>
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
          <div class="border-surface0/50 w-full border-t"/>
        </div>
        <div class="relative flex justify-center">
          <span class="bg-base text-subtext1 px-6 text-sm font-bold tracking-[0.3em] uppercase">O Menu de Hoje</span>
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