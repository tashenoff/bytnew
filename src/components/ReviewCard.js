"use client";

import Image from 'next/image';

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  );
};

export default function ReviewCard({ review }) {
  const { name, date, text, rating, avatar } = review;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 relative mr-4">
            <Image 
              src={avatar || '/avatars/default.jpg'} 
              alt={name} 
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <StarRating rating={rating} />
      </div>
      
      <p className="text-gray-700">{text}</p>
    </div>
  );
}