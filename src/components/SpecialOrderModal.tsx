import React, { useState } from 'react';
import { Sparkles, Calendar, Users, X, CheckCircle, Wheat, Clock } from 'lucide-react';

interface SpecialOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecialOrderModal: React.FC<SpecialOrderModalProps> = ({
  isOpen,
  onClose
}) => {
  const [orderType, setOrderType] = useState<string>('pastry-platter');
  const [guestCount, setGuestCount] = useState<number>(15);
  const [requestedDate, setRequestedDate] = useState<string>('');
  const [customNotes, setCustomNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [inquiryCode, setInquiryCode] = useState<string>('');

  if (!isOpen) return null;

  const orderTypes = [
    {
      id: 'pastry-platter',
      name: 'Grand Morning Viennoiserie Platter',
      basePrice: 55,
      description: 'Assorted croissants, cardamom buns, seasonal fruit Danishes, and chocolate rolls.'
    },
    {
      id: 'sourdough-bundle',
      name: 'Artisan Hearth Bread & Dip Box',
      basePrice: 48,
      description: 'Assorted sliced country sourdough, rosemary focaccia, herb butter & garlic confit.'
    },
    {
      id: 'celebration-cake',
      name: 'Custom Heritage Rustic Layer Cake',
      basePrice: 65,
      description: 'Vanilla bean chiffon or dark valrhona chocolate with Swiss meringue buttercream.'
    },
    {
      id: 'brunch-catering',
      name: 'Complete Artisan Office / Event Brunch',
      basePrice: 120,
      description: 'Pastries, warm chanterelle quiches, fresh fruit, and 96oz travel carafes of Cozy roast coffee.'
    }
  ];

  const selectedPackage = orderTypes.find((p) => p.id === orderType) || orderTypes[0];
  const calculatedEstimate = selectedPackage.basePrice + Math.max(0, guestCount - 10) * 4.5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryCode(`BAKE-EVENT-${Math.floor(1000 + Math.random() * 9000)}`);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-stone-900 border border-amber-900/60 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-stone-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-serif font-bold text-amber-100">
                Inquiry Received by Head Baker!
              </h3>
              <p className="text-sm text-stone-300">
                Reference Code: <span className="font-mono font-bold text-amber-300">{inquiryCode}</span>
              </p>
            </div>

            <div className="bg-stone-950 rounded-xl p-4 border border-stone-800 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-stone-300">
                <span>Selected Package:</span>
                <span className="font-semibold text-amber-300">{selectedPackage.name}</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Estimated Guests:</span>
                <span className="font-semibold text-stone-200">{guestCount} people</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Estimated Total:</span>
                <span className="font-semibold text-amber-300">${calculatedEstimate.toFixed(2)}</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 max-w-md mx-auto">
              Our catering director will call or email you within 24 hours to confirm flour preferences, dietary restrictions, and pickup/delivery logistics.
            </p>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950 border border-amber-600/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Special Events & Large Orders
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
                Artisan Catering & Custom Bakes
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                From morning board meetings and wedding brunches to custom bread centerpieces, we craft memorable bakes for your gatherings.
              </p>
            </div>

            {/* Package selector */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider">
                1. Select Package
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {orderTypes.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setOrderType(pkg.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      orderType === pkg.id
                        ? 'border-amber-500 bg-amber-950/40 shadow-md'
                        : 'border-stone-800 bg-stone-950/60 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-serif font-bold text-sm text-amber-100">{pkg.name}</span>
                      <span className="font-mono text-xs font-bold text-amber-400">From ${pkg.basePrice}</span>
                    </div>
                    <p className="text-xs text-stone-400 leading-relaxed">{pkg.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Guest Count Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-stone-300">
                <span className="uppercase tracking-wider">2. Approximate Guests:</span>
                <span className="text-amber-400 font-mono text-sm font-bold">{guestCount} people</span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="5"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Date and Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Requested Event Date *</label>
                <input
                  type="date"
                  required
                  value={requestedDate}
                  onChange={(e) => setRequestedDate(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-lg text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Contact Phone or Email *</label>
                <input
                  type="text"
                  required
                  placeholder="name@example.com or (555) 012-3456"
                  className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-lg text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1">
                Custom Inscription, Flavors, or Dietary Requests
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Include 5 vegan croissants, write 'Happy 30th Birthday Leo' on cake, etc."
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-lg text-sm text-stone-100 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Price Estimate Banner */}
            <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/50 flex items-center justify-between">
              <div>
                <div className="text-xs text-amber-300 font-semibold uppercase">Estimated Package Total</div>
                <div className="text-xs text-stone-400">Includes packaging, serving platters & napkins</div>
              </div>
              <div className="text-2xl font-serif font-bold text-amber-200">
                ~${calculatedEstimate.toFixed(2)}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm tracking-wider uppercase shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Submit Catering & Custom Bake Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
