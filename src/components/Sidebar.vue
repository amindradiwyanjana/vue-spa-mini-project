<script setup lang="ts">
import { Home, Library, Music2, PlusCircle, ChevronRight } from 'lucide-vue-next';
defineProps<{ isDarkMode: boolean; albums: any[] }>();
</script>

<template>
  <div class="h-full flex flex-col p-6 overflow-hidden">
    <nav class="space-y-1 mb-10">
      <p class="text-[10px] font-bold uppercase tracking-widest opacity-30 px-3 mb-4">Discovery</p>
      <div class="flex items-center gap-3 px-3 py-3 rounded-xl bg-purple-600 text-white font-bold text-sm shadow-lg shadow-purple-500/20 cursor-pointer">
        <Home :size="18" /> Home
      </div>
      <div class="flex items-center gap-3 px-3 py-3 rounded-xl opacity-50 hover:opacity-100 hover:bg-white/5 transition cursor-pointer text-sm font-semibold">
        <Library :size="18" /> Library
      </div>
      <div class="flex items-center gap-3 px-3 py-3 rounded-xl opacity-50 hover:opacity-100 hover:bg-white/5 transition cursor-pointer text-sm font-semibold">
        <Music2 :size="18" /> Top Charts
      </div>
    </nav>

    <div class="flex-1 flex flex-col overflow-hidden">
      <div class="flex items-center justify-between px-3 mb-4">
        <p class="text-[10px] font-bold uppercase tracking-widest opacity-30">Recent Albums</p>
        <PlusCircle :size="14" class="opacity-30 hover:opacity-100 cursor-pointer" />
      </div>
      
      <div class="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        <div v-for="album in albums" :key="album.id" class="flex items-center justify-between group cursor-pointer">
          <div class="flex items-center gap-3">
            <img :src="album.cover" class="w-12 h-12 rounded-lg object-cover shadow-lg group-hover:scale-110 transition duration-300" />
            <div class="overflow-hidden">
              <p class="text-[11px] font-bold truncate group-hover:text-purple-500 transition">{{ album.name }}</p>
              <p class="text-[9px] opacity-40">Album • 2024</p>
            </div>
          </div>
          <ChevronRight :size="14" class="opacity-0 group-hover:opacity-100 transition" />
        </div>
      </div>
    </div>
  </div>
</template>