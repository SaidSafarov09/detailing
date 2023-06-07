import React from "react";
import Modal from '@material-ui/core/Modal';
import '../styles/modal.css';
import sbp from '../img/sbp.svg';
import qr from '../img/qr.svg';
import ModalWindow from "./ModalWindow";


function PopularServices() {

    const [open1, setOpen1] = React.useState(false);
  
    const handleClose1 = () => {
        setOpen1(false);
    };
    
    const handleOpen1 = () => {
        setOpen1(true);
    };

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
                                    <img className="card__img" src="/img/w2.png"/>
                                </div>
                                <div className="card__info">
                                    <div>
                                        <p className="card__nick">Мойка</p>
                                        <p className="card__author">Полная услуга</p>
                                    </div>
                                    <p className="card__bid">Цена <span className="card__price">от 500 руб</span></p>
                                </div>
                                <button className="modal_button card__link" onClick={handleOpen1} >
                             Хочу так же!
                            </button>
                            <Modal 
                                onClose={handleClose1}
                                open={open1}
                            >
                                <div className='modal'>
                                <ModalWindow/>
                                </div>
                            </Modal>
                            </div>
                            <div className="card__item">
                                <div className="card__cover">
                                    <img className="card__img" src="/img/w3.png"/>
                                </div>
                                <div className="card__info">
                                    <div>
                                        <p className="card__nick">Полировка</p>
                                        <p className="card__author">Кузов/Интерьер</p>
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
                                <div className='modal'>
                                <ModalWindow/>
                                </div>
                            </Modal>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default PopularServices;