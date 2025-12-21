
export interface Game {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  url: string;
  description: string;
}

export type Page = 'home' | 'game';
