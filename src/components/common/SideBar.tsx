import clsx from 'clsx';

function Sidebar({
  children,
  className = 'w-[12rem] bg-transparent',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'h-full flex flex-col border-r border-gray-200 overflow-y-auto overflow-x-hidden',
        className,
      )}
    >
      {children}
    </div>
  );
}

function SidebarHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200">
      {children}
    </div>
  );
}

function SidebarContent({ children }: { children: React.ReactNode }) {
  return (
    <ul className="w-full flex flex-col flex-1 min-h-0 p-2">{children}</ul>
  );
}

function SidebarMenu({
  children,
  isSelected = false,
  onClick,
}: {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <li
      className={`w-full flex items-center rounded p-2 gap-2 ${isSelected ? 'bg-sky-100' : ' hover:text-sky-500'}`}
      onClick={onClick}
    >
      <span
        className="truncate cursor-pointer font-semibold"
        title={String(children)}
      >
        {children}
      </span>
    </li>
  );
}

Sidebar.Header = SidebarHeader;
Sidebar.Content = SidebarContent;
Sidebar.Menu = SidebarMenu;

export default Sidebar;
