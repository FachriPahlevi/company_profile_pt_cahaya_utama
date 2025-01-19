import React from "react";
import { FaBroom, FaSprayCan } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";

export default function Scope() {
    return (
        <div className="bg-gray-800 text-white py-12 px-8">
            {/* Header Section */}
            <div className="grid grid-cols-2 items-center px-12">
                <div className="flex items-center space-x-4 items-end flex justify-center">
                <FaBroom className="text-6xl text-white" />
                    <h1 className="text-yellow-400 text-6xl font-bold">
                        Lingkup Pekerjaan <br /> Cleaning Service
                    </h1>
                </div>
                <div className="flex items-center text-left ">
                <p className="mt-4 lg:mt-0 text-xl text-gray-300 lg:text-left">
                    Pekerjaan pembersihan, pemeliharaan ruangan kerja, area kerja, peralatan kerja serta perabot 
                    di wilayah operasional perusahaan baik dalam maupun luar ruang, serta pengelolaan sampah yang 
                    dilakukan secara berkala selama dan sesudah jam operasional perusahaan.
                </p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8"></div>

            {/* Cleaning Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-32">
                {/* Daily Cleaning */}
                <div className="flex items-center space-x-4">
                    <FaSprayCan className="text-5xl text-yellow-400" />
                    <div>
                        <h3 className="text-xl font-semibold">Daily Cleaning</h3>
                        <p className="text-gray-400 text-xl">
                            Pekerjaan kebersihan rutin harian dalam jam operasional kantor.
                        </p>
                    </div>
                </div>

                {/* Weekly Cleaning */}
                <div className="flex items-center space-x-4">
                    <FaBroom className="text-5xl text-yellow-400" />
                    <div>
                        <h3 className="text-xl font-semibold">Weekly Cleaning</h3>
                        <p className="text-gray-400 text-xl">
                            Pekerjaan kebersihan rutin mingguan dalam jam operasional kantor.
                        </p>
                    </div>
                </div>

                {/* General Cleaning */}
                <div className="flex items-center space-x-4">
                    <GiVacuumCleaner className="text-5xl text-yellow-400" />
                    <div>
                        <h3 className="text-xl font-semibold">General Cleaning</h3>
                        <p className="text-gray-400 text-xl">
                            Pekerjaan kebersihan menyeluruh pada obyek kerja perusahaan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
