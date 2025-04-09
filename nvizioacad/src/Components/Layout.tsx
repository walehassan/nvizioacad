// components/Layout.tsx
import { Outlet } from 'react-router-dom';
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  showNavbar?: boolean;
  showFooter?: boolean;
}

const Layout = ({
  title = 'Default Page Title',
  description = 'Default meta description',
  showNavbar = true,
  showFooter = true,
}: LayoutProps) => {
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Add other meta tags as needed */}
      </head>
      
      <div className="min-h-screen flex flex-col">
        {showNavbar && <Navbar />}
        
        <main className="flex-grow">
          <Outlet/>
        </main>
        
        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;