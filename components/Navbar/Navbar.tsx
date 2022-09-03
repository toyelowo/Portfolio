import { useContext } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from '/styles/Navbar.module.scss';
import { ModalCtx } from '../../store';

export function Navbar() {
  const { openModal } = useContext(ModalCtx);

  return (
    <nav className={styles.Nav}>
      <h2 className={styles.Nav__title}>
        <Link href="/">
          <a>
            <span className={styles['Nav__title--span']}>Temitayo </span>
            <span className={styles['Nav__title--span']}>Oyelowo</span>
          </a>
        </Link>
      </h2>

      <ul className={styles.Nav__List}>
        <li className={styles.Nav__List__item}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={styles.Nav__List__item}>
          <Link href="/work">
            <a>Work</a>
          </Link>
        </li>
        <li className={styles.Nav__List__item}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <button
        aria-label="open modal"
        className={styles.ModalOpenButton}
        onClick={(e) => openModal(e.currentTarget)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
}
