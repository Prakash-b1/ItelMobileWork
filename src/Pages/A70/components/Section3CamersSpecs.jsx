import bgImg from '../../../assets/A70/Background/A70 Camera BG.webp'
import bgImgMobile from '../../../assets/A70/Background/A70 Camera Bg - Mobile.webp'
import GradientBackgroundWrapper from '../../../components/GradientBackgroundWrapper '

import beautyMode from "../../../assets/A70assets/beautymode.svg"
import portraight from "../../../assets/A70assets/portraight.svg"
import promode from "../../../assets/A70assets/promode.svg"
import pamorama from "../../../assets/A70assets/paranoma.svg"
import hdrMode from "../../../assets/A70assets/hdrmode.svg"

const Section3CamersSpecs = () => {
    return (
        <GradientBackgroundWrapper bgImage={bgImg} paddingStart='48px' padding='10px' mobileBgImage={bgImgMobile}>
            <div className='relative flex flex-col lg:flex-row h-[390px] lg:justify-between  lg:pt-[28px]  gap-2 md:gap-5 md:h-[600px] lg:h-[739px] overflow-hidden'>

                <div className='lg:w-[455px] text-center lg:text-left lg:h-[455px] relative lg:gap-6 lg:flex lg:flex-col'>
                    <p className='md:text-desktop/h2 text-mobile/h4'>Unleash Pure Beauty with Enhanced HDR</p>
                    <span className='md:text-desktop/body/large text-mobile/body/2'>Featuring an 8MP AI Front Camera and 13MP AI Dual Rear Camera, every shot is infused with stunning detail and clarity. </span>
                </div>

                <div className='flex justify-center '>
                    <div className='lg:w-[224px] lg:h-[325px] lg:mt-16 grid items-center lg:grid-cols-2 grid-cols-3 gap-2 z-10'>
                        <div className='flex lg:flex-col gap-2'>
                            <img src={beautyMode} alt="beautyMode" className='md:w-[44px] md:h-[44px] h-[30px] w-[30px]' />
                            <span className='text-mobile/h7 md:text-desktop/h6/medium'>5 AI Beauty Mode</span>
                        </div>
                        <div className='flex lg:flex-col gap-2'>
                            <img src={portraight} alt="beautyMode" className='md:w-[44px] md:h-[44px] h-[30px] w-[30px]' />
                            <span className='text-mobile/h7 md:text-desktop/h6/medium'>Portrait Lowlight</span>
                        </div>
                        <div className='flex lg:flex-col gap-2'>
                            <img src={promode} alt="beautyMode" className='md:w-[44px] md:h-[44px] h-[30px] w-[30px]' />
                            <span className='text-mobile/h7 md:text-desktop/h6/medium'>Pro Mode</span>
                        </div>
                        <div className='flex lg:flex-col gap-2'>
                            <img src={pamorama} alt="beautyMode" className='md:w-[44px] md:h-[44px] h-[30px] w-[30px]' />
                            <span className='text-mobile/h7 md:text-desktop/h6/medium'>Panorama</span>
                        </div>
                        <div className='flex lg:flex-col gap-2'>
                            <img src={hdrMode} alt="beautyMode" className='md:w-[44px] md:h-[44px] h-[30px] w-[30px]' />
                            <span className='text-mobile/h7 md:text-desktop/h6/medium'>HDR Mode</span>
                        </div>
                    </div>
                </div>



            </div>
        </GradientBackgroundWrapper>
    )
}

export default Section3CamersSpecs
