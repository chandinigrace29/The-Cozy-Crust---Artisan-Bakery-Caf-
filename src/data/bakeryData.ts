import { MenuItem, BakeScheduleItem, Review } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'country-sourdough',
    name: 'Heritage Country Sourdough',
    category: 'sourdough',
    price: 9.50,
    description: 'Our signature hearth loaf. Stone-milled red wheat, 48-hour slow cold fermentation with a deeply blistered, caramelized crust and open, custardy crumb.',
    bakingNotes: 'Baked at 500°F on stone deck hearths with steam',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Wild Yeast', 'Organic', 'Vegan'],
    isPopular: true,
    isDailySpecial: true,
    calories: 210,
    allergens: ['Wheat (Gluten)']
  },
  {
    id: 'rosemary-sea-salt-focaccia',
    name: 'Ligurian Rosemary & Flaky Salt Focaccia',
    category: 'sourdough',
    price: 7.75,
    description: 'Drenched in cold-pressed extra virgin olive oil, fresh rosemary plucked from our patio garden, and crunchy Maldon sea salt crystals.',
    bakingNotes: 'Double proofed in steel pans for airy pillow crumb',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
    tags: ['Olive Oil', 'Vegan', 'Herbs'],
    isPopular: true,
    calories: 240,
    allergens: ['Wheat (Gluten)']
  },
  {
    id: 'walnut-cranberry-boule',
    name: 'Toasted Walnut & Tart Cranberry Boule',
    category: 'sourdough',
    price: 10.25,
    description: 'Rich sourdough laced with roasted California walnut halves and ruby dried cranberries. Heavenly toasted with salted butter or sharp cheddar.',
    bakingNotes: '36-hour cold-ferment, deeply toasted walnut notes',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
    tags: ['Nutty & Fruity', 'Organic'],
    isPopular: false,
    calories: 260,
    allergens: ['Wheat (Gluten)', 'Tree Nuts (Walnuts)']
  },
  {
    id: 'classic-butter-croissant',
    name: 'Artisan French Butter Croissant',
    category: 'pastries',
    price: 4.85,
    description: '81 fragile, paper-thin golden layers laminated with pure Normandy-style cultured butter (84% butterfat). Crisp shatter on the outside, honeycomb web within.',
    bakingNotes: '3-day lamination process, hand-rolled daily at 4 AM',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    tags: ['French Cultured Butter', 'House Favorite'],
    isPopular: true,
    isDailySpecial: true,
    calories: 320,
    allergens: ['Dairy (Butter)', 'Wheat (Gluten)', 'Egg']
  },
  {
    id: 'pain-au-chocolat',
    name: 'Valrhona Dark Chocolate Croissant',
    category: 'pastries',
    price: 5.50,
    description: 'Two batons of bittersweet 64% Valrhona dark chocolate enveloped in our golden, flaky laminated pastry dough.',
    bakingNotes: 'Glazed with organic bourbon vanilla syrup right out of the oven',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80',
    tags: ['Valrhona Chocolate', 'Decadent'],
    isPopular: true,
    calories: 380,
    allergens: ['Dairy (Butter)', 'Wheat (Gluten)', 'Soy Lecithin']
  },
  {
    id: 'cardamom-morning-bun',
    name: 'Swedish Cardamom Sugar Knot',
    category: 'pastries',
    price: 5.25,
    description: 'Braided buttery brioche dough infused with freshly crushed green cardamom seeds and pearl sugar crystals.',
    bakingNotes: 'A Scandinavian bakery staple baked with toasted pearl sugar',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
    tags: ['Cardamom', 'Aromatic', 'Staff Pick'],
    isPopular: true,
    calories: 340,
    allergens: ['Dairy (Butter, Milk)', 'Wheat (Gluten)', 'Egg']
  },
  {
    id: 'almond-frangipane-croissant',
    name: 'Twice-Baked Almond Frangipane',
    category: 'pastries',
    price: 6.25,
    description: 'Filled with velvety rum-infused almond cream, topped with toasted sliced almonds, and dusted with powdered sugar.',
    bakingNotes: 'Soaked in orange blossom simple syrup before second bake',
    image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=800&q=80',
    tags: ['Twice Baked', 'Almond Cream'],
    calories: 440,
    allergens: ['Tree Nuts (Almonds)', 'Dairy', 'Wheat (Gluten)', 'Egg']
  },
  {
    id: 'caramelized-onion-gruyere-galette',
    name: 'Caramelized Onion & Cave-Aged Gruyère Galette',
    category: 'savory',
    price: 8.50,
    description: 'Flaky rye crust encasing slow-cooked sweet balsamic caramelized onions, fresh thyme leaves, and melted Swiss Gruyère cheese.',
    bakingNotes: 'Free-form hand-crimped rustic pastry',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    tags: ['Savory', 'Warm Lunch'],
    isPopular: true,
    calories: 390,
    allergens: ['Dairy (Gruyère)', 'Wheat (Rye, Gluten)', 'Egg']
  },
  {
    id: 'prosciutto-fig-sourdough-toast',
    name: 'Prosciutto di Parma & Mission Fig Toast',
    category: 'savory',
    price: 11.50,
    description: 'Thick slice of toasted Heritage Sourdough layered with whipped goat cheese, thin prosciutto, honey-macerated mission figs, and microgreens.',
    bakingNotes: 'Toasted to crisp perfection, assembled to order',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Lunch Special', 'Savory & Sweet'],
    calories: 420,
    allergens: ['Wheat (Gluten)', 'Dairy (Goat Cheese)']
  },
  {
    id: 'wild-mushroom-thyme-quiche',
    name: 'Forest Chanterelle & Leek Crust Quiche',
    category: 'savory',
    price: 8.95,
    description: 'Silky custard made with organic farm eggs, roasted wild forest mushrooms, tender braised leeks, and crème fraîche in a butter crust.',
    bakingNotes: 'Slow-baked in deep fluted ceramic pans',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Warm Hearth'],
    calories: 360,
    allergens: ['Dairy (Crème Fraîche)', 'Egg', 'Wheat (Gluten)']
  },
  {
    id: 'artisan-cinnamon-roll',
    name: 'Heirloom Bourbon Brown Sugar Roll',
    category: 'sweets',
    price: 5.75,
    description: 'Pillowy brioche dough swirled with spicy Vietnamese cinnamon, dark brown muscovado sugar, and slathered in whipped vanilla bean cream cheese frosting.',
    bakingNotes: 'Served warm straight from the baking dish',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
    tags: ['Comfort Sweet', 'Cream Cheese Frosting'],
    isPopular: true,
    calories: 460,
    allergens: ['Dairy', 'Wheat (Gluten)', 'Egg']
  },
  {
    id: 'lemon-curd-tartlet',
    name: 'Meyer Lemon Curd & Burnt Meringue Tartlet',
    category: 'sweets',
    price: 6.50,
    description: 'Pâte sablée butter shell filled with tart, sunny Meyer lemon curd and crowned with torched Swiss meringue peaks.',
    bakingNotes: 'Individual tartlets finished with fresh lemon zest',
    image: 'https://images.unsplash.com/photo-1519915028121-7d346b420b13?auto=format&fit=crop&w=800&q=80',
    tags: ['Citrus', 'Crisp Pastry'],
    calories: 310,
    allergens: ['Dairy', 'Wheat (Gluten)', 'Egg']
  },
  {
    id: 'cozy-cortado',
    name: 'Cozy Roast Cortado',
    category: 'coffee',
    price: 4.50,
    description: 'Double shot of our seasonal single-origin Guatemala espresso cut 1:1 with silky micro-foamed organic steamed milk.',
    bakingNotes: 'Notes of dark cacao, toasted hazelnut, and brown butter',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    tags: ['Barista Pick', 'Organic Dairy'],
    isPopular: true,
    calories: 80,
    allergens: ['Dairy (Oat milk alternative available)']
  },
  {
    id: 'spiced-honey-oat-latte',
    name: 'Wildflower Honey & Oat Milk Latte',
    category: 'coffee',
    price: 5.75,
    description: 'Slow-pulled espresso with local raw wildflower honey, a dusting of freshly grated nutmeg, and velvety Minor Figures oat milk.',
    bakingNotes: 'Naturally sweetened, gentle morning spice',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    tags: ['Oat Milk', 'Local Honey'],
    calories: 160,
    allergens: []
  },
  {
    id: 'cardamom-chai-latte',
    name: 'Slow-Brewed Spiced Cardamom Chai',
    category: 'coffee',
    price: 5.25,
    description: 'Direct-trade Assam black tea simmered for three hours with whole green cardamom, fresh ginger, cinnamon bark, and whole milk.',
    bakingNotes: 'House-made infusion with organic spices',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    tags: ['House Spiced', 'Warming'],
    calories: 140,
    allergens: ['Dairy (Oat Milk option available)']
  }
];

export const BAKE_SCHEDULE: BakeScheduleItem[] = [
  {
    id: '1',
    time: '6:30 AM',
    item: 'Butter Croissants & Morning Buns',
    category: 'Viennoiserie',
    status: 'fresh',
    description: 'Golden layers coming out crackling hot for early risers and commuters.'
  },
  {
    id: '2',
    time: '7:30 AM',
    item: 'Heritage Country Sourdough Batards',
    category: 'Hearth Bread',
    status: 'fresh',
    description: 'Steam vents released, blistered deep amber crust with fragrant wild yeast aroma.'
  },
  {
    id: '3',
    time: '9:00 AM',
    item: 'Pain au Chocolat & Cardamom Knots',
    category: 'Viennoiserie',
    status: 'fresh',
    description: 'Second morning batch glazed with warm vanilla bean reduction.'
  },
  {
    id: '4',
    time: '11:15 AM',
    item: 'Rosemary Focaccia & Savory Galettes',
    category: 'Savory & Focaccia',
    status: 'baking',
    description: 'Sizzling olive oil pans with caramelized onions and bubbling alpine cheese.'
  },
  {
    id: '5',
    time: '1:30 PM',
    item: 'Walnut Cranberry & Seeded Rye',
    category: 'Specialty Bread',
    status: 'upcoming',
    description: 'Afternoon loaves entering the stone hearth for late afternoon pick-ups.'
  },
  {
    id: '6',
    time: '3:30 PM',
    item: 'Warm Cinnamon Brioche Rolls',
    category: 'Sweet Bakes',
    status: 'upcoming',
    description: 'Fresh tray baked for the 4 PM afternoon coffee break crowd.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Clara Vance',
    rating: 5,
    comment: 'The sourdough crust here is unmatched anywhere in the state. The open custardy crumb and tart fermentation profile reminds me of old bakeries in San Francisco and Paris.',
    date: 'Yesterday',
    favoriteItem: 'Heritage Country Sourdough'
  },
  {
    id: 'r2',
    author: 'Marcus Sterling',
    rating: 5,
    comment: 'The cardamom bun and a hot cortado has become my sacred morning ritual. The butter laminations in their croissants shatter like stained glass. Pure heaven.',
    date: '3 days ago',
    favoriteItem: 'Swedish Cardamom Sugar Knot'
  },
  {
    id: 'r3',
    author: 'Elena Gomez',
    rating: 5,
    comment: 'Ordered a custom sourdough loaf gift basket and savory quiche for our family Sunday brunch. Everyone couldn’t stop talking about how fresh and flavorful everything tasted.',
    date: '1 week ago',
    favoriteItem: 'Caramelized Onion Gruyère Galette'
  }
];
