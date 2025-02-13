<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $clientLogos = [
            ['name' => 'PT Santos Jaya Abadi', 'logo' => '/img/client/sja_logo.png'],
            ['name' => 'PT Gudang Garam', 'logo' => '/img/client/gudang_garam_logo.png'],
            ['name' => 'Suzuki Finance', 'logo' => '/img/client/Suzuki_logo.png'],
            ['name' => 'Indomobil Finance', 'logo' => '/img/client/indo_mobil_logo.jpg'],
            ['name' => 'Semen Indonesia', 'logo' => '/img/client/semen_indonesia_logo.png'],
            ['name' => 'Waskita', 'logo' => '/img/client/Waskita_Karya.png'],
            ['name' => 'WIKA', 'logo' => '/img/client/Wijaya_Karya.png'],
            ['name' => 'PLN', 'logo' => '/img/client/PLN_logo.png'],
            ['name' => 'Ajinomoto', 'logo' => '/img/client/Ajinomoto_logo.png'],
            ['name' => 'PT Surya zigzag', 'logo' => '/img/client/surya_zigzag_logo.png'],
            ['name' => 'PT Surya Pamanang', 'logo' => '/img/client/surya_pamanang_logo.png'],
            ['name' => 'Corteva', 'logo' => '/img/client/Corteva_logo.png'],
            ['name' => 'United States Embassy', 'logo' => '/img/client/consulate_surabaya_logo.png'],
            ['name' => 'DHL', 'logo' => '/img/client/DHL_Logo.png'],
            ['name' => 'BPD', 'logo' => '/img/client/bpd_logo.png'],
            ['name' => 'Assa', 'logo' => '/img/client/Assa_logo.png'],
            ['name' => 'BPJS Kesehatan', 'logo' => '/img/client/BPJS_Kesehatan_logo.png'],
            ['name' => 'Kementerian Perindustrian', 'logo' => '/img/client/kementrian_perindustrian_log.png'],
            ['name' => 'Hotel Santika', 'logo' => '/img/client/hotel_santika_logo.png'],
            ['name' => 'Prodia', 'logo' => '/img/client/Prodia_logo.jpeg'],
            ['name' => 'Toyota Tshuso', 'logo' => '/img/client/toyota_tshuso_logo.png'],
            ['name' => 'Kepu Kencana Arum', 'logo' => '/img/client/kencana_arum_logo.png'],
            ['name' => 'Japfa', 'logo' => '/img/client/japfa_logo.png'],
            ['name' => 'Puninar Logistics', 'logo' => '/img/client/puninar_logo.png'],
            ['name' => 'Wilmar', 'logo' => '/img/client/wilmar_logo.png'],
            ['name' => 'PT SMCC Utama Indonesia', 'logo' => '/img/client/smcc_utama_logo.png'],
            ['name' => 'PT Tri Point Centralindo', 'logo' => '/img/client/tpc_logo.png'],
            ['name' => 'PT Kencana Maju Bersama', 'logo' => '/img/client/kencana_maju_logo.png'],
        ];

        foreach ($clientLogos as $client) {
            DB::table('clients')->insert([
                'name' => $client['name'],
                'logo' => $client['logo'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
