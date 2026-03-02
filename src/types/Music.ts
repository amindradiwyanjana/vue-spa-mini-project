// src/types/Music.ts
export interface Song {
  id: number;
  title: string;
  artist: string;
  img: string;
  genre: string;
  description?: string; // Optional for detail view
}