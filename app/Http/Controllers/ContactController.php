<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Form');
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
            'fullName' => 'required|string|max:255',
            'companyName' => 'required|string|max:255',
            'phoneNumber' => 'required|string|regex:/^([0-9\s\-\+\(\)]*)$/|min:10|max:15',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // Jika validasi gagal, kembalikan respons dengan kesalahan
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors(),
            ], 400);
        }

        // Ambil data yang telah divalidasi
        $data = $validator->validated();

        try {
            // Simpan data ke database
            $submission = Contact::create([
                'full_name' => $data['fullName'],
                'company_name' => $data['companyName'],
                'phone_number' => $data['phoneNumber'],
                'subject' => $data['subject'],
                'message' => $data['message'],
            ]);

            // Mengembalikan respons sukses
            return response()->json([
                'status' => 'success',
                'message' => 'Form berhasil dikirim!',
                'data' => $submission,
            ], 201);
        } catch (\Exception $e) {
            // Log kesalahan untuk analisis lebih lanjut
            Log::error('Error saving form submission: ' . $e->getMessage());

            // Mengembalikan respons kesalahan
            return response()->json([
                'status' => 'error',
                'message' => 'Terjadi kesalahan saat mengirim form. Silakan coba lagi.',
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    

public function show(Request $request)
{
    $query = Contact::query();
    $search = $request->input('s');

    // Log the search input
    Log::info('Searching contacts', ['search' => $search]);

    // Check if search is empty or not provided
    if ($search) {
        $query->where(function($q) use ($search) {
            $q->where('full_name', 'like', "%{$search}%")
              ->orWhere('company_name', 'like', "%{$search}%")
              ->orWhere('phone_number', 'like', "%{$search}%");
        });
    }

    try {
        // Paginate 10 results (default or filtered)
        $contacts = $query->latest()->paginate(10);
        
        // Log the results
        Log::info('Contacts retrieved', ['contacts_count' => $contacts->count(), 'contacts' => $contacts->toArray()]);
    } catch (\Exception $e) {
        // Log the error
        Log::error('Error retrieving contacts', ['error' => $e->getMessage()]);
        
        // Optionally, you can return an error response or handle it as needed
        return response()->json(['error' => 'Unable to retrieve contacts'], 500);
    }

    return Inertia::render('Admin/Contact', [
        'initialContacts' => $contacts,
        'filters' => [
            'search' => $search,
        ],
    ]);
}
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
