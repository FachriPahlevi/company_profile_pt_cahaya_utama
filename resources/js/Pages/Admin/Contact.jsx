import React, { useState, useEffect } from 'react';
import { Search, RefreshCw, User, Building2, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import AdminLayout from '@/Layouts/AdminLayout';
import { router, usePage } from '@inertiajs/react';
import { debounce } from 'lodash';

const Contact = () => {
    const { initialContacts, filters } = usePage().props;
    const [search, setSearch] = useState(filters?.search || '');
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(initialContacts?.current_page || 1);

    const performSearch = debounce((searchTerm, currentPage) => {
        setLoading(true);
        router.get(route('admin.contact'), 
            { 
                s: searchTerm, 
                page: currentPage 
            }, 
            { 
                preserveState: true,
                preserveScroll: true,
                onFinish: () => setLoading(false)
            }
        );
    }, 500);

    useEffect(() => {
        performSearch(search, page);
    }, [search, page]);

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
                                    {/* {(search || page !== 1) && (
                                        <button 
                                            onClick={handleReset}
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                                        >
                                            Reset
                                        </button>
                                    )} */}
                                </div>
                            </div>
                        </div>

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
                                                        className={`px-4 py-2 rounded-lg transition-colors ${
                                                            index + 1 === initialContacts.current_page 
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