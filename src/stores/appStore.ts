import {create} from 'zustand';

type AppState = {
    collapsed: boolean;
    lastGreeting: string | null;
    toggleSidebar: () => void;
    setLastGreeting: (value: string) => void;
};

const useAppStore = create<AppState>((set) => ({
    collapsed: false,
    lastGreeting: null,
    toggleSidebar: () =>
        set((state) => ({
            collapsed: !state.collapsed
        })),
    setLastGreeting: (value: string) => set({lastGreeting: value})
}));

export default useAppStore;
