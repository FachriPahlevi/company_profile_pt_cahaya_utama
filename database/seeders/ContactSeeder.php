<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        $contacts = [];
        for ($i = 0; $i < 1500; $i++) {
            $contacts[] = [
                'full_name' => $faker->name,
                'company_name' => $faker->company,
                'phone_number' => $faker->phoneNumber,
                'subject' => $faker->sentence,
                'message' => $faker->paragraph,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        DB::table('contacts')->insert($contacts);
    }
}