import { Link } from "react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Pizza, 
  Star, 
  Clock, 
  Users, 
  Award, 
  ArrowRight, 
  Play,
  CheckCircle,
  Truck,
  Shield
} from "lucide-react";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Pizza,
      title: "Handcrafted Pizzas",
      description: "Made fresh daily with premium ingredients",
      color: "text-primary-500"
    },
    {
      icon: Clock,
      title: "30-Min Delivery",
      description: "Hot and fresh to your doorstep",
      color: "text-secondary-500"
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "100% satisfaction or money back",
      color: "text-accent-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "25+", label: "Pizza Varieties", icon: Pizza },
    { number: "4.9★", label: "Average Rating", icon: Star },
    { number: "15+", label: "Awards Won", icon: Award }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Best pizza in town! The crust is perfect and toppings are always fresh.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Fast delivery and amazing taste. LaPizzaria never disappoints!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Davis",
      rating: 5,
      text: "The wood-fired flavor is incredible. Highly recommend the Margherita!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
            alt="Delicious Pizza"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-500/20 rounded-full blur-xl"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Authentic Italian
              <span className="block gradient-text">Pizza Experience</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Handcrafted with love, delivered with care. Experience the perfect blend 
              of traditional recipes and modern convenience.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4 flex items-center gap-3"
                >
                  Order Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Watch Our Story
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6">
              Why Choose <span className="gradient-text">LaPizzaria</span>?
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              We're not just another pizza place. We're passionate artisans dedicated to 
              bringing you the authentic taste of Italy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="card p-8 text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pizzas Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6">
              Our <span className="gradient-text">Signature</span> Pizzas
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Discover our most loved creations, crafted with premium ingredients and traditional techniques.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Margherita Italiana",
                image: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?q=80&w=400&h=300&auto=format&fit=crop",
                price: "$12.99",
                description: "Fresh basil, buffalo mozzarella, San Marzano tomatoes"
              },
              {
                name: "Pepperoni Classic",
                image: "https://images.unsplash.com/photo-1601924576374-990e34464c05?q=80&w=400&h=300&auto=format&fit=crop",
                price: "$14.99",
                description: "Premium pepperoni, extra mozzarella, signature sauce"
              },
              {
                name: "Truffle Mushroom",
                image: "https://images.unsplash.com/photo-1663858366999-aa1ce123a972?q=80&w=400&h=300&auto=format&fit=crop",
                price: "$18.99",
                description: "Wild mushrooms, truffle oil, aged parmesan"
              }
            ].map((pizza, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="card overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {pizza.name}
                    </h3>
                    <span className="text-2xl font-bold gradient-text">
                      {pizza.price}
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {pizza.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full btn-primary"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="btn-secondary text-lg px-8 py-4 flex items-center gap-3 mx-auto"
              >
                View Full Menu
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6">
              What Our <span className="gradient-text">Customers</span> Say
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="card p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent-500 fill-current" />
                ))}
              </div>
              <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-bold text-neutral-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    Verified Customer
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary-500 w-8'
                      : 'bg-neutral-300 dark:bg-neutral-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=2070&auto=format&fit=crop"
            alt="Pizza Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to Experience the Best Pizza in Town?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of satisfied customers and taste the difference quality makes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                >
                  <Pizza className="w-5 h-5" />
                  Order Your Pizza Now
                </motion.button>
              </Link>
              
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>30-Min Guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;