import PizzaCard from "../components/PizzaCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter, Pizza, Leaf, Beef, Star } from "lucide-react";

const pizzaList = [
  {
    id: 1,
    name: "Pepperoni Classic",
    description: "Premium pepperoni with extra mozzarella cheese and our signature tomato sauce on hand-tossed dough.",
    price: 12.99,
    category: "meat",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1601924576374-990e34464c05?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Margherita Italiana",
    description: "Fresh basil, premium buffalo mozzarella, and authentic San Marzano tomato sauce.",
    price: 10.99,
    category: "vegetarian",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "BBQ Chicken Supreme",
    description: "Smoky BBQ sauce with tender grilled chicken, red onions, and cilantro on our signature crust.",
    price: 13.99,
    category: "meat",
    rating: 4.7,
    image: "https://plus.unsplash.com/premium_photo-1672498268734-0f41e888298d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Paneer Tikka Delight",
    description: "Marinated paneer cubes, bell peppers, onions, and mint chutney on a spiced base.",
    price: 13.99,
    category: "vegetarian",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Truffle Mushroom",
    description: "Wild mushrooms, truffle oil, caramelized onions, and aged parmesan on a white sauce base.",
    price: 16.99,
    category: "vegetarian",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Garden Supreme",
    description: "Fresh bell peppers, mushrooms, olives, tomatoes, and red onions with herb seasoning.",
    price: 11.49,
    category: "vegetarian",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Meat Lovers Feast",
    description: "Pepperoni, Italian sausage, bacon, and ham with extra cheese for the ultimate meat experience.",
    price: 18.99,
    category: "meat",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Hawaiian Paradise",
    description: "Sweet pineapple chunks and savory ham create the perfect tropical combination.",
    price: 12.49,
    category: "meat",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const filteredPizzas = pizzaList
    .filter(pizza => {
      const matchesSearch = pizza.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || pizza.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  const categories = [
    { id: "all", name: "All Pizzas", icon: Pizza, color: "from-primary-500 to-secondary-500" },
    { id: "vegetarian", name: "Vegetarian", icon: Leaf, color: "from-green-500 to-emerald-500" },
    { id: "meat", name: "Meat Lovers", icon: Beef, color: "from-red-500 to-orange-500" },
  ];

  const sortOptions = [
    { value: "name", label: "Name" },
    { value: "price", label: "Price" },
    { value: "rating", label: "Rating" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 text-shadow"
          >
            Our Delicious Menu 🍕
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto font-body leading-relaxed"
          >
            Handcrafted pizzas made with the finest ingredients, traditional techniques, and lots of love. 
            Every slice is a journey to authentic Italian flavors.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 space-y-8"
        >
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for your favorite pizza..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 glass-effect border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 font-body"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 font-body ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-glow`
                      : 'glass-effect text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 glass-effect border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary-500 font-body bg-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-dark-800">
                    Sort by {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 glass-effect rounded-2xl p-6 border border-white/20"
        >
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold gradient-text font-display">{filteredPizzas.length}</div>
              <div className="text-gray-400 text-sm font-body">Pizzas Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text font-display">
                ${Math.min(...filteredPizzas.map(p => p.price)).toFixed(2)}
              </div>
              <div className="text-gray-400 text-sm font-body">Starting From</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1">
                <Star className="w-5 h-5 text-accent-400 fill-current" />
                <span className="text-2xl font-bold gradient-text font-display">
                  {(filteredPizzas.reduce((sum, p) => sum + p.rating, 0) / filteredPizzas.length).toFixed(1)}
                </span>
              </div>
              <div className="text-gray-400 text-sm font-body">Average Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Pizza Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
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
            className="text-center py-16"
          >
            <div className="text-8xl mb-6 animate-bounce-slow">🔍</div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">No pizzas found</h3>
            <p className="text-gray-400 text-lg font-body mb-8">
              Try adjusting your search or filter criteria
            </p>
            <motion.button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-xl font-bold shadow-glow hover:shadow-glow-lg transition-all duration-300 font-body"
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Menu;