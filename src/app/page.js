import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "РемБытовой - Ремонт бытовой техники",
  description: "Профессиональный ремонт любой бытовой техники с гарантией качества и выездом на дом.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Баннер */}
      <div className="relative bg-gray-900 h-[500px] overflow-hidden">
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
            {[
              { id: 'refrigerators', slug: 'remont-holodilnikov', title: 'Ремонт холодильников', desc: 'Профессиональный ремонт холодильников любых марок и моделей' },
              { id: 'washers', slug: 'remont-stiralnyh-mashin', title: 'Ремонт стиральных машин', desc: 'Срочный ремонт стиральных машин на дому' },
              { id: 'dishwashers', slug: 'remont-posudomoechnyh-mashin', title: 'Ремонт посудомоечных машин', desc: 'Качественный ремонт посудомоечных машин всех типов' }
            ].map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">от 3000 ₸</span>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-block bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-full px-4 py-2 text-sm"
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
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
              { title: 'Опытные мастера', desc: 'Наши специалисты имеют более 10 лет опыта работы и сертификаты от производителей' },
              { title: 'Выезд на дом', desc: 'Мы работаем без выходных и приезжаем к вам домой в удобное для вас время' },
              { title: 'Гарантия на работу', desc: 'Предоставляем гарантию на все виды работ от 6 до 12 месяцев' }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
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
