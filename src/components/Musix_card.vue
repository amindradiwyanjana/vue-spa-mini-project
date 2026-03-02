<script setup lang="ts">
import { Play } from 'lucide-vue-next';
import type { Song } from '../types/Music'; // Correctly links to your Interface 

// Define strictly typed props [cite: 5, 15]
defineProps<{ 
  song: Song 
}>();

// Define events for the parent to listen to 
defineEmits<{
  (e: 'select', song: Song): void
}>();
</script>

<template>
  <div @click="$emit('select', song)" 
       class="group bg-zinc-900/40 p-5 rounded-[2.5rem] hover:bg-zinc-800 transition-all cursor-pointer border border-zinc-800 hover:border-green-500/40">
    <div class="relative mb-4 overflow-hidden rounded-[2rem] aspect-square">
      <img :src="song.img" :alt="song.title" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
         <div class="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center text-black shadow-2xl">
           <Play fill="currentColor" :size="24" />
         </div>
      </div>
    </div>
    <h3 class="font-black text-xl truncate uppercase tracking-tighter">{{ song.title }}</h3>
    <p class="text-zinc-500 text-xs font-bold uppercase tracking-widest">{{ song.artist }}</p>
  </div>
</template>