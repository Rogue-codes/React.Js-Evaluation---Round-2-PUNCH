import Slides from "../../components/Slides";
import { slide1, slide2, slide3 } from "../../assets";

export default function WhyChooseZwilt() {
  const optionArr1 = [
    "We pick the best for you to select.",
    "Thousands of vetted candidates in dozens of categories.",
    "Risk-free resource swapping for the best fit.",
  ];

  const optionArr2 = [
    "Easy and transparent one-to-one chat with candidates.",
    "Simple and convenient payment methods.",
    "Review past ratings.",
  ];

  const optionArr3 = [
    "Track your staff activity down to every minute with screenshots.",
    "Comprehensive timesheet data to process payments.",
    "Create projects to organize and assign tasks more effectively.",
  ];
  return (
    <div className="w-full bg-PUNCH/Light hidden lg:block">
      <div className="w-[90.2vw] mx-auto  lg:h-screen  overflow-x-scroll  flex justify-between gap-12 items-center ">
        <div className="lg:!min-w-[26.3vw] h-[18.3rem] ">
          <h2 className="text-2xl lg:text-6xl leading-[64px] text-PUNCH/Dark font-bold">Why choose Zwilt?</h2>
          <p className="leading-8 mt-5 text-[22px] text-[#202229]">
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </p>
        </div>
        <div className="h-full flex justify-center gap-5 items-center">
          <Slides
            title="Onboard without the risk."
            listArr={optionArr1}
            optionColor="black"
            img={slide1}
          />
          <Slides
            title="An open book."
            listArr={optionArr2}
            optionColor="yellow"
            img={slide3}
          />
          <Slides
            title="Stay in the loop."
            listArr={optionArr3}
            optionColor="green"
            img={slide2}
          />
        </div>
      </div>
    </div>
  );
}
