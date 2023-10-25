export { default } from './game';
import { Game } from "@/api";



export async function getServerSideProps(context) {

   const { params : { game }} = context;


   const gameCtrl = new Game();

   const response = await gameCtrl.getGameBySlug( game );


    return {
        props : {
            game : response.data[0],
        }
    }

}