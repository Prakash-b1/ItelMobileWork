import bgImg from '../../../assets/A70assets/bgimg2.svg'
import sec3Img from '../../../assets/A70assets/bgimgsec3.png'
import mobile from '../../../assets/A70assets/mobile1.svg'
import GradientBackgroundWrapper from '../../../components/GradientBackgroundWrapper '
import arrow from "../../../assets/A70assets/straightline.svg"
import rarrow from "../../../assets/A70assets/arorowleft.svg"

import beautyMode from "../../../assets/A70assets/beautymode.svg"
import portraight from "../../../assets/A70assets/portraight.svg"
import promode from "../../../assets/A70assets/promode.svg"
import pamorama from "../../../assets/A70assets/paranoma.svg"
import hdrMode from "../../../assets/A70assets/hdrmode.svg"

const Section3CamersSpecs = () => {
    return (
        <GradientBackgroundWrapper bgImage={bgImg} paddingStart='10'>
            <div className='relative flex flex-col gap-5 md:h-[600px] lg:h-[739px] overflow-hidden'>

                <img src={sec3Img} alt="bgimgsec3" className="absolute left-[2rem] top-[22rem] lg:top-[6rem]  lg:left-[-3rem] md:h-[540px] md:top-[7rem] w-full h-[125px] lg:h-full object-cover" />

                <div className='lg:w-[455px] lg:h-[455px] relative '>
                    <p className='font-markot lg:text-[48px] text-[24px] font-semibold md:desktop/h2'>Unleash Pure Beauty with Enhanced HDR</p>
                    <span className='font-markot lg:text-[20px] text-[12px] font-normal md:leading-[32px]'>Featuring an 8MP AI Front Camera and 13MP AI Dual Rear Camera, every shot is infused with stunning detail and clarity. </span>
                </div>

                <div className='flex justify-center lg:justify-end'>
                    <div className='lg:w-[224px] grid lg:grid-cols-2 grid-cols-3 gap-4 z-10'>
                        <div className='flex lg:flex-col gap-2'>
                            <img src={beautyMode} alt="beautyMode" className='md:w-[44px] md:h-[44px] h-[20px] w-[20px]' />
                            <span className='font-markot text-[8px] md:text-[16px] font-medium '>5 AI Beauty Mode</span>
                        </div>
                        <div className='flex lg:flex-col gap-2'>
                            <img src={portraight} alt="beautyMode" className='md:w-[44px] md:h-[44px] h-[20px] w-[20px]' />
                            <span className='font-markot text-[8px] md:text-[16px] font-medium '>Portrait Lowlight</span>
                        </div>
                        <div className='flex lg:flex-col gap-2'>
                            <img src={promode} alt="beautyMode" className='md:w-[44px] md:h-[44px] h-[20px] w-[20px]    ' />
                            <span className='font-markot text-[8px] md:text-[16px] font-medium '>Pro Mode</span>
                        </div>
                        <div className='flex lg:flex-col gap-2'>
                            <img src={pamorama} alt="beautyMode" className='md:w-[44px] md:h-[44px] h-[20px] w-[20px]' />
                            <span className='font-markot text-[8px] md:text-[16px] font-medium '>Panorama</span>
                        </div>
                        <div className='flex lg:flex-col gap-2'>
                            <img src={hdrMode} alt="beautyMode" className='md:w-[44px] md:h-[44px] h-[20px] w-[20px]' />
                            <span className='font-markot text-[8px] md:text-[16px] font-medium '>HDR Mode</span>
                        </div>
                    </div>
                </div>




                <div className="relative ">
                    <div className="absolute hidden lg:flex  top-[-28rem] left-[-6rem] z-20">
                        <img src={rarrow} alt="mobile" className='relative left-[43rem] top-[4rem] z-2 z-10' />
                        <p className='relative left-[689px] top-[51px] font-bold z-2 h-[30px] z-10  px-2  border border-[#08E488] text-center rounded-full '>13MP AI Dual Rear Camera</p>

                    </div>
                </div>


                <img src={mobile} alt="mobile" className='md:w-[892px] md:h-[892px] relative lg:left-[-5rem] top-[1rem] left-[2px] md:top-[-2rem] md:left-[-4rem] lg:top-[-16rem]' />
            </div>


            <div className="absolute hidden lg:block z-30 top-[135rem] left-[14rem]">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center">
                        <p className="font-bold z-10 px-2 py-2 border border-[#08E488] text-center rounded-full">8MP AI Front Camera</p>
                        <span className="bg-[#08E488] w-[50px] h-[2px] z-10"></span>
                    </div>
                    <img src={arrow} alt="arrow" className="relative z-10 h-[70px] left-[166px] top-[-6rem]" />
                </div>
            </div>
            <div className="absolute md:hidden z-30 top-[1794px] w-[74px] left-[4rem]">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-center">
                        <p className="font-semibold z-10 p-[2px] text-[8px]  border border-[#08E488] text-center rounded-lg">8MP AI Front <br /> Camera</p>
                        <span className="bg-[#08E488] w-[5px] h-[2px] z-10"></span>
                    </div>
                    <img src={arrow} alt="arrow" className="relative z-10 h-[26px] w-[25px] left-[65px] top-[-43px]" />
                </div>
            </div>
        </GradientBackgroundWrapper>
    )
}

export default Section3CamersSpecs
