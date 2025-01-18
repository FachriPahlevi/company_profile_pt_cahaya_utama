import React from "react";
import { FaRunning, FaBolt, FaUmbrella, FaCogs, FaPiggyBank, FaChartLine, FaWallet, FaShoppingBag, FaSearch } from "react-icons/fa";
import { FaHandsHolding } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaBellConcierge } from "react-icons/fa6";
import { BsCupHot } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
export default function Service() {
    return (
        <div
            className="min-h-screen bg-black/50 backdrop-blur-xl relative"
            style={{
                backgroundImage: "url('/img/background/buruh-pabrik-ilustrasi1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>

            <div className="relative container mx-auto px-4 py-16 text-white">

                {/* Definition and Legal Section */}
                <div className="grid md:grid-cols-3 gap-16 mb-24">
                      {/* Icon and Title Section */}
                <div className="flex flex-col items-center mb-16">
                    <div className="w-20 h-20 mb-8">
                    <HiOutlineLightBulb className="w-full h-full text-white"/>
                    </div>
                    <h1 className="text-6xl font-extrabold text-blue-400">Jasa</h1>
                    <h2 className="text-5xl font-extrabold text-blue-400 mt-2">Alih Daya</h2>
                </div>  
                    <div className="text-center">
                        <h2 className="text-4xl font-extrabold text-blue-400 mb-6">Definisi</h2>
                        <p className="text-xl leading-relaxed">
                            Pemindahan sistem kelola tenaga kerja<br />
                            dari perusahaan Anda kepada kami.<br />
                            Sehingga perusahaan Anda lebih fokus<br />
                            pada prioritas utama.
                        </p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-4xl font-extrabold text-blue-400 mb-6">Aspek Hukum</h2>
                        <p className="text-xl leading-relaxed">
                            Undang-Undang Ketenagakerjaan
                            <br />
                            <span className="text-3xl font-bold my-2 block">No. 13 Tahun 2003</span>
                            Republik Indonesia
                        </p>
                    </div>
                </div>

                {/* Why Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-blue-400">Mengapa ?</h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {/* Card 1 */}
                        <div className="text-left grid grid-cols-6">
                            <div className="col-span-1 px-8">
                                <FaRunning className="text-3xl text-blue-400 mb-4" />
                            </div>
                            <div className="col-span-5">
                                <h3 className="text-xl font-bold text-white mb-4">Tingkatkan Kinerja Perusahaan</h3>
                                <p className="text-lg leading-relaxed">
                                    Dengan jasa alih daya, perusahaan lebih fokus pada bisnis proses sehingga efektif pada pencapaian target.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="text-left grid grid-cols-6">
                            <div className="col-span-1 px-8">
                                <FaCogs className="text-3xl text-blue-400 mb-4" />
                            </div>
                            <div className="col-span-5">
                                <h3 className="text-xl font-bold text-white mb-4">Kesempatan Re-Engineering</h3>
                                <p className="text-lg leading-relaxed">
                                    Dengan jasa alih daya, perusahaan memiliki kesempatan untuk me-re-engineering bisnis proses.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}

                        <div className="text-left grid grid-cols-6">
                            <div className="col-span-1 px-8">
                                <FaShoppingBag className="text-3xl text-blue-400 mb-4" />
                            </div>
                            <div className="col-span-5">
                                <h3 className="text-xl font-bold text-white mb-4">Solusi Cerdas Atasi Birokrasi</h3>
                                <p className="text-lg leading-relaxed">
                                Perusahaan dapat mengalihkan sebagian pekerjaan yang berbenturan dengan birokrasi atau tantangan sejenis lainnya.</p>
                            </div>
                        </div>

                        <div className="text-left grid grid-cols-6">
                            <div className="col-span-1 px-8">
                                <FaBolt className="text-3xl text-blue-400 mb-4" />
                            </div>
                            <div className="col-span-5">
                                <h3 className="text-xl font-bold text-white mb-4">Optimalkan Operasional Perusahaan</h3>
                                <p className="text-lg leading-relaxed">
                                    Dengan jasa alih daya, operasional harian perusahaan berjalan optimal. Rasio produktivitas karyawan meningkat.
                                </p>
                            </div>
                        </div>
                          {/* Card 5 */}
                          <div className="text-left grid grid-cols-6">
                            <div className="col-span-1 px-8">
                                <FaPiggyBank className="text-3xl text-blue-400 mb-4" />
                            </div>
                            <div className="col-span-5">
                                <h3 className="text-xl font-bold text-white mb-4">Keuangan Lebih Baik</h3>
                                <p className="text-lg leading-relaxed">
                                    Dengan pengeluaran biaya operasional yang teratur, perusahaan lebih aman dan nyaman dalam mengelola keuangan.
                                </p>
                            </div>
                        </div>
                           {/* Card 6 */}
                           <div className="text-left grid grid-cols-6">
                            <div className="col-span-1 px-8">
                                <FaHandsHolding className="text-3xl text-blue-400 mb-4" />
                            </div>
                            <div className="col-span-5">
                                <h3 className="text-xl font-bold text-white mb-4">Optimalkan Anggaran Belanja</h3>
                                <p className="text-lg leading-relaxed">
                                    Pengelolaan anggaran belanja lebih optimal dengan mengalihkan sebagian modal usaha menjadi biaya operasional sewa/pinjam alat-alat perkantoran.
                                </p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="text-left grid grid-cols-6">
                            <div className="col-span-1 px-8">
                                <FaUmbrella className="text-3xl text-blue-400 mb-4" />
                            </div>
                            <div className="col-span-5">
                                <h3 className="text-xl font-bold text-white mb-4">Mengurangi Resiko Operasional</h3>
                                <p className="text-lg leading-relaxed">
                                    Dengan jasa alih daya, beban dan resiko operasional perusahaan terbagi dengan lebih terukur.
                                </p>
                            </div>
                        </div>

                        {/* Card 7 */}
                        <div className="text-left grid grid-cols-6">
                            <div className="col-span-1 px-8">
                                <FaChartLine className="text-3xl text-blue-400 mb-4" />
                            </div>
                            <div className="col-span-5">
                                <h3 className="text-xl font-bold text-white mb-4">Tingkatkan Tercapainya ROI</h3>
                                <p className="text-lg leading-relaxed">
                                    Dengan jasa alih daya, kerja perusahaan lebih efektif dalam mencapai Return of Investment (ROI).
                                </p>
                            </div>
                        </div>
                </div>


      {/* Why Section */}
      <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-blue-400">Benefit</h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Card 1 */}
                       {/* Card 1 */}
<div className="text-left grid grid-cols-6">
    <div className="col-span-1 px-8">
        <FaSearch className="text-3xl text-blue-400 mb-4" />
    </div>
    <div className="col-span-5">
        <h3 className="text-xl font-bold text-white mb-4">Seleksi Tepat Sasaran</h3>
        <p className="text-lg leading-relaxed">
            Perusahaan jasa alih daya berpengalaman dalam melaksanakan proses seleksi SDM dengan standar tinggi dan ketentuan lengkap dari segala aspek.
        </p>
    </div>
</div>

{/* Card 2 */}
<div className="text-left grid grid-cols-6">
    <div className="col-span-1 px-8">
        <FaHandHoldingHeart className="text-3xl text-blue-400 mb-4" />
    </div>
    <div className="col-span-5">
        <h3 className="text-xl font-bold text-white mb-4">Layanan Prima</h3>
        <p className="text-lg leading-relaxed">
            Perusahaan jasa alih daya memiliki standar pelayanan yang prima. Standar layanan PT. Cahaya Utama berpedoman pada prinsip SMART (Sigap, Menarik, Antusias, Ramah, dan Tanggap).
        </p>
    </div>
</div>

{/* Card 3 */}
<div className="text-left grid grid-cols-6">
    <div className="col-span-1 px-8">
        <FaBellConcierge className="text-3xl text-blue-400 mb-4" />
    </div>
    <div className="col-span-5">
        <h3 className="text-xl font-bold text-white mb-4">Pelatihan</h3>
        <p className="text-lg leading-relaxed">
            Perusahaan jasa alih daya secara rutin melaksanakan pelatihan yang dibutuhkan untuk meningkatkan kompetensi SDM.
        </p>
    </div>
</div>

{/* Card 4 */}
<div className="text-left grid grid-cols-6">
    <div className="col-span-1 px-8">
        <BsCupHot className="text-3xl text-blue-400 mb-4" />
    </div>
    <div className="col-span-5">
        <h3 className="text-xl font-bold text-white mb-4">Fleksibilitas</h3>
        <p className="text-lg leading-relaxed">
            User bebas mengajukan replacement SDM yang belum memenuhi ekspektasi.
        </p>
    </div>
</div>

                    </div>
            </div>
        </div>
    );
}
