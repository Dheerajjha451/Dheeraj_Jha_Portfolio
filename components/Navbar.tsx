"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiOutlineMenu, HiOutlineHome, HiOutlineViewGrid, HiOutlineChatAlt } from 'react-icons/hi'; 

const navItems = [
  {
    path: "/",
    name: "Home",
    icon: <HiOutlineHome className="w-6 h-6" />,
  },
  {
    path: "/UI",
    name: "UI",
    icon: <HiOutlineViewGrid className="w-6 h-6" />,
  },
  {
    path: "/Blogs",
    name: "Blogs",
    icon: <HiOutlineChatAlt className="w-6 h-6" />,
  },
];

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 50;
      setScrolling(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 bg-gradient-to-r from-black via-gray-800 to-black shadow-lg transition-all duration-300 ${
        scrolling ? 'py-2' : 'py-4'
      }left-0 right-0`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none md:hidden">
            <HiOutlineMenu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Dheeraj Jha</h1>
        </div>
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 py-2 md:hidden">
            {navItems.map((item, index) => (
              <Link key={index} href={item.path}>
                <div onClick={toggleMobileMenu} className={`text-white px-4 py-2 flex items-center space-x-2 ${currentPath === item.path ? 'font-bold' : ''} hover:text-gray-300`}>
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
        <div className="hidden md:flex items-center space-x-4"> {/* Show only on desktop */}
          {navItems.map((item, index) => (
            <Link key={index} href={item.path}>
              <div className={`text-white px-4 py-2 flex items-center space-x-2 ${currentPath === item.path ? 'font-bold' : ''} hover:text-gray-300`}>
                {item.icon}
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
