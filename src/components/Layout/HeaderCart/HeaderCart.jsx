import styles from './headerCart.module.scss';
import { Icon , Image } from 'semantic-ui-react';
import Link from 'next/link';
import { map } from 'lodash';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import React from 'react'

export function HeaderCart() {

    const { query : {step = 1}} = useRouter();


    const currentStep = step;


   const steps = [
    {
        number : 1,
        title : "Cart",
    },
    {
        number : 2,
        title : "Payment",
    },
    {
        number : 3,
        title : "Confirmed Order",
    }
   ]

  return (
    <div className={styles.headerCart}>
     <div className={styles.left}>
        <Link href= '/'>
          <Image src='/images/logo.png' alt = "Gaming"/>
        </Link>
     </div>

     <div className={styles.center}>
        {map(steps , (step) => (
            <div key={step.number} className= {classNames({
                [styles.active] : step.number === Number(currentStep),
                [styles.success] : step.number < Number(currentStep)
            })}>
                <span className={styles.number}>
                    <Icon name = "check"/>
                    {step.number}
                </span>
                <span>{step.title}</span>
                <span className={styles.space} />
            </div>
        ))}
     </div>
      <div className={styles.right}>
        <Icon name = "lock" />

          <div>
             <span>Secure Payment</span>
             <span>256-bit SSL Secure</span>
          </div>
      </div>
    </div>
  )
}


