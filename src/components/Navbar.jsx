import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Pizza, Menu, X, User, LogOut } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
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

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-blue-100' 
            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700'
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
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <Pizza className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <div>
                <h1 className={`text-2xl font-display font-bold ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' 
                    : 'text-white'
                }`}>
                  LaPizzaria
                </h1>
                <p className={`text-xs ${
                  isScrolled ? 'text-gray-500' : 'text-blue-100'
                }`}>
                  Premium Delivery
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                        isActive(item.path)
                          ? isScrolled
                            ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                            : 'text-blue-600 bg-white/20 backdrop-blur-sm shadow-lg'
                          : isScrolled
                            ? 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500'
                            : 'text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm'
                      }`}
                    >
                      {item.label}
                    </motion.div>
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* Cart */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <Link
                  to="/cart"
                  className="relative p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <ShoppingCart className="w-6 h-6 text-white" />
                  <AnimatePresence>
                    {totalCartItems > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-sm font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-lg border-2 border-white"
                      >
                        {totalCartItems}
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
                    className={`flex items-center gap-3 p-2 rounded-xl transition-all duration-300 ${
                      isScrolled
                        ? 'hover:bg-gray-100 text-gray-700'
                        : 'hover:bg-white/20 text-white'
                    }`}
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                    />
                    <span className="font-semibold">
                      {user.name}
                    </span>
                  </motion.button>

                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2"
                      >
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
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
                    className={`px-4 py-2 font-semibold rounded-lg transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-blue-600'
                        : 'text-white/90 hover:text-white hover:bg-white/20'
                    }`}
                  >
                    Sign In
                  </button>
                  <motion.button
                    onClick={() => openAuthModal('signup')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Sign Up
                  </motion.button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              {/* Mobile Cart */}
              <Link to="/cart" className="relative p-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                <ShoppingCart className="w-5 h-5 text-white" />
                <AnimatePresence>
                  {totalCartItems > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border border-white"
                    >
                      {totalCartItems}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'bg-gray-100 text-gray-700'
                    : 'bg-white/20 text-white'
                }`}
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
                className="lg:hidden border-t border-white/20 py-4 bg-white/95 backdrop-blur-lg rounded-b-xl mt-2"
              >
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg'
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {user ? (
                    <div className="px-4 py-3 border-t border-gray-200">
                      <div className="flex items-center gap-3 mb-3">
                        <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                        <span className="text-gray-700 font-semibold">{user.name}</span>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <div className="px-4 py-3 space-y-2 border-t border-gray-200">
                      <button
                        onClick={() => {
                          openAuthModal('login');
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => {
                          openAuthModal('signup');
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2.5 rounded-lg font-bold shadow-lg"
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