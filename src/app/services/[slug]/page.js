"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import services from "../../../data/services.json";
import reviews from "../../../data/reviews.json";
import ReviewCard from "../../../components/ReviewCard";

export default function ServicePage() {
  // Используем хук useParams() для получения параметров маршрута на клиенте
  const params = useParams();
  const slug = params.slug;
  
  // Находим услугу по slug
  const service = services.find(s => s.slug === slug);
  
  // Находим отзывы для услуги
  const serviceReviews = reviews.filter(review => service && review.service === service.id);
  
  if (!service) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Услуга не найдена</h1>
        <p className="text-lg text-gray-600 mb-8">
          Запрашиваемая услуга не найдена. Пожалуйста, проверьте URL и попробуйте снова.
        </p>
        <Link 
          href="/services"
          className="inline-block bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300"
        >
          Вернуться к списку услуг
        </Link>
      </div>
    );
  }
  
  return (
    <>
      <div className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>
      </div>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg overflow-hidden mb-8 lg:mb-0">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={500} 
                  height={350} 
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">О услуге</h2>
              <p className="text-gray-700 mb-6">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Мы работаем с брендами:</h3>
                <div className="flex flex-wrap gap-2">
                  {service.brands.map((brand) => (
                    <span 
                      key={brand}
                      className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Стоимость услуги</h3>
                  <span className="text-2xl font-bold text-blue-600">от {service.price} ₸</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Окончательная стоимость зависит от сложности ремонта и определяется после диагностики.
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="/contacts"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 inline-block"
                  >
                    Оставить заявку
                  </Link>
                  <a 
                    href="tel:+70000000000"
                    className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-2 px-6 rounded-full transition-all duration-300 inline-block"
                  >
                    Позвонить
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Что входит в услугу</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Профессиональный сервис по ремонту {service.title.toLowerCase()}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Простой процесс ремонта {service.title.toLowerCase()}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: 1, 
                title: "Заявка", 
                description: "Оставьте заявку на сайте или позвоните нам по телефону" 
              },
              { 
                step: 2, 
                title: "Диагностика", 
                description: "Мастер выезжает к вам и проводит диагностику техники" 
              },
              { 
                step: 3, 
                title: "Ремонт", 
                description: "Мастер устраняет неисправность прямо у вас дома" 
              },
              { 
                step: 4, 
                title: "Проверка", 
                description: "Проверка работы техники и выдача гарантии на ремонт" 
              }
            ].map((item) => (
              <div 
                key={item.step}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Что говорят наши клиенты о ремонте {service.title.toLowerCase()}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceReviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
            
            {serviceReviews.length === 0 && (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600">Пока нет отзывов для этой услуги. Будьте первым, кто оставит отзыв!</p>
                <Link 
                  href="/reviews"
                  className="inline-block mt-4 bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
                >
                  Оставить отзыв
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы доверить нам ремонт вашей техники?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Свяжитесь с нами прямо сейчас и получите бесплатную консультацию специалиста
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contacts"
                className="bg-white text-blue-600 hover:bg-gray-200 font-medium py-3 px-8 rounded-full transition-all duration-300 inline-block"
              >
                Связаться с нами
              </Link>
              <a 
                href="tel:+70000000000"
                className="border border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-full transition-all duration-300 inline-block"
              >
                +7 (000) 000-00-00
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}