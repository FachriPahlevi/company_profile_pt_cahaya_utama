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
            ['name' => 'Semen Indonesia', 'logo' => '/img/client/Semen_Indonesia_logo.png', 'width' => '90px', 'height' => 'auto'],
            ['name' => 'BCA', 'logo' => '/img/client/BCA_logo.png', 'width' => '100px', 'height' => 'auto'],
            ['name' => 'BNI', 'logo' => '/img/client/BNI_logo.png', 'width' => '120px', 'height' => 'auto'],
            ['name' => 'BII', 'logo' => '/img/client/bii_logo.png', 'width' => '110px', 'height' => 'auto'],
            ['name' => 'Ajinomoto', 'logo' => '/img/client/Ajinomoto_logo.png', 'width' => '130px', 'height' => 'auto'],
            ['name' => 'Indonesia Power', 'logo' => '/img/client/PLN_logo.png', 'width' => '150px', 'height' => 'auto'],
            ['name' => 'Kapal Api', 'logo' => '/img/client/kapal_api_logo.png', 'width' => '140px', 'height' => 'auto'],
            ['name' => 'Gudang Garam', 'logo' => '/img/client/gudang_garam_logo.png', 'width' => '120px', 'height' => 'auto'],
            ['name' => 'Waskita', 'logo' => '/img/client/Waskita_Karya.png', 'width' => '110px', 'height' => 'auto'],
            ['name' => 'Prodia', 'logo' => '/img/client/Prodia_logo.jpeg', 'width' => '130px', 'height' => 'auto'],
            ['name' => 'WIKA', 'logo' => '/img/client/Wijaya_Karya.png', 'width' => '140px', 'height' => 'auto'],
            ['name' => 'Auto 2000', 'logo' => '/img/client/Auto2000_logo.png', 'width' => '100px', 'height' => 'auto'],
            ['name' => 'Corteva', 'logo' => '/img/client/Corteva_logo.png', 'width' => '120px', 'height' => 'auto'],
            ['name' => 'Suzuki Finance', 'logo' => '/img/client/Suzuki_logo.png', 'width' => '130px', 'height' => 'auto'],
            ['name' => 'B-LOG', 'logo' => '/img/client/b_log_logo.png', 'width' => '110px', 'height' => 'auto'],
            ['name' => 'DHL', 'logo' => '/img/client/DHL_Logo.png', 'width' => '150px', 'height' => 'auto'],
            ['name' => 'Indomobil Finance', 'logo' => '/img/client/indo_mobil_logo.jpg', 'width' => '160px', 'height' => 'auto'],
        ];

        foreach ($clientLogos as $client) {
            DB::table('clients')->insert([
                'name' => $client['name'],
                'logo' => $client['logo'],
                'width' => $client['width'],  // Menambahkan kolom width
                'height' => $client['height'], // Menambahkan kolom height
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
