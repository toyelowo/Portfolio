import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './HorizontalGallery.module.scss';
import { GalleryItem } from '../GalleryItem';
import type { GalleryItemProps } from '../GalleryItem';

const GALLERY_ITEMS: GalleryItemProps[] = [
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
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState<GalleryItemProps | null>(
    null
  );

  const getPreviousProject = () => {
    setCurrentProjectIndex((prevState) =>
      prevState === 0 ? GALLERY_ITEMS.length - 1 : prevState - 1
    );
  };

  const getNextProject = () => {
    setCurrentProjectIndex((prevState) =>
      prevState === GALLERY_ITEMS.length - 1 ? 0 : prevState + 1
    );
  };

  useEffect(() => {
    if (GALLERY_ITEMS.length === 0) {
      return;
    }

    setCurrentProject(GALLERY_ITEMS[currentProjectIndex]);
  }, [currentProjectIndex]);

  if (!currentProject) {
    return (
      <div>
        <p>No active project found, check back in a couple of months</p>
      </div>
    );
  }

  const { projectTitle, projectDescription, liveSiteLink, githubLink, image } =
    currentProject;

  return (
    <div className={styles.HorizontalGallery}>
      <button
        aria-label="previous project"
        className={styles.GalleryDirectionButton}
        onClick={getPreviousProject}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={styles.GalleryDirectionIcon}
        />
      </button>
      <div>
        <GalleryItem
          key={liveSiteLink}
          projectTitle={projectTitle}
          projectDescription={projectDescription}
          liveSiteLink={liveSiteLink}
          githubLink={githubLink}
          image={image}
        />
      </div>
      <button
        aria-label="previous project"
        className={styles.GalleryDirectionButton}
        onClick={getNextProject}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className={styles.GalleryDirectionIcon}
        />
      </button>
    </div>
  );
}
