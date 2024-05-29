import { useState } from "react";
import { Icons } from "../icons";

export default function CustomButton() {
  const [animate, setAnimate] = useState(false);
  return (
    <div
      className="flex justify-start items-center gap-5 cursor-pointer"
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}
    >
      <div
        className={`${
          animate && "w-[15rem] transition-all flex !justify-end pr-5"
        } w-[74px] flex justify-center items-center h-[74px] rounded-[30px] !bg-PUNCH/Dark`}
      >
        <Icons.btnPlayWhite />
      </div>
      <p className={`${animate && "-translate-x-[158%] text-white transition-all"} text-[22px] font-medium `}>Explore More</p>
    </div>
  );
}
