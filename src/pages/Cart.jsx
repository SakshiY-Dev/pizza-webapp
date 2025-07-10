import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";
import { FaMinus, FaPizzaSlice, FaShoppingBag } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaShoppingBag className="text-4xl sm:text-5xl text-red-500" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Your Cart
            </h1>
          </div>
          <p className="text-gray-300 text-lg">
            {cart.length > 0 ? `${cart.length} delicious item${cart.length > 1 ? 's' : ''} waiting for you!` : 'Your cart is empty'}
          </p>
        </motion.div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
              <div className="text-8xl mb-6">🍕</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Time to add some cheesy goodness! Browse our delicious menu and find your perfect pizza.
              </p>
              <motion.button
                onClick={handleBrowseMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Browse Menu 🍕
              </motion.button>
            </div>
          </motion.div>
        ) : (
          /* Cart Items */
          <div className="max-w-4xl mx-auto">
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
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        {/* Pizza Image */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={pizza.image}
                            alt={pizza.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Pizza Info */}
                        <div className="flex-1 text-center sm:text-left">
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                            {pizza.name}
                          </h3>
                          <p className="text-gray-300 text-sm mb-2">
                            ${pizza.price.toFixed(2)} each
                          </p>
                          <p className="text-green-400 font-semibold">
                            Subtotal: ${(pizza.price * pizza.quantity).toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <motion.button
                            onClick={() => decreaseQuantity(pizza.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <FaMinus className="text-sm" />
                          </motion.button>

                          <span className="text-xl font-bold text-white min-w-[2rem] text-center">
                            {pizza.quantity}
                          </span>

                          <motion.button
                            onClick={() => increaseQuantity(pizza.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                          >
                            <IoMdAdd className="text-sm" />
                          </motion.button>

                          <motion.button
                            onClick={() => removeFromCart(pizza.id)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors duration-200 ml-2"
                          >
                            <MdDelete className="text-sm" />
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
                  className="bg-gradient-to-br from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30 sticky top-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <FaPizzaSlice className="text-red-500" />
                    Order Summary
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>Items ({cart.reduce((sum, item) => sum + item.quantity, 0)})</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Delivery Fee</span>
                      <span>$2.99</span>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex justify-between text-xl font-bold text-white">
                        <span>Total</span>
                        <span>${(getTotalPrice() + 2.99).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    onClick={handleCheckout}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Proceed to Checkout 🚀
                  </motion.button>
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