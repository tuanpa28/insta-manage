import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/Providers';
import { quickSandFont } from '@/configs/font';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Trang quản trị Insta',
  description: 'Trang quản trị Insta',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${quickSandFont.className}`}>
      <body className='min-h-screen bg-background'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
