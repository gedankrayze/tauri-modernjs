import { ConfigProvider } from 'antd';
import { ReactNode, useEffect } from 'react';
import { getTheme } from '@/themes';
import useAppStore from '@/stores/appStore';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { themeMode } = useAppStore();
  const theme = getTheme(themeMode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  return (
    <ConfigProvider theme={theme}>
      {children}
    </ConfigProvider>
  );
};