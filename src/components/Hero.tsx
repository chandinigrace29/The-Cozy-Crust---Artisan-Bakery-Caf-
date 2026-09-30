import React from 'react';
import { Flame, Clock, ArrowRight, Wheat, Award, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenSchedule: () => void;
  onOpenCustomOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenu,
  onOpenSchedule,
  onOpenCustomOrder
}) => {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-amber-50">
      {/* Background Ambience and Gradient Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&q=80"
          alt="Artisan bakery sourdough loaves"
          className="w-full h-full object-cover opacity-20 filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-stone-900/70" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium tracking-wide shadow-inner">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Wood-Fired & Stone Hearth Bakes • Fermented for 48 Hours</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-amber-100 tracking-tight leading-tight">
              Baked fresh before dawn. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">
                Savored all day long.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Step into the comforting warmth of <strong className="text-amber-200 font-semibold">The Cozy Crust</strong>. Every morning, our bakers shape rustic sourdough loaves, laminate paper-thin Normandy butter croissants, and brew velvety single-origin espresso.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreMenu}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-stone-950 font-bold text-base shadow-xl shadow-amber-950/60 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span>Browse Daily Bakes</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenSchedule}
                className="px-6 py-3.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-amber-200 border border-amber-700/50 hover:border-amber-500 font-semibold text-base transition-all flex items-center gap-2 cursor-pointer"
              >
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Today's Oven Schedule</span>
              </button>
            </div>

            {/* Quality Seals / Trust Badges */}
            <div className="pt-6 border-t border-stone-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-800/40 flex items-center justify-center text-amber-400">
                  <Wheat className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-stone-200">100% Heirloom</div>
                  <div className="text-xs text-stone-400">Organic grains</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-800/40 flex items-center justify-center text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-stone-200">48h Ferment</div>
                  <div className="text-xs text-stone-400">Gentle on digestion</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-800/40 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-stone-200">84% Normandy</div>
                  <div className="text-xs text-stone-400">Cultured butter</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-1000"></div>

              <div className="relative rounded-2xl bg-stone-900 border border-amber-900/50 p-5 shadow-2xl space-y-4">
                <div className="relative h-64 rounded-xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
                    alt="Warm croissant and coffee"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Baker's Morning Special</span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-extrabold shadow-md">
                    $9.50 Combo
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold text-amber-100">
                      The Morning Ritual Set
                    </h3>
                    <span className="text-amber-400 text-sm font-semibold">Hot & Ready</span>
                  </div>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    Fresh flaky double-laminated French croissant paired with our house Cozy Cortado or Honey Oat Latte.
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-stone-800 text-xs text-stone-400">
                  <span className="flex items-center gap-1 text-amber-300">
                    <Clock className="w-3.5 h-3.5" />
                    Batch #3 freshly pulled 15 mins ago
                  </span>
                  <button 
                    onClick={onExploreMenu}
                    className="text-amber-400 hover:text-amber-300 font-bold underline underline-offset-4 cursor-pointer"
                  >
                    Order Now →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
