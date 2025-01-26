<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id();
            $table->string('full_name'); // Kolom untuk nama lengkap
            $table->string('company_name')->nullable(); // Kolom untuk nama perusahaan (nullable)
            $table->string('phone_number')->nullable(); // Kolom untuk nomor telepon (nullable)
            $table->string('subject'); // Kolom untuk subjek
            $table->text('message'); // Kolom untuk pesan
            $table->timestamps(); // Kolom untuk created_at dan updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
