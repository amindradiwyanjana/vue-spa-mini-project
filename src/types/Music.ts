export interface Song {
  id: number;
  title: string;
  artist: string;
  image: string;
  description: string;
}

export interface DummyJsonQuote {
  id: number;
  quote: string;
  author: string;
}

export interface DummyJsonQuotesResponse {
  quotes: DummyJsonQuote[];
  total: number;
  skip: number;
  limit: number;
}