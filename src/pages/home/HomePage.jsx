import BasicLayout from "@/layouts/BasicLayout/BasicLayout";
import { Home } from "@/components/Home";
import { Separator , BarTrust , BannerAd , Seo} from "@/components/Shared";
import { Container } from "semantic-ui-react";
import { useAuth , useCart } from "@/hooks";



const platformsId = {
  playstation : 1,
  xbox : 2 ,
  nintendo : 3,
  pc : 4
}
 


function HomePage() {

const { user } = useAuth();



  return (
    <>

    <Seo />
    <BasicLayout>
      <Home.BannerLastGamePublished />

      <Separator height = {100} />

     <Container>
       <Home.LatestGames title = "The latest games in our Shop" />
     </Container>


     <Separator height = {100} />

     <BarTrust />

     <Separator height = {100} />


    <Container>

    <Home.LatestGames 
    title = "Some PlayStation Games"
    limit = {3}
    platformId = {platformsId.playstation}
    />

    <Separator height = {50} />
    
    </Container>


     <Separator height = {100} />


     <BannerAd 
     title = "Create an Account and take a better prices"
     subtitle = "Compare with other games and choose your favorite"
     btnTitle = "Create an Account Now"
     btnLink = {user ? '/account' : '/join/sign-up'}
     image = "/images/img01.png"
     />


     <Separator height = {100} />

   <Container>

    <Home.LatestGames 
    title = "Some Xbox Games"
    limit = {3}
    platformId = {platformsId.xbox}
    />

   </Container>

   <Separator height = {100} />


    </BasicLayout>

    </>
  )
}

export default HomePage
