import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/Layouts/MainLayout';
import Client from '@/Components/Client';
import Cooperation from '@/Components/Cooperation';
import Capabilities from '@/Components/Capabilities';
import Service from '@/Components/Service';
import Office from '@/Components/Office';

export default function Company() {
  return (
    <MainLayout>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-cover bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: 'url(img/company/meeting01gg.jpg)' }}
    >
      <div className="flex-grow flex flex-col  justify-center text-white p-12 w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-yellow-400 text-left">
          Selamat Datang dan Terimakasih telah mengunjungi website
        </h1>
        <h2 className="text-4xl text-left font-bold mb-6">PT. Cahaya Utama</h2>
        <p className="text-2xl mb-4">
          Perusahaan jasa <span className="font-bold">Outsourcing/Alih Daya</span> di berbagai bidang dengan standardisasi internasional,
          dan kami senantiasa memberikan pelayanan terbaik untuk negeri ini...
        </p>    
      </div>
    </motion.div>
    <Service/>
    <Client/>
    <Cooperation/>
    <Capabilities/>
    <Office/>
    </MainLayout>
  );
}
