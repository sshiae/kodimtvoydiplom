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
    'диплом IT', 'курсовая на заказ', 'дипломный проект программирование',
    'курсовая по информатике', 'разработка под ключ', 'IT-студенты',
    'веб-разработка', 'мобильная разработка', 'машинное обучение диплом',
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
    icon: '/icon.svg',
    shortcut: '/icon.svg',
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
