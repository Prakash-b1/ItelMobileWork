/* eslint-disable react/prop-types */
import bgs from '../assets/A70/Background/Ample Storage BG.webp';

const GradientBackgroundWrapper = ({ children, bgImage, mobileBgImage, paddingStart = '88px', padding = '15px' }) => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #08E488, #00C6FF)',
                padding: '1px',
                overflow: 'hidden',
            }}
            className="md:rounded-[56px] rounded-[16px] p-5"
        >
            {/* Desktop version */}
            <div
                className={`bg-white hidden lg:block md:rounded-[56px] rounded-[16px] pb-0 ps-2`}
                style={{
                    backgroundImage: `url(${bgImage || bgs})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    paddingLeft: paddingStart,
                    paddingRight: padding,
                }}
            >
                {children}
            </div>

            {/* Mobile version */}
            <div
                className={`bg-white md:rounded-[56px] rounded-[16px] pb-0 ps-2 block lg:hidden`}
                style={{
                    backgroundImage: `url(${mobileBgImage || bgImage || bgs})`, // Use mobileBgImage for mobile
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                    padding: padding,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default GradientBackgroundWrapper;
