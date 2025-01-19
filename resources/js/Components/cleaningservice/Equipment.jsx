import React from "react";

export default function Equipment() {
    return (
        <div className="grid grid-cols-2 gap-8 p-24">
            {/* Equipments Section */}
            <div className="flex gap-6 items-start">
                <img
                    src="img/brilliant/karcher.jpg"
                    alt="Mechanical tool equipment"
                    className="w-32 h-32 object-contain"
                />
                <div>
                    <h2 className="text-4xl font-bold text-blue-400">Equipments</h2>
                    <p className="text-gray-600 mt-4">
                        Kami melengkapi alat kerja menurut standar nasional untuk pelaksanaan kegiatan kebersihan antara lain:{" "}
                        <span className="font-bold">Mechanical tools</span> seperti polisher machine, wet & dry vacuum cleaner, hand polisher, dsb.{" "}
                        <span className="font-bold">Acciliary equipment</span> seperti press mop double bucket & single bucket, broom, stager, toilet bowl brush, mop, dsb.
                    </p>
                </div>
            </div>

            {/* Chemicals Section */}
            <div className="flex gap-6 items-start">
                <img
                    src="img/brilliant/kontorprofen.jpg"
                    alt="Chemical cleaner"
                    className="w-32 h-32 object-contain"
                />
                <div>
                    <h2 className="text-4xl font-bold text-green-400">Chemicals</h2>
                    <p className="text-gray-600 mt-4">
                        Kami membekali beragam produk bahan kimia pembersih berkualitas seperti{" "}
                        <span className="font-bold">regular cleaner, desinfectant, sealer & multi purpose cleaner</span>. Produk pembersih tersebut ramah lingkungan dan memiliki MSDS (Material Safety Data Sheet). Brand produk pembersih pilihan kami antara lain Johnson Diversy & Johnson dan Ecolab.
                    </p>
                </div>
            </div>
        </div>
    );
}
