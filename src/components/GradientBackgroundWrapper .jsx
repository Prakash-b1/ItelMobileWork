/* eslint-disable react/prop-types */
import bgs from '../assets/A70assets/bgimg.svg';

const GradientBackgroundWrapper = ({ children, bgImage, paddingStart = '20',padding="5" }) => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #08E488, #00C6FF)',
                padding: '1px',
                overflow:'hidden'
            }}
            className="rounded-xl p-5"
        >
            <div
                className={`bg-white rounded-xl  p-${padding} pb-0 ps-2 lg:ps-${paddingStart}`}
                style={{
                    backgroundImage: `url(${bgImage || bgs})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow:'hidden'
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default GradientBackgroundWrapper;
