import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Project Bolt',
  description: 'A beautiful Next.js application with amazing visual effects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} p-0 m-0 overflow-x-hidden bg-black`}>{children}</body>
    </html>
  );
} 