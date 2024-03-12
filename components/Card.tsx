import Image from "next/image";

type carProp = {
  model: string;
  image: string;
  price: number;
};

function Card({ model, image, price }: carProp) {
  return (
    <div className="h-80 w-80 hover:shadow-xl rounded border-[1px] dark:border-neutral-800 shadow-lg dark:shadow-md dark:border-[0px] dark:shadow-white ">
      <div className="h-2/3 p-2 rounded">
        <Image
          className="object-cover h-full w-full rounded border-[1px]"
          src={
            "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg"
          }
          alt="car"
          width={40}
          height={40}
        ></Image>
      </div>
      <div className="h-1/3 ">
        <div className=" font-thin text-xl p-2 px-5 ">{model}</div>
        <div className="font-bold text-3xl p-2 px-5">
          ₹{price}
          <span className="font-thin text-xl">/day</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
