import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ClientSection() {
    const [clientLogos, setClientLogos] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get("/clients");
                setClientLogos(response.data);
            } catch (error) {
                console.error("Error fetching client logos:", error);
            }
        };

        fetchClients();
    }, []);

    return (
        <section
            className="bg-white py-16 px-6"
            aria-labelledby="client-section-title"
        >
            <div className="max-w-7xl mx-auto">
                {/* Title & Description */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-16 mb-12 items-center">
                    <div>
                        <p className="text-primary-500 font-semibold text-sm uppercase mb-2">
                            Partner Kami
                        </p>
                        <h2
                            id="client-section-title"
                            className="text-2xl md:text-3xl font-semibold text-gray-900"
                        >
                            Partner Sukses Kami
                        </h2>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed">
                        PT. Cahaya Utama bangga menjalin kemitraan dengan
                        beragam klien terkemuka yang telah merasakan dedikasi
                        dan kualitas layanan dalam penyediaan jasa tenaga kerja.
                    </p>
                </div>

                {/* Client Logos */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
                    {clientLogos.map((client) => (
                        <div
                            key={client.id}
                            className="flex items-center justify-center p-2 transition duration-300 ease-in-out"
                        >
                            <img
                                src={client.logo}
                                alt={`Logo ${client.name}`}
                                loading="lazy"
                                width="140"
                                height="60"
                                className="h-10 md:h-12 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
