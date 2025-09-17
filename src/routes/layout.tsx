import '@/global.less';
import {useEffect, useState, type ReactNode} from 'react';
import type {MenuProps} from 'antd';
import {Layout, Menu, Button, Typography, Space, Tag, Card, List, message, theme} from 'antd';
import {invoke} from '@tauri-apps/api/core';
import dayjs from 'dayjs';
import {
    BellRing,
    CalendarDays,
    CheckCircle2,
    Gauge,
    Menu as MenuIcon,
    MonitorCog,
    Play,
    Rocket,
    Settings2
} from 'lucide-react';
import useAppStore from '@/stores/appStore';

const {Header, Sider, Content} = Layout;

type QuickAction = {
    key: string;
    title: string;
    description: string;
    icon: ReactNode;
};

const menuItems: MenuProps['items'] = [
    {
        key: 'dashboard',
        icon: <Gauge size={18} strokeWidth={2.4} />,
        label: 'Dashboard'
    },
    {
        key: 'operations',
        icon: <MonitorCog size={18} strokeWidth={2.4} />,
        label: 'Operations'
    },
    {
        key: 'settings',
        icon: <Settings2 size={18} strokeWidth={2.4} />,
        label: 'Settings'
    }
];

const quickActions: QuickAction[] = [
    {
        key: 'rust-integration',
        title: 'Rust integration',
        description: 'Call the greet command from the header to round-trip data between React and Tauri.',
        icon: <Rocket size={18} strokeWidth={2.6} />
    },
    {
        key: 'state-management',
        title: 'State management',
        description: 'The sidebar collapse state and greeting history live in a shared Zustand store.',
        icon: <Gauge size={18} strokeWidth={2.6} />
    },
    {
        key: 'live-clock',
        title: 'Live clock',
        description: 'Day.js keeps the header timestamp fresh so scheduling data stays accurate.',
        icon: <CalendarDays size={18} strokeWidth={2.6} />
    }
];

const AppLayout: React.FC = () => {
    const {collapsed, toggleSidebar, lastGreeting, setLastGreeting} = useAppStore();
    const [clock, setClock] = useState(() => dayjs());
    const [loadingGreeting, setLoadingGreeting] = useState(false);
    const {token} = theme.useToken();
    const [messageApi, contextHolder] = message.useMessage();
    const appName = APP_NAME;

    useEffect(() => {
        const intervalId = window.setInterval(() => setClock(dayjs()), 1000);
        return () => window.clearInterval(intervalId);
    }, []);

    const handleGreet = async () => {
        setLoadingGreeting(true);
        try {
            const greeting = await invoke<string>('greet', {name: 'Modern.js Developer'});
            setLastGreeting(greeting);
            messageApi.success('Rust says hello! Check the activity panel for the saved message.');
        } catch (error) {
            console.error('Failed to call greet command', error);
            messageApi.error('The greet command failed. Check the Tauri logs for details.');
        } finally {
            setLoadingGreeting(false);
        }
    };

    return (
        <Layout className="app-layout">
            {contextHolder}
            <Sider className="app-sider" collapsed={collapsed} trigger={null} width={224} theme="dark">
                <div className="app-logo">
                    <Rocket size={collapsed ? 28 : 20} strokeWidth={2.4} />
                    {!collapsed && (
                        <Typography.Title level={5} className="app-logo__title">
                            {appName}
                        </Typography.Title>
                    )}
                </div>
                <Menu mode="inline" defaultSelectedKeys={['dashboard']} items={menuItems} />
                <div className="app-sider__footer">
                    <Typography.Text type="secondary">Sidebar is {collapsed ? 'collapsed' : 'expanded'}</Typography.Text>
                </div>
            </Sider>
            <Layout>
                <Header className="app-header" style={{background: token.colorBgElevated}}>
                    <div className="app-header__left">
                        <Button
                            aria-label="Toggle sidebar"
                            className="app-header__toggle"
                            icon={<MenuIcon size={18} strokeWidth={2.4} />}
                            onClick={toggleSidebar}
                            type="text"
                        />
                        <Typography.Title level={5} className="app-header__title">
                            {appName}
                        </Typography.Title>
                    </div>
                    <Space size="middle" align="center">
                        <Tag className="app-header__clock" icon={<CalendarDays size={14} strokeWidth={2.4} />} color="geekblue">
                            {clock.format('ddd, MMM D YYYY • HH:mm:ss')}
                        </Tag>
                        <Button
                            icon={<Play size={16} strokeWidth={2.6} />}
                            loading={loadingGreeting}
                            onClick={handleGreet}
                            type="primary"
                        >
                            Run greet
                        </Button>
                    </Space>
                </Header>
                <Content className="app-content">
                    <Space direction="vertical" size="large" style={{width: '100%'}}>
                        <Card
                            className="app-card"
                            extra={<BellRing size={16} strokeWidth={2.4} />}
                            title="Operations overview"
                        >
                            <Typography.Paragraph>
                                This Ant Design shell demonstrates how Modern.js, Zustand, Day.js, and Lucide icons fit together in a
                                desktop-friendly workflow. Use the controls above to interact with the Tauri backend.
                            </Typography.Paragraph>
                            <List
                                className="app-card__list"
                                dataSource={quickActions}
                                renderItem={(item) => (
                                    <List.Item key={item.key}>
                                        <List.Item.Meta
                                            avatar={<div className="list-icon">{item.icon}</div>}
                                            description={item.description}
                                            title={item.title}
                                        />
                                    </List.Item>
                                )}
                                split
                            />
                        </Card>
                        <Card className="app-card" title="Latest activity">
                            <Space align="start" size="middle">
                                <div className="activity-icon">
                                    <CheckCircle2 size={22} strokeWidth={2.6} />
                                </div>
                                <Typography.Paragraph className="activity-text">
                                    {lastGreeting
                                        ? lastGreeting
                                        : 'Trigger the greet command to see the persisted response from Rust show up here.'}
                                </Typography.Paragraph>
                            </Space>
                        </Card>
                    </Space>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
