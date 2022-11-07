import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextPage } from 'next';

import type { AppProps } from 'next/app';
import { lightTheme, darkTheme } from 'Theme';

const App: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default App;
