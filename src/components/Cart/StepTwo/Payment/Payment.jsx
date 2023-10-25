import styels from './payment.module.scss';
import { CardElement } from '@stripe/react-stripe-js';

export function Payment() {

    const cardStyles = {
        style :{
           base : {
            color : "#fff",
            fontSize : "1rem",
            "::placeholder" : {
                color : "#909090"
            }
           }
        }
    }
  return (
    <div className={styels.payment}>
      <h2>Payments</h2>

      <div className={styels.block}>
        <CardElement options={cardStyles}/>
      </div>
    </div>
  )
}

 
