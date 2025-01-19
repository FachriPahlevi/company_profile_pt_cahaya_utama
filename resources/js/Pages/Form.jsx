import MainLayout from '@/Layouts/MainLayout';
import React from 'react';

const Form = () => {
    return (
        <MainLayout>
            <div className="min-h-screen flex items-center justify-center"
               style={{
                backgroundImage: "url('/img/background/footer_bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
                <div className="grid grid-cols-5">
                    {/* Bagian Kiri */}
                    <div className="col-span-2 px-32 ">
                        <h1 className="text-5xl text-green-500 font-bold mb-4">
                            Senang bisa<br />berkomunikasi<br /> dengan Anda!
                        </h1>
                        <p className="text-gray-300 mb-6 text-xl pr-24">
                            Informasikan ke kami apa saja dengan mengisi formulir berikut.
                        </p>
                    </div>
                    {/* Bagian Kanan */}
                    <div className="col-span-3 w-full bg-transparent px-24 rounded-lg">
                        <form className="space-y-4">
                            {/* Input Nama Lengkap */}
                            <input
                                type="text"
                                placeholder="Nama Lengkap"
                                className="w-full p-3 rounded bg-white text-gray-300 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
                            />
                            {/* Input Nama Perusahaan & Nomor Telepon */}
                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    placeholder="Nama Perusahaan"
                                    className="flex-1 p-3 rounded bg-white text-gray-300 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Nomor Telepon"
                                    className="flex-1 p-3 rounded bg-white text-gray-300 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
                                />
                            </div>
                            {/* Input Subjek */}
                            <input
                                type="text"
                                placeholder="Subjek"
                                className="w-full p-3 rounded bg-white text-gray-300 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
                            />
                            {/* Textarea Pesan */}
                            <textarea
                                placeholder="Tuliskan Sesuatu ..."
                                rows="4"
                                className="w-full p-3 rounded bg-white text-gray-300 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
                            ></textarea>
                            {/* Tombol Submit */}
                            <button
                                type="submit"
                                className="w-full p-3 bg-green-500 text-white font-bold rounded hover:bg-green-400 transition"
                            >
                                Kirim
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Form;
