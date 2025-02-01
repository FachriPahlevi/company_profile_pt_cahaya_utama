import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { Helmet } from 'react-helmet';

const appName = import.meta.env.VITE_APP_NAME || 'PT.Cahaya Utama';

// SEO metadata configuration
const defaultMeta = {
    title: `${appName} | Perusahaan Outsourcing Terpercaya`,
    description: 'PT Cahaya Utama adalah perusahaan outsourcing terpercaya yang menyediakan layanan tenaga kerja profesional, cleaning service, dan security di Indonesia',
    keywords: 'outsourcing indonesia, jasa outsourcing, cleaning service, security, tenaga kerja profesional, PT Cahaya Utama',
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1.0',
    'og:title': appName,
    'og:description': 'Perusahaan Outsourcing Terpercaya di Indonesia',
    'og:type': 'website',
    'og:site_name': appName,
    'og:locale': 'id_ID',
    'og:url': 'https://cahayautamapt.com'
};

const MetaWrapper = ({ children, title }) => {
    const pageTitle = title ? `${title} ${appName}` : defaultMeta.title;
    
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                {Object.entries(defaultMeta).map(([name, content]) => (
                    name !== 'title' && <meta key={name} name={name} content={content} />
                ))}
                <link rel="canonical" href="https://cahayautamapt.com" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": appName,
                        "url": "https://cahayautamapt.com",
                        "logo": "https://cahayautamapt.com/logo.png",
                        "description": defaultMeta.description,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Indonesia"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "[Nomor Telepon PT]",
                            "contactType": "customer service"
                        }
                    })}
                </script>
            </Helmet>
            {children}
        </>
    );
};

createInertiaApp({
    title: (title) => `${title} ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <MetaWrapper title={props.initialPage.props.title}>
                <App {...props} />
            </MetaWrapper>
        );
    },
    progress: {
        color: '#4B5563',
        showSpinner: true,
    },
});