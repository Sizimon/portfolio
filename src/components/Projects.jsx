import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import FloatyHeader from './FloatyHeader.jsx';
import Grippendor from '../assets/image/Grippy_1.png';
import Noto from '../assets/image/noto.png';
import Guruweather from '../assets/image/Weather_3.png';

const images = {
    Grippendor: Grippendor,
    Noto: Noto,
    Guruweather: Guruweather,
};

const projects = [
    {
        title: "Grippendor",
        short: "Discord Community Management Bot",
        long: `
        Grippendor is a Discord bot designed to help communities create & manage their own Discord servers. 
        It offers features like role management, event scheduling, game filtering and more. 
        The bot is built with a focus on ease of use and flexibility, allowing server owners to customise it to their needs. 
        In every way, the bot aims to ease the burden of managing a Discord server, making it more accessible for everyone.
        `,
        builtWith: "Javascript, React, Node.js (Discord.js/Express), PostgreSQL",
        image: images.Grippendor ? `url(${images.Grippendor})` : "url('/images/default.jpg')",
        demo: "https://szymonsamus.dev/bot-dashboard/",
        github: "https://github.com/user/project1"
    },
    {
        title: "noto()",
        short: "Rich Text Editor & Notekeeping App",
        long: `
        Noto() is a rich text editor and notekeeping application that allows users to create, edit, and manage notes with advanced formatting options, filtering and categorising. 
        Future plans include AI integration for summarising and generating content & a clip curating feature for enhanced study flows.
        `,
        builtWith: "Typescript, Next.js, Node.js (Express), PostgreSQL",
        image: images.Noto ? `url(${images.Noto})` : "url('/images/default.jpg')",
        demo: "https://szymonsamus.dev/noto/",
        github: "https://github.com/user/project2"
    },
    {
        title: "Guruweather",
        short: "Weather Forecasting App",
        long: `
        Guruweather is a weather forecasting application that provides real-time weather updates, including temperature, humidity, wind speed, and more.
        It uses a third-party API to fetch weather data and display it in an easy-to-read format with helpful animations.
        The app is designed to be user-friendly and visually appealing, making it easy for users to check the weather at a glance.
        Future plans include adding features like location-based weather alerts and a more detailed forecast view.`,
        builtWith: "Javascript, React",
        image: images.Guruweather ? `url(${images.Guruweather})` : "url('/images/default.jpg')",
        demo: "https://szymonsamus.dev/weather-app/",
        github: "https://github.com/user/project3"
    }
];

const Projects = () => {
    const [hovered, setHovered] = useState(null);
    const bannerRefs = useRef([]);
    const contentRefs = useRef([]);
    const bgRefs = useRef([]);

    // Animate banners with GSAP
    useEffect(() => {
        projects.forEach((_, idx) => {
            const isHovered = hovered === idx;
            gsap.to(bannerRefs.current[idx], {
                flexGrow: isHovered ? 3 : 1,
                zIndex: isHovered ? 20 : 10,
                duration: 0.1,
                ease: "power3.inOut"
            });
            gsap.to(bgRefs.current[idx], {
                filter: isHovered ? "blur(6px)" : "blur(0px)",
                duration: 0.3,
                ease: "power3.inOut"
            });
            gsap.to(contentRefs.current[idx], {
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 40,
                pointerEvents: isHovered ? "auto" : "none",
                duration: 0.5,
                delay: isHovered ? 0.4 : 0,
                ease: "power3.out"
            });
        });
    }, [hovered]);

    return (
        <>
            <div className="w-full px-4 py-8 flex flex-col items-center">
                {/* Header */}
                <FloatyHeader letters={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']} />

                {/* Mobile: vertical cards */}
                <div className="flex flex-col gap-6 w-full max-w-md md:hidden">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="relative rounded-lg shadow-lg overflow-hidden"
                            style={{
                                backgroundImage: project.image,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-black/60" />
                            <div className="relative z-10 p-6 flex flex-col items-center text-white">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="mb-4 text-center">{project.short}</p>
                                <p className="mb-4 text-center text-sm">{project.long}</p>
                                <div className="flex gap-4">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop: GSAP expanding banners */}
                <div className="hidden md:flex w-full max-w-6xl h-[28rem] items-stretch justify-center gap-x-4">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            ref={el => bannerRefs.current[idx] = el}
                            className={`
                            relative flex flex-col justify-center items-center overflow-hidden cursor-pointer
                            rounded-lg shadow-lg
                            transition-all duration-500
                            flex-1 basis-0 min-w-0
                        `}
                            style={{ minWidth: 0 }}
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Background image layer with GSAP blur */}
                            <div
                                ref={el => bgRefs.current[idx] = el}
                                className="absolute inset-0 transition-all duration-500"
                                style={{
                                    backgroundImage: project.image,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    zIndex: 0,
                                }}
                            />
                            {/* Overlay for preview which darkens image if not hovered */}
                            <div className={`absolute inset-0 transition-all duration-500 ${hovered === idx ? "bg-black/70" : "bg-black/60"}`} />
                            {/* Preview content */}
                            <div className={`relative z-10 flex flex-col justify-center items-center h-full text-white px-4 ${hovered === idx ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-center">{project.short}</p>
                            </div>
                            {/* Detailed view overlay if hovered */}
                            <div
                                ref={el => contentRefs.current[idx] = el}
                                className="absolute inset-0 text-white flex flex-col justify-center items-center p-8 z-20"
                                style={{ opacity: 0, pointerEvents: "none", transform: "translateY(40px)" }}
                            >
                                <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                                <p className="mb-4">{project.long}</p>
                                <div className="flex gap-4">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition cursor-pointer"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className='bottom-0 left-0 right-0 h-[60vh] 4k:h-[40vh] bg-gradient-to-b from from-MainDark/0 to-MainDark/100'
            />
        </>

    );
};

export default Projects;