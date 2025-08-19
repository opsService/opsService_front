import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto bg-slate-100">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
