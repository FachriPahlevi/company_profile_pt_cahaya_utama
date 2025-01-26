<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    // Menentukan nama tabel yang digunakan
    protected $table = 'contacts';

    // Menentukan kolom yang dapat diisi secara massal
    protected $fillable = [
        'full_name',
        'company_name',
        'phone_number',
        'subject',
        'message',
    ];

    // Jika Anda ingin menambahkan pengaturan untuk timestamps
    public $timestamps = true;

    // Jika Anda ingin menambahkan metode untuk memformat data atau logika lainnya, Anda bisa menambahkannya di sini
    public function getFullNameAttribute($value)
    {
        return ucfirst($value); // Contoh: Mengubah huruf pertama menjadi kapital
    }

    // Metode lain yang mungkin berguna
    public function scopeWithCompany($query)
    {
        return $query->whereNotNull('company_name');
    }
}