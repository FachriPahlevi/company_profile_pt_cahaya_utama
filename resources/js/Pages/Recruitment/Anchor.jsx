import { useState, useEffect } from "react";
import { Check, Mail, FileText, AlertCircle, ChevronRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Helmet } from "react-helmet";

const Requirements = () => {
  const [agreed, setAgreed] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      setIsMobile(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const generateEmailTemplate = () => {
    return `Yth. HRD PT. Cahaya Utama,

Saya tertarik untuk melamar pekerjaan melalui perusahaan outsourcing PT. Cahaya Utama. Berikut data saya:

Nama: [Nama Lengkap]
Posisi yang dilamar: [Posisi]
Nomor HP: [Nomor HP]
Email: [Alamat Email]
Alamat: [Alamat]

Terlampir saya sertakan CV dan dokumen pendukung.

Terima kasih.

Hormat saya,
[Nama Lengkap]`;
  };

  const handleSendEmail = () => {
    if (!agreed) return;

    const emailAddress = 'Loker@cahaya-utama.com';
    const subject = 'Lamaran Pekerjaan Outsourcing';
    const body = generateEmailTemplate();

    try {
      if (isMobile) {
        // For mobile devices
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
      } else {
        // For desktop browsers
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Universal fallback that works on both mobile and desktop
      const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg min-h-screen">
      {/* Tombol Back */}
      <Helmet>
        <title>Halaman Recruitment - PT. Cahaya Utama</title>
        <meta name="description" content="Temukan lowongan pekerjaan terbaru di PT. Cahaya Utama. Bergabung dengan tim kami dan raih kesempatan karir yang menarik di bidang outsourcing manajemen sumber daya manusia." />
        <meta name="keywords" content="lowongan kerja, PT Cahaya Utama, pekerjaan outsourcing, karir, recruitment, sumber daya manusia" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Halaman Recruitment - PT. Cahaya Utama" />
        <meta property="og:description" content="Temukan peluang karir di PT. Cahaya Utama dan bergabung dalam tim profesional kami. Kunjungi halaman recruitment kami untuk info lebih lanjut." />
        <meta property="og:url" content="https://www.cahayautamapt.com/recruitment" />
        <meta property="og:type" content="website" />
      </Helmet>

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

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={handleSendEmail}
            disabled={!agreed}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg ${agreed ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"
              } transition-colors`}
          >
            <Mail size={18} />
            Kirim via Email
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