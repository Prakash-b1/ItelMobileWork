/* eslint-disable react-refresh/only-export-components */
import Section1Entertainment from "./components/Section1Entertainment";
import Section2DisplayWithDynamicIsland from "./components/Section2DisplayWithDynamicIsland";
import Section3CamersSpecs from "./components/Section3CamersSpecs";
import Section4Securitypage from "./components/Section4Securitypage";
import Section5batterySpecs from "./components/Section5batterySpecs";
import section6Img from "../../assets/A70/Background/phonesbg.webp"
import Section7PhonesSpecs from "./components/Section7PhonesSpecs";

const A70 = () => {
  return (
    <div className="content">
      <div
        className="md:rounded-[64px] rounded-[16px]  my-10 m-auto p-2 "
        style={{
          background: 'linear-gradient(to right, #08E488, #00C6FF)',
          padding: '1px',
        }}
      >
        <div className="bg-white md:rounded-[64px] rounded-[16px]  space-y-5 p-[16px]">
          <Section1Entertainment />
          <Section2DisplayWithDynamicIsland />
          <Section3CamersSpecs />
          <Section4Securitypage />
          <Section5batterySpecs />
        </div>
      </div>
      <div
      style={{
        backgroundImage: `url(${section6Img})`, // Use mobileBgImage for mobile
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        padding: '0',
    }}
      >
        <div className="lg:h-[850px] md:h-[500px] h-[200px] flex justify-center items-end">
          <p className="text-mobile/h6 text-center md:text-desktop/h3 lg:text-desktop/h2 pb-[26px] lg:pb-[80px]">
            Epic Vibes: Dive into <span className="text-itel-red">Awesomeness!</span>
          </p>
        </div>
      </div>

      <Section7PhonesSpecs />
    </div>
  );
};

export default A70;
