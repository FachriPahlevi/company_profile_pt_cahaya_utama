<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class OfficeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Insert data into the regions table
         DB::table('regions')->insert([
            ['name' => 'Kantor Pusat', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Kantor Perwakilan Pulau Jawa', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'KC Makassar', 'created_at' => now(), 'updated_at' => now()],
        ]);
          // Insert data into the offices table
          DB::table('offices')->insert([
            ['name' => 'KP Surabaya', 'region_id' => 1, 'address' => "Komplek Ruko Mangga Dua A6 No. 01-02\nJl. Jagir Wonokromo No. 100", 'city' => 'Surabaya', 'phone' => '+62318481201', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'KC Jakarta – Tangerang', 'region_id' => 2, 'address' => "Jl. Bintaro Utara Raya Blok AP No. 59\nBintaro Sektor 3 Bintaro Jaya", 'city' => 'Tangerang Selatan', 'phone' => null, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'KC Semarang', 'region_id' => 2, 'address' => "Ruko New York E-15 Citra Grand Boulevard\nJl. Kompol R. Soekanto Mangunharjo", 'city' => 'Semarang', 'phone' => null, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'KC Yogyakarta', 'region_id' => 2, 'address' => "Perum MBS (Mataram Bumi Sejahtera) D-83\nCondong Catur, Depok, Sleman", 'city' => 'Yogyakarta', 'phone' => null, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'KC Malang', 'region_id' => 2, 'address' => "Jalan Cakalang 102 A\nPolowijen, Malang", 'city' => 'Malang', 'phone' => null, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'KC Kediri', 'region_id' => 2, 'address' => "Jl. Kawi 51 A", 'city' => 'Kediri', 'phone' => null, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'KC Gresik', 'region_id' => 2, 'address' => "Jl. Gubernur Suryo\nKomplek Ruko Multi Sarana Plaza, Blok C 11", 'city' => 'Gresik', 'phone' => null, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
