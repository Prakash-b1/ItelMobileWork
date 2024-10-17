import GradientBackgroundWrapper from '../../../components/GradientBackgroundWrapper '
import dynamicIsland from '../../../assets/A70assets/iphonespecs.svg'
import battery from '../../../assets/A70assets/batteryicon.svg'
import mobile from '../../../assets/A70assets/mobicon.svg'
import fingerP from '../../../assets/A70assets/fingericon.svg'
import bgImgMobile from '../../../assets/A70/Background/Ample Storage - Mobile.webp'
const Section2DisplayWithDynamicIsland = () => {
    return (
        <GradientBackgroundWrapper mobileBgImage={bgImgMobile} paddingStart='60px'>
            <div className='flex  lg:flex-row flex-col-reverse justify-end h-[690px] md:h-[850px]'>
                <div className='flex md:justify-end  items-end'>
                    <img src={dynamicIsland} loading='lazy' alt="dynamicIsland" className='lg:w-[532px] lg:h-[700px]' />
                </div>
                <div className='lg:pt-[148px] lg:ps-[60px]'>
                    <div className=' lg:w-[502px]  lg:h-[545px] flex flex-col gap-8 '>
                        <div className='flex flex-col gap-5 text-center lg:text-left'>
                            <p className='md:text-desktop/h2 text-mobile/h4'>Vivid 6.6” HD+ Display with Integrated Dynamic Bar</p>
                            <span className='md:text-desktop/body/large text-mobile/body/2'>Stay informed at a glance with the dynamic notification bar, seamlessly integrated into the 6.6-inch HD+ display. Enjoy an intuitive experience where notifications are both clear and convenient.</span>
                        </div>

                        <div className='flex gap-5 lg:justify-between lg:flex-wrap pb-6 lg:pb-0'>
                            <div className='lg:w-[230px] flex flex-col gap-5'>
                                <img  src={battery} alt="battery" className='w-[48px] h-[48px]' />
                                <span className='text-mobile/h7 md:text-desktop/h6/medium'>6.6inch HD+ Display</span>
                            </div>
                            <div className='lg:w-[230px] flex flex-col gap-5'>
                                <img  src={mobile} alt="mobile" className='w-[48px] h-[48px]' />
                                <span className='text-mobile/h7 md:text-desktop/h6/medium'>90% + Screen to Body Ratio</span>
                            </div>
                            <div className='lg:w-[230px] flex flex-col gap-5'>
                                <img  src={fingerP} alt="fingerP" className='w-[48px] h-[48px]' />
                                <span className='text-mobile/h7 md:text-desktop/h6/medium'>120 Hz Touch Sampling Rate</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </GradientBackgroundWrapper>
    )
}

export default Section2DisplayWithDynamicIsland
