import Link from "next/link";

const SubCategory = ({ data }) => {
  return (
    <Link href={`/category/${data.cat_id}/sub_cat/${data.subcat_id}`}>
      <div className="flex flex-row my-2">
        <div className="bg-[#1FA45B] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
        <div className="flex flex-col justify-start items-start">
          <p className="text-title cursor-pointer font-semibold text-left text-sm ">
            {data.subcat_name_en}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SubCategory;
