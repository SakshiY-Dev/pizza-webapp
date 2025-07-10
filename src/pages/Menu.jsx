import PizzaCard from "../components/PizzaCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const pizzaList = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with extra cheese and our signature tomato sauce.",
    price: 12.99,
    category: "meat",
    image: "https://images.unsplash.com/photo-1601924576374-990e34464c05?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Fresh basil, premium mozzarella, and authentic Italian tomato sauce.",
    price: 10.99,
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "BBQ Chicken Pizza",
    description: "Smoky BBQ sauce with tender grilled chicken and red onions.",
    price: 13.99,
    category: "meat",
    image: "https://plus.unsplash.com/premium_photo-1672498268734-0f41e888298d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Paneer Pizza",
    description: "Delicious paneer cubes, bell peppers, and onions on a flavorful base.",
    price: 13.99,
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Mushroom Delight",
    description: "A rich and savory pizza topped with fresh mushrooms and mozzarella cheese.",
    price: 14.99,
    category: "vegetarian",
    image: "https://plus.unsplash.com/premium_photo-1663858366999-aa1ce123a972?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Vegetarian Supreme",
    description: "A mix of fresh vegetables like bell peppers, onions, olives, and tomatoes.",
    price: 10.49,
    category: "vegetarian",
    image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Meat Lovers",
    description: "Loaded with pepperoni, sausage, bacon, and ham for the ultimate meat experience.",
    price: 16.99,
    category: "meat",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Hawaiian Paradise",
    description: "Sweet pineapple and savory ham create the perfect tropical combination.",
    price: 12.49,
    category: "meat",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPizzas = pizzaList.filter(pizza => {
    const matchesSearch = pizza.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || pizza.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: "all", name: "All Pizzas", icon: "🍕" },
    { id: "vegetarian", name: "Vegetarian", icon: "🥬" },
    { id: "meat", name: "Meat Lovers", icon: "🥓" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-600 to-orange-600 py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg"
          >
            Our Delicious Menu 🍕
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Handcrafted pizzas made with the finest ingredients and lots of love
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for your favorite pizza..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm sm:text-base">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Pizza Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          {filteredPizzas.map((pizza, index) => (
            <motion.div
              key={pizza.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PizzaCard pizza={pizza} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredPizzas.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No pizzas found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Menu;