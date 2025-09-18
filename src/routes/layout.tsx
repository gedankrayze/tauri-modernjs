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
            <Layout className="app-layout" style={{ height: '100vh' }}>
                {contextHolder}
                <AppSidebar />
                <Layout style={{ height: '100vh', padding: '2rem' }}>
                    <AppHeader onGreet={handleGreet} loadingGreeting={loadingGreeting} />
                    <Content style={{
                        height: 'calc(100vh - 64px)',
                        overflowY: 'auto',
                        overflowX: 'hidden'
                    }}>
                        <DashboardContent />
                    </Content>
                </Layout>
            </Layout>
        </ThemeProvider>
    );
};

export default AppLayout;
