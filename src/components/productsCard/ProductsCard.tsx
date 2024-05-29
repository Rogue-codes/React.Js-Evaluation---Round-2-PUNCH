import { useState } from "react";

export default function ProductsCard() {
    const [activeTab,setActiveTab] = useState(0)
    const tabs = ["IT & Development", "Design and Creative"];

  return (
    <div className="lg:w-[57.5vw] p-5 mt-8 bg-PUNCH/Grey mx-auto rounded-primary">
      <div className="lg:w-[24.4rem] flex justify-between mx-auto bg-transparent">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab ? "bg-PUNCH/Light-Green" : ""
            } lg:w-48 w-[48%] h-11 text-xs rounded-primary`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-8 px-8 gap-12 items-center flex-wrap ">
        <ul className="text-[#959595] text-center lg:text-left">
          <li>Python Developer</li>
          <li className="mt-3">Shopify Developer</li>
          <li className="mt-3 text-PUNCH/Dark font-semibold">
            MERN Stack Developer
          </li>
          <li className="mt-3">Full Stack Developer</li>
        </ul>

        <ul className="text-[#959595] text-center lg:text-left">
          <li>Data Scientist</li>
          <li className="mt-3">Front End Developer</li>
          <li className="mt-3">Shopify Developer</li>
          <li className="mt-3">Python Developer</li>
        </ul>

        <ul className="text-[#959595] text-center lg:text-left">
          <li>Shopify Developer</li>
          <li className="mt-3">Python Developerr</li>
          <li className="mt-3">Full Stack Developer</li>
          <li className="mt-3 text-PUNCH/Dark font-semibold">Explore More</li>
        </ul>
      </div>
    </div>
  );
}
