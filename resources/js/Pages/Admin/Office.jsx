import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ChevronLeft,
  ChevronRight,
  Edit,
  Trash2,
  Plus,
  Search,
  MapPin,
  Building,
  Phone,
  Globe,
  Layers,
  AlertCircle,
  X,
  Save,
  Filter
} from "lucide-react";
import AdminLayout from "@/Layouts/AdminLayout";
import Swal from "sweetalert2";

export default function OfficeAdmin({ regions }) {
  // State for data
  const [officesData, setOfficesData] = useState([]);
  const [regionsList, setRegionsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('offices'); // 'offices' or 'regions'

  // State for search and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(null);

  // State for modals
  const [isOfficeModalOpen, setIsOfficeModalOpen] = useState(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [currentOffice, setCurrentOffice] = useState(null);
  const [currentRegion, setCurrentRegion] = useState(null);

  // Forms data
  const [officeFormData, setOfficeFormData] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
    region_id: ""
  });

  const [regionFormData, setRegionFormData] = useState({
    name: "",
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  // Prepare data from props when component mounts
  useEffect(() => {
    if (regions) {
      setRegionsList(regions);

      // Flatten the data structure
      const flattenedData = regions.reduce((acc, region) => {
        const offices = region.office.map(office => ({
          ...office,
          region: { name: region.name, id: region.id }
        }));
        return [...acc, ...offices];
      }, []);

      setOfficesData(flattenedData);
    }
  }, [regions]);

  // Office form handlers
  const handleOfficeInputChange = (e) => {
    const { name, value } = e.target;
    setOfficeFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditOffice = (office) => {
    setCurrentOffice(office);
    setOfficeFormData({
      name: office.name,
      address: office.address,
      city: office.city,
      phone: office.phone,
      region_id: office.region.id
    });
    setIsOfficeModalOpen(true);
  };

  const handleAddOffice = () => {
    setCurrentOffice(null);
    setOfficeFormData({
      name: "",
      address: "",
      city: "",
      phone: "",
      region_id: regionsList.length > 0 ? regionsList[0].id : ""
    });
    setIsOfficeModalOpen(true);
  };

  const handleDeleteOffice = async (id) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: "Data kantor akan dihapus permanen!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            title: 'Menghapus...',
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            }
          });

          await axios.delete(route("office.destroy", id));

          // Update local state after successful delete
          setOfficesData(prev => prev.filter(office => office.id !== id));

          Swal.fire(
            'Terhapus!',
            'Data kantor berhasil dihapus.',
            'success'
          );
        } catch (error) {
          console.error("Error deleting office:", error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Gagal menghapus data kantor!',
          });
        }
      }
    });
  };

  const handleSubmitOffice = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        title: 'Menyimpan...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      let response;

      if (currentOffice) {
        // Update existing office
        response = await axios.put(route("office.update", currentOffice.id), officeFormData);

        // Update local state
        setOfficesData(prev =>
          prev.map(office =>
            office.id === currentOffice.id
              ? {
                ...response.data.data,
                region: {
                  id: response.data.data.region_id,
                  name: regionsList.find(r => r.id === response.data.data.region_id)?.name || 'Unknown'
                }
              }
              : office
          )
        );

        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data kantor berhasil diperbarui.',
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        // Create new office
        response = await axios.post(route("office.store"), officeFormData);

        // Add to local state
        const newOffice = {
          ...response.data.data,
          region: {
            id: response.data.data.region_id,
            name: regionsList.find(r => r.id === response.data.data.region_id)?.name || 'Unknown'
          }
        };

        setOfficesData(prev => [...prev, newOffice]);

        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data kantor baru berhasil ditambahkan.',
          timer: 2000,
          showConfirmButton: false
        });
      }

      setIsOfficeModalOpen(false);
    } catch (error) {
      console.error("Error saving office:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal menyimpan data kantor!',
        footer: error.response?.data?.message || error.message
      });
    }
  };

  // Region form handlers
  const handleRegionInputChange = (e) => {
    const { name, value } = e.target;
    setRegionFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditRegion = (region) => {
    setCurrentRegion(region);
    setRegionFormData({
      name: region.name,
    });
    setIsRegionModalOpen(true);
  };

  const handleAddRegion = () => {
    setCurrentRegion(null);
    setRegionFormData({
      name: "",
    });
    setIsRegionModalOpen(true);
  };

  const handleDeleteRegion = async (id) => {
    // Check if there are offices in this region
    const officesInRegion = officesData.filter(office => office.region.id === id);

    if (officesInRegion.length > 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Region Masih Digunakan',
        text: `Region ini memiliki ${officesInRegion.length} kantor yang terkait. Hapus atau pindahkan kantor-kantor tersebut terlebih dahulu.`,
      });
      return;
    }

    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: "Data region akan dihapus permanen!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({
            title: 'Menghapus...',
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            }
          });

          await axios.delete(route("region.destroy", id));

          // Update local state after successful delete
          setRegionsList(prev => prev.filter(region => region.id !== id));

          Swal.fire(
            'Terhapus!',
            'Data region berhasil dihapus.',
            'success'
          );
        } catch (error) {
          console.error("Error deleting region:", error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Gagal menghapus data region!',
          });
        }
      }
    });
  };

  const handleSubmitRegion = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        title: 'Menyimpan...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      let response;

      if (currentRegion) {
        // Update existing region
        response = await axios.put(route("region.update", currentRegion.id), regionFormData);

        // Update local state
        setRegionsList(prev =>
          prev.map(region =>
            region.id === currentRegion.id
              ? response.data.data
              : region
          )
        );

        // Also update related offices
        setOfficesData(prev =>
          prev.map(office =>
            office.region.id === currentRegion.id
              ? { ...office, region: { ...office.region, name: response.data.data.name } }
              : office
          )
        );

        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data region berhasil diperbarui.',
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        // Create new region
        response = await axios.post(route("region.store"), regionFormData);

        // Add to local state
        setRegionsList(prev => [...prev, response.data.data]);

        Swal.fire({
          icon: 'success',
          title: 'Berhasil!',
          text: 'Data region baru berhasil ditambahkan.',
          timer: 2000,
          showConfirmButton: false
        });
      }

      setIsRegionModalOpen(false);
    } catch (error) {
      console.error("Error saving region:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Gagal menyimpan data region!',
        footer: error.response?.data?.message || error.message
      });
    }
  };

  // Filtering & Pagination logic
  const filteredOffices = officesData.filter(office => {
    const matchesSearch =
      office.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      office.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      office.region.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRegion = selectedRegion ? office.region.id === selectedRegion : true;

    return matchesSearch && matchesRegion;
  });

  const filteredRegions = regionsList.filter(region =>
    region.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination for offices
  const indexOfLastOffice = currentPage * itemsPerPage;
  const indexOfFirstOffice = indexOfLastOffice - itemsPerPage;
  const currentOffices = filteredOffices.slice(indexOfFirstOffice, indexOfLastOffice);
  const totalOfficePages = Math.ceil(filteredOffices.length / itemsPerPage);

  // Calculate pagination for regions
  const indexOfLastRegion = currentPage * itemsPerPage;
  const indexOfFirstRegion = indexOfLastRegion - itemsPerPage;
  const currentRegions = filteredRegions.slice(indexOfFirstRegion, indexOfLastRegion);
  const totalRegionPages = Math.ceil(filteredRegions.length / itemsPerPage);

  // Helper for pagination display
  const getPaginationRange = (currentPage, totalPages) => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5];
    }

    if (currentPage >= totalPages - 2) {
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      ];
    }

    return [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2
    ];
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg">Loading...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-4 md:p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 rounded-xl p-6 text-black shadow-md">
          <h1 className="text-2xl md:text-3xl font-bold">
            {activeTab === 'offices' ? 'Manajemen Kantor' : 'Manajemen Region'}
          </h1>
          <p className="mt-2 opacity-90">
            {activeTab === 'offices'
              ? 'Kelola data kantor dari berbagai region di sini'
              : 'Kelola data region untuk pengelompokan kantor'
            }
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-xl shadow-sm mb-6 p-1 flex border">
          <button
            onClick={() => {
              setActiveTab('offices');
              setCurrentPage(1);
            }}
            className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition duration-200 ${activeTab === 'offices'
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Building size={18} />
              <span>Kantor</span>
            </div>
          </button>
          <button
            onClick={() => {
              setActiveTab('regions');
              setCurrentPage(1);
            }}
            className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition duration-200 ${activeTab === 'regions'
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Layers size={18} />
              <span>Region</span>
            </div>
          </button>
        </div>

        {/* Search and Action Bar */}
        <div className="bg-white rounded-xl shadow-sm mb-6 p-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-center gap-2 border rounded-lg p-2 flex-1 max-w-md">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder={activeTab === 'offices'
                  ? "Cari kantor, kota, atau region..."
                  : "Cari region..."
                }
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="outline-none flex-1 text-sm rounded-md"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X size={16} className="text-gray-500" />
                </button>
              )}
            </div>

            {activeTab === 'offices' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddOffice}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition duration-200 shadow-sm text-sm ml-auto"
                >
                  <Plus size={16} />
                  <span className="hidden sm:inline">Tambah</span> Kantor
                </button>
              </div>
            )}

            {activeTab === 'regions' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddRegion}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition duration-200 shadow-sm text-sm ml-auto"
                >
                  <Plus size={16} />
                  <span className="hidden sm:inline">Tambah</span> Region
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Office Content */}
        {activeTab === 'offices' && (
          <>
            {/* Office Cards */}
            {currentOffices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
                {currentOffices.map((office) => (
                  <div key={office.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition duration-200 flex flex-col">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 border-b flex justify-between items-center">
                      <div className="font-medium text-blue-700 text-sm flex items-center gap-2">
                        <Layers size={14} className="opacity-80" />
                        {office.region.name}
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEditOffice(office)}
                          className="p-1.5 text-blue-600 hover:bg-blue-100 rounded-full transition-colors"
                          title="Edit kantor"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteOffice(office.id)}
                          className="p-1.5 text-red-600 hover:bg-red-100 rounded-full transition-colors"
                          title="Hapus kantor"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col h-full">
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gray-800">
                        <Building size={18} className="text-gray-500" />
                        {office.name}
                      </h3>
                      <div className="space-y-2 text-gray-600 flex-grow">
                        <div className="flex items-start gap-2">
                          <MapPin size={18} className="mt-0.5 min-w-[18px] text-gray-500" />
                          <span className="text-sm">{office.address}, {office.city}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={18} className="text-gray-500" />
                          <span className="text-sm">{office.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center mb-8">
                <Globe size={48} className="mx-auto text-gray-400 mb-3" />
                <h3 className="text-lg font-medium text-gray-900">Tidak ada kantor ditemukan</h3>
                <p className="text-gray-500 mt-1">
                  {searchTerm || selectedRegion
                    ? "Tidak ada hasil yang sesuai dengan filter"
                    : "Belum ada data kantor yang tersedia"
                  }
                </p>
                <button
                  onClick={handleAddOffice}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg inline-flex items-center gap-2 hover:bg-blue-700 transition duration-200"
                >
                  <Plus size={18} />
                  Tambah Kantor Baru
                </button>
              </div>
            )}

            {/* Office Pagination */}
            {filteredOffices.length > itemsPerPage && (
              <div className="bg-white rounded-xl shadow-sm p-3 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600">
                  Menampilkan {indexOfFirstOffice + 1}-{Math.min(indexOfLastOffice, filteredOffices.length)} dari {filteredOffices.length} kantor
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronLeft size={16} />
                    <ChevronLeft size={16} className="-ml-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <div className="flex items-center gap-1">
                    {getPaginationRange(currentPage, totalOfficePages).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-8 h-8 rounded-lg ${currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'border hover:bg-gray-50'
                          }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalOfficePages))}
                    disabled={currentPage === totalOfficePages}
                    className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronRight size={16} />
                  </button>
                  <button
                    onClick={() => setCurrentPage(totalOfficePages)}
                    disabled={currentPage === totalOfficePages}
                    className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronRight size={16} />
                    <ChevronRight size={16} className="-ml-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Tampilkan:</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    {[9, 18, 27, 36].map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </>
        )}

        {/* Region Content */}
        {activeTab === 'regions' && (
          <>
            {/* Regions Table */}
            {currentRegions.length > 0 ? (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 text-left text-sm font-medium text-gray-600">
                        <th className="px-4 py-3">Nama Region</th>
                        <th className="px-4 py-3">Jumlah Kantor</th>
                        <th className="px-4 py-3 text-right">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {currentRegions.map((region) => {
                        const officeCount = officesData.filter(office => office.region.id === region.id).length;
                        return (
                          <tr key={region.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-gray-800">
                              <div className="flex items-center gap-2">
                                <Layers size={16} className="text-blue-600" />
                                {region.name}
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {officeCount} kantor
                              </span>
                            </td>
                            <td className="px-4 py-3 text-right">
                              <div className="flex justify-end gap-2">
                                <button
                                  onClick={() => handleEditRegion(region)}
                                  className="p-1.5 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                                >
                                  <Edit size={16} />
                                </button>
                                <button
                                  onClick={() => handleDeleteRegion(region.id)}
                                  className={`p-1.5 text-red-600 hover:bg-red-100 rounded-lg transition-colors ${officeCount > 0 ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                  disabled={officeCount > 0}
                                  title={officeCount > 0 ? 'Region masih memiliki kantor terkait' : 'Hapus region'}
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center mb-8">
                <Layers size={48} className="mx-auto text-gray-400 mb-3" />
                <h3 className="text-lg font-medium text-gray-900">Tidak ada region ditemukan</h3>
                <p className="text-gray-500 mt-1">
                  {searchTerm
                    ? `Tidak ada hasil untuk pencarian "${searchTerm}"`
                    : "Belum ada data region yang tersedia"
                  }
                </p>
                <button
                  onClick={handleAddRegion}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg inline-flex items-center gap-2 hover:bg-blue-700 transition duration-200"
                >
                  <Plus size={18} />
                  Tambah Region
                </button>
              </div>
            )}

            {/* Region Pagination */}
            {filteredRegions.length > itemsPerPage && (
              <div className="bg-white rounded-xl shadow-sm p-3 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600">
                  Menampilkan {indexOfFirstRegion + 1}-{Math.min(indexOfLastRegion, filteredRegions.length)} dari {filteredRegions.length} region
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronLeft size={16} />
                    <ChevronLeft size={16} className="-ml-4" />
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <div className="flex items-center gap-1">
                    {getPaginationRange(currentPage, totalRegionPages).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-8 h-8 rounded-lg ${currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'border hover:bg-gray-50'
                          }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalRegionPages))}
                    disabled={currentPage === totalRegionPages}
                    className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronRight size={16} />
                  </button>
                  <button
                    onClick={() => setCurrentPage(totalRegionPages)}
                    disabled={currentPage === totalRegionPages}
                    className="p-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    <ChevronRight size={16} />
                    <ChevronRight size={16} className="-ml-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Tampilkan:</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    {[9, 18, 27, 36].map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </>
        )}

        {/* Office Form Modal */}
        {isOfficeModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 w-full max-w-xl shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Building size={20} className="text-blue-600" />
                  {currentOffice ? "Edit Kantor" : "Tambah Kantor Baru"}
                </h2>
                <button
                  onClick={() => setIsOfficeModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 rounded-full p-1 hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmitOffice} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Region
                  </label>
                  <select
                    name="region_id"
                    value={officeFormData.region_id}
                    onChange={handleOfficeInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Pilih Region</option>
                    {regionsList.map(region => (
                      <option key={region.id} value={region.id}>
                        {region.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Kantor
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={officeFormData.name}
                    onChange={handleOfficeInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan nama kantor"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alamat
                  </label>
                  <textarea
                    name="address"
                    value={officeFormData.address}
                    onChange={handleOfficeInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan alamat lengkap"
                    rows={2}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kota
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={officeFormData.city}
                      onChange={handleOfficeInputChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan kota"

                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telepon
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={officeFormData.phone}
                      onChange={handleOfficeInputChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsOfficeModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200 flex items-center gap-2"
                  >
                    <X size={16} />
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center gap-2"
                  >
                    <Save size={16} />
                    {currentOffice ? "Simpan Perubahan" : "Tambah Kantor"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Region Form Modal */}
        {isRegionModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 w-full max-w-xl shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Layers size={20} className="text-blue-600" />
                  {currentRegion ? "Edit Region" : "Tambah Region Baru"}
                </h2>
                <button
                  onClick={() => setIsRegionModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 rounded-full p-1 hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmitRegion} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Region
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={regionFormData.name}
                    onChange={handleRegionInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan nama region"
                    required
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsRegionModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200 flex items-center gap-2"
                  >
                    <X size={16} />
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center gap-2"
                  >
                    <Save size={16} />
                    {currentRegion ? "Simpan Perubahan" : "Tambah Region"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}