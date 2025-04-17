"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServiceCard({ service }) {
  const { slug, title, description, icon, price, image } = service;

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      {/* Изображение услуги */}
      <div className="relative h-48 bg-gray-200">
        {image ? (
          <Image 
            src={image || '/services/default-service.jpg'} 
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Image 
              src={icon} 
              alt={title} 
              width={48} 
              height={48} 
              className="opacity-50"
            />
          </div>
        )}
      </div>
      
      {/* Содержимое карточки */}
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
        
        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-blue-600">от {price} ₸</span>
          <Link 
            href={`/services/${slug}`}
            className="inline-block bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-full px-4 py-2 text-sm"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </motion.div>
  );
}