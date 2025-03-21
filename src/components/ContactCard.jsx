import React from 'react';
import { motion } from 'framer-motion';

const LETTER_DELAY = 0.125;
const BOX_FADE_DURATION = 0.125;

const Typewriter = ({ header }) => {

    return (
        <h2
            className='text-MainLight font-Anton uppercase text-4xl md:text-5xl 4k:text-8xl text-center m-auto pt-[20vh]'
        >
            {header.split('').map((letter, index) => {
                return (
                <motion.span 
                key={index}
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    delay: index * LETTER_DELAY,
                    duration: BOX_FADE_DURATION,
                    ease: 'easeInOut',
                    
                }}
                className='relative'>
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


const CoverCard = () => {
    return (
        <div className='bg-MainDark h-full flex flex-col items-start justify-center pt-10 pb-[20vh] uppercase'>
            <Typewriter header='Contact Me' />
            <div className='flex flex-col items-center justify-center w-full px-2'> 
                <p className='text-MainLight font-WorkSans text-center text-lg md:text-xl 4k:text-7xl px-6'>I'm always interested in new opportunities to grow. Feel free to reach out!</p>
                <div className='flex flex-col items-center 4k:items-center justify-center pt-[5vh] text-center'>
                    <p className='flex flex-row p-1 gap-2 rounded-md text-MainLight font-WorkSans text-lg 4k:text-6xl'>EMAIL: <span>szymonsamus@gmail.com</span></p>
                    <p className='flex flex-row p-1 gap-2 rounded-md text-MainLight font-WorkSans text-lg 4k:text-6xl'>PHONE: <span>+46736487570</span></p>
                </div>
            </div>
        </div>
    )
}

export default CoverCard;