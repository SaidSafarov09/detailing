import React from "react";
import '../styles/modalselect.css';
import Modal from '@material-ui/core/Modal';
import ModalWindow from "./ModalWindow";

function ModalPayChoise({close}) {

   

    return(
        <div className="modal">
          <div className="modal_ok">
          <form>
        <h3>Вы успешно записаны!</h3>
        </form>
        {/* <span className="close" onClick={handleClose1}>X</span> */}
        <input value="ОК" type="submit" onClick={close} ></input>
          </div>
        </div>
    )
}

export default ModalPayChoise;