import type { Preview } from '@storybook/react';

import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

import { createGlobalStyle } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

const GlobalStyles = createGlobalStyle`
    body {
      background: white;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  `;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withTests({
      results,
    }),
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      /* Uncomment for theme switching support */
      // themes: {
      //   light: lightTheme,
      //   dark: darkTheme,
      // }
      // defaultTheme: 'light',
      // Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
