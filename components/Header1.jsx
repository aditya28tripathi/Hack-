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
  
  const headerStyle = {
    background: "linear-gradient(45deg, #040c19, #06142a, #071e3b)", // Gradient background with dark shades of blue
    color: "white", 
    borderBottom: "none", 
  };
  
  const gradientStyle = {
    backgroundImage: "linear-gradient(to right, #000000, #606060)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  };

  return (
    <div className="flex justify-between items-center h-24 px-10" style={headerStyle}>
      <h2 className="text-4xl font-bold mr-5 flex items-center">
        <span style={gradientStyle}>ArtFlow</span>
        <img src="art.png" alt="Logo" className="w-10 h-10 ml-2" />
      </h2>

      <div className="flex h-full">
        <Link href={'/Feature'}>
          <Block title={"Top Artists"} para={"Explore our top artists."} />
        </Link>
        

        <Link href={'/Learning'}> 
        <Block title={"Learning Kit"} para={"Start here!"} />

        </Link>
        
        <Link href={'/Contact'}>
          <Block title={"Contact Us"} />
        </Link>

        <div className="flex items-center ml-auto">
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
