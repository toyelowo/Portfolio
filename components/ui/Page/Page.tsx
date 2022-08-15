import { useContext } from 'react';

import { Modal } from '../../Modal';
import { ThemeCtx, ThemeEnum } from '../../../store';
import styles from '/styles/Page.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Page({ children, className }: Props) {
  const themeCtx = useContext(ThemeCtx);
  const themeClass =
    themeCtx.theme === ThemeEnum.Light ? 'light-mode' : 'dark-mode';

  return (
    <>
      <div className={getClassName()}>
        <Modal />
        {children}
      </div>
    </>
  );

  function getClassName() {
    return `${className ?? styles.Page} ${themeClass}`;
  }
}
