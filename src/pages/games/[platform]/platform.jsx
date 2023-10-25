import { Container } from "semantic-ui-react";
import { size } from 'lodash';
import BasicLayout from "@/layouts/BasicLayout/BasicLayout";
import { GridGames , Separator , NoResult , Pagination} from "@/components/Shared";
import { Seo } from "@/components/Shared";



export default function PlatformPage(props) {
    
  const {games , platform , pagination } = props;
  const hasProducts = size(games) > 0;


  return (
    <>
    <Seo title = {platform.attributes.title} />
     <BasicLayout relative >
        <Container >
            <Separator height = {50} />

            <h2>{platform.attributes.title}</h2>

            {hasProducts ? (
                <>
                 <GridGames games = {games}/>
                 <Separator height = {30} />
                 <Pagination currentPage = {pagination.page} totalPages = {pagination.pageCount}/>
                </>
            ) : (
                <NoResult text = {`The Category ${platform.attributes.title} haven't products yet, we apologise for inconvenience...`}/>
            )}

            <Separator height = {100} />
        </Container>
     </BasicLayout>
    </>
  )
}


