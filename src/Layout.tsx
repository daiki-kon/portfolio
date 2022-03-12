import { FC } from 'react';
import Navbar from './components/Navbar';

const Layout: FC = ({ children }) => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
