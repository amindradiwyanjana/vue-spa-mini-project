<script setup lang="ts">
import { ref } from 'vue';
import { ArrowRight, Mail, Lock, Eye, EyeOff, Music } from 'lucide-vue-next';

const emit = defineEmits(['login']);

// State
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const error = ref('');
const isLoading = ref(false);

const handleLogin = () => {
  error.value = '';
  
  // 1. Frontend Validation Logic
  if (!email.value || !password.value) {
    error.value = 'Please fill in all fields';
    return;
  }
  if (!email.value.includes('@')) {
    error.value = 'Invalid email format';
    return;
  }

  // 2. Premium Loading Simulation
  isLoading.value = true;
  setTimeout(() => {
    // Pass the name (derived from email) back to App.vue
    emit('login', { name: email.value.split('@')[0] });
    isLoading.value = false;
  }, 1500);
};
</script>

<template>
  <div class="fixed inset-0 z-[500] bg-[#050505] flex items-center justify-center p-6 font-sans">
    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full"></div>

    <div class="max-w-md w-full relative animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div class="flex flex-col items-center mb-10">
        <div class="w-16 h-16 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl mb-4">
          <Music :size="32" class="text-white" />
        </div>
        <h1 class="text-3xl font-black tracking-tighter uppercase italic text-white">
          Sound<span class="text-purple-500">Soul</span>
        </h1>
      </div>

      <div class="bg-zinc-900/40 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-3xl shadow-2xl">
        <h2 class="text-xl font-bold text-white mb-6">Sign In</h2>

        <div class="space-y-4">
          <div class="relative group">
            <Mail class="absolute left-4 top-4 text-zinc-600 group-focus-within:text-purple-500 transition-colors" :size="18" />
            <input 
              v-model="email"
              type="email" 
              placeholder="Email" 
              class="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
            />
          </div>

          <div class="relative group">
            <Lock class="absolute left-4 top-4 text-zinc-600 group-focus-within:text-purple-500 transition-colors" :size="18" />
            <input 
              v-model="password"
              :type="showPassword ? 'text' : 'password'" 
              placeholder="Password" 
              class="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
            />
            <button @click="showPassword = !showPassword" class="absolute right-4 top-4 text-zinc-600 hover:text-white transition-colors">
              <Eye v-if="!showPassword" :size="18" />
              <EyeOff v-else :size="18" />
            </button>
          </div>

          <div class="flex justify-between items-center px-1">
             <a href="#" class="text-[10px] text-zinc-500 hover:text-purple-400 font-bold uppercase tracking-widest transition-colors">Forgot Password?</a>
          </div>

          <p v-if="error" class="text-red-500 text-[10px] font-bold text-center uppercase tracking-widest animate-pulse">
            {{ error }}
          </p>

          <button 
            @click="handleLogin"
            :disabled="isLoading"
            class="w-full bg-purple-600 hover:bg-purple-500 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition