import React from "react";

function PopularServices() {
    return(
        <div id="popularserv" className="PopularServices">
            <div className="container">
                <div className='section'>
                        <h2 className="title">Популярные Услуги</h2>
                        <div className="card">
                            <div className="card__item">
                                <div className="card__cover">
                                    <img className="card__img" src="/img/w1.png"/>
                                </div>
                                <div className="card__info">
                                    <div>
                                        <p className="card__nick">Шиномантаж</p>
                                        <p className="card__author">Полная услуга</p>
                                    </div>
                                    <p className="card__bid">Цена <span className="card__price">от 800 руб</span></p>
                                </div>
                                <a href="#" className="card__link">Хочу так же!</a>
                            </div>
                            <div className="card__item">
                                <div className="card__cover">
                                    <img className="card__img" src="/img/w2.png"/>
                                </div>
                                <div className="card__info">
                                    <div>
                                        <p className="card__nick">Мойка</p>
                                        <p className="card__author">Полная услуга</p>
                                    </div>
                                    <p className="card__bid">Цена <span className="card__price">от 500 руб</span></p>
                                </div>
                                <a href="#" className="card__link">Хочу так же!</a>
                            </div>
                            <div className="card__item">
                                <div className="card__cover">
                                    <img className="card__img" src="/img/w3.png"/>
                                </div>
                                <div className="card__info">
                                    <div>
                                        <p className="card__nick">Палировка</p>
                                        <p className="card__author">Кузов/Интерьер</p>
                                    </div>
                                    <p className="card__bid">Цена <span className="card__price">от 2000 руб</span></p>
                                </div>
                                <a href="#" className="card__link">Хочу так же!</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default PopularServices;