import CategoryTitle from "./CategoryTitle";
import SubCategory from "./SubCategory";
const Category = async ({ data }) => {
  const res = await fetch(
    "https://dua-backend-mu.vercel.app/api/v1/sub-category"
  );
  const sub_category = await res.json();
  // console.log(sub_category);
  const filterData = sub_category.filter((f) => f.cat_id == data.cat_id);
  // console.log(filterData);

  return (
    <div>
      <div className="collapse">
        <input type="checkbox" name="my-accordion-1" />
        <div className="collapse-title ">
          <div className="flex justify-between">
            <CategoryTitle data={data} />
            <div className="flex-end ml-12">
              <p className="text-lg lg:text-xl font-bold ">{data.no_of_dua}</p>
              <p className="text-gray-400">Duas</p>
            </div>
          </div>
        </div>
        <div className="collapse-content">
          <div className="ml-12 border-l-2 border-dotted my-2 border-[#1FA45B]">
            <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 ">
              {filterData.map((d) => (
                <SubCategory data={d} key={d.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
