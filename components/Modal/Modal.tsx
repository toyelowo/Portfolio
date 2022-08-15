import { useContext, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

import styles from '../../styles/Modal.module.scss';
import { ThemeCtx, ModalCtx } from '../../store';

interface Props {
  children: React.ReactNode;
}

const MODAL_OPTIONS = [
  { title: 'Intro', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Work', link: '/work' },
  { title: 'Contact', link: '/contact' }
];
const SOCIALS = [
  { title: 'Linkedin', link: 'https://www.linkedin.com' },
  { title: 'Github', link: 'https://www.github.com/toyelowo' },
  { title: 'Twitter', link: 'https://www.twitter.com' }
];

export function Modal() {
  /*
    TODO: Implement focus trap:
    add two refs -> start tab and end tab

    if last ref has been reached go first ref
    if shift tab is pressed on first ref go to last ref
  */
  const themeCtx = useContext(ThemeCtx);
  const { closeModal, isModalOpen } = useContext(ModalCtx);
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  /*
    Prevent scrolling in element behind the Modal when modal is open
  */
  useEffect(() => {
    modalWrapperRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <div
      className={`${styles.ModalWrapper} ${
        isModalOpen ? '' : styles.hideModal
      }`}
      ref={modalWrapperRef}
    >
      <div className={styles.Heading}>
        <h3 className={styles.Heading__title}>
          <Link href="/">
            <a>Explore my portfolio</a>
          </Link>
        </h3>

        <button className={styles.CloseModalButton} onClick={closeModal}>
          X
        </button>
      </div>
      <div>
        <ul className={styles.NavWrapper}>
          {MODAL_OPTIONS.map((option) => (
            <li
              key={option.title}
              className={`${styles.Nav__List__item} ${getActiveClassName(
                option.link
              )}`}
            >
              <Link href={option.link}>
                <a>{option.title}</a>
              </Link>
            </li>
          ))}
          <li className={styles.ThemeWrapper}>
            <button
              className={styles.ThemeButton}
              onClick={themeCtx.toggleTheme}
            >
              <FontAwesomeIcon
                icon={faLightbulb}
                className={styles.ThemeIcon}
              />
            </button>

            <p className={styles.Theme}>{themeCtx.theme}</p>
          </li>
        </ul>
      </div>

      <div className={styles.Footer}>
        <ul className={styles.Socials}>
          {SOCIALS.map((social) => (
            <li key={social.title} className={styles.Socials__List_Item}>
              <a href={social.link} rel="noreferrer" target="_blank">
                {social.title}
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.Name}>Temitayo Oyelowo</p>
      </div>
    </div>
  );

  function getActiveClassName(href: string) {
    return router.pathname === href ? styles['Nav__List__item--active'] : '';
  }
}
