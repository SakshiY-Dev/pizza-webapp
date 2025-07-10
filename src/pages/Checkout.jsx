import { useCart } from "../context/CartContext";
import { Plus, Minus, Trash2, CreditCard, MapPin, Clock, Shield, CheckCircle } from "lucide-react";
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h1 className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-4">
            Secure Checkout 🔒
          </h1>
          <p className="text-gray-300 text-lg font-body">
            Review your order and complete your purchase securely
          </p>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="glass-effect rounded-3xl p-12 border border-white/10">
              <div className="text-8xl mb-6">🛒</div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-400 mb-8 font-body">
                Add some delicious pizzas to get started!
              </p>
              <motion.button
                onClick={() => navigate("/menu")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-glow font-body"
              >
                Browse Menu
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-effect rounded-3xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                <Clock className="text-primary-500" />
                Order Summary
              </h2>
              
              <div className="space-y-6 mb-8">
                {cart.map((pizza) => (
                  <div
                    key={pizza.id}
                    className="flex items-center justify-between py-4 border-b border-white/10 last:border-b-0"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={pizza.image}
                        alt={pizza.name}
                        className="w-16 h-16 rounded-lg object-cover shadow-lg"
                      />
                      <div>
                        <p className="text-white font-semibold font-display">{pizza.name}</p>
                        <p className="text-gray-400 text-sm font-body">${pizza.price.toFixed(2)} each</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-white/5 rounded-full p-1">
                        <motion.button
                          onClick={() => decreaseQuantity(pizza.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </motion.button>
                        
                        <span className="text-white font-bold min-w-[1.5rem] text-center font-body">
                          {pizza.quantity}
                        </span>
                        
                        <motion.button
                          onClick={() => increaseQuantity(pizza.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </motion.button>
                      </div>
                      
                      <motion.button
                        onClick={() => removeFromCart(pizza.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center ml-2"
                      >
                        <Trash2 className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 pt-6 border-t border-white/20">
                <div className="flex justify-between text-gray-300 font-body">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300 font-body">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300 font-body">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-2xl font-bold text-white pt-4 border-t border-white/20 font-display">
                  <span>Total</span>
                  <span className="gradient-text">${total.toFixed(2)}</span>
                </div>
              </div>
            </motion.div>

            {/* Payment & Delivery Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Delivery Information */}
              <div className="glass-effect rounded-3xl p-8 border border-white/20">
                <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  <MapPin className="text-primary-500" />
                  Delivery Information
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 font-body"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 font-body"
                  />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Delivery Address"
                    rows="3"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none font-body"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="glass-effect rounded-3xl p-8 border border-white/20">
                <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  <CreditCard className="text-primary-500" />
                  Payment Information
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="Card Number"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 font-body"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 font-body"
                    />
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="CVV"
                      className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 font-body"
                    />
                  </div>
                </div>

                {/* Security Badge */}
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <div className="flex items-center gap-2 text-green-400 mb-2">
                    <Shield className="w-4 h-4" />
                    <span className="font-semibold font-body">Secure Payment</span>
                  </div>
                  <p className="text-sm text-gray-300 font-body">
                    Your payment information is encrypted and secure
                  </p>
                </div>
              </div>

              {/* Confirm Order Button */}
              <motion.button
                onClick={handleConfirmOrder}
                disabled={isProcessing}
                whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-glow transition-all duration-300 font-body flex items-center justify-center gap-3 ${
                  isProcessing
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-glow-lg'
                } text-white`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing Order...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Confirm Order - ${total.toFixed(2)}
                  </>
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