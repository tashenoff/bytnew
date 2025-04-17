import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";

export async function generateMetadata() {
  return {
    title: "О нас - РемБытовой",
    description: "Узнайте больше о компании РемБытовой - профессиональный ремонт бытовой техники с гарантией качества.",
  };
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            О компании РемБытовой
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Профессиональный ремонт бытовой техники с 2010 года
          </p>
        </div>
      </div>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500 text-center p-4">
                  <p>Изображение компании</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Кто мы</h2>
              <p className="text-gray-700 mb-4">
                РемБытовой — это команда профессионалов с многолетним опытом в сфере ремонта бытовой техники. 
                С 2010 года мы помогаем нашим клиентам решать проблемы с неисправной бытовой техникой, 
                предоставляя качественный и надежный ремонт по доступным ценам.
              </p>
              <p className="text-gray-700 mb-4">
                Наша миссия — делать ремонт бытовой техники максимально удобным и выгодным для клиентов. 
                Мы работаем с выездом на дом, что экономит ваше время и избавляет от необходимости 
                самостоятельно транспортировать крупную технику.
              </p>
              <p className="text-gray-700">
                В нашей команде работают только сертифицированные мастера с опытом работы от 5 лет. 
                Мы постоянно совершенствуем наши навыки и следим за новинками в мире бытовой техники, 
                чтобы быть в курсе всех технологических особенностей современных устройств.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши ценности</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Принципы, которыми мы руководствуемся в нашей работе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Качество",
                description: "Мы используем только оригинальные запчасти и современное оборудование для диагностики и ремонта техники.",
                icon: "/icons/quality.svg"
              },
              {
                title: "Честность",
                description: "Прозрачное ценообразование и никаких скрытых платежей. Мы всегда согласовываем стоимость ремонта заранее.",
                icon: "/icons/honesty.svg"
              },
              {
                title: "Ответственность",
                description: "Мы даем гарантию на все виды работ и несем полную ответственность за качество предоставляемых услуг.",
                icon: "/icons/responsibility.svg"
              }
            ].map((value, index) => (
              <div 
                key={value.title}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image 
                    src={value.icon} 
                    alt={value.title} 
                    width={32} 
                    height={32} 
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наша команда</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Познакомьтесь с нашими профессионалами, которые вернут вашу технику к жизни
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Александр Иванов",
                position: "Главный инженер",
                image: "/avatars/default.jpg"
              },
              {
                name: "Сергей Петров",
                position: "Мастер по холодильному оборудованию",
                image: "/avatars/default.jpg"
              },
              {
                name: "Дмитрий Сидоров",
                position: "Мастер по стиральным машинам",
                image: "/avatars/default.jpg"
              },
              {
                name: "Елена Смирнова",
                position: "Менеджер по работе с клиентами",
                image: "/avatars/default.jpg"
              }
            ].map((person, index) => (
              <div 
                key={person.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-[250px]">
                  <Image 
                    src={person.image} 
                    alt={person.name} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
                  <p className="text-gray-600">{person.position}</p>
                </div>
              </div>
            ))}
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
            <Link href="/contacts">
              <Button className="bg-white text-blue-600 hover:bg-gray-200">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}