<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use App\Http\Controllers\{
    AuthController,
    ClientController,
    ContactController,
    CooperationController,
    OfficeController,
    PositionController,
    ProfileController,
    RecruitmentController,
    RegionController
};

// Public routes
Route::get('/', fn () => Cache::remember('company_page', now()->addDay(), fn () => Inertia::render('Company')));
Route::get('/about', fn () => Cache::remember('about_page', now()->addDay(), fn () => Inertia::render('About')));
Route::get('/son-security', fn () => Cache::remember('sonsecurity_page', now()->addDay(), fn () => Inertia::render('SonSecurity')));
Route::get('/brilliant-cleaning', fn () => Cache::remember('brilliant_cleaning_page', now()->addDay(), fn () => Inertia::render('Brilliant')));
Route::get('/trust-our-resource', fn () => Cache::remember('trust_our_resource_page', now()->addDay(), fn () => Inertia::render('Tor')));
Route::get('/e-learning', fn () => Cache::remember('elearning_page', now()->addDay(), fn () => Inertia::render('Elearning')));
Route::get('/recruitment', [RecruitmentController::class, 'index'])->name('recruitment');

// Contact
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact/store', [ContactController::class, 'store'])->name('contact.store');

// API (public)
Route::get('/positions', [PositionController::class, 'index']);
Route::get('/clients', [ClientController::class, 'index']);
Route::get('/offices', [OfficeController::class, 'index'])->name('office.api');
Route::get('/cooperations', [CooperationController::class, 'index']);

// Protected routes (admin area)
Route::middleware('auth')->prefix('admincu')->group(function () {
    
    // Dashboard routes (future)
    // Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    // Contact
    Route::get('/contacts', [ContactController::class, 'show'])->name('admin.contact');

    // Cooperation
    Route::get('/cooperations', [CooperationController::class, 'show'])->name('admin.cooperation');
    Route::post('/cooperation', [CooperationController::class, 'store'])->name('cooperation.store');
    Route::put('/cooperation/update/{id}', [CooperationController::class, 'update'])->name('cooperation.update');
    Route::delete('/cooperation/destroy/{id}', [CooperationController::class, 'destroy'])->name('cooperation.destroy');

    // Client
    Route::get('/clients', [ClientController::class, 'show'])->name('admin.client');
    Route::post('/client/store', [ClientController::class, 'store'])->name('client.store');
    Route::put('/client/update/{id}', [ClientController::class, 'update'])->name('client.update');
    Route::delete('/client/destroy/{id}', [ClientController::class, 'destroy'])->name('client.destroy');

    // Position
    Route::get('/positions', [PositionController::class, 'show'])->name('admin.position');
    Route::post('/positions', [PositionController::class, 'store'])->name('admin.position.store');
    Route::put('/positions/{position}', [PositionController::class, 'update'])->name('admin.position.update');
    Route::delete('/positions/{id}', [PositionController::class, 'destroy'])->name('admin.position.destroy');

    // Profile & Office
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/office', [OfficeController::class, 'edit'])->name('office.edit');
    
    Route::get('/office/data', [OfficeController::class, 'getOffices'])->name('office.data');
    Route::get('/office/regions', [OfficeController::class, 'getRegions'])->name('office.regions');
    Route::post('/office', [OfficeController::class, 'store'])->name('office.store');
    Route::get('/office/{id}', [OfficeController::class, 'show'])->name('office.show');
    Route::put('/office/{id}', [OfficeController::class, 'update'])->name('office.update');
    Route::delete('/office/{id}', [OfficeController::class, 'destroy'])->name('office.destroy');

    // Region
    Route::post('/region', [RegionController::class, 'store'])->name('region.store');
    Route::get('/region/{id}', [RegionController::class, 'show'])->name('region.show');
    Route::put('/region/{id}', [RegionController::class, 'update'])->name('region.update');
    Route::delete('/region/{id}', [RegionController::class, 'destroy'])->name('region.destroy');
});

// Authentication routes
require __DIR__.'/auth.php';
