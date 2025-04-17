import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "РемБытовой - Ремонт бытовой техники",
  description: "Профессиональный ремонт холодильников, стиральных машин, посудомоечных машин и другой бытовой техники. Выезд на дом, гарантия на работу.",
  keywords: "ремонт бытовой техники, ремонт холодильников, ремонт стиральных машин, ремонт посудомоечных машин"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-gray-50`}>
        <header className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <a href="/" className="flex items-center">
                <span className="text-xl font-bold text-gray-900">РемБытовой</span>
              </a>

              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Главная</a>
                <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Услуги</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">О нас</a>
                <a href="/contacts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Контакты</a>
              </nav>

              <div className="hidden md:flex items-center">
                <a href="tel:+70000000000" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  +7 (000) 000-00-00
                </a>
              </div>
            </div>
          </div>
        </header>
        
        <main>
          {children}
        </main>
        
        <footer className="bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold">РемБытовой</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Профессиональный ремонт бытовой техники с гарантией качества.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
                <nav className="flex flex-col space-y-2">
                  <a href="/" className="text-gray-400 hover:text-white transition-colors">Главная</a>
                  <a href="/services" className="text-gray-400 hover:text-white transition-colors">Услуги</a>
                  <a href="/about" className="text-gray-400 hover:text-white transition-colors">О нас</a>
                  <a href="/contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</a>
                </nav>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-gray-400">г. Ваш Город, ул. Примерная, д. 123</span>
                  </div>
                  <div className="flex items-center">
                    <a href="tel:+70000000000" className="text-gray-400 hover:text-white transition-colors">+7 (000) 000-00-00</a>
                  </div>
                  <div className="flex items-center">
                    <a href="mailto:info@rembytovoi.kz" className="text-gray-400 hover:text-white transition-colors">info@rembytovoi.kz</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} РемБытовой. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
