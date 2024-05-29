import CategoriesCard from "../../components/categories/CategoriesCard";
import { Icons } from "../../components/icons";
import MarketPlaceCard from "../../components/marketPlaceCard.tsx/MarketPlaceCard";
import {
  Vector,
  ai,
  camera,
  data,
  dot,
  figma,
  magento,
  ps,
  shopify,
  unreal,
  webflow,
} from "../../assets";
import CustomButton from "../../components/button/CustomButton";

export default function MarketPlace() {
  const categoriesArr = [
    {
      icon: <Icons.score />,
      text: "989 Skills",
    },
    {
      icon: <Icons.categories />,
      text: "45 Sub-Categories",
    },
    {
      icon: <Icons.profile />,
      text: "1011 Profiles",
    },
  ];

  const logosArr = [
    {
      logo: shopify,
      name: "Shopify Developer",
    },
    {
      logo: magento,
      name: "Magento Developer",
    },
    {
      logo: data,
      name: "Data Scientist",
    },
    {
      logo: webflow,
      name: "Webflow Developer",
    },
    {
      logo: dot,
      name: "Dot Net Developer",
    },
    {
      logo: Vector,
      name: "",
    },
  ];

  const logosArrTwo = [
    {
      logo: Vector,
      name: "",
    },
    {
      logo: figma,
      name: "UX Designer",
    },
    {
      logo: ps,
      name: "Graphics Designer",
    },
    {
      logo: ai,
      name: "Illustration Artist",
    },
    {
      logo: unreal,
      name: "Unreal Engine",
    },
    {
      logo: camera,
      name: "Cinema 4D",
    },
  ];
  return (
    <div className="w-full bg-PUNCH/Light h-full pt-44 lg:pt-64 pb-24 !-z-50 -mt-24">
      <div className="lg:w-[68vw] mx-auto">
        <h1 className="lg:text-6xl text-3xl font-bold text-PUNCH/Dark text-left pl-4 lg:pl-0 lg:text-center leading-[64px]">
          Your one-stop marketplace for finding the talent your business needs.
        </h1>
      </div>

      <div className="w-[90.2vw] lg:mt-24 mt-8 mx-auto flex flex-col lg:flex-row justify-between items-center">
        <CategoriesCard
          headerText="Find Dev and IT professionals to scale your business."
          categoriesArr={categoriesArr}
        />

        <MarketPlaceCard title="IT & Development" logosArr={logosArr} />
      </div>

      <div className="w-[90.2vw] mt-12 mx-auto flex flex-col lg:flex-row justify-between items-center">
        <CategoriesCard
          headerText="Explore Creative individuals with a keen eye for detail.  "
          categoriesArr={categoriesArr}
        />

        <MarketPlaceCard title="Design & Creative" logosArr={logosArrTwo} />
      </div>
      <div className="w-[90.2vw] mt-8 lg:mt-2 mx-auto flex justify-between items-center">
        <CustomButton />
      </div>
    </div>
  );
}
