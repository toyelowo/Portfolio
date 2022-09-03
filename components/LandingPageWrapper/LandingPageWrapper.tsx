import styles from '/styles/LandingPageWrapper.module.scss';

interface Props {
  children: JSX.Element;
}

export function LandingPageWrapper({ children }: Props) {
  return (
    <div className={styles.PageWrapper}>
      {/* <div className={styles.QuoteContainer}>
        <blockquote className={styles.QuoteWrapper}>
          <span className={styles.quote__body}>
            Life isn&apos;t about finding yourself. Life is
          </span>
          <span className={styles.quote__body}>about creating yourself.</span>
        </blockquote>
      </div> */}

      {children}
    </div>
  );
}
