import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectImages from '../images.js';
import Slider from "react-slick";
import { FaGithub, FaGlobe } from "react-icons/fa6";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cards = [
    {
        id: 1,
        title: 'Gripendor Discord Bot',
        summary: 'A Discord bot for managing and tracking guild activity in gaming communities.',
        description: 'The Gripendor Bot is a Discord bot designed to streamline event management, role tracking, and attendance tracking within a Discord server. It integrates with a PostgreSQL database to store and retrieve data, and it provides a seamless user experience through Discord commands, buttons, and modals. The bot also integrates with Cloudinary for image management and offers a customizable dashboard for server administrators.',
        images: [ProjectImages.gimg1, ProjectImages.gimg2, ProjectImages.gimg3],
        livelink: 'https://szymonsamus.dev/bot-dashboard'
    },
    {
        id: 2,
        title: 'Task Manager',
        summary: 'A simple task manager app for tracking tasks and projects.',
        description: 'PLACEHOLDER TEXT',
        images: [ProjectImages.timg1, ProjectImages.timg2, ProjectImages.timg3],
    },
    {
        id: 3,
        title: 'Weather Tracker',
        summary: 'A simple weather tracking app',
        description: 'GuruWeather is a modern weather application built with React that provides real-time weather information for any location. It features a visually appealing interface with animations, dynamic backgrounds, and responsive design. The app uses the OpenWeatherMap API to fetch weather data and displays it in an intuitive and user-friendly way.',
        images: [ProjectImages.wimg1, ProjectImages.wimg2, ProjectImages.wimg3],
        livelink: 'https://szymonsamus.dev/weather-app'
    },
];

const CardStack = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef(null);

    // For touch gestures
    const touchStartY = useRef(0);
    const touchEndY = useRef(0);

    // For image modal
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        console.log("Image clicked:", image);
        setSelectedImage(image);
        document.body.classList.add('no-scroll');
    };

    const handleImageClose = () => {
        console.log("Modal closed");
        setSelectedImage(null);
        document.body.classList.remove('no-scroll');
    };

    // Slider settings
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }

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

        const handleTouchStart = (event) => {
            touchStartY.current = event.touches[0].clientY; // Record the starting Y position
        };

        const handleTouchMove = (event) => {
            touchEndY.current = event.touches[0].clientY; // Update the ending Y position
        };

        const handleTouchEnd = () => {
            const swipeDistance = touchStartY.current - touchEndY.current;

            const threshold = 50; // Minimum swipe distance to trigger a card change

            if (swipeDistance > threshold && currentCard < cards.length - 1) {
                // Swipe up
                setCurrentCard((prev) => prev + 1);
            } else if (swipeDistance < -threshold && currentCard > 0) {
                // Swipe down
                setCurrentCard((prev) => prev - 1);
            }

            // Reset touch positions
            touchStartY.current = 0;
            touchEndY.current = 0;
        };

        const container = containerRef.current;
        // Add event listeners for both wheel and touch
        container.addEventListener('wheel', handleWheel, { passive: false });
        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchmove', handleTouchMove, { passive: true });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            // Cleanup event listeners
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
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
                                        <Slider {...settings}>
                                            {card.images.map((image, index) => (
                                                <div key={index}>
                                                    <img
                                                        src={image}
                                                        alt=""
                                                        onClick={() => handleImageClick(image)}
                                                        className="h-auto max-h-[200px] 4k:max-h-[2000px] mx-auto scale-[90%] transition delay-75 duration-200 ease-in-out hover:scale-100" />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                    <div className="m-auto px-2 md:px-6 bp:px-[20%] bp:py-[5%] ap:px-6 ap:py-0">
                                        <p className='text-center text-MainLight font-WorkSans text-[10px] xs:text-sm md:text-base 4k:text-5xl'>{card.description}</p>
                                        <div className='flex flex-row justify-center pt-10 4k:pt-[5vh] md:pt-4 text-center pb-10'>
                                            <button
                                                className='flex flex-row p-1 gap-2 4k:gap-6  rounded-md text-MainDark bg-MainLight mr-5'
                                            >
                                                <FaGithub className="h-6 w-6 xs:h-8 xs:w-8 4k:h-24 4k:w-24 text-MainDark" />
                                                <p className="self-center text-xs xs:text-base 4k:text-5xl">GitHub</p>
                                            </button>
                                            <button
                                                className='flex flex-row p-1 gap-2 4k:gap-6 rounded-md text-MainDark bg-MainLight ml-5'
                                            >
                                                <FaGlobe className="h-6 w-6 xs:h-8 xs:w-8 4k:h-24 4k:w-24 text-MainDark" />
                                                <a
                                                    className="self-center text-xs xs:text-base 4k:text-5xl"
                                                    href={card.livelink}
                                                    target="_blank"
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

            {/* IMAGE MODALS */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className='fixed inset-0 flex items-center justify-center bg-MainDark bg-opacity-75 z-50'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleImageClose}
                    >
                        <motion.img
                            src={selectedImage}
                            alt='Full size'
                            className='rounded-lg shadow-lg w-[90vw] h-[90vh] object-contain'
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >

                        </motion.img>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* END IMAGE MODALS */}
        </>
    )
};


export default CardStack;