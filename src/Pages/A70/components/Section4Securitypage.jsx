import GradientBackgroundWrapper from "../../../components/GradientBackgroundWrapper "
import sec4Img from "../../../assets/A70assets/touchid.svg"
import facescan from "../../../assets/A70assets/facescanid.svg"
const Section4Securitypage = () => {
    return (
        <GradientBackgroundWrapper>
            <div className='relative flex flex-col-reverse xl:flex-col gap-5  xl:h-[739px] xl:w-[1248px] overflow-hidden'>
                <div className="absolute xl:top-[9rem]  xl:left-[15rem] top-[208px] left-[2rem] md:top-[14rem] md:left-[8rem] z-10">
                    <img src={facescan} alt="facescan" className="w-[32px] md:w-[218px] md:h-[250px] xl:h-[311px] " />

                </div>

                <img src={sec4Img} alt="bgimgsec3" className="xl:absolute top-[20rem]  xl:h-[739px] xl:w-[1248px] md:top-0 left-0 w-full  object-cover" />
                <div className="z-10 flex xl:justify-end justify-center text-center xl:text-left">
                    <div className="xl:w-[401px]">
                        <p className="font-markot lg:text-[48px] text-[24px] font-semibold ">Hello! Hassle-free Security</p>
                        <span className="font-markot lg:text-[20px] text-[12px] font-normal leading-5">
                            With itel A70s side-mounted fingerprint sensor, experience seamless login, swift access, and top-notch security.
                        </span>
                    </div>
                </div>

            </div>
        </GradientBackgroundWrapper>
    )
}

export default Section4Securitypage
