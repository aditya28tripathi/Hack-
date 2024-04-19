"use client";
import Head from "next/head";
import Image from "next/image";

const SingleHotel = () => {
  return (
    <div className="w-7/12 mx-auto">
        <Image
         
          alt="hotel"
          width={2000}
          height={2000}
          className=" w-full h-large-box my-5 "
        />
        <div className=" ">
            <h3 className=" text-3xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, similique? Ipsum id quibusdam repudiandae suscipit.</h3>
            <p className=" text-xl my-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, necessitatibus! Nemo aspernatur, dolorum praesentium quisquam, quae sequi reprehenderit maxime nisi, itaque doloribus consequuntur laborum nam! Aliquid nam, officia commodi quia nisi a magni unde libero, tempora sequi doloremque quae sed.</p>

            
            <button className=" w-60 h-14 rounded-lg bg-blue-400 text-lg">
              Price : 4500
            </button>
            <p className=" text-3xl font-bold my-5">Facilities : </p>
            <ul className=" flex text-xl justify-between">
                <li>Pool</li>
                <li>Dogs</li>
                <li>Garden</li>
                <li>Loundry</li>
                <li>Cricket</li>
            </ul>
            <button className=" mt-3 w-60 h-14 rounded-lg bg-red-300 text-lg">
              Book Now
            </button>
        </div>
        </div>
  )
}

export default SingleHotel