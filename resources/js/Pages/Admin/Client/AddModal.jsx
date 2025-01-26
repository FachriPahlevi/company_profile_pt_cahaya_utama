import React from 'react';
import { X } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          {children}
        </div>
      </div>
    </div>
  );
};

const AddClientModal = ({ isOpen, onClose, currentClient, handleInputChange }) => {
  const addClient = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(currentClient).forEach(key => {
      formData.append(key, currentClient[key]);
    });

    axios.post(route('client.store'), formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then(response => {
      Swal.fire({
        icon: 'success',
        title: 'Client Berhasil Ditambahkan',
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
        title: 'Gagal Menambahkan Client',
        text: error.response?.data?.message || 'Terjadi kesalahan',
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        toast: true
      });
    });
  };

  return (
    <Modal show={isOpen} onClose={onClose}>
      <div className="relative backdrop-blur-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 hover:bg-gray-100"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        <form onSubmit={addClient} className="p-6">
          <h2 className="mb-6 text-center text-xl font-bold text-gray-900">
            Tambah Client Baru
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Client
              </label>
              <input
                type="text"
                name="name"
                value={currentClient.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Logo
              </label>
              <div className="mt-1 flex items-center justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5">
                <div className="space-y-1 text-center">
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="logo"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500"
                    >
                      <span>Upload file</span>
                      <input
                        id="logo"
                        name="logo"
                        type="file"
                        accept="image/*"
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">atau drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG hingga 10MB
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddClientModal;