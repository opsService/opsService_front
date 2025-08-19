import logo from '@/assets/logo_font_black.svg';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../stores/store';
import { setMenu } from '../../stores/common';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { label: '대시보드', link: '/' },
  { label: 'Task 목록', link: '/task' },
  { label: '모델 관리', link: '/model' },
  { label: '데이터셋', link: '/dataset' },
];

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedMenu = useSelector(
    (state: RootState) => state.common.selectedMenu,
  );

  return (
    <header className="sticky top-0 w-full h-fit flex items-center py-4 px-6 bg-white shadow-xs">
      <div className="flex items-center gap-12">
        <img src={logo} className="h-[3rem]" />
        <ul className="flex items-center gap-8">
          {menuItems.map((item, idx) => (
            <li
              key={item.label}
              className={`font-bold text-lg cursor-pointer ${
                selectedMenu === idx ? 'text-sky-500' : 'text-gray-500'
              }`}
              onClick={() => {
                dispatch(setMenu(idx));
                navigate(item.link);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
