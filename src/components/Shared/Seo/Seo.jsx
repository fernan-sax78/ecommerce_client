import Head from "next/head";

export function Seo(props) {

    const { 
        description  = "Choose Your Favourites Games for playstation, xbox, nintendo , pc and more",
        title = "Home - Games Shop",
        name= "viewport"
        } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description}/>
      <meta  name={name} content="width=device-width, initial-scale=1" />
    </Head>
  )
}

 
