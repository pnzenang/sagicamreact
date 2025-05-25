import { createSlice } from '@reduxjs/toolkit';

const themes = { winter: 'winter', night: 'night' };

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.winter;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  theme: getThemeFromLocalStorage(),
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const { night, winter } = themes;
      state.theme = state.theme === night ? winter : night;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
