import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { href: "/perusahaan", text: "Perusahaan" },
    {
      href: "",
      text: "Jasa",
      dropdownItems: [
        { href: "sonsecurity", text: "Son Security" },
        { href: "brilliant-cleaning", text: "Brilliant Clean" },
        { href: "trust-our-resource", text: "Trust Our Resource" },
      ],
    },
    { href: "contact", text: "Kontak" },
    { href: "#elearning", text: "E-Learning" },
    { href: "#rekrutmen", text: "Rekrutmen" },
  ];

  const handleDropdownClick = (text) => {
    if (activeDropdown === text) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(text);
    }
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.dropdown-container')) {
      setActiveDropdown(null);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleNavigation = (e, href, isDropdownItem = false) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href) {
      window.location.href = href;
    }
    
    if (isDropdownItem) {
      setActiveDropdown(null);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/img/logo-cu-ukas-smk3.png"
              alt="Cahaya Utama"
              className="h-12"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative dropdown-container"
              >
                {link.dropdownItems ? (
                  <button
                    onClick={() => handleDropdownClick(link.text)}
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    {link.text}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                )}
                {link.dropdownItems && activeDropdown === link.text && (
                  <div 
                    className="absolute left-0 mt-2 w-48 text-white rounded-md shadow-lg py-1 bg-black"
                  >
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-white hover:bg-blue-400 hover:rounded-md hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigation(e, item.href, true);
                        }}
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.dropdownItems ? (
                  <button
                    onClick={() => handleDropdownClick(link.text)}
                    className="block text-white hover:text-gray-300 transition-colors duration-200 w-full text-left"
                  >
                    {link.text}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      handleNavigation(e, link.href);
                      setIsOpen(false);
                    }}
                    className="block text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                )}
                {link.dropdownItems && activeDropdown === link.text && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block text-white hover:text-gray-300 transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigation(e, item.href, true);
                        }}
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}