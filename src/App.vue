<script setup>
import { ref, computed } from 'vue'

// 1. SEARCH STATE
const searchQuery = ref('')

// 2. MUSIC DATA (Replacing phones with high-quality music genres)
const songs = ref([
  { id: 1, title: 'Midnight Lo-Fi', artist: 'Soul Chill', img: 'https://picsum.photos/seed/lofi/500/500' },
  { id: 2, title: 'Desert Rock', artist: 'The Anthems', img: 'https://picsum.photos/seed/rock/500/500' },
  { id: 3, title: 'Golden Era Jazz', artist: 'Blue Note Trio', img: 'https://picsum.photos/seed/jazz/500/500' },
  { id: 4, title: 'Neon Pulse', artist: 'Synth Wave', img: 'https://picsum.photos/seed/synth/500/500' },
  { id: 5, title: 'Acoustic Soul', artist: 'Morning Sun', img: 'https://picsum.photos/seed/soul/500/500' },
  { id: 6, title: 'Urban Flow', artist: 'City Nights', img: 'https://picsum.photos/seed/hiphop/500/500' }
])

// 3. FILTER LOGIC (For the search bar)
const filteredSongs = computed(() => {
  return songs.value.filter(song => 
    song.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// 4. PLAYER STATE
const activeSong = ref(songs.value[0])
const selectSong = (song) => { activeSong.value = song }
</script>

<template>
  <div class="flex h-screen bg-black text-white font-sans overflow-hidden">
    
    <aside class="w-64 bg-zinc-950 p-6 flex flex-col gap-8 hidden lg:flex border-r border-zinc-900">
      <div class="flex items-center gap-3 text-green-500">
        <span class="text-3xl font-bold">✨</span>
        <h1 class="text-2xl font-black tracking-tighter text-white uppercase italic">
          SOUND <span class="text-green-500">SOUL</span>
        </h1>
      </div>
      
      <nav class="flex flex-col gap-6 text-zinc-400 font-bold">
        <button @click="searchQuery = ''" class="flex items-center gap-3 text-white text-left hover:text-green-500 transition">
          <span>🏠</span> Home
        </button>
        
        <div class="relative">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search songs..." 
            class="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2 px-4 text-sm focus:outline-none focus:border-green-500 transition placeholder:text-zinc-600"
          />
        </div>

        <a href="#" class="flex items-center gap-3 hover:text-white transition"><span>📚</span> Your Library</a>
      </nav>

      <div class="mt-auto p-5 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl">
        <p class="text-[10px] uppercase font-black tracking-widest text-zinc-500 mb-2">Sound Soul Plus</p>
        <button class="w-full py-2 bg-green-500 text-black rounded-full text-xs font-black hover:scale-105 transition">
          GO PREMIUM
        </button>
      </div>
    </aside>

    <main class="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-900 to-black p-8 pb-40">
      <header class="flex justify-between items-center mb-12">
        <div>
          <h2 class="text-5xl font-black italic tracking-tighter uppercase leading-none">
            {{ searchQuery ? 'Results' : 'Sound Soul Explorer' }}
          </h2>
          <p class="text-green-500 font-black text-xs tracking-[0.3em] mt-2 uppercase">
            {{ filteredSongs.length }} Tracks Found
          </p>
        </div>
      </header>

      <div v-if="filteredSongs.length > 0" class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        <div 
          v-for="song in filteredSongs" 
          :key="song.id" 
          @click="selectSong(song)" 
          class="group bg-zinc-900/40 p-5 rounded-[2.5rem] hover:bg-zinc-800/80 transition-all duration-500 cursor-pointer border border-zinc-800/50 hover:border-green-500/40 shadow-lg"
        >
          <div class="relative mb-4 overflow-hidden rounded-[2rem] aspect-square shadow-2xl">
            <img :src="song.img" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
               <button class="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl text-black transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                 <span class="text-3xl ml-1">▶</span>
               </button>
            </div>
          </div>
          <div class="px-2">
            <h3 class="font-black text-xl truncate text-white uppercase tracking-tighter">{{ song.title }}</h3>
            <p class="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-1">{{ song.artist }}</p>
          </div>
        </div>
      </div>

      <div v-else class="flex flex-col items-center justify-center h-64 text-zinc-500">
        <span class="text-6xl mb-4">🎵</span>
        <p class="font-bold uppercase tracking-widest">No matching soul found</p>
      </div>
    </main>

    <footer v-if="activeSong" class="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-2xl border-t border-zinc-900 h-28 px-8 flex items-center justify-between z-50">
      <div class="flex items-center gap-5 w-1/4">
        <img :src="activeSong.img" class="w-16 h-16 rounded-2xl object-cover border border-zinc-800 shadow-xl" />
        <div class="hidden md:block overflow-hidden">
          <div class="font-black text-base truncate uppercase tracking-tighter">{{ activeSong.title }}</div>
          <div class="text-[10px] text-green-500 font-black uppercase tracking-widest mt-0.5">{{ activeSong.artist }}</div>
        </div>
      </div>

      <div class="flex flex-col items-center gap-4 flex-1 px-10 max-w-2xl">
        <div class="flex items-center gap-10 text-2xl">
          <button class="text-zinc-600 hover:text-white transition cursor-pointer">⏮</button>
          <button class="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg">
            ⏸
          </button>
          <button class="text-zinc-600 hover:text-white transition cursor-pointer">⏭</button>
        </div>
        <div class="w-full bg-zinc-800 h-1.5 rounded-full relative overflow-hidden">
          <div class="absolute bg-green-500 w-1/3 h-full rounded-full shadow-[0_0_15px_#22c55e]"></div>
        </div>
      </div>

      <div class="w-1/4 flex justify-end items-center gap-4 hidden md:flex">
        <span class="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Volume</span>
        <div class="w-28 bg-zinc-800 h-1 rounded-full overflow-hidden">
           <div class="bg-zinc-400 w-3/4 h-full rounded-full"></div>
        </div>
      </div>
    </footer>
  </div>
</template>