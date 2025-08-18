import logo from '@/assets/logo_font_black.svg';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../stores/store';
import { setMenu } from '../../stores/common';

const menuItems = ['대시보드', 'Task 목록', '모델 관리', '데이터셋'];

function Header() {
  const dispatch = useDispatch();
  const selectedMenu = useSelector(
    (state: RootState) => state.common.selectedMenu,
  );

  return (
    <header className="w-full h-fit flex items-center py-4 px-6 bg-white shadow-xs">
      <div className="flex items-center gap-12">
        <img src={logo} className="h-[3rem]" />
        <ul className="flex items-center gap-8">
          {menuItems.map((item, idx) => (
            <li
              key={item}
              className={`font-bold text-lg cursor-pointer ${
                selectedMenu === idx ? 'text-sky-500' : 'text-gray-500'
              }`}
              onClick={() => dispatch(setMenu(idx))}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
