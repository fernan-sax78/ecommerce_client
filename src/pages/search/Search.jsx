import BasicLayout from "@/layouts/BasicLayout/BasicLayout";
import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { size } from 'lodash';
import { GridGames , NoResult , Pagination , Separator } from "@/components/Shared";

export default function SearchPage(props) {

const { games , pagination , searchText } = props;
const hasResult = size(games)  > 0 ; 


  
  useEffect(() => {
    document.getElementById('search-game').focus();
  }, [])
  

  return (
     <>
    <BasicLayout relative isOpenSearch >
      <Container>
        <Separator height = {50} />
        <h2> Searching : {searchText}</h2>
         {hasResult ? (
            <>
           <GridGames games = {games}/>
           <Separator height = {30} /> 
           <Pagination 
           currentPage = {pagination.page}
           totalPages = {pagination.pageCount}
           />           
            </>
         ) : (
          <NoResult text = "No result the name of this game, try again"/>
         )}
         <Separator height = {100} />
      </Container>
    </BasicLayout>
     </>
  )
}


