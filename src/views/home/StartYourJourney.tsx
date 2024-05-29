import Banner from '../../components/banner/Banner';
import { Group1, Group2, Group3, one, three, two } from '../../assets';

export default function StartYourJourney() {
  return (
    <div className="w-[90.2vw] mx-auto py-16">
      <h1 className="text-3xl lg:text-6xl mb-16 lg:leading-[64px] text-center font-bold text-PUNCH/Dark">
        Start your journey today.
      </h1>
      <Banner
        largeTxt="Find your next star performer."
        smallTxt="Explore the vast Zwilt marketplace to find the candidate that meets your needs."
        img={Group1}
        number={1}
        number_={one}
      />
      <Banner
        largeTxt="Evaluate to your heart’s content."
        smallTxt="Assess the candidate through work history, transparent tests and video interviews."
        img={Group2}
        number={2}
        number_={two}
      />
      <Banner
        largeTxt="Start building your team."
        smallTxt="Onboard your candidate right away and start creating the next big thing."
        img={Group3}
        number={3}
        number_={three}
      />
    </div>
  );
}
