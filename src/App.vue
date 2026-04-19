<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Musix_card from './components/Musix_card.vue';
import type { Song } from './types/Music';
import { X, PlayCircle } from 'lucide-vue-next'; // Larger Play icon for the modal

const isSidebarOpen = ref(true);
const isDarkMode = ref(true);
const searchQuery = ref('');
const songs = ref<Song[]>([]);

// NEW: State to track which song is currently in the middle of the screen
const selectedSong = ref<Song | null>(null);

onMounted(async () => {
  try {
    const res = await fetch('https://dummyjson.com/products?limit=30');
    const data = await res.json();
    songs.value = data.products.map((item: any) => ({
      id: item.id,
      title: item.title,
      artist: item.brand || 'Artist',
      image: `https://picsum.photos/seed/${item.id}/600/600`,
      description: item.description
    }));
  } catch (err) { console.error(err); }
});

const updateSearch = (val: string) => { searchQuery.value = val; };
const toggleDarkMode = () => { isDarkMode.value = !isDarkMode.value; };
const toggleSidebar = () => { isSidebarOpen.value = !isSidebarOpen.value; };

// Function to handle the click and move card data to the middle
const selectSong = (song: Song) => {
  selectedSong.value = song;
};

const filteredSongs = computed(() => {
  return songs.value.filter(song => 
    song.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div :class="isDarkMode ? 'bg-zinc-950 text-white' : 'bg-gray-50 text-zinc-900'" class="h-screen flex flex-col overflow-hidden transition-colors duration-300">
    
    <Header 
      :isDarkMode="isDarkMode" 
      @toggleSidebar="toggleSidebar" 
      @toggleDarkMode="toggleDarkMode"
      @search="updateSearch"
    />

    <div class="flex-1 flex overflow-hidden relative">
      <aside v-if="isSidebarOpen" class="h-full shrink-0 border-r" :class="isDarkMode ? 'border-zinc-800 bg-zinc-950' : 'border-gray-200 bg-white'">
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

        <transition name="pop">
          <div v-if="selectedSong" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <div 
              class="max-w-md w-full rounded-[2rem] p-8 shadow-2xl relative" 
              :class="isDarkMode ? 'bg-zinc-900 text-white border border-zinc-800' : 'bg-white text-zinc-900'"
            >
              <button @click="selectedSong = null" class="absolute top-6 right-6 p-2 hover:bg-zinc-500/10 rounded-full transition">
                <X :size="24" />
              </button>
              
              <div class="mb-6 rounded-2xl overflow-hidden shadow-xl aspect-square">
                <img :src="selectedSong.image" class="w-full h-full object-cover" />
              </div>

              <div class="text-center">
                <h2 class="text-2xl font-black mb-1 tracking-tight">{{ selectedSong.title }}</h2>
                <p class="text-purple-500 font-bold mb-4 uppercase text-sm tracking-widest">{{ selectedSong.artist }}</p>
                <p class="text-sm opacity-60 leading-relaxed mb-8 px-4">{{ selectedSong.description }}</p>
                
                <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 transition-transform active:scale-95">
                  <PlayCircle :size="20" fill="currentColor" />
                  PLAY NOW
                </button>
              </div>
            </div>
          </div>
        </transition>
      </main>
    </div>
  </div>
</template>

<style>
/* Smooth Animation for the Pop-up */
.pop-enter-active, .pop-leave-active { transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: scale(0.9) translateY(20px); }
</style>