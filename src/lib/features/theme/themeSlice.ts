import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', state.mode);
        document.documentElement.classList.toggle('dark', state.mode === 'dark');
      }
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', state.mode);
        document.documentElement.classList.toggle('dark', state.mode === 'dark');
      }
    },
    initializeTheme: (state) => {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        state.mode = savedTheme || systemPreference;
        document.documentElement.classList.toggle('dark', state.mode === 'dark');
      }
    },
  },
});

export const { toggleTheme, setTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;
