import React from 'react'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { FaReact, FaNode, FaJs, FaAws, FaDocker } from "react-icons/fa6"
import { DiPostgresql } from "react-icons/di"

/* MAIN SECTION */

const animVariant = (delay, initialPosition) => ({
    hidden: {
        opacity: 0,
        x: initialPosition,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        },
    },
});
// const animVariant2 = (delay, initialPosition) => ({
//     hidden: {
//         opacity: 0,
//         x: initialPosition,
//     },
//     visible: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             duration: 0.5,
//             delay: delay,
//         },
//     },
// });

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
                <h1 className='text-MainLight font-WorkSans uppercase text-3xl 4k:text-9xl text-center m-auto'>Szymon Samus</h1>
                <Typewriter subheading={subheading} />
                <ParallaxDescription
                text="I am a Junior Software Developer with a passion for bringing ideas to life. Constantly staying updated on the latest trends and eager to contribute to innovative projects."
                className="font-WorkSans text-MainLight text-lg md:text-2xl 4k:text-6xl text-center pt-6 px-8 md:px-96"
                />
            </div>
            <div className='4k:flex 4k:flex-col 4k:justify-center 4k:items-center 4k:mx-auto 4k:w-[33vw]'>
                <ParallaxTechStack />
            </div>
            <div
                className='absolute bottom-0 left-0 right-0 h-[60vh] 4k:h-[40vh] bg-gradient-to-b from from-MainLight/0 to-MainLight'
            />
        </div>
    )
}

/* END */

/* TYPEWRITER ANIM SECTION */

const LETTER_DELAY = 0.125;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewriter = ({ subheading }) => {
    const [currentSubHeading, setCurrentSubHeading] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSubHeading((pv) => (pv + 1) % subheading.length);
        }, SWAP_DELAY_IN_MS);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <h2
            className='text-MainLight font-Anton uppercase text-3xl 4k:text-9xl md:text-5xl text-center m-auto'
        >
            {subheading[currentSubHeading].split('').map((letter, index) => {
                return (
                    <motion.span
                        initial={{
                            opacity: 1,
                        }}
                        animate={{
                            opacity: 0,
                        }}
                        transition={{
                            delay: FADE_DELAY,
                            duration: FADE_DURATION,
                            ease: 'easeInOut',

                        }}
                        className='relative' key={`${currentSubHeading}-${index}`}>
                        <motion.span
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: index * LETTER_DELAY,
                                duration: 0,

                            }}
                        >
                            {letter}
                        </motion.span>
                        <motion.span
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                delay: index * LETTER_DELAY,
                                times: [0, 0.5, 1],
                                duration: BOX_FADE_DURATION,
                                ease: 'easeInOut',
                            }}
                            className='absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-MainLight'
                        />
                    </motion.span>
                )
            })}
        </h2>
    )
}

/* END */

// ABOUT SECTION

const ParallaxDescription = ({
    text,
    className,
}) => {
    const [initialPosition, setInitialPosition] = useState(null);

    useEffect(() => {
        const updateInitialPosition = () => {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            if (isMobile) {
                setInitialPosition(25); // Smaller offset for mobile
            } else {
                setInitialPosition(100); // Larger offset for desktop
            }
        };

        updateInitialPosition();

        window.addEventListener('resize', updateInitialPosition);

        return () => window.removeEventListener('resize', updateInitialPosition);
    }, []);

    if (initialPosition === null) {
        return null;
    }

    return (
        <motion.span
            className={className}
            variants={animVariant(0, initialPosition)}
            initial="hidden"
            whileInView="visible"
            viewport={{
                margin: '-100px',
                once: true,
            }}
        >
            {text}
        </motion.span>
    )
}

// END

/* END */

/* TECH STACK SECTION */

const gridVariants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const gridItemVariants = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const ParallaxTechStack = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center mx-auto px-4"
        >
            {/* MAIN TECHNOLOGIES DISPLAY */}
            <motion.section className='flex flex-col justify-center text-center p-2'>
                <ParallaxTechHeader
                    text="My Technologies"
                    className="font-Anton text-MainLight uppercase text-4xl md:text-6xl 4k:text-9xl tracking-wider pb-10"
                />
                <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                        margin: '-150px',
                        once: true,
                    }}
                    className='grid grid-cols-3 md:grid-cols-6 gap-12'
                >
                    <motion.span
                        variants={gridItemVariants}
                        className='flex justify-center items-center text-6xl md:text-7xl 4k:text-9xl text-MainLight'
                    >
                        <FaJs />
                    </motion.span>
                    <motion.span
                        variants={gridItemVariants}
                        className='flex justify-center items-center text-6xl md:text-7xl 4k:text-9xl text-MainLight'
                    >
                        <FaReact />
                    </motion.span>
                    <motion.span
                        variants={gridItemVariants}
                        className='flex justify-center items-center text-6xl md:text-7xl 4k:text-9xl text-MainLight'
                    >
                        <FaNode />
                    </motion.span>
                    <motion.span
                        variants={gridItemVariants}
                        className='flex justify-center items-center text-6xl md:text-7xl 4k:text-9xl text-MainLight'
                    >
                        <FaAws />
                    </motion.span>
                    <motion.span
                        variants={gridItemVariants}
                        className='flex justify-center items-center text-6xl md:text-7xl 4k:text-9xl text-MainLight'
                    >
                        <FaDocker />
                    </motion.span>
                    <motion.span
                        variants={gridItemVariants}
                        className='flex justify-center items-center text-6xl md:text-7xl 4k:text-9xl text-MainLight'
                    >
                        <DiPostgresql />
                    </motion.span>
                </motion.div>
            </motion.section>
        </motion.div>
    )
}

const ParallaxTechHeader = ({
    className,
    text,
}) => {
    const [initialPosition, setInitialPosition] = useState(null); // Default to desktop offset
    const [animatePosition, setAnimatePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateAnimation = () => {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            if (isMobile) {
                console.log("Mobile");
                console.log(initialPosition);
                setInitialPosition({ x: 0, y: 100 }); // Smaller offset for mobile
            } else {
                setInitialPosition({ x: 0, y: 100 }); // Larger offset for desktop
            }
            setAnimatePosition({ x: 0, y: 0 });
        };

        updateAnimation();

        window.addEventListener('resize', updateAnimation);

        return () => window.removeEventListener('resize', updateAnimation);
    }, []);

    if (initialPosition === null) {
        return null;
    }

    return (
        <>
            <motion.header
                className={className}
                initial={initialPosition}
                whileInView={animatePosition}
                transition={{
                    duration: 3,
                    type: "spring",
                    stiffness: 75,
                }}
                viewport={{
                    margin: '-50px',
                    once: true,
                }}
            >
                {text}
            </motion.header>
        </>
    )
}

/* END */

export default Hero;