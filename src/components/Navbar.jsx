import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Pizza, Menu, X, Sun, Moon, User, LogOut } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg shadow-lg border-b border-neutral-200 dark:border-neutral-700' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                  <Pizza className="w-5 h-5 text-white" />
                </div>
              </motion.div>
              <div>
                <h1 className="text-xl font-display font-bold gradient-text">
                  LaPizzaria
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                          : 'text-neutral-900 dark:text-neutral-100 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      }`}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              {/* Cart */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Link
                  to="/cart"
                  className="relative p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <ShoppingCart className="w-5 h-5 text-white" />
                  <AnimatePresence>
                    {cart.length > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
                      >
                        {cart.reduce((sum, item) => sum + item.quantity, 0)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>

              {/* Auth Section */}
              {user ? (
                <div className="relative">
                  <motion.button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                      {user.name}
                    </span>
                  </motion.button>

                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 py-2"
                      >
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-4 py-2 text-left text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => openAuthModal('login')}
                    className="px-4 py-2 text-neutral-900 dark:text-neutral-100 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => openAuthModal('signup')}
                    className="btn-primary"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              {/* Mobile Cart */}
              <Link to="/cart" className="relative p-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-white" />
                <AnimatePresence>
                  {cart.length > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full"
                    >
                      {cart.reduce((sum, item) => sum + item.quantity, 0)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-neutral-200 dark:border-neutral-700 py-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg"
              >
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                          : 'text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-neutral-900 dark:text-neutral-100 font-medium">Theme</span>
                    <button
                      onClick={toggleTheme}
                      className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                    >
                      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                  </div>

                  {user ? (
                    <div className="px-4 py-3 border-t border-neutral-200 dark:border-neutral-700">
                      <div className="flex items-center gap-3 mb-3">
                        <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                        <span className="text-neutral-900 dark:text-neutral-100 font-medium">{user.name}</span>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:text-red-600"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <div className="px-4 py-3 space-y-2 border-t border-neutral-200 dark:border-neutral-700">
                      <button
                        onClick={() => {
                          openAuthModal('login');
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => {
                          openAuthModal('signup');
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full btn-primary"
                      >
                        Sign Up
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Navbar;