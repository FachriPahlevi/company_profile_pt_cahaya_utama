import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6"
    style={{
      backgroundImage: "url('/img/background/footer_bg.jpg')"
  }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Official Website – IT Division</h3>
          <p className="text-sm text-gray-400">Copyright © 2020 All Rights Reserved</p>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Cahaya Utama Smart Office Technology</h3>
          <p className="text-sm text-gray-400">
            Dalam menunjang kegiatan menejemen PT. Cahaya Utama mengembangkan sebuah Aplikasi Pintar
            <span className="font-bold text-white"> Cusoft </span>
            sebagai produktifitas secara realtime, berakurasi tinggi, cepat, paperless, daya rekam tak terbatas, komunikatif, interaktif dan efektif.
          </p>
        </div>
        <div className="text-center md:text-left">
          <img src="/path/to/cusoft-logo.png" alt="Cusoft Logo" className="mb-2" />
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src="/path/to/google-play-badge.png" alt="Google Play" className="h-10" />
          </a>
        </div>
      </div>
    </footer>
  );
}
