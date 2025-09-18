import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#3b82f6',
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    colorInfo: '#06b6d4',
    colorTextBase: '#f8fafc',
    colorBgBase: '#0f172a',
    colorBgContainer: 'rgba(13, 22, 43, 0.85)',
    colorBgElevated: 'rgba(30, 41, 59, 0.9)',
    colorBorder: 'rgba(148, 163, 184, 0.16)',
    colorBorderSecondary: 'rgba(148, 163, 184, 0.08)',
    borderRadius: 12,
    borderRadiusLG: 16,
    borderRadiusXS: 8,
    fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: 14,
    fontSizeHeading1: 32,
    fontSizeHeading2: 24,
    fontSizeHeading3: 20,
    fontSizeHeading4: 16,
    fontSizeHeading5: 14,
    lineHeight: 1.5,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    boxShadowSecondary: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  },
  components: {
    Layout: {
      bodyBg: 'transparent',
      headerBg: 'transparent',
      siderBg: 'rgba(8, 12, 24, 0.9)',
      footerBg: 'transparent',
      headerHeight: 64,
      headerPadding: '0 24px',
    },
    Menu: {
      itemBg: 'transparent',
      itemSelectedBg: 'rgba(59, 130, 246, 0.12)',
      itemSelectedColor: '#3b82f6',
      itemHoverBg: 'rgba(148, 163, 184, 0.08)',
      itemActiveBg: 'rgba(59, 130, 246, 0.2)',
      itemBorderRadius: 8,
      itemMarginBlock: 4,
      itemMarginInline: 0,
      itemPaddingInline: 12,
    },
    Card: {
      headerBg: 'transparent',
      actionsBg: 'transparent',
      borderRadiusLG: 18,
      paddingLG: 24,
    },
    Button: {
      borderRadius: 8,
      borderRadiusLG: 10,
      borderRadiusSM: 6,
      fontWeight: 500,
      primaryShadow: '0 2px 4px rgba(59, 130, 246, 0.2)',
    },
    Tag: {
      borderRadiusLG: 999,
      fontSizeSM: 12,
    },
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
      fontWeightStrong: 600,
    },
    List: {
      itemPadding: '12px 0',
      itemPaddingLG: '16px 0',
      itemPaddingSM: '8px 0',
    },
  },
};

export const lightTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: '#3b82f6',
    colorSuccess: '#10b981',
    colorWarning: '#f59e0b',
    colorError: '#ef4444',
    colorInfo: '#06b6d4',
    colorTextBase: '#1e293b',
    colorBgBase: '#ffffff',
    colorBgContainer: '#ffffff',
    colorBgElevated: '#f8fafc',
    colorBorder: '#e2e8f0',
    colorBorderSecondary: '#f1f5f9',
    borderRadius: 12,
    borderRadiusLG: 16,
    borderRadiusXS: 8,
    fontFamily: '"Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: 14,
    fontSizeHeading1: 32,
    fontSizeHeading2: 24,
    fontSizeHeading3: 20,
    fontSizeHeading4: 16,
    fontSizeHeading5: 14,
    lineHeight: 1.5,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    boxShadowSecondary: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  },
  components: {
    Layout: {
      bodyBg: '#f8fafc',
      headerBg: '#ffffff',
      siderBg: '#ffffff',
      footerBg: '#ffffff',
      headerHeight: 64,
      headerPadding: '0 24px',
    },
    Menu: {
      itemBg: 'transparent',
      itemSelectedBg: 'rgba(59, 130, 246, 0.08)',
      itemSelectedColor: '#3b82f6',
      itemHoverBg: 'rgba(148, 163, 184, 0.06)',
      itemActiveBg: 'rgba(59, 130, 246, 0.12)',
      itemBorderRadius: 8,
      itemMarginBlock: 4,
      itemMarginInline: 0,
      itemPaddingInline: 12,
    },
    Card: {
      headerBg: 'transparent',
      actionsBg: 'transparent',
      borderRadiusLG: 18,
      paddingLG: 24,
    },
    Button: {
      borderRadius: 8,
      borderRadiusLG: 10,
      borderRadiusSM: 6,
      fontWeight: 500,
      primaryShadow: '0 2px 4px rgba(59, 130, 246, 0.2)',
    },
    Tag: {
      borderRadiusLG: 999,
      fontSizeSM: 12,
    },
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
      fontWeightStrong: 600,
    },
    List: {
      itemPadding: '12px 0',
      itemPaddingLG: '16px 0',
      itemPaddingSM: '8px 0',
    },
  },
};

export const themeColors = {
  primary: '#3b82f6',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#06b6d4',
  gradient: {
    primary: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    success: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    warning: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
  },
};

export type ThemeMode = 'light' | 'dark';

export const getTheme = (mode: ThemeMode): ThemeConfig => {
  return mode === 'dark' ? darkTheme : lightTheme;
};