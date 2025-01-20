import MainLayout from '@/Layouts/MainLayout';
import React from 'react';

const Form = () => {
    return (
        <MainLayout>
            <div 
                className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage: "url('/img/background/footer_bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Bagian Kiri */}
                    <div className="md:col-span-2 text-center md:text-left px-4 md:px-8 lg:px-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl text-green-500 font-bold mb-4 leading-tight">
                            Senang bisa<br />berkomunikasi<br /> dengan Anda!
                        </h1>
                        <p className="text-gray-300 mb-6 text-base md:text-lg lg:text-xl md:pr-12">
                            Informasikan ke kami apa saja dengan mengisi formulir berikut.
                        </p>
                    </div>
                    
                    {/* Bagian Kanan */}
                    <div className="md:col-span-3 w-full px-4 md:px-8 lg:px-12">
                        <form className="space-y-4">
                            {/* Input Nama Lengkap */}
                            <input
                                type="text"
                                placeholder="Nama Lengkap"
                                className="w-full p-3 rounded bg-white text-gray-700 border border-gray-300 
                                focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            
                            {/* Input Nama Perusahaan & Nomor Telepon */}
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <input
                                    type="text"
                                    placeholder="Nama Perusahaan"
                                    className="w-full md:flex-1 p-3 rounded bg-white text-gray-700 
                                    border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                <input
                                    type="text"
                                    placeholder="Nomor Telepon"
                                    className="w-full md:flex-1 p-3 rounded bg-white text-gray-700 
                                    border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </div>
                            
                            {/* Input Subjek */}
                            <input
                                type="text"
                                placeholder="Subjek"
                                className="w-full p-3 rounded bg-white text-gray-700 
                                border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            
                            {/* Textarea Pesan */}
                            <textarea
                                placeholder="Tuliskan Sesuatu ..."
                                rows="4"
                                className="w-full p-3 rounded bg-white text-gray-700 
                                border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            ></textarea>
                            
                            {/* Tombol Submit */}
                            <button
                                type="submit"
                                className="w-full p-3 bg-green-500 text-white font-bold rounded 
                                hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-101"
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