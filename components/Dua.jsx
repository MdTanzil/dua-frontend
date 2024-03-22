import img from "@/public/images/duacard.svg";
import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoCopyOutline, IoShareSocialOutline } from "react-icons/io5";
import { PiLightbulbFilament } from "react-icons/pi";
import AudioPlay from "./AudioPlay";
const Dua = ({ data }) => {
  return (
    <div className="p-6 bg-white">
      <div className=" flex flex-row justify-start items-center">
        <Image src={img} alt="duacard" />
        <p className="text-lg ml-4 font-semibold text-[#3BAF70]">
          {data.dua_id}. {data.dua_name_en}
        </p>
      </div>
      <p className="my-6 text-lg text-justify">{data.top_en}</p>
      <p className="my-6 text-2xl text-right">{data.dua_arabic}</p>
      {data.transliteration_en && (
        <p className="my-6 text-lg text-justify italic ">
          {" "}
          <span className="font-bold"> Transliteration: </span>
          {data.transliteration_en}
        </p>
      )}
      {data.translation_en && (
        <p className="my-6 text-lg text-justify  ">
          {" "}
          <span className="font-bold"> Translation: </span>
          {data.translation_en}
        </p>
      )}

      <div>
        <p className="font-bold text-lg text-[#3BAF70]">Reference:</p>
        <p className="font-medium text-lg ">{data.refference_en}</p>
      </div>

      <div className="flex mt-5 justify-between items-center">
        <div>{data.audio && <AudioPlay audioUrl={data.audio} />}</div>
        <div className=" flex justify-end gap-5">
          <IoCopyOutline size={20} />
          <CiBookmark size={20} />
          <PiLightbulbFilament size={20} />
          <IoShareSocialOutline size={20} />
          <IoIosInformationCircleOutline size={20} />
        </div>
      </div>
    </div>
  );
};

export default Dua;
