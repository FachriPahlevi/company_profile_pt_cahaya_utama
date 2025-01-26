import React, { useState, useEffect } from 'react';
import { Search, RefreshCw, User, Building2, MessageSquare, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import AdminLayout from '@/Layouts/AdminLayout';
import axios from 'axios';

const Contact = ({ initialContacts, filters }) => {
    const [contacts, setContacts] = useState(initialContacts || { data: [], links: [] });
    const [search, setSearch] = useState(filters?.search || '');
    const [loading, setLoading] = useState(false);

    const fetchContacts = async (searchQuery = '', page = 1) => {
        setLoading(true);
        try {
            const response = await axios.get(route('admin.contact'), {
                params: {
                    search: searchQuery,
                    page: page
                }
            });
            
            setContacts(response.data.initialContacts);
        } catch (error) {
            console.error('Error fetching contacts:', error);
            setContacts({ data: [], links: [] });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (search) {
            fetchContacts(search);
        } else {
            setContacts(initialContacts);
        }   
    }, [search]);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchContacts(search);
    };

    const handlePageChange = (url) => {
        const page = new URL(url).searchParams.get('page');
        fetchContacts(search, page);
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
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <h1 className="text-2xl font-bold text-gray-800">
                                Daftar Kontak Masuk
                            </h1>
                            <form onSubmit={handleSearch} className="w-full sm:w-auto">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Cari kontak..."
                                        className="w-full sm:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    />
                                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                </div>
                            </form>
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center p-8">
                            <RefreshCw className="h-8 w-8 text-blue-500 animate-spin" />
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            {contacts?.data && contacts.data.length > 0 ? (
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                <div className="flex items-center space-x-2">
                                                    <User className="h-4 w-4" />
                                                    <span>Nama</span>
                                                </div>
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                <div className="flex items-center space-x-2">
                                                    <Building2 className="h-4 w-4" />
                                                    <span>Perusahaan</span>
                                                </div>
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                <div className="flex items-center space-x-2">
                                                    <MessageSquare className="h-4 w-4" />
                                                    <span>Subjek</span>
                                                </div>
                                            </th>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                <div className="flex items-center space-x-2">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>Tanggal</span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {contacts.data.map((contact, index) => (
                                            <motion.tr
                                                key={contact.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="hover:bg-gray-50 transition-colors"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {contact.full_name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {contact.company_name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {contact.subject}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    {new Date(contact.created_at).toLocaleDateString('id-ID', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })}
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="text-center py-8">
                                    <p className="text-gray-500">Tidak ada kontak yang ditemukan.</p>
                                </div>
                            )}
                        </div>
                    )}

                    {contacts?.links && contacts.links.length > 0 && (
                        <div className="px-6 py-4 border-t border-gray-200">
                            <div className="flex flex-wrap justify-center gap-2">
                                {contacts.links.map((link) => (
                                    <button
                                        key={link.label}
                                        onClick={() => handlePageChange(link.url)}
                                        disabled={!link.url}
                                        className={`px-4 py-2 text-sm rounded-md transition-colors ${
                                            link.active
                                                ? 'bg-blue-500 text-white'
                                                : 'text-gray-500 hover:bg-gray-100'
                                        } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
        </AdminLayout>
    );
};

export default Contact;