import styles from './info.module.scss';
import { Container } from 'semantic-ui-react';

export function Info(props) {
    
    const { game } = props ; 
    
  return (
    <Container className={styles.info}>
      <div className={styles.summary}>
        <p>{game.summary}</p>
      </div>
      <div className={styles.more}>
       <ul>
        <li>
             <span>Release Date : </span>{game.releaseDate}
        </li>
       </ul>
      </div>
    </Container>
  )
}


