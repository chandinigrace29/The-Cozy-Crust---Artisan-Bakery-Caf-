import React, { useState, useMemo } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/bakeryData';
import { Plus, Check, Search, Sparkles, Flame, Info, Heart, ShoppingBag } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, qty?: number) => void;
  cartItemCounts: { [id: string]: number };
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  cartItemCounts
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [selectedItemForInfo, setSelectedItemForInfo] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Bakes' },
    { id: 'sourdough', label: 'Hearth Sourdough' },
    { id: 'pastries', label: 'Viennoiserie & Pastries' },
    { id: 'savory', label: 'Savory & Galettes' },
    { id: 'sweets', label: 'Sweets & Rolls' },
    { id: 'coffee', label: 'Specialty Coffee' }
  ];

  const popularTags = ['all', 'Organic', 'French Cultured Butter', 'Vegan', 'Wild Yeast', 'Local Honey'];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTag =
        selectedTag === 'all' || item.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase());

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [selectedCategory, searchQuery, selectedTag]);

  return (
    <section id="menu" className="py-20 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Baked In Small Batches Every Morning
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-100 tracking-tight">
            The Daily Hearth Showcase
          </h2>
          <p className="text-base text-stone-400 font-light">
            Crafted from non-GMO stone-ground grains, slow cold fermentation, and European cultured butter. Order ahead for same-day counter or curbside pickup.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search sourdough, croissant, coffee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-stone-950/80 border border-stone-800 rounded-xl text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Tag Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 text-xs">
              <span className="text-stone-400 font-medium whitespace-nowrap hidden md:inline">Dietary:</span>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-amber-600 text-stone-950 font-bold'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {tag === 'all' ? 'All Attributes' : tag}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-stone-800/80">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-stone-950 font-bold shadow-lg shadow-amber-950/40'
                    : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/60'
                }`}
              >
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Empty Search State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-stone-950/40 rounded-2xl border border-stone-800">
            <p className="text-stone-400 text-base">No bakery items matched your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedTag('all');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-amber-600 text-stone-950 font-semibold text-sm hover:bg-amber-500"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const currentQtyInCart = cartItemCounts[item.id] || 0;

            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-stone-950/70 border border-stone-800 hover:border-amber-700/60 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Image & Top Badges */}
                <div className="relative h-56 overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.isPopular && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 text-[11px] font-extrabold uppercase tracking-wider shadow">
                        Bestseller
                      </span>
                    )}
                    {item.isDailySpecial && (
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-[11px] font-bold uppercase tracking-wider shadow">
                        Daily Special
                      </span>
                    )}
                  </div>

                  {/* Info Trigger Button */}
                  <button
                    onClick={() => setSelectedItemForInfo(item)}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-stone-900/80 hover:bg-stone-900 text-stone-300 hover:text-amber-400 border border-stone-700 backdrop-blur-sm transition-colors"
                    title="View allergens and baking notes"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  {/* Price Tag in Image */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-stone-950/90 border border-amber-500/40 text-amber-300 font-mono font-bold text-sm shadow">
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium text-amber-400/90 bg-amber-950/50 border border-amber-800/40 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-sm text-stone-300 font-light leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    <div className="text-xs text-amber-300/80 flex items-center gap-1.5 italic">
                      <Flame className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <span>{item.bakingNotes}</span>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
                    <div className="text-xs text-stone-400">
                      {item.calories ? `${item.calories} kcal` : 'Fresh Daily'}
                    </div>

                    <div className="flex items-center gap-2">
                      {currentQtyInCart > 0 && (
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2 py-1 rounded-md">
                          {currentQtyInCart} in bag
                        </span>
                      )}

                      <button
                        onClick={() => onAddToCart(item, 1)}
                        className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 flex items-center gap-1.5 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Item Info Detail Modal */}
      {selectedItemForInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-stone-900 border border-amber-900/60 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-4">
            <button
              onClick={() => setSelectedItemForInfo(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-200 text-lg font-bold"
            >
              ✕
            </button>

            <div className="h-48 rounded-xl overflow-hidden mb-3">
              <img
                src={selectedItemForInfo.image}
                alt={selectedItemForInfo.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-serif font-bold text-amber-100">
                {selectedItemForInfo.name}
              </h3>
              <span className="text-lg font-mono font-bold text-amber-400">
                ${selectedItemForInfo.price.toFixed(2)}
              </span>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed">
              {selectedItemForInfo.description}
            </p>

            <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <Flame className="w-4 h-4" />
                <span>Baking Technique</span>
              </div>
              <p className="text-stone-300">{selectedItemForInfo.bakingNotes}</p>
            </div>

            {selectedItemForInfo.allergens && selectedItemForInfo.allergens.length > 0 && (
              <div className="text-xs space-y-1">
                <span className="font-semibold text-stone-400">Allergen Information:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {selectedItemForInfo.allergens.map((allergen) => (
                    <span
                      key={allergen}
                      className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 text-[11px]"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-stone-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedItemForInfo(null)}
                className="px-4 py-2 rounded-xl text-stone-400 hover:text-stone-200 text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onAddToCart(selectedItemForInfo, 1);
                  setSelectedItemForInfo(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add To Order (${selectedItemForInfo.price.toFixed(2)})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
