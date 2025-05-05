import React from 'react'

import HeroDescription from './HeroDescription';
import HeroTechStack from './HeroTechSection';
import HeroTypewriter from './HeroTypewriter';

const Hero = () => {
    const subheading = [
        "Full-Stack Developer",
        "Frontend Developer",
    ];

    return (
        <div
            className="relative w-full p-0 bg-MainDark 4k:flex 4k:flex-col h-[250vh] xs:h-[200vh] ap:h-[225vh] 4k:h-[125vh] z-0"
        >
            <div className='flex flex-col mb-[40vh] pt-[40vh] 4k:pt-[20vh] 4k:mb-[10vh]'>
                <h1 className='text-MainLight font-WorkSans uppercase text-2xl md:text-5xl 4k:text-9xl text-center m-auto'>Szymon Samus</h1>
                <HeroTypewriter subheading={subheading} />
                <HeroDescription
                text="I am a Junior Software Developer with a passion for bringing ideas to life. Constantly staying updated on the latest trends and eager to contribute to innovative projects."
                className="font-WorkSans text-MainLight text-lg md:text-4xl ap:text-2xl 4k:text-6xl text-center pt-6 px-8 md:px-34 ap:px-[25%]"
                />
            </div>
            <div className='4k:flex 4k:flex-col 4k:justify-center 4k:items-center 4k:mx-auto 4k:w-[33vw] pt-10'>
                <HeroTechStack />
            </div>
            <div
                className='absolute bottom-0 left-0 right-0 h-[60vh] 4k:h-[40vh] bg-gradient-to-b from from-MainLight/0 to-MainLight'
            />
        </div>
    )
}



export default Hero;