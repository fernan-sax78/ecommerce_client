import styles from './gridGamesWishlist.module.scss';
import Link from 'next/link';
import { map } from 'lodash';
import { fn } from '@/utils';
import { Label , WishlistIcon } from '@/components/Shared';


export function GridGamesWishList(props) {

    const { wishlist , onReload } = props;


  return (
    <div className={styles.gridGame}>
      {map(wishlist , (item) => {

        const game = item.attributes.game.data;
        const cover = game.attributes.cover.data;


        return (
            <div key={item.id} className={styles.game}>
                <Link href={`/${game.attributes.slug}`}>
                <div>
                    <img src={cover.attributes.url} alt="" />


                    {game.attributes.discount > 0 && (
                       <Label.Discount className = {styles.discount}>
                        {`- ${game.attributes.discount} %`}
                       </Label.Discount>
                    )}
                </div>

                  <div>

                    <span>{game.attributes.title}</span>

                      <div>

                    <span className={styles.price}>
                      
                        {fn.calcDiscountedprice(game.attributes.price, game.attributes.discount)} €
                    </span>                    
                   
                      </div>


                  </div>

                </Link>

                
                      <WishlistIcon gameId = {game.id} className = {styles.wishlistIcon} removeCallBack = {onReload}/>

            </div>
        )
      })}
    </div>
  )
}


