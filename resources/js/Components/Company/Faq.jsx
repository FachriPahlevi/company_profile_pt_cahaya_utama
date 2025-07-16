import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiPlus } from "react-icons/fi";

const faqList = [
    {
        question:
            "Apa benefit atau keuntungan bermitra dengan PT. Cahaya Utama?",
        answer: "CU punya SIUP dan NIB, tapi nomor identitas tidak boleh di showing...",
    },
    {
        question: "Apa saja kerjasama yang dilakukan PT. Cahaya Utama?",
        answer: "PT. Cahaya Utama turut bekerjasama dengan badan maupun perusahaan lain, diantaranya DJP (pelaporan pajak), Kemenaker (pendaftaran personil), Kepolisian (training security & terdaftar SIO), BPJS (semua personil terdaftar di BPJS), Ecolab (MCU) dan Johnson (kerjasama chemical).",
    },
    {
        question: "Apa saja produk atau layanan yang ditawarkan?",
        answer: "PT. Cahaya Utama menawarkan 3 layanan antara lain, yaitu SON Security, Brilliant Clean dan TOR (Trust Our Resources).",
    },
    {
        question: "Dimana lokasi kantor cabang PT. Cahaya Utama?",
        answer: "Lokasi utama PT. Cahaya Utama ada di Komplek Perkantoran Mangga Dua A6 No. 1-2, Jl. Jagir Wonokromo 100, Surabaya. Kami juga memiliki kantor perwakilan di Jawa Tengah, Jawa Barat, DI Yogyakarta dan DKI Jakarta.",
    },
    {
        question: "Bagaimana legalitas PT. Cahaya Utama?",
        answer: "PT. Cahaya Utama merupakan perusahaan yang legal dan telah dilengkapi dengan izin resmi termasuk SIUP dan NIB.",
    },
    {
        question: "Apa saja sertifikasi yang dimiliki PT. Cahaya Utama?",
        answer: "PT. Cahaya Utama sudah memiliki sertifikasi diantaranya, yaitu sertifikasi ISO 9001 (Sistem Management Mutu) dan sertifikasi ISO 45001 (Sistem Management K3).",
    },
    {
        question: "Apakah security PT. Cahaya Utama memiliki sertifikasi?",
        answer: "Semua tenaga keamanan dari SON SECURITY sudah memiliki kompetensi Gada Pratama, Madya maupun Utama, sehingga dalam menjalankan tugas memiliki kewenangan kepolisian terbatas di wilayah kerjanya.",
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-blue-600 font-semibold text-sm uppercase mb-2 tracking-wide">
                    FAQ
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    FAQ Cahaya Utama
                </h2>

                <div className="space-y-4">
                    {faqList.map((item, index) => (
                        <div
                            key={index}
                            className="border border-blue-300 rounded-lg overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="w-full text-left p-4 md:p-5 bg-white hover:bg-blue-50 flex justify-between items-center font-medium text-blue-900"
                                onClick={() => toggle(index)}
                                aria-expanded={activeIndex === index}
                            >
                                {item.question}
                                <span className="ml-4">
                                    {activeIndex === index ? (
                                        <FiX className="text-blue-500 text-xl" />
                                    ) : (
                                        <FiPlus className="text-blue-500 text-xl" />
                                    )}
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden px-4 md:px-5 pb-4 text-gray-700 text-sm text-justify"
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
