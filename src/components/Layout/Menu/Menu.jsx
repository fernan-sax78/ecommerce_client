import styles from './menu.module.scss';
import { Image , Icon , Input } from 'semantic-ui-react';
import { useState , useEffect } from 'react';
import { Platform } from '@/api';
import { map } from 'lodash';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

const platformCtrl = new Platform();

export function Menu(props) {

    const { isOpenSearch , isOpenMenuResponsive } = props;
    const [ platforms , setPlatforms ] = useState(null);
    const [ showSearch , setShowSearch ] = useState(isOpenSearch);
    const [ searchText, setSearchText ] = useState("");
   
    const router = useRouter();
   
  


    const openCloseSearch = () => setShowSearch( (prevState) => !prevState);
    

   

    useEffect(() => {
      
        ( async () => {
            try {
                const response = await platformCtrl.getAll();
                setPlatforms(response.data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);


    useEffect(() => {
       setSearchText(router.query.s || "" );
    }, [router.query]);
    


    const onSearch = (text) => {
      setSearchText(text);
      router.replace(`/search?s=${text}`);
    }
    


  return (
    <div className = {classNames(styles.platform , {
      [styles.activeResponsive] : isOpenMenuResponsive,
    })}>
     
      {map(platforms, (platform) => (
        <Link key={platform.id} href= {`/games/${platform.attributes.slug}`}>
          <Image src = {platform.attributes.icon.data.attributes.url} />
          {platform.attributes.title}
        </Link>
      ))}

      <button className={styles.search} onClick={openCloseSearch} >
       { !showSearch ?  <Icon name = "search" /> : <Icon name = "close"  /> }
      </button>

     



      <div className={classNames(styles.inputContainer,{
        [styles.active] : showSearch,
      })}>
        <Input
        id = "search-game"
        placeholder = "search your game"
        className={styles.input}
        focus = {true}
        value = {searchText}
        onChange={(_ , data) => onSearch(data.value)}
        autoComplete = 'off'
        />
      </div>
    </div>
  )
}


