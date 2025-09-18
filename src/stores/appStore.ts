import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeMode } from '@/themes';

type AppState = {
    collapsed: boolean;
    lastGreeting: string | null;
    themeMode: ThemeMode;
    toggleSidebar: () => void;
    setLastGreeting: (value: string) => void;
    toggleTheme: () => void;
    setThemeMode: (mode: ThemeMode) => void;
};

const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            collapsed: false,
            lastGreeting: null,
            themeMode: 'dark',
            toggleSidebar: () =>
                set((state) => ({
                    collapsed: !state.collapsed
                })),
            setLastGreeting: (value: string) => set({lastGreeting: value}),
            toggleTheme: () =>
                set((state) => ({
                    themeMode: state.themeMode === 'dark' ? 'light' : 'dark'
                })),
            setThemeMode: (mode: ThemeMode) => set({themeMode: mode})
        }),
        {
            name: 'app-store',
            partialize: (state) => ({
                collapsed: state.collapsed,
                themeMode: state.themeMode
            })
        }
    )
);

export default useAppStore;
