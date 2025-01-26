<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Cek apakah data sudah ada di cache
        $clients = Cache::remember('clients', now()->addMinutes(10), function () {
            // Ambil data client dari database jika belum ada di cache
            return Client::select('id', 'name', 'logo')->get();
        });

        // Kembalikan data dalam format JSON
        return response()->json($clients);
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
            'name' => 'required|string|max:255|unique:clients,name',
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
            $logoName = Str::slug($request->input('name')) . '-logo-' . time() . '.' . $logo->getClientOriginalExtension();
            $logoPath = $logo->storeAs('clients', $logoName, 'public');
        }

        // Buat client baru
        $client = Client::create([
            'name' => $request->input('name'),
            'logo' => $logoPath ? '/storage/' . $logoPath : null,
        ]);

        return response()->json($client, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $clients = Client::all();
        
        return Inertia::render('Admin/Client/Index', [
            'clients' => $clients,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
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
         $client = Client::findOrFail($id);
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
        $client = Client::findOrFail($id);

        // Hapus file logo jika ada
        if ($client->logo) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $client->logo));
        }

        // Hapus client
        $client->delete();

        return response()->json(null, 204);
    }
}
