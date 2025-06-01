import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Автоматизация бизнеса | Команда разработчиков-энтузиастов',
  description: 'Быстрая автоматизация бизнеса с измеримым ROI. ИИ-ассистенты, интеграции, аналитика.',
  keywords: 'автоматизация, ИИ, чатботы, интеграции, аналитика',
  openGraph: {
    title: 'Автоматизация бизнеса | Команда разработчиков-энтузиастов',
    description: 'Быстрая автоматизация бизнеса с измеримым ROI',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-xl gradient-text">
                <a href="/" >AutoTeam</a></div>
              <div className="flex space-x-8">
                {/* <a href="/blog" className="text-gray-700 hover:text-primary transition-colors">Блог</a> */}
                <a href="#contact" className="btn-primary">Связаться</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}