import { Page, Button } from '../ui';

import styles from './Work.module.scss';

export function Work() {
  return (
    <Page>
      <h2 className={styles.title}>Work</h2>

      <div className={styles.TwoColumnWrapper}>
        <div className={styles.LeftColumn}>
          <div className={styles.ProjectDescription}>
            <h2>Lorem Ipsum Projects</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
              molestiae eum maxime dolor nihil deserunt aperiam eos ad quasi
              voluptate voluptas, quia quod consequatur autem accusantium
              deleniti expedita nostrum laboriosam.
            </p>
          </div>

          <div className={styles.ProjectButtonWrapper}>
            <Button
              type="_blank"
              href="https://www.github.com/toyelowo"
              className={`${styles.ViewSiteButton} ${styles.ProjectButton}`}
            >
              View Site
            </Button>

            <Button
              type="_blank"
              href="https://www.github.com/toyelowo"
              className={`${styles.GitHubButton} ${styles.ProjectButton}`}
            >
              Github
            </Button>
          </div>
        </div>
        <div className={styles.RightColumn}>
          <p>Random text</p>
        </div>
      </div>
    </Page>
  );
}
