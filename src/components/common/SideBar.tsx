function Sidebar({
  children,
  width = 'w-[12rem]',
}: {
  children: React.ReactNode;
  width?: string;
}) {
  return (
    <div
      className={`h-full ${width} flex flex-col bg-white border-r border-gray-200 overflow-y-auto overflow-x-hidden`}
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
      className={`w-full flex items-center rounded p-2 gap-2 ${isSelected ? 'bg-sky-100' : ' hover:text-sky-300'}`}
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
