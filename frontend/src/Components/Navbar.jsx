import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/UND_DP.jpg";
import { Menu, X } from "lucide-react";
import HeaderCTA from "./HeaderCTA";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Catalogue", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg shadow-lg z-50" role="navigation" aria-label="Main navigation">
      <HeaderCTA />

      {/* Navbar Container */}
      <div className="max-w-8xl mx-auto px-4 md:px-12 lg:px-5 flex items-center justify-between h-16">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3 flex-1">
          <Link to="/" className="flex items-center space-x-3" title="Urban Nest Designs Home">
            <img
              src={logo}
              alt="Urban Nest Designs Logo"
              className="w-10 h-10 rounded-full shadow-lg border border-gray-300"
            />
            <span
              className="text-gray-900 text-xl md:text-2xl font-semibold tracking-wide uppercase"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Urban Nest Designs
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="text-gray-800 text-lg font-medium hover:text-[#C39A66] transition-colors duration-300"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="text-gray-800 font-medium hover:text-[#C39A66]">
                Login
              </Link>
              <Link to="/register" className="bg-[#C39A66] text-white px-4 py-1.5 rounded-md hover:bg-[#b08655] transition">
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600"
              aria-label="Logout"
            >
              Logout
            </button>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-900 p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 inset-y-0 w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex flex-col h-screen bg-white">
          {/* Close Button */}
          <div className="p-4 flex justify-end border-b">
            <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
              <X size={28} className="text-gray-700" />
            </button>
          </div>

          {/* Scrollable Nav List */}
          <ul className="flex-1 overflow-y-auto px-6 py-4 space-y-6 bg-white">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-gray-800 text-lg font-medium hover:text-[#C39A66]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {!isLoggedIn ? (
              <>
                <li>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="text-red-600 font-medium"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
