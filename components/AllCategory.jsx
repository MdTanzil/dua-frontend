import Category from "./Category";

const AllCategory = async () => {
  const res = await fetch(
    "https://dua-backend-mu.vercel.app/api/v1/categories"
  );
  const category = await res.json();

  return (
    <div>
      {category.map((data) => (
        <Category data={data} key={data.id} />
      ))}

      {/* <Category /> */}
    </div>
  );
};

export default AllCategory;
