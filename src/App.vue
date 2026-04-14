<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import { Search, Menu, Sun, Moon, User } from 'lucide-vue-next';

const isSidebarOpen = ref(false);
const isDarkMode = ref(true);
const searchQuery = ref('');

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};
</script>

<template>
  <div :class="isDarkMode ? 'bg-zinc-950 text-white' : 'bg-gray-50 text-gray-900'" class="min-h-screen flex flex-col transition-colors duration-300">
    
    <header class="flex items-center justify-between p-4 border-b" :class="isDarkMode ? 'border-zinc-800' : 'border-gray-200'">
      <div class="flex items-center gap-4">
        <button @click="isSidebarOpen = !isSidebarOpen" class="p-2 hover:bg-zinc-800 rounded-lg transition">
          <Menu :size="24" />
        </button>
        <h1 class="font-bold text-xl">SoundSoul</h1>
      </div>

      <div class="flex-1 max-w-md mx-4 relative">
        <Search class="absolute left-3 top-2.5 text-zinc-500" :size="18" />
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Search for music..." 
          class="w-full rounded-full py-2 pl-10 pr-4 outline-none border transition"
          :class="isDarkMode ? 'bg-zinc-900 border-zinc-700 focus:border-purple-500' : 'bg-white border-gray-300 focus:border-purple-600'"
        />
      </div>

      <div class="flex items-center gap-3">
        <button @click="toggleDarkMode" class="p-2 rounded-full border border-transparent hover:border-purple-500 transition">
          <Sun v-if="isDarkMode" :size="20" />
          <Moon v-else :size="20" />
        </button>
        <button class="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full font-bold hover:bg-purple-700 transition">
          <User :size="18" /> Sign In
        </button>
      </div>
    </header>

    <div class="flex flex-1 overflow-hidden relative">
      <Sidebar 
        v-if="isSidebarOpen" 
        :isDarkMode="isDarkMode" 
        @close="isSidebarOpen = false"
        class="absolute z-50 shadow-2xl"
      />
      
      <main class="flex-1 overflow-y-auto p-6">
        </main>
    </div>
  </div>
</template>