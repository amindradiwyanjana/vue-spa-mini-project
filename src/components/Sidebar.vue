<script setup lang="ts">
import { Home, Library, Music2 } from 'lucide-vue-next';
defineProps<{ isDarkMode: boolean }>();
</script>

<template>
  <div class="w-56 p-4 flex flex-col h-full overflow-hidden">
    <p class="text-xs font-bold uppercase tracking-widest opacity-40 mb-3 px-2">Menu</p>
    <nav class="space-y-1">
      <div
        class="flex items-center gap-3 p-3 rounded-xl bg-purple-500/10 text-purple-500 text-sm font-semibold cursor-pointer"
      >
        <Home :size="18" />
        <span>Home</span>
      </div>
      <div
        class="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-500/10 text-sm font-medium transition cursor-pointer"
        :class="isDarkMode ? 'text-zinc-300' : 'text-zinc-700'"
      >
        <Library :size="18" />
        <span>Your Library</span>
      </div>
      <div
        class="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-500/10 text-sm font-medium transition cursor-pointer"
        :class="isDarkMode ? 'text-zinc-300' : 'text-zinc-700'"
      >
        <Music2 :size="18" />
        <span>Top Charts</span>
      </div>
    </nav>
  </div>
</template>