import React, { useState, useEffect } from "react";
import { Phone, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HeaderCTA = () => {
  const [step, setStep] = useState(0);
  const messages = [
    { id: 0, text: "✨ Welcome to Urban Nest Designs ✨" },
    { id: 1, icon: <Phone size={18} />, text: "+91 90245 76893" },
    { id: 2, icon: <Instagram size={20} />, text: "@urbannestdesigns.in" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % messages.length);
    }, 4500); // Change every 4.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#C39A66] text-white text-sm py-2 px-4 flex justify-center items-center shadow-md h-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={messages[step].id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          {messages[step].icon && messages[step].icon}
          <span>{messages[step].text}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeaderCTA;
