import React from "react";
import { Shield, Clock, RotateCcw, Users, Box, Gavel } from "lucide-react";
import { RiPoliceBadgeLine } from "react-icons/ri";
import { FaBoxOpen, FaStopwatch } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

export default function Service() {
  return (
    <div className="bg-[#343332] px-4 py-12 md:px-8 lg:px-12">
      {/* Bagian Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-0">
          <RiPoliceBadgeLine className="w-16 h-16 md:w-32 md:h-32 text-white mb-4 md:mb-0" />
          <h1 className="text-2xl md:text-4xl font-bold text-yellow-400 text-center md:text-left leading-tight">
            Lingkup Pekerjaan<br />Security Service
          </h1>
        </div>
        
        <div className="space-y-6 w-full md:w-1/2">
          {/* Perlindungan Lingkungan 24 Jam */}
          <div className="flex items-start gap-4">
            <FaClockRotateLeft className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                Perlindungan Lingkungan 24 Jam
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Pengamanan terhadap obyek perusahaan secara rutin dan terus-menerus
                dengan dilakukannya patroli terjadwal.
              </p>
            </div>
          </div>

          {/* Rotasi Kerja */}
          <div className="flex items-start gap-4">
            <FaStopwatch className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">Rotasi Kerja</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Rotasi kerja (shift) dengan fokus pada penyelenggarakan keamanan dan
                ketertiban perusahaan (physical security).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Konten */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Keselamatan SDM */}
        <div className="flex items-start gap-4">
          <Users className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">Keselamatan SDM</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Melindungi keselamatan sumber daya manusia lain dari bahaya dan
              ancaman.
            </p>
          </div>
        </div>

        {/* Pengamanan Aset */}
        <div className="flex items-start gap-4">
          <FaBoxOpen className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">Pengamanan Aset</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Mencegah pihak yang tidak berkepentingan mencapai fasilitas, harta,
              peralatan, material dan informasi penting perusahaan.
            </p>
          </div>
        </div>

        {/* Penegakan Peraturan */}
        <div className="flex items-start gap-4">
          <Gavel className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-2">Penegakan Peraturan</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Menegakkan peraturan perusahaan kepada karyawan, tamu maupun pihak
              lainnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}