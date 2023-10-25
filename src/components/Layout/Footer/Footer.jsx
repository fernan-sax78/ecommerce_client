import styles from './footer.module.scss';
import { Container , Image , Button } from 'semantic-ui-react';
import Link from 'next/link';




export function Footer() {

    const date = new Date();
    const year = date.getFullYear();

  return (
    <div className={styles.footer}>
      <Container >
        <div className={styles.columns}>
            <div>
               <Link href= "/">
                 <Image src = "/images/logo.png" alt = "Gaming" />
               </Link>
            </div>


            <div>
              <ul>
                <Link href= "#">Terms And Conditions</Link>
                <Link href= "#">Policy Privacy</Link>
                <Link href= "#">Contacts</Link>
                <Link href= "#">FAQs</Link>
              </ul>
            </div>

            {/* socials */}

            <div className={styles.social}>

               <Button as='a' href = "#" circular color= "facebook" icon="facebook"/>
               <Button as='a' href = "#" circular color= "instagram" icon="instagram"/>
               <Button as='a' href = "#" circular color= "red" icon="github"/>
               <Button as='a' href = "#" circular color= "linkedin" icon="linkedin"/>

            </div>


        </div>


            <div className={styles.copyright}>
                    <span>Copyright ©  {year} titodev Game-Ecommerce Project All rights reserved</span>
            </div>


      </Container>
    </div>
  )
}

 
