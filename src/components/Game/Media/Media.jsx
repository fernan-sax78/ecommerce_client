import { Video } from "./Video";
import { Container } from "semantic-ui-react";
import { Separator } from "@/components/Shared";
import { Gallery } from "./Gallery";

export function Media(props) {

  const { video , gallery , title} = props;

  return (
    <Container>

      <h2> Trailer of : {title}</h2>
      
      <Separator height = {30} />

      <Video video = {video}/>

      <Separator height = {30} />

      <Gallery gallery = {gallery}/>

    </Container>
  )
}


