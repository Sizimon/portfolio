import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaJs, FaAws, FaDocker } from "react-icons/fa6"
import { DiPostgresql } from "react-icons/di"

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

export const HeroTechHeader = ({
    className,
    text,
}) => {
    const [initialPosition, setInitialPosition] = useState(null); // Default to desktop offset
    const [animatePosition, setAnimatePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateAnimation = () => {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            if (isMobile) {
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

const HeroTechStack = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center mx-auto px-4"
        >
            {/* MAIN TECHNOLOGIES DISPLAY */}
            <motion.section className='flex flex-col justify-center text-center p-2'>
                <HeroTechHeader
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


export default HeroTechStack;