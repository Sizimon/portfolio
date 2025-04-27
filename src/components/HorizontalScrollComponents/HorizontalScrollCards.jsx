import React from 'react';
import { FaGithub, FaGlobe } from "react-icons/fa6";
import ImageSlider from '../ImageComponents/ImageSlider.jsx';

const HorizontalScrollCards = ({
    title, description, id, summary, images, livelink, github, setSelectedImage,
}) => {

    return (
        <div
            key={id}
            className='flex flex-col justify-center group relative h-full w-[101vw] overflow-hidden bg-MainDark whitespace-pre-line 4k:rounded-3xl'
        >
            <div className="flex flex-col items-center pb-0 4k:pb-[10vh]">
                <h1 className='text-2xl xs:text-4xl md:text-5xl 4k:text-9xl text-MainLight font-Anton pt-[2vh]'>{title}</h1>
                <p className='text-MainLight font-WorkSans px-4 text-center text-sm xs:text-lg md:text-2xl 4k:text-6xl'>{summary}</p>
            </div>
            <div className="grid grid-cols-1 ap:grid-cols-2 pt-0 md:pt-10 4k:px-[5%] 4k:gap-32">
                <div className="m-auto p-4 pb-12 md:px-6 md:pb-10 w-full justify-center items-center">
                    <ImageSlider images={images} setSelectedImage={setSelectedImage} />
                </div>
                <div className="m-auto px-2 md:px-6 bp:px-[20%] bp:py-[5%] ap:px-6 ap:py-0">
                    <p className='text-MainLight font-WorkSans text-[10px] xs:text-sm md:text-xl 4k:text-5xl'>{description}</p>
                    <div className='flex flex-row justify-center pt-10 4k:pt-[5vh] md:pt-4 text-center'>
                        <button
                            className='flex flex-row p-1 gap-2 4k:gap-6  rounded-md text-MainDark bg-MainLight mr-5'
                        >
                            <FaGithub className="h-6 w-6 xs:h-8 xs:w-8 4k:h-24 4k:w-24 text-MainDark" />
                            <a
                                className="self-center text-xs xs:text-base 4k:text-5xl"
                                href={github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </button>
                        <button
                            className='flex flex-row p-1 gap-2 4k:gap-6 rounded-md text-MainDark bg-MainLight ml-5'
                        >
                            <FaGlobe className="h-6 w-6 xs:h-8 xs:w-8 4k:h-24 4k:w-24 text-MainDark" />
                            <a
                                className="self-center text-xs xs:text-base 4k:text-5xl"
                                href={livelink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Live
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HorizontalScrollCards;