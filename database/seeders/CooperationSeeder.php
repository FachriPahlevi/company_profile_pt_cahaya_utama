<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CooperationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cooperations = [
            ['name' => 'Direktorat Jenderal Pajak', 'logo' => '/img/cooperation/djp_logo.png', 'width' => '90px', 'height' => 'auto'],
            ['name' => 'Kementerian Ketenagakerjaan', 'logo' => '/img/cooperation/kemnaker_logo.png', 'width' => '100px', 'height' => 'auto'],
            ['name' => 'Kepolisian Negara Republik Indonesia', 'logo' => '/img/cooperation/kapolri_logo.png', 'width' => '150px', 'height' => 'auto'],
            ['name' => 'BPJS Ketenagakerjaan', 'logo' => '/img/cooperation/bpjs_ketenagakerjaan_logo.png', 'width' => '200px', 'height' => 'auto'],
            ['name' => 'Ecolab', 'logo' => '/img/cooperation/ecolab_logo.png', 'width' => '120px', 'height' => 'auto'],
            ['name' => 'Johnson Diversey', 'logo' => '/img/cooperation/johnson_logo.png', 'width' => '130px', 'height' => 'auto'],
            ['name' => 'BPJS Kesehatan', 'logo' => '/img/cooperation/BPJS_Kesehatan_logo.png', 'width' => '200px', 'height' => 'auto'],
        ];

        foreach ($cooperations as $cooperation) {
            DB::table('cooperations')->insert([
                'name' => $cooperation['name'],
                'logo' => $cooperation['logo'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
