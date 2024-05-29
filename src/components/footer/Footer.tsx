import { line, logo } from "../../assets";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full py-24 pb-4 bg-gradient-custom">
      <div className="w-[90.2vw] mx-auto pb-44 flex flex-col lg:flex-row justify-between lg:items-start items-center">
        <div className="">
          <div className="lg:w-[20vw] text-white">
            <div>
              <img src={logo} alt="" />
            </div>
            <p className="text-sm leading-[22px] mt-8">
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>

            <div className="w-full mt-12">
              <p className="text-sm text-white leading-8">
                LINKS AND REDIRECTS
              </p>
              <div className="w-full flex justify-center items-center gap-6">
                <button className="w-40 py-3 text-white bg-PUNCH/Dark rounded-[20.27px]">
                  Hire now
                </button>

                <button className="w-40 py-3 text-white bg-PUNCH/Dark rounded-[20.27px]">
                  Apply now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[61vw] mt-12 lg:mt-0">
          <h1 className="w-full text-2xl lg:text-6xl font-semibold text-white lg:leading-[64px]">
            Connecting the right people to the right businesses.
          </h1>

          <div className="flex flex-col lg:flex-row justify-between items-start mt-16">
            <ul className="text-white text-[18px]leading-6 font-medium">
              <li className="text-sm font-semibold leading-8 opacity-40">
                PLATFORM
              </li>
              <li className="mt-3 relative">
                Find Work
                <div className="absolute">
                  <img src={line} className="mt-1" alt="" />
                </div>
              </li>
              <li className="mt-4">Find Talent</li>
              <li className="mt-3">Categories</li>
              <li className="mt-3">About Us</li>
            </ul>

            <ul className="text-white text-[18px] mt-8 lg:mt-0  leading-6 font-medium">
              <li className="text-sm font-semibold leading-8 opacity-40">
                CATEGORIES
              </li>
              <li className="mt-3">Data Science</li>
              <li className="mt-3">IT & Networking</li>
              <li className="mt-3">Web & Mobile</li>
            </ul>

            <ul className="text-white text-[18px] mt-8 lg:mt-0  leading-6 font-medium">
              <li className="text-sm font-semibold leading-8 opacity-40">
                HELP
              </li>
              <li className="mt-3">FAQ’s</li>
              <li className="mt-3">Contact Us</li>
            </ul>

            <ul className="text-white text-[18px] mt-8 lg:mt-0  leading-6 font-medium">
              <li className="text-sm font-semibold leading-8 opacity-40">
                GET IN TOUCH @
              </li>
              <li className="mt-3">Instagram</li>
              <li className="mt-3">LinkedIn</li>
              <li className="mt-3">Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border-t">
        <div className="w-[90.2vw] mx-auto  py-4 flex flex-col lg:flex-row justify-between items-center">
          <div>
            <p className="font-medium leading-8 text-white">
              All rights reserved by Zwilt
            </p>
          </div>
          <div className="flex mt-5 lg:mt-0 justify-start items-center gap-12 text-white">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
