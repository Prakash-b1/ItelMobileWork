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

                <img src={sec3Img} alt="bgimgsec3" className="absolute left-[1rem] top-[19rem] lg:top-[6rem]  lg:left-[-3rem] md:h-[540px] md:top-[7rem] w-full h-[169px] lg:h-full object-cover" />

                <div className='lg:w-[455px] lg:h-[455px] relative lg:gap-6 lg:flex lg:flex-col'>
                    <p className='font-markot lg:text-[48px] text-[24px] font-semibold md:leading-[57px]'>Unleash Pure Beauty with Enhanced HDR</p>
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


                <div className="relative">
                    <div className="absolute flex md:flex-col gap-2 top-[102px] left-[1px] md:top-[9rem] md:left-[28px] lg:left-[52px] lg:top-[-23px] ">
                        <div className="flex items-center justify-center">
                            <p className="font-bold hidden md:block z-10 text-[12px] lg:text-[18px] px-2 py-2 border border-[#08E488] text-center rounded-full">8MP AI Front Camera</p>
                            <p className="font-semibold  md:hidden z-10 text-[9px]  p-[2px] border border-[#08E488] text-center rounded-md">8MP AI Front <br /> Camera</p>
                            <span className="bg-[#08E488] hidden md:block lg:w-[19px] h-[2px] md:w-[10px] z-10"></span>
                            <span className="bg-[#08E488] h-[1px] w-[10px] z-10"></span>
                        </div>
                        <img src={arrow} alt="arrow" className="relative hidden md:block z-10 lg:h-[70px] lg:left-[10rem] lg:top-[-98px] md:top-[-75px] md:left-[111px] md:h-[50px]" />
                        <img src={arrow} alt="arrow" className="relative md:hidden z-10 h-[20px] top-[-2px]  left-[-7px]" />
                    </div>
                </div>

                <div className="relative ">
                    <div className="absolute  lg:flex top-[-3rem] left-[-530px] md:top-[-28rem] md:left-[-6rem] lg:top-[-30rem] lg:left-[-4rem] z-20">
                        <img src={rarrow} alt="mobile" className='relative hidden md:block left-[43rem] top-[4rem] z-2 z-10' />
                        <p className='relative left-[689px] hidden md:block top-[51px] font-bold z-2 h-[30px] z-10  px-2  border border-[#08E488] text-center rounded-full '>13MP AI Dual Rear Camera</p>
                        <p className='relative left-[732px] w-[69px] text-[9px] md:hidden top-[5rem] font-semibold z-2  z-10  px-[2px]  border border-[#08E488] text-center rounded-sm '>13MP AI Dual <br /> Rear Camera</p>
                        <img src={rarrow} alt="mobile" className='relative md:hidden left-[43rem] h-[40px] top-[4rem] z-2 z-10' />

                    </div>
                </div>


                <img src={mobile} alt="mobile" className='md:w-[892px] md:h-[892px] relative lg:left-[-3rem] top-[1rem] left-[-27px] md:top-[-2rem] md:left-[-4rem] lg:top-[-16rem]' />
            </div>


     
        </GradientBackgroundWrapper>
    )
}

export default Section3CamersSpecs
