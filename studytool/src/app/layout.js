import './globals.css';
import { Merriweather, Lato } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap'
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap'
});

export const metadata = {
  title: 'Putt Project',
  description: 'Welcome to Putt Project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${merriweather.variable} ${lato.variable}`}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
