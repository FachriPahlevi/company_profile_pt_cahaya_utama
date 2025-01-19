import React from "react";
import { FaBroom, FaSprayCan, FaTruck } from "react-icons/fa";
import { GiVacuumCleaner, GiMechanicGarage } from "react-icons/gi";
import { RiCustomerService2Fill, RiSpeakFill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import { MdAdminPanelSettings, MdFactory } from "react-icons/md";

export default function Scope() {
    return (
        <div className="bg-[#343332] text-white py-8 md:py-12 px-4 md:px-8">
            {/* Header Section */}
            <div className="grid grid-cols-1 md:grid-cols-7 items-center md:px-12">
                <div className="hidden md:block md:col-span-1 mb-4 md:mb-0">
                    <img 
                        src="img/logo/Ex03.png" 
                        alt="Logo" 
                        className="w-20 md:w-full mx-auto" 
                    />
                </div>
                <div className="md:col-span-3 space-y-4 md:space-y-6 text-center md:text-left px-4 md:px-0">
                    <h1 className="text-yellow-400 text-3xl md:text-6xl font-bold">
                        Lingkup Pekerjaan <br /> Cleaning Service
                    </h1>
                    <p className="text-base md:text-xl text-gray-300">
                        Pekerjaan pembersihan, pemeliharaan ruangan kerja, area kerja, peralatan kerja serta perabot 
                        di wilayah operasional perusahaan baik dalam maupun luar ruang, serta pengelolaan sampah yang 
                        dilakukan secara berkala selama dan sesudah jam operasional perusahaan.
                    </p>
                </div>
                <div className="md:col-span-3 text-center md:text-left space-y-4 md:space-y-6 md:p-8">
                    {/* Front Liner */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                        <RiCustomerService2Fill className="text-4xl md:text-5xl text-white" />
                        <div>
                            <h3 className="text-lg md:text-xl font-semibold">Front Liner</h3>
                            <p className="text-sm md:text-xl text-gray-400">
                                Front liner, Receptionist, Customer Service, Operator, Desk Call, dll.
                            </p>
                        </div>
                    </div>

                    {/* Sales / Marketing */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                        <RiSpeakFill className="text-4xl md:text-5xl text-white" />
                        <div>
                            <h3 className="text-lg md:text-xl font-semibold">Sales / Marketing</h3>
                            <p className="text-sm md:text-xl text-gray-400">
                                Digital Marketer, Offline Marketer, Motoris, Canvasing, dll.
                            </p>
                        </div>
                    </div>

                    {/* Serviceman */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                        <GrUserManager className="text-4xl md:text-5xl text-white" />
                        <div>
                            <h3 className="text-lg md:text-xl font-semibold">Serviceman</h3>
                            <p className="text-sm md:text-xl text-gray-400">
                                Office Boy, Room Boy, Housekeeping, Helper, Waiters, dll.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-6 md:my-8"></div>

            {/* Cleaning Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 px-4 md:px-32">
                {/* Distribution */}
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    <FaTruck className="text-4xl md:text-5xl text-white" />
                    <div className="text-center md:text-left">
                        <h3 className="text-lg md:text-xl font-semibold">Distribution</h3>
                        <p className="text-sm md:text-xl text-gray-400">
                            Driver, Courier, Porter, Runner, dll.
                        </p>
                    </div>
                </div>

                {/* Technician */}
                <div className="relative flex items-center space-x-4">
                    <div className="relative w-16 h-16">
                        <GiMechanicGarage 
                            className="absolute inset-0 m-auto text-5xl text-white" 
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Technician</h3>
                        <p className="text-gray-400 text-xl">
                            Operator Mesin, Listrik, Mekanikal, Otomotif, Agriculture, dll.
                        </p>
                    </div>
                </div>

                {/* Production */}
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    <MdFactory className="text-4xl md:text-5xl text-white" />
                    <div className="text-center md:text-left">
                        <h3 className="text-lg md:text-xl font-semibold">Production</h3>
                        <p className="text-sm md:text-xl text-gray-400">
                            Buruh Pabrik, Packing, dll.
                        </p>
                    </div>
                </div>

                {/* Administrative */}
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    <MdAdminPanelSettings className="text-4xl md:text-5xl text-white" />
                    <div className="text-center md:text-left">
                        <h3 className="text-lg md:text-xl font-semibold">Administrative</h3>
                        <p className="text-sm md:text-xl text-gray-400">
                            Finance, Warehouse, Purchasing, dll.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}