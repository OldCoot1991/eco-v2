import { createSlice } from '@reduxjs/toolkit';

type Language = 'ru' | 'en';

interface LanguageState {
  current: Language;
}

const initialState: LanguageState = {
  current: 'ru',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.current = state.current === 'ru' ? 'en' : 'ru';
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', state.current);
      }
    },
    setLanguage: (state, action) => {
      state.current = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', state.current);
      }
    },
    initializeLanguage: (state) => {
      if (typeof window !== 'undefined') {
        const savedLanguage = localStorage.getItem('language') as Language | null;
        state.current = savedLanguage || 'ru';
      }
    },
  },
});

export const { toggleLanguage, setLanguage, initializeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
