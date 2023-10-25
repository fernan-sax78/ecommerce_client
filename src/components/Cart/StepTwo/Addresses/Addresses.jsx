import { useState , useEffect } from 'react';
import styles from './addresses.module.scss';
import { useAuth } from '@/hooks';
import { Address } from '@/api';
import { map } from 'lodash';
import classNames from 'classnames';


const addressesCtrl = new Address();

export function Addresses(props) {

    const { addressSelected , setAddressSelected} = props;

    const [addresses, setAddresses] = useState(null);
    const { user } = useAuth();


    useEffect(() => {
         (async () => {
          try {
            const response = await addressesCtrl.getAll(user.id); 
            setAddresses(response.data);

         } catch (error) {
             console.error(error);
         }
         })();
    }, []);
    
  return (
    <div className={styles.addresses}>
      <h2>SELECT YOUR ADDRESS AND PAY</h2>

      {map(addresses , (address) => (
         <div key={address.id} 
         className={classNames(styles.address , {[styles.active] : address.id === addressSelected?.id})} 
         onClick={() => setAddressSelected(address)}>
           <p>
            {address.attributes.name} ({address.attributes.title})
           </p>
           <p>
             {address.attributes.address} , {address.attributes.postal_code}, {" "} 
             {address.attributes.state} , {address.attributes.city}
           </p>
         </div>
      ))}
    </div>
  )
}

 
