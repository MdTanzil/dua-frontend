import Dua from "@/components/Dua";

const Subcat = async ({ params }) => {
  const { cat_id, subcat_id } = params;
  // console.log(cat_id, subcat_id);
  const res = await fetch(
    `https://dua-backend-mu.vercel.app/api/v1/category/${cat_id}/sub_cat/${subcat_id}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <div>
      {data?.map((d) => (
        <Dua key={d.id} data={d}></Dua>
      ))}
    </div>
  );
};

export default Subcat;
