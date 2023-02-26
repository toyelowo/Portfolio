import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';

import { ThemeCtx } from '../../store';
import { Page } from '../ui';
import styles from '/styles/Landing.module.scss';

export function Landing() {
  const themeCtx = useContext(ThemeCtx);

  return (
    <Page className={styles.LandingWrapper}>
      <div className={styles.DescriptionWrapper}>
        <div className={styles.Description}>
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Shopify.
          </p>
        </div>
        <div className={styles.ThemeWrapper}>
          <button className={styles.ThemeButton} onClick={themeCtx.toggleTheme}>
            <FontAwesomeIcon icon={faLightbulb} className={styles.ThemeIcon} />
          </button>

          <p className={styles.Theme}>{themeCtx.theme}</p>
        </div>
      </div>

      <div className={styles.FooterWrapper}>
        <div className={styles.FooterWrapper__name__description}>
          <p className={styles.FooterWrapper__name__description__prefix}>
            Hi, my name is{' '}
          </p>
          <span className={styles.FooterWrapper__name__description__fullName}>
            Temitayo Oyelowo
          </span>
        </div>
        <div className={styles.FooterWrapper__button}>
          <p className={styles.FooterWrapper_button_text}>Scroll Down</p>
          <button className={styles.ThemeButton}>
            <FontAwesomeIcon
              icon={faCircleArrowDown}
              className={styles.ThemeIcon}
            />
          </button>
        </div>
      </div>
    </Page>
  );
}
