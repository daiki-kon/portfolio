import '../src/styles/globals.css';
import * as NextImage from 'next/image';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Story } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const withTheme = (Story: Story) => {
  return (
    <ThemeProvider>
      <MemoryRouterProvider>
        <Story />
      </MemoryRouterProvider>
    </ThemeProvider>
  );
};

export const decorators = [withTheme];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
