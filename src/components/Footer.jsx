import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, Clock, Pizza, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400", label: "Facebook" },
    { icon: Twitter, href: "#", color: "hover:text-blue-300", label: "Twitter" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400", label: "Instagram" },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "123 Pizza Street, Food Town, USA" },
    { icon: Phone, text: "+1 (234) 567-890" },
    { icon: Mail, text: "hello@lapizzaria.com" },
    { icon: Clock, text: "Mon-Sun: 10 AM - 11 PM" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 right-1/4 w-32 h-32 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-glow">
                <Pizza className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold gradient-text">LaPizzaria</h3>
                <p className="text-sm text-gray-400">Premium Delivery</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed font-body">
              Crafting authentic Italian pizzas with passion and the finest ingredients. 
              Every slice tells a story of tradition and excellence.
            </p>
            <div className="flex items-center gap-2 text-accent-400">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Made with love since 1995</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white font-body">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 font-body flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full group-hover:w-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white font-body">Contact Info</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300 font-body">
                  <info.icon className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white font-body">Stay Connected</h4>
            <p className="text-gray-300 text-sm font-body">
              Subscribe to get special offers and updates!
            </p>
            
            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 font-body text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-r-lg hover:shadow-glow transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:bg-white/10 border border-white/10`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm font-body">
            © 2024 LaPizzaria. All rights reserved. Made with ❤️ for pizza lovers.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-body">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-body">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-body">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;