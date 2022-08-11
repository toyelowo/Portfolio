import { useContext } from 'react';

import { ThemeCtx, ThemeEnum } from '../../../store';
import styles from '/styles/Page.module.scss';

interface Props{
  children: React.ReactNode;
}

export function Page({children}: Props){
    const themeCtx = useContext(ThemeCtx);
    const themeClass = themeCtx.theme === ThemeEnum.Light ? 'light-mode' : 'dark-mode';

    return (
      <div className={`${styles.Page} ${themeClass}`}>
        {children}
      </div>
    )
}
