import { useState , useEffect } from "react";
import { WishList as WishListCtrl } from "@/api";
import { size } from 'lodash';
import { useAuth } from "@/hooks";
import { NoResult } from "@/components/Shared";
import { GridGamesWishList } from "./GridGamesWishlist";

const wishListCtrl = new WishListCtrl()

export function WishList() {

   const [wishList, setWishList] = useState(null);
   const [reload, setReload] = useState(false);

   const { user  } = useAuth();

   const onReload = () => setReload((prevState) => !prevState);

   useEffect(() => {
      (async () => {
         try {
            const response = await wishListCtrl.getAll(user.id);
            setWishList(response);
         } catch (error) {
            console.error(error);
         }
      })();
   }, [reload]);
   

  return size(wishList) === 0 ? (
    <NoResult text = "You dont't have any game in your wishlist, we'll glad if you do it..."/>
  ) : (
    <GridGamesWishList wishlist = {wishList} onReload = {onReload}/>
  )
}


