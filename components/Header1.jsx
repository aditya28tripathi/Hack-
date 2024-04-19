import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };

  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
      <h2 className="text-4xl font-bold mr-5">
        <span className="bg-gradient-to-r from-black to-gray-600 text-transparent bg-clip-text">
          ArtFlow
        </span>
      </h2>

      <div className="h-full flex">
        <Block title={"Become a member"} para={"Additional 0% off on stays."} />
        
        <Link href={'/Feature'}>
          <Block
            title={"Top Artists"}
            para={"Explore our top artists."}
           
          />
          
        </Link>
        <Block title={"List your property"} para={"Start earning in 30 min."} />
        <Link href={'/Contact'}>
        <Block title={"Contact Us"}  /> 
        </Link>
        <div className="flex items-center px-3">
          <Image
            src={"/login.png"}
            alt="demo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full mr-5"
          />

          {auth ? (
            <h3 className="font-bold cursor-pointer" onClick={handleLogout}>
              Logout
            </h3>
          ) : (
            <Link href={"/login"} className="font-bold">
              Login / Signup
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
