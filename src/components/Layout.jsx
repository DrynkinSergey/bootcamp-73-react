import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className=''>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
