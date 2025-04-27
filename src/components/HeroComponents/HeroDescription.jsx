import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

const HeroDescription = ({
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

export default HeroDescription;