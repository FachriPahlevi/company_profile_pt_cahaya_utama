import React from "react";
import { FaHeadset, FaTruck, FaTools, FaUserTie } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";
import { MdOutlineRoomService } from "react-icons/md";

export default function Scope() {
    return (
        <div className="bg-[#343332] text-white py-12 px-8">
            {/* Header Section */}
            <div className="text-center space-y-6">
                <h1 className="text-yellow-400 text-5xl font-bold">
                    Lingkup Pekerjaan <br /> Trust Our Resources
                </h1>
                <p className="text-gray-300 text-lg">
                    Pekerjaan yang memerlukan tenaga kerja terampil dan terlatih untuk mencapai produktivitas yang
                    optimal. Jasa dan pekerjaan ini dapat disesuaikan dengan kebutuhan Perusahaan Anda.
                </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8"></div>

            {/* Categories Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
                {/* Front Liner */}
                <div className="flex items-center space-x-4">
                    <FaHeadset className="text-5xl text-yellow-400" />
                    <div>
                        <h3 className="text-lg font-semibold">Front Liner</h3>
                        <p className="text-gray-400 text-sm">
                            Front liner, Receptionist, Customer Service, Operator, Desk Call dll.
                        </p>
                    </div>
                </div>

                {/* Sales/Marketing */}
                <div className="flex items-center space-x-4">
                    <FaUserTie className="text-5xl text-yellow-400" />
                    <div>
                        <h3 className="text-lg font-semibold">Sales / Marketing</h3>
                        <p className="text-gray-400 text-sm">
                            Digital Marketer, Offline Marketer, Motoris, Canvasing dll.
                        </p>
                    </div>
                </div>

                {/* Technician */}
                <div className="flex items-center space-x-4">
                    <FaTools className="text-5xl text-yellow-400" />
                    <div>
                        <h3 className="text-lg font-semibold">Technician</h3>
                        <p className="text-gray-400 text-sm">
                            Operator Mesin, Listrik, Mekanikal, Otomotif, Agriculture dll.
                        </p>
                    </div>
                </div>

                {/* Serviceman */}
                <div className="flex items-center space-x-4">
                    <MdOutlineRoomService className="text-5xl text-yellow-400" />
                    <div>
                        <h3 className="text-lg font-semibold">Serviceman</h3>
                        <p className="text-gray-400 text-sm">
                            Office Boy, Room Boy, House Keeping, Helper, Waiters dll.
                        </p>
                    </div>
                </div>

                {/* Distribution */}
                <div className="flex items-center space-x-4">
                    <FaTruck className="text-5xl text-yellow-400" />
                    <div>
                        <h3 className="text-lg font-semibold">Distribution</h3>
                        <p className="text-gray-400 text-sm">
                            Driver, Courier, Porter, Runner dll.
                        </p>
                    </div>
                </div>

                {/* Production */}
                <div className="flex items-center space-x-4">
                    <GiFactory className="text-5xl text-yellow-400" />
                    <div>
                        <h3 className="text-lg font-semibold">Production</h3>
                        <p className="text-gray-400 text-sm">
                            Buruh Pabrik, Packing dll.
                        </p>
                    </div>
                </div>

                {/* Administrative */}
                <div className="flex items-center space-x-4">
                    <FaUserTie className="text-5xl text-yellow-400" />
                    <div>
                        <h3 className="text-lg font-semibold">Administrative</h3>
                        <p className="text-gray-400 text-sm">
                            Finance, Warehouse, Purchasing dll.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
