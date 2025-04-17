"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLoading } from './LoadingContext';

export default function LoadingLink({ href, children, className = '', onClick }) {
  const router = useRouter();
  const { startLoading, stopLoading } = useLoading();
  
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    
    // Не показываем прелоадер для внешних ссылок
    if (href.startsWith('http') || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return;
    }
    
    // Старт загрузки
    startLoading();
    
    // Навигация
    router.push(href);
    
    // Установка таймера для скрытия прелоадера
    setTimeout(() => {
      stopLoading();
    }, 300); // Минимальное время для видимости прелоадера
  };
  
  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}