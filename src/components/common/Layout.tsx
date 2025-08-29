import { Outlet } from 'react-router-dom';
import Header from './Header';
import { ModalContext } from '@/contexts/ModalContext';

function Layout() {
  return (
    <ModalContext>
      <div className="relative w-screen h-screen bg-slate-100 flex flex-col">
        <Header />
        <div className="flex-grow min-h-0 overflow-y-auto w-full py-8 px-12">
          <Outlet />
        </div>
      </div>
    </ModalContext>
  );
}

export default Layout;
