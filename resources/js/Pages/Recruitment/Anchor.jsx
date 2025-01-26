import { useState } from "react";
import { Check, Mail, FileText, AlertCircle, ChevronRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

const Requirements = () => {
  const [agreed, setAgreed] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const documents = [
    {
      title: "Dokumen Identitas",
      items: [
        "Pas Foto Formal (4x6)",
        "Kartu Tanda Penduduk (KTP)",
        "Kartu Keluarga (KK)"
      ]
    },
    {
      title: "Dokumen Pendidikan & Keahlian",
      items: [
        "Ijazah Pendidikan Terakhir",
        "Sertifikasi Pendukung",
        "Transkrip Nilai"
      ]
    },
    {
      title: "Dokumen Administratif",
      items: [
        "Surat Keterangan Catatan Kepolisian (SKCK)",
        "Surat Keterangan Sehat/Dokter",
        "Surat Lamaran Kerja",
        "Curriculum Vitae (CV)"
      ]
    }
  ];

  const posisiTersedia = [
    "Cleaning Service",
    "Staff SDM",
    "Staff IT",
    "Operator",
    "Supir",
    "Produksi",
    "Security"
  ];

  const kriteriaPelamar = [
    {
      kategori: "Persyaratan Umum",
      detail: [
        "Warga Negara Indonesia (WNI)",
        "Usia minimal 18 tahun",
        "Sehat jasmani dan rohani",
        "Berkelakuan baik"
      ]
    },
    {
      kategori: "Persyaratan Khusus",
      detail: [
        "Pendidikan sesuai kualifikasi posisi",
        "Memiliki kompetensi yang relevan",
        "Pengalaman kerja menjadi nilai tambah",
        "Memiliki kemampuan komunikasi yang baik"
      ]
    }
  ];

  const steps = [
    {
      title: "Persiapan Dokumen",
      description: "Siapkan semua dokumen yang diperlukan"
    },
    {
      title: "Verifikasi Data",
      description: "Periksa kembali kelengkapan data"
    },
    {
      title: "Pengiriman",
      description: "Kirim dokumen via email"
    }
  ];

  const emailTemplate = `Kepada Yth. Tim HRD
    PT. Cahaya Utama
    di Tempat

    Perihal: Surat Lamaran Pekerjaan

    Dengan hormat,

    Saya yang bertanda tangan di bawah ini:

    Nama Lengkap     : [Nama Lengkap Anda]
    Tempat/Tgl Lahir : [Tempat, Tanggal Lahir]
    Jenis Kelamin    : [Laki-laki/Perempuan]
    Alamat Domisili  : [Alamat Lengkap]
    No. Telepon      : [Nomor Handphone]
    Email            : [Alamat Email Aktif]

    Pendidikan Terakhir:
    - Institusi  : [Nama Sekolah/Universitas]
    - Jurusan    : [Program Studi]
    - Tahun Lulus: [Tahun Kelulusan]

    Dengan ini saya mengajukan lamaran untuk posisi:
    - Posisi yang Dilamar : [Posisi Outsourcing]
    - Penempatan         : [Nama Perusahaan Client]
    - Minat Kerja        : [Full Time/Part Time]

    Kualifikasi Singkat:
    1. [Keahlian Utama]
    2. [Pengalaman Relevan]
    3. [Sertifikasi yang Dimiliki]

    Lampiran yang saya sertakan:
    - Curriculum Vitae (CV)
    - Ijazah Terakhir
    - Kartu Identitas (KTP)
    - Pas Foto Terbaru

    Saya bersedia mengikuti seluruh proses seleksi dan siap ditempatkan sesuai kebutuhan perusahaan. Demikian surat lamaran ini saya sampaikan. Atas perhatian dan pertimbangan Bapak/Ibu, saya ucapkan terima kasih.

    Hormat saya,
    [Tanda Tangan]
    [Nama Lengkap]
    [Tanggal Melamar]`;

  const handleSendEmail = () => {
    if (agreed) {
      const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nurfachrialisnan@gmail.com&subject=${encodeURIComponent('Lamaran Pekerjaan Outsourcing')}&body=${encodeURIComponent(emailTemplate)}`;

      try {
        window.open(emailUrl, '_blank', 'noopener,noreferrer');
      } catch (error) {
        console.error("Gagal membuka email", error);
        alert("Tidak dapat membuka Gmail. Silakan coba lagi.");
      }
    }
  };

  const handleBack = () => {
    window.history.back(); // Kembali ke halaman sebelumnya
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg min-h-screen">
      {/* Tombol Back */}
      <button 
        onClick={handleBack}
        className="absolute top-6 left-6 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
      >
        <ArrowLeft size={24} className="text-gray-700" />
      </button>

      {/* Header */}
      <div className="mb-8 mt-12">
        <h1 className="text-3xl font-bold text-gray-900">Formulir Rekrutmen</h1>
        <p className="mt-2 text-gray-600">
          Lengkapi informasi berikut dengan teliti. Tanda <span className="text-red-500">*</span> menandakan wajib diisi
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full sm:w-1/3 mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep > index + 1 ? "bg-green-500" : activeStep === index + 1 ? "bg-blue-500" : "bg-gray-200"} text-white mb-2`}>
                {activeStep > index + 1 ? <Check size={16} /> : index + 1}
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">{step.title}</p>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Posisi yang Tersedia */}
      <div className="bg-green-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Posisi yang Tersedia</h2>
        <div className="flex flex-wrap gap-2">
          {posisiTersedia.map((posisi, idx) => (
            <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              {posisi}
            </span>
          ))}
        </div>
      </div>

      {/* Kriteria Pelamar */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {kriteriaPelamar.map((kriteria, idx) => (
          <div key={idx} className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">{kriteria.kategori}</h3>
            <ul className="space-y-2">
              {kriteria.detail.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Document Requirements */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="text-blue-500" />
          <h2 className="text-xl font-semibold">Persyaratan Dokumen</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-4 rounded-lg shadow"
            >
              <h3 className="font-semibold text-lg mb-3 text-gray-900">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check size={16} className="text-green-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-yellow-50 p-4 rounded-lg mb-8">
        <div className="flex items-center gap-2 text-yellow-800">
          <AlertCircle size={20} />
          <h3 className="font-semibold">Catatan Penting:</h3>
        </div>
        <ul className="mt-2 space-y-1 text-sm text-yellow-800">
          <li>• Pastikan semua dokumen dalam format gambar (.jpg/.png) dengan ukuran maksimal 4MB</li>
          <li>• Scan/foto dokumen harus jelas dan tidak blur</li>
          <li>• Dokumen asli perlu dibawa saat proses verifikasi</li>
        </ul>
      </div>

      {/* Agreement & Submit */}
      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
          />
          <span className="text-gray-700">
            Saya menyatakan bahwa data yang saya berikan adalah benar dan dapat dipertanggungjawabkan
          </span>
        </label>

        <div className="flex items-center gap-4">
          <button
            onClick={handleSendEmail}
            disabled={!agreed}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg ${agreed ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"} transition-colors`}
          >
            <Mail size={18} />
            Kirim Dokumen
            <ChevronRight size={18} />
          </button>

          <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
            Butuh bantuan?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Requirements;