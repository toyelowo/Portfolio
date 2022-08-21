import { useContext, useEffect, useRef, KeyboardEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';

import styles from '../../styles/Modal.module.scss';
import { ThemeCtx, ModalCtx } from '../../store';

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
  const themeCtx = useContext(ThemeCtx);
  const { closeModal, isModalOpen } = useContext(ModalCtx);
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const firstFocusableElementRef = useRef<HTMLAnchorElement | null>(null);
  const lastFocusableElementRef = useRef<HTMLAnchorElement | null>(null);

  /*
    Prevent scrolling in element behind the Modal when modal is open
    Also, focus first element when modal opens (to comply with accessibility requirements)
  */
  useEffect(() => {
    modalWrapperRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      firstFocusableElementRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    () => (document.body.style.overflow = 'unset');
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null;
  }

  /*
    1. Escape button closes the modal
    2. Handles focus trap:  
      - if lastFocusableElementRef is reached during regular tabination to to go first ref
      - if firstFocusableElementRef is reached during regular tabination to to go last ref
  */
  function handleOnKeyDown(e: KeyboardEvent<HTMLElement>) {
    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    if (
      e.key === 'Tab' &&
      !e.shiftKey &&
      e.target === lastFocusableElementRef.current
    ) {
      firstFocusableElementRef.current?.focus();
      e.preventDefault();
    } else if (
      e.key === 'Tab' &&
      e.shiftKey &&
      e.target === firstFocusableElementRef.current
    ) {
      lastFocusableElementRef.current?.focus();
      e.preventDefault();
    }
  }

  return (
    <div
      className={`${styles.ModalWrapper} ${
        isModalOpen ? '' : styles.hideModal
      }`}
      onKeyDown={handleOnKeyDown}
      role="dialog"
      aria-labelledby="modal--title"
    >
      <div className={styles.Modal} ref={modalWrapperRef}>
        <div className={styles.Heading}>
          <h3 className={styles.Heading__title} id="modal--title">
            <Link href="/">
              <a ref={firstFocusableElementRef}>Explore my portfolio</a>
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
            {SOCIALS.map((social, idx) => (
              <li key={social.title} className={styles.Socials__List_Item}>
                <a
                  href={social.link}
                  rel="noreferrer"
                  target="_blank"
                  ref={
                    idx === SOCIALS.length - 1 ? lastFocusableElementRef : null
                  }
                >
                  {social.title}
                </a>
              </li>
            ))}
          </ul>

          <p className={styles.Name}>Temitayo Oyelowo</p>
        </div>
      </div>
    </div>
  );

  function getActiveClassName(href: string) {
    return router.pathname === href ? styles['Nav__List__item--active'] : '';
  }
}
