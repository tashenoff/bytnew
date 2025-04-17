

import Link from "next/link";

export const metadata = {
  title: "Услуги - РемБытовой",
  description: "Профессиональный ремонт холодильников, стиральных машин, посудомоечных машин и другой бытовой техники.",
};

export default function ServicesPage() {
  const services = [
    { 
      id: 'refrigerators', 
      slug: 'remont-holodilnikov',
      title: 'Ремонт холодильников', 
      desc: 'Профессиональный ремонт холодильников любых марок и моделей'
    },
    { 
      id: 'washers', 
      slug: 'remont-stiralnyh-mashin',
      title: 'Ремонт стиральных машин', 
      desc: 'Срочный ремонт стиральных машин на дому'
    },
    { 
      id: 'dishwashers', 
      slug: 'remont-posudomoechnyh-mashin',
      title: 'Ремонт посудомоечных машин', 
      desc: 'Качественный ремонт посудомоечных машин всех типов'
    },
    { 
      id: 'ovens', 
      slug: 'remont-duhovyh-shkafov',
      title: 'Ремонт духовых шкафов', 
      desc: 'Ремонт встраиваемых и отдельностоящих духовых шкафов'
    },
    { 
      id: 'microwaves', 
      slug: 'remont-mikrovolnovyh-pechej',
      title: 'Ремонт микроволновых печей', 
      desc: 'Быстрый ремонт микроволновых печей любых марок'
    },
    { 
      id: 'cooktops', 
      slug: 'remont-varochnyh-panelej',
      title: 'Ремонт варочных панелей', 
      desc: 'Профессиональный ремонт индукционных и электрических варочных панелей'
    }
  ];

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