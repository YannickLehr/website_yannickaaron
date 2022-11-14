import { createTheme } from '@nextui-org/react';

export const lightTheme = createTheme({
  type: 'light',
  className: 'yannickaaron-light',
  theme: {
    colors: {
      footerDivider: '#8c8c8c'
    }
  }
});

export const darkTheme = createTheme({
  type: 'dark',
  className: 'yannickaaron-dark',
  theme: {
    colors: {
      footerDivider: '#f2f2f2'
    }
  }
});
