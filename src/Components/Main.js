import React from "react";
import logo from '../img/Logo.svg';
import Modal from '@material-ui/core/Modal';
import ModalMain from "./ModalMain";

function Main(props) {

    const [open1, setOpen1] = React.useState(false);
  
    const handleClose1 = () => {
        setOpen1(false);
    };
    
    const handleOpen1 = () => {
        setOpen1(true);
    };



    return(
        <div id="main" className="Main">
             <div class="back-main-image">
                <header class="header">
                    <a href="#" class="header__logo">
                        <img src={logo}/>
                    </a>
                    <nav class="header__nav">
                        <ul class="header__list">
                            <li class="header__item"><a class="header__link" href="#about">О нас</a></li>
                            <li class="header__item"><a class="header__link" href="#ourser">Услуги</a></li>
                            <li class="header__item"><a class="header__link" href="#departhead">Контакты</a></li>
                            <li class="header__item"><a class="header__link" href="#faq">Преимущества</a></li>
                            <li class="header__item"><a class="header__link header__link_gradient" href="tel: +1 (234) 567-89-10">+1 (234) 567-89-10</a></li>
                        </ul>
                    </nav>
                    <div class="header__buttons">
                        <button class="header__menu"></button>
                    </div>
                </header>
                <div class="container">
                    <div class="main">
                        <div class="main__text">
                            <h1 class="main__title">Детейлинг от студии детейлинга BOSS</h1>
                            <p class="main__desc">Профессиональные услуги по восстановлению, обслуживанию и защите кузова и интерьера. Обработка высокотехнологичными защитными покрытиям от настоящих экспертов автодилинга.”</p>
                            <a class="main__btn main__btn__gradient" onClick={handleOpen1}>Получите консультацию бесплатно</a>
                        </div>
                        <Modal 
                                onClose={handleClose1}
                                open={open1}
                            >
                                <ModalMain
                                prop={handleClose1}
                                ></ModalMain>
                            </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;