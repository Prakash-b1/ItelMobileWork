const HeroSectionOfPage = () => {

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url('/a70/A70Banner.webp')`, // Default image for larger screens
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    padding: '0',
                }}
                className="bg-mobile md:bg-desktop"
            >
            
                <div className="md:h-[600px] h-[521px] flex flex-col md:flex-row md:justify-between">
                    <div className="flex">
                        <div className="lg:gap-16 gap-4 flex flex-col justify-center px-4 pt-14 md:pt-0 md:px-0 lg:ps-[88px]">
                            <div className="flex flex-col gap-4">
                                <div className="border-2 font-bold border-[#3A3358] text-[#3A3358] text-center rounded-full w-[156px]">
                                    Awesome series
                                </div>
                                <div>
                                    <h1 className="text-mobile/h1 md:text-desktop/large/h py-4">A70</h1>
                                    <p className="text-mobile/title md:text-desktop/title text-[#181818] uppercase">
                                        12GB* (4GB+8GB*) RAM + 256GB ROM | Dynamic bar | 13MP AI Dual Rear Camera
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-mobile/small/body md:text-desktop/h5/medium">
                                    Starting from <span className="text-mobile/h5 md:text-desktop/h5">₹6,299/-</span>
                                </p>
                                <button className="md:block hidden">Buy now</button>
                            </div>
                        </div>
                    </div>
                    <img src="/a70/HritikPhotoDashb.png" alt="A70Banner" className="h-[1409.35px] w-[849.19px]" />
                </div>
            </div>
        </div>
    );
};

export default HeroSectionOfPage;
