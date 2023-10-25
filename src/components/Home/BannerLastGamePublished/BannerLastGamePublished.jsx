import { useState , useEffect } from 'react';
import { Container , Image } from 'semantic-ui-react';
import styles from './bannerLastGamePublished.module.scss';
import { Game } from '@/api';
import Link from 'next/link';
import { DateTime } from 'luxon';
import { fn } from '@/utils';
import { Label } from '@/components/Shared';




const gameCtrl = new Game();

export function BannerLastGamePublished() {
  
    const [game, setGame] = useState(null);


    useEffect(() => {
        ( async () => {
          try {
            const response = await gameCtrl.getLastPublished();
            setGame(response.data[0]);
          } catch (error) {
            console.error(error);
          }
        })();
    }, [])
    

if(!game) return null; 

const wallpaper = game.attributes.wallpaper;

const releaseDate = new Date(game.attributes.releaseDate).toISOString();

const price = fn.calcDiscountedprice(
    game.attributes.price,
    game.attributes.discount
)

  return (
    <div className= {styles.container}>
      <Image src = {wallpaper.data.attributes.url} className= {styles.wallpaper}/>
       <div className={styles.background}></div>
      <Link className = {styles.infoContainer} href = {game.attributes.slug}>
        <Container>

             <h2>{game.attributes.title}</h2>

             <div className={styles.dateContainer}>
            <label >Uscita : </label>
            
            <span className={styles.date}>
                {DateTime.fromISO(releaseDate).minus({days : 1}).toRelative()}
            </span>
             </div>

            <p className={styles.price}>
                <Label.Discount>
                   {game.attributes.discount ? `- ${game.attributes.discount} %` : `Full Price`}
                </Label.Discount>
                <span className={styles.finalPrice}>  {price} € </span>
            </p>
              
            
            
        </Container>
      </Link>
    </div>
  )
}

 
