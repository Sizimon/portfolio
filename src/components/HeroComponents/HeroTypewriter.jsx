import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LETTER_DELAY = 0.125;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const HeroTypewriter = ({ subheading }) => {
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

export default HeroTypewriter;