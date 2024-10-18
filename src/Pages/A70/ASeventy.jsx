/* eslint-disable react-refresh/only-export-components */
import HeroSectionOfPage from "./components/HeroSectionOfPage";
import Section1Entertainment from "./components/Section1Entertainment";
import Section2DisplayWithDynamicIsland from "./components/Section2DisplayWithDynamicIsland";
import Section3CamersSpecs from "./components/Section3CamersSpecs";
import Section4Securitypage from "./components/Section4Securitypage";
import Section5batterySpecs from "./components/Section5batterySpecs";
import Section6MobileShowcase from "./components/Section6MobileShowcase";
import Section7PhonesSpecs from "./components/Section7PhonesSpecs";

const ASeventy = () => {
  return (
    <div className="">
      <HeroSectionOfPage/>
      <div
        className="md:rounded-[64px] rounded-[16px]  my-10 p-2 content"
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
      <Section6MobileShowcase/>

      <Section7PhonesSpecs />
    </div>
  );
};

export default ASeventy;
