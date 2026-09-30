import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart
}) => {
  const [pickupTime, setPickupTime] = useState<string>('ASAP (approx. 20 mins)');
  const [pickupMethod, setPickupMethod] = useState<'counter' | 'curbside'>('counter');
  const [tipPercentage, setTipPercentage] = useState<number>(18);
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [orderId, setOrderId] = useState<string>('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, current) => acc + current.item.price * current.quantity, 0);
  const tax = subtotal * 0.0825; // 8.25% local tax
  const tip = subtotal * (tipPercentage / 100);
  const total = subtotal + tax + tip;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `COZY-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(generatedId);
    setIsCheckingOut(false);
    setOrderConfirmed(true);
  };

  const handleFinish = () => {
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-900 border-l border-amber-900/60 shadow-2xl flex flex-col text-stone-100">
          
          {/* Header */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between bg-stone-950/60">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl font-serif font-bold text-amber-100">
                Your Bakery Bag
              </h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-700/50">
                {cart.reduce((sum, item) => sum + item.quantity, 0)} items
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {orderConfirmed ? (
              /* Order Confirmation State */
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-serif font-bold text-amber-100">Order Fired to Hearth!</h3>
                  <p className="text-xs text-stone-300">
                    Order <span className="font-mono font-bold text-amber-300">#{orderId}</span>
                  </p>
                </div>

                <div className="bg-stone-950 rounded-xl p-4 border border-stone-800 text-left text-xs space-y-2">
                  <div className="flex justify-between text-stone-300">
                    <span>Pickup Time:</span>
                    <span className="font-semibold text-amber-300">{pickupTime}</span>
                  </div>
                  <div className="flex justify-between text-stone-300">
                    <span>Pickup Type:</span>
                    <span className="font-semibold capitalize text-amber-300">{pickupMethod} Pickup</span>
                  </div>
                  <div className="flex justify-between text-stone-300">
                    <span>Customer:</span>
                    <span className="font-semibold text-stone-200">{customerName || 'Valued Guest'}</span>
                  </div>
                  <div className="pt-2 border-t border-stone-800 flex justify-between font-bold text-sm text-amber-200">
                    <span>Total Paid:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-400 leading-relaxed">
                  We are packaging your artisan goods with bakery tissue. Present this confirmation at 142 Elmwood Lane!
                </p>

                <button
                  onClick={handleFinish}
                  className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-sm transition-all"
                >
                  Done
                </button>
              </div>
            ) : cart.length === 0 ? (
              /* Empty Cart State */
              <div className="py-16 text-center space-y-3">
                <div className="text-4xl">🥖</div>
                <h3 className="text-lg font-serif font-bold text-amber-100">Your bakery bag is empty</h3>
                <p className="text-xs text-stone-400 max-w-xs mx-auto">
                  Add fresh sourdough loaves, flaky butter croissants, or specialty coffee to start your order.
                </p>
              </div>
            ) : isCheckingOut ? (
              /* Checkout Details Form */
              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                  <h3 className="font-serif font-bold text-amber-200">Pickup & Contact Details</h3>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-amber-400 hover:underline"
                  >
                    Back to Bag
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-lg text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Mobile Phone (for pickup SMS) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 019-2834"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-lg text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Pickup Schedule</label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-lg text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="ASAP (approx. 20 mins)">ASAP (approx. 20 mins)</option>
                    <option value="In 45 minutes">In 45 minutes</option>
                    <option value="In 1 hour 30 mins">In 1 hour 30 mins</option>
                    <option value="Tomorrow Morning (7:30 AM)">Tomorrow Morning (7:30 AM)</option>
                    <option value="Tomorrow Morning (9:00 AM)">Tomorrow Morning (9:00 AM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">Pickup Location</label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setPickupMethod('counter')}
                      className={`p-2.5 rounded-lg border text-center font-medium transition-colors ${
                        pickupMethod === 'counter'
                          ? 'border-amber-500 bg-amber-950/60 text-amber-200'
                          : 'border-stone-800 bg-stone-950 text-stone-400'
                      }`}
                    >
                      Bakery Counter
                    </button>
                    <button
                      type="button"
                      onClick={() => setPickupMethod('curbside')}
                      className={`p-2.5 rounded-lg border text-center font-medium transition-colors ${
                        pickupMethod === 'curbside'
                          ? 'border-amber-500 bg-amber-950/60 text-amber-200'
                          : 'border-stone-800 bg-stone-950 text-stone-400'
                      }`}
                    >
                      Curbside Parking
                    </button>
                  </div>
                </div>

                {/* Tip options */}
                <div className="pt-2">
                  <label className="block text-xs font-medium text-stone-300 mb-1">Tip for the Bakers & Baristas</label>
                  <div className="grid grid-cols-4 gap-1.5 text-xs">
                    {[10, 15, 18, 20].map((tipVal) => (
                      <button
                        key={tipVal}
                        type="button"
                        onClick={() => setTipPercentage(tipVal)}
                        className={`py-1.5 rounded-lg border text-center font-semibold transition-colors ${
                          tipPercentage === tipVal
                            ? 'border-amber-500 bg-amber-500 text-stone-950 font-bold'
                            : 'border-stone-800 bg-stone-950 text-stone-300'
                        }`}
                      >
                        {tipVal}%
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 space-y-1.5 text-xs text-stone-300">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>State & Local Tax (8.25%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Baker Tip ({tipPercentage}%):</span>
                    <span>${tip.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-serif font-bold text-amber-200 pt-2 border-t border-stone-800">
                    <span>Total Due:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confirm Order (${total.toFixed(2)})</span>
                </button>
              </form>
            ) : (
              /* Item List */
              <>
                <div className="space-y-4">
                  {cart.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="p-3 bg-stone-950 rounded-xl border border-stone-800/80 flex gap-3 items-center"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-bold text-sm text-amber-100 truncate">
                          {item.name}
                        </h4>
                        <div className="text-xs font-mono text-amber-400">
                          ${(item.price * quantity).toFixed(2)} (${item.price.toFixed(2)} ea)
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                            className="w-6 h-6 rounded bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-300"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center text-stone-200">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                            className="w-6 h-6 rounded bg-stone-800 hover:bg-stone-700 flex items-center justify-center text-stone-300"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => onUpdateQuantity(item.id, 0)}
                        className="p-2 text-stone-500 hover:text-red-400 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Subtotal Calculation */}
                <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-2 text-xs">
                  <div className="flex justify-between text-stone-300">
                    <span>Subtotal:</span>
                    <span className="font-mono">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Estimated Tax:</span>
                    <span className="font-mono">${tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-2 border-t border-stone-800 flex justify-between font-bold text-sm text-amber-200">
                    <span>Estimated Total:</span>
                    <span className="font-mono">${(subtotal + tax).toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Proceed to Pickup Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onClose}
                    className="w-full py-2.5 rounded-xl text-stone-400 hover:text-stone-200 text-xs font-medium transition-colors"
                  >
                    Continue Browsing Bakes
                  </button>
                </div>
              </>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
