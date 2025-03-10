import React, { useState, useEffect, useCallback } from 'react';
import { Search, RefreshCw, User, Plus, Trash2, Edit } from 'lucide-react';
import { motion } from 'framer-motion';
import AdminLayout from '@/Layouts/AdminLayout';
import { router, usePage } from '@inertiajs/react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Swal from 'sweetalert2';

const Position = ({ positions }) => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [formData, setFormData] = useState({ name: '' });
    const [isProcessing, setIsProcessing] = useState(false);

    const filteredPositions = positions.filter(position =>
        position.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);
    
        try {
            let response;
    
            if (selectedPosition) {
                // Update position
                response = await axios.put(`/admincu/positions/${selectedPosition.id}`, formData);
                Swal.fire({
                    title: "Berhasil!",
                    text: "Posisi berhasil diperbarui.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });
            } else {
                // Create new position
                response = await axios.post("/admincu/positions", formData);
                Swal.fire({
                    title: "Berhasil!",
                    text: "Posisi baru berhasil ditambahkan.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });
            }
    
            resetForm();
        } catch (error) {
            console.error("Error submitting form:", error);
            Swal.fire({
                title: "Gagal!",
                text: "Terjadi kesalahan saat menyimpan posisi.",
                icon: "error",
            });
        } finally {
            setIsProcessing(false);
        }
    };


    const handleDelete = async () => {
        const result = await Swal.fire({
            title: "Apakah Anda yakin?",
            text: "Data posisi akan dihapus secara permanen!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, hapus!",
            cancelButtonText: "Batal",
        });
    
        if (result.isConfirmed) {
            setIsProcessing(true);
    
            try {
                await axios.delete(`/admincu/positions/${selectedPosition.id}`);
    
                Swal.fire({
                    title: "Berhasil!",
                    text: "Posisi berhasil dihapus.",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });
    
                setSelectedPosition(null);
                setIsDeleteModalOpen(false);
                window.location.reload();
            } catch (error) {
                console.error("Error deleting position:", error);
    
                Swal.fire({
                    title: "Gagal!",
                    text: "Terjadi kesalahan saat menghapus posisi.",
                    icon: "error",
                });
            } finally {
                setIsProcessing(false);
            }
        }
    };
    
    

    const resetForm = () => {
        setFormData({ name: '' });
        setSelectedPosition(null);
        setIsCreateModalOpen(false);
        setIsEditModalOpen(false);
    };

    const openEditModal = (position) => {
        setSelectedPosition(position);
        setFormData({ name: position.name });
        setIsEditModalOpen(true);
    };

    return (
        <AdminLayout>
            <Helmet>
                <title>Kelola Posisi - PT. Cahaya Utama</title>
            </Helmet>

            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        {/* Header with Actions */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Daftar Posisi
                                </h1>
                                <div className="flex items-center space-x-4 w-full sm:w-auto">
                                    <div className="relative flex-1">
                                        <input
                                            type="text"
                                            placeholder="Cari posisi..."
                                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    </div>
                                    <button
                                        onClick={() => setIsCreateModalOpen(true)}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                                    >
                                        <Plus className="h-5 w-5" />
                                        Tambah
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            {filteredPositions.length > 0 ? (
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Nama Posisi
                                            </th>
                                            <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredPositions.map(position => (
                                            <tr key={position.id} className="border-b hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {position.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right space-x-2">
                                                    <button
                                                        onClick={() => openEditModal(position)}
                                                        className="text-blue-600 hover:text-blue-900"
                                                    >
                                                        <Edit className="h-5 w-5" />
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setSelectedPosition(position);
                                                            setIsDeleteModalOpen(true);
                                                        }}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        <Trash2 className="h-5 w-5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="p-6 text-center text-gray-500">
                                    Tidak ada posisi yang ditemukan.
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Create/Edit Modal */}
                {(isCreateModalOpen || isEditModalOpen) && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg w-full max-w-md p-6">
                            <h2 className="text-xl font-bold mb-4">
                                {selectedPosition ? 'Edit Posisi' : 'Tambah Posisi Baru'}
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Nama Posisi
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ name: e.target.value })}
                                        />
                                    </div>
                                    <div className="flex justify-end space-x-3">
                                        <button
                                            type="button"
                                            onClick={resetForm}
                                            className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                        >
                                            Batal
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isProcessing}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                                        >
                                            {isProcessing ? 'Menyimpan...' : 'Simpan'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Delete Confirmation Modal */}
                {isDeleteModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg w-full max-w-md p-6">
                            <h2 className="text-xl font-bold mb-4">Hapus Posisi</h2>
                            <p className="mb-6">
                                Apakah Anda yakin ingin menghapus posisi "{selectedPosition?.name}"?
                            </p>
                            <div className="flex justify-end space-x-3">
                                <button
                                    onClick={() => {
                                        setSelectedPosition(null);
                                        setIsDeleteModalOpen(false);
                                    }}
                                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={handleDelete}
                                    disabled={isProcessing}
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
                                >
                                    {isProcessing ? 'Menghapus...' : 'Hapus'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default Position;