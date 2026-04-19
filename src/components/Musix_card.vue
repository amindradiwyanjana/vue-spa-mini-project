<script setup lang="ts">
import { Play } from 'lucide-vue-next';
import type { Song } from '../types/Music';
defineProps<{ song: Song; isDarkMode: boolean }>();
</script>

<template>
  <div 
    v-if="song"
    class="group p-3 rounded-2xl border transition-all duration-300 cursor-pointer active:scale-95"
    :class="isDarkMode ? 'bg-zinc-900/40 border-zinc-800 hover:bg-zinc-800' : 'bg-white border-gray-100 hover:shadow-lg'"
  >
    <div class="relative overflow-hidden rounded-xl aspect-square mb-3 shadow-md">
      <img :src="song.image" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div class="bg-purple-600 p-3 rounded-full text-white shadow-xl">
          <Play :size="24" fill="currentColor" />
        </div>
      </div>
    </div>
    <h3 class="font-bold text-[13px] truncate" :class="isDarkMode ? 'text-zinc-100' : 'text-zinc-900'">{{ song.title }}</h3>
    <p class="text-[11px] opacity-50 truncate mt-1">{{ song.artist }}</p>
  </div>
</template>