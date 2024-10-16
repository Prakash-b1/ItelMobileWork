import GradientBackgroundWrapper from '../../../components/GradientBackgroundWrapper '
import dynamicIsland from '../../../assets/A70assets/iphonespecs.svg'
import battery from '../../../assets/A70assets/batteryicon.svg'
import mobile from '../../../assets/A70assets/mobicon.svg'
import fingerP from '../../../assets/A70assets/fingericon.svg'

const Section2DisplayWithDynamicIsland = () => {
    return (
        <GradientBackgroundWrapper>
            <div className='flex  justify-between lg:flex-row flex-col-reverse'>
                <div className='flex lg:justify-end  items-end'>
                    <img src={dynamicIsland} alt="dynamicIsland" className='lg:w-[532px] lg:h-[700px]' />
                </div>
                <div className='lg:pt-[15rem] lg:w-1/2 flex flex-col gap-14 '>
                    <div className='flex flex-col gap-5 text-center lg:text-left'>
                        <p className='font-markot lg:text-[48px] text-[24px] font-semibold leading-7 md:leading-[57px]'>Vivid 6.6” HD+ Display with Integrated Dynamic Bar</p>
                        <span className='font-markot lg:text-[20px] text-[12px] font-normal leading-[32px]'>Stay informed at a glance with the dynamic notification bar, seamlessly integrated into the 6.6-inch HD+ display. Enjoy an intuitive experience where notifications are both clear and convenient.</span>
                    </div>

                    <div className='flex gap-5 lg:justify-between lg:flex-wrap pb-6 lg:pb-0'>
                        <div className='lg:w-[230px] flex flex-col gap-5'>
                            <img src={battery} alt="battery" className='w-[48px] h-[48px]' />
                            <span className='font-markot lg:text-[16px] text-[12px] font-medium leading-5'>6.6inch HD+ Display</span>
                        </div>
                        <div className='lg:w-[230px] flex flex-col gap-5'>
                            <img src={mobile} alt="mobile" className='w-[48px] h-[48px]' />
                            <span className='font-markot lg:text-[16px] text-[12px] font-medium leading-5'>90% + Screen to Body Ratio</span>
                        </div>
                        <div className='lg:w-[230px] flex flex-col gap-5'>
                            <img src={fingerP} alt="fingerP" className='w-[48px] h-[48px]' />
                            <span className='font-markot lg:text-[16px] text-[12px] font-medium leading-5'>120 Hz Touch Sampling Rate</span>
                        </div>
                    </div>

                </div>
            </div>
        </GradientBackgroundWrapper>
    )
}

export default Section2DisplayWithDynamicIsland
