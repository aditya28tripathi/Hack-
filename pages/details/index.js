"use client";
import Head from "next/head";
import Image from "next/image";
import Header1 from "@/components/Header1";
const SingleHotel = () => {
  return (
    <> 
      <section className="text-gray-400 body-font bg-gray-900">

    <Header1/> 
    
    <div className="w-7/12 mx-auto">
      <Head>
        {/* Add any necessary meta tags or other head elements */}
      </Head>
      <div className="relative w-full h-96">
       
      </div>
      <div className="">
        <h3 className="text-3xl font-bold">Bound by friendship, timeless in monochrome strokes of life.</h3>
        <p className="text-xl my-5 text-justify">In a striking black and white composition, a dog and a man stand side by side, their bond captured in the artistry of contrasts. The simplicity of monochrome hues emphasizes the timeless connection between human and canine, evoking emotions of companionship, loyalty, and the enduring beauty found in the simplest moments of life. This poignant portrayal invites viewers to contemplate the profound relationship between humans and animals.</p>
        <div className="flex-col">
          <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg mr-3 text-white">Price: 4500</button>
          <button className="w-60 h-14 rounded-lg bg-red-400 text-lg ml-3 text-white">Place Your Order</button>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default SingleHotel;
