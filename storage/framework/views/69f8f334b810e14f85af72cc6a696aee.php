<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

        <!-- Primary Meta Tags -->
        <title inertia><?php echo e(config('app.name', 'PT Cahaya Utama - Perusahaan Outsourcing Terpercaya di Indonesia')); ?></title>
        <meta name="title" content="PT Cahaya Utama - Perusahaan Outsourcing Terpercaya di Indonesia">
        <meta name="description" content="PT Cahaya Utama menyediakan layanan outsourcing berkualitas termasuk tenaga kerja profesional, cleaning service, dan security. Berpengalaman melayani perusahaan di seluruh Indonesia.">
        <meta name="keywords" content="PT Cahaya Utama, outsourcing Indonesia, jasa outsourcing, cleaning service, security service, tenaga kerja profesional, jasa cleaning service, jasa security">
        <meta name="author" content="PT Cahaya Utama">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="<?php echo e(url()->current()); ?>">
        <meta property="og:title" content="PT Cahaya Utama - Solusi Outsourcing Terpercaya">
        <meta property="og:description" content="Penyedia layanan outsourcing profesional untuk tenaga kerja, cleaning service, dan security di Indonesia. Terpercaya dan berpengalaman.">
        <meta property="og:image" content="<?php echo e(asset('img/logo/og-image.png')); ?>">
        <meta property="og:locale" content="id_ID">
        <meta property="og:site_name" content="PT Cahaya Utama">

        <!-- Twitter -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:url" content="<?php echo e(url()->current()); ?>">
        <meta name="twitter:title" content="PT Cahaya Utama - Solusi Outsourcing Terpercaya">
        <meta name="twitter:description" content="Penyedia layanan outsourcing profesional untuk tenaga kerja, cleaning service, dan security di Indonesia. Terpercaya dan berpengalaman.">
        <meta name="twitter:image" content="<?php echo e(asset('img/logo/twitter-card.png')); ?>">

       <!-- Favicon untuk browser lama -->
        <link rel="shortcut icon" href="/img/favicon/favicon.ico" />

        <!-- Favicon PNG untuk berbagai ukuran -->
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/img/favicon/favicon-192x192.png" />

        <!-- Favicon SVG untuk browser modern -->
        <link rel="icon" type="image/svg+xml" href="/img/favicon/favicon.svg" />

        <!-- Apple Touch Icon untuk iOS -->
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="PT Cahaya Utama" />

        <!-- Web Manifest (PWA support) -->
        <link rel="manifest" href="/img/favicon/site.webmanifest" />

        <!-- Theme color (untuk address bar Android, PWA) -->
        <meta name="theme-color" content="#ffffff" />


        <!-- Canonical URL -->
        <link rel="canonical" href="<?php echo e(url()->current()); ?>" />

        <!-- Fonts with preload -->
        <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

        <!-- Structured Data -->
        <script type="application/ld+json">
            <?php echo json_encode([
                '<?php $__contextArgs = [];
if (context()->has($__contextArgs[0])) :
if (isset($value)) { $__contextPrevious[] = $value; }
$value = context()->get($__contextArgs[0]); ?>' => 'https://schema.org',
                '@type' => 'Organization',
                'name' => 'PT Cahaya Utama',
                'alternateName' => 'Cahaya Utama',
                'url' => config('app.url'),
                'logo' => asset('img/logo/fav-icon-150x150.png'),
                'sameAs' => [
                    'https://www.facebook.com/people/PT-Cahaya-Utama/100054382816258/',
                    'https://www.instagram.com/cahayautama.pt/',
                    'https://www.linkedin.com/company/cahaya-utama/',
                ],
                'description' => 'PT Cahaya Utama adalah perusahaan outsourcing terpercaya yang menyediakan layanan tenaga kerja profesional, cleaning service, dan security di Indonesia',
                'address' => [
                    '@type' => 'PostalAddress',
                    'addressCountry' => 'ID',
                    'addressRegion' => 'Jakarta',
                ],
                'contactPoint' => [
                    '@type' => 'ContactPoint',
                    'contactType' => 'customer service',
                    'availableLanguage' => ['id', 'en'],
                ],
            ]); ?>

         </script>


        <!-- Performance Optimization -->
        <link rel="dns-prefetch" href="//fonts.googleapis.com">
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        
        <!-- Scripts -->
        <?php echo app('Tighten\Ziggy\BladeRouteGenerator')->generate(); ?>
        <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
        <?php echo app('Illuminate\Foundation\Vite')(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"]); ?>
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->head; } ?>
    </head>
    <body class="font-sans antialiased">
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->body; } else { ?><div id="app" data-page="<?php echo e(json_encode($page)); ?>"></div><?php } ?>

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
</html><?php /**PATH E:\backup data c\Punya Isnan\Project Isnan\PT. Cahaya Utama\redesain\resources\views/app.blade.php ENDPATH**/ ?>