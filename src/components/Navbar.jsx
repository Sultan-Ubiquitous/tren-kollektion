'use client';
import React from 'react';
import Link from 'next/link';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import CategoriesSection from './CategoriesBox';

const Header = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  return (
    <nav className="bg-background-nav text-black py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-xl font-bold">
          <Link href="/">
            Sari Bliss
          </Link>
        </div>

        
        <div className="flex space-x-6">
          <Link href="#" onClick={toggleCategories} className="hover:text-gray-600">
            Menu
          </Link>
          <Link href="/cart" className="hover:text-gray-600">
            <FaShoppingCart />
          </Link>
          {isCategoriesOpen && <CategoriesSection/>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
