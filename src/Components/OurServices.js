import React, {useState} from "react";
import Modal from '@material-ui/core/Modal';
import '../styles/modal.css';
import sbp from '../img/sbp.svg';
import qr from '../img/qr.svg';
import ModalWindow from "./ModalWindow";

function OurServices() {

    const [open1, setOpen1] = React.useState(false);
  
    const handleClose1 = () => {
        setOpen1(false);
    };
    
    const handleOpen1 = () => {
        setOpen1(true);
    };

    



    return(
        <div id="ourser" className="OurServices">
            <div className="container">
                <div className='section'>
                        <h2 className="title">Наши Услуги</h2>
                        <div className="card">
                            <div className="card__item">
                                <div className="card__cover">
                                    <img className="card__img" src="/img/1h.png"/>
                                </div>
                                <div className="card__info">
                                <div>
                                    <p className="card__nick">Химчистка</p>
                                    <p className="card__author">Подвески и днища</p>
                                </div>
                                <p className="card__bid">Цена <span className="card__price">от 10 000 руб</span></p>
                                </div>
                            <button className="modal_button card__link" onClick={handleOpen1} >
                             Хочу так же!
                            </button>
                            <Modal 
                                onClose={handleClose1}
                                open={open1}
                            >
                                <ModalWindow/>
                            </Modal>
                        </div>
                        <div className="card__item">
                            <div className="card__cover">
                                <img className="card__img" src="/img/2h.png"/>
                            </div>
                            <div className="card__info">
                                <div>
                                    <p className="card__nick">Шумоизоляция</p>
                                    <p className="card__author">Всей машины</p>
                                </div>
                                <p className="card__bid">Цена <span className="card__price">от 12 000 руб</span></p>
                            </div>
                            <button className="modal_button card__link" onClick={handleOpen1} >
                             Хочу так же!
                            </button>
                            <Modal 
                                onClose={handleClose1}
                                open={open1}
                            >
                                <ModalWindow/>
                            </Modal>
                        </div>
                        <div className="card__item">
                            <div className="card__cover">
                                <img className="card__img" src="/img/3h.png"/>
                            </div>
                            <div className="card__info">
                                <div>
                                    <p className="card__nick">Полировка</p>
                                    <p className="card__author">Элементов авто</p>
                                </div>
                                <p className="card__bid">Цена <span className="card__price">от 3000 руб</span></p>
                            </div>
                            <button className="modal_button card__link" onClick={handleOpen1} >
                             Хочу так же!
                            </button>
                            <Modal 
                                onClose={handleClose1}
                                open={open1}
                            >
                               <ModalWindow/>
                            </Modal>
                        </div>
                        <div className="card__item">
                            <div className="card__cover">
                                <img className="card__img" src="/img/4h.png"/>
                            </div>
                            <div className="card__info">
                                <div>
                                    <p className="card__nick">Химчистка</p>
                                    <p className="card__author">Салона</p>
                                </div>
                                <p className="card__bid">Цена <span className="card__price">от 2000 руб</span></p>
                            </div>
                            <button className="modal_button card__link" onClick={handleOpen1} >
                             Хочу так же!
                            </button>
                            <Modal 
                                onClose={handleClose1}
                                open={open1}
                            >
                                <ModalWindow/>
                            </Modal>
                        </div>
                        <div className="card__item">
                            <div className="card__cover">
                                <img className="card__img" src="/img/5h.png"/>
                            </div>
                            <div className="card__info">
                                <div>
                                    <p className="card__nick">Шумоизоляция</p>
                                    <p className="card__author">Элементов</p>
                                </div>
                                <p className="card__bid">Цена <span className="card__price">от 2500 руб</span></p>
                            </div>
                            <button className="modal_button card__link" onClick={handleOpen1} >
                             Хочу так же!
                            </button>
                            <Modal 
                                onClose={handleClose1}
                                open={open1}
                            >
                               <ModalWindow/>
                            </Modal>
                        </div>
                        <div className="card__item">
                            <div className="card__cover">
                                <img className="card__img" src="/img/6h.png"/>
                            </div>
                            <div className="card__info">
                                <div>
                                    <p className="card__nick">Обклейка</p>
                                    <p className="card__author">Пленка</p>
                                </div>
                                <p className="card__bid">Цена <span className="card__price">от 10 000 рублей</span></p>
                            </div>
                            <button className="modal_button card__link" onClick={handleOpen1} >
                             Хочу так же!
                            </button>
                            <Modal 
                                onClose={handleClose1}
                                open={open1}
                            >
                                <ModalWindow/>
                            </Modal>
                        </div>
                        <div className="card__item">
                            <div className="card__cover">
                                <img className="card__img" src="/img/7h.png"/>
                            </div>
                            <div className="card__info">
                                <div>
                                    <p className="card__nick">Химчистка</p>
                                    <p className="card__author">Нанесение керамики</p>
                                </div>
                                <p className="card__bid">Цена <span className="card__price">от 2200 руб</span></p>
                            </div>
                            <button className="modal_button card__link" onClick={handleOpen1} >
                             Хочу так же!
                            </button>
                            <Modal 
                                onClose={handleClose1}
                                open={open1}
                            >
                                <ModalWindow/>
                            </Modal>
                        </div>
                        <div className="card__item">
                            <div className="card__cover">
                                <img className="card__img" src="/img/8h.png"/>
                            </div>
                            <div className="card__info">
                                <div>
                                    <p className="card__nick">Перетяжка</p>
                                    <p className="card__author">Кожи всего салона</p>
                                </div>
                                <p className="card__bid">Цена <span className="card__price">от 35 000 руб</span></p>
                            </div>
                            <button className="modal_button card__link" onClick={handleOpen1} >
                             Хочу так же!
                            </button>
                            <Modal 
                                onClose={handleClose1}
                                open={open1}
                            >
                                <ModalWindow/>
                            </Modal>
                        </div>
                        <div className="card__item">
                            <div className="card__cover">
                                <img className="card__img" src="/img/9h.png"/>
                            </div>
                            <div className="card__info">
                                <div>
                                    <p className="card__nick">Полировка</p>
                                    <p className="card__author">Интерьера авто</p>
                                </div>
                                <p className="card__bid">Цена <span className="card__price">от 2000 руб</span></p>
                            </div>
                            <button className="modal_button card__link" onClick={handleOpen1} >
                             Хочу так же!
                            </button>
                            <Modal 
                                onClose={handleClose1}
                                open={open1}
                            >
                                <ModalWindow/>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices;