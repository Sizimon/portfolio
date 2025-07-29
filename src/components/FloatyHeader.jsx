import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const FloatyHeader = ({ letters }) => {
    const letterRefs = useRef([]);

    useEffect(() => {
        // Timeline for staggered fade-in
        const tl = gsap.timeline();
        tl.fromTo(
            letterRefs.current,
            { opacity: 0, y: 30, rotation: 0 },
            {
                opacity: 1,
                y: 0,
                rotation: 0,
                stagger: 0.15,
                duration: 0.7,
                ease: "power2.out",
            }
        );

        // After fade-in, start floaty wiggle for each letter
        letterRefs.current.forEach((el, i) => {
            const duration = Math.random() * 4 + 4; // 4-8s (Alter values to adjust floaty duration higher is slower)
            const amplitude = Math.random() * 12 + 12; // 12-24px (Alter values to adjust floaty amplitude, the higher the value the more the letter will move in a given direction)
            gsap.to(el, {
                y: `+=${amplitude * (Math.random() > 0.5 ? 1 : -1)}`, // Sets random initial direction (Y axis)
                rotation: Math.random() * 16 - 8, // -8 to 8 deg (Increase range for more rotation)
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                duration,
                delay: 0.7 + i * 0.15, // start after fade-in
            });
        });

        // Cleanup on unmount
        return () => {
            gsap.killTweensOf(letterRefs.current);
        };
    }, []);

    return (
        <div className="relative w-full py-[5vh]">
            <div className="grid grid-cols-8 gap-2 w-full md:w-2/4 justify-center items-center mx-auto pb-0 px-8 md:px-0 z-10">
                {letters.map((letter, i) => (
                    <span
                        key={i}
                        ref={el => (letterRefs.current[i] = el)}
                        className="text-MainDark text-4xl md:text-7xl 4k:text-9xl font-WorkSans inline-block"
                        style={{ opacity: 0, display: 'inline-block' }}
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default FloatyHeader;