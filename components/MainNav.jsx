import { CiSearch } from "react-icons/ci";
import profileImg  from "@/public/images/profile.svg"
import Image from "next/image";
const MainNav = () => {
  return (
    <div className="flex justify-between items-center mt-5 ml-5">
      <div>
        <h1 className="text-2xl font-semibold">Duas Page</h1>
      </div>
      <div className="flex justify-end items-center">
        <div>
          <form
            action=""
            className="flex justify-between relative  w-96"
          >
            <input
              className=" placeholder:text-mute-grey  block placeholder: placeholder:text-sm bg-white sm-max:bg-gray-200 md:bg-gray-100 lg:bg-gray-100 w-full rounded-md py-3 px-4 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm sm-max:dark:bg-dark-bg-lite "
              type="text"
              placeholder="Search by dua name"
            />
            <button className="bg-gray-200 rounded-md justify-center top-1 cursor-pointer  absolute right-1 text-gray-400 py-2 px-4">
              <CiSearch className="text-lg font-bold" />
            </button>
          </form>
        </div>
        <div className="ml-48 mr-6">
            <Image src={profileImg} alt='progileImg' />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
