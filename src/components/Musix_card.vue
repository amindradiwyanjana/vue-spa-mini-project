<script setup lang="ts">
import { Play } from 'lucide-vue-next';
import type { Song } from '../types/Music';
defineProps<{ song: Song; isDarkMode: boolean }>();
</script>

<template>
  <div 
    v-if="song"
    class="group relative p-3 rounded-2xl border transition-all duration-500 cursor-pointer active:scale-95 flex flex-col h-full"
    :class="isDarkMode 
      ? 'bg-zinc-900/40 border-zinc-800/50 hover:bg-zinc-800 hover:shadow-2xl' 
      : 'bg-white border-gray-100 hover:shadow-xl'"
  >
    <div class="relative overflow-hidden rounded-xl aspect-square mb-3 shadow-md">
      <img :src="song.image" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1" />
      <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <div class="bg-purple-600 p-4 rounded-full text-white shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <Play :size="24" fill="currentColor" />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-1 px-1">
      <h3 class="font-bold text-[13px] truncate leading-tight tracking-tight" :class="isDarkMode ? 'text-zinc-100' : 'text-zinc-900'">{{ song.title }}</h3>
      <p class="text-[11px] font-medium opacity-50 truncate uppercase tracking-widest">{{ song.artist }}</p>
    </div>
  </div>
</template>

<style scoped>
.truncate { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
</style>