<script setup lang="ts">
import { Home, Library, X } from 'lucide-vue-next';
defineProps(['isDarkMode']);
const emit = defineEmits(['close']);
</script>

<template>
  <aside 
    class="w-64 h-full p-6 flex flex-col gap-6"
    :class="isDarkMode ? 'bg-zinc-900 border-r border-zinc-800' : 'bg-white border-r border-gray-200'"
  >
    <div class="flex justify-between items-center">
      <span class="font-bold uppercase tracking-widest text-sm opacity-60">Menu</span>
      <button @click="emit('close')" class="p-1 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded">
        <X :size="20" />
      </button>
    </div>

    <nav class="flex flex-col gap-4">
      <div class="flex items-center gap-3 font-semibold cursor-pointer">
        <Home :size="20" /> Home
      </div>
      <div class="flex items-center gap-3 font-semibold cursor-pointer">
        <Library :size="20" /> Your Library
      </div>
    </nav>
  </aside>
</template>