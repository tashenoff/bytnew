"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FeatureCard({ feature, index }) {
  const { icon, title, description } = feature;
  
  return (
    <motion.div 
      className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-blue-100 p-4 rounded-full mb-6">
        <Image 
          src={icon} 
          alt={title} 
          width={32} 
          height={32} 
          className="text-blue-600" 
        />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}