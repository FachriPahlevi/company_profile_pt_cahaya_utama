<?php

namespace App\Http\Controllers;

use App\Models\Office;
use Illuminate\Http\Request;
use App\Models\Region;
use Illuminate\Http\JsonResponse;
use Inertia\Inertia;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class OfficeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   
    public function index(Request $request): JsonResponse
    {
        $offices = Region::with(['office' => fn($query) => $query->select('id', 'name', 'region_id', 'address', 'city', 'phone')->orderBy('name', 'desc')])
            ->select('id', 'name')
            ->orderBy('id', 'asc')
            ->get()
            ->toArray();
    
        return response()->json([
            'success' => true,
            'data' => $offices,
            'meta' => [
                'count' => count($offices),
                'cache' => false
            ]
        ]);
    }
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Log::info($request->all());
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'address' => 'required|string',
                'city' => 'nullable|string|max:255', // Perbaikan: 'nullable' untuk city
                'phone' => 'nullable|string|max:20',
                'region_id' => 'required|exists:regions,id'
            ], [
                'name.required' => 'Nama kantor harus diisi.',
                'name.string' => 'Nama kantor harus berupa string.',
                'name.max' => 'Nama kantor tidak boleh lebih dari 255 karakter.',
                'address.required' => 'Alamat harus diisi.',
                'address.string' => 'Alamat harus berupa string.',
                'city.string' => 'Kota harus berupa string.',
                'city.max' => 'Kota tidak boleh lebih dari 255 karakter.',
                'phone.string' => 'Nomor telepon harus berupa string.',
                'phone.max' => 'Nomor telepon tidak boleh lebih dari 20 karakter.',
                'region_id.required' => 'ID wilayah harus diisi.',
                'region_id.exists' => 'ID wilayah tidak valid.'
            ]);
    
            if ($validator->fails()) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Validasi gagal',
                    'errors' => $validator->errors()
                ], 422);
            }
    
            DB::beginTransaction();
    
            $office = Office::create([
                'name' => $request->name,
                'address' => $request->address,
                'city' => $request->city,
                'phone' => $request->phone,
                'region_id' => $request->region_id
            ]);
    
            DB::commit();
    
            return response()->json([
                'status' => 'success',
                'message' => 'Kantor berhasil ditambahkan',
                'data' => $office
            ]);
    
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal menambahkan kantor',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $office = Office::with('region')->findOrFail($id);
            
            return response()->json([
                'status' => 'success',
                'data' => $office
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Kantor tidak ditemukan',
                'error' => $e->getMessage()
            ], 404);
        }
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
        $regions = Region::with(['office' => fn($query) => $query->select('id', 'name', 'region_id', 'address', 'city', 'phone')->orderBy('name', 'desc')])
        ->select('id', 'name')
        ->orderBy('id', 'asc')
        ->get()
        ->toArray();
        return Inertia::render('Admin/Office',[
            'regions'=>$regions
        ]);   
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'address' => 'required|string',
                'city' => 'nullable|string|max:255',
                'phone' => 'nullable|string|max:20',
                'region_id' => 'required|exists:regions,id'
            ], [
                'name.required' => 'Nama kantor harus diisi.',
                'name.string' => 'Nama kantor harus berupa string.',
                'name.max' => 'Nama kantor tidak boleh lebih dari 255 karakter.',
                'address.required' => 'Alamat harus diisi.',
                'address.string' => 'Alamat harus berupa string.',
                'city.string' => 'Kota harus berupa string.',
                'city.max' => 'Kota tidak boleh lebih dari 255 karakter.',
                'phone.string' => 'Nomor telepon harus berupa string.',
                'phone.max' => 'Nomor telepon tidak boleh lebih dari 20 karakter.',
                'region_id.required' => 'ID wilayah harus diisi.',
                'region_id.exists' => 'ID wilayah tidak valid.'
            ]);
    
            if ($validator->fails()) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Validasi gagal',
                    'errors' => $validator->errors()
                ], 422);
            }
    
            DB::beginTransaction();
    
            $office = Office::findOrFail($id);
            $office->update([
                'name' => $request->name,
                'address' => $request->address,
                'city' => $request->city,
                'phone' => $request->phone,
                'region_id' => $request->region_id
            ]);
    
            DB::commit();
    
            return response()->json([
                'status' => 'success',
                'message' => 'Kantor berhasil diperbarui',
                'data' => $office
            ]);
    
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal memperbarui kantor',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            DB::beginTransaction();

            $office = Office::findOrFail($id);
            $office->delete();

            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => 'Kantor berhasil dihapus'
            ]);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal menghapus kantor',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getRegions()
    {
        try {
            $regions = Region::all();
            
            return response()->json([
                'status' => 'success',
                'data' => $regions
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal mengambil data region',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getOffices()
    {
        try {
            $regions = Region::with('office')->get();
            
            return response()->json([
                'status' => 'success',
                'data' => $regions
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal mengambil data kantor',
                'error' => $e->getMessage()
            ], 500);
        }
    }

}
