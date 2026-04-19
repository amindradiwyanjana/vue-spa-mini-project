<script setup lang="ts">
import { X, PlayCircle } from 'lucide-vue-next';
import type { Song } from '../types/Music';

defineProps<{
  song: Song | null;
  isDarkMode: boolean;
}>();

const emit = defineEmits(['close']);
</script>

<template>
  <Transition name="pop">
    <div v-if="song" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div
        class="max-w-md w-full rounded-[2rem] p-8 shadow-2xl relative"
        :class="isDarkMode ? 'bg-zinc-900 text-white border border-zinc-800' : 'bg-white text-zinc-900'"
      >
        <button @click="emit('close')" class="absolute top-6 right-6 p-2 hover:bg-zinc-500/10 rounded-full transition">
          <X :size="24" />
        </button>

        <div class="mb-6 rounded-2xl overflow-hidden shadow-xl aspect-square">
          <img :src="song.image" class="w-full h-full object-cover" />
        </div>

        <div class="text-center">
          <h2 class="text-2xl font-black mb-1 tracking-tight">{{ song.title }}</h2>
          <p class="text-purple-500 font-bold mb-4 uppercase text-sm tracking-widest">{{ song.artist }}</p>
          <p class="text-sm opacity-60 leading-relaxed mb-8 px-4">{{ song.description }}</p>

          <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-transform active:scale-95">
            <PlayCircle :size="20" fill="currentColor" />
            PLAY NOW
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.pop-enter-active, .pop-leave-active { transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: scale(0.9) translateY(20px); }
</style>