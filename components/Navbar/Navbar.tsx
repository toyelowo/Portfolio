import styles from '/styles/Navbar.module.scss';

export function Navbar(){
    
    return (
        <nav className={styles.Nav}>
        <h2 className={styles.Nav__title}>
          <a href="#">
            <span className={styles['Nav__title--span']}>Temitayo </span>
            <span className={styles['Nav__title--span']}>Oyelowo</span>
          </a>
        </h2>
          <ul className={styles.Nav__List}>
            <li className={styles.Nav__List__item}><a href="#">About</a></li>
            <li className={styles.Nav__List__item}><a href="#">Work</a></li>
            <li className={styles.Nav__List__item}><a href="#">Contact</a></li>
          </ul>
          </nav>
    )
}