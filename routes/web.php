<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CooperationController;
use App\Http\Controllers\RecruitmentController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Cache;

Route::get('/', function () {
    return Cache::remember('homepage', now()->addHours(24), function () {
        return Inertia::render('Index');
    });
});

Route::get('/perusahaan', function () {
    return Cache::remember('company_page', now()->addHours(24), function () {
        return Inertia::render('Company');
    });
});

Route::get('/sonsecurity', function () {
    return Cache::remember('sonsecurity_page', now()->addHours(24), function () {
        return Inertia::render('SonSecurity');
    });
});

Route::get('/brilliant-cleaning', function () {
    return Cache::remember('brilliant_cleaning_page', now()->addHours(24), function () {
        return Inertia::render('Brilliant');
    });
});

Route::get('/trust-our-resource', function () {
    return Cache::remember('trust_our_resource_page', now()->addHours(24), function () {
        return Inertia::render('Trust');
    });
});

Route::get('/e-learning', function () {
    return Cache::remember('elearning_page', now()->addHours(24), function () {
        return Inertia::render('Elearning');
    });
});

Route::get('/recruitment', [RecruitmentController::class, 'index'])->name('recruitment');

//api data
Route::get('/clients', [ClientController::class, 'index']);

Route::get('/admincu/clients', [ClientController::class, 'show'])->name('admin.client');
Route::post('/admincu/clients/create', [ClientController::class, 'store'])->name('admin.client.create');

Route::get('/cooperations', [CooperationController::class, 'index']);

Route::get('/admincu', [DashboardController::class, 'index'])->name('dashboard');

Route::get('/admincu/cooperations', [CooperationController::class, 'show'])->name('admin.cooperation');

// Route::get('/admincu/client', [ClientController::class, 'index'])->name('client.index');
// Route::get('/admincu/client', [ClientController::class, 'index'])->name('client.index');
// Route::post('/admincu/client', [ClientController::class, 'store'])->name('client.store');
// Route::post('/admincu/client', [ClientController::class, 'index'])->name('client.store');



Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::get('/admincu/contacts', [ContactController::class, 'show'])->name('admin.contact');
Route::post('/contact/store', [ContactController::class, 'store'])->name('contact.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
