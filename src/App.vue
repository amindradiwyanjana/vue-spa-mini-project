<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Musix_card from './components/Musix_card.vue';
import DetailModal from './components/DetailModal.vue';
import type { Song, DummyJsonQuote, DummyJsonQuotesResponse } from './types/Music';

const isSidebarOpen = ref(true);
const isDarkMode = ref(true);
const searchQuery = ref('');
const songs = ref<Song[]>([]);
const selectedSong = ref<Song | null>(null);

// EG/2023/5584 - Fetching from DummyJSON Quotes API
onMounted(async () => {
  try {
    const res = await fetch('https://dummyjson.com/quotes?limit=30');
    const data: DummyJsonQuotesResponse = await res.json();
    songs.value = data.quotes.map((item: DummyJsonQuote) => ({
      id: item.id,
      title: item.quote.split(' ').slice(0, 4).join(' ') + '...',
      artist: item.author,
      image: `https://picsum.photos/seed/${item.id}/600/600`,
      description: item.quote
    }));
  } catch (err) { console.error("Data fetch error:", err); }
});

const updateSearch = (val: string) => { searchQuery.value = val; };
const toggleDarkMode = () => { isDarkMode.value = !isDarkMode.value; };
const toggleSidebar = () => { isSidebarOpen.value = !isSidebarOpen.value; };
const selectSong = (song: Song) => { selectedSong.value = song; };
const closeSong = () => { selectedSong.value = null; };

const filteredSongs = computed(() => {
  return songs.value.filter(song =>
    song.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    song.artist?.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div :class="isDarkMode ? 'bg-zinc-950 text-white' : 'bg-gray-50 text-zinc-900'" class="h-screen flex flex-col overflow-hidden transition-colors duration-300 font-sans">
    
    <Header 
      :isDarkMode="isDarkMode" 
      @toggleSidebar="toggleSidebar" 
      @toggleDarkMode="toggleDarkMode"
      @search="updateSearch"
    />

    <div class="flex-1 flex overflow-hidden relative">
      <aside 
        v-if="isSidebarOpen" 
        class="h-full shrink-0 border-r transition-all duration-500 ease-in-out"
        :class="isDarkMode ? 'border-zinc-800 bg-zinc-950' : 'border-gray-200 bg-white'"
      >
        <Sidebar :isDarkMode="isDarkMode" />
      </aside>

      <main class="flex-1 overflow-y-auto p-6">
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          <Musix_card 
            v-for="song in filteredSongs" 
            :key="song.id" 
            :song="song" 
            :isDarkMode="isDarkMode" 
            @click="selectSong(song)" 
          />
        </div>
      </main>
    </div>

    <DetailModal 
      :song="selectedSong" 
      :isDarkMode="isDarkMode" 
      @close="closeSong" 
    />
  </div>
</template>

<style>
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-thumb { background: #71717a; border-radius: 10px; }
</style>