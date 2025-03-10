import React, { useState, useEffect } from 'react';
import {
  MdOutlineDashboard,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import {
  RiBuildingLine,
  RiTeamLine,
  RiMoneyDollarCircleLine,
  RiCheckDoubleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { Link, router } from '@inertiajs/react';
import axios from 'axios';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Building, PhoneCall } from 'lucide-react';

export default function Sidebar({ auth, isMobile = false, isDesktop = false }) {
  const [selectedKey, setSelectedKey] = useState(window.location.pathname);

  const handleLogout = (e) => {
    e.preventDefault();
    router.post('/logout', null, {
      onSuccess: () => {
        window.location.href = '/login';
      },
    });
  };

  useEffect(() => {
    const handleLocationChange = () => {
      setSelectedKey(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const menuItems = [
    {
      icon: <MdOutlineDashboard className="w-5 h-5" />,
      label: "Dashboard",
      path: "/",
    },
    {
      icon: <RiTeamLine className="w-5 h-5" />,
      label: "Clients",
      path: "/admincu/clients",
    },
    {
      icon: <MdOutlinePeopleAlt className="w-5 h-5" />,
      label: "Cooperations",
      path: "/admincu/cooperations",
    },
    // {
    //   icon: <HiOutlineOfficeBuilding className="w-5 h-5" />,
    //   label: "Offices",
    //   path: "/admincu/offices",
    // },
    {
      icon: <PhoneCall className="w-5 h-5" />,
      label: "Contacts",
      path: "/admincu/contacts",
    },
    {
      icon: <RiCheckboxCircleLine className="w-5 h-5" />,
      label: "Positions",
      path: "/admincu/positions",
    },
    {
      icon: <Building className="w-5 h-5" />,
      label: "Offices",
      path: "/admincu/offices",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Logo Section */}
      <div className="flex items-center p-6 border-b bg-white">
  <img
    src="/img/logo/fav-icon-150x150.png"
    alt="Cahaya Utama Logo"
    className="h-12 w-auto mr-4"
  />
  <h1 className="text-lg font-semibold text-gray-700">Cahaya Utama</h1>
      </div>

      {/* Navigation Menu - Scrollable */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                href={item.path} 
                className={`
                  flex items-center px-4 py-3 rounded-lg
                  transition-all duration-200
                  ${selectedKey === item.path 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'hover:bg-gray-100 text-gray-700'}
                `}
              >
                <span className={`
                  flex items-center justify-center
                  ${selectedKey === item.path ? 'text-white' : 'text-blue-600'}
                  mr-3
                `}>
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
          {/* Logout Button */}
          <li className=''>
            <button
              onClick={handleLogout}
              className="w-full flex items-center mt-4 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-100 text-gray-700"
            >
              <span className="flex items-center justify-center text-blue-600 mr-3">
                <FaSignOutAlt className="w-5 h-5" />
              </span>
              <span className="text-sm font-medium">Logout</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* User Profile Section - Fixed at Bottom */}
      <div className="p-4 border-t bg-white">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 flex items-center space-x-4">
          <div className="bg-white rounded-full p-3 shadow-md">
            <FaUser className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">
              {auth?.user?.name || 'Fachri P'}
            </h4>
            <p className="text-sm text-gray-600">
              Admin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}