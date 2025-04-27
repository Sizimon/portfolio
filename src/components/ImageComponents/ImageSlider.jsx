import Slider from "react-slick";
import React from "react";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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


const ImageSlider = ({ images, setSelectedImage }) => {
    // For image modal
    const handleImageClick = (image) => {
        setSelectedImage(image);
        document.body.classList.add('no-scroll');
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="w-full h-full flex justify-center items-center">
                    <img
                        src={image}
                        alt={`Slide ${index}`}
                        onClick={() => handleImageClick(image)}
                        className="w-full h-full object-cover" />
                </div>
            ))}
        </Slider>
    )
}

export default ImageSlider;