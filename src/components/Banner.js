"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <div className="relative bg-gray-900 h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80 z-10"></div>
      <Image 
        src="/banner-image.jpg" 
        alt="Ремонт бытовой техники" 
        fill
        className="object-cover" 
        priority
      />
      
      <div className="relative z-20 h-full flex flex-col justify-center items-start max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Профессиональный ремонт бытовой техники
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-200 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Быстрый и надежный ремонт любой бытовой техники с гарантией качества
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/services" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 inline-block"
          >
            Наши услуги
          </Link>
        </motion.div>
      </div>
    </div>
  );
}