import MarketCard from "../components/MarketCard";
const Stories = () => {
  return (
    <div className="flex flex-col gap-4 w-[60%]">
      <h1 className="text-2xl font-semibold p-2 bg-slate-200 uppercase text-red-500 inline rounded-lg max-w-fit">
        Market Stories
      </h1>
      <MarketCard></MarketCard>
    </div>
  );
};

export default Stories;
