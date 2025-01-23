<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;

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
            return Client::select('id', 'name', 'logo', 'width', 'height')->get();
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
            'width' => 'nullable|numeric',
            'height' => 'nullable|numeric',
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
            'width' => $request->input('width'),
            'height' => $request->input('height'),
        ]);

        return response()->json($client, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $clients = Client::all();
        
        return Inertia::render('Admin/Client', [
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
        // Cari client yang akan diupdate
        $client = Client::findOrFail($id);

        // Validasi input
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|required|string|max:255|unique:clients,name,' . $id,
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'width' => 'nullable|numeric',
            'height' => 'nullable|numeric',
        ]);

        // Kembalikan error jika validasi gagal
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

        // Proses update data
        $updateData = [];

        // Update nama jika ada
        if ($request->has('name')) {
            $updateData['name'] = $request->input('name');
        }

        // Update width dan height
        if ($request->has('width')) {
            $updateData['width'] = $request->input('width');
        }
        if ($request->has('height')) {
            $updateData['height'] = $request->input('height');
        }

        // Proses upload logo baru
        if ($request->hasFile('logo')) {
            // Hapus logo lama jika ada
            if ($client->logo) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $client->logo));
            }

            // Upload logo baru
            $logo = $request->file('logo');
            $logoName = Str::slug($request->input('name') ?? $client->name) . '-logo-' . time() . '.' . $logo->getClientOriginalExtension();
            $logoPath = $logo->storeAs('clients', $logoName, 'public');
            $updateData['logo'] = '/storage/' . $logoPath;
        }

        // Update client
        $client->update($updateData);

        return response()->json($client);
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
