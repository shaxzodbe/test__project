import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


import SwiperCore, {
    Pagination, Navigation
} from 'swiper';

SwiperCore.use([Pagination, Navigation]);

const Section = () => {
    return (
        <div className="section">
            <div className="section__blog">
                <h2 className="section__heading">Категории</h2>
            </div>
            <div className="section__slider">
                <Swiper slidesPerView={3} spaceBetween={20}  loopFillGroupWithBlank={true} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper">
                    <SwiperSlide className="swiperSlide">
                        <div className="slide__min-describe">
                            <h4>Кровати</h4>
                            <button>Подробно</button>
                        </div>
                        <div className="slide__bg-img"></div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div className="slide__min-describe">
                            <h4>Стулья, кресла и табуреты</h4>
                            <button>Подробно</button>
                        </div>
                        <div className="slide__bg-img"></div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div className="slide__min-describe">
                            <h4>Столы</h4>
                            <button>Подробно</button>
                        </div>
                        <div className="slide__bg-img"></div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div className="slide__min-describe">
                            <h4>Полки</h4>
                            <button>Подробно</button>
                        </div>
                        <div className="slide__bg-img"></div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div className="slide__min-describe">
                            <h4>Осветительные приборы</h4>
                            <button>Подробно</button>
                        </div>
                        <div className="slide__bg-img"></div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div className="slide__min-describe">
                            <h4>Вешалки</h4>
                            <button>Подробно</button>
                        </div>
                        <div className="slide__bg-img"></div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Section;