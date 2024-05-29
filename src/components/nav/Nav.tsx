import { useState } from "react";
import { logo } from "../../assets";
import { navLinksArr } from "../../utils";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

export default function Nav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="w-[90.2vw] relative px-4 text-sm flex text-white justify-between items-center h-[3.75rem] mx-auto mt-9 rounded-[15px] bg-PUNCH/Nav">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="lg:flex hidden justify-center font-medium items-center gap-5">
        {navLinksArr.map((navLink) => (
          <Link to="/" className="">
            {navLink}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex justify-start items-center gap-5">
        <p>Log In</p>
        <Button
          className="bg-white text-PUNCH/Dark w-24 py-2 rounded-2xl"
          text="Join Now"
        />
      </div>

      {/* mobile */}
      <div>
        {showMobileMenu ? (
          <IoCloseSharp
            size={25}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
        ) : (
          <IoMenuSharp
            size={25}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
        )}
      </div>

      {showMobileMenu && (
        <div className="absolute w-[14rem] py-4 right-4 top-16 bg-PUNCH/Nav">
          <div className="flex flex-col  justify-center font-medium items-center gap-5">
            {navLinksArr.map((navLink) => (
              <Link to="/" className="">
                {navLink}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
