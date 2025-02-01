<?php

namespace App\Http\Controllers;

use App\Models\Cooperation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

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
    public function update(Request $request, $id)
    {
       Log::info('Parsed Request Data', [
           'request_all' => $request->all(),
       ]);
        // Validasi request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:10240', // 10MB max
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }

        // Ambil data client
        $client = Cooperation::findOrFail($id);
        $client->name = $request->name;

        // Cek apakah ada file logo baru yang diupload
        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('logos', 'public'); // Simpan ke storage
            $client->logo = $logoPath;
        }

        $client->save();

        return response()->json([
            'message' => 'Client updated successfully',
            'client' => $client
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            // Mencari client berdasarkan ID
            $cooperation = Cooperation::findOrFail($id);
            
            // Menghapus client
            $cooperation->delete();
    
            // Mengembalikan respons sukses
            return response()->json([
                'message' => 'Client berhasil dihapus'
            ], 200); // Status 200 OK
        } catch (ModelNotFoundException $e) {
            // Jika client tidak ditemukan
            Log::error("Client not found: ID {$id} - " . $e->getMessage());
            return response()->json([
                'message' => 'Client tidak ditemukan'
            ], 404); // Status 404 Not Found
        } catch (\Exception $e) {
            // Menangani kesalahan lain
            Log::error("Error deleting client: ID {$id} - " . $e->getMessage());
            return response()->json([
                'message' => 'Gagal menghapus client'
            ], 500); // Status 500 Internal Server Error
        }
    }
}
