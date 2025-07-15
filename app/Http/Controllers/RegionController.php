<?php

namespace App\Http\Controllers;

use App\Models\Region;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class RegionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        Log::info($request->all());
        try {
            // Define your validation rules
            $rules = [
                'name' => 'required|string|max:255',
            ];
    
            // Create a validator instance with the request data and rules
            $validator = Validator::make($request->all(), $rules);
    
            // Check if validation fails
            if ($validator->fails()) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Validasi gagal',
                    'errors' => $validator->errors()
                ], 422);
            }
    
            DB::beginTransaction();
            
            // Create the region
            $regions = Region::create([
                'name' => $request->name,
            ]);
    
            DB::commit();
    
            return response()->json([
                'status' => 'success',
                'message' => 'Kantor berhasil ditambahkan',
                'data' => $regions
            ]);
    
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal menambahkan region',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Region $region)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Region $region)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        Log::info("Updating region with ID: {$id}");
    
        // Define validation rules
        $rules = [
            'name' => 'required|string|max:255',
        ];
    
        // Validate the request data
        $validator = Validator::make($request->all(), $rules);
    
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validasi gagal',
                'errors' => $validator->errors()
            ], 422);
        }
    
        try {
            DB::beginTransaction();
    
            // Find the region or fail
            $region = Region::findOrFail($id);
    
            // Update the region
            $region->update($request->only('name'));
    
            DB::commit();
    
            return response()->json([
                'status' => 'success',
                'message' => 'Kantor berhasil diperbarui',
                'data' => $region
            ]);
    
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error("Error updating region: {$e->getMessage()}");
    
            return response()->json([
                'status' => 'error',
                'message' => 'Gagal memperbarui region',
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

            $region = Region::findOrFail($id);
            $region->delete();

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
}
