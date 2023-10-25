import styles from './stepThree.module.scss';
import { Button , Icon } from 'semantic-ui-react';
import Link from 'next/link';

export function StepThree() {
  return (
    <div className={styles.stepThree}>
    <Icon name = "check circle outline"/>
      <h2>Your Payment is Confirmed,  Thanks!!! 👍🏻 </h2>

      <Button as={Link} href = {'/account'} primary >
        See your Order
      </Button>
    </div>
  )
}


