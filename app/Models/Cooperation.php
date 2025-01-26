<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cooperation extends Model
{
    protected $table = 'cooperations';

    // Menentukan kolom yang dapat diisi secara massal
    protected $guarded = [];
}
