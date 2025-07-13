import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Shield, Users } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "30 minutes or less"
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Fresh ingredients only"
    },
    {
      icon: Users,
      title: "50K+ Customers",
      description: "Trusted by thousands"
    }
  ];

  const featuredPizzas = [
    {
      name: "Margherita",
      image: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?q=80&w=400&h=300&auto=format&fit=crop",
      price: "$12.99",
      rating: 4.8
    },
    {
      name: "Pepperoni",
      image: "https://images.unsplash.com/photo-1601924576374-990e34464c05?q=80&w=400&h=300&auto=format&fit=crop",
      price: "$14.99",
      rating: 4.9
    },
    {
      name: "Supreme",
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=400&h=300&auto=format&fit=crop",
      price: "$18.99",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-black mb-6"
            >
              Delicious Pizza
              <span className="block text-gray-600">Delivered Fast</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Fresh ingredients, authentic recipes, and lightning-fast delivery. 
              Experience the perfect pizza every time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/menu">
                <button className="minimal-button flex items-center gap-2">
                  Order Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/about">
                <button className="minimal-button-outline">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pizzas */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Popular Pizzas
            </h2>
            <p className="text-xl text-gray-600">
              Our most loved creations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPizzas.map((pizza, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="minimal-card overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{pizza.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-black">
                      {pizza.name}
                    </h3>
                    <span className="text-xl font-bold text-black">
                      {pizza.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <button className="minimal-button-outline">
                View All Pizzas
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Order?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied customers
            </p>
            <Link to="/menu">
              <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Order Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;