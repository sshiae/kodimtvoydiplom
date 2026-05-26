import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'помощь в написании диплома IT', 'помощь с курсовой работой',
    'сопровождение дипломного проекта', 'консультация по курсовой информатика',
    'IT-студенты помощь', 'веб-разработка для студентов',
    'мобильная разработка учебный проект', 'помощь ML дипломная работа',
    'подготовка к защите диплома', 'помощь в написании курсовой работы',
  ],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: 'website',
    locale: 'ru_RU',
    url: SITE.url,
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  category: 'education',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
