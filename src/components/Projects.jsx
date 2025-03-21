import React from 'react';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import HorizontalScroll from './HorizontalScroll';

/* PROJECT SECTION LETTER EFFECT */

const ProjectHeaderGridVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const ProjectHeaderGridItems = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const ProjectHeaderGridVariant2 = (duration) => ({
    initial: { y: 0 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
        }
    }
})

/* END */

/* MAIN PROJECT SECTION */

const ProjectHeadingLetters = ({ variants, className, text, duration }) => (
    <motion.div
        className={className}
        variants={variants}
    >
        <motion.div
            variants={ProjectHeaderGridVariant2(duration)}
            initial="initial"
            whileInView="animate"
        >
            {text}
        </motion.div>
    </motion.div>
);

const Projects = () => {
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return (
        <>  
            {/* PROJECTS HEADING TITLE / ANIMATION */}
            <motion.div
                className='relative w-full py-[2.5vh]'
            >
                <motion.div
                    className='grid grid-cols-8 gap-2 w-full md:w-2/4 justify-center items-center mx-auto pb-0  px-8 md:px-0 z-10'
                    variants={ProjectHeaderGridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        margin: '-150px',
                    }}
                >
                    {/* This loops the array of letts and sets a random animation duration for each to create the "wiggly" effect. */}
                    {['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S'].map((letter, index) => {
                        const animDuration = randomIntFromInterval(2, 6);
                        return (
                            <ProjectHeadingLetters
                                key={index}
                                variants={ProjectHeaderGridItems}
                                className='text-MainDark text-4xl md:text-7xl 4k:text-9xl font-WorkSans'
                                text={letter}
                                duration={animDuration}
                            />
                        );
                    })}
                </motion.div>
            </motion.div>
            {/* END */}

            {/* HORIZONTAL SCROLL CARDS COMPONENT (MAIN PROJECTS SECTION) */}
            <HorizontalScroll />
            {/* END */}

            <div
                className='bottom-0 left-0 right-0 h-[60vh] 4k:h-[40vh] bg-gradient-to-b from from-MainDark/0 to-MainDark/100'
            />
        </>
    )
}

export default Projects;