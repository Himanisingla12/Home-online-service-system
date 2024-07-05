import React, { useState } from 'react';
import { references } from '../data/db';
import { Card } from 'antd';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Testimonials = () => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((prevSlide) => (prevSlide + 1) % references.length);
    };

    const prevSlide = () => {
        setSlide((prevSlide) => (prevSlide - 1 + references.length) % references.length);
    };

    return (
        <div className="testimonials-container" id='aboutus'>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
            {references && references.map((val, ind) => (
                <Card
                    key={ind}
                    className={slide === ind ? "antd-card" : "antd-card antd-card-hidden"}
                >
                    <img src={process.env.PUBLIC_URL + val.img} alt={val.title} />
                    <h3>{val.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex beatae eius rerum sapiente temporibus nulla! Qui corrupti nulla excepturi placeat sunt, voluptatum odit architecto temporibus vero dicta dolorem ipsam.</p>

                </Card>
            ))}
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />

        </div>
    );
};

export default Testimonials;
