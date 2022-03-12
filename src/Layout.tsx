import { FC } from 'react';
import Navbar from './components/Navbar';

const Layout: FC = ({ children }) => {
  return (
    <>
      <nav className="sticky top-0 z-50">
        <Navbar />
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
