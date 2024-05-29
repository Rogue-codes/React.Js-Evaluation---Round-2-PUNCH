import { Icons } from "../../components/icons";

export default function EnsureGoodHands() {
  const stepsArr = [
    {
      icon: <Icons.playVideo />,
      text: "Resume Screening",
    },
    {
      icon: <Icons.playVideoWhite />,
      text: "Video Interview",
    },
    {
      icon: <Icons.playVideo />,
      text: "Technical Evaluation",
    },
    {
      icon: <Icons.playVideo />,
      text: "Application Review",
    },
    {
      icon: <Icons.playVideo />,
      text: "Lets get to work",
    },
  ];
  return (
    <div className="w-[90.2vw] mx-auto py-24">
      <h2 className="lg:text-6xl text-3xl lg:leading-[64px] font-bold text-PUNCH/Dark lg:w-[40vw]">
        How we ensure you’re in good hands.
      </h2>
      <p className="text-[#1E1515] leading-8 lg:w-[45vw] text-[22px] mt-8">
        With our comprehensive screening process, we hand-pick highly skilled
        candidates so you can onboard them in a matter of days.
      </p>

      <div className="w-full">
        {stepsArr.map((step, index) => (
          <div className={`${index===1 && "shadow"} border border-[#F0F0F0] mt-2  lg:w-[40vw]  rounded-[7px]`}>
            <div
              className="flex px-4 h-20 items-center justify-start gap-8"
              key={index}
            >
              <div
                className={`${
                  index === 1 ? "bg-[#8BA4FD]" : " bg-[#ECECEC]"
                } w-[57px] flex justify-center items-center h-[57px] rounded-full`}
              >
                {step.icon}
              </div>
              <p>
                <span className="font-bold">Step {index + 1}:</span> {step.text}
              </p>
            </div>
            {index === 1 && (
              <p className="px-4 pb-4 text-PUNCH/Dark leading-[26px]">
                Candidates are assessed through skill based questions in a
                virtual setting. Allowing you to gauge personality and cultural
                fit.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
