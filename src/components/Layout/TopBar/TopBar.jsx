import { useState } from 'react';
import Link from 'next/link';
import styles from './topBar.module.scss';
import { Icon, Image } from 'semantic-ui-react';
import { Account } from '../Account';
import { Menu } from '../Menu';




export function TopBar(props) {

    const { isOpenSearch } = props;
    const [openCloseMenu, setOpenCloseMenu] = useState(false);
    const [opeMenuResponsive, setOpeMenuResponsive] = useState(false)

  

    const openingMenuResponsive = () => {
      setOpenCloseMenu ((prevState) => !prevState);
      setOpeMenuResponsive((prevState) => !prevState);
    }

    

    
    

  return (
    <nav className= {styles.topBar}>

      {!openCloseMenu ? 
      <Icon name = "align justify"  
      className={styles.menuResponsive} 
      onClick = {openingMenuResponsive}/> 
      : 
      <Icon name = "close"  
      className={styles.closeResponsive} 
      onClick = {openingMenuResponsive}/> 
      }
    

      <div className={styles.left}>
        <Link href= "/">
           <Image src = "/images/logo.png" alt = "Gaming" />
        </Link>
      </div>

      <div className= {styles.center}>
       <Menu 
       isOpenSearch = {isOpenSearch} 
       isOpenMenuResponsive = {opeMenuResponsive} 
       />
      </div>

      <div className={styles.right}>
        <Account />
      </div>


    </nav>
  )
}


