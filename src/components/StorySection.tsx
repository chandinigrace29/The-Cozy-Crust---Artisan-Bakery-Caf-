import React from 'react';
import { Wheat, Clock, Award, Flame, HeartHandshake, Sparkles } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="craft" className="py-24 bg-stone-950 text-stone-100 relative overflow-hidden border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-600/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
            Tradition, Grain & Patience
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-amber-100 tracking-tight">
            The Philosophy of Slow Baking
          </h2>
          <p className="text-base text-stone-400 font-light leading-relaxed">
            In a fast-paced world, we choose the slow road. Real artisan bread cannot be rushed by industrial yeast or chemical dough conditioners.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-4 hover:border-amber-700/60 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-600/40 flex items-center justify-center text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-amber-100">
              Penelope (Our Starter)
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Born in the autumn of 2018, our wild sourdough starter is fed twice daily with organic stone-ground rye and well water. She lends complex lactic tang, gentle acetic lift, and honeycomb structure to every loaf.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-4 hover:border-amber-700/60 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-600/40 flex items-center justify-center text-amber-400">
              <Wheat className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-amber-100">
              Heirloom Grains
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              We partner directly with regional family mills grinding whole Turkey Red wheat, Spelt, and Khorasan. Preserving the nutrient-dense germ and bran ensures profound nuttiness and digestive ease.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-4 hover:border-amber-700/60 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-600/40 flex items-center justify-center text-amber-400">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-amber-100">
              48-Hour Cold Proof
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              After gentle hand folding, our dough rests in rattan banneton baskets in our temperature-controlled cellar for two days. This slow maturation breaks down complex gluten and unlocks deep, caramelized crust notes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-4 hover:border-amber-700/60 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-600/40 flex items-center justify-center text-amber-400">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-amber-100">
              Stone Deck Hearth
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Fired by heavy thermal mass stone decks with saturated steam injection. The direct stone contact gives our loaves their iconic blistering, ear-splitting singing crust, and blistered mahogany sheen.
            </p>
          </div>

        </div>

        {/* Visual Story Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 border border-amber-900/60 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
                Behind the Hearth
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
                "Bread is alive. It responds to the humidity of the rain, the chill of winter dawn, and the baker’s touch."
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Founded by head bakers and flour enthusiasts who wanted to bring old-world European artisan baking traditions to the local neighborhood. Come visit early in the morning and smell the steam rising from the hearth ovens.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-amber-300">
                <span>✦ Zero Artificial Additives</span>
                <span>✦ Organic Sea Salt Only</span>
                <span>✦ Compostable Packaging</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80"
                alt="Flour dusted artisan loaves"
                className="rounded-2xl object-cover h-48 w-full shadow-lg border border-amber-900/40"
              />
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
                alt="Baker scoring sourdough boule"
                className="rounded-2xl object-cover h-48 w-full shadow-lg border border-amber-900/40"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
