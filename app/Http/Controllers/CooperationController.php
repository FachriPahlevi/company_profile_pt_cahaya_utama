<?php

namespace App\Http\Controllers;

use App\Models\Cooperation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CooperationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Cek apakah data sudah ada di cache
        $cooperations = Cache::remember('cooperations', now()->addMinutes(10), function () {
            // Ambil data cooperation dari database jika belum ada di cache
            return Cooperation::select('id', 'name', 'logo')->get();
        });

        // Kembalikan data dalam format JSON
        return response()->json($cooperations);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    // Validasi input
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255|unique:cooperations,name',
        'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    // Kembalikan error jika validasi gagal
    if ($validator->fails()) {
        return response()->json([
            'errors' => $validator->errors()
        ], 422);
    }

    // Proses upload logo
    $logoPath = null;
    if ($request->hasFile('logo')) {
        $logo = $request->file('logo');
        $logoName = Str::slug($request->input('name')) . '-logo-' . time() . '.' . $logo->getClientOriginalExtension(); // Perbaikan di sini
        $logoPath = $logo->storeAs('cooperations', $logoName, 'public');
    }

    // Buat cooperation baru
    $cooperation = Cooperation::create([
        'name' => $request->input('name'),
        'logo' => $logoPath ? '/storage/' . $logoPath : null,
    ]);

    return response()->json($cooperation, 201);
}

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $cooperations = Cooperation::all();

        
        return Inertia::render('Admin/Cooperation/Index', [
            'cooperations' => $cooperations,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cooperation $cooperation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        // Validasi bahwa `id` disediakan
        if (!$request->has('id')) {
            return response()->json([
                'error' => 'ID cooperation tidak ditemukan dalam permintaan.',
            ], 400);
        }
    
        // Cari cooperation berdasarkan ID
        $cooperation = Cooperation::findOrFail($request->id);
    
        // Validasi input
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255|unique:cooperations,name,' . $cooperation->id,
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        // Kembalikan error jika validasi gagal
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }
    
        // Siapkan data untuk diupdate
        $updateData = $request->only(['name']);
    
        // Proses upload logo baru jika ada
        if ($request->hasFile('logo')) {
            // Hapus logo lama jika ada
            if ($cooperation->logo) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $cooperation->logo));
            }
    
            // Upload logo baru
            $logo = $request->file('logo');
            $logoName = Str::slug($request->input('name') ?? $cooperation->name) . '-logo-' . time() . '.' . $logo->getClientOriginalExtension();
            $logoPath = $logo->storeAs('cooperations', $logoName, 'public');
            $updateData['logo'] = '/storage/' . $logoPath;
        }
    
        // Update data cooperation
        $cooperation->update($updateData);
    
        return response()->json([
            'message' => 'cooperation berhasil diperbarui.',
            'data' => $cooperation,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cooperation $cooperation)
    {
        //
    }
}
