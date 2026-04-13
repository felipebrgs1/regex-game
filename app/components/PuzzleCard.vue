<script setup lang="ts">
import type { Puzzle } from '~/composables/usePuzzles'

const props = defineProps<{
  puzzle: Puzzle
  isSolved: boolean
}>()

const emit = defineEmits<{
  solved: []
}>()

const regexInput = ref('')

const regexError = computed(() => {
  if (!regexInput.value) return null
  try {
    new RegExp(regexInput.value)
    return null
  }
  catch (e: unknown) {
    return (e as Error).message
  }
})

const compiledRegex = computed(() => {
  if (!regexInput.value || regexError.value) return null
  try {
    return new RegExp(`^(?:${regexInput.value})$`)
  }
  catch {
    return null
  }
})

interface WordResult {
  word: string
  expectedMatch: boolean
  actualMatch: boolean
  isCorrect: boolean
}

const matchResults = computed((): WordResult[] => {
  if (!compiledRegex.value) {
    return [
      ...props.puzzle.shouldMatch.map(w => ({ word: w, expectedMatch: true, actualMatch: false, isCorrect: false })),
      ...props.puzzle.shouldNotMatch.map(w => ({ word: w, expectedMatch: false, actualMatch: false, isCorrect: true })),
    ]
  }

  const regex = compiledRegex.value
  const matchResults = props.puzzle.shouldMatch.map(w => ({
    word: w,
    expectedMatch: true,
    actualMatch: regex.test(w),
    isCorrect: regex.test(w) === true,
  }))
  regex.lastIndex = 0
  const noMatchResults = props.puzzle.shouldNotMatch.map(w => ({
    word: w,
    expectedMatch: false,
    actualMatch: regex.test(w),
    isCorrect: regex.test(w) === false,
  }))

  return [...matchResults, ...noMatchResults]
})

const isPuzzleSolved = computed(() => {
  if (!compiledRegex.value) return false
  return matchResults.value.every(r => r.isCorrect)
})

watch(isPuzzleSolved, (val) => {
  if (val) emit('solved')
})

function wordClass(result: WordResult): string {
  if (!result.expectedMatch && !result.actualMatch) {
    return 'bg-mantle text-subtext0 border-surface0/50'
  }
  if (result.isCorrect && result.expectedMatch) {
    return 'bg-green/10 text-green border-green/30 shadow-sm shadow-green/10'
  }
  if (result.isCorrect && !result.expectedMatch) {
    return 'bg-mantle text-subtext0 border-surface0/50 italic opacity-70'
  }
  return 'bg-red/10 text-red border-red/30'
}

function wordIcon(result: WordResult): string {
  if (result.isCorrect && result.expectedMatch) return '✓'
  if (!result.isCorrect && result.actualMatch && !result.expectedMatch) return '✗'
  if (!result.isCorrect && result.expectedMatch && !result.actualMatch) return '✗'
  return '·'
}
</script>

<template>
  <div
    class="card-latte p-8 relative overflow-hidden group/card"
    :class="{ 'ring-4 ring-green/20 ring-inset border-green/40 bg-white/50': isSolved }"
  >
    <!-- Background indicator -->
    <div 
      v-if="isSolved" 
      class="absolute -top-12 -right-12 w-32 h-32 bg-green/10 rounded-full blur-2xl pointer-events-none"
    ></div>

    <div class="flex items-start justify-between mb-2">
      <div class="space-y-1">
        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-rosewater/80">
          PEDIDO #{{ puzzle.id }}
        </span>
        <h2 class="text-2xl font-black text-text tracking-tight group-hover/card:translate-x-1 transition-transform">
          {{ puzzle.titulo }}
        </h2>
      </div>
      <div
        v-if="isSolved"
        class="bg-green/10 text-green px-3 py-1 rounded-full text-xs font-bold border border-green/20 ring-4 ring-green/5"
      >
        Servido ✓
      </div>
    </div>

    <p class="text-subtext1 font-medium mb-8 max-w-xl leading-relaxed">
      {{ puzzle.dica }}
    </p>

    <div class="mb-8">
      <label class="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-subtext0 mb-2">
        <span class="w-1.5 h-1.5 flex-none rounded-sm bg-rosewater"></span>
        Sua Receita Regex
      </label>
      <div class="relative group/input">
        <div class="absolute left-4 top-1/2 -translate-y-1/2 text-rosewater font-black text-lg select-none">/</div>
        <input
          v-model="regexInput"
          type="text"
          :disabled="isSolved"
          spellcheck="false"
          autocomplete="off"
          class="input-latte w-full pl-8 pr-8 py-4 text-base focus:shadow-xl focus:shadow-rosewater/5 transition-all text-text disabled:bg-surface0/10 disabled:text-subtext0 placeholder:italic placeholder:text-subtext0/40"
          :class="{ 'border-red/50 ring-red/10 ring-4': regexError }"
          placeholder="escreva sua regex aqui..."
        />
        <div class="absolute right-4 top-1/2 -translate-y-1/2 text-rosewater font-black text-lg select-none">/</div>
        
        <!-- Animated border -->
        <div class="absolute inset-x-0 -bottom-px h-0.5 bg-gradient-to-r from-transparent via-rosewater to-transparent transition-transform scale-x-0 group-focus-within/input:scale-x-100 duration-500"></div>
      </div>
      
      <div v-if="regexError" class="mt-2.5 flex items-center gap-2 p-3 rounded-lg bg-red/10 border border-red/20">
        <span class="text-red">⚠️</span>
        <p class="text-xs text-red font-bold font-mono">
          {{ regexError }}
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-4">
        <h3 class="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-green">
          <span class="w-4 h-px bg-green/40"></span>
          Ingredientes Aceitos
        </h3>
        <div class="flex flex-wrap gap-2.5">
          <span
            v-for="result in matchResults.filter(r => r.expectedMatch)"
            :key="result.word"
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-bold font-mono transition-all transform hover:scale-105"
            :class="wordClass(result)"
          >
            {{ result.word }}
            <span class="text-[10px] flex items-center justify-center w-4 h-4 rounded-full bg-white/50 border border-current/20">{{ wordIcon(result) }}</span>
          </span>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-red/70">
          <span class="w-4 h-px bg-red/30"></span>
          Não Adicionar
        </h3>
        <div class="flex flex-wrap gap-2.5">
          <span
            v-for="result in matchResults.filter(r => !r.expectedMatch)"
            :key="result.word"
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-bold font-mono transition-all transform hover:scale-105"
            :class="wordClass(result)"
          >
            {{ result.word }}
            <span class="text-[10px] flex items-center justify-center w-4 h-4 rounded-full bg-white/50 border border-current/20">{{ wordIcon(result) }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>