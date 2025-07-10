import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";

const CartNotification = () => {
  const { notification } = useCart();

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          className="fixed top-24 right-4 z-50 max-w-sm"
        >
          <div className={`p-4 rounded-xl shadow-2xl backdrop-blur-sm border ${
            notification.type === 'success' 
              ? 'bg-green-500/90 border-green-400 text-white' 
              : 'bg-blue-500/90 border-blue-400 text-white'
          }`}>
            <div className="flex items-center gap-3">
              {notification.type === 'success' ? (
                <FaCheckCircle className="text-xl flex-shrink-0" />
              ) : (
                <FaInfoCircle className="text-xl flex-shrink-0" />
              )}
              <p className="font-semibold">{notification.message}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartNotification;