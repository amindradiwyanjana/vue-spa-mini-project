<script setup lang="ts">
import { X, Play, Heart } from 'lucide-vue-next';
import type { Song } from '../types/Music'; // Using strict TypeScript interfaces [cite: 5, 15]

defineProps<{
  song: Song | null;
}>();

const emit = defineEmits(['close']);
</script>

<template>
  <Transition name="fade">
    <div v-if="song" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/80 backdrop-blur-xl" @click="emit('close')"></div>
      
      <div class="bg-zinc-900 border border-zinc-800 w-full max-w-2xl rounded-[3rem] overflow-hidden relative shadow-2xl transition-all">
        <button @click="emit('close')" class="absolute top-6 right-6 z-10 p-2 bg-black/20 hover:bg-black/50 rounded-full transition">
          <X :size="24" />
        </button>

        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/2 aspect-square">
            <img :src="song.img" class="w-full h-full object-cover" />
          </div>
          
          <div class="p-8 flex flex-col justify-center flex-1">
            <span class="text-green-500 font-black text-xs tracking-[0.3em] uppercase mb-2">{{ song.genre }}</span>
            <h2 class="text-4xl font-black uppercase italic tracking-tighter leading-none mb-2">{{ song.title }}</h2>
            <p class="text-zinc-400 font-bold uppercase tracking-widest text-sm mb-6">{{ song.artist }}</p>
            
            <p class="text-zinc-500 text-sm leading-relaxed mb-8">
              Experience the deep rhythms and soul-stirring melodies of this {{ song.genre }} masterpiece.
            </p>

            <div class="flex gap-4">
              <button class="flex-1 bg-white text-black font-black py-4 rounded-full hover:scale-105 transition flex items-center justify-center gap-2">
                <Play fill="black" :size="20" /> PLAY NOW
              </button>
              <button class="p-4 border border-zinc-800 rounded-full hover:bg-zinc-800 transition">
                <Heart :size="24" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>