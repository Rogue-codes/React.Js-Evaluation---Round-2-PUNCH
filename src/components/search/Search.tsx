import { Icons } from "../icons";

export default function Search() {
  return (
    <div className="lg:w-[40vw] h-[4.64rem] mt-4 border-[1.5px] rounded-[15px] mx-auto border-[#F0F0F0] relative">
      <input
        type="text"
        placeholder="Looking for design |"
        className="w-full h-full focus:outline-none bg-transparent rounded-[15px] px-5 text-md placeholder:text-md placeholder:font-semibold"
        name=""
        id=""
      />

      <button className="h-full absolute right-0 top-0 w-[74px] bg-PUNCH/Yellow flex justify-center items-center rounded-[15px]">
        <Icons.btnPlay />
      </button>
    </div>
  );
}
