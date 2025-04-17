

import Link from "next/link";
import ServiceCard from "../../components/ServiceCard";
import servicesData from "../../data/services.json";

export const metadata = {
  title: "Услуги - РемБытовой",
  description: "Профессиональный ремонт холодильников, стиральных машин, посудомоечных машин и другой бытовой техники.",
};

export default function ServicesPage() {
  // Используем данные из JSON файла напрямую
  const services = servicesData;

  return (
    <>
      <div className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Услуги по ремонту бытовой техники
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Профессиональный ремонт любой бытовой техники с выездом на дом
          </p>
        </div>
      </div>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Простой процесс ремонта вашей бытовой техники
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
    </>
  );
}