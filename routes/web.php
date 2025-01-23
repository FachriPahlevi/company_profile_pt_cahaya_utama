<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CooperationController;
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

//api data
Route::get('/clients', [ClientController::class, 'index']);

Route::get('/admincu/clients', [ClientController::class, 'show'])->name('admin.client');
Route::post('/admincu/clients/create', [ClientController::class, 'store'])->name('admin.client.create');

Route::get('/cooperations', [CooperationController::class, 'index']);

Route::get('/admincu', [DashboardController::class, 'index'])->name('dashboard');

// Route::get('/admincu/client', [ClientController::class, 'index'])->name('client.index');
// Route::get('/admincu/client', [ClientController::class, 'index'])->name('client.index');
// Route::post('/admincu/client', [ClientController::class, 'store'])->name('client.store');
// Route::post('/admincu/client', [ClientController::class, 'index'])->name('client.store');



Route::get('/contact', [FormController::class, 'index'])->name('contact');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
