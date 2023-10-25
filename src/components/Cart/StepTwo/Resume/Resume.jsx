import styles from './resume.module.scss';
import { useState , useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { forEach  , map } from 'lodash';
import { Cart } from '@/api';
import { useAuth , useCart } from '@/hooks';
import { fn } from '@/utils';
import { useStripe , CardElement, useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';


const cartCtrl = new Cart();

export function Resume(props) {

    const { games , addressSelected } = props ;
    
    const [total, setTotal] = useState(null);
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const router = useRouter();
    const { deleteAllItems } = useCart();

  

    useEffect(() => {
       let totalTemp = 0;

       forEach(games , (game) => {
          const price = fn.calcDiscountedprice(game.attributes.price , game.attributes.discount);
          totalTemp += price * game.quantity;
       });


    setTotal(totalTemp.toFixed(2));

    }, [games]);

    const onPay = async () => {

      setLoading(true);
      

      if(!stripe || !elements) {
        setLoading(false);
        return;
      }

      const cardElement = elements.getElement(CardElement);

      const result = await stripe.createToken(cardElement);

      if (result.error) {
        console.log(result.error.message);
      }else{
        const response = await cartCtrl.paymentCart(
          result.token, 
          games , 
          user.id,
          addressSelected
          );

          if(response.status === 200){
           
            deleteAllItems();
            goToStepEnd();

          }else{
            console.error("Is an error in the order payment");
          }
      }

      setTimeout(() => {
        setLoading(false);
      }, 1000)

    }

    const goToStepEnd = () => {
       router.replace({ query : {...router.query, step : 3}});
    }
    
if(!total) return null;

  return (
    <div className={styles.resume}>
      <h2>RESUME</h2>

      <div className={styles.block}>
        <div className={styles.products}>
            {map(games, (game) => (
                <div className={styles.product} key={game.id}>
                   <div>
                    <p>{game.attributes.title}</p>
                    <span>{game.attributes.platform.data.attributes.title}</span>
                   </div>
                   <span>
                    {game.quantity > 0 && `${game.quantity} x `}
                    {fn.calcDiscountedprice(game.attributes.price , game.attributes.discount)} €
                   </span>
                </div>
            ))}
        </div>
      </div>

      <div className={styles.blockTotal}>
        <div>
            <span>Total</span>
            <span>{total} €</span>
        </div>

        <Button primary fluid disabled = {!addressSelected} onClick={onPay} loading = {loading}>
            Pay Here
        </Button>
      </div>
    </div>
  )
}


