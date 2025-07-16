import React, { useState } from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaGlobe,
    FaEnvelope,
} from "react-icons/fa";
import MainLayout from "@/Layouts/MainLayout";
import axios from "axios";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        phoneNumber: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState({ error: "", success: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ error: "", success: "" });

        const { fullName, companyName, phoneNumber, subject, message } =
            formData;
        if (!fullName || !companyName || !phoneNumber || !subject || !message) {
            setStatus({ error: "Semua field harus diisi.", success: "" });
            return;
        }

        try {
            await axios.post(route("contact.store"), formData);
            setStatus({ success: "Pesan berhasil dikirim!", error: "" });
            setFormData({
                fullName: "",
                companyName: "",
                phoneNumber: "",
                subject: "",
                message: "",
            });
        } catch (err) {
            setStatus({
                error: "Terjadi kesalahan, coba lagi nanti.",
                success: "",
            });
            console.error(err);
        }
    };

    return (
        <MainLayout>
            <section className="bg-white text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto min-h-screen">
                    {/* Kontak Kiri */}
                    <div className="flex flex-col justify-center px-8 py-20">
                        <p className="text-blue-600 font-semibold uppercase text-sm mb-2">
                            Kontak
                        </p>
                        <h2 className="text-4xl font-bold mb-10 text-gray-900">
                            Terhubung dengan Kami
                        </h2>

                        <div className="space-y-8 text-gray-600 text-base">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg border border-gray-200 bg-white shadow-md">
                                    <FaMapMarkerAlt className="text-blue-600 w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-semibold mb-1">
                                        Lokasi
                                    </h4>
                                    <p>
                                        Komplek Kantor Mangga Dua Blok A6 No
                                        1-2.
                                        <br />
                                        Jl. Jagir Wonokromo 100 Surabaya, Jawa
                                        Timur - Indonesia 60244
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg border border-gray-200 bg-white shadow-md">
                                    <FaPhoneAlt className="text-blue-600 w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-semibold mb-1">
                                        Phone
                                    </h4>
                                    <p>031-8480903 dan 031-8481201</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg border border-gray-200 bg-white shadow-md">
                                    <FaEnvelope className="text-blue-600 w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-semibold mb-1">
                                        Mail
                                    </h4>
                                    <p>marketing_manager@cahaya-utama.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg border border-gray-200 bg-white shadow-md">
                                    <FaGlobe className="text-blue-600 w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-semibold mb-1">
                                        Website
                                    </h4>
                                    <p>www.cahayautamapt.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Kanan */}
                    <div className="bg-gray-50 flex items-center justify-center px-6 py-20">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white w-full max-w-xl p-10 rounded-xl shadow-lg space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="block font-semibold mb-2 text-gray-700"
                                    >
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full border rounded-md p-2 shadow-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Masukan nama lengkap"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="companyName"
                                        className="block font-semibold mb-2 text-gray-700"
                                    >
                                        Nama Perusahaan
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="w-full border rounded-md p-2 shadow-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Masukan nama perusahaan"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phoneNumber"
                                        className="block font-semibold mb-2 text-gray-700"
                                    >
                                        Kontak
                                    </label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="w-full border rounded-md p-2 shadow-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        placeholder="Masukan nomor telepon"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block font-semibold mb-2 text-gray-700"
                                >
                                    Subjek
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 shadow-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Masukan subjek"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block font-semibold mb-2 text-gray-700"
                                >
                                    Pesan
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full border rounded-md p-2 shadow-sm text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Tuliskan sesuatu..."
                                    required
                                ></textarea>
                            </div>

                            {status.error && (
                                <p className="text-red-500 text-sm">
                                    {status.error}
                                </p>
                            )}
                            {status.success && (
                                <p className="text-green-600 text-sm">
                                    {status.success}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default ContactSection;
