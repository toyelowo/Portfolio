import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useContext } from 'react';

import {
  ModalProvider,
  ThemeProvider,
  ThemeCtx,
  ThemeEnum,
  ModalCtx
} from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ModalProvider>
        <ModalRoot />
        <Component {...pageProps} />
      </ModalProvider>
    </ThemeProvider>
  );
}

function ModalRoot() {
  const themeCtx = useContext(ThemeCtx);
  const modalCtx = useContext(ModalCtx);

  const themeClass =
    themeCtx.theme === ThemeEnum.Light ? 'light-mode' : 'dark-mode';

  if (!modalCtx.isModalOpen) {
    return <div id="modal-root" aria-hidden="false" className={themeClass} />;
  }

  return (
    <div
      id="modal-root"
      aria-hidden="false"
      aria-labelledby="modal--title"
      role="dialog"
    />
  );
}

export default MyApp;
