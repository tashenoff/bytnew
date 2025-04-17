import Image from "next/image";
import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import servicesData from "../data/services.json";

export const metadata = {
  title: "РемБытовой - Ремонт бытовой техники",
  description: "Профессиональный ремонт любой бытовой техники с гарантией качества и выездом на дом.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Баннер */}
      <div className="relative h-[500px] overflow-hidden">
        {/* Фоновое изображение */}
        <div className="absolute inset-0">
          <Image 
            src="/banner-bg.jpg" 
            alt="Ремонт бытовой техники" 
            fill
            priority
            className="object-cover"
          />
        </div>
        
        {/* Градиент поверх изображения */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80 z-10"></div>
        
        <div className="relative z-20 h-full flex flex-col justify-center items-start max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Профессиональный ремонт бытовой техники
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Быстрый и надежный ремонт любой бытовой техники с гарантией качества
          </p>
          
          <Link href="/services" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 inline-block"
          >
            Наши услуги
          </Link>
        </div>
      </div>
      
      {/* Секция услуг */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Профессиональный ремонт любой бытовой техники с выездом на дом
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services"
              className="inline-block bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-full px-6 py-3"
            >
              Все услуги
            </Link>
          </div>
        </div>
      </section>
      
      {/* Секция преимуществ */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Мы гарантируем качественный ремонт бытовой техники любой сложности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Опытные мастера', 
                desc: 'Наши специалисты имеют более 10 лет опыта работы и сертификаты от производителей',
                icon: (
                  <svg className="w-12 h-12 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                )
              },
              { 
                title: 'Выезд на дом', 
                desc: 'Мы работаем без выходных и приезжаем к вам домой в удобное для вас время',
                icon: (
                  <svg className="w-12 h-12 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-4a1 1 0 00-1-1h-8a1 1 0 00-.8.4L8.65 7H5a1 1 0 00-1 1v1H3V4z" />
                  </svg>
                )
              },
              { 
                title: 'Гарантия на работу', 
                desc: 'Предоставляем гарантию на все виды работ от 6 до 12 месяцев',
                icon: (
                  <svg className="w-12 h-12 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Секция CTA */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Нужен срочный ремонт?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Свяжитесь с нами прямо сейчас и получите скидку 10% на первый ремонт
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contacts"
                className="bg-white text-blue-600 hover:bg-gray-200 font-medium py-3 px-8 rounded-full transition-all duration-300 inline-block"
              >
                Связаться с нами
              </Link>
              <a href="tel:+70000000000"
                className="border border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-full transition-all duration-300 inline-block"
              >
                +7 (000) 000-00-00
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
