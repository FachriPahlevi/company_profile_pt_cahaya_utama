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

Route::get('/cooperations', [CooperationController::class, 'index']);

Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact/store', [ContactController::class, 'store'])->name('contact.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/admincu/contacts', [ContactController::class, 'show'])->name('admin.contact');

    // Route::get('/admincu', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/admincu/cooperations', [CooperationController::class, 'show'])->name('admin.cooperation');
    Route::delete('/admincu/cooperation/destroy', [CooperationController::class, 'destroy'])->name('cooperation.destroy');
    Route::put('/admincu/cooperation/update', [CooperationController::class, 'update'])->name('cooperation.update');
    Route::post('/admincu/cooperation', [CooperationController::class, 'store'])->name('cooperation.store');

    Route::get('/client', [ClientController::class, 'index'])->name('client.index');
    Route::get('/admincu/clients', [ClientController::class, 'show'])->name('admin.client');    
    Route::delete('/admincu/client/destroy', [ClientController::class, 'destroy'])->name('client.destroy');
    // Route::put('/admincu/client/update', [ClientController::class, 'update'])->name('client.update');
    Route::put('/client/update/{id}', [ClientController::class, 'update'])->name('client.update');
    

    Route::post('/admincu/client/store', [ClientController::class, 'store'])->name('client.store');


});

require __DIR__.'/auth.php';
