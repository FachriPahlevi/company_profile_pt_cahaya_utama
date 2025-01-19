import React from "react";
import { Shield, Clock, RotateCcw, Users, Box, Gavel } from "lucide-react";
import { RiPoliceBadgeFill } from "react-icons/ri";


export default function Service() {
  return (
    <div className="bg-gray-800 h-fit p-8">
      <div className="flex items-center mb-12">
        <div className="text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center mr-4">
          <RiPoliceBadgeFill className="w-48 h-48 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-yellow-400">Lingkup Pekerjaan</h1>
          <h2 className="text-4xl font-bold text-yellow-400">Security Service</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex items-start gap-4">
          <Users className="w-8 h-8 text-gray-400 flex-shrink-0" />
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">Keselamatan SDM</h3>
            <p className="text-gray-400">
              Melindungi keselamatan sumber daya manusia lain dari bahaya dan ancaman.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Box className="w-8 h-8 text-gray-400 flex-shrink-0" />
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">Pengamanan Aset</h3>
            <p className="text-gray-400">
              Mencegah pihak yang tidak berkepentingan mencapai fasilitas, harta, peralatan, material dan informasi penting perusahaan.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Gavel className="w-8 h-8 text-gray-400 flex-shrink-0" />
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">Penegakan Peraturan</h3>
            <p className="text-gray-400">
              Menegakkan peraturan perusahaan kepada karyawan, tamu maupun pihak lainnya.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="w-8 h-8 text-gray-400 flex-shrink-0" />
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">Perlindungan Lingkungan 24 Jam</h3>
            <p className="text-gray-400">
              Pengamanan terhadap obyek perusahaan secara rutin dan terus-menerus dengan dilakukannya patroli terjadwal.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <RotateCcw className="w-8 h-8 text-gray-400 flex-shrink-0" />
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">Rotasi Kerja</h3>
            <p className="text-gray-400">
              Rotasi kerja (shift) dengan fokus pada penyelenggarakan keamanan dan ketertiban perusahaan (physical security).
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-gray-500">
        <p>Perekaman Layar 2024-12-23 175720</p>
      </div>
    </div>
  );
}