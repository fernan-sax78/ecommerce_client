import { useState , useEffect } from 'react';
import classNames from 'classnames';
import styles from './wishlistIcon.module.scss';
import {  Icon } from 'semantic-ui-react';
import { useAuth } from '@/hooks';
import { WishList } from '@/api';
import { BasicModal } from '../BasicModal';
import { Game } from '@/api';


const wishListCtrl = new WishList();
const gameCtrlId = new Game();

export function WishlistIcon(props) {


    const { gameId , className , removeCallBack} = props;
    const [hasWishList, setHasWishList] = useState(null);
    const [needSignUp, setNeedSignUp] = useState(null);
    const [show, setShow] = useState(false);
    const [idName , setIdName] = useState(null);

    const openClose = () => setShow((preState) => !preState);

    const { user  } = useAuth();

   
   

    useEffect(() => {
      (async () => {
         try {
          
            const response = await wishListCtrl.check(user.id , gameId);
            setHasWishList(response);

         } catch (error) {

            if (!user) {
               setHasWishList(false);
               setNeedSignUp(`To add your favorite game, you first need to `);
            }else{
              console.error(error);
            }  
         }
      })();
    }, [gameId]);

      const findGameById = async () => {

      const response = await gameCtrlId.getGameById(gameId);
           
       if (!user) {

          setIdName(response.data.attributes.title);
          setShow(true);

       }/* else{

        setIdName(response.data[0].attributes.title);

       } */
    }

    const addWishList = async () => {

           if (!user) {
               setHasWishList(false);
               findGameById();
               openClose();
            }else{
               const response = await wishListCtrl.add(user.id , gameId);
               setHasWishList(response);
            }

    }

 


    const deleteWishList = async () => {
        try {
          if (user) {
          await wishListCtrl.delete(hasWishList.id);
          setHasWishList(false);
          }
          if (removeCallBack) removeCallBack();
        } catch (error) {
          console.error(error);
        }
    }    



  if (hasWishList === null) return null;

  return (
         <>
       <Icon 
    name= {hasWishList ? "heart" : "heart outline"}
    onClick = {hasWishList ? deleteWishList  : addWishList}  
    className={classNames(styles.wishlistIcon , {
        [className] : className}
        )}  
        />

        <BasicModal show = {show} onClose = {openClose} title = {idName} >
        <div className={styles.needSignUp}>
          {needSignUp}
          <a href="/join/sign-up">Sign Up</a>
          
        </div>
        <Icon name = "close" className={styles.close} onClick = {openClose}/>
        </BasicModal>
        </>

  
  )
}


