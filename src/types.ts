export interface MenuItem {
  id: string;
  name: string;
  category: 'sourdough' | 'pastries' | 'savory' | 'sweets' | 'coffee';
  price: number;
  description: string;
  bakingNotes: string;
  image: string;
  tags: string[];
  isPopular?: boolean;
  isDailySpecial?: boolean;
  calories?: number;
  allergens?: string[];
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface BakeScheduleItem {
  id: string;
  time: string;
  item: string;
  category: string;
  status: 'fresh' | 'baking' | 'upcoming';
  description: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  favoriteItem: string;
}
