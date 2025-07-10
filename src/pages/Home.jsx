import { Link } from "react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaPizzaSlice, FaStar, FaHeart, FaArrowRight, FaClock, FaFire } from "react-icons/fa";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { icon: FaPizzaSlice, text: "Handcrafted Pizzas", color: "text-red-500" },
    { icon: FaFire, text: "Wood-Fired Oven", color: "text-orange-500" },
    { icon: FaHeart, text: "Made with Love", color: "text-pink-500" },
    { icon: FaStar, text: "Premium Quality", color: "text-yellow-500" }
  ];

  const pizzaEmojis = ["🍕", "🍅", "🧀", "🌿", "🫒"];
  const [floatingPizzas, setFloatingPizzas] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Generate floating pizza elements
    const pizzas = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      emoji: pizzaEmojis[Math.floor(Math.random() * pizzaEmojis.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2
    }));
    setFloatingPizzas(pizzas);
  }, []);

  const createSparkle = () => {
    const sparkles = Array.from({ length: 6 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: 0 }}
        animate={{ 
          scale: [0, 1, 0], 
          rotate: [0, 180, 360],
          x: [0, (Math.random() - 0.5) * 100],
          y: [0, (Math.random() - 0.5) * 100]
        }}
        transition={{ 
          duration: 1.5, 
          delay: i * 0.1,
          ease: "easeOut"
        }}
        className="absolute text-yellow-400 text-xl pointer-events-none"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10
        }}
      >
        ✨
      </motion.div>
    ));
    return sparkles;
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/landing.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>

      {/* Floating Pizza Elements */}
      {floatingPizzas.map((pizza) => (
        <motion.div
          key={pizza.id}
          className="absolute text-4xl pointer-events-none opacity-20"
          style={{
            left: `${pizza.x}%`,
            top: `${pizza.y}%`
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: pizza.duration,
            repeat: Infinity,
            delay: pizza.delay,
            ease: "easeInOut"
          }}
        >
          {pizza.emoji}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-6">
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Welcome to LaPizzaria
          </motion.h1>
          
          {/* Rotating Feature */}
          <motion.div
            key={currentFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            {(() => {
              const IconComponent = features[currentFeature].icon;
              return <IconComponent className={`text-3xl ${features[currentFeature].color}`} />;
            })()}
            <span className="text-xl font-semibold">{features[currentFeature].text}</span>
          </motion.div>
        </motion.div>

        {/* Animated Description */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg sm:text-2xl max-w-3xl font-light leading-relaxed mb-8"
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Enjoy the best handmade pizzas with fresh ingredients and delicious flavors.
          </motion.span>
          <br />
          <motion.span
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="text-red-300"
          >
            Every slice tells a story of tradition and passion! 🍕
          </motion.span>
        </motion.p>

        {/* Interactive Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 mb-12"
        >
          {[
            { number: "50K+", label: "Happy Customers", icon: FaHeart },
            { number: "25+", label: "Pizza Varieties", icon: FaPizzaSlice },
            { number: "4.9★", label: "Average Rating", icon: FaStar }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center cursor-pointer"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                <stat.icon className="text-3xl text-red-400 mx-auto mb-2" />
              </motion.div>
              <div className="text-2xl font-bold">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Order Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative"
        >
          <Link
            to="/menu"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-block"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-full blur-lg opacity-75"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                opacity: isHovered ? 1 : 0.75
              }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full text-xl font-bold shadow-2xl transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Order Now</span>
              
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <FaArrowRight />
              </motion.div>

              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: isHovered ? "100%" : "-100%" }}
                transition={{ duration: 0.6 }}
                style={{ width: "50%" }}
              />
            </motion.button>
          </Link>

          {/* Pulsing rings around button */}
          <motion.div
            className="absolute inset-0 border-2 border-red-400 rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          <motion.div
            className="absolute inset-0 border-2 border-orange-400 rounded-full"
            animate={{ 
              scale: [1, 1.8, 1],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.5
            }}
          />
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: FaClock, text: "30min Delivery", to: "/menu" },
            { icon: FaStar, text: "View Reviews", to: "/about" },
            { icon: FaHeart, text: "Our Story", to: "/about" }
          ].map((action, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={action.to}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <action.icon className="text-red-400" />
                {action.text}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive cursor effect */}
      {isHovered && createSparkle()}
    </div>
  );
};

export default Home;