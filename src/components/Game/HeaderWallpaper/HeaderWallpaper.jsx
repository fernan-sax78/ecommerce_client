import styles from './headerWallpaper.module.scss';
import { Image } from 'semantic-ui-react';

export  function HeaderWallpaper(props) {

    const { image } = props;

  return (
    <div className={styles.headerWallpaper}>
     <Image src = {image}/>
    </div>
  )
}


