import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-gray-800 text-white py-8"
      style={{
        backgroundImage: "url('/img/background/footer_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 px-4 md:px-12">
        {/* Kolom 1 */}
        <div className="md:col-span-2 text-center md:text-left my-auto">
          <h3 className="text-2xl font-bold">Official Website – IT Division</h3>
          <p className="text-lg text-gray-400 mt-2">Copyright © 2020 All Rights Reserved</p>
        </div>

        {/* Kolom 2 */}
        <div className="md:col-span-3 pr-12 text-center md:text-left my-auto ">
          <h3 className="text-xl font-bold">Cahaya Utama Smart Office Technology</h3>
          <p className="text-md text-gray-400 mt-2">
            Dalam menunjang kegiatan menejemen PT. Cahaya Utama mengembangkan sebuah Aplikasi Pintar
            <span className="font-bold text-white"> Cusoft </span>
            sebagai produktifitas secara realtime, berakurasi tinggi, cepat, paperless, daya rekam tak terbatas, komunikatif, interaktif dan efektif.
          </p>
        </div>

        {/* Kolom 3 */}
        <div className="md:col-span-1 text-center md:text-left">
          <img src="/img/logo/cusoft_logo.png" alt="Cusoft Logo" className="mx-auto md:mx-0 mb-4 h-auto" />
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/logo/playstore_logo.png" alt="Google Play" className="mx-auto md:mx-0" />
          </a>
        </div>
      </div>
    </footer>
  );
}
