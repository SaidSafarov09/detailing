import React from "react";

function DepartmentHeads() {
    return(
        <div id="departhead" className="DepartmentHeads">
            <div className="container">
                <div className='section'>
                        <h2 className="title">Руководители Отделов</h2>
                        <p className="desc">Наши руководители имеют большой опыт в сфере детейлинга.</p>
                        <div className="card__creator">
                            <div className="card__item__creator">
                                <div className="card__cover__creator">
                                    <img className="card__img__creator" src="/img/d1.png"/>
                                </div>
                                <div className="card__creator__photo">
                                    <img className="card__creator__img" src="/img/d1l1.png" alt=""/>
                                </div>
                                <div className="card__info__creator">
                                    <div>
                                        <p className="card__nick__creator">Максим Стрельцов</p>
                                        <p className="card__author__creator">Мастер кузовных работ/шиномонтажник</p>
                                    </div>
                                </div>
                                <a href="#" className="card__link__creator">+1 (234) 567-89-01</a>
                            </div>
                            <div className="card__item__creator">
                                <div className="card__cover__creator">
                                    <img className="card__img__creator" src="/img/d2.png"/>
                                </div>
                                <div className="card__creator__photo">
                                    <img className="card__creator__img" src="/img/d2l2.png" alt=""/>
                                </div>
                                <div className="card__info__creator">
                                    <div>
                                        <p className="card__nick__creator">Владимир Антонович</p>
                                        <p className="card__author__creator">Профессиональная многофазная мойка</p>
                                    </div>
                                </div>
                                <a href="#" className="card__link__creator">+1 (234) 567-89-01</a>
                            </div>
                            <div className="card__item__creator">
                                <div className="card__cover__creator">
                                    <img className="card__img__creator" src="/img/d3.png"/>
                                </div>
                                <div className="card__creator__photo">
                                    <img className="card__creator__img" src="/img/d3l3.png" alt=""/>
                                </div>
                                <div className="card__info__creator">
                                    <div>
                                        <p className="card__nick__creator">Игорь Соловьев</p>
                                        <p className="card__author__creator">Мастер полировки и обклейки кузова</p>
                                    </div>
                                </div>
                                <a href="#" className="card__link__creator">+1 (234) 567-89-01</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default DepartmentHeads;