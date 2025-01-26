import React, { useState, useEffect } from 'react';
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

const EditModal = ({ isOpen, onClose, currentClient }) => {
  const [previewLogo, setPreviewLogo] = useState(null);
  const [localClient, setLocalClient] = useState({});

  useEffect(() => {
    if (currentClient) {
      setLocalClient({ ...currentClient });
      setPreviewLogo(currentClient.logo || null);
    }
  }, [currentClient]);

  const handleLocalInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'logo' && files && files[0]) {
      const file = files[0];
      setLocalClient((prev) => ({ ...prev, logo: file }));
      setPreviewLogo(URL.createObjectURL(file));
    } else {
      setLocalClient((prev) => ({ ...prev, [name]: value }));
    }
  };

  const editClient = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PUT"); // Tambahkan untuk mengakali PUT
    formData.append("name", localClient.name || ""); // Pastikan tidak undefined

    if (localClient.logo instanceof File) {
        formData.append("logo", localClient.logo);
    }

    try {
        console.log("Data yang dikirim:");
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        const response = await axios.post(`/client/update/${localClient.id}`, formData, { // Gunakan POST bukan PUT
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            },
        });

        Swal.fire({
            icon: "success",
            title: "Client Berhasil Diperbarui",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
        });

        onClose(); // Tutup modal setelah berhasil update
    } catch (error) {
        console.error("Error updating client:", error);
        Swal.fire({
            icon: "error",
            title: "Gagal Memperbarui Client",
            text: error.response?.data?.message || "Terjadi kesalahan",
        });
    }
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

        <form onSubmit={editClient} className="p-6">
          <h2 className="mb-6 text-center text-xl font-bold text-gray-900">
            Edit Client
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Client
              </label>
              <input
                type="text"
                name="name"
                value={localClient.name || ''}
                onChange={handleLocalInputChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                        onChange={handleLocalInputChange}
                        className="sr-only"
                        accept=".png,.jpg,.jpeg,.gif"
                      />
                    </label>
                    <p className="pl-1">atau drag and drop</p>
                  </div>
                  {previewLogo && (
                    <div className="mt-2">
                      <img
                        src={typeof previewLogo === 'string' ? previewLogo : URL.createObjectURL(previewLogo)}
                        alt="Preview Logo"
                        className="h-16 w-auto rounded-md object-cover"
                      />
                    </div>
                  )}
                  <p className="text-xs text-gray-500">PNG, JPG hingga 10MB</p>
                </div>
              </div>
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

export default EditModal;
