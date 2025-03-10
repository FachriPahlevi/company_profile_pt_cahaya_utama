<?php

namespace App\Http\Controllers;

use App\Models\Position;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;
class PositionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'positions' => Position::select('name')->get()
        ]);
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
    try {
        // Validasi input
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:positions,name',
        ]);

        // Simpan data ke database
        $position = Position::create($validatedData);

        return response()->json([
            'success' => true,
            'message' => 'Position created successfully',
            'data' => $position
        ], 201);

    } catch (\Exception $e) {
        \Log::error('Position store error: ' . $e->getMessage());
        return response()->json([
            'success' => false,
            'message' => 'Failed to create position',
            'error' => $e->getMessage()
        ], 500);
    }
}

    /**
     * Display the specified resource.
     */
    public function show()
    {
        return Inertia::render('Admin/Position', [
            'positions'=>Position::all()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Position $position)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Position $position)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);
    
        try {
            // Update posisi langsung
            $position->update([
                'name' => $request->name,
            ]);
    
            return response()->json([
                'success' => true,
                'message' => 'Position updated successfully',
                'data' => $position
            ]);
        } catch (\Exception $e) {
            \Log::error('Error updating position: ' . $e->getMessage());
    
            return response()->json([
                'success' => false,
                'message' => 'Failed to update position'
            ], 500);
        }
    }
    
    public function destroy($id)
    {
        $position = Position::findOrFail($id);
        if (!$position) {
            return response()->json([
                'success' => false,
                'message' => 'Position not found'
            ], 404);
        }
    
        try {
            \DB::transaction(function () use ($position) {
                $position->delete();
            });
    
            return response()->json([
                'success' => true,
                'message' => 'Position deleted successfully'
            ]);
    
        } catch (\Exception $e) {
            \Log::error('Position delete error: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete position'
            ], 500);
        }
    }
    
}
