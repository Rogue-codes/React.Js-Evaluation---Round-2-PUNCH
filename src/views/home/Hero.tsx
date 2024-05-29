import { Union, avatar } from '../../assets';
import Search from '../../components/search/Search';
import ProductsCard from '../../components/productsCard/ProductsCard';

export default function Hero() {
  return (
    <div className="lg:min-h-[50rem] min-h-[75rem] !z-50 relative lg:w-full w-[90vw] mx-auto">
      <div className="lg:w-[42rem] w-full mt-[8rem] mx-auto text-4xl lg:text-6xl text-center font-bold leading-[64px]">
        Finding the right fit
        <div className="hidden w-[68px] mt-2 h-[43px] lg:inline rounded-full absolute">
          <div className="w-[30px] -ml-1 bg-yellow-300 rounded-full absolute h-[30px] box first">
            <img
              src={avatar}
              className="w-full rounded-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[30px] absolute ml-[.28rem] rounded-full h-[30px] box center">
            <img
              src={avatar}
              className="w-full rounded-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="w-[30px] ml-3 bg-red-900 rounded-full absolute h-[30px] box third">
            <img
              src={avatar}
              className="w-full rounded-full h-full object-cover"
              alt=""
            />
          </div>
        </div>{" "}
        <span className="lg:ml-16"> has never been easier.</span>
      </div>

      <div className="w-full lg:w-[40vw] mt-4 mx-auto">
        <p className="text-center text-lg lg:text-[22px] leading-8 text-PUNCH/Dark">
          With our rigorous pre-vetting process, you'll never have to worry
          about finding the ideal candidate ever again.
        </p>
      </div>

      <Search />
      <ProductsCard />

      <div className="w-full !z-[9999] bg-white h-[8.3rem] absolute bottom-0 left-0">
        <img src={Union} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}
