import '@/global.less';
import { useState } from 'react';
import { Layout, message } from 'antd';
import { invoke } from '@tauri-apps/api/core';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AppHeader } from '@/components/AppHeader';
import { AppSidebar } from '@/components/AppSidebar';
import { DashboardContent } from '@/components/DashboardContent';
import useAppStore from '@/stores/appStore';

const { Content } = Layout;

const AppLayout: React.FC = () => {
    const { setLastGreeting } = useAppStore();
    const [loadingGreeting, setLoadingGreeting] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const handleGreet = async () => {
        setLoadingGreeting(true);
        try {
            const greeting = await invoke<string>('greet', { name: 'Modern.js Developer' });
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
        <ThemeProvider>
            <Layout className="app-layout">
                {contextHolder}
                <AppSidebar />
                <Layout>
                    <AppHeader onGreet={handleGreet} loadingGreeting={loadingGreeting} />
                    <Content className="app-content">
                        <DashboardContent />
                    </Content>
                </Layout>
            </Layout>
        </ThemeProvider>
    );
};

export default AppLayout;
