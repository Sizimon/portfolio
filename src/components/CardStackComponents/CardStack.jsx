import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe } from "react-icons/fa6";

import cards from '../cards.js'; // Import the cards array from cards.js
import ImageSlider from '../ImageComponents/ImageSlider.jsx';
import ImageModal from '../ImageComponents/ImageModal.jsx';

import './CardStack.css'; // Import the CSS file for styling


const CardStack = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const handleWheel = (event) => {
            if (!isHovering) return; // Ignore scroll events if not hovering
            event.preventDefault(); // Prevent default scroll behavior
            const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

            if (scrollDirection === 'down' && currentCard < cards.length - 1) {
                setCurrentCard((prev) => prev + 1); // Flick the top card off
            } else if (scrollDirection === 'up' && currentCard > 0) {
                setCurrentCard((prev) => prev - 1); // Put the card back on the stack
            }
        };

        const container = containerRef.current;
        // Add event listener for wheel scroll
        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            // Cleanup event listeners
            container.removeEventListener('wheel', handleWheel);
        };
    }, [currentCard, isHovering]);

    return (
        <>

            <div
                className="relative w-full overflow-hidden h-auto"
            >
                <div
                    ref={containerRef}
                    className="relative w-full max-w-4xl mx-auto h-[100vh] overflow-hidden"
                    style={{ pointerEvents: 'auto' }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div className="sticky top-0 w-full h-[100vh] flex justify-center items-center">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                className="absolute w-full h-5/6 bg-MainDark shadow-sm shadow-MainDark rounded-lg flex flex-col justify-center items-center"
                                style={{
                                    zIndex: cards.length - index,
                                }}
                                initial={{
                                    y: index * 20, // Offset each card slightly to create a stack effect 
                                    opacity: index === currentCard ? 1 : 0.8, // Dim cards behind the current card
                                }}
                                animate={{
                                    y: index < currentCard ? -500 : index * 5, // Move cards out of view when flicked
                                    opacity: index < currentCard ? 0 : index === currentCard ? 1 : 0.5, // Highlight the current card
                                }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <div className='flex flex-col justify-center items-center w-full'>
                                    <h1 className="text-3xl font-bold text-MainLight uppercase font-Anton">{card.title}</h1>
                                    <h3 className="text-sm text-MainLight">{card.summary}</h3>
                                </div>
                                <div className="grid grid-cols-1 pt-0">
                                    <div className="mx-auto py-6 w-1/2 justify-center items-center">
                                        <ImageSlider images={card.images} setSelectedImage={setSelectedImage} />
                                    </div>
                                    <div className="m-auto px-2 md:px-6 bp:px-[20%] bp:py-[5%] ap:px-6 ap:py-0">
                                        <p className='text-center text-MainLight font-WorkSans text-[10px] xs:text-sm md:text-base 4k:text-5xl'>{card.description}</p>
                                        <div className='flex flex-row justify-center pt-10 4k:pt-[5vh] md:pt-4 text-center pb-10'>
                                            <button
                                                className='flex flex-row p-1 gap-2 4k:gap-6  rounded-md text-MainDark bg-MainLight mr-5'
                                            >
                                                <FaGithub className="h-6 w-6 xs:h-8 xs:w-8 4k:h-24 4k:w-24 text-MainDark" />
                                                <a
                                                    className="self-center text-xs xs:text-base 4k:text-5xl"
                                                    href={card.github}
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
                                                    href={card.livelink}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    View Live
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hidden unless image clicked */}
            <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </>
    )
};

export default CardStack;