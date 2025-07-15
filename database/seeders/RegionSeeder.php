<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class RegionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('regions')->insert([
            ['name' => 'Kantor Pusat', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Kantor Perwakilan Pulau Jawa', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'KC Makassar', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
