"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServiceCard({ service }) {
  const { id, title, description, icon, price } = service;

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Image 
              src={icon} 
              alt={title} 
              width={24} 
              height={24} 
              className="text-blue-600"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">от {price} ₸</span>
          <Link 
            href={`/services/${id}`}
            className="inline-block bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-full px-4 py-2 text-sm"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </motion.div>
  );
}