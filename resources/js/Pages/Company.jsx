import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/Layouts/MainLayout';
import Client from '@/Components/Client';
import Cooperation from '@/Components/Cooperation';
import Capabilities from '@/Components/Capabilities';
import Service from '@/Components/Service';
import Office from '@/Components/Office';
import { Helmet } from 'react-helmet';

export default function Company() {
  return (
    <MainLayout>
      <Helmet>
        <title>Tentang PT. Cahaya Utama - Perusahaan Jasa Outsourcing Profesional</title>
        <meta name="description" content="PT. Cahaya Utama adalah perusahaan terkemuka yang menyediakan solusi outsourcing manajemen sumber daya manusia. Kami menawarkan layanan kebersihan, keamanan, dan tenaga kerja terampil dengan standar kualitas tinggi, untuk memenuhi kebutuhan bisnis Anda." />
        <meta name="keywords" content="PT. Cahaya Utama, perusahaan outsourcing, jasa outsourcing, manajemen sumber daya manusia, kebersihan profesional, keamanan perusahaan, tenaga kerja terampil" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tentang PT. Cahaya Utama - Solusi Outsourcing Terpercaya" />
        <meta property="og:description" content="Pelajari lebih lanjut tentang PT. Cahaya Utama, perusahaan penyedia solusi outsourcing yang terpercaya, menawarkan layanan kebersihan, keamanan, dan tenaga kerja terampil untuk mendukung kesuksesan bisnis Anda." />
        <meta property="og:url" content="https://www.cahayautamapt.com/perusahaan" />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{ backgroundImage: 'url(img/company/meeting01gg.jpg)' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
                Selamat Datang dan Terimakasih
                <br className="hidden md:block" />
                telah mengunjungi website
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                PT. Cahaya Utama
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
                Perusahaan jasa <span className="font-bold">Outsourcing/Alih Daya</span> di berbagai bidang
                dengan standardisasi internasional, dan kami senantiasa memberikan
                pelayanan terbaik untuk negeri ini...
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </motion.div>
      <Service />
      <Client />
      <Cooperation />
      <Capabilities />
      <Office />
    </MainLayout>
  );
}