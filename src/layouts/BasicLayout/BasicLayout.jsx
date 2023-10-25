import { Container } from 'semantic-ui-react';
import styles from './basicLayout.module.scss';
import classNames from 'classnames';
import { TopBar } from '@/components/Layout';
import { Footer } from '@/components/Layout/Footer/Footer';

function BasicLayout(props) {

const { 
    children , 
    isOpenSearch = false , 
    isContainer = false,  
    relative = false 
} = props;

  return (

<>
     <TopBar isOpenSearch = {isOpenSearch} />

    <Container fluid>
      <div className= {classNames({ [styles.relative] : relative })}>
        { isContainer ? <Container>{children}</Container> : children }
      </div>
    </Container>


    <Footer />

</>


  )
}

export default BasicLayout
