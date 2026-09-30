import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Heart, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="location" className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Brand & Ethos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-xl">
                🥖
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-amber-100 block">
                  The Cozy Crust
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                  Artisan Bakery & Café
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Crafting traditional hearth breads, hand-rolled laminated viennoiserie, and small-batch roasted espresso with love and organic flours.
            </p>

            <div className="pt-2 text-xs text-amber-300/80 font-mono">
              Est. 2018 • Naturally Leavened
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-amber-100 uppercase tracking-wider text-xs">
              Bakery & Hearth
            </h4>

            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>142 Elmwood Lane, Historic Mill District, Suite 101</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>(555) 392-8821</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>hello@thecozycrustbakery.com</span>
              </div>
            </div>
          </div>

          {/* Opening & Hearth Hours */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-amber-100 uppercase tracking-wider text-xs">
              Hearth Oven Hours
            </h4>

            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Monday – Friday</span>
                <span className="text-amber-200 font-semibold">6:30 AM – 6:00 PM</span>
              </div>

              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Saturday</span>
                <span className="text-amber-200 font-semibold">7:00 AM – 5:00 PM</span>
              </div>

              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Sunday</span>
                <span className="text-amber-200 font-semibold">7:00 AM – 4:00 PM</span>
              </div>

              <div className="text-[11px] text-amber-400/80 pt-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Fresh bread batches pull daily at 7:30 AM & 1:30 PM</span>
              </div>
            </div>
          </div>

          {/* Morning Newsletter Signup */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-amber-100 uppercase tracking-wider text-xs">
              Morning Bake Club
            </h4>

            <p className="text-xs text-stone-400">
              Subscribe for weekend pastry special reveals, seasonal loaf drops, and receive <strong className="text-amber-300">10% off</strong> your first online order.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Welcome to the Hearth Club! Check your inbox for code <strong>COZY10</strong>.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-800 rounded-xl text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-colors flex items-center gap-1"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} The Cozy Crust Artisan Bakery Café. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Allergen Guide</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Flour Sourcing</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
