import Eyes from "@/components/Eyes";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Header3 from "@/components/Header3";


import Featured from '@/components/Featured';

import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          ArtFlow : India`s Best Online VirtualGallery Site For Artists.
        </title>
        

       
      </Head>
     
      <Header1 />
     
      <Header3/>
      
     
      
        
        <Eyes/>
        <Featured/>
        
      
      <Footer/>
      
    </div>
   
  );
};

export default Home;