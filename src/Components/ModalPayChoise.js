import React from "react";
import '../styles/modalselect.css';
import Modal from '@material-ui/core/Modal';
import ModalWindow from "./ModalWindow";
import ModalOk from './ModalOk';

function ModalPayChoise(props) {

    const [open1, setOpen1] = React.useState(false);
  
    const handleClose1 = () => {
        setOpen1(false);
    };
    
    const handleOpen1 = () => {
        setOpen1(true);
    };

    const [open2, setOpen2] = React.useState(false);
  
    const handleClose2 = () => {
        setOpen2(false);
    };
    
    const handleOpen2 = () => {
        setOpen2(true);
    };

    return(
        <div className="modal">
            <form>
        <input  value="Оплата на месте" onClick={handleOpen1}/>
        <Modal onClose={handleClose1} open={open1}>
            <ModalOk/>
        </Modal>
        <p>Или можете выбрать</p>
        <input  value="Оплата по карте" onClick={handleOpen2}/>
        <Modal onClose={handleClose2} open={open2}>
            <ModalWindow back_button={handleClose2}></ModalWindow>
        </Modal>
        </form>
        {/* <span className="close" onClick={handleClose1}>X</span> */}
        </div>
    )
}

export default ModalPayChoise;