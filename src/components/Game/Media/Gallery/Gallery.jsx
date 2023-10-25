import { useState } from 'react';
import styles from './gallery.module.scss';
import { Image } from 'semantic-ui-react';
import { map } from 'lodash';
import { FullModal } from '@/components/Shared';
import Slider from 'react-slick';


export function Gallery(props) {

    const { gallery } = props;

    const myGallery = gallery.data;

    const [show, setShow] = useState(false)

    const openClose = () => setShow((preState) => !preState);

    const galleryClone = [...gallery.data];
    const principalImg = galleryClone.shift();

    const settings = {
      dots : true,
      dotsClass : styles.dots,
      infinite : true,
      slidersToShow : 1,
      slidesToScroll : 1,
      arrows : false,
      customPaging : function(index){
         return <Image src = {myGallery[index].attributes.url}/>
      }
    }

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.principal}>
            <Image src = {principalImg.attributes.url} onClick = {openClose}/>
        </div>

        <div className={styles.grid}>
           {map(galleryClone, (img) => (
            <div key={img.id}>
                <Image src = {img.attributes.url} onClick = {openClose}/>
            </div>
           ))}
        </div>
      </div>

      <FullModal show = {show} onClose = {openClose}>
        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {map(myGallery , (img) => (
                <div key={img.id}>
                  <Image src = {img.attributes.url} />
                </div>
            ))}
          </Slider>
        </div>
      </FullModal>
    </>
  )
}

