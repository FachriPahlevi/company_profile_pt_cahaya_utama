import Scope from "@/Components/cleaningservice/Scope";
import Footer from "@/Components/Footer";
import Office from "@/Components/Office";
import Documentation from "@/Components/cleaningservice/Documentation";
import Equipment from "@/Components/cleaningservice/Equipment";
import Standard from "@/Components/sonsecurity/Standard";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

export default function SonSecurity() {
  return (
    <MainLayout>
      <div className="relative min-h-screen">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(img/background/As.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 h-screen flex items-end">
          {/* Main content */}
          <div className="flex flex-col lg:flex-row items-end gap-2 w-full">
            {/* left column - Security guard image */}
            <div className="w-full lg:w-1/2 flex flex-col">
              {/* Header logo */}
              <div className="mb-8 flex justify-between mx-auto items-center text-center">
                <img
                  src="img/service/logo-brilliant-clean.png"
                  alt="Son Security Logo"
                  className="h-16 object-contain flex justify-between mx-auto items-center text-center"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="img/brilliant/cleaning-crop-1.png"
                  alt="Security Personnel"
                  className="h-[480px] w-80 object-cover object-top"
                />
              </div>
            </div>
            {/* right column - Logo and content */}
            <div className="w-full lg:w-1/2 pb-24 ">
              {/* Text content */}
              <div className="text-white space-y-6">
                <h1 className="text-3xl lg:text-4xl font-medium leading-tight">
                  Pastikan Lingkungan Anda
                  <br />
                  <span className="text-5xl lg:text-6xl font-bold text-white">Aman, Nyaman, dan Terjaga</span>
                  <br />
                  <span className="text-4xl">Setiap Saat ...</span>
                </h1>

                <div className="pt-4">
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full flex items-center space-x-3 transition duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span className="text-lg">Download e-Paper</span>
                  </button>
                </div>

                <p className="text-xl mt-8">
                  <span className="font-bold">Son Security</span>, layanan penyedia alih daya jasa keamanan
                  <br />
                  (Outsourcing for Security) dari Cahaya Utama, untuk Anda...
                </p>
              </div>
              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-8 mt-16">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold">31600</h2>
                  <p className="text-gray-200 text-lg">Tenaga Kerja Distribusi</p>
                </div>
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold">37</h2>
                  <p className="text-gray-200 text-lg">Klien Perusahaan</p>
                </div>
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold">8</h2>
                  <p className="text-gray-200 text-lg">Bidang dan Keahlian</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat button */}
        <div className="fixed bottom-8 left-8 z-20">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-3 transition duration-300 shadow-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-lg">Bantuan? Chat kami!</span>
          </button>
        </div>
      </div>
      <Scope/>
      <Documentation/>
      <Equipment/>
      <Office/>
      <Footer/>
    </MainLayout>
  );
}