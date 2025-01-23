import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import Sidebar from '../Components/Sidebar';

const PRIMARY_COLOR = '#4361ee';
const SECONDARY_COLOR = '#ffffff';
const ACCENT_COLOR = '#4895ef';
const TEXT_COLOR = '#2b2d42';

export default function AdminLayout({ children }) {
  const { auth } = usePage().props;
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };


  return (
    <div className="min-h-screen w-full">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Mobile Header - Fixed */}
      <header className="md:hidden bg-white shadow-sm px-4 py-3 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <img 
            src="/img/logo_sig.png" 
            alt="SIG Logo" 
            className="h-8 mr-3" 
          />
        </div>
        <button 
          onClick={toggleMobileSidebar}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          {isMobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Mobile Sidebar - Fixed */}
      <aside 
        className={`
          fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          md:hidden overflow-y-auto
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          pt-16
        `}
      >
        <div className="h-full overflow-y-auto">
          <Sidebar isMobile={true} />
        </div>
      </aside>

      {/* Main Layout Container */}
      <div className="flex md:pt-0"> 
        {/* Desktop Sidebar - Fixed */}
        <aside className="hidden md:block fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-40">
          <div className="h-full overflow-y-auto">
            <Sidebar isDesktop={true} />
          </div>
        </aside>

        {/* Main Content - With Offset */}
        <main className="flex-1 min-h-screen w-full md:ml-64 p-2 md:p-4 lg:p-6 bg-gray-50 mt-16 md:mt-0">
          {children}
        </main>
      </div>
    </div>
  );
}