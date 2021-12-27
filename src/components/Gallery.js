import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import gallery__img1 from '../img/gallery__img1.jpg'
import gallery__img2 from '../img/gallery__img2.jpg'
import gallery__img3 from '../img/gallery__img3.jpg'
import gallery__img4 from '../img/gallery__img4.jpg'
import gallery__img5 from '../img/gallery__img5.jpg'
import gallery__img6 from '../img/gallery__img6.jpg'
import gallery__img7 from '../img/gallery__img7.jpg'
import gallery__img8 from '../img/gallery__img8.jpg'
import gallery__img9 from '../img/gallery__img9.jpg'
import gallery__img10 from '../img/gallery__img10.jpg'
import gallery__img11 from '../img/gallery__img11.jpg'

import SwiperCore, {Pagination, Navigation} from 'swiper';
SwiperCore.use([Pagination, Navigation]);

const Gallery = () => {
    return (
        <div className="section gallery">
            <div className="section__blog">
                <h2 className="section__heading">Категории</h2>
            </div>
            <div className="section__slider">
                <Swiper slidesPerView={3} spaceBetween={20} loop={true} autoplay={true} loopFillGroupWithBlank={true} navigation={true} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper">
                    <SwiperSlide className="swiperSlide">
                        <img src={gallery__img1} className="gallery__slide-img" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <img src={gallery__img2} className="gallery__slide-img" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <img src={gallery__img3} className="gallery__slide-img" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <img src={gallery__img4} className="gallery__slide-img" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <img src={gallery__img5} className="gallery__slide-img" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <img src={gallery__img6} className="gallery__slide-img" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <img src={gallery__img7} className="gallery__slide-img" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <img src={gallery__img8} className="gallery__slide-img" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <img src={gallery__img9} className="gallery__slide-img" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <img src={gallery__img10} className="gallery__slide-img" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <img src={gallery__img11} className="gallery__slide-img" alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Gallery;