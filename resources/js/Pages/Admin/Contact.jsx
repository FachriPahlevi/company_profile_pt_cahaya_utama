import React, { useState, useEffect, useCallback } from 'react';
import { Search, RefreshCw, User, Building2, Phone, Calendar, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AdminLayout from '@/Layouts/AdminLayout';
import { router, usePage } from '@inertiajs/react';
import { Helmet } from 'react-helmet';

// Custom debounce hook
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
};

const Contact = () => {
    const { initialContacts, filters } = usePage().props;
    const [search, setSearch] = useState(filters?.search || '');
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(initialContacts?.current_page || 1);
    const [error, setError] = useState(null);

    // Use the custom debounce hook
    const debouncedSearch = useDebounce(search, 500);

    const performSearch = useCallback((searchTerm, currentPage) => {
        setLoading(true);
        setError(null);
        router.get(route('admin.contact'),
            {
                s: searchTerm,
                page: currentPage
            },
            {
                preserveState: true,
                preserveScroll: true,
                onFinish: () => setLoading(false),
                onError: (response) => {
                    if (response.error) {
                        setError(response.error);
                    }
                }
            }
        );
    }, []);

    useEffect(() => {
        performSearch(debouncedSearch, page);
    }, [debouncedSearch, page, performSearch]);

    const handleSearch = (e) => {
        const newSearch = e.target.value;
        setSearch(newSearch);
        setPage(1);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const handleReset = () => {
        setSearch('');
        setPage(1);
    };

    return (
        <AdminLayout>
            <Helmet>
                <title>Hubungi PT. Cahaya Utama - Solusi Outsourcing Profesional untuk Bisnis Anda</title>
                <meta name="description" content="Ingin tahu lebih banyak tentang solusi outsourcing yang kami tawarkan? Hubungi PT. Cahaya Utama untuk informasi lebih lanjut mengenai layanan kebersihan, keamanan, dan tenaga kerja terampil yang dapat meningkatkan efisiensi operasional bisnis Anda." />
                <meta name="keywords" content="kontak PT. Cahaya Utama, hubungi kami, solusi outsourcing, layanan kebersihan, layanan keamanan, tenaga kerja profesional, outsourcing terpercaya, solusi bisnis" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Hubungi PT. Cahaya Utama - Solusi Outsourcing Profesional untuk Bisnis Anda" />
                <meta property="og:description" content="Hubungi kami untuk mengetahui bagaimana PT. Cahaya Utama dapat membantu memenuhi kebutuhan operasional bisnis Anda dengan solusi outsourcing kebersihan, keamanan, dan tenaga kerja profesional yang handal." />
                <meta property="og:url" content="https://www.cahayautamapt.com/contact" />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        {/* Header with Search */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Daftar Kontak Masuk
                                </h1>
                                <div className="flex items-center space-x-2 w-full sm:w-auto">
                                    <div className="relative flex-grow">
                                        <input
                                            type="text"
                                            value={search}
                                            onChange={handleSearch}
                                            placeholder="Cari kontak..."
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-colors"
                                        />
                                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="p-4 text-red-600 text-center">
                                {error}
                            </div>
                        )}

                        {/* Loading Indicator */}
                        {loading ? (
                            <div className="flex justify-center items-center p-8">
                                <RefreshCw className="h-8 w-8 text-blue-500 animate-spin" />
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                {initialContacts?.data?.length > 0 ? (
                                    <>
                                        {/* Contact Table */}
                                        <table className="w-full">
                                            <thead>
                                                <tr className="bg-gray-50">
                                                    {[
                                                        { icon: User, label: 'Nama' },
                                                        { icon: Building2, label: 'Perusahaan' },
                                                        { icon: Phone, label: 'Nomor HP' },
                                                        { icon: MessageCircle, label: 'Pesan' },
                                                        { icon: Calendar, label: 'Tanggal Kontak' }
                                                    ].map(({ icon: Icon, label }) => (
                                                        <th key={label} className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                            <div className="flex items-center space-x-2">
                                                                <Icon className="h-4 w-4" />
                                                                <span>{label}</span>
                                                            </div>
                                                        </th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {initialContacts.data.map(contact => (
                                                    <tr key={contact.id} className="border-b hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.full_name}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.company_name}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.phone_number}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{contact.subject}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            {new Date(contact.created_at).toLocaleDateString('id-ID', {
                                                                day: 'numeric',
                                                                month: 'short',
                                                                year: 'numeric'
                                                            })}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        {/* Pagination */}
                                        <div className="p-4 flex justify-center">
                                            <nav className="flex space-x-2">
                                                {Array.from({ length: initialContacts.last_page }, (_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handlePageChange(index + 1)}
                                                        className={`px-4 py-2 rounded-lg transition-colors ${index + 1 === initialContacts.current_page
                                                                ? 'bg-blue-500 text-white'
                                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                            }`}
                                                    >
                                                        {index + 1}
                                                    </button>
                                                ))}
                                            </nav>
                                        </div>
                                    </>
                                ) : (
                                    <div className="p-6 text-center text-gray-500">
                                        Tidak ada kontak ditemukan.
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Contact;