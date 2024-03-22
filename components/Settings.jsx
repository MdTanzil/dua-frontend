import { IoLanguageOutline } from "react-icons/io5";

import { CiGrid41, CiSettings } from "react-icons/ci";
const Settings = () => {
  return (
    <div className="rounded-t-lg bg-white px-4">
      <h3 className=" text-xl font-semibold text-center pt-4 pb-6">
        {" "}
        Settings
      </h3>
      <div className="flex items-center p-2 mb-2 bg-[#f7f8fa] rounded-lg">
        <IoLanguageOutline
          className="bg-[#e8f0f5] rounded-full text-gray-500  p-2 mr-5"
          size={40}
        />
        <p className="text-gray-500 text-start">Language Settings</p>
      </div>
      <div className="flex items-center p-2 mb-2 bg-[#f7f8fa]  rounded-lg">
        <CiSettings
          className="bg-[#e8f0f5] rounded-full text-gray-500  p-2 mr-5"
          size={40}
        />
        <p className="text-gray-500 text-start">General Settings</p>
      </div>
      <div className="flex items-center p-2 mb-2 bg-[#f7f8fa]  rounded-lg">
        <CiGrid41
          className="bg-[#e8f0f5] rounded-full text-gray-500  p-2 mr-5"
          size={40}
        />
        <p className="text-gray-500 text-start">Font Settings</p>
      </div>
      <div className="flex items-center p-2 mb-2 bg-[#f7f8fa]  rounded-lg">
        <CiGrid41
          className="bg-[#e8f0f5] rounded-full text-gray-500  p-2 mr-5"
          size={40}
        />
        <p className="text-gray-500 text-start">Apperarance Settings</p>
      </div>
    </div>
  );
};

export default Settings;
