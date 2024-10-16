import GradientBackgroundWrapper from "../../../components/GradientBackgroundWrapper "
import bgImg from '../../../assets/A70assets/bgimg2.svg'
import smooth from '../../../assets/A70assets/ultrssmooth.png'
import slip from '../../../assets/A70assets/phomeslim.png'
import chip from '../../../assets/A70assets/a70chip.png'

const Section7PhonesSpecs = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 px-2 lg:px-0 py-10">
            <GradientBackgroundWrapper bgImage={bgImg} paddingStart="0" padding="0">
                <div className="flex flex-col  justify-between lg:w-[518px] lg:h-[784px]">

                    <div className="p-5 ">
                        <p className=" text-[20px] lg:text-[40px] font-semibold md:leading-[57px]">
                            Enjoy Ultra-Smooth Precision
                        </p>
                        <span className="text-[14px] lg:text-2xl font-medium md:leading-[32px]">6.6” HD+ Display | 120 Hz Touch Sampling Rate | Dynamic Bar</span>
                    </div>
                    <div className="flex justify-end">
                        <img src={smooth} alt="" className="w-[316px] h-[250px] lg:w-[522px] lg:h-[416px]" />
                    </div>
                </div>


            </GradientBackgroundWrapper>

            <div className="flex flex-col gap-4 lg:w-[738px] lg:h-[784px]">
                <GradientBackgroundWrapper bgImage={bgImg} paddingStart="0" padding="0">
                    <div className="flex flex-col  lg:w-[738px] h-[260px] lg:h-[380px] gap-10">
                        <div className="p-5 ">
                            <p className=" text-[20px] lg:text-[40px] font-semibold md:leading-[57px]">
                                Slim & Glossy: Glass-like Finish
                            </p>
                            <span className="text-[14px] lg:text-2xl font-medium md:leading-[32px]">8.6mm Ultra-slim Body</span>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <img src={slip} alt="" className="w-[200px] h-[36px] lg:w-[577px] lg:h-[76px]" />
                        </div>
                    </div>

                </GradientBackgroundWrapper>

                <GradientBackgroundWrapper bgImage={bgImg} paddingStart="0" padding="0">
                    <div className="relative flex flex-col lg:flex-row justify-between lg:w-[738px] h-[386px] lg:h-[380px] overflow-hidden">
                        <div className="p-2 lg:w-1/2">
                            <p className="text-[20px] lg:text-[40px] font-semibold md:leading-[57px]">
                                itel A70 s Performance Dynamo: Octa-Core T603 Processor
                            </p>
                        </div>
                        <div className="relative lg:w-1/2 flex items-center justify-center">
                            <img src={chip} alt="" className="relative z-10 w-[246px] h-[248px] lg:w-[300px] lg:h-[302px]" />
                            <div className="absolute hidden lg:block inset-0 bg-gradient-to-l from-[#68BDA0]/80 to-[#68BDA0]/0 opacity-70 z-0"></div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute top-[-24rem] inset-0 bg-gradient-to-l from-[#68BDA0]/80 to-[#68BDA0]/0 opacity-70 z-0 lg:hidden"></div>

                    </div>
                </GradientBackgroundWrapper>



            </div>
        </div>
    )
}

export default Section7PhonesSpecs
