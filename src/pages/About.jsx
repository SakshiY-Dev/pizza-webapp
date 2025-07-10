import ImageSlider from "./ImageSlider";
import { motion } from "framer-motion";
import { FaPizzaSlice, FaHeart, FaUsers, FaAward, FaStar, FaLeaf } from "react-icons/fa";
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { icon: FaPizzaSlice, number: "50,000+", label: "Pizzas Served", color: "text-red-500" },
    { icon: FaUsers, number: "25,000+", label: "Happy Customers", color: "text-blue-500" },
    { icon: FaAward, number: "15+", label: "Awards Won", color: "text-yellow-500" },
    { icon: FaStar, number: "4.9", label: "Average Rating", color: "text-green-500" }
  ];

  const values = [
    {
      icon: FaHeart,
      title: "Made with Love",
      description: "Every pizza is crafted with passion and attention to detail",
      color: "text-red-500"
    },
    {
      icon: FaLeaf,
      title: "Fresh Ingredients",
      description: "We source the finest, freshest ingredients from local suppliers",
      color: "text-green-500"
    },
    {
      icon: FaUsers,
      title: "Community First",
      description: "We're proud to be part of the community and give back whenever we can",
      color: "text-blue-500"
    }
  ];

  const milestones = [
    {
      year: "1995",
      title: "The Beginning",
      description: "LaPizzaria was born in a small family kitchen with a dream to serve authentic Italian pizza",
      icon: "🏠"
    },
    {
      year: "2005",
      title: "First Restaurant",
      description: "Opened our first brick-and-mortar location after 10 years of perfecting our recipes",
      icon: "🏪"
    },
    {
      year: "2015",
      title: "Going Digital",
      description: "Launched our online ordering system and delivery service",
      icon: "💻"
    },
    {
      year: "2020",
      title: "Expansion",
      description: "Opened 5 new locations and introduced contactless delivery during the pandemic",
      icon: "🚀"
    },
    {
      year: "2024",
      title: "Today",
      description: "Now serving thousands of pizza lovers worldwide with 12 locations and growing!",
      icon: "🌍"
    }
  ];

  const tabs = [
    { id: 'story', label: 'Our Story', icon: FaHeart },
    { id: 'values', label: 'Our Values', icon: FaStar },
    { id: 'timeline', label: 'Timeline', icon: FaAward }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-red-500">LaPizzaria</span> 🍕
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From a small family kitchen to serving thousands worldwide, 
            discover the passion and dedication behind every slice we make.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <stat.icon className={`text-4xl ${stat.color} mx-auto mb-3`} />
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content with Tabs */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="sticky top-8"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
              <ImageSlider />
            </div>
          </motion.div>

          {/* Content Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="text-lg" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 min-h-[400px]">
              {activeTab === 'story' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <FaHeart className="text-red-500" />
                    Our Story
                  </h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      Welcome to <span className="text-red-400 font-semibold">LaPizzaria</span>! 
                      What started as a small family passion in 1995 has grown into a beloved 
                      destination where people come together to enjoy authentic, handcrafted pizzas.
                    </p>
                    <p>
                      Our journey began in a humble family kitchen, where our founder, 
                      Maria Rossi, perfected her grandmother's traditional Italian recipes. 
                      With nothing but passion, dedication, and a wood-fired oven, 
                      she began serving the neighborhood with pizzas that reminded everyone of home.
                    </p>
                    <p>
                      Today, we continue that same tradition of excellence. Every pizza is 
                      hand-stretched, topped with the finest ingredients, and baked to perfection. 
                      Our secret? Fresh ingredients, traditional techniques, and a whole lot of love 
                      in every slice.
                    </p>
                    <p className="text-red-300 font-semibold italic">
                      "We don't just make pizza – we create memories, one slice at a time."
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'values' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <FaStar className="text-yellow-500" />
                    Our Values
                  </h2>
                  <div className="space-y-6">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                      >
                        <value.icon className={`text-3xl ${value.color} mt-1 flex-shrink-0`} />
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {value.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'timeline' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <FaAward className="text-yellow-500" />
                    Our Journey
                  </h2>
                  <div className="space-y-6">
                    {milestones.map((milestone, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border-l-4 border-red-500"
                      >
                        <div className="text-3xl flex-shrink-0">
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl font-bold text-red-400">
                              {milestone.year}
                            </span>
                            <h3 className="text-xl font-semibold text-white">
                              {milestone.title}
                            </h3>
                          </div>
                          <p className="text-gray-300 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-lg rounded-3xl p-12 border border-red-500/30"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Taste the Difference? 🍕
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience the authentic flavors 
            that have made LaPizzaria a beloved destination for pizza lovers.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/menu'}
            className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Order Your Pizza Now! 🚀
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;