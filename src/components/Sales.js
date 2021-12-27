import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/grid"
import "swiper/css/pagination"

import sales__img1 from "../img/sales__img1.jpg"
import sales__img2 from "../img/sales__img2.jpg"
import sales__img3 from "../img/sales__img3.jpg"
import sales__img4 from "../img/sales__img4.jpg"
import sales__img5 from "../img/sales__img5.jpg"
import sales__img6 from "../img/sales__img6.jpg"
import sales__img7 from "../img/sales__img7.jpg"
import sales__img8 from "../img/sales__img8.jpg"
import sales__img9 from "../img/sales__img9.jpg"
import sales__img10 from "../img/sales__img10.jpg"
import sales__img11 from "../img/sales__img11.jpg"
import sales__img12 from "../img/sales__img12.jpg"
import sales__img13 from "../img/sales__img13.jpg"
import sales__img14 from "../img/sales__img14.jpg"
import sales__img15 from "../img/sales__img15.jpg"
import sales__img16 from "../img/sales__img16.jpg"
import sales__img17 from "../img/sales__img17.jpg"
import sales__img18 from "../img/sales__img18.jpg"
import sales__img19 from "../img/sales__img18.jpg"
import sales__img20 from "../img/sales__img18.jpg"
import sales__img21 from "../img/sales__img18.jpg"
import sales__img22 from "../img/sales__img18.jpg"
import sales__img23 from "../img/sales__img18.jpg"
import sales__img24 from "../img/sales__img18.jpg"

import SwiperCore, {Grid, Pagination} from 'swiper';

SwiperCore.use([Grid, Pagination]);

const Sales = () => {
    return (
        <div className="section product sales">
            <div className="section__blog">
                <h2 className="section__heading">Топ продаж</h2>
            </div>
            <div className="swiper__slider">
                <Swiper slidesPerView={3} slidesPerGroup={3} loopFillGroupWithBlank={true} grid={{
                    "rows": 2,
                    "fill": 2
                }} spaceBetween={20} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper">
                    <SwiperSlide className="product__slide-blog">
                        <div className="sales__img">
                            <img src={sales__img1} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img2} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img3} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img4} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img5} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img6} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img7} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img8} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img9} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img10} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img11} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img12} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img13} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img14} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img15} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img16} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img17} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img18} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img19} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img20} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img21} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img22} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img23} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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
                        <div className="sales__img">
                            <img src={sales__img24} alt=""/>
                        </div>
                        <div className="product__slidediscus-text">
                            <h4>Компьютерный стол модель "T142"</h4>
                            <h2>2 000 000</h2>
                            <p>сум / шт.</p>
                            <div className="product__check">
                                <i className='bx bx-check' style={{color: '#52c08c'}}></i>
                                <b>Под заказ</b>
                            </div>
                            <div className="product__state">
                                <span>не указывать</span>
                                <span>В розницу</span>
                            </div>
                            <div className="product__contact sales__flex">
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

export default Sales;