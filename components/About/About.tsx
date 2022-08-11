import {Navbar} from '../Navbar';
import {Page} from '../ui';
import styles from '/styles/About.module.scss';

const skills = ['HTML5', 'CSS', 'Javascript', 'Typescript', 'sass', 'React', 'Python', 'Node.js', 'Git', 'Typescript', 'MongoDB'];

export function About() {
  return (
    <Page>
      <Navbar />
      <div className={styles.TwoColumnWrapper}>
        <div className={styles.LeftColumn}>
          <h2 className={styles.title}>About</h2>
        </div>
        
        <div className={styles.RightColumn}>
          <div className={styles.Behavioural}>
            <p className={styles.summary}>
              I am currently interested in Software Development, specifically in Web Development. I love the idea of building
              products that helps to make the life of an average user easier. My hobbies include table tennis, swimming, and playing 
              Overwatch. 
            </p>

            <p className={styles.description}>
              I am a developer with a background in Computer Science. I currently
              work as a Front-End Developer at Shopify where I work with the other folks at
              Orders to ensure merchants can seamlessly track Orders from their platforms. 
            </p>
          </div>

          <div className={styles.SkillsWrapper}>
            <h3>My current stack</h3>
            <ul className={styles.Skills}>
            {skills.map((skill) => (
              <li key={skill} className={styles.Skills__skill}>{skill}</li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </Page>
  );
}
