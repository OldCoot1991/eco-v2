import type { Preview } from '@storybook/react';
import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { makeStore, RootState } from '../src/lib/store';
import { setTheme } from '../src/lib/features/theme/themeSlice';
import '../src/app/globals.css';

const customViewports = {
  mobileSmall: {
    name: 'Mobile Small',
    styles: { width: '320px', height: '568px' },
  },
  mobileMedium: {
    name: 'Mobile Medium',
    styles: { width: '375px', height: '667px' },
  },
  mobileLarge: {
    name: 'Mobile Large',
    styles: { width: '425px', height: '812px' },
  },
  tablet: {
    name: 'Tablet',
    styles: { width: '768px', height: '1024px' },
  },
  laptop: {
    name: 'Laptop (13")',
    styles: { width: '1024px', height: '768px' },
  },
  desktop: {
    name: 'Desktop (1080p)',
    styles: { width: '1920px', height: '1080px' },
  },
  display2k: {
    name: '2K Display',
    styles: { width: '2560px', height: '1440px' },
  },
  display4k: {
    name: '4K Display',
    styles: { width: '3840px', height: '2160px' },
  },
  display8k: {
    name: '8K Display',
    styles: { width: '7680px', height: '4320px' },
  },
};

// Component to sync Storybook globals with Redux store
const ThemeSync = ({ theme }: { theme: 'light' | 'dark' }) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    if (theme && theme !== currentTheme) {
      dispatch(setTheme(theme));
      // Manually toggle class on html element just in case Redux effect doesn't fire in this context
      // (Though themeSlice usually handles this)
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme, currentTheme, dispatch]);

  return null;
};

const store = makeStore();

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: customViewports,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    backgrounds: {
      disable: true, // Disable default backgrounds to let our theme handle it
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: [
          { value: 'light', icon: 'circlehollow', title: 'Light' },
          { value: 'dark', icon: 'circle', title: 'Dark' },
        ],
        // Property that specifies if the name of the item will be displayed
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      return (
        <Provider store={store}>
          <ThemeSync theme={theme} />
          <div style={{
            backgroundColor: theme === 'dark' ? '#000' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000',
            minHeight: '100vh',
            padding: '1rem'
          }}>
            <Story />
          </div>
        </Provider>
      );
    },
  ],
};

export default preview;