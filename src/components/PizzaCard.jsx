import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { FaPlus, FaStar } from "react-icons/fa";
import { useState } from "react";

const PizzaCard = ({ pizza }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(pizza);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative bg-gradient-to-br from-amber-400 to-orange-500 shadow-2xl rounded-2xl overflow-hidden group hover:shadow-3xl transition-all duration-300"
    >
      {/* Rating Badge */}
      <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
        <FaStar className="text-yellow-500 text-sm" />
        <span className="text-xs font-bold text-gray-800">4.{Math.floor(Math.random() * 9) + 1}</span>
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden h-48 sm:h-52 md:h-56">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-3">
        <div className="text-center space-y-2">
          <h2 className="text-lg sm:text-xl font-bold text-white drop-shadow-md line-clamp-1">
            {pizza.name}
          </h2>
          <p className="text-sm text-gray-800 font-medium leading-relaxed line-clamp-2 min-h-[2.5rem]">
            {pizza.description}
          </p>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-2">
          <div className="text-2xl font-bold text-green-800 drop-shadow-sm">
            ${pizza.price}
          </div>
          
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-4 py-2 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 ${
              isAdded 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            <div className="flex items-center gap-2">
              <FaPlus className={`text-sm transition-transform duration-300 ${isAdded ? 'rotate-45' : ''}`} />
              <span className="text-sm font-bold">
                {isAdded ? 'Added!' : 'Add'}
              </span>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Success Animation */}
      {isAdded && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="absolute inset-0 bg-green-500/20 backdrop-blur-sm flex items-center justify-center rounded-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
          >
            ✓ Added to Cart!
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PizzaCard;