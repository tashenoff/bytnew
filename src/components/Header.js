"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-900">РемБытовой</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Главная</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Услуги</Link>
            <Link href="/reviews" className="text-gray-700 hover:text-blue-600 font-medium">Отзывы</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">О нас</Link>
            <Link href="/contacts" className="text-gray-700 hover:text-blue-600 font-medium">Контакты</Link>
          </nav>

          {/* Phone Number - Desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+70000000000" 
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              +7 (000) 000-00-00
            </a>
          </div>

          {/* Hamburger Menu Button - Mobile only */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-100 md:hidden"
          >
            <span className="sr-only">Открыть меню</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-4 space-y-1">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                Главная
              </Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                Услуги
              </Link>
              <Link href="/reviews" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                Отзывы
              </Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                О нас
              </Link>
              <Link href="/contacts" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                Контакты
              </Link>
              <a href="tel:+70000000000" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-blue-600 font-medium">
                +7 (000) 000-00-00
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}