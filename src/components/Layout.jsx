import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <section className='px-10 py-10 min-h-screen bg-gray-300'>
        <Outlet />
      </section>
    </div>
  );
};
export default Layout;
