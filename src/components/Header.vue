<script setup lang="ts">
import { LogOut, User } from 'lucide-vue-next';
defineProps<{ isDarkMode: boolean; userName: string }>();
const emit = defineEmits(['logout', 'toggleSidebar', 'toggleDarkMode', 'search']);
</script>

<template>
  <header class="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-black/50 backdrop-blur-xl">
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-3 bg-white/5 pr-1 pl-4 py-1 rounded-full border border-white/10">
        <span class="text-[10px] font-black uppercase tracking-widest text-zinc-400">{{ userName }}</span>
        <button @click="emit('logout')" class="p-2 bg-zinc-800 hover:bg-red-500/20 hover:text-red-500 rounded-full transition-all">
          <LogOut :size="14" />
        </button>
      </div>
    </div>
  </header>
</template>