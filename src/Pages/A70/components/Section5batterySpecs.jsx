import GradientBackgroundWrapper from "../../../components/GradientBackgroundWrapper "
import bgImg from '../../../assets/A70assets/bgimg2.svg'
import battery from '../../../assets/A70assets/phonebatteryimg.png'

const Section5batterySpecs = () => {
    return (
        <GradientBackgroundWrapper bgImage={bgImg}>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col justify-between gap-6 lg:gap-0">
                    <div className="lg:w-[513px]">
                        <p className="font-markot lg:text-[48px] text-[24px] font-semibold ">Endless Energy Always by Your Side</p>
                        <span className="font-markot lg:text-[20px] text-[12px] font-normal leading-5">
                            Stay powered-up all day long with 5000 mAh battery and Type-C Charging. itel A70 smartphone delivers endurance and performance for the long haul.                    </span>

                    </div>
                    <div className="flex lg:flex-col gap-4 pb-6">
                        <p className="font-markot lg:text-[36px] text-[12px] font-semibold leading-5">
                            5000 mAh Battery
                        </p>
                        <hr className="hidden lg:block lg:w-[300px] h-[3px] bg-black" />
                        <hr className=" lg:hidden w-[2px] h-[35px] bg-black" />
                        <p className="font-markot lg:text-[36px] text-[12px] font-semibold leading-5">
                            Type-C Charging
                        </p>

                    </div>
                </div>
                <div>
                    <img src={battery} alt="battery" />
                </div>
            </div>

        </GradientBackgroundWrapper>
    )
}

export default Section5batterySpecs
