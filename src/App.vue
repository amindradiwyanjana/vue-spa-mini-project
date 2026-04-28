<script setup lang="ts">
// ... other imports
const isAuthenticated = ref(false);
const user = ref({ name: '', id: 'EG/2023/5584' });

// This matches the @login event from AuthOverlay
const handleLogin = (userData) => {
  user.value.name = userData.name;
  isAuthenticated.value = true;
};

// This matches the @logout event from Header
const handleLogout = () => {
  isAuthenticated.value = false;
};
</script>

<template>
  <AuthOverlay v-if="!isAuthenticated" @login="handleLogin" />
  
  <div v-else :class="isDarkMode ? 'bg-[#050505] text-white' : 'bg-white text-black'" class="h-screen flex flex-col overflow-hidden">
    <Header 
      :userName="user.name" 
      @logout="handleLogout" 
      @toggleSidebar="..." 
      ... 
    />
    
    <div class="flex-1 flex overflow-hidden">
       <Sidebar :albums="albums" />
       <main>...</main>
    </div>

    <PlayerBar :currentSong="currentPlaying" />
  </div>
</template>