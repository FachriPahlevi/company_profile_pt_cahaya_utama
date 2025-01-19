import Scope from "@/Components/trust/Scope";
import Footer from "@/Components/Footer";
import Office from "@/Components/Office";
import Documentation from "@/Components/trust/Documentation";
import Equipment from "@/Components/cleaningservice/Equipment";
import MainLayout from "@/Layouts/MainLayout";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

export default function Trust() {
   const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
  
      const statsElement = document.getElementById('stats-section');
      if (statsElement) {
        observer.observe(statsElement);
      }
  
      return () => {
        if (statsElement) {
          observer.unobserve(statsElement);
        }
      };
    }, []);
  
    const stats = [
      {
        value: 14700,
        label: "Tenaga Kerja Distribusi",
        suffix: "+"
      },
      {
        value: 13,
        label: "Klien Perusahaan",
        suffix: ""
      },
      {
        value: 7,
        label: "Bidang dan Keahlian",
        suffix: ""
      }
    ];

  return (
    <MainLayout>
      <div className="relative min-h-screen">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(img/background/background01-Recoveredqxx.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center md:items-end">
          {/* Main content */}
          <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-2 w-full">
            {/* left column - Security guard image */}
            <div className="w-full md:w-1/2 text-center md:text-left pb-8 md:pb-32">
              {/* Text content */}
              <div className="text-white space-y-6 md:space-y-12">
                <div className="gap-4">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
                    Perusahaan Berkelas
                    <br />
                    <span className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">Memiliki </span>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Sumber Daya Manusia</span>
                    <br />
                    <span className="text-3xl md:text-4xl">Setiap Saat ...</span>
                  </h1>
                </div>

                <div className="flex justify-center md:justify-start mb-6 md:mb-8">
                  <img
                    src="img/logo/logo-only-tor-trans-150x60.png"
                    alt="Son Security Logo"
                    className="h-12 md:h-16 object-contain"
                  />
                </div>

                <p className="text-base md:text-xl">
                  <span className="font-bold">Trust Our Resource</span>, layanan penyedia alih daya
                  <br />
                  Jasa dari Cahaya Utama yang dapat disesuaikan
                  <br />
                  dengan Kebutuhan Anda ...
                </p>
              </div>
            </div>
            
            {/* right column - Stats */}
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="flex justify-center">
                <div 
                  id="stats-section"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-10 lg:pb-12 w-full px-4"
                >
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="p-4 sm:p-6"
                    >
                      <div className="text-center text-white">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                          {isVisible && (
                            <CountUp
                              end={stat.value}
                              duration={2.5}
                              separator=","
                              suffix={stat.suffix}
                              useEasing={true}
                            />
                          )}
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-200">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat button */}
        <div className="fixed bottom-4 md:bottom-8 left-4 md:left-8 z-20">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center space-x-2 md:space-x-3 transition duration-300 shadow-lg">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm md:text-lg">Bantuan? Chat kami!</span>
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