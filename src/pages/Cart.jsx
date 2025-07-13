import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const deliveryFee = 2.99;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Your Cart
          </h1>
          <p className="text-gray-600">
            {cart.length > 0 ? `${cart.length} item${cart.length > 1 ? 's' : ''} in your cart` : 'Your cart is empty'}
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="text-center max-w-md mx-auto">
            <div className="minimal-card p-12">
              <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-black mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Add some delicious pizzas to get started!
              </p>
              <button
                onClick={() => navigate("/menu")}
                className="minimal-button flex items-center gap-2 mx-auto"
              >
                Browse Menu
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Cart Items */
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cart.map((pizza) => (
                  <motion.div
                    key={pizza.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="minimal-card p-6"
                  >
                    <div className="flex items-center gap-6">
                      {/* Image */}
                      <img
                        src={pizza.image}
                        alt={pizza.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />

                      {/* Info */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-black mb-1">
                          {pizza.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          ${pizza.price.toFixed(2)} each
                        </p>
                        <p className="text-lg font-bold text-black">
                          ${(pizza.price * pizza.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                          <button
                            onClick={() => decreaseQuantity(pizza.id)}
                            className="w-8 h-8 bg-white rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          
                          <span className="text-lg font-semibold min-w-[2rem] text-center">
                            {pizza.quantity}
                          </span>
                          
                          <button
                            onClick={() => increaseQuantity(pizza.id)}
                            className="w-8 h-8 bg-white rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(pizza.id)}
                          className="w-8 h-8 bg-red-50 text-red-600 rounded-md flex items-center justify-center hover:bg-red-100 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="minimal-card p-6 sticky top-32">
                <h3 className="text-xl font-semibold text-black mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-xl font-bold text-black">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full minimal-button flex items-center justify-center gap-2"
                >
                  Checkout
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    Free delivery on orders over $25
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;