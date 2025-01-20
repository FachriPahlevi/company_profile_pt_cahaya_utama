import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-gray-800 text-white py-8 md:py-12"
      style={{
        backgroundImage: "url('/img/background/footer_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 px-4 md:px-12">
        {/* Kolom 1 - Judul Resmi */}
        <div className="md:col-span-2 text-center md:text-left flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Official Website – IT Division</h3>
          <p className="text-base md:text-lg text-gray-400">Copyright © 2020 All Rights Reserved</p>
        </div>

        {/* Kolom 2 - Deskripsi Perusahaan */}
        <div className="md:col-span-3 text-center md:text-left flex flex-col justify-center">
          <h3 className="text-lg md:text-xl font-bold mb-3">Cahaya Utama Smart Office Technology</h3>
          <p className="text-sm md:text-base text-gray-400">
            Dalam menunjang kegiatan menejemen PT. Cahaya Utama mengembangkan sebuah Aplikasi Pintar
            <span className="font-bold text-white"> Cusoft </span>
            sebagai produktifitas secara realtime, berakurasi tinggi, cepat, paperless, daya rekam tak terbatas, komunikatif, interaktif dan efektif.
          </p>
        </div>

        {/* Kolom 3 - Logo dan Playstore */}
        <div className="md:col-span-1 flex flex-col items-center md:items-end space-y-4">
          <img 
            src="/img/logo/cusoft_logo.png" 
            alt="Cusoft Logo" 
            className="h-12 md:h-16 w-auto object-contain"
          />
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-40 md:w-48"
          >
            <img 
              src="/img/logo/playstore_logo.png" 
              alt="Google Play" 
              className="w-full h-auto object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}