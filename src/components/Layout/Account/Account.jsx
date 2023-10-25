import { useState } from 'react';
import styles from './account.module.scss';
import { Button , Icon , Label } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { useAuth , useCart } from '@/hooks';
import { BasicModal } from '@/components/Shared';


export function Account() {
  
  
  const { user } = useAuth();
  const router = useRouter();
  const { total } = useCart();
  const [showEdit, setShowEdit] = useState(false);

  const openCloseEdit = () => setShowEdit(prevState => !prevState);


  
  const goToLogin = () => router.push('/join/sign-in');
  const goToAccount = () => router.push('/account');
   
  const goToCart = () => {
    if (!user) goToLogin();
    else router.push('/cart');
  }

 

  
  return (
    <div className= {styles.account}>
      <Button icon className={styles.cart} >
           <Icon name = 'cart' onClick={total === 0 ? () => setShowEdit(true) : goToCart} />
           { total > 0 && <Label circular > {!user ? 0 : total } </Label>}
      </Button>

    <BasicModal 
    show = {showEdit}
    onClose = {openCloseEdit}
    title = "No games in Cart"
    >

        <div className={styles.needSelectOne}>
        
           <p className={styles.emptyCartMess}>Hey there, you must to select some game or games first...</p>
          
        </div>

        <Icon name = "close" className={styles.close} onClick = {openCloseEdit}/>
     

    </BasicModal>

      {!user ? (
        <Button icon>
           <Icon name = "sign-in" className= {styles.signInIcon}/>
           <Icon name = "user outline" onClick = {goToLogin}/>
        </Button>
      ):(
        <Button icon className={styles.user}>
           <Icon name = "check" className= {styles.checkIcon}/>
           <Icon name = "user outline" onClick = {goToAccount}/>
        </Button>
      )}
    </div>
  )
}

  
