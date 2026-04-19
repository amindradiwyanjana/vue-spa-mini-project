<script setup lang="ts">
import { Search, Menu, Sun, Moon, User } from 'lucide-vue-next';
defineProps<{ isDarkMode: boolean }>();
const emit = defineEmits(['toggleSidebar', 'toggleDarkMode', 'search']);
</script>

<template>
  <header class="h-16 flex items-center justify-between px-6 border-b shrink-0 z-50 sticky top-0" :class="isDarkMode ? 'border-zinc-800 bg-zinc-950/80 backdrop-blur-md' : 'border-gray-100 bg-white'">
    <div class="flex items-center gap-4">
      <button @click="emit('toggleSidebar')" class="p-2 hover:bg-zinc-500/10 rounded-lg">
        <Menu :size="22" />
      </button>
      <div class="flex items-center gap-2 font-black italic text-lg uppercase tracking-tighter">
         <img src="/logo.png" class="w-7 h-7" />
         Sound<span class="text-purple-500">Soul</span>
      </div>
    </div>

    <div class="flex-1 max-w-sm mx-6 relative group">
      <Search class="absolute left-4 top-3 text-zinc-500 group-focus-within:text-purple-500" :size="18" />
      <input 
        @input="(e) => emit('search', (e.target as HTMLInputElement).value)"
        type="text" 
        placeholder="Search tracks..." 
        class="w-full rounded-full py-2.5 pl-12 pr-4 text-sm outline-none border transition-all"
        :class="isDarkMode ? 'bg-zinc-900 border-zinc-800 focus:border-purple-600 text-white' : 'bg-gray-100 border-gray-200 focus:border-purple-400'"
      />
    </div>

    <div class="flex items-center gap-4">
      <button @click="emit('toggleDarkMode')" class="p-2 hover:bg-zinc-500/10 rounded-full">
        <Sun v-if="isDarkMode" :size="22" />
        <Moon v-else :size="22" />
      </button>
      <button class="bg-purple-600 text-white px-5 py-2.5 rounded-full text-xs font-black flex items-center gap-2 hover:bg-purple-700 transition shadow-lg active:scale-95">
        <User :size="16" /> SIGN IN
      </button>
    </div>
  </header>
</template>