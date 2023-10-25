import BasicLayout from "@/layouts/BasicLayout/BasicLayout";
import { Game } from "@/components/Game";
import { Separator , Seo } from "@/components/Shared";
import styles from './game.module.scss';


function GamePage(props) {

  const { game } = props ; 
   
  const wallpaper = game.attributes.wallpaper;

  return (
     <>
     <Seo title = {game.attributes.title} description = {game.attributes.summary} />
    <BasicLayout>
      <Game.HeaderWallpaper image = { wallpaper.data.attributes.url }/>
      <Game.Panel gameId = {game.id} game = {game.attributes}/>
      
      
      {/* <Separator  height = {50} />  */}

      <Game.Info game = {game.attributes}/>

      <Separator  height = {30} className = {styles.responsive}/> 

      <Game.Media 
      title = {game.attributes.title}
      video = {game.attributes.video} 
      gallery = {game.attributes.gallery}
      />

      <Separator  height = {50} /> 
      
    </BasicLayout>     
     </>
  )
}

export default GamePage;
