<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import Sidebar from './components/Sidebar.vue';
import MusicCard from './components/Musix_card.vue';
import type { Track } from './types/track';

const tracks = ref<Track[]>([]);
const searchQuery = ref('');

const fetchMusic = async () => {
  try {
    // Using a public API that returns items we can treat as 'Tracks'
    const response = await fetch('https://dummyjson.com/products/category/smartphones');
    const data = await response.json();
    
    tracks.value = data.products.map((item: any) => ({
      id: item.id,
      title: item.title,
      artist: item.brand,
      album: "SoundSoul Sessions",
      genre: "Electronic",
      coverImage: item.thumbnail,
      description: item.description
    }));
  } catch (e) {
    console.error("Music failed to load:", e);
  }
};

const filteredTracks = computed(() => {
return tracks.value.filter(t => t.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

onMounted(fetchMusic);
</script>

<template> <div class="flex min-h-screen bg-slate-950 text-white"> <Sidebar /> <main class="flex-1 ml-64 p-8"> <input v-model="searchQuery" type="text" placeholder="Search..." class="mb-8 p-3 bg-slate-900 border border-slate-700 rounded-lg w-full max-w-md text-white" /> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <MusicCard v-for="track in filteredTracks" :key="track.id" :track="track" /> </div> </main> </div> </template>