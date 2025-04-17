import ReviewCard from "../../components/ReviewCard";
import reviews from "../../data/reviews.json";

export async function generateMetadata() {
  return {
    title: "Отзывы - РемБытовой",
    description: "Отзывы наших клиентов о качестве ремонта бытовой техники.",
  };
}

export default function ReviewsPage() {
  return (
    <>
      <div className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Отзывы наших клиентов
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы ценим мнение каждого клиента и стремимся поддерживать высокий уровень сервиса
          </p>
        </div>
      </div>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Оставьте свой отзыв</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                    Услуга, которой вы воспользовались
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="refrigerators">Ремонт холодильников</option>
                    <option value="washers">Ремонт стиральных машин</option>
                    <option value="dishwashers">Ремонт посудомоечных машин</option>
                    <option value="ovens">Ремонт духовых шкафов</option>
                    <option value="microwaves">Ремонт микроволновых печей</option>
                    <option value="cooktops">Ремонт варочных панелей</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">
                  Ваша оценка *
                </label>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <label key={star} className="cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        value={star}
                        className="sr-only"
                      />
                      <svg
                        className="w-8 h-8 text-gray-300 hover:text-yellow-400 peer-checked:text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="review" className="block text-gray-700 font-medium mb-2">
                  Ваш отзыв *
                </label>
                <textarea
                  id="review"
                  name="review"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300"
                >
                  Отправить отзыв
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}