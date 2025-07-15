import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const { url } = usePage();

    const navLinks = [
        { href: "/", text: "Beranda" },
        { href: "/perusahaan", text: "Tentang Kami" },
        {
            text: "Jasa",
            dropdownItems: [
                { href: "/sonsecurity", text: "Son Security" },
                { href: "/brilliant-cleaning", text: "Brilliant Clean" },
                { href: "/trust-our-resource", text: "Trust Our Resource" },
            ],
        },
        { href: "/e-learning", text: "E-Learning" },
        { href: "/recruitment", text: "Rekrutmen" },
    ];

    const handleDropdownClick = (text) => {
        setActiveDropdown(activeDropdown === text ? null : text);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-x-4">
                    <img
                        src="/img/cahaya_utama_logo.png"
                        alt="Logo"
                        className="h-10"
                    />
                </Link>

                {/* Nav Links (Center) */}
                <div className="hidden md:flex flex-1 justify-center space-x-8 items-center">
                    {navLinks.map((link) => (
                        <div
                            key={link.text}
                            className="relative dropdown-container"
                        >
                            {link.dropdownItems ? (
                                <>
                                    <button
                                        onClick={() =>
                                            handleDropdownClick(link.text)
                                        }
                                        className="text-gray-700 text-sm lg:text-base font-medium hover:text-primary-600"
                                    >
                                        {link.text}
                                    </button>
                                    {activeDropdown === link.text && (
                                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-1 z-50">
                                            {link.dropdownItems.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                                                    onClick={() =>
                                                        setActiveDropdown(null)
                                                    }
                                                >
                                                    {item.text}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`text-sm lg:text-base font-medium hover:text-primary-600 ${
                                        url === link.href
                                            ? "text-primary-600"
                                            : "text-gray-700"
                                    }`}
                                >
                                    {link.text}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA button */}
                <Link
                    href="/contact"
                    className="hidden md:inline-block px-5 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm"
                >
                    Hubungi Kami
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-3 shadow">
                    {navLinks.map((link) => (
                        <div key={link.text}>
                            {link.dropdownItems ? (
                                <>
                                    <button
                                        onClick={() =>
                                            handleDropdownClick(link.text)
                                        }
                                        className="w-full text-left text-gray-700 font-medium hover:text-primary-600"
                                    >
                                        {link.text}
                                    </button>
                                    {activeDropdown === link.text && (
                                        <div className="ml-4 mt-2 space-y-2">
                                            {link.dropdownItems.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block text-gray-700 text-sm hover:text-primary-600"
                                                    onClick={() =>
                                                        setIsOpen(false)
                                                    }
                                                >
                                                    {item.text}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`block text-sm font-medium hover:text-primary-600 ${
                                        url === link.href
                                            ? "text-primary-600"
                                            : "text-gray-700"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.text}
                                </Link>
                            )}
                        </div>
                    ))}

                    <Link
                        href="/contact"
                        className="block w-full text-center mt-4 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium"
                        onClick={() => setIsOpen(false)}
                    >
                        Hubungi Kami
                    </Link>
                </div>
            )}
        </nav>
    );
}
