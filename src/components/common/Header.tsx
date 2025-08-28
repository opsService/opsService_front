import logo from '@/assets/logo_font_black.svg';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { label: '대시보드', link: '/' },
  { label: 'Task 목록', link: '/task' },
  { label: '모델 관리', link: '/model' },
  { label: '데이터셋', link: '/dataset' },
];

function Header() {
  return (
    <header className="w-full h-fit flex items-center py-4 px-12 bg-white shadow-xs">
      <div className="flex items-center gap-12">
        <img src={logo} className="h-[3rem]" />
        <ul className="flex items-center gap-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              className={({ isActive }) =>
                `font-bold text-lg cursor-pointer ${
                  isActive ? 'text-sky-500' : 'text-gray-500'
                }`
              }
              to={item.link}
            >
              {item.label}
            </NavLink>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
