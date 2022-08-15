import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { ModalProvider, ThemeProvider } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
