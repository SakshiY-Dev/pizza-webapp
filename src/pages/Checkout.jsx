import { useCart } from "../context/CartContext";
import { IoMdAdd } from "react-icons/io";
import { FaMinus, FaCreditCard, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Checkout = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotalPrice,
    clearCart,
  } = useCart();

  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirmOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add some pizzas first.");
      return;
    }

    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const totalPrice = (getTotalPrice() + 2.99).toFixed(2);
    clearCart();
    navigate("/confirm-order", { state: { totalPrice } });
  };

  const deliveryFee = 2.99;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Checkout 🛒
          </h1>
          <p className="text-gray-300 text-lg">
            Review your order and complete your purchase
          </p>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <div className="text-8xl mb-6">🛒</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-400 mb-8">
                Add some delicious pizzas to get started!
              </p>
              <motion.button
                onClick={() => navigate("/menu")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Browse Menu
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <FaClock className="text-red-500" />
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {cart.map((pizza) => (
                  <div
                    key={pizza.id}
                    className="flex items-center justify-between py-3 border-b border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={pizza.image}
                        alt={pizza.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="text-white font-medium">{pizza.name}</p>
                        <p className="text-gray-400 text-sm">${pizza.price.toFixed(2)} each</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <motion.button
                        onClick={() => decreaseQuantity(pizza.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center"
                      >
                        <FaMinus className="text-xs" />
                      </motion.button>
                      
                      <span className="text-white font-bold min-w-[1.5rem] text-center">
                        {pizza.quantity}
                      </span>
                      
                      <motion.button
                        onClick={() => increaseQuantity(pizza.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center"
                      >
                        <IoMdAdd className="text-xs" />
                      </motion.button>
                      
                      <motion.button
                        onClick={() => removeFromCart(pizza.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center ml-2"
                      >
                        <MdDelete className="text-xs" />
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 pt-4 border-t border-white/20">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-white pt-3 border-t border-white/20">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </motion.div>

            {/* Payment & Delivery Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Delivery Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  Delivery Information
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <textarea
                    placeholder="Delivery Address"
                    rows="3"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaCreditCard className="text-red-500" />
                  Payment Information
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Confirm Order Button */}
              <motion.button
                onClick={handleConfirmOrder}
                disabled={isProcessing}
                whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 ${
                  isProcessing
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-600 to-orange-600 hover:shadow-xl'
                } text-white`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing Order...
                  </div>
                ) : (
                  `Confirm Order - $${total.toFixed(2)} 🍕`
                )}
              </motion.button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;