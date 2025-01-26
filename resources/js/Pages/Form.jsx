import MainLayout from '@/Layouts/MainLayout';
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        phoneNumber: '',
        subject: '',
        message: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validasi input
        if (!formData.fullName || !formData.companyName || !formData.phoneNumber || !formData.subject || !formData.message) {
            setError('Semua field harus diisi.');
            return;
        }

        try {
            const response = await axios.post(route('contact.store'), formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setSuccess('Form berhasil dikirim!');
            // Reset form setelah berhasil
            setFormData({
                fullName: '',
                companyName: '',
                phoneNumber: '',
                subject: '',
                message: '',
            });
        } catch (err) {
            setError('Terjadi kesalahan saat mengirim form. Silakan coba lagi.');
            console.error(err);
        }
    };

    return (
        <MainLayout>
            <div 
                className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-2 lg:px-4"
                style={{
                    backgroundImage: "url('/img/background/footer_bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 ">
                    {/* Bagian Kiri */}
                    <div className="md:col-span-2 text-center md:text-left px-4 md:px-8 lg:px-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl text-green-500 font-bold mb-4 leading-tight">
                            Senang bisa<br />berkomunikasi<br /> dengan Anda!
                        </h1>
                        <p className="text-gray-300 mb-6 text-base md:text-lg lg:text-xl md:pr-12">
                            Informasikan ke kami apa saja dengan mengisi formulir berikut.
                        </p>
                    </div>
                    
                    {/* Bagian Kanan */}
                    <div className="md:col-span-3 w-full px-4 md:px-8 lg:px-4">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {error && <div className="text-red-500">{error}</div>}
                            {success && <div className="text-green-500">{success}</div>}
                            
                            {/* Input Nama Lengkap */}
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Nama Lengkap"
                                className="w-full p-3 rounded bg-white text-gray-700 border border-gray-300 
                                focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            
                            {/* Input Nama Perusahaan & Nomor Telepon */}
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder="Nama Perusahaan"
                                    className="w-full md:flex-1 p-3 rounded bg-white text-gray-700 
                                    border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Nomor Telepon"
                                    className="w-full md:flex-1 p-3 rounded bg-white text-gray-700 
                                    border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </div>
                            
                            {/* Input Subjek */}
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subjek"
                                className="w-full p-3 rounded bg-white text-gray-700 
                                border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            
                            {/* Textarea Pesan */}
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
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