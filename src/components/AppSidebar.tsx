import { Layout, Menu, Typography } from 'antd';
import type { MenuProps } from 'antd';
import {
  MonitorCog,
  Settings2,
  Rocket,
  Home,
  BarChart3,
  Database,
  Users,
  Bell
} from 'lucide-react';
import useAppStore from '@/stores/appStore';

const { Sider } = Layout;

const menuItems: MenuProps['items'] = [
  {
    key: 'dashboard',
    icon: <Home size={18} strokeWidth={2.4} />,
    label: 'Dashboard'
  },
  {
    key: 'analytics',
    icon: <BarChart3 size={18} strokeWidth={2.4} />,
    label: 'Analytics'
  },
  {
    key: 'operations',
    icon: <MonitorCog size={18} strokeWidth={2.4} />,
    label: 'Operations'
  },
  {
    key: 'database',
    icon: <Database size={18} strokeWidth={2.4} />,
    label: 'Database'
  },
  {
    type: 'divider'
  },
  {
    key: 'users',
    icon: <Users size={18} strokeWidth={2.4} />,
    label: 'Users'
  },
  {
    key: 'notifications',
    icon: <Bell size={18} strokeWidth={2.4} />,
    label: 'Notifications'
  },
  {
    key: 'settings',
    icon: <Settings2 size={18} strokeWidth={2.4} />,
    label: 'Settings'
  }
];

export const AppSidebar: React.FC = () => {
  const { collapsed } = useAppStore();

  return (
    <Sider
      className="app-sider"
      collapsed={collapsed}
      trigger={null}
      width={224}
      theme="dark"
    >
      <div className="app-logo">
        <div className="app-logo__icon">
          <Rocket size={collapsed ? 28 : 24} strokeWidth={2.4} />
        </div>
        {!collapsed && (
          <div className="app-logo__content">
            <Typography.Title level={5} className="app-logo__title">
              Tauri ModernJS
            </Typography.Title>
            <Typography.Text type="secondary" className="app-logo__subtitle">
              Desktop App
            </Typography.Text>
          </div>
        )}
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        items={menuItems}
        className="app-menu"
      />

      <div className="app-sider__footer">
        <div className="app-sider__status">
          <div className="status-indicator" />
          {!collapsed && (
            <Typography.Text type="secondary">
              Connected
            </Typography.Text>
          )}
        </div>
      </div>
    </Sider>
  );
};