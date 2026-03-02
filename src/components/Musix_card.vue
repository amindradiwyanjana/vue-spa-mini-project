<script setup lang="ts">
import type { Track } from '../types/track.ts';

defineProps<{
track: Track
}>();
</script>

<template>
<div class="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all group">
<div class="relative overflow-hidden rounded-xl mb-4">
<img :src="track.coverImage" :alt="track.title" class="w-full aspect-square object-cover group-hover:scale-105 transition-all duration-500" />
</div>
<h3 class="font-bold text-lg truncate text-white">{{ track.title }}</h3>
<p class="text-slate-400 text-sm mb-2">{{ track.artist }}</p>
<span class="text-xs bg-purple-900/30 text-purple-400 px-2 py-1 rounded-md uppercase font-semibold">
{{ track.genre }}
</span>
</div>
</template>