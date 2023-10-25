import ReactPlayer from 'react-player';
import styles from './video.module.scss';


export function Video(props) {
    const { video } = props;
  return (
    <div>
     <ReactPlayer 
     url = {video} 
     className = {styles.video} 
     width= "100%" 
     height={634} 
     controls = {true}
     />
    </div>
  )
}

 