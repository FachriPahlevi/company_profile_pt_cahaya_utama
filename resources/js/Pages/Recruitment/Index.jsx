import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';

const RecruitmentForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: '',
    email: '',
    phone: '',
    address: '',
    
    // Documents
    formalPhoto: null,
    idCard: null,
    familyCard: null,
    lastDiploma: null,
    supportingCerts: null,
    policeRecord: null,
    healthCert: null,
    application: null,
    cv: null
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const validateStep = () => {
    switch(step) {
    case 1:
            return true;
      case 2:
        return formData.fullName && formData.email && formData.phone && formData.address;
      case 3:
        return formData.formalPhoto && formData.idCard && formData.familyCard;
      case 4:
        return formData.lastDiploma && formData.cv;
      default:
        return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg">
          {/* Progress Bar */}
          <div className="p-4 border-b">
            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-bold">Formulir Rekrutmen</div>
                <div className="text-sm font-semibold text-gray-600">
                  {Math.round(progress)}%
                </div>
              </div>
              <div className="flex h-2 mb-4 overflow-hidden rounded bg-gray-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="bg-blue-500"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                <span>Persiapan Dokumen</span>
                <span>Data Pribadi</span>
                <span>Dokumen</span>
                <span>Finalisasi</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6">

            {/* Step 1: Prepare Document */}
            {step === 1 && (
                                  <div className="bg-blue-50 p-4 rounded-lg">
                                     <h1 className="text-2xl font-bold mb-2">Formulir Rekrutmen</h1>
                                     <p className="text-gray-500 mb-6">Isi informasi berikut dengan baik dan benar. Tanda <span className="text-red-500">*</span> Wajib Diisi</p>
                                  <h2 className="text-xl font-semibold mb-2">Persiapkan Berkas Dokumen</h2>
                                  <p className="text-blue-500 mb-4">Sebelum melanjutkan, mohon persiapkan dokumen gambar/scan (.jpg/.png) yang jelas.</p>
                                  <ul className="space-y-2">
                                      <li className="flex items-center">
                                          <FaCheck className='text-green-500 mr-2'/>
                                          <span>Pas Foto Formal</span>
                                      </li>
                                      <li className="flex items-center">
                                          <FaCheck className='text-green-500 mr-2'/>
                                          <span>Kartu Identitas (KTP)</span>
                                      </li>
                                      <li className="flex items-center">
                                          <FaCheck className='text-green-500 mr-2'/>
                                          <span>Kartu Keluarga</span>
                                      </li>
                                      <li className="flex items-center">
                                          <FaCheck className='text-green-500 mr-2'/>
                                          <span>Ijazah Terakhir</span>
                                      </li>
                                      <li className="flex items-center">
                                          <FaCheck className='text-green-500 mr-2'/>
                                          <span>Sertifikasi Pendukung</span>
                                      </li>
                                      <li className="flex items-center">
                                          <FaCheck className='text-green-500 mr-2'/>
                                          <span>Surat Keterangan Catatan Kepolisian (SKCK)</span>
                                      </li>
                                      <li className="flex items-center">
                                          <FaCheck className='text-green-500 mr-2'/>
                                          <span>Surat Keterangan Dokter/Sehat</span>
                                      </li>
                                      <li className="flex items-center">
                                          <FaCheck className='text-green-500 mr-2'/>
                                          <span>Lamaran Kerja</span>
                                      </li>
                                      <li className="flex items-center">
                                          <FaCheck className='text-green-500 mr-2'/>
                                          <span>Curriculum Vitae (CV)</span>
                                      </li>
                                  </ul>
                              </div>
            )}

            {/* Step 2: Personal Information */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Data Pribadi</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    No. Telepon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Alamat <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                    required
                  />
                </div>
              </div>
            )}

            {/* Step 3: Document Upload */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Persiapkan Berkas Dokumen</h2>
                <p className="text-sm text-gray-500">
                  Sebelum melanjutkan, mohon persiapkan dokumen gambar/scan (.jpg/.png) yang jelas.
                </p>

                {[
                  { name: 'formalPhoto', label: 'Pas Foto Formal' },
                  { name: 'idCard', label: 'Kartu Identitas (KTP)' },
                  { name: 'familyCard', label: 'Kartu Keluarga' },
                  { name: 'lastDiploma', label: 'Ijazah Terakhir' },
                  { name: 'supportingCerts', label: 'Sertifikasi Pendukung' },
                  { name: 'policeRecord', label: 'Surat Keterangan Catatan Kepolisian (SKCK)' },
                  { name: 'healthCert', label: 'Surat Keterangan Dokter/Sehat' },
                  { name: 'application', label: 'Lamaran Kerja' },
                  { name: 'cv', label: 'Curriculum Vitae (CV)' },
                ].map((doc) => (
                  <div key={doc.name} className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${formData[doc.name] ? 'bg-green-100 text-green-500' : 'bg-gray-100'}`}>
                      {formData[doc.name] && <Check size={16} />}
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">
                        {doc.label}
                      </label>
                      <input
                        type="file"
                        name={doc.name}
                        onChange={handleInputChange}
                        accept="image/*"
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Review & Kirim</h2>
                <p className="text-sm text-gray-500">
                  Silakan periksa kembali data yang telah diisi sebelum mengirim.
                </p>

                {/* Review Personal Info */}
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-3">Data Pribadi</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Nama Lengkap:</p>
                      <p className="font-medium">{formData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Email:</p>
                      <p className="font-medium">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">No. Telepon:</p>
                      <p className="font-medium">{formData.phone}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Alamat:</p>
                      <p className="font-medium">{formData.address}</p>
                    </div>
                  </div>
                </div>

                {/* Review Documents */}
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-3">Dokumen Terunggah</h3>
                  <div className="space-y-2">
                    {Object.entries(formData)
                      .filter(([key, value]) => value instanceof File)
                      .map(([key, value]) => (
                        <div key={key} className="flex items-center text-sm">
                          <Check className="text-green-500 mr-2" size={16} />
                          <span>{value.name}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Sebelumnya
                </button>
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={() => validateStep() && setStep(step + 1)}
                  disabled={!validateStep()}
                  className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Selanjutnya
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Kirim Lamaran
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentForm;