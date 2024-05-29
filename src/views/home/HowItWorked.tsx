import { app, groove, groove2, jason } from "../../assets";
import { Icons } from "../../components/icons";

export default function HowItWorked() {
  return (
    <div className="w-full bg-white relative lg:h-screen ">
      <div className="bg-PUNCH/Dark  h-full lg:clipPath flex py-24 lg:py-0 justify-between items-center">
        <div className="w-[90.2vw] mx-auto flex flex-col lg:flex-row justify-between gap-8 items-end">
          <div className="lg:w-[50%]">
            <p className="lg:w-[28.6vw] font-bold text-6xl text-white relative">
              How it worked for Jason{" "}
              <div className="w-[50px] h-[50px] rounded-full lg:top-24 top-44 right-[6.5rem] absolute">
                <img
                  src={jason}
                  className="w-full h-full rounded-full"
                  alt=""
                />
              </div>{" "}
              <span className="ml-16">at</span>
            </p>
            <img src={groove} className="mt-5" alt="" />

            <div className="mt-8">
              <p className="text-white text-[22px] leading-8 lg:w-[32vw]">
                Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since.
              </p>
            </div>

            <div className="flex mt-8 justify-start items-center gap-5">
              <div className="w-[50px] h-[50px] rounded-[20px] bg-white flex justify-center items-center">
                <Icons.btnPlay />
              </div>
              <div className="w-[50px] h-[50px] rounded-[20px] bg-white flex justify-center items-center">
                {" "}
                <Icons.btnPlay />
              </div>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <div className="flex justify-start gap-4 items-center">
              <div className="w-24 h-24 rounded-[40px] bg-PUNCH/Purple">
                <img
                  src={groove2}
                  className="w-full h-full rounded-[40px] object-cover"
                  alt=""
                />
              </div>
              <div>
                <p className="leading-10 mt-2 text-2xl lg:text-4xl font-semibold text-white">
                  Jason Makki
                </p>
                <p className="text-white mt-2 font-medium leading-[18px]">
                  Engineer at GROOVE
                </p>
                <p className="text-white mt-2 font-medium leading-[18px]">
                  San Francisco
                </p>
              </div>
            </div>

            <div className="lg:w-[35vw]">
              <p className="text-[22px] leading-8 text-white mt-12">
                Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they’ve been heavy hitters in our corner since.Zwilt enabled
                us to deliver on time and they’ve been heavy hitters.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-24 h-24 lg:w-44 lg:h-44 right-9 top-2">
        <img src={app} alt="" />
      </div>
    </div>
  );
}
