import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Star, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleBrowseMenu = () => {
    navigate("/menu");
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const deliveryFee = 2.99;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-glow">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold gradient-text">
                Your Cart
              </h1>
              <p className="text-gray-400 font-body">
                {cart.length > 0 ? `${cart.length} delicious item${cart.length > 1 ? 's' : ''} ready to order!` : 'Your cart is empty'}
              </p>
            </div>
          </div>
        </motion.div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="glass-effect rounded-3xl p-12 border border-white/10">
              <div className="text-8xl mb-6 animate-bounce-slow">🍕</div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed font-body">
                Time to add some cheesy goodness! Browse our delicious menu and find your perfect pizza.
              </p>
              <motion.button
                onClick={handleBrowseMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 font-body flex items-center gap-3 mx-auto"
              >
                Browse Menu
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        ) : (
          /* Cart Items */
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence>
                  {cart.map((pizza, index) => (
                    <motion.div
                      key={pizza.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-effect rounded-2xl p-6 border border-white/20 hover:border-primary-500/30 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row items-center gap-6">
                        {/* Pizza Image */}
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
                          <img
                            src={pizza.image}
                            alt={pizza.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Pizza Info */}
                        <div className="flex-1 text-center sm:text-left">
                          <h3 className="text-xl font-bold text-white mb-2 font-display">
                            {pizza.name}
                          </h3>
                          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                            <Star className="w-4 h-4 text-accent-400 fill-current" />
                            <span className="text-sm text-gray-300 font-body">4.8 rating</span>
                          </div>
                          <p className="text-gray-300 text-sm mb-3 font-body">
                            ${pizza.price.toFixed(2)} each
                          </p>
                          <div className="flex items-center justify-center sm:justify-start gap-2">
                            <Clock className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 font-semibold text-lg font-body">
                              ${(pizza.price * pizza.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3 bg-white/5 rounded-full p-1">
                            <motion.button
                              onClick={() => decreaseQuantity(pizza.id)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-10 h-10 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                            >
                              <Minus className="w-4 h-4" />
                            </motion.button>

                            <span className="text-xl font-bold text-white min-w-[2rem] text-center font-body">
                              {pizza.quantity}
                            </span>

                            <motion.button
                              onClick={() => increaseQuantity(pizza.id)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                            >
                              <Plus className="w-4 h-4" />
                            </motion.button>
                          </div>

                          <motion.button
                            onClick={() => removeFromCart(pizza.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-effect rounded-3xl p-8 border border-white/20 sticky top-32"
                >
                  <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4 text-white" />
                    </div>
                    Order Summary
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex justify-between text-gray-300 font-body">
                      <span>Items ({cart.reduce((sum, item) => sum + item.quantity, 0)})</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300 font-body">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex justify-between text-2xl font-bold text-white font-display">
                        <span>Total</span>
                        <span className="gradient-text">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    onClick={handleCheckout}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-bold text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 font-body flex items-center justify-center gap-3"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  {/* Delivery Info */}
                  <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <div className="flex items-center gap-2 text-green-400 mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold font-body">Fast Delivery</span>
                    </div>
                    <p className="text-sm text-gray-300 font-body">
                      Your order will be delivered in 25-35 minutes
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;