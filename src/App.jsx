import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import OrderTracking from "./pages/OrderTracking";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import ConfirmOrder from "./pages/ConfirmOrder";
import CartNotification from "./components/CartNotification";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen flex flex-col">
              <Navbar /> 
              <CartNotification />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/order-tracking" element={<OrderTracking />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/confirm-order" element={<ConfirmOrder />} />
                </Routes>
              </div>
              <Footer />
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 3000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                  },
                }}
              />
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;