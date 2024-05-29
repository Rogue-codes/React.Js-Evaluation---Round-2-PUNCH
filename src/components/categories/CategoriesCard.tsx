

interface ICategoriesCard {
  headerText: string;
  categoriesArr: {
    icon: JSX.Element;
    text: string;
  }[];
}
export default function CategoriesCard({
  categoriesArr,
  headerText,
}: ICategoriesCard) {
  return (
    <div className="lg:w-[30%]">
      <h2 className="lg:text-xl text-lg font-medium text-PUNCH/Dark">{headerText}</h2>
      <div className="flex justify-between  mt-5 items-center flex-wrap">
        {categoriesArr.map((category, index) => (
          <div
            className="flex w-[48%] mb-3 justify-start items-center gap-3"
            key={index}
          >
            <div className="w-8 h-8 flex justify-center items-center rounded-full">
              {category.icon}
            </div>
            <p>{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
