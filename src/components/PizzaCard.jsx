import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";
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
      whileHover={{ y: -4 }}
      className="minimal-card overflow-hidden group"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow-sm">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{pizza.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-black mb-2">
            {pizza.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {pizza.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-black">
            ${pizza.price}
          </span>
          
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
              isAdded 
                ? 'bg-green-600 text-white' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            <Plus className={`w-4 h-4 transition-transform duration-300 ${isAdded ? 'rotate-45' : ''}`} />
            {isAdded ? 'Added!' : 'Add'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PizzaCard;