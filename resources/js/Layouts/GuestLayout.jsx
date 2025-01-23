// GuestLayout.jsx
export default function Guest({ children }) {
    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row">
            {/* Banner Section - Hidden on mobile */}
            <div
                className="hidden lg:block lg:w-2/3 relative overflow-hidden"
                style={{
                    backgroundImage: "url('/img/company/meeting01gg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/3 flex items-center justify-center p-6">
                {children}
            </div>
        </div>
    );
}
