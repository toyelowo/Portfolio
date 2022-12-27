import Image from 'next/image';

import { Page, Button } from '../ui';
import styles from './Work.module.scss';
import { HorizontalGallery } from './components';

export function Work() {
  return (
    <Page>
      <h2 className={styles.SectionTitle}>Work</h2>

      <HorizontalGallery />
    </Page>
  );
}
