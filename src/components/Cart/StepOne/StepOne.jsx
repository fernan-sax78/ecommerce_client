import styles from './stepOne.module.scss';
import { Basket } from './Basket';
import { Resume } from './Resume';


export function StepOne(props) {
    const { games } = props;
  return (
    <div className={styles.stepOne}>
     <div className={styles.center}>
        <Basket games = {games}/>
     </div>
     <div className={styles.right}>
         <Resume games = {games} />
     </div>
    </div>
  )
}


