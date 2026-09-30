import React from 'react';
import { Star, MessageSquareHeart, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/bakeryData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-stone-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-600/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <MessageSquareHeart className="w-3.5 h-3.5 text-amber-400" />
            Loved by Neighborhood Bread Lovers
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100">
            Praise From Our Community
          </h2>
          <p className="text-sm text-stone-400">
            Over 1,200 five-star mornings served. Here is what regular patrons say about The Cozy Crust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-stone-950/70 border border-stone-800 flex flex-col justify-between space-y-4 shadow-lg hover:border-amber-800/60 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-stone-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-serif font-bold text-amber-100 flex items-center gap-1">
                    <span>{review.author}</span>
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="text-stone-400">Favorite: {review.favoriteItem}</div>
                </div>
                <div className="text-stone-400 text-[11px]">{review.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram/Community Bakes Grid */}
        <div className="mt-16 text-center space-y-4">
          <div className="text-xs uppercase font-bold tracking-widest text-amber-400">
            Tag us in your morning toast @TheCozyCrustBakery
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden h-36 border border-stone-800">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80"
                alt="Community sourdough"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-36 border border-stone-800">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80"
                alt="Community croissant"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-36 border border-stone-800">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80"
                alt="Community coffee"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-36 border border-stone-800">
              <img
                src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=400&q=80"
                alt="Community focaccia"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
