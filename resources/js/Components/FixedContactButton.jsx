import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const FixedContactButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-12 lg:left-12 z-50 flex justify-end">
      <AnimatePresence>
        {!showDropdown ? (
          <motion.div
            className="flex items-center space-x-2"
            initial={{ scale: 1 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            {/* Icon WhatsApp */}
            <motion.button
              className="bg-[#39cd46] text-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-[#36b640] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDropdown(true)}
            >
              <BsWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.button>

            {/* Teks "Bantuan? Chat kami" */}
            <div className="bg-white text-gray-800 text-sm sm:text-base px-4 py-2 rounded-full shadow-md">
              Bantuan? Chat kami
            </div>
          </motion.div>
        ) : (
          <div className="relative">
            {/* Dropdown */}
            <motion.div
              className="bg-white rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden mb-12"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-[#39cd46] text-white p-3 sm:p-4 flex items-center">
                <div className="flex items-start">
                  <BsWhatsapp className="w-8 h-8 sm:w-9 sm:h-9 mr-2 sm:mr-3" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold">Customer Care</h3>
                    <p className="text-xs sm:text-sm">
                      Hi! Klik salah satu dari kami untuk berbicara di{" "}
                      <span className="font-bold">WhatsApp</span>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 sm:px-4">
                <p className="text-xs sm:text-sm text-left text-gray-400 font-medium mt-2 sm:mt-3">
                  Kami akan segera memberikan tanggapan
                </p>
                <p className="text-xs sm:text-sm text-left text-gray-400 font-medium mt-1 sm:mt-2">
                  Please accept our Privacy Policy first to start a new conversation
                </p>
              </div>

              <div className="p-3 sm:p-4">
                <a
                  href="https://wa.me/6282261246252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-l-4 border-green-500 flex items-start gap-2 sm:gap-3 p-2 sm:p-3 shadow-md rounded-md hover:bg-gray-50 transition"
                >
                  <img
                    src="img/logo/fav-icon-150x150.png"
                    alt="Profile"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border"
                  />
                  <div>
                    <h4 className="text-sm sm:text-base font-bold">Luna</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Customer Service</p>
                    <p className="text-xs sm:text-sm text-green-700 bg-green-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md mt-1 sm:mt-2">
                      Ada yang bisa kami bantu?
                    </p>
                  </div>
                </a>
              </div>

            </motion.div>

            {/* Tombol X di luar dropdown */}
            <motion.button
              className="absolute -bottom-2 left-0 bg-[#39cd46] text-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-[#36b640] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDropdown(false)}
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FixedContactButton;