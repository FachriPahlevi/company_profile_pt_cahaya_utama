import React from "react";
import Navbar from "@/Components/Navbar";
import FixedContactButton from "@/Components/FixedContactButton";

/**
 * MainLayout component — acts as base layout with semantic structure.
 */
export default function MainLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen relative w-full overflow-x-hidden bg-white text-gray-900">
            {/* Header/Navbar */}
            <header role="banner" className="w-full z-30">
                <Navbar />
            </header>

            {/* Main Content */}
            <main
                role="main"
                id="main-content"
                className="flex-grow w-full"
                tabIndex={-1}
            >
                {children}
            </main>

            {/* Floating Contact Button */}
            <FixedContactButton />

            {/* Footer could be included here in layout if it's global */}
        </div>
    );
}
