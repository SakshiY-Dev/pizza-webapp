import PizzaCard from "../components/PizzaCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter } from "lucide-react";

const pizzaList = [
  {
    id: 1,
    name: "Pepperoni Classic",
    description: "Premium pepperoni with extra mozzarella cheese and our signature tomato sauce.",
    price: 12.99,
    category: "meat",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1601924576374-990e34464c05?q=80&w=400&h=300&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Margherita",
    description: "Fresh basil, premium buffalo mozzarella, and authentic San Marzano tomato sauce.",
    price: 10.99,
    category: "vegetarian",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?q=80&w=400&h=300&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "BBQ Chicken",
    description: "Smoky BBQ sauce with tender grilled chicken, red onions, and cilantro.",
    price: 13.99,
    category: "meat",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400&h=300&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Veggie Supreme",
    description: "Fresh bell peppers, mushrooms, olives, tomatoes, and red onions.",
    price: 11.99,
    category: "vegetarian",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=400&h=300&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Truffle Mushroom",
    description: "Wild mushrooms, truffle oil, caramelized onions, and aged parmesan.",
    price: 16.99,
    category: "vegetarian",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=400&h=300&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Meat Lovers",
    description: "Pepperoni, Italian sausage, bacon, and ham with extra cheese.",
    price: 18.99,
    category: "meat",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=400&h=300&auto=format&fit=crop",
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
    { id: "all", name: "All" },
    { id: "vegetarian", name: "Vegetarian" },
    { id: "meat", name: "Meat" },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600">
            Handcrafted pizzas made with the finest ingredients
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search pizzas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Pizza Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPizzas.map((pizza, index) => (
            <motion.div
              key={pizza.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PizzaCard pizza={pizza} />
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredPizzas.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No pizzas found</h3>
            <p className="text-gray-600 mb-8">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="minimal-button"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;