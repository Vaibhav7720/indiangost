import React from "react";
import Image from "next/image";
import dp from "../../public/dp.jpg";

const ForumCard = () => {
  return (
    <div className="flex p-4 shadow-md rounded-lg gap-3">
      <div className="flex flex-row items-start justify-center">
        <Image
          className="object-cover"
          width={150}
          height={150}
          src={dp}
          alt="dp"
        ></Image>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="text-1xl font-semibold">Lorem Ipsum</h1>
          <p className="">3 min ago</p>
        </div>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex justify-between">
          <div>Like- 2</div>
          <div>Views- 2</div>
          <div>Com - 2</div>
          <div>Share- 2</div>
        </div>
      </div>
    </div>
  );
};

export default ForumCard;
