import type { Preview } from '@storybook/nextjs-vite';
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
  },
};

export default preview;