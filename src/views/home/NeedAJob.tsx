import { Icons } from "../../components/icons";

export default function NeedAJob() {
  return (
    <div className="bg-PUNCH/Grey">
      <div className="clipPath_3 h-screen bg-PUNCH/Dark p-12">
        <div className="clipPath_4 mt-16 bg-[#525AA0] w-full h-full flex flex-col items-center justify-center gap-5 -pt-24">
          <h2 className="w-[80%] lg:w-[47vw] text-white text-xl lg:text-6xl font-bold lg:leading-[64px] text-center -mt-12">
            Need a job done, and done well? Get started
          </h2>
          <div className="w-[73px] h-[73px] bg-black flex justify-center items-center rounded-[29.89px]">
            <Icons.btnPlayWhiteDown/>
          </div>
        </div>
      </div>
    </div>
  );
} 
