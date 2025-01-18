import React from "react";
import { FaHandshake } from "react-icons/fa";

const ClientSection = () => {
  const clientLogos = [
    // First row
    { name: "Semen Indonesia", logo: "/img/client/Semen_Indonesia_logo.png", width: "100px", height: "auto" },
    { name: "BCA", logo: "/img/client/BCA_logo.png", width: "120px", height: "auto" },
    { name: "BNI", logo: "/img/client/BNI_logo.png", width: "100px", height: "auto" },
    { name: "BII", logo: "/img/client/bii_logo.png", width: "110px", height: "auto" },
    { name: "Ajinomoto", logo: "/img/client/Ajinomoto_logo.png", width: "90px", height: "auto" },
    { name: "Indonesia Power", logo: "/img/client/PLN_logo.png", width: "100px", height: "auto" },
    // Second row
    { name: "Kapal Api", logo: "/img/client/kapal_api_logo.png", width: "100px", height: "auto" },
    { name: "Gudang Garam", logo: "/img/client/gudang_garam_logo.png", width: "120px", height: "auto" },
    { name: "Waskita", logo: "/img/client/Waskita_Karya.png", width: "110px", height: "auto" },
    { name: "Prodia", logo: "/img/client/Prodia_logo.jpeg", width: "100px", height: "auto" },
    { name: "WIKA", logo: "/img/client/Wijaya_Karya.png", width: "90px", height: "auto" },
    { name: "Auto 2000", logo: "/img/client/Auto2000_logo.png", width: "120px", height: "auto" },
    // Third row
    { name: "Corteva", logo: "/img/client/Corteva_logo.png", width: "150px", height: "auto" },
    { name: "Suzuki Finance", logo: "/img/client/Suzuki_logo.png", width: "110px", height: "auto" },
    { name: "B-LOG", logo: "/img/client/b_log_logo.png", width: "90px", height: "auto" },
    { name: "DHL", logo: "/img/client/DHL_Logo.png", width: "120px", height: "auto" },
    { name: "Indomobil Finance", logo: "/img/client/indo_mobil_logo.jpg", width: "150px", height: "auto" },
  ];

  return (
    <div className="bg-blue-100 h-fit py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left section with handshake icon and text */}
          <div className="md:w-1/4 flex flex-col items-center justify-center h-full">
            <div className="mb-6">
              <FaHandshake className="w-16 h-16 text-center text-gray-700" />
            </div>
            <div>
              <h2 className="text-gray-700 text-2xl font-medium leading-relaxed text-center">
                Mereka Sebagian
                <br />
                Yang Mempercayakan
                <br />
                Kepada Kami
              </h2>
            </div>
          </div>

          {/* Right section with client logos */}
          <div className="md:w-3/4">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex items-center justify-center p-2">
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{ width: client.width, height: client.height }} // Properti dinamis
                    className="object-contain"
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
