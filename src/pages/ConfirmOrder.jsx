import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import { motion } from "framer-motion";
import { CheckCircle, Package, Clock, MapPin, Star, ArrowRight, Home, Truck } from "lucide-react";
import Confetti from "react-confetti";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const totalPrice = location.state?.totalPrice || "0.00"; 

  const [showConfetti, setShowConfetti] = useState(true);
  const [orderStep, setOrderStep] = useState(0);

  const orderSteps = [
    { icon: CheckCircle, title: "Order Confirmed", description: "Your order has been received", color: "text-green-500" },
    { icon: Package, title: "Preparing", description: "Our chefs are crafting your pizza", color: "text-orange-500" },
    { icon: Truck, title: "On the Way", description: "Your order is being delivered", color: "text-blue-500" },
    { icon: MapPin, title: "Delivered", description: "Enjoy your delicious meal!", color: "text-purple-500" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    
    // Simulate order progress
    const progressTimer = setInterval(() => {
      setOrderStep(prev => {
        if (prev < orderSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(progressTimer);
        return prev;
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  const generateOrderNumber = () => {
    return `LP${Date.now().toString().slice(-6)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="max-w-2xl w-full"
        >
          {/* Success Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
              className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4"
            >
              Order Confirmed! 🎉
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-slate-600 dark:text-slate-400 font-body"
            >
              Thank you for choosing LaPizzaria! Your delicious pizza is on its way.
            </motion.p>
          </div>

          {/* Order Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl mb-8"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold text-slate-900 dark:text-white font-body">Order Number</span>
                </div>
                <p className="text-2xl font-bold text-orange-600 font-display">#{generateOrderNumber()}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-500" />
                  <span className="font-semibold text-slate-900 dark:text-white font-body">Estimated Delivery</span>
                </div>
                <p className="text-2xl font-bold text-teal-600 font-display">25-35 mins</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-teal-50 dark:from-orange-900/20 dark:to-teal-900/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-500/30">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-slate-900 dark:text-white font-body">Total Amount</span>
                <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent font-display">
                  ${totalPrice}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Order Progress */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl mb-8"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-display">Order Progress</h3>
            
            <div className="space-y-4">
              {orderSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + index * 0.2 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                    index <= orderStep 
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-500/30' 
                      : 'bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    index <= orderStep 
                      ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg' 
                      : 'bg-slate-200 dark:bg-slate-600 text-slate-500'
                  }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`font-semibold font-body ${
                      index <= orderStep ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm font-body ${
                      index <= orderStep ? 'text-slate-600 dark:text-slate-300' : 'text-slate-400 dark:text-slate-500'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                  
                  {index <= orderStep && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={() => navigate("/order-tracking")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gradient-to-r from-orange-500 to-teal-500 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-body flex items-center justify-center gap-3"
            >
              <Package className="w-5 h-5" />
              Track Your Order
            </motion.button>
            
            <motion.button
              onClick={() => navigate("/")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 font-body flex items-center justify-center gap-3"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </motion.button>
          </motion.div>

          {/* Customer Review Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-500/30 text-center"
          >
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 font-body">Love our pizza?</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-body">
              Share your experience and help others discover great food!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfirmOrder;