<?php

namespace App\Http\Controllers;

use App\Models\Cooperation;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;

class CooperationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Cek apakah data sudah ada di cache
        $cooperations = Cache::remember('cooperations', now()->addMinutes(10), function () {
            // Ambil data client dari database jika belum ada di cache
            return Cooperation::select('id', 'name', 'logo', 'width', 'height')->get();
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Cooperation $cooperation)
    {
        //
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
    public function update(Request $request, Cooperation $cooperation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cooperation $cooperation)
    {
        //
    }
}
