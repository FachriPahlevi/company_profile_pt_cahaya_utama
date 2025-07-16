import React, { useState, useEffect } from "react";
import axios from "axios";

const Cooperation = () => {
    const [logos, setLogos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLogos = async () => {
            try {
                const response = await axios.get("/cooperations");
                setLogos(response.data);
                setIsLoading(false);
            } catch (err) {
                console.error("Error fetching cooperation logos:", err);
                setError("Gagal memuat logo kerjasama.");
                setIsLoading(false);
            }
        };

        fetchLogos();
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500 border-solid" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 text-red-700 border border-red-300 rounded px-4 py-3 text-center">
                {error}
            </div>
        );
    }

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Title */}
                <p className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-2">
                    Kerjasama
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Dukungan Badan & Perusahaan
                </h2>
                <p className="text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
                    PT. Cahaya Utama telah menjalin kerja sama erat dengan
                    berbagai pihak terkait untuk memenuhi kebutuhan penyediaan
                    Sumber Daya Manusia (SDM).
                </p>

                {/* Logo Grid */}
                {logos.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
                        {logos.map((logo, idx) => (
                            <div
                                key={logo.id || idx}
                                className="flex items-center justify-center"
                            >
                                <img
                                    src={logo.logo}
                                    alt={
                                        logo.name || `Logo kerjasama ${idx + 1}`
                                    }
                                    className="h-12 md:h-16 object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">
                        Tidak ada logo kerjasama tersedia.
                    </p>
                )}
            </div>
        </section>
    );
};

export default Cooperation;
