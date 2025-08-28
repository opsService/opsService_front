import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div className="relative w-screen h-screen bg-slate-100 flex flex-col">
      <Header />
      <div className="flex-grow min-h-0 overflow-y-auto w-full py-8 px-12">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
