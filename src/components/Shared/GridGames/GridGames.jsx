import styles from './gridGames.module.scss';
import  Link  from 'next/link'; 
import { map } from 'lodash';
import { fn } from '@/utils';
import { Label } from '@/components/Shared';

export function GridGames(props) {
  const { games } = props;
  return (
    <div className={styles.gridGames}>
      {map(games , (game) => (
        <Link 
        key={game.id}
        href= {`/${game.attributes.slug}`}
        className={styles.game}
        >
        <div>
          <img src={game.attributes.cover.data.attributes.url} alt="img" />
          {game.attributes.discount > 0 && (
            <Label.Discount className = {styles.discount}>
               {`- ${game.attributes.discount} %`}
            </Label.Discount>
          )}
        </div>

        <div>
          <span>{game.attributes.title}</span>
          <span className={styles.price}>
             {fn.calcDiscountedprice(
              game.attributes.price,
              game.attributes.discount
              )} €
          </span>
        </div>


        </Link>
      ))}
    </div>
  )
}


