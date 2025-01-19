<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index',);
});
Route::get('/perusahaan', function () {
    return Inertia::render('Company',);
});
Route::get('/sonsecurity', function () {
    return Inertia::render('SonSecurity',);
});
Route::get('/brilliant-cleaning', function () {
    return Inertia::render('Brilliant',);
});
Route::get('/trust-our-resource', function () {
    return Inertia::render('Trust',);
});

Route::get('/contact', [FormController::class, 'index'])->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
