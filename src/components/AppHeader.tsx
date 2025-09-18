import { Button, Space, Tag, Typography, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import {
  CalendarDays,
  Menu as MenuIcon,
  Play,
  Sun,
  Moon
} from 'lucide-react';
import useAppStore from '@/stores/appStore';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

interface AppHeaderProps {
  onGreet: () => void;
  loadingGreeting: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ onGreet, loadingGreeting }) => {
  const { toggleSidebar, themeMode, toggleTheme } = useAppStore();
  const [clock, setClock] = useState(() => dayjs());

  useEffect(() => {
    const intervalId = window.setInterval(() => setClock(dayjs()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const themeMenuItems: MenuProps['items'] = [
    {
      key: 'light',
      icon: <Sun size={16} strokeWidth={2} />,
      label: 'Light Mode',
      onClick: () => themeMode === 'dark' && toggleTheme(),
    },
    {
      key: 'dark',
      icon: <Moon size={16} strokeWidth={2} />,
      label: 'Dark Mode',
      onClick: () => themeMode === 'light' && toggleTheme(),
    },
  ];

  return (
    <div className="app-header">
      <div className="app-header__left">
        <Button
          aria-label="Toggle sidebar"
          className="app-header__toggle"
          icon={<MenuIcon size={18} strokeWidth={2.4} />}
          onClick={toggleSidebar}
          type="text"
        />
        <Typography.Title level={5} className="app-header__title">
          Tauri ModernJS
        </Typography.Title>
      </div>

      <Space size="middle" align="center">
        <Tag
          className="app-header__clock"
          icon={<CalendarDays size={14} strokeWidth={2.4} />}
          color="geekblue"
        >
          {clock.format('ddd, MMM D YYYY • HH:mm:ss')}
        </Tag>

        <Dropdown
          menu={{ items: themeMenuItems, selectedKeys: [themeMode] }}
          placement="bottomRight"
          trigger={['click']}
        >
          <Button
            icon={themeMode === 'dark' ? <Moon size={16} strokeWidth={2} /> : <Sun size={16} strokeWidth={2} />}
            type="text"
            className="app-header__theme-toggle"
          />
        </Dropdown>

        <Button
          icon={<Play size={16} strokeWidth={2.6} />}
          loading={loadingGreeting}
          onClick={onGreet}
          type="primary"
        >
          Run greet
        </Button>
      </Space>
    </div>
  );
};