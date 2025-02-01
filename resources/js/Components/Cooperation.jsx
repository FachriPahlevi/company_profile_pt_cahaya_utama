import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHandshake } from "react-icons/fa";

const Cooperation = () => {
  // State untuk menyimpan logo klien
  const [clientLogos, setClientLogos] = useState([]);
  
  // State untuk mengelola status loading
  const [isLoading, setIsLoading] = useState(true);
  
  // State untuk menangani error
  const [error, setError] = useState(null);

  // Gunakan useEffect untuk mengambil data saat komponen dimuat
  useEffect(() => {
    const fetchClientLogos = async () => {
      try {
        // Ganti URL dengan endpoint API Anda
        const response = await axios.get('/cooperations');
        
        // Set data klien dari response
        setClientLogos(response.data);
        
        // Matikan loading
        setIsLoading(false);
      } catch (err) {
        // Tangani error jika gagal mengambil data
        setError('Gagal memuat logo kerjasama');
        setIsLoading(false);
        console.error("Error fetching client logos:", err);
      }
    };

    // Panggil fungsi fetch
    fetchClientLogos();
  }, []); // Array kosong berarti efek hanya dijalankan sekali saat komponen dimuat

  // Tampilkan loading jika sedang memuat data
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  // Tampilkan pesan error jika gagal memuat
  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Bagian kiri dengan ikon dan teks */}
          <div className="md:w-1/4">
            <div className="mb-6 flex justify-center">
              <img src="/img/cooperation/handshake.png" className="w-16 h-16 text-center text-gray-700" />
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
            {/* Cek apakah ada logo */}
            {clientLogos.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-center">
                {clientLogos.map((client, index) => (
                  <div key={client.id || index} className="flex items-center justify-center p-2">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="object-contain w-32 h-32"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500">
                Tidak ada logo kerjasama yang tersedia
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;