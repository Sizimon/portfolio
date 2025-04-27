import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const ImageModal = ({ selectedImage, setSelectedImage }) => {
    const handleImageClose = () => {
        setSelectedImage(null);
        document.body.classList.remove('no-scroll');
    };

    return (
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
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ImageModal;