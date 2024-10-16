import GradientBackgroundWrapper from "../../../components/GradientBackgroundWrapper "
import sec4Img from "../../../assets/A70assets/image.png"
const Section4Securitypage = () => {
    return (
        <GradientBackgroundWrapper paddingStart='0'>
            <div className='relative flex flex-col-reverse xl:flex-col gap-5  xl:h-[739px] overflow-hidden'>

                <img src={sec4Img} alt="bgimgsec3" className="xl:absolute top-[20rem]  xl:h-[739px] xl:w-[1248px] md:top-0 left-0 w-full  object-cover" />
                <div className="z-10 flex xl:justify-end justify-center text-center xl:text-left">
                    <div className="xl:w-[401px]">
                        <p className="font-markot lg:text-[48px] text-[24px] font-semibold text-desktop/h2 md:leading-[57px]">Hello! Hassle-free Security</p>
                        <span className="font-markot lg:text-[20px] text-[12px] font-normal md:leading-[32px]">
                            With itel A70s side-mounted fingerprint sensor, experience seamless login, swift access, and top-notch security.
                        </span>
                    </div>
                </div>

            </div>
        </GradientBackgroundWrapper>
    )
}

export default Section4Securitypage
