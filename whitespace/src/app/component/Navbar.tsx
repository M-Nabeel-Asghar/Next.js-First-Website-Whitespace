import Image from "next/image";
import logo from "../assest/images/Logo.png"

export default function Navbar() {
  return (
      <div className="w-screen h-[80px] py-[16px] px-[100px] flex justify-between bg-[#043873] items-center">
            <div className="w-[191px] h-[34px] justify-between">
                <Image src={logo} alt="logo"/>
            </div>
            <div className=" flex items-center space-x-28 ">
                <ul className="flex items-center space-x-8">
                    <li>Product</li>
                    <li>Solution</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
                <button className="w-[116px] h-[50px] bg-[#FFE492]  py-2 px-6 rounded-lg text-stone-950">Login</button>
            </div>
      </div>    
  );
}
