import { useState } from 'react';
import Platform from '@/pages/games/[platform]';
import styles from './panel.module.scss';
import { fn } from '@/utils';
import { Button , Container , Icon , Image } from 'semantic-ui-react';
import { BasicModal, WishlistIcon } from '@/components/Shared';
import { useCart , useAuth } from '@/hooks';


export function Panel(props) {

    const { gameId , game } = props;
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
  
    const { addCart } = useCart();
    const { user } = useAuth();

    const platform = game.platform.data;

     const openClose = () => setShow((preState) => !preState);

    const buyPrice = fn.calcDiscountedprice(game.price , game.discount);

    const addCartWrapper = () => {
       if (!user) {

         setShow(true);
    
       }else{

      setLoading(true);
      addCart(gameId);

      setTimeout(() => {
        setLoading(false);
      }, 500);
       }
    }


  return (
    <Container className={styles.panel}>
      <div className={styles.imgContainer}>
        <Image src = {game.cover.data.attributes.url}/>
      </div>

      <div className={styles.actionContainer}>
        <div>
            <h2>{game.title}</h2>

            <div className={styles.moreInfo}>
                <span>
                    <Image src = {platform.attributes.icon.data.attributes.url}/>
                    {platform.attributes.title}
                </span>
                <span>
                    <Icon name = "check"/>
                    Stock
                </span>
            </div>

            <div className={styles.price}>
                {game.discount > 0 && (
                    <>
                    <span className={styles.originalPrice}>
                        <Icon name = "tag" />
                        {game.price} €
                    </span>
                    <span className={styles.discount}>- {game.discount} %</span>
                    </>
                )}

                <span className={styles.price}> {buyPrice} € </span>
            </div>

            <Button primary fluid onClick={addCartWrapper} loading = {loading}>
                Add to Cart <Icon name = "cart"/>
            </Button>

            <WishlistIcon gameId = {gameId} className = {styles.heart} />
        </div>
      </div>

        <BasicModal show = {show} onClose = {openClose} title = "Attention !!!" >
        <div className={styles.needSignUp}>
          <p>To add your Choice, <a href="/join/sign-up">Sign Up</a> First </p>
          
          
        </div>
        <Icon name = "close" className={styles.close} onClick = {openClose}/>
        </BasicModal>

    </Container>
  )
}

