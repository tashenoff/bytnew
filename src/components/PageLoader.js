"use client";

import { useLoading } from './LoadingContext';

export default function PageLoader() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1">
      <div className="h-full bg-blue-600 animate-pulse-x"></div>
    </div>
  );
}