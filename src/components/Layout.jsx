import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div>
      <Header />
      <section className='px-10 py-10 min-h-screen bg-gray-300'>
        <Suspense fallback={<h2>Suspense 1 loading</h2>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};
export default Layout;
