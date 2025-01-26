import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHandshake } from "react-icons/fa";

const ClientSection = () => {
  const [clientLogos, setClientLogos] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('/clients'); // Ganti dengan URL API Anda
        setClientLogos(response.data);
      } catch (error) {
        console.error("Error fetching client logos:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="bg-blue-50 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Left section with handshake icon and text */}
          <div className="w-full lg:w-1/4 flex flex-col items-center text-center lg:text-left">
            <div className="mb-4 sm:mb-6">
              <FaHandshake className="w-12 h-12 sm:w-16 sm:h-16 text-gray-700 mx-auto" />
            </div>
            <div>
              <h2 className="text-gray-700 text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed">
                Mereka Sebagian
                <br />
                Yang Mempercayakan
                <br />
                Kepada Kami
              </h2>
            </div>
          </div>

          {/* Right section with client logos */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
              {clientLogos.map((client) => (
              <div 
              key={client.id} 
              className="flex items-center justify-center p-2 rounded-lg transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-32 h-32 object-contain duration-300"
              />
            </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;