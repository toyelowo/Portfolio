import { Page } from '../ui';

import styles from './Contact.module.scss';
import { SOCIALS } from '../utilities';
import Image from 'next/image';

export function Contact() {
  return (
    <Page>
      <div className={styles.TwoColumnWrapper}>
        <div className={styles.LeftColumn}>
          <h2 className={styles.title}>Contact</h2>

          <div className={styles.LeftColumnInner}>
            <p className={styles.description}>
              If you have questions or just want a quick chat, feel free to send
              a message via email to{' '}
              <span className={styles.email}>
                <a href="mailto:temitayooyelowo@gmail.com?subject=Coffee Chat">
                  temitayooyelowo@gmail.com
                </a>
              </span>{' '}
              or connect with me via socials.
            </p>

            <footer className={styles.Footer}>
              <ul className={styles.Socials}>
                {SOCIALS.map((social, idx) => (
                  <li key={social.title} className={styles.Socials__List_Item}>
                    <a href={social.link} rel="noreferrer" target="_blank">
                      {social.title}
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          </div>
        </div>
        <div className={styles.RightColumn}>
          {/* <p>This is in the right column</p> */}
          <Image
            src="/tayo.jpeg"
            alt="Picture of the Tayo"
            width={550}
            height={750}
          />
        </div>
        <div></div>
      </div>
    </Page>
  );
}
