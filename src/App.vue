<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Song } from './types/Music';
import Sidebar from './components/Sidebar.vue';
import Musix_card from './components/Musix_card.vue';
import DetailModal from './components/DetailModal.vue';
import { Play, SkipBack, SkipForward, Volume2, Shuffle, Repeat } from 'lucide-vue-next';

const searchQuery = ref('');
const selectedSong = ref<Song | null>(null);
const activeSong = ref<Song | null>(null);
const songs = ref<Song[]>([]);

onMounted(async () => {
  try {
    const res = await fetch('https://dummyjson.com/products?limit=25');
    const data = await res.json();
    songs.value = data.products.map((item: any) => ({
      id: item.id,
      title: item.title,
      artist: item.brand || 'Sound Soul Artist',
      img: `https://picsum.photos/seed/${item.id + 123}/500/500`,
      genre: item.category,
      description: item.description
    }));
    activeSong.value = songs.value[0];
  } catch (e) {
    console.error("Fetch error", e);
  }
});

const filteredSongs = computed(() => {
  return songs.value.filter(s => 
    s.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    s.artist.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div class="flex h-screen bg-black text-white font-sans overflow-hidden">
    <Sidebar v-model:search="searchQuery" />

    <main class="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-900 to-black p-8 pb-32">
      <header class="mb-10">
        <h1 class="text-5xl font-black tracking-tighter uppercase italic">Sound Soul</h1>
      </header>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Musix_card 
          v-for="song in filteredSongs" 
          :key="song.id" 
          :song="song" 
          @click="activeSong = song"
          @select="selectedSong = song" 
        />
      </div>
    </main>

    <footer class="fixed bottom-0 w-full bg-zinc-950/90 backdrop-blur-md border-t border-zinc-800 p-4 flex items-center justify-between z-50">
      <div class="flex items-center gap-4 w-1/3">
        <img v-if="activeSong" :src="activeSong.img" class="w-14 h-14 rounded shadow-lg" />
        <div class="truncate">
          <div class="font-bold text-sm truncate">{{ activeSong?.title }}</div>
          <div class="text-xs text-zinc-400 truncate">{{ activeSong?.artist }}</div>
        </div>
      </div>

      <div class="flex flex-col items-center gap-2 w-1/3">
        <div class="flex items-center gap-6 text-zinc-400">
          <SkipBack :size="20" class="hover:text-white cursor-pointer" />
          <div class="bg-white rounded-full p-2 text-black hover:scale-105 transition">
            <Play fill="black" :size="24" />
          </div>
          <SkipForward :size="20" class="hover:text-white cursor-pointer" />
        </div>
        <div class="w-full max-w-md bg-zinc-800 h-1 rounded-full"><div class="bg-purple-500 h-full w-1/3"></div></div>
      </div>

      <div class="flex items-center gap-3 w-1/3 justify-end text-zinc-400">
        <Volume2 :size="18" />
        <div class="w-24 bg-zinc-800 h-1 rounded-full"><div class="bg-zinc-400 h-full w-2/3"></div></div>
      </div>
    </footer>

    <DetailModal :song="selectedSong" @close="selectedSong = null" />
  </div>
</template>