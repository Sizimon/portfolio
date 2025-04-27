import React from "react";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import cards from '../cards.js';
import ImageModal from "../ImageComponents/ImageModal.jsx";
import HorizontalScrollCards from "./HorizontalScrollCards.jsx";

import './HorizontalScroll.css';

/* HORIZONTAL SCROLL SECTION */

const HorizontalScroll = () => {
    const [selectedImage, setSelectedImage] = useState(null);

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

    // SET SECTION HEIGHT BASED ON AMOUNT OF CARDS TO ENSURE LENGTH OF SCROLL DYNAMICALLY ADAPTS TO AMOUNT OF PROJECTS
    const sectionHeight = `${100 * cards.length}vh`;

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
                                    <HorizontalScrollCards title={card.title} summary={card.summary} description={card.description} images={card.images} livelink={card.livelink} github={card.github} setSelectedImage={setSelectedImage} />
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* IMAGE MODALS */}
            <ImageModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            {/* END IMAGE MODALS */}
        </>
    )
};

export default HorizontalScroll;