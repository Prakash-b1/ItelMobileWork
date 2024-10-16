import Section1Entertainment from "./components/Section1Entertainment";
import Section2DisplayWithDynamicIsland from "./components/Section2DisplayWithDynamicIsland";
import Section3CamersSpecs from "./components/Section3CamersSpecs";
import Section4Securitypage from "./components/Section4Securitypage";
import Section5batterySpecs from "./components/Section5batterySpecs";
import section6Img from "../../assets/A70assets/section6img.png"
import Section7PhonesSpecs from "./components/Section7PhonesSpecs";

const A70 = () => {
  return (
    <div className="content">
      <div
        className="rounded-xl  my-10 m-auto p-2 "
        style={{
          background: 'linear-gradient(to right, #08E488, #00C6FF)',
          padding: '1px',
        }}
      >
        <div className="bg-white rounded-xl space-y-5 p-2">
          <Section1Entertainment />
          <Section2DisplayWithDynamicIsland />
          <Section3CamersSpecs />
          <Section4Securitypage />
          <Section5batterySpecs />
        </div>
      </div>
      <div>
        <img src={section6Img} alt="bgImg" className="w-full h-full" />
      </div>
      
      <Section7PhonesSpecs/>
    </div>
  );
};

export default A70;
