import { useState , useEffect } from 'react';
import styles from './orders.module.scss';
import { Order as OrderCtrl} from '@/api';
import { useAuth } from '@/hooks';
import { NoResult } from '@/components/Shared';
import { Order } from './Order';
import { map } from 'lodash'; 

const orderCtrl = new OrderCtrl();

export function Orders() {

  const [orders, setOrders] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
       (async() => {
        try {
           const response = await orderCtrl.getAll(user.id);
           setOrders(response.data);
        } catch (error) {
          console.error(error);
        }
       })();
  }, []);


  if (!orders) return <NoResult text = "You don't bought any product yet, we invite you to do it . Thanks ! 😉 "/>
  
  return (
    <div className={styles.ordersInfo}>
      {map(orders , (order) => (
        <Order key={order.id} order = {order} />
      ))}
    </div>
  )
}


