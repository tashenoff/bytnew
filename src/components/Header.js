"use client";

import Link from 'next/link';
import LoadingLink from './LoadingLink';
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
            <Image 
              src="/logo.svg" 
              alt="РемБытовой" 
              width={150} 
              height={40} 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <LoadingLink href="/" className="text-gray-700 hover:text-blue-600 font-medium">Главная</LoadingLink>
            <LoadingLink href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Услуги</LoadingLink>
            <LoadingLink href="/reviews" className="text-gray-700 hover:text-blue-600 font-medium">Отзывы</LoadingLink>
            <LoadingLink href="/about" className="text-gray-700 hover:text-blue-600 font-medium">О нас</LoadingLink>
            <LoadingLink href="/contacts" className="text-gray-700 hover:text-blue-600 font-medium">Контакты</LoadingLink>
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
              <LoadingLink href="/" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                Главная
              </LoadingLink>
              <LoadingLink href="/services" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                Услуги
              </LoadingLink>
              <LoadingLink href="/reviews" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                Отзывы
              </LoadingLink>
              <LoadingLink href="/about" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                О нас
              </LoadingLink>
              <LoadingLink href="/contacts" onClick={() => setIsMenuOpen(false)} className="block py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                Контакты
              </LoadingLink>
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