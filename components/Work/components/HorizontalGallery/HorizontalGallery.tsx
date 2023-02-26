import styles from './HorizontalGallery.module.scss';
import { GalleryItem } from '../GalleryItem';
import type { GalleryItemProps } from '../GalleryItem';

const galleryItems: GalleryItemProps[] = [
  {
    projectTitle: 'Hotel Reservation system',
    projectDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
    molestiae eum maxime dolor nihil deserunt aperiam eos ad quasi
    voluptate voluptas, quia quod consequatur autem accusantium
    deleniti expedita nostrum laboriosam.`,
    liveSiteLink: 'https://www.github.com/toyelowo',
    githubLink: 'https://www.github.com/toyelowo',
    image: {
      src: '/Hotel_Home_page.png',
      alt: 'Landing page of hotel reservation page'
    }
  },
  {
    projectTitle: 'Project 2',
    projectDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
    molestiae eum maxime dolor nihil deserunt aperiam eos ad quasi
    voluptate voluptas, quia quod consequatur autem accusantium
    deleniti expedita nostrum laboriosam.`,
    liveSiteLink: 'https://www.github.com/toyelowo-2',
    githubLink: 'https://www.github.com/toyelowo-2',
    image: {
      src: '/Hotel_Home_page.png',
      alt: 'Landing page of hotel reservation page'
    }
  },
  {
    projectTitle: 'Project 3',
    projectDescription: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
    molestiae eum maxime dolor nihil deserunt aperiam eos ad quasi
    voluptate voluptas, quia quod consequatur autem accusantium
    deleniti expedita nostrum laboriosam.`,
    liveSiteLink: 'https://www.github.com/toyelowo-3',
    githubLink: 'https://www.github.com/toyelowo-3',
    image: {
      src: '/Hotel_Home_page.png',
      alt: 'Landing page of hotel reservation page'
    }
  }
];

export function HorizontalGallery() {
  return (
    <div className={styles.container}>
      {galleryItems.map(
        ({
          projectTitle,
          projectDescription,
          liveSiteLink,
          githubLink,
          image
        }) => (
          <GalleryItem
            key={liveSiteLink}
            projectTitle={projectTitle}
            projectDescription={projectDescription}
            liveSiteLink={liveSiteLink}
            githubLink={githubLink}
            image={image}
          />
        )
      )}
    </div>
  );
}
