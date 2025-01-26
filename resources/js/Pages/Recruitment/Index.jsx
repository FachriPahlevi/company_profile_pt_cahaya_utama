// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Check, ChevronRight, ChevronLeft } from 'lucide-react';
// import { FaCheck } from 'react-icons/fa';

// const RecruitmentForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     // Personal Info
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',

//     // Documents
//     formalPhoto: null,
//     idCard: null,
//     familyCard: null,
//     lastDiploma: null,
//     supportingCerts: null,
//     policeRecord: null,
//     healthCert: null,
//     application: null,
//     cv: null,
    
//     //step data diri
//     photo: null,
//     fullName: '',
//     nickname: '',
//     gender: 'male',
//     birthPlace: '',
//     birthDate: {
//       day: '',
//       month: '',
//       year: ''
//     },
//     nationality: 'WNI',
//     religion: 'Islam'
//   });

//   const totalSteps = 4;
//   const progress = (step / totalSteps) * 100;

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: files ? files[0] : value
//     }));
//   };

//   // const validateStep = () => {
//   //   switch (step) {
//   //     case 1:
//   //       return true;
//   //     case 2:
//   //       return formData.fullName && formData.email && formData.phone && formData.address;
//   //     case 3:
//   //       return formData.formalPhoto && formData.idCard && formData.familyCard;
//   //     case 4:
//   //       return formData.lastDiploma && formData.cv;
//   //     default:
//   //       return false;
//   //   }
//   // };

//   const validateStep = () => {
//     switch (step) {
//       case 1:
//         return true;
//       case 2:
//         return true;
//       case 3:
//         return true;
//       case 4:
//         return true;
//       default:
//         return false;
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };
//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.size <= 4 * 1024 * 1024) { // 4MB limit
//       setFormData(prev => ({ ...prev, photo: file }));
//     } else {
//       alert('File size should be less than 4MB');
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <div className="bg-white shadow rounded-lg">
//           {/* Progress Bar */}
//           <div className="p-4 border-b">
//             <div className="relative pt-1">
//               <div className="flex items-center justify-between mb-2">
//                 <div className="text-xl font-bold">Formulir Rekrutmen</div>
//                 <div className="text-sm font-semibold text-gray-600">
//                   {Math.round(progress)}%
//                 </div>
//               </div>
//               <div className="flex h-2 mb-4 overflow-hidden rounded bg-gray-200">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${progress}%` }}
//                   className="bg-blue-500"
//                 />
//               </div>
//               <div className="flex justify-between text-xs text-gray-600">
//                 <span>Persiapan Dokumen</span>
//                 <span>Data Pribadi</span>
//                 <span>Dokumen</span>
//                 <span>Finalisasi</span>
//               </div>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="p-6">

//             {/* Step 1: Prepare Document */}
//             {step === 1 && (
//               <div className="bg-blue-50 p-4 rounded-lg">
//                 <h1 className="text-2xl font-bold mb-2">Formulir Rekrutmen</h1>
//                 <p className="text-gray-500 mb-6">Isi informasi berikut dengan baik dan benar. Tanda <span className="text-red-500">*</span> Wajib Diisi</p>
//                 <h2 className="text-xl font-semibold mb-2">Persiapkan Berkas Dokumen</h2>
//                 <p className="text-blue-500 mb-4">Sebelum melanjutkan, mohon persiapkan dokumen gambar/scan (.jpg/.png) yang jelas.</p>
//                 <a>Kirim pesan melalui gmail berikut</a>
//                 <ul className="space-y-2">
//                   <li className="flex items-center">
//                     <FaCheck className='text-green-500 mr-2' />
//                     <span>Pas Foto Formal</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FaCheck className='text-green-500 mr-2' />
//                     <span>Kartu Identitas (KTP)</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FaCheck className='text-green-500 mr-2' />
//                     <span>Kartu Keluarga</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FaCheck className='text-green-500 mr-2' />
//                     <span>Ijazah Terakhir</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FaCheck className='text-green-500 mr-2' />
//                     <span>Sertifikasi Pendukung</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FaCheck className='text-green-500 mr-2' />
//                     <span>Surat Keterangan Catatan Kepolisian (SKCK)</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FaCheck className='text-green-500 mr-2' />
//                     <span>Surat Keterangan Dokter/Sehat</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FaCheck className='text-green-500 mr-2' />
//                     <span>Lamaran Kerja</span>
//                   </li>
//                   <li className="flex items-center">
//                     <FaCheck className='text-green-500 mr-2' />
//                     <span>Curriculum Vitae (CV)</span>
//                   </li>
//                 </ul>
//               </div>
//             )}
//             {/* Step 2: Recruitment Form */}
//             {step === 2 && (
//               <div className="space-y-6">
//                 <h2 className="text-xl font-semibold">Formulir Rekrutmen</h2>

//                 {/* Kompetensi */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Ajukan Kompetensi Anda <span className="text-red-500">*</span>
//                   </label>
//                   <select
//                     name="position"
//                     value={formData.position}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                     required
//                   >
//                     <option value="">Pilih...</option>
//                     <option value="Cleaning Service">Cleaning Service</option>
//                     <option value="Staff SDM">Staff SDM</option>
//                     <option value="Staff IT">Staff IT</option>
//                     <option value="Operator">Operator</option>
//                     <option value="Supir">Supir</option>
//                     <option value="Produksi">Produksi</option>
//                   </select>
//                 </div>

//                 {/* Posisi Yang Dilamar */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Posisi Yang Dilamar <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="desiredPosition"
//                     value={formData.desiredPosition}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                     placeholder="Contoh: Staff SDM / Staff IT"
//                     required
//                   />
//                 </div>

//                 {/* Posisi Yang Dilamar (Outsourcing) */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Posisi Yang Dilamar (Outsourcing) <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="desiredPositionOutsource"
//                     value={formData.desiredPositionOutsource}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                     placeholder="Contoh: Operator / Supir / Produksi"
//                     required
//                   />
//                 </div>

//                 {/* Perusahaan Yang Dituju */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Perusahaan Yang Dituju (Outsourcing) <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="targetCompany"
//                     value={formData.targetCompany}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
//                     placeholder="Nama Perusahaan"
//                   />
//                   <p className="text-gray-500 text-sm mt-1">
//                     Kosongkan jika tidak mengetahui
//                   </p>
//                 </div>
//               </div>
//             )}

//             {/* Step 3: Kompetensi */}
//             {step === 3 && (
//               <div className="space-y-6">
//                 <h2 className="text-xl font-semibold">Formulir Rekrutmen</h2>
//                 <p className="text-sm text-gray-600">
//                   Isi informasi berikut dengan baik dan benar. Tanda <span className="text-red-500">*</span> Wajib Diisi
//                 </p>

//                 <div className="bg-blue-50 p-6 rounded-md shadow-sm">
//                   {/* Ajukan Kompetensi Anda */}
//                   <h3 className="text-lg font-medium text-gray-700">Ajukan Kompetensi Anda</h3>
//                   <p className="text-sm text-gray-500">Sekarang Juga Sebagai ...</p>

//                   {/* Dropdown Kompetensi */}
//                   <div className="mt-4">
//                     <select
//                       name="competence"
//                       value={formData.competence}
//                       onChange={handleInputChange}
//                       className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
//                       required
//                     >
//                       <option value="">Pilih Kompetensi</option>
//                       <option value="Cleaning Service">Cleaning Service</option>
//                       <option value="Security">Security</option>
//                       <option value="Staff">Staff</option>
//                       <option value="Outsourcing">Outsourcing</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             )}


//             {/* Step 4: Personal Information */}
//             {step === 4 && (
//               <div className="space-y-6">
//                 <h2 className="text-xl font-semibold">Data Pribadi</h2>
//               </div>
//             )}

//             {/* Step 4: Document Upload */}
//             {step === 4 && (
//              <div className="max-w-2xl mx-auto p-6 space-y-6">
//              {/* Photo Upload */}
//              <div>
//                <label className="block font-medium text-gray-700 mb-2">
//                  Pas Foto <span className="text-red-500">*</span>
//                </label>
//                <div className="flex items-center">
//                  <label className="cursor-pointer bg-white border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
//                    Pilih File
//                    <input
//                      type="file"
//                      className="hidden"
//                      accept=".jpg,.png"
//                      onChange={handlePhotoChange}
//                    />
//                  </label>
//                  <span className="ml-3 text-gray-500">
//                    {formData.photo ? formData.photo.name : 'Tidak ada file yang dipilih'}
//                  </span>
//                </div>
//                <p className="mt-1 text-sm text-gray-500">Maximum size: 4 Mb (.jpg / .png)</p>
//              </div>

       
//              {/* Full Name */}
//              <div>
//                <label className="block font-medium text-gray-700 mb-2">
//                  Nama Lengkap <span className="text-red-500">*</span>
//                </label>
//                <input
//                  type="text"
//                  name="fullName"
//                  className="w-full border border-gray-300 rounded-md px-3 py-2"
//                  placeholder="Nama Lengkap"
//                  value={formData.fullName}
//                  onChange={handleInputChange}
//                />
//              </div>
       
//              {/* Nickname and Gender */}
//              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                <div>
//                  <label className="block font-medium text-gray-700 mb-2">
//                    Nama Panggilan <span className="text-red-500">*</span>
//                  </label>
//                  <input
//                    type="text"
//                    name="nickname"
//                    className="w-full border border-gray-300 rounded-md px-3 py-2"
//                    placeholder="Nama Panggilan"
//                    value={formData.nickname}
//                    onChange={handleInputChange}
//                  />
//                </div>
//                <div>
//                  <label className="block font-medium text-gray-700 mb-2">
//                    Jenis Kelamin <span className="text-red-500">*</span>
//                  </label>
//                  <div className="flex space-x-4 mt-2">
//                    <label className="flex items-center">
//                      <input
//                        type="radio"
//                        name="gender"
//                        value="male"
//                        checked={formData.gender === 'male'}
//                        onChange={handleInputChange}
//                        className="form-radio h-4 w-4 text-blue-600"
//                      />
//                      <span className="ml-2">Laki-laki</span>
//                    </label>
//                    <label className="flex items-center">
//                      <input
//                        type="radio"
//                        name="gender"
//                        value="female"
//                        checked={formData.gender === 'female'}
//                        onChange={handleInputChange}
//                        className="form-radio h-4 w-4 text-blue-600"
//                      />
//                      <span className="ml-2">Perempuan</span>
//                    </label>
//                  </div>
//                </div>
//              </div>
       
//              {/* Birth Place and Date */}
//              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                <div>
//                  <label className="block font-medium text-gray-700 mb-2">
//                    Tempat Lahir <span className="text-red-500">*</span>
//                  </label>
//                  <select
//                    name="birthPlace"
//                    className="w-full border border-gray-300 rounded-md px-3 py-2"
//                    value={formData.birthPlace}
//                    onChange={handleInputChange}
//                  >
//                    <option value="">Kota Surabaya</option>
//                  </select>
//                </div>
//                <div>
//                  <label className="block font-medium text-gray-700 mb-2">
//                    Tanggal lahir <span className="text-red-500">*</span>
//                  </label>
//                  <div className="grid grid-cols-3 gap-2">
//                    <select
//                      name="birthDate.day"
//                      className="border border-gray-300 rounded-md px-3 py-2"
//                      value={formData.birthDate.day}
//                      onChange={handleInputChange}
//                    >
//                      <option value="">Tanggal</option>
//                    </select>
//                    <select
//                      name="birthDate.month"
//                      className="border border-gray-300 rounded-md px-3 py-2"
//                      value={formData.birthDate.month}
//                      onChange={handleInputChange}
//                    >
//                      <option value="">Bulan</option>
//                    </select>
//                    <select
//                      name="birthDate.year"
//                      className="border border-gray-300 rounded-md px-3 py-2"
//                      value={formData.birthDate.year}
//                      onChange={handleInputChange}
//                    >
//                      <option value="">Tahun</option>
//                    </select>
//                  </div>
//                </div>
//              </div>
       
//              {/* Nationality and Religion */}
//              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                <div>
//                  <label className="block font-medium text-gray-700 mb-2">
//                    Kewarganegaraan <span className="text-red-500">*</span>
//                  </label>
//                  <select
//                    name="nationality"
//                    className="w-full border border-gray-300 rounded-md px-3 py-2"
//                    value={formData.nationality}
//                    onChange={handleInputChange}
//                  >
//                    <option value="WNI">WNI</option>
//                  </select>
//                </div>
//                <div>
//                  <label className="block font-medium text-gray-700 mb-2">
//                    Agama <span className="text-red-500">*</span>
//                  </label>
//                  <select
//                    name="religion"
//                    className="w-full border border-gray-300 rounded-md px-3 py-2"
//                    value={formData.religion}
//                    onChange={handleInputChange}
//                  >
//                    <option value="Islam">Islam</option>
//                  </select>
//                </div>
//              </div>
//            </div>
//             )}

//             {/* Navigation Buttons */}
//             <div className="mt-8 flex justify-between">
//               {step > 1 && (
//                 <button
//                   type="button"
//                   onClick={() => setStep(step - 1)}
//                   className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
//                 >
//                   <ChevronLeft className="mr-2 h-4 w-4" />
//                   Sebelumnya
//                 </button>
//               )}

//               {step < totalSteps ? (
//                 <button
//                   type="button"
//                   onClick={() => validateStep() && setStep(step + 1)}
//                   disabled={!validateStep()}
//                   className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   Selanjutnya
//                   <ChevronRight className="ml-2 h-4 w-4" />
//                 </button>
//               ) : (
//                 <button
//                   type="submit"
//                   className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
//                 >
//                   Kirim Lamaran
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecruitmentForm;