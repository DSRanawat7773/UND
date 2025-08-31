import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star, Users, Smile, Shield, CheckCircle } from "lucide-react";

const WhyUs = () => {
  const points = [
    { icon: <Sparkles className="w-6 h-6 text-yellow-500" />, text: "Every mural is crafted with love and passion" },
    { icon: <Star className="w-6 h-6 text-yellow-500" />, text: "A timeless piece of art that elevates your space" },
    { icon: <Shield className="w-6 h-6 text-yellow-500" />, text: "Built with care to last for years" },
    { icon: <Smile className="w-6 h-6 text-yellow-500" />, text: "Designed to spark joy every time you see it" },
    { icon: <CheckCircle className="w-6 h-6 text-yellow-500" />, text: "Attention to detail you can truly feel" },
    { icon: <Heart className="w-6 h-6 text-yellow-500" />, text: "Art that connects with your emotions" },
    { icon: <Star className="w-6 h-6 text-yellow-500" />, text: "Handcrafted uniqueness in every design" },
    { icon: <Users className="w-6 h-6 text-yellow-500" />, text: "Created with guidance from interior experts" },
  ];

  const emotionalHighlights = [
    {
      title: "A Work of Passion",
      description: "Each mural is more than just decoration — it’s a story told through textures, patterns, and artistry that reflect warmth and creativity."
    },
    {
      title: "An Emotional Connection",
      description: "Our designs aren’t made for walls, they are made for hearts — sparking memories, emotions, and pride in your living space."
    },
    {
      title: "The Joy of Uniqueness",
      description: "You don’t just own a mural — you own something that no one else has. It’s your personal statement, your reflection, your pride."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Why People Fall in Love With Our Murals</h1>
        <p className="text-lg text-gray-600">
          It’s not just about art on walls — it’s about how it makes you feel every day you live with it.
        </p>
      </motion.div>

      {/* Emotional Highlights */}
      <div className="space-y-10 max-w-5xl mx-auto mb-16">
        {emotionalHighlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{highlight.title}</h2>
            <p className="text-gray-600">{highlight.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Features / Feelings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {points.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl transition"
          >
            {item.icon}
            <p className="text-gray-700 font-medium">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
