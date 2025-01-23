import React, { useState } from 'react';
import { Head, useForm, Link } from  '@inertiajs/react'

import AdminLayout from '@/Layouts/AdminLayout'; // Sesuaikan dengan layout Anda
import Modal from '@/Components/Modal'; // Komponen modal untuk konfirmasi

const ClientIndex = ({ clients, auth }) => {
  // State untuk modal konfirmasi
  const [confirmingClientDeletion, setConfirmingClientDeletion] = useState(false);
  const [clientToDelete, setClientToDelete] = useState(null);

  // Fungsi untuk membuka modal konfirmasi hapus
  const confirmClientDeletion = (client) => {
    setClientToDelete(client);
    setConfirmingClientDeletion(true);
  };

  // Fungsi untuk menghapus client
  const deleteClient = () => {
    if (clientToDelete) {
      Inertia.delete(route('clients.destroy', clientToDelete.id), {
        onSuccess: () => {
          setConfirmingClientDeletion(false);
          setClientToDelete(null);
        }
      });
    }
  };

  return (
    <AdminLayout>
      <Head title="Daftar Client" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Daftar Client</h1>
          
          {/* Tombol Tambah Client Baru */}
          <Link 
            href={route('admin.client.create')} 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Tambah Client Baru
          </Link>
        </div>

        {/* Tabel Client */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
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
                      {/* Tombol Edit */}
                      <Link
                        // href={route('clients.edit', client.id)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Edit
                      </Link>
                      
                      {/* Tombol Hapus */}
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

          {/* Tampilan jika tidak ada client */}
          {clients.length === 0 && (
            <div className="text-center py-6 text-gray-500">
              Belum ada client yang ditambahkan
            </div>
          )}
        </div>

        {/* Modal Konfirmasi Hapus */}
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

export default ClientIndex;