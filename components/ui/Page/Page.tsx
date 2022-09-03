import { useContext } from 'react';

import { Modal } from '../../Modal';
import { ThemeCtx, ThemeEnum, ModalCtx } from '../../../store';
import { Navbar } from '../../Navbar';
import styles from '/styles/Page.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Page({ children, className }: Props) {
  const themeCtx = useContext(ThemeCtx);
  const modalCtx = useContext(ModalCtx);

  const themeClass =
    themeCtx.theme === ThemeEnum.Light ? 'light-mode' : 'dark-mode';
  const ariaHiddenKey = modalCtx.isModalOpen ? 'true' : 'false';

  return (
    <>
      <div
        className={`${styles.Page} ${themeClass}`}
        aria-hidden={ariaHiddenKey}
      >
        <Modal />
        <Navbar />
        <main className={getClassName()}>{children}</main>
      </div>
    </>
  );

  // function getClassName() {
  //   return `${className ?? styles.Page} ${themeClass}`;
  // }

  function getClassName() {
    return `${className ?? ''} ${themeClass}`;
  }
}
