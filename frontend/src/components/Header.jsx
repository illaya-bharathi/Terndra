import React, { useState } from "react";
import { Menu, X, Smartphone, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" }, // ✅ Corrected from #top to #home
    { name: "About Us", href: "#about-section" },
    { name: "How it Works", href: "#how-it-works-section" },
    { name: "Contact Us", href: "#contact-section" },
  ];

  const handleLinkClick = (link) => {
    if (link.href) {
      const el = document.getElementById(link.href.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1304px] mx-auto px-2">
        <div className="flex items-center justify-between h-[56px]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleLinkClick({ href: "#home" })} // ✅ Corrected here as well
          >
            <img src="/logo.png" alt="Logo" className="w-[50px] h-[50px]" />
            <img src="/name.png" alt="Brand" className="h-[40px]" />
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link)}
                className="relative px-3 py-2 text-gray-800 hover:text-blue-600"
              >
                {link.name}
              </button>
            ))}

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl"
            >
              <Smartphone size={20} /> Get the App
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-gray-400 text-gray-800 px-5 py-2 rounded-xl"
              onClick={onLoginClick}
            >
              <LogIn size={20} /> Log In
            </motion.button>
          </nav>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                className="fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-40"
              >
                <nav className="flex flex-col p-6 h-full justify-between">
                  <div className="flex flex-col gap-4">
                    {links.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleLinkClick(link)}
                        className="py-3 text-gray-800 hover:text-blue-600 text-left"
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl"
                    >
                      <Smartphone size={20} /> Get the App
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 border border-gray-400 text-gray-800 py-3 rounded-xl"
                      onClick={() => {
                        onLoginClick();
                        setIsMenuOpen(false);
                      }}
                    >
                      <LogIn size={20} /> Log In
                    </motion.button>
                  </div>
                </nav>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-30"
                onClick={() => setIsMenuOpen(false)}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;