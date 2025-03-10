<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $opens = [
        'Cleaning Service',
        'Staff SDM',
        'Staff IT',
        'Operator',
        'Supir',
        'Produksi',
        'Security'
        ];

        foreach($opens as $open){
            DB::table('positions')->insert([
                'name' => $open,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
