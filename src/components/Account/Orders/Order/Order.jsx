import { useState } from 'react';
import styles from './order.module.scss';
import { Image , Icon } from 'semantic-ui-react';
import { DateTime } from 'luxon';
import { BasicModal } from '@/components/Shared';
import { forEach , map } from 'lodash';
import { fn } from '@/utils';


export  function Order(props) {
    const { order } = props;
    const [showModal, setShowModal] = useState(false);
    const createdAt = new Date(order.attributes.createdAt).toISOString();
    const products_ = order.attributes.products;
    
    const address = order.attributes.addressShipping;

    const openCloseModal = () => setShowModal((prevState) => !prevState)


    const getTotalProducts = () => {
        let total = 0;

        forEach(products_ , (product_) => {
            total += product_.quantity;
        });
        return total;
    }


    
   
   
  return (
    <>
     <div className={styles.order} onClick={openCloseModal}>
        <div>
            <span>{DateTime.fromISO(createdAt , {locale : "en"}).toFormat("dd/mm/yyyy")}</span>
            <p>{getTotalProducts()} Purchased Product/s</p>
        </div>

        <p>{order.attributes.totalPayment.toFixed(2)} € </p>
     </div>

     <BasicModal
     show = {showModal}
     title = "Order's Information"
     >
      {map(products_ , (product_) => (
        <div className={styles.product} key={product_.id}>
          <Image src = {product_.attributes.cover.data.attributes.url} />

          <div>
            <div className={styles.info}>
              <div>
                <p>
                  {product_.attributes.title}
                </p>
                <p>
                  {product_.attributes.platform.data.attributes.title} Platform
                </p>
              </div>
            </div>

            <div className= {styles.quantity}> 
            <span>
              {product_.quantity}{product_.quantity <= 1 ? 'pc' : 'pcs'}
            </span>
              <span>of</span>
            <span>
              {fn.calcDiscountedprice(product_.attributes.price , product_.attributes.discount)} €
            </span>
            </div>

          </div>
        </div>
      ))}

    <div className={styles.address}>
      <div>
        <p className={styles.title}>{address.attributes.title}</p>
        <p className={styles.addressInfo}>
          {address.attributes.name} , {address.attributes.address} , {" "} 
          {address.attributes.state} , {address.attributes.city} , {" "} 
          {address.attributes.postal_code}
        </p>
      </div>
    </div>

      <div className={styles.total}>
       <div>TOTAL ORDER =  <p>{order.attributes.totalPayment.toFixed(2)} €</p></div>
      </div>
      <Icon name = "close" className={styles.close} onClick = {openCloseModal}/>
     </BasicModal>
    </>
  )
}


