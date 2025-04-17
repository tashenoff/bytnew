"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Button({ href, children, variant = 'primary', className = '' }) {
  const baseClasses = 'inline-block font-medium py-3 px-6 rounded-full transition-all duration-300';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;
  
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {href ? (
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      ) : (
        <button className={buttonClasses}>
          {children}
        </button>
      )}
    </motion.span>
  );
}