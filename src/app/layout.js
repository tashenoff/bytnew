import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLoader from "../components/PageLoader";
import { LoadingProvider } from "../components/LoadingContext";

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
        <LoadingProvider>
          <PageLoader />
          <Header />
          
          <main>
            {children}
          </main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}