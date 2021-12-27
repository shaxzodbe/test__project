import React from 'react';
import furniture from '../img/furniture.jpg'

const Furniture = () => {
    return (
        <div className="furniture">
            <div className="furniture__inner">
                <div className="furniture__content">
                    <h2>SOLE Furniture</h2>
                    <p>Ни для кого не секрет как важно доверие к продавцу в наше время. Отдавая деньги за товар или
                        услугу, клиент хочет иметь уверенность, что взамен он получит качество и ни в коем случае не
                        разочаруется. Наша компания SOLE Furniture готова предоставить именно это - уверенность в
                        качестве и удовлетворительном результате. Мы стараемся делать все возможное, чтобы оправдать, и
                        даже превысить ожидания наших клиентов. Если у вас возникли вопросы, пожалуйста, чувствуйте себя
                        свободными связаться с нами, мы с удовольствием вам поможем и проконсультируем.</p>
                    <a href="#">Подробно</a>
                </div>
                <img src={furniture} alt=""/>
            </div>
        </div>
    );
};

export default Furniture;