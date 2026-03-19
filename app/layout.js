import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'RNINFOSOFT',
  description: 'Creative & Innovative Digital Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
