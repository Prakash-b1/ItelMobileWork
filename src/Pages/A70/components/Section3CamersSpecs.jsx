import GradientBackgroundWrapper from '../../../components/GradientBackgroundWrapper ';

const features = [
  { img: '/a70/beautymode.svg', alt: 'beautyMode', text: '5 AI Beauty Mode' },
  { img: '/a70/portraight.svg', alt: 'portraitMode', text: 'Portrait Lowlight' },
  { img: '/a70/promode.svg', alt: 'proMode', text: 'Pro Mode' },
  { img: '/a70/paranoma.svg', alt: 'panoramaMode', text: 'Panorama' },
  { img: '/a70/hdrmode.svg', alt: 'hdrMode', text: 'HDR Mode' },
];

const Section3CamersSpecs = () => (
  <GradientBackgroundWrapper
    bgImage='/a70/A70CameraBG.webp'
    paddingStart='48px'
    padding='10px'
    mobileBgImage='/a70/A70CameraBg-Mobile.webp'
  >
    <div className='relative flex flex-col lg:flex-row h-[390px] lg:justify-between lg:pt-[28px] gap-2 md:gap-5 md:h-[600px] lg:h-[739px] overflow-hidden'>
      <div className='lg:w-[455px] text-center lg:text-left lg:h-[455px] relative lg:gap-6 lg:flex lg:flex-col'>
        <p className='md:text-desktop/h2 text-mobile/h4'>Unleash Pure Beauty with Enhanced HDR</p>
        <span className='md:text-desktop/body/large text-mobile/body/2'>
          Featuring an 8MP AI Front Camera and 13MP AI Dual Rear Camera, every shot is infused with stunning detail and clarity.
        </span>
      </div>

      <div className='flex justify-center'>
        <div className='lg:max-w-[224px] lg:h-[325px] lg:mt-16 grid items-center lg:grid-cols-2 grid-cols-3 gap-2 z-10'>
          {features.map(({ img, alt, text }) => (
            <div key={alt} className='flex lg:flex-col gap-2'>
              <img src={img} alt={alt} className='md:w-[44px] md:h-[44px] h-[30px] w-[30px]' />
              <span className='text-mobile/h7 md:text-desktop/h6/medium'>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </GradientBackgroundWrapper>
);

export default Section3CamersSpecs;
