import popImg from '../../../assets/A70assets/partypop.svg'
import GradientBackgroundWrapper from '../../../components/GradientBackgroundWrapper '
import mobilebg from '../../../assets/A70/Background/Ample Storage - Mobile.webp'
const Section1Entertainment = () => {
    return (
        <GradientBackgroundWrapper mobileBgImage={mobilebg}>
            <div className='lg:w-[735px] text-center lg:pt-[37px] md:text-left '>
                <p className='lg:text-desktop/h2 text-mobile/h4 '>Ample Storage for Entertainment</p>
                <p className='lg:text-[24px] lg:pt-[12px] lg:text-desktop/body/large text-mobile/body/2 md:text-[16px] text-[12px] text-wrap'>
                    Enjoy ample storage, effortless multitasking, and expandable space with its massive 256GB storage and 12GB* (4GB+8GB*) RAM.
                    Say hello to endless possibilities and goodbye to storage worries!
                </p>
            </div>
            <div className='flex md:flex-row flex-col pt-[15px]'>
                <div className='md:py-5 md:space-y-4 flex md:block gap-2 sm:w-[297px] w-full'>
                    <p className='md:text-desktop/h3 text-mobile/title sm:w-[136px] md:w-full'>12GB* (4GB+8GB*) RAM</p>
                    <span className='md:text-[16px] hidden md:block text-mobile/h5/medium md:text-desktop/body/1'>With Memory Fusion <br  />Technology</span>
                    <hr className='h-[2px] hidden md:block bg-grey/grey/3' />
                    <hr className='h-[40px] w-[2px] block md:hidden bg-grey/grey/3' />
                    <p className='lg:text-desktop/h3 text-mobile/title sm:w-[135px] md:w-full'>64GB/128GB/256GB ROM</p>
                </div>
                <span className='text-[8px] block md:hidden'>With Memory Fusion Technology</span>
                <div className='mt-5 md:mt-0'>
                    <img src={popImg} alt="popImg"  className='md:w-[1160px] w-[300px]' />
                </div>
            </div>
        </GradientBackgroundWrapper>
    )
}

export default Section1Entertainment
