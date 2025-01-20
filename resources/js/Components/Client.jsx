import React from "react";
import { FaHandshake } from "react-icons/fa";

const ClientSection = () => {
  const clientLogos = [
    { name: "Semen Indonesia", logo: "/img/client/Semen_Indonesia_logo.png" },
    { name: "BCA", logo: "/img/client/BCA_logo.png" },
    { name: "BNI", logo: "/img/client/BNI_logo.png" },
    { name: "BII", logo: "/img/client/bii_logo.png" },
    { name: "Ajinomoto", logo: "/img/client/Ajinomoto_logo.png" },
    { name: "Indonesia Power", logo: "/img/client/PLN_logo.png" },
    { name: "Kapal Api", logo: "/img/client/kapal_api_logo.png" },
    { name: "Gudang Garam", logo: "/img/client/gudang_garam_logo.png" },
    { name: "Waskita", logo: "/img/client/Waskita_Karya.png" },
    { name: "Prodia", logo: "/img/client/Prodia_logo.jpeg" },
    { name: "WIKA", logo: "/img/client/Wijaya_Karya.png" },
    { name: "Auto 2000", logo: "/img/client/Auto2000_logo.png" },
    { name: "Corteva", logo: "/img/client/Corteva_logo.png" },
    { name: "Suzuki Finance", logo: "/img/client/Suzuki_logo.png" },
    { name: "B-LOG", logo: "/img/client/b_log_logo.png" },
    { name: "DHL", logo: "/img/client/DHL_Logo.png" },
    { name: "Indomobil Finance", logo: "/img/client/indo_mobil_logo.jpg" },
  ];

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
              {clientLogos.map((client, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-2 hover:bg-blue-100 rounded-lg transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full h-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
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