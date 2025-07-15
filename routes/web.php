<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\RegionController;
use App\Http\Controllers\OfficeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CooperationController;
use App\Http\Controllers\RecruitmentController;
use App\Http\Controllers\PositionController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Cache;

Route::get('/positions', [PositionController::class, 'index']);

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
Route::get('/offices', [OfficeController::class, 'index'])->name('office.api');

Route::get('/cooperations', [CooperationController::class, 'index']);

Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact/store', [ContactController::class, 'store'])->name('contact.store');

Route::middleware('auth')->group(function () {
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/admincu/contacts', [ContactController::class, 'show'])->name('admin.contact');

    // Route::get('/admincu', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/admincu/cooperations', [CooperationController::class, 'show'])->name('admin.cooperation');
    Route::delete('/admincu/cooperation/destroy/{id}', [CooperationController::class, 'destroy'])->name('cooperation.destroy');
    Route::put('/cooperation/update/{id}', [CooperationController::class, 'update'])->name('cooperation.update');
    Route::post('/admincu/cooperation', [CooperationController::class, 'store'])->name('cooperation.store');

    Route::get('/client', [ClientController::class, 'index'])->name('client.index');
    Route::get('/admincu/clients', [ClientController::class, 'show'])->name('admin.client');    
    Route::delete('/admincu/client/destroy/{id}', [ClientController::class, 'destroy'])->name('client.destroy');
    // Route::put('/admincu/client/update', [ClientController::class, 'update'])->name('client.update');
    Route::put('/client/update/{id}', [ClientController::class, 'update'])->name('client.update');
    

    Route::post('/admincu/client/store', [ClientController::class, 'store'])->name('client.store');

    
    Route::get('/admincu/positions', [PositionController::class, 'show'])->name('admin.position');
    Route::put('/admincu/positions/{position}', [PositionController::class, 'update'])->name('admin.position.update');
    Route::post('/admincu/positions', [PositionController::class, 'store'])->name('admin.position.store');
    Route::delete('/admincu/positions/{id}', [PositionController::class, 'destroy'])->name('admin.position.destroy');

    Route::get('/admincu/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/admincu/office', [OfficeController::class, 'edit'])->name('office.edit');


    
    Route::get('/admincu/office/data', [OfficeController::class, 'getOffices'])->name('office.data');
    Route::get('/admincu/office/regions', [OfficeController::class, 'getRegions'])->name('office.regions');
    Route::post('/admincu/office', [OfficeController::class, 'store'])->name('office.store');
    Route::get('/admincu/office/{id}', [OfficeController::class, 'show'])->name('office.show');
    Route::put('/admincu/office/{id}', [OfficeController::class, 'update'])->name('office.update');
    Route::delete('/admincu/office/{id}', [OfficeController::class, 'destroy'])->name('office.destroy');


    Route::post('/admincu/region', [RegionController::class, 'store'])->name('region.store');
    Route::get('/admincu/region/{id}', [RegionController::class, 'show'])->name('region.show');
    Route::put('/admincu/region/{id}', [RegionController::class, 'update'])->name('region.update');
    Route::delete('/admincu/region/{id}', [RegionController::class, 'destroy'])->name('region.destroy');
});

require __DIR__.'/auth.php';
