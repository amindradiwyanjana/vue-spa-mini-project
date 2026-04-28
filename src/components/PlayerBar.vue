<script setup lang="ts">
import { Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2 } from 'lucide-vue-next';
defineProps<{ currentSong: any; isDarkMode: boolean }>();
</script>

<template>
  <div class="h-24 border-t flex items-center justify-between px-10 z-[100] backdrop-blur-2xl"
       :class="isDarkMode ? 'bg-black/90 border-white/5' : 'bg-white/90 border-gray-200'">
    
    <div class="flex items-center gap-5 w-1/4">
      <template v-if="currentSong">
        <img :src="currentSong.image" class="w-14 h-14 rounded-2xl shadow-2xl object-cover animate-pulse" />
        <div class="overflow-hidden">
          <p class="text-sm font-black truncate">{{ currentSong.title }}</p>
          <p class="text-[10px] uppercase tracking-widest opacity-40 mt-1">{{ currentSong.artist }}</p>
        </div>
      </template>
      <p v-else class="text-[10px] opacity-20 uppercase font-black tracking-widest">Awaiting Pulse</p>
    </div>

    <div class="flex flex-col items-center gap-3 w-1/2">
      <div class="flex items-center gap-8">
        <Shuffle :size="16" class="opacity-20 hover:opacity-100 cursor-pointer" />
        <SkipBack :size="22" fill="currentColor" class="cursor-pointer hover:text-purple-500 transition" />
        <div class="bg-white text-black p-3.5 rounded-full hover:scale-110 active:scale-95 transition cursor-pointer shadow-xl">
          <Play :size="20" fill="black" />
        </div>
        <SkipForward :size="22" fill="currentColor" class="cursor-pointer hover:text-purple-500 transition" />
        <Repeat :size="16" class="opacity-20 hover:opacity-100 cursor-pointer" />
      </div>
      <div class="w-full max-w-md flex items-center gap-3">
        <span class="text-[9px] opacity-30 font-mono">1:24</span>
        <div class="flex-1 h-1 bg-white/10 rounded-full overflow-hidden relative group">
          <div class="bg-purple-600 h-full w-1/3 group-hover:bg-purple-400 transition-colors"></div>
        </div>
        <span class="text-[9px] opacity-30 font-mono">3:45</span>
      </div>
    </div>

    <div class="flex items-center justify-end gap-6 w-1/4">
      <div class="flex items-center gap-3">
        <Volume2 :size="18" class="opacity-40" />
        <div class="w-24 h-1 bg-white/10 rounded-full overflow-hidden"><div class="bg-white/60 w-2/3 h-full"></div></div>
      </div>
      <Maximize2 :size="16" class="opacity-40 cursor-pointer" />
    </div>
  </div>
</template>