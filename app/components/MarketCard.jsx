import Image from "next/image";
import land from "../../public/landd.jpg";
const MarketCard = () => {
  return (
    <div className="flex flex-col gap-3 p-2 h-[20%] shadow-lg">
      <div className="flex">
        <Image src={land} alt="dp" className="w-full h-44"></Image>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h1 className="text-1xl font-semibold">Lorem Ipsum</h1>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
};

export default MarketCard;
