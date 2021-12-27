import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

import slide1 from '../img/slide__1.jpg'
import slide2 from '../img/slide__2.jpg'
import slide3 from '../img/slide__3.jpg'
import slide4 from '../img/slide__4.jpg'


SwiperCore.use([Pagination, Navigation]);

const Header = () => {
    return (
        <div className="header">
            <div className="header__slider">
                <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper swiper__style">
                    <SwiperSlide><a href="#"><img src={slide1} alt="slider-image"/></a></SwiperSlide>
                    <SwiperSlide><a href="#"><img src={slide2} alt="slider-image"/></a></SwiperSlide>
                    <SwiperSlide><a href="#"><img src={slide3} alt="slider-image"/></a></SwiperSlide>
                    <SwiperSlide><a href="#"><img src={slide4} alt="slider-image"/></a></SwiperSlide>
                </Swiper>
            </div>
            <div className="header__advert"></div>
            <div className="header__heading"></div>
            <div className="header__heading"></div>
        </div>
    );
};

export default Header;