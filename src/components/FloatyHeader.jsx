import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const FloatyHeader = ({ letters }) => {
    const letterRefs = useRef([]);

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    useEffect(() => {
        // Staggered fade-in and up animation
        gsap.fromTo(
            letterRefs.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.6,
                ease: "power3.out",
            }
        );
        // Wiggly animation for each letter
        letterRefs.current.forEach((el, i) => {
            const duration = randomIntFromInterval(2, 6);
            gsap.to(el, {
                y: -10,
                repeat: -1,
                yoyo: true,
                ease: "linear",
                duration,
                delay: 0.5,
            });
        });
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
