
interface IBanner{
  largeTxt:string
  smallTxt:string
  img:string;
  number:number;
  number_:string;
}
export default function Banner({img,largeTxt,smallTxt,number,number_}:IBanner) {
  return (
    <div className="w-full flex justify-between items-center mt-2">
      <div
        className={`clipPath ${
          number === 1
            ? "bg-[#EDEFFF]"
            : number === 2
            ? "bg-[#fdde8b]"
            : "bg-PUNCH/Grey"
        } px-12 flex flex-col lg:flex-row justify-between items-center w-full h-[34rem] lg:h-[24rem]`}
      >
        <div className="flex justify-start items-start gap-5 mt-7 lg:mt-0">
          <div className="lg:w-[51px] w-14 h-14 lg:h-[83px]">
            <img src={number_} alt="" />
          </div>
          <div>
            <h2 className="font-semibold text-lg lg:text-[34px] leading-[44px] text-PUNCH/Dark lg:w-[31vw]">
              {largeTxt}
            </h2>
            <p className="text-PUNCH/Dark leading-6 lg:w-[28.3vw] mt-4">
              {smallTxt}
            </p>
          </div>
        </div>

        <div className="lg:w-[32.3vw] h-full">
          <img src={img} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}
