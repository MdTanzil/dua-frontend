import img from "@/public/images/duacard.svg";
import Image from "next/image";

const CategoryTitle = ({ data }) => {
  return (
    <div className="flex md:gap-1 lg:gap-3">
      <Image src={img} alt="duaimage" />
      <p className="flex flex-col">
        <button className="text-[#1FA45B] text-left text-lg font-semibold ">
          {data.cat_name_en}
        </button>
        <span className="text-gray-400 text-md">
          {" "}
          Subcategory: {data.no_of_subcat}
        </span>
      </p>
    </div>
  );
};

export default CategoryTitle;
