import { Link } from "react-router-dom";
import { FaInstagram, FaPinterest, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Tagline */}
        <div>
          <h2 className="text-2xl font-semibold">Urban Nest Designs</h2>
          <p className="mt-2 text-gray-400">
            Elevating Spaces with Luxury 3D Wall Murals & Custom Water Fountains.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-medium">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-teal-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-teal-400">Our Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-teal-400">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-teal-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-medium">Contact Information</h3>
          <p className="mt-3 text-gray-400">📍 Location: Pune, Maharashtra</p>
          <p className="text-gray-400">📞 Phone: +91 9024576893</p>
          <p className="text-gray-400">✉️ Email: urbannestdesigns6@gmail.com</p>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-medium">Follow Us for More Inspiration</h3>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.instagram.com/urbannestdesigns.in/" className="text-gray-400 hover:text-teal-400 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://pin.it/1difHdN4P" className="text-gray-400 hover:text-teal-400 text-2xl">
            <FaPinterest />
          </a>
          <a href="https://www.facebook.com/share/1Ab86gvHrM/" className="text-gray-400 hover:text-teal-400 text-2xl">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-medium">Stay Updated</h3>
        <p className="text-gray-400">Sign up for our newsletter to receive exclusive offers.</p>
        <div className="mt-4 flex justify-center">
          <input type="email" placeholder="Enter your email" className="p-2 rounded-l-md text-gray-800" />
          <button className="bg-teal-500 px-4 py-2 rounded-r-md text-white">Subscribe</button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
        © 2024 Urban Nest Designs. All Rights Reserved. | 
        <Link to="/privacy" className="hover:text-teal-400">Privacy Policy</Link> | 
        <Link to="/terms" className="hover:text-teal-400">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
