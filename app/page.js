import Dua from "@/components/Dua";

export default async function Home() {
  const res = await fetch("https://dua-backend-mu.vercel.app/api/v1/dua");
  let data = await res.json();
  data = data.slice(0, 20);
  return (
    <div className="">
      <h4 className="text-md font-semibold pl-4 py-2 bg-white">
        <span className="text-[#3baf70]">Section</span>: Dua
      </h4>
      {data.map((d) => (
        <Dua data={d} key={d.id} />
      ))}
    </div>
  );
}
