import React from 'react';
import { ShoppingBag, Clock, Sparkles, Phone, MapPin } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenSchedule: () => void;
  onOpenCustomOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  cartTotal,
  onOpenCart,
  onOpenSchedule,
  onOpenCustomOrder
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md text-amber-50 border-b border-amber-950/40 transition-all">
      {/* Top Hearth Announcement */}
      <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-amber-200/90 text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-amber-800/30">
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        <span>Fresh Morning Batches Now Available • Naturally leavened sourdough, stone-ground flours & pure cultured butter</span>
        <span className="hidden md:inline text-amber-400/60">•</span>
        <span className="hidden md:inline text-amber-300">Curbside & Counter Pickup Ready</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 p-0.5 shadow-lg shadow-amber-950/50 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
              <div className="w-full h-full bg-stone-900 rounded-full flex items-center justify-center border border-amber-400/30">
                <span className="text-2xl font-serif select-none" role="img" aria-label="bread">🥖</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-amber-100 group-hover:text-amber-300 transition-colors">
                The Cozy Crust
              </span>
              <span className="text-[11px] tracking-widest uppercase font-semibold text-amber-400/80">
                Artisan Bakery & Café
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-amber-100/80">
            <a href="#menu" className="hover:text-amber-300 transition-colors py-1 hover:border-b-2 hover:border-amber-400">
              Fresh Bakes & Menu
            </a>
            <button 
              onClick={onOpenSchedule}
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5 py-1"
            >
              <Clock className="w-4 h-4 text-amber-400" />
              Oven Schedule
            </button>
            <a href="#craft" className="hover:text-amber-300 transition-colors py-1 hover:border-b-2 hover:border-amber-400">
              Our Craft & Story
            </a>
            <button
              onClick={onOpenCustomOrder}
              className="text-amber-300 hover:text-amber-200 transition-colors py-1 flex items-center gap-1 font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Catering & Custom Bakes
            </button>
            <a href="#location" className="hover:text-amber-300 transition-colors py-1 hover:border-b-2 hover:border-amber-400">
              Find Us
            </a>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSchedule}
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-stone-800/80 hover:bg-stone-800 text-amber-200 border border-amber-900/60 transition-colors"
            >
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">Oven Clock</span>
            </button>

            {/* Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-stone-950 font-semibold shadow-md shadow-amber-950/40 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              aria-label="View shopping cart"
            >
              <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
              <span className="font-bold text-sm hidden sm:inline">
                {cartCount > 0 ? `$${cartTotal.toFixed(2)}` : 'Order Ahead'}
              </span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-stone-950 text-amber-300 text-xs font-bold flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
