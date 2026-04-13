<script setup lang="ts">

</script>

<template>
  <div class="bg-base from-rosewater/5 via-base to-base selection:bg-rosewater/20 min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]">
    <header class="border-surface0/50 bg-mantle/70 sticky top-0 z-40 border-b backdrop-blur-md transition-all duration-300">
      <div class="mx-auto flex max-w-3xl items-center gap-4 px-6 py-4">
        <div class="from-rosewater to-flamingo shadow-rosewater/20 flex h-10 w-10 transform items-center justify-center rounded-xl bg-gradient-to-tr shadow-lg transition-transform hover:rotate-6">
          <span class="text-xl">☕</span>
        </div>
        <div>
          <h1 class="text-text text-xl leading-tight font-bold tracking-tight">
            Regex <span class="text-rosewater">Café</span>
          </h1>
          <p class="text-subtext0/70 -mt-1 text-[10px] font-bold tracking-[0.2em] uppercase">
            Artisanal Expressions
          </p>
        </div>
        <div class="ml-auto flex items-center gap-4">
          <div class="hidden flex-col items-end sm:flex">
            <span class="text-subtext1 text-[10px] font-bold tracking-widest uppercase">Status</span>
            <span class="text-text flex items-center gap-1.5 text-xs font-medium">
              <span class="bg-green h-1.5 w-1.5 animate-pulse rounded-full"/>
              Pronto para Codar
            </span>
          </div>
        </div>
      </div>
    </header>

    <main class="relative mx-auto max-w-3xl px-6 py-12">
      <!-- Decorative background elements -->
      <div class="bg-peach/5 absolute -top-24 -right-12 -z-10 h-64 w-64 rounded-full blur-3xl"/>
      <div class="bg-blue/5 absolute top-1/2 -left-24 -z-10 h-72 w-72 rounded-full blur-3xl"/>
      
      <slot />
    </main>

    <footer class="border-surface0 bg-mantle border-t py-12">
      <div class="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6">
        <div class="text-rosewater flex items-center gap-2 opacity-60">
          <span class="text-lg">☕</span>
          <div class="h-px w-8 bg-current"/>
          <span class="text-lg">💻</span>
        </div>
        <p class="text-subtext1 max-w-sm text-center text-xs leading-relaxed font-medium">
          Regex Café — Torrando expressões regulares com perfeição desde 2026.
          <br>
          Feito com <span class="text-red">♥</span> para entusiastas de código.
        </p>
      </div>
    </footer>
  </div>
</template>