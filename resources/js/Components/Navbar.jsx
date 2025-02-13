import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

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
    { href: "e-learning", text: "E-Learning" },
    { href: "recruitment", text: "Rekrutmen" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (text) => {
    setActiveDropdown(activeDropdown === text ? null : text);
  };

  const handleNavigation = (e, href, isDropdownItem = false) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else if (href) {
      window.location.href = href;
    }
    
    if (isDropdownItem) {
      setActiveDropdown(null);
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
          <a href="/" className="flex gap-x-2 lg:gap-x-6">
              <img
                src="/img/cahaya_utama_logo.png"
                alt="Cahaya Utama"
                className="h-8 md:h-10 lg:h-12"
              />
               <img
                src="/img/iso_logo.jpg"
                alt="Cahaya Utama"
                className="h-8 md:h-10 lg:h-12"
              />
               <img
                src="/img/k3_logo.png"
                alt="Cahaya Utama"
                className="h-8 md:h-10 lg:h-12"
              />
            </a>
          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-60"
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
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative dropdown-container"
              >
                {link.dropdownItems ? (
                  <button
                    onClick={() => handleDropdownClick(link.text)}
                    className="text-white text-sm lg:text-base hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.text}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className="text-white text-sm lg:text-base hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                )}
                {link.dropdownItems && activeDropdown === link.text && (
                  <div 
                    className="absolute left-0 mt-2 w-48 text-white rounded-md shadow-lg py-1 bg-black/90"
                  >
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-white hover:bg-blue-400 hover:rounded-md"
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
          <div 
            className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm py-4 px-4 space-y-4"
            onClick={() => setIsOpen(false)}
          >
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.dropdownItems ? (
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDropdownClick(link.text);
                      }}
                      className="block text-white w-full text-left hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.text}
                    </button>
                    {activeDropdown === link.text && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.dropdownItems.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block text-white hover:text-blue-400 transition-colors duration-200"
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
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigation(e, link.href);
                      setIsOpen(false);
                    }}
                    className="block text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}