import React, { useState, useEffect } from 'react';
import { MenuItem, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BakeSchedule } from './components/BakeSchedule';
import { MenuSection } from './components/MenuSection';
import { StorySection } from './components/StorySection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SpecialOrderModal } from './components/SpecialOrderModal';
import { Check, Sparkles, X } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('the_cozy_crust_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState<boolean>(false);
  const [isCustomOrderOpen, setIsCustomOrderOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('the_cozy_crust_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart:', e);
    }
  }, [cart]);

  // Cart helper calculations
  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalCartPrice = cart.reduce((total, item) => total + item.item.price * item.quantity, 0);

  const cartItemCounts = cart.reduce<{ [id: string]: number }>((acc, item) => {
    acc[item.item.id] = item.quantity;
    return acc;
  }, {});

  const handleAddToCart = (item: MenuItem, qty: number = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((c) => c.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += qty;
        return updated;
      } else {
        return [...prev, { item, quantity: qty }];
      }
    });

    // Toast notification
    setToastMessage(`Added "${item.name}" to your bakery bag`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      setCart((prev) => prev.filter((c) => c.item.id !== id));
    } else {
      setCart((prev) =>
        prev.map((c) => (c.item.id === id ? { ...c, quantity: newQty } : c))
      );
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 font-sans text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      
      {/* Navbar with Sticky Cart & Navigation */}
      <Navbar
        cartCount={totalCartCount}
        cartTotal={totalCartPrice}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSchedule={() => setIsScheduleModalOpen(true)}
        onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onExploreMenu={scrollToMenu}
          onOpenSchedule={() => setIsScheduleModalOpen(true)}
          onOpenCustomOrder={() => setIsCustomOrderOpen(true)}
        />

        {/* Live Daily Hearth Bake Schedule */}
        <BakeSchedule
          onSelectScheduleItem={(item) => {
            scrollToMenu();
            setToastMessage(`Selected batch for "${item}". Check the showcase below!`);
            setTimeout(() => setToastMessage(null), 3500);
          }}
        />

        {/* Full Showcase & Menu Section */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemCounts={cartItemCounts}
        />

        {/* Story, Heirloom Grains & Philosophy */}
        <StorySection />

        {/* Community Reviews & Showcase */}
        <ReviewsSection />
      </main>

      {/* Footer & Location / Hours */}
      <Footer />

      {/* Shopping Bag Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Standalone Oven Schedule Modal */}
      {isScheduleModalOpen && (
        <BakeSchedule
          isModal={true}
          onClose={() => setIsScheduleModalOpen(false)}
          onSelectScheduleItem={() => {
            setIsScheduleModalOpen(false);
            scrollToMenu();
          }}
        />
      )}

      {/* Custom Bakes & Event Catering Modal */}
      <SpecialOrderModal
        isOpen={isCustomOrderOpen}
        onClose={() => setIsCustomOrderOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-600 text-stone-950 font-semibold shadow-2xl animate-bounce">
          <Sparkles className="w-4 h-4 text-stone-950" />
          <span className="text-sm">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="p-1 hover:bg-amber-700 rounded-md transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

    </div>
  );
}
