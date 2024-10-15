import popImg from '../../../assets/A70assets/partypop.svg'
import GradientBackgroundWrapper from '../../../components/GradientBackgroundWrapper '

const Section1Entertainment = () => {
    return (
        <GradientBackgroundWrapper>
            <div className='md:w-[735px] text-center md:text-left'>
                <p className='lg:text-[48px] md:text-[36px] text-[24px] font-medium text-smoky/black text-wrap'>Ample Storage for Entertainment</p>
                <p className='lg:text-[24px] md:text-[16px] text-[12px] font-medium md:font-normal text-wrap'>
                    Enjoy ample storage, effortless multitasking, and expandable space with its massive 256GB storage and 12GB* (4GB+8GB*) RAM.
                    Say hello to endless possibilities and goodbye to storage worries!
                </p>
            </div>
            <div className='flex md:flex-row flex-col'>
                <div className='md:p-5 md:space-y-4 flex md:block gap-2'>
                    <p className='md:text-[36px] text-[14px] font-medium text-smoky/black'>12GB* (4GB+8GB*) RAM</p>
                    <span className='md:text-[16px] hidden md:block'>With Memory Fusion Technology</span>
                    <hr className='h-[2px] hidden md:block bg-[#666666]' />
                    <hr className='h-[50px] w-[4px] block md:hidden bg-[#666666]' />
                    <p className='md:text-[36px] text-[14px] font-medium text-smoky/black'>64GB/128GB/ 256GB ROM</p>
                </div>
                <span className='text-[8px] block md:hidden'>With Memory Fusion Technology</span>
                <div className='mt-5 md:mt-0'>
                    <img src={popImg} alt="popImg" className='md:w-[1160px] w-[300px]' />
                </div>
            </div>
        </GradientBackgroundWrapper>
    )
}

export default Section1Entertainment
