import React from 'react';
import { Clock, Flame, CheckCircle, Bell, Sparkles, X } from 'lucide-react';
import { BAKE_SCHEDULE } from '../data/bakeryData';

interface BakeScheduleProps {
  isModal?: boolean;
  onClose?: () => void;
  onSelectScheduleItem?: (itemName: string) => void;
}

export const BakeSchedule: React.FC<BakeScheduleProps> = ({
  isModal = false,
  onClose,
  onSelectScheduleItem
}) => {
  const content = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-600/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Live Hearth Rotations
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
            Today's Fresh Oven Schedule
          </h2>
          <p className="text-sm text-stone-400 mt-1 max-w-xl">
            We bake in small, continuous batches throughout the morning and early afternoon so our cases never sit cold.
          </p>
        </div>

        {isModal && onClose && (
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-200 transition-colors"
            aria-label="Close Schedule"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {BAKE_SCHEDULE.map((batch) => {
          const isFresh = batch.status === 'fresh';
          const isBaking = batch.status === 'baking';

          return (
            <div
              key={batch.id}
              className={`relative rounded-xl p-5 border transition-all ${
                isFresh
                  ? 'bg-amber-950/40 border-amber-500/50 shadow-lg shadow-amber-950/30'
                  : isBaking
                  ? 'bg-orange-950/30 border-orange-500/40 shadow-md'
                  : 'bg-stone-900/60 border-stone-800'
              }`}
            >
              {/* Badge on top */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm font-bold text-amber-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  {batch.time}
                </span>

                <span
                  className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                    isFresh
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                      : isBaking
                      ? 'bg-orange-950/80 text-orange-300 border border-orange-500/30 animate-pulse'
                      : 'bg-stone-800 text-stone-400'
                  }`}
                >
                  {isFresh && <CheckCircle className="w-3 h-3 text-emerald-400" />}
                  {isBaking && <Flame className="w-3 h-3 text-orange-400" />}
                  {isFresh ? 'Fresh Now' : isBaking ? 'In Oven' : 'Upcoming'}
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="text-xs uppercase font-medium tracking-wider text-stone-400">
                  {batch.category}
                </div>
                <h4 className="text-lg font-serif font-bold text-amber-100">
                  {batch.item}
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {batch.description}
                </p>
              </div>

              {onSelectScheduleItem && (
                <button
                  onClick={() => onSelectScheduleItem(batch.item)}
                  className="mt-4 w-full py-2 px-3 rounded-lg bg-stone-800/80 hover:bg-stone-800 text-xs font-semibold text-amber-300 border border-amber-900/50 hover:border-amber-700/60 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Order for this batch</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="rounded-xl bg-amber-950/30 border border-amber-800/40 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-200/90">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>Need warm bread for dinner? Reserve an afternoon hearth loaf before 1:00 PM for guaranteed pickup.</span>
        </div>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
        <div className="bg-stone-900 border border-amber-900/60 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl">
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="schedule" className="py-16 bg-stone-950 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
};
