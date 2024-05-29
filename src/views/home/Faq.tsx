import { Icons } from "../../components/icons";

export default function Faq() {
  const FAQs = [
    "I want to work part-time, is that possible",
    "How long are the average projects?",
    "How does the payment works?",
    "How much can I earn?",
    "I want to work part-time, is that possible",
    "How long are the average projects?",
    "How long are the average projects?",
    "How much can I earn?",
  ];

  return (
    <div className="w-full bg-PUNCH/Grey py-24">
      <h2 className="text-3xl lg:text-6xl leading-[54px] text-center mb-12">
        Frequently asked questions
      </h2>
      <div>
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className={`${
              index === 2 && "bg-[#E8E8E8]"
            } w-full h-36 lg:h-24 border lg:px-0 px-3 border-[#D6D6D6] flex justify-start items-start`}
          >
            {(index === 0 || index === 4) && (
              <div
                className={`${
                  index === 4 && "bg-[#E8E8E8]"
                } lg:w-[15%] flex justify-center items-center h-full border-r-2 border-[#D6D6D6]`}
              >
                <p className="hidden lg:block lg:text-[22px] leading-6 font-semibold text-PUNCH/Dark">
                  General
                </p>
              </div>
            )}
            {index === 4 && (
              <div className="hidden w-[25%] lg:flex justify-center items-center h-full border-r-2 border-[#D6D6D6]">
                <p className=" text-[22px] leading-6 font-semibold text-PUNCH/Dark">
                  Joining Process
                </p>
              </div>
            )}
            <div className="flex w-full h-full justify-center items-center">
              <p
                className={`${index === 0 && "!lg:-ml-44"} ${
                  index === 4 && "!lg:-ml-[24rem]"
                }  ${
                  index === 2 && "lg:ml-44"
                } text-[22px]  leading-6 text-PUNCH/Dark text-center`}
              >
                {faq}
              </p>
            </div>
            {index === 2 && (
              <div className="hidden lg:flex justify-center items-center h-full w-[15%]">
                <Icons.btnPlayYellow />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
