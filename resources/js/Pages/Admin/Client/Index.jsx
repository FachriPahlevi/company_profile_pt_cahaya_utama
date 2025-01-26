import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';

import AdminLayout from '@/Layouts/AdminLayout';
import AddModal from './AddModal';
import EditModal from './EditModal';

const Index = ({ clients, auth }) => {
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

  const confirmClientDeletion = (client) => {
    Swal.fire({
      title: 'Apakah anda yakin?',
      text: `Client ${client.name} akan dihapus secara permanen`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Ya, Hapus!',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteClient(client.id);
      }
    });
  };

  const deleteClient = (id) => {
    axios.delete(route('clients.destroy', id))
      .then(response => {
        Swal.fire({
          icon: 'success',
          title: 'Client Berhasil Dihapus',
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          toast: true
        });
        window.location.reload();
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Gagal Menghapus Client',
          text: error.response?.data?.message || 'Terjadi kesalahan',
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          toast: true
        });
      });
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setCurrentClient(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const openEditModal = (client) => {
    setCurrentClient(client);
    setIsEditModalOpen(true);
  };

  return (
    <AdminLayout>
      <Head title="Daftar Client" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Daftar Client</h1>
            <p className="mt-2 text-sm text-gray-700">
              Kelola daftar client dan informasi logo mereka
            </p>
          </div>
          
          <button 
            onClick={() => {
              setCurrentClient({ name: '', logo: null, width: '', height: '' });
              setIsAddModalOpen(true);
            }}
            className="mt-4 sm:mt-0 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            Tambah Client Baru
          </button>
        </div>

        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">No</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Nama</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Logo</th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Aksi</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {clients.map((client, index) => (
                      <tr key={client.id} className="hover:bg-gray-50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">{index + 1}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">{client.name}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {client.logo ? (
                            <img 
                              src={client.logo} 
                              alt={client.name} 
                              className="h-10 w-auto object-contain rounded"
                            />
                          ) : (
                            <span className="text-gray-500 italic">Tidak ada logo</span>
                          )}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => openEditModal(client)}
                              className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-blue-50"
                            >
                              <Pencil className="h-4 w-4 mr-1" />
                              Edit
                            </button>
                            <button
                              onClick={() => confirmClientDeletion(client)}
                              className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Hapus
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        currentClient={currentClient}
        handleInputChange={handleInputChange}
        addClient={() => {/* Add client logic */}}
      />
      
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        currentClient={currentClient}
        handleInputChange={handleInputChange}
      />
    </AdminLayout>
  );
};

export default Index;