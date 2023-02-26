import { Button } from '../../../ui';
import Image from 'next/image';

import styles from './GalleryItem.module.scss';

export interface Image {
  src: string;
  alt: string;
}

export interface Props {
  projectTitle: string;
  projectDescription: string;
  liveSiteLink: string;
  githubLink: string;
  image: Image;
}

export function GalleryItem({
  projectTitle,
  projectDescription,
  liveSiteLink,
  githubLink,
  image
}: Props) {
  return (
    <section className={styles.GalleryItem}>
      <div className={styles.LeftColumn}>
        <div className={styles.ProjectDescription}>
          <h2 className={styles.ProjectTitle}>{projectTitle}</h2>
          <p className={styles.description}>{projectDescription}</p>
        </div>

        <div className={styles.ProjectButtonWrapper}>
          <Button
            type="_blank"
            href={liveSiteLink}
            className={`${styles.ViewSiteButton} ${styles.ProjectButton}`}
          >
            View Site
          </Button>

          <Button
            type="_blank"
            href={githubLink}
            className={`${styles.GitHubButton} ${styles.ProjectButton}`}
          >
            Github
          </Button>
        </div>
      </div>
      <div className={styles.RightColumn}>
        <Image src={image.src} alt={image.alt} width={650} height={585} />
      </div>
    </section>
  );
}
