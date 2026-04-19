<script setup lang="ts">
import { Home, Library, Music2 } from 'lucide-vue-next';
defineProps<{ isDarkMode: boolean }>();
</script>

<template>
  <div class="w-[220px] p-4 flex flex-col h-full overflow-hidden">
    <nav class="space-y-1">
      <div class="flex items-center gap-3 p-2.5 rounded-lg bg-purple-500/10 text-purple-500 text-sm font-semibold cursor-pointer">
        <Home :size="18" /> Home
      </div>
      <div class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-zinc-500/10 text-sm font-medium transition cursor-pointer">
        <Library :size="18" /> Your Library
      </div>
      <div class="flex items-center gap-3 p-2.5 rounded-lg hover:bg-zinc-500/10 text-sm font-medium transition cursor-pointer">
        <Music2 :size="18" /> Top Charts
      </div>
    </nav>
  </div>
</template>