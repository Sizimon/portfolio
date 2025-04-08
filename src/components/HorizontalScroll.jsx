import React from "react";
import Slider from "react-slick";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Taskmanager_1 from '../assets/image/Taskmanager.png';
import Taskmanager_2 from '../assets/image/Taskmanager_2.png';
import Taskmanager_3 from '../assets/image/Taskmanager_3.png';
import { FaGithub, FaGlobe } from "react-icons/fa6";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HorizontalScroll.css';

/* Array of project cards */

const cards = [
    {
        id: 1,
        title: 'InTimeTasks',
        summary: 'A Full-Stack Task Manager Web App',
        description: 'InTimeTasks is a Full-Stack Task Manager web app which allows users to create and manage tasks over any designated period of time. The app is built using React, Node.js, Express, and PostgtreSQL. \n \n The app allows users to create tasks, set deadlines, mark tasks as complete and other interesting features. The app also allows users to view tasks by day, week, or month. The app is fully responsive, can be used on any device and is hosted on Heroku.',
        images: [Taskmanager_1, Taskmanager_2, Taskmanager_3],
        github: ''
    },
    {
        id: 2,
        title: 'GuildTracker Bot',
        summary: 'Tool for tracking guild activity in MMORPG communities.',
        images: [],
    },
    {
        id: 3,
        title: 'Weather Tracker',
        summary: 'A simple weather tracking app',
        images: [],
    },
]

console.log("Cards data", cards);

/* END */

/* HORIZONTAL SCROLL SECTION */

const HorizontalScroll = () => {
    // IMAGE MODAL OPTIONS
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
    // END IMAGE MODAL OPTIONS

    // CREATE TARGET REF FOR TRACKING SCROLL PROGRESS & SET THE SCROLL TRANSFORM DEFINITIONS
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(
        scrollYProgress, 
        [0, cards.length], 
        ["0%", `-${(cards.length - 1) * 100}%`]
    );

    // END


    // SET SECTION HEIGHT BASED ON AMOUNT OF CARDS TO ENSURE LENGTH OF SCROLL DYNAMICALLY ADAPTS TO AMOUNT OF PROJECTS
    const sectionHeight = `${100 * cards.length}vh`;
    // END

    // useEffect(() => {
    //     if (targetRef.current) {
    //         console.log("Section height:", targetRef.current.offsetHeight);
    //     }
    // }, [targetRef]);

    return (
        <>
            <section 
                ref={targetRef} 
                className='relative bg-MainDark'
                style={{ height: sectionHeight }}
            >
                <div className="sticky top-0 flex items-center overflow-hidden bg-MainLight h-screen">
                    <motion.div style={{ x }} className="flex">
                        {cards.map((card) => {
                            return (
                                <motion.div key={card.id} className="w-[100vw] h-[90vh] xs:h-[80vh]">
                                    <ProjectCard title={card.title} summary={card.summary} description={card.description} images={card.images} handleImageClick={handleImageClick} />
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

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
                            className='rounded-lg shadow-lg w-[80vw] h-[80vh] object-cover'
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

/* END */

/* PROJECT CARD COMPONENT (MAPPED IN HORIZONTAL SECTION) */

const ProjectCard = ({
    title, description, id, summary, images, handleImageClick
}) => {
    // SETTINGS FOR IMAGE CAROUSELS
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
    // END

    return (
        <div
            key={id}
            className='flex flex-col justify-center group relative h-full w-[101vw] overflow-hidden bg-MainDark whitespace-pre-line 4k:rounded-3xl'
        >
            <div className="flex flex-col items-center pb-0 4k:pb-[10vh]">
                <h1 className='text-2xl xs:text-4xl md:text-5xl 4k:text-9xl text-MainLight font-Anton pt-[2vh]'>{title}</h1>
                <p className='text-MainLight font-WorkSans px-4 text-center text-sm xs:text-lg md:text-2xl 4k:text-6xl'>{summary}</p>
            </div>
            <div className="grid grid-cols-1 ap:grid-cols-2 pt-0 md:pt-10 4k:px-[5%] 4k:gap-32">
                <div className="m-auto p-4 pb-12 md:px-6 md:pb-10 w-full justify-center items-center">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt=""
                                    onClick={() => handleImageClick(image)}
                                    className="h-auto max-h-[300px] 4k:max-h-[2000px] w-auto max-w-full object-contain mx-auto scale-[90%] transition delay-75 duration-200 ease-in-out hover:scale-100" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="m-auto px-2 md:px-6 bp:px-[20%] bp:py-[5%] ap:px-6 ap:py-0">
                    <p className='text-MainLight font-WorkSans text-[10px] xs:text-sm md:text-xl 4k:text-5xl'>{description}</p>
                    <div className='flex flex-row justify-center pt-10 4k:pt-[5vh] md:pt-4 text-center'>
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
                            <p className="self-center text-xs xs:text-base 4k:text-5xl">View</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalScroll;