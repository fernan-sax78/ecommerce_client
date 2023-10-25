import styles from './address.module.scss';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import { BasicModal } from '@/components/Shared';
import { AddressForm } from '../AddressForm';

export function Address(props) {

    const { onReload } = props;

    const [show, setshow] = useState(false);

    const openClose = () => setshow(prevState => !prevState);



  return (
    <>
    <Button
    primary
    className={styles.addBtn}
    onClick={openClose}
    >
        Create Address
    </Button>

    <BasicModal show = {show} onClose = {openClose} title = "Create a New Address">
      <AddressForm onClose = {openClose} onReload = { onReload }/>
    </BasicModal>
    </>
  )
}


