import CustomButton from "./button/CustomButton";

interface ISlide {
  listArr: string[];
  title: string;
  optionColor: "black" | "yellow" | "green";
  img: string;
}
export default function Slides({ listArr, title, optionColor, img }: ISlide) {
  return (
    <div className="min-w-[80vw] bg-white shadow-md rounded-[20px] flex justify-between items-center h-[80%] p-8">
      <div>
        <h1 className="w-[32.2vw] text-3xl lg:text-6xl leading-[64px] font-bold">
          {title}
        </h1>
        <div className="mb-12">
          {listArr.map((list, index) => (
            <div
              key={index}
              className="flex justify-start items-center mt-5 gap-4"
            >
              <div
                className={`w-[18px] h-[7px] ${
                  optionColor === "black"
                    ? "bg-[#50589F]"
                    : optionColor === "yellow"
                    ? "bg-PUNCH/Yellow"
                    : "bg-PUNCH/Light-Green"
                }`}
              ></div>
              <p
                className="text-[22px] leading-8 text-[#202229]"
              >
                {list}
              </p>
            </div>
          ))}
        </div>
        <CustomButton/>
      </div>

      <div className="w-[46vw] h-[36rem]">
        <img src={img} className="w-full h-full" alt="" />
      </div>
    </div>
  );
}
