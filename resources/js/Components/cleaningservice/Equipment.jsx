import React from "react";
import { motion } from "framer-motion"; // Optional: untuk animasi

export default function Equipment() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                {/* Equipments Section */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 items-center sm:items-start"
                >
                    <img
                        src="img/brilliant/karcher.jpg"
                        alt="Mechanical tool equipment"
                        className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4 sm:mb-0"
                    />
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-3">Equipments</h2>
                        <p className="text-sm md:text-base text-gray-600">
                            Kami melengkapi alat kerja menurut standar nasional untuk pelaksanaan kegiatan kebersihan antara lain:{" "}
                            <span className="font-bold">Mechanical tools</span> seperti polisher machine, wet & dry vacuum cleaner, hand polisher, dsb.{" "}
                            <span className="font-bold">Acciliary equipment</span> seperti press mop double bucket & single bucket, broom, stager, toilet bowl brush, mop, dsb.
                        </p>
                    </div>
                </motion.div>

                {/* Chemicals Section */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 items-center sm:items-start"
                >
                    <img
                        src="img/brilliant/kontorprofen.jpg"
                        alt="Chemical cleaner"
                        className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4 sm:mb-0"
                    />
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-3">Chemicals</h2>
                        <p className="text-sm md:text-base text-gray-600">
                            Kami membekali beragam produk bahan kimia pembersih berkualitas seperti{" "}
                            <span className="font-bold">regular cleaner, desinfectant, sealer & multi purpose cleaner</span>. Produk pembersih tersebut ramah lingkungan dan memiliki MSDS (Material Safety Data Sheet). Brand produk pembersih pilihan kami antara lain Johnson Diversy & Johnson dan Ecolab.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}