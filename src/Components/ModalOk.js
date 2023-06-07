import React from "react";
import '../styles/modalselect.css';
import Modal from '@material-ui/core/Modal';
import ModalWindow from "./ModalWindow";

function ModalPayChoise(props) {

   

    return(
        <div className="modal">
            <form>
        <h3>Вы успешно записаны!</h3>
        </form>
        {/* <span className="close" onClick={handleClose1}>X</span> */}
        </div>
    )
}

export default ModalPayChoise;