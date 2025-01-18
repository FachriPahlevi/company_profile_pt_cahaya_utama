import React from "react";
import { FaHandshake } from "react-icons/fa";

const Cooperation = () => {
  const clientLogos = [
    {
      name: "Direktorat Jenderal Pajak",
      logo: "/img/cooperation/djp_logo.png",
      width: "90px", // Tambahkan properti width
      height: "auto", // Tambahkan properti height
    },
    {
      name: "Kementerian Ketenagakerjaan",
      logo: "/img/cooperation/kemnaker_logo.png",
      width: "100px",
      height: "auto",
    },
    {
      name: "Kepolisian Negara Republik Indonesia",
      logo: "/img/cooperation/kapolri_logo.png",
      width: "150px",
      height: "auto",
    },
    {
      name: "BPJS Ketenagakerjaan",
      logo: "/img/cooperation/bpjs_ketenagakerjaan_logo.png",
      width: "200px",
      height: "auto",
    },
    {
      name: "Ecolab",
      logo: "/img/cooperation/ecolab_logo.png",
      width: "120px",
      height: "auto",
    },
    {
      name: "Johnson Diversey",
      logo: "/img/cooperation/johnson_logo.png",
      width: "130px",
      height: "auto",
    },
    {
      name: "BPJS Kesehatan",
      logo: "/img/cooperation/BPJS_Kesehatan_logo.png",
      width: "200px",
      height: "auto",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Bagian kiri dengan ikon dan teks */}
          <div className="md:w-1/4">
            <div className="mb-6 flex justify-center">
              <FaHandshake className="w-16 h-16 text-center text-gray-700" />
            </div>
            <div className="flex justify-center">
              <h2 className="text-gray-700 text-2xl font-medium leading-relaxed">
                Bekerjasama dan didukung
                <br />
                Oleh Badan dan perusahaan
              </h2>
            </div>
          </div>

          {/* Bagian kanan dengan grid logo */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-center">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex items-center justify-center p-2">
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{ width: client.width, height: client.height }} // Gunakan properti dinamis
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

export default Cooperation;
