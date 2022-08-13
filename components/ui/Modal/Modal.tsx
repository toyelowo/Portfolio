import styles from '../../../styles/Modal.module.scss';

interface Props{
  children: React.ReactNode;
}

const MODAL_OPTIONS = ['Intro', 'About', 'Work', 'Contact'];

export function Modal() {
  /*
    TODO: Implement focus trap:
    add two refs -> start tab and end tab

    if last ref has been reached go first ref
    if shift tab is pressed on first ref go to last ref
  */

  return (
    <div className={styles.ModalWrapper}>
      <div className={styles.Heading}>
        <p className={styles.Heading__title}>Explore my portfolio</p>
        <button className={styles.CloseModalButton}>X</button>
      </div>
      <div>
        <ul className={styles.NavWrapper}>
          {MODAL_OPTIONS.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
