import React from 'react';
import article__img1 from '../img/articles__img1.jpg'
import article__img2 from '../img/articles__img2.jpg'

const Article = () => {
    return (
        <div className="article">
            <h2>Статьи</h2>
            <div className="article__inner">
                <div className="article__card">
                    <div className="article__blog">
                        <img src={article__img1} alt=""/>
                        <div className="article__content">
                            <h2>5 способов сделать комнату более уютной</h2>
                            <span>
                            <i className='bx bx-calendar' style={{color: '#999999'}}></i>
                            10.09.2020
                        </span>
                            <p>Иногда так хочется начать новую жизнь, что-то изменить, и первое, что приходит в ...</p>
                        </div>
                    </div>
                </div>
                <div className="article__card">
                    <div className="article__blog">
                        <img src={article__img2} alt=""/>
                        <div className="article__content">
                            <h2>5 способов сделать комнату более уютной</h2>
                            <span>
                            <i className='bx bx-calendar' style={{color: '#999999'}}></i>
                            10.09.2020
                        </span>
                            <p>Иногда так хочется начать новую жизнь, что-то изменить, и первое, что приходит в ...</p>
                        </div>
                    </div>
                </div>
                <div className="article__card">
                    <div className="article__blog">
                        <img src={article__img1} alt=""/>
                        <div className="article__content">
                            <h2>5 способов сделать комнату более уютной</h2>
                            <span>
                            <i className='bx bx-calendar' style={{color: '#999999'}}></i>
                            10.09.2020
                        </span>
                            <p>Иногда так хочется начать новую жизнь, что-то изменить, и первое, что приходит в ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;