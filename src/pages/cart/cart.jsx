
import { CartLayout } from "@/layouts";
import { Game } from "@/api";
import { useRouter } from "next/router";
import { useState , useEffect } from "react";
import { useCart } from "@/hooks";
import { Cart } from "@/components/Cart";
import { Seo } from "@/components/Shared";

const gameCtrl = new Game();


function CartPage() {
   const { query : {step = 1}} = useRouter();
   const currentStep = Number(step);
   const { cart } = useCart();
   const [games, setGames] = useState(null);

   

   useEffect(() => {
       (async() => {
        try {
          const data = [];
          
          for await (const item of cart){
            const response = await gameCtrl.getGameById(item.id);
            data.push({...response.data , quantity : item.quantity});
          }

          setGames(data);
          
        } catch (error) {
          console.error(error);
        }
       })();
   }, [cart])
   
  
  return (
    <>
    <Seo title = "Cart"/>
    <CartLayout>
      {currentStep === 1 && <Cart.StepOne games = {games}/> }
      {currentStep === 2 && <Cart.StepTwo games = {games}/> }
      {currentStep === 3 && <Cart.StepThree games = {games} />}
    </CartLayout>
    </>
  )
}

export default CartPage;
