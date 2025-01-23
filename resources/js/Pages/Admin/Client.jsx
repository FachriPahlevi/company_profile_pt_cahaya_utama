import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';
import Swal from 'sweetalert2';

import AdminLayout from '@/Layouts/AdminLayout';
import Modal from '@/Components/Modal';

const Client = ({ clients, auth }) => {
  // State for modals and form
  const [confirmingClientDeletion, setConfirmingClientDeletion] = useState(false);
  const [clientToDelete, setClientToDelete] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState({
    name: '',
    logo: null,
    width: '',
    height: ''
  });

  // Confirm client deletion
  const confirmClientDeletion = (client) => {
    setClientToDelete(client);
    setConfirmingClientDeletion(true);
  };

  // Delete client using axios and SweetAlert
  const deleteClient = () => {
    if (clientToDelete) {
      axios.delete(route('clients.destroy', clientToDelete.id))
        .then(response => {
          Swal.fire({
            icon: 'success',
            title: 'Client Berhasil Dihapus',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          // Reload or remove client from list
          window.location.reload();
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Gagal Menghapus Client',
            text: error.response?.data?.message || 'Terjadi kesalahan'
          });
        })
        .finally(() => {
          setConfirmingClientDeletion(false);
          setClientToDelete(null);
        });
    }
  };

  // Handle input changes for add/edit forms
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setCurrentClient(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  // Add new client
  const addClient = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(currentClient).forEach(key => {
      formData.append(key, currentClient[key]);
    });

    axios.post(route('clients.store'), formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(response => {
      Swal.fire({
        icon: 'success',
        title: 'Client Berhasil Ditambahkan',
        
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      window.location.reload();
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Gagal Menambahkan Client',
        text: error.response?.data?.message || 'Terjadi kesalahan'
      });
    });
  };

  // Edit existing client
  const editClient = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(currentClient).forEach(key => {
      formData.append(key, currentClient[key]);
    });
    formData.append('_method', 'PUT'); // For Laravel method spoofing

    axios.post(route('clients.update', currentClient.id), formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(response => {
      Swal.fire({
        icon: 'success',
        title: 'Client Berhasil Diperbarui',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      window.location.reload();
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Gagal Memperbarui Client',
        text: error.response?.data?.message || 'Terjadi kesalahan'
      });
    });
  };

  // Open edit modal with client data
  const openEditModal = (client) => {
    setCurrentClient(client);
    setIsEditModalOpen(true);
  };

  return (
    <AdminLayout>
      <Head title="Daftar Client" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Daftar Client</h1>
          
          <button 
            onClick={() => {
              setCurrentClient({ name: '', logo: null, width: '', height: '' });
              setIsAddModalOpen(true);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Tambah Client Baru
          </button>
        </div>

        {/* Previous table code remains the same */}
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          No
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nama
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Logo
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Dimensi
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {clients.map((client, index) => (
                        <tr key={client.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {client.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {client.logo ? (
                              <img 
                                src={client.logo} 
                                alt={client.name} 
                                className="h-10 w-auto object-contain"
                              />
                            ) : (
                              <span className="text-gray-500">Tidak ada logo</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {client.width} x {client.height}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={() => openEditModal(client)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                Edit
                              </button>
                              
                              <button
                                onClick={() => confirmClientDeletion(client)}
                                className="text-red-600 hover:text-red-900"
                              >
                                Hapus
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
        {/* Add Client Modal */}
        <Modal
          show={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        >
          <form onSubmit={addClient} className="p-6">
            <h2 className="text-lg font-semibold mb-4">Tambah Client Baru</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Nama Client</label>
              <input
                type="text"
                name="name"
                value={currentClient.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Logo</label>
              <input
                type="file"
                name="logo"
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label className="block text-gray-700">Width</label>
                <input
                  type="number"
                  name="width"
                  value={currentClient.width}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-gray-700">Height</label>
                <input
                  type="number"
                  name="height"
                  value={currentClient.height}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="mr-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
              >
                Batal
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Simpan
              </button>
            </div>
          </form>
        </Modal>

        {/* Edit Client Modal (similar to Add Modal) */}
        <Modal
          show={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        >
          <form onSubmit={editClient} className="p-6">
            <h2 className="text-lg font-semibold mb-4">Edit Client</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Nama Client</label>
              <input
                type="text"
                name="name"
                value={currentClient.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Logo</label>
              <input
                type="file"
                name="logo"
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label className="block text-gray-700">Width</label>
                <input
                  type="number"
                  name="width"
                  value={currentClient.width}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-gray-700">Height</label>
                <input
                  type="number"
                  name="height"
                  value={currentClient.height}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="mr-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
              >
                Batal
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Perbarui
              </button>
            </div>
          </form>
        </Modal>

        {/* Existing Delete Confirmation Modal */}
        <Modal
          show={confirmingClientDeletion}
          onClose={() => setConfirmingClientDeletion(false)}
        >
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Konfirmasi Hapus Client
            </h2>
            <p className="mt-4 text-gray-600">
              Apakah Anda yakin ingin menghapus client{' '}
              <span className="font-bold">{clientToDelete?.name}</span>?
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setConfirmingClientDeletion(false)}
                className="mr-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
              >
                Batal
              </button>
              <button
                onClick={deleteClient}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Hapus
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default Client;