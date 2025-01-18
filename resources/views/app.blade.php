<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('Cahaya Utama', '') }}</title>

        <link rel="icon" href="{{ asset('img/logo/fav-icon-150x150.png') }}" sizes="96x192" type="image/png">

       <!-- Untuk Apple Devices -->
       <link rel="apple-touch-icon" href="{{ asset('img/logo/fav-icon-150x150.png') }}" sizes="180x180">


          <!-- Fonts -->
          <link rel="preconnect" href="https://fonts.bunny.net">
          {{-- <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" /> --}}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">


        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
