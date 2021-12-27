import React from 'react';

import facebook from "../img/facebook.png"
import instagram from "../img/instagram.png"
import telegram from "../img/telegram.png"

const Footer = () => {
    return (
        <footer>
            <div className="footer__grid">
                <div className="footer__item">
                    <h4>SOLE Furniture</h4>
                    <p>По всем интересующим Вас вопросам Вы можете обратиться по указанным контактным телефонам или
                        приехать в наш офис. Мы всегда рады Вам!</p>
                </div>
                <div className="footer__item">
                    <h4>График работы</h4>
                    <div className="footer__item-block">
                        <div className="footer__dist">
                            <span>Понедельник</span>
                            <span>09:00 - 18:00</span>
                        </div>
                        <div className="footer__dist">
                            <span>Вторник</span>
                            <span>09:00 - 18:00</span>
                        </div>
                        <div className="footer__dist">
                            <span>Среда</span>
                            <span>09:00 - 18:00</span>
                        </div>
                        <div className="footer__dist">
                            <span>Четверг</span>
                            <span>09:00 - 18:00</span>
                        </div>
                        <div className="footer__dist">
                            <span>Пятница</span>
                            <span>09:00 - 18:00</span>
                        </div>
                        <div className="footer__dist">
                            <span>Суббота</span>
                            <span>Выходной</span>
                        </div>
                        <div className="footer__dist">
                            <span>Воскресенье</span>
                            <span>Выходной</span>
                        </div>
                    </div>
                </div>
                <div className="footer__item">
                    <h4>Категории</h4>
                    <ul>
                        <li><a href="#">Кровати</a></li>
                        <li><a href="#">Стулья, кресла и табуреты</a></li>
                        <li><a href="#">Столы</a></li>
                        <li><a href="#">Полки</a></li>
                        <li><a href="#">Осветительные приборы</a></li>
                        <li><a href="#">Вешалки</a></li>
                    </ul>
                </div>
                <div className="footer__item">
                    <ul className="footer__item-list">
                        <li><a href="#"><img src={facebook} alt=""/></a></li>
                        <li><a href="#"><img src={instagram} alt=""/></a></li>
                        <li><a href="#"><img src={telegram} alt=""/></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__author">
                <div className="footer__block">© 2021 - 2022 <span>SOLE Furniture</span> Сайт
                    разработан на платформе <a href="#" alt="Создание сайтов в Ташкенте - glotr.uz">Glotr.uz</a>. <span>Все права защищены.</span></div>
            </div>
        </footer>
    );
};

export default Footer;