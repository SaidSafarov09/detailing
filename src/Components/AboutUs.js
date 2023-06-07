import React from "react";
import about from '../img/about.svg';

function AboutUs() {
    return(
        <div id="about" className="AboutUs">
            <div className="container">
                <div className='section'>
                        <div className="head__about__us">
                            <h1>О нас</h1>
                        </div>
                        <div className="main__about__us">
                            <div className="main__about__us__image">
                                <img className="main__about__us__img" src={about}/>
                            </div>
                            <div className="main__about__us__text">
                                {/* <h1>Я, Виктор Антонович</h1> */}
                                <p>Уровень развития, заданный компанией BOSS при открытии Detailing Center, соответствует мировому стандарту в детейлинге.Здесь собрано новейшее оборудование, которое только есть в Detailing сфере. Всё оборудование в компании от известных мировых брендов, таких как: Flex, Rupes, Takenov, Tromelberg, Tornado, Estro, CarFon и другие.
При выборе оборудования компания отталкивалась от профессионализма производителя в данной отрасли. Мы сотрудничаем с лучшими компаниями на рынке.
Команда в BOSS Detailing Center — это прежде всего профессионалы своего дела. Каждый из сотрудников имеет огромный опыт на занимаемой должности более 7-10 лет. Общая площадь Detailing Center составляет 459 м2, из них 140 м2 — это 2 моечных поста и 2 сухие зоны.
 </p>
                                {/* <a className="main__about__us__btn main__about__us__btn__gradient" href="#">Показать больше</a> */}
                             </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;