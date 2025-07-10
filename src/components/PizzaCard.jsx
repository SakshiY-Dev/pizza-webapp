import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { Plus, Star, Clock, Heart } from "lucide-react";
import { useState } from "react";

const PizzaCard = ({ pizza }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleAddToCart = () => {
    addToCart(pizza);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative glass-effect shadow-2xl rounded-3xl overflow-hidden group hover:shadow-glow transition-all duration-500 border border-white/20"
    >
      {/* Like Button */}
      <motion.button
        onClick={handleLike}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
      >
        <Heart 
          className={`w-5 h-5 transition-all duration-300 ${
            isLiked ? 'text-red-500 fill-current' : 'text-white'
          }`} 
        />
      </motion.button>

      {/* Rating Badge */}
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
        <Star className="text-accent-500 w-4 h-4 fill-current" />
        <span className="text-sm font-bold text-dark-800 font-body">{pizza.rating}</span>
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden h-56">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Add Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full font-bold shadow-glow hover:shadow-glow-lg transition-all duration-300 font-body flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Quick Add
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-display font-bold text-white line-clamp-1 group-hover:text-primary-300 transition-colors duration-300">
            {pizza.name}
          </h2>
          <p className="text-sm text-gray-300 font-body leading-relaxed line-clamp-2 min-h-[2.5rem]">
            {pizza.description}
          </p>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 text-xs text-gray-400 font-body">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>25-30 min</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span>Fresh</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <div className="text-2xl font-bold gradient-text font-display">
              ${pizza.price}
            </div>
            <div className="text-xs text-gray-400 font-body">Free delivery</div>
          </div>
          
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 font-body ${
              isAdded 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-glow'
            }`}
          >
            <div className="flex items-center gap-2">
              <Plus className={`w-4 h-4 transition-transform duration-300 ${isAdded ? 'rotate-45' : ''}`} />
              <span className="font-bold">
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
          className="absolute inset-0 bg-green-500/20 backdrop-blur-sm flex items-center justify-center rounded-3xl border-2 border-green-500/50"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow-glow font-body"
          >
            ✓ Added to Cart!
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PizzaCard;