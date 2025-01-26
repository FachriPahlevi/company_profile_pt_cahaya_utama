import MainLayout from '@/Layouts/MainLayout';
import React from 'react';

export default function Elearning() {
    return (
        <MainLayout>
            <div className="min-h-screen max-h-screen bg-gray-300 p-24">
                <div className="container mx-auto">
                    <div className="text-left">
                        <h1 className="text-3xl font-bold text-black">E-Learning</h1>
                        <p className="text-lg text-gray-700">PT. Cahaya Utama</p>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-4xl font-bold text-white">Daftar Panduan</h2>
                        <ol className="mt-4 space-y-4 list-decimal ml-6">
                            <li className="text-lg">
                                <a href="#" className="text-blue-500 hover:underline">Panduan Tentang 5R</a>
                                <p className="text-gray-200">5R (Resik, Ringkas, Rapi, Rajin, Rawat)</p>
                            </li>
                            <li className="text-lg">
                                <a href="#" className="text-blue-500 hover:underline">Panduan Tentang BPJS TK</a>
                                <p className="text-gray-200">BPJS Ketenagakerjaan</p>
                            </li>
                            <li className="text-lg">
                                <a href="#" className="text-blue-500 hover:underline">Panduan Tentang BPJS KS</a>
                                <p className="text-white">BPJS Kesehatan</p>
                            </li>
                            <li className="text-lg">
                                <a href="#" className="text-blue-500 hover:underline">Panduan Tentang Prosedur Klaim JKK</a>
                                <p className="text-white">Klaim Jaminan Kecelakaan Kerja</p>
                            </li>
                            <li className="text-lg">
                                <a href="#" className="text-blue-500 hover:underline">Panduan Tentang Food Safety</a>
                                <p className="text-white">Food Safety</p>
                            </li>
                        </ol>
                        <div className="mt-8">
                            <p className="font-bold text-white">Lain-lain</p>
                            <ol className="list-decimal ml-6">
                                <li className="text-lg">
                                    <a href="#" className="text-blue-500 hover:underline">Panduan Tentang K3 dari KemKes</a>
                                    <p className="text-white">Kesehatan dan Keselamatan Kerja Komprehensif</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}