<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Primary Meta Tags -->
        <title inertia>{{ config('app.name', 'PT Cahaya Utama - Perusahaan Outsourcing Terpercaya di Indonesia') }}</title>
        <meta name="title" content="PT Cahaya Utama - Perusahaan Outsourcing Terpercaya di Indonesia">
        <meta name="description" content="PT Cahaya Utama menyediakan layanan outsourcing berkualitas termasuk tenaga kerja profesional, cleaning service, dan security. Berpengalaman melayani perusahaan di seluruh Indonesia.">
        <meta name="keywords" content="PT Cahaya Utama, outsourcing Indonesia, jasa outsourcing, cleaning service, security service, tenaga kerja profesional, jasa cleaning service, jasa security">
        <meta name="author" content="PT Cahaya Utama">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:title" content="PT Cahaya Utama - Solusi Outsourcing Terpercaya">
        <meta property="og:description" content="Penyedia layanan outsourcing profesional untuk tenaga kerja, cleaning service, dan security di Indonesia. Terpercaya dan berpengalaman.">
        <meta property="og:image" content="{{ asset('img/logo/og-image.png') }}">
        <meta property="og:locale" content="id_ID">
        <meta property="og:site_name" content="PT Cahaya Utama">

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:url" content="{{ url()->current() }}">
        <meta name="twitter:title" content="PT Cahaya Utama - Solusi Outsourcing Terpercaya">
        <meta name="twitter:description" content="Penyedia layanan outsourcing profesional untuk tenaga kerja, cleaning service, dan security di Indonesia. Terpercaya dan berpengalaman.">
        <meta name="twitter:image" content="{{ asset('img/logo/twitter-card.png') }}">

        <!-- Favicon -->
        <link rel="icon" href="{{ asset('img/logo/fav-icon-150x150.png') }}" sizes="96x192" type="image/png">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('img/logo/favicon-32x32.png') }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/logo/favicon-16x16.png') }}">
        <link rel="apple-touch-icon" href="{{ asset('img/logo/fav-icon-150x150.png') }}" sizes="180x180">
        {{-- <link rel="manifest" href="{{ asset('site.webmanifest') }}"> --}}
        <meta name="theme-color" content="#ffffff">

        <!-- Canonical URL -->
        <link rel="canonical" href="{{ url()->current() }}" />

        <!-- Fonts with preload -->
        <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

        <!-- Structured Data -->
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PT Cahaya Utama",
            "alternateName": "Cahaya Utama",
            "url": "{{ config('app.url') }}",
            "logo": "{{ asset('img/logo/fav-icon-150x150.png') }}",
            "sameAs": [
                "https://www.facebook.com/people/PT-Cahaya-Utama/100054382816258/",
                "https://www.instagram.com/cahayautama.pt/",
                "https://www.linkedin.com/company/cahaya-utama/"
            ],
            "description": "PT Cahaya Utama adalah perusahaan outsourcing terpercaya yang menyediakan layanan tenaga kerja profesional, cleaning service, dan security di Indonesia",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID",
                "addressRegion": "Jakarta"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["id", "en"]
            }
        }
        </script>

        <!-- Performance Optimization -->
        <link rel="dns-prefetch" href="//fonts.googleapis.com">
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        <!-- Preload Script -->
        <script>
            // Lazy load images
            document.addEventListener('DOMContentLoaded', function() {
                const images = document.querySelectorAll('img[data-src]');
                if ('IntersectionObserver' in window) {
                    const imageObserver = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                const img = entry.target;
                                img.src = img.dataset.src;
                                img.removeAttribute('data-src');
                                imageObserver.unobserve(img);
                            }
                        });
                    });
                    images.forEach(img => imageObserver.observe(img));
                }
            });
        </script>
    </body>
</html>