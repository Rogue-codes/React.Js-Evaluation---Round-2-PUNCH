
interface IMarketPlaceCard{
    title:string;
    logosArr:{
        logo: string;
        name:string;
    }[]
}
export default function MarketPlaceCard({logosArr,title}:IMarketPlaceCard) {
  return (
    <div className='lg:w-[50.6vw] w-full p-4 lg:h-[14rem] bg-white rounded-[7px]'>
        <h2 className='text-md font-medium text-PUNCH/Dark'>{title}</h2>
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-start mt-4">
            {
                logosArr.map((logo,index)=>(
                    <div key={index} className="my-3 lg:my-0">
                        <div className='lg:w-[96px] w-[20px] h-[20px] mx-auto flex justify-center items-center lg:h-[96px] rounded-full bg-PUNCH/Grey'>
                            <img src={logo.logo} alt="" />
                        </div>
                        <p className='w-[81px] text-center text-xs lg:text-sm font-semibold leading-[18px] mt-3'>{logo.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
