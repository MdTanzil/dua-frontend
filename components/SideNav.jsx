import logo from "@/public/images/dua-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { BiDonateHeart } from "react-icons/bi";
import { CiGrid41, CiHome } from "react-icons/ci";
import {
  IoBookOutline,
  IoBookmarkOutline,
  IoBulbOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";

const SideNav = () => {
  return (
    <>
      <div className="pt-7 mb-10   container">
        <Image
          className="h-13 w-16 mx-auto drop-shadow-primary xl:mb-0 cursor-pointer"
          src={logo}
          alt="logo"
        ></Image>
      </div>
      <Link className="p-2 rounded-full bg-[#e8f0f5]" href={"/"}>
        <CiHome
          className="text-gray-500 font-semibold"
          size={"1.5rem"}
        ></CiHome>
      </Link>
      <Link className="p-2 rounded-full bg-[#e8f0f5]" href={"/"}>
        <CiGrid41
          className="text-gray-500 font-semibold"
          size={"1.5rem"}
        ></CiGrid41>
      </Link>
      <Link className="p-2 rounded-full bg-[#e8f0f5]" href={"/"}>
        <IoBulbOutline
          className="text-gray-500 font-semibold"
          size={"1.5rem"}
        ></IoBulbOutline>
      </Link>
      <Link className="p-2 rounded-full bg-[#e8f0f5]" href={"/"}>
        <IoBookmarkOutline
          className="text-gray-500 font-semibold"
          size={"1.5rem"}
        ></IoBookmarkOutline>
      </Link>
      <Link className="p-2 rounded-full bg-[#e8f0f5]" href={"/"}>
        <TbMoneybag
          className="text-gray-500 font-semibold"
          size={"1.5rem"}
        ></TbMoneybag>
      </Link>
      <Link className="p-2 rounded-full bg-[#e8f0f5]" href={"/"}>
        <IoChatbubblesOutline
          className="text-gray-500 font-semibold"
          size={"1.5rem"}
        ></IoChatbubblesOutline>
      </Link>
      <Link className="p-2 rounded-full bg-[#e8f0f5]" href={"/"}>
        <IoBookOutline
          className="text-gray-500 font-semibold"
          size={"1.5rem"}
        ></IoBookOutline>
      </Link>
      <div>
        <button className="mt-6   mb-28 p-4 rounded text-center bg-[#1FA45B] ">
          <BiDonateHeart size={"1.5rem"} className="text-white"></BiDonateHeart>
        </button>
      </div>
    </>
  );
};
export default SideNav;
