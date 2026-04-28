<script setup lang="ts">
import { Play } from 'lucide-vue-next';
defineProps<{ song: any; isDarkMode: boolean }>();
const emit = defineEmits(['play']);
</script>

<template>
  <div class="group relative p-4 rounded-[2rem] border transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
    :class="isDarkMode ? 'bg-white/5 border-white/5 hover:bg-white/10 hover:shadow-purple-500/10' : 'bg-white border-gray-100 shadow-sm'">
    <div class="relative overflow-hidden rounded-[1.5rem] aspect-square mb-4">
      <img :src="song.image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button @click.stop="emit('play', song)" class="bg-purple-600 p-4 rounded-full text-white shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <Play :size="24" fill="currentColor" />
        </button>
      </div>
    </div>
    <div class="px-1">
      <h3 class="font-bold text-sm truncate" :class="isDarkMode ? 'text-white' : 'text-zinc-900'">{{ song.title }}</h3>
      <p class="text-[10px] font-medium opacity-40 uppercase tracking-widest">{{ song.artist }}</p>
    </div>
  </div>
</template>