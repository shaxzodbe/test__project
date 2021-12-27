import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


import SwiperCore, {
    Pagination, Navigation, Autoplay
} from 'swiper';

import product__img1 from '../img/product__img1.png'
import product__img2 from '../img/product__img2.png'
import product__img3 from '../img/product__img3.png'
import product__img4 from '../img/product__img4.png'
import product__img5 from '../img/product__img5.png'
import product__img6 from '../img/product__img6.png'
import product__img7 from '../img/product__img7.png'
import product__img8 from '../img/product__img8.png'
import product__img9 from '../img/product__img9.png'
import product__img10 from '../img/product__img10.png'
import product__img11 from '../img/product__img11.png'
import product__img12 from '../img/product__img12.png'

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Product = () => {
    return (
        <div className="section product">
            <div className="section__blog">
                <h2 className="section__heading">Новые товары</h2>
            </div>
            <div className="swiper__slider">
                <Swiper slidesPerView={6} spaceBetween={20} autoplay={{"delay" : 2500}} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper">
                    <SwiperSlide className="product__slide-blog">
                        <img src={product__img1} alt=""/>
                        <div className="product__slidediscus-text">
                            <h4>Елка в стиле</h4>
                            <h2>600 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact">
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-envelope' style={{color: '#999999'}}></i>
                                    <b>Сообщение</b>
                                </a>
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-phone bx-rotate-270' style={{color: '#999999'}}></i>
                                    <b>Позвонить</b>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product__slide-blog">
                        <img src={product__img2} alt=""/>
                        <div className="product__slidediscus-text">
                            <h4>Елка в стиле</h4>
                            <h2>600 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact">
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-envelope' style={{color: '#999999'}}></i>
                                    <b>Сообщение</b>
                                </a>
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-phone bx-rotate-270' style={{color: '#999999'}}></i>
                                    <b>Позвонить</b>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product__slide-blog">
                        <img src={product__img3} alt=""/>
                        <div className="product__slidediscus-text">
                            <h4>Елка в стиле</h4>
                            <h2>600 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact">
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-envelope' style={{color: '#999999'}}></i>
                                    <b>Сообщение</b>
                                </a>
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-phone bx-rotate-270' style={{color: '#999999'}}></i>
                                    <b>Позвонить</b>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product__slide-blog">
                        <img src={product__img4} alt=""/>
                        <div className="product__slidediscus-text">
                            <h4>Елка в стиле</h4>
                            <h2>600 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact">
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-envelope' style={{color: '#999999'}}></i>
                                    <b>Сообщение</b>
                                </a>
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-phone bx-rotate-270' style={{color: '#999999'}}></i>
                                    <b>Позвонить</b>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product__slide-blog">
                        <img src={product__img5} alt=""/>
                        <div className="product__slidediscus-text">
                            <h4>Елка в стиле</h4>
                            <h2>600 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact">
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-envelope' style={{color: '#999999'}}></i>
                                    <b>Сообщение</b>
                                </a>
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-phone bx-rotate-270' style={{color: '#999999'}}></i>
                                    <b>Позвонить</b>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product__slide-blog">
                        <img src={product__img6} alt=""/>
                        <div className="product__slidediscus-text">
                            <h4>Елка в стиле</h4>
                            <h2>600 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact">
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-envelope' style={{color: '#999999'}}></i>
                                    <b>Сообщение</b>
                                </a>
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-phone bx-rotate-270' style={{color: '#999999'}}></i>
                                    <b>Позвонить</b>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product__slide-blog">
                        <img src={product__img7} alt=""/>
                        <div className="product__slidediscus-text">
                            <h4>Елка в стиле</h4>
                            <h2>600 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact">
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-envelope' style={{color: '#999999'}}></i>
                                    <b>Сообщение</b>
                                </a>
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-phone bx-rotate-270' style={{color: '#999999'}}></i>
                                    <b>Позвонить</b>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product__slide-blog">
                        <img src={product__img8} alt=""/>
                        <div className="product__slidediscus-text">
                            <h4>Елка в стиле</h4>
                            <h2>600 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact">
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-envelope' style={{color: '#999999'}}></i>
                                    <b>Сообщение</b>
                                </a>
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-phone bx-rotate-270' style={{color: '#999999'}}></i>
                                    <b>Позвонить</b>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product__slide-blog">
                        <img src={product__img9} alt=""/>
                        <div className="product__slidediscus-text">
                            <h4>Елка в стиле</h4>
                            <h2>600 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact">
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-envelope' style={{color: '#999999'}}></i>
                                    <b>Сообщение</b>
                                </a>
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-phone bx-rotate-270' style={{color: '#999999'}}></i>
                                    <b>Позвонить</b>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product__slide-blog">
                        <img src={product__img10} alt=""/>
                        <div className="product__slidediscus-text">
                            <h4>Елка в стиле</h4>
                            <h2>600 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact">
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-envelope' style={{color: '#999999'}}></i>
                                    <b>Сообщение</b>
                                </a>
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-phone bx-rotate-270' style={{color: '#999999'}}></i>
                                    <b>Позвонить</b>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product__slide-blog">
                        <img src={product__img11} alt=""/>
                        <div className="product__slidediscus-text">
                            <h4>Елка в стиле</h4>
                            <h2>600 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact">
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-envelope' style={{color: '#999999'}}></i>
                                    <b>Сообщение</b>
                                </a>
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-phone bx-rotate-270' style={{color: '#999999'}}></i>
                                    <b>Позвонить</b>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product__slide-blog">
                        <img src={product__img12} alt=""/>
                        <div className="product__slidediscus-text">
                            <h4>Елка в стиле</h4>
                            <h2>600 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact">
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-envelope' style={{color: '#999999'}}></i>
                                    <b>Сообщение</b>
                                </a>
                                <a href="#!" className="product__contact-blog">
                                    <i className='bx bxs-phone bx-rotate-270' style={{color: '#999999'}}></i>
                                    <b>Позвонить</b>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Product;
