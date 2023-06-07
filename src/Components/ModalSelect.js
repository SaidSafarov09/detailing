import React from "react";
import '../styles/modalselect.css';
import Modal from '@material-ui/core/Modal';
import ModalPayChoise from "./ModalPayChoise";

function ModalSelect(props) {

    const [open, setOpen] = React.useState(false);
  
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };

    const current = new Date();
    const date = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()}`;
    return(
        <div className="modal_select">
                <form>     
                    <h3>Услуга</h3> 
        <p>Выберите тип автомобиля</p>
        <select className="feedback-input_select" >
          <option>Легковой автомобиль (от 10.000)</option>
          <option>Грузовой автомобиль (от 15.000)</option>

        </select>
        <h3>Запись</h3>
        <p>Текущая дата {date}</p>
        <select className="feedback-input_select" >
          <option disabled>Дата</option>
          <option>{date}</option>
          <option>{current.getDate()+1}.{current.getMonth()+1}.{current.getFullYear()}</option>
          <option>{current.getDate()+2}.{current.getMonth()+1}.{current.getFullYear()}</option>
          <option>{current.getDate()+3}.{current.getMonth()+1}.{current.getFullYear()}</option>
          <option>{current.getDate()+4}.{current.getMonth()+1}.{current.getFullYear()}</option>
          <option>{current.getDate()+5}.{current.getMonth()+1}.{current.getFullYear()}</option>
          <option>{current.getDate()+6}.{current.getMonth()+1}.{current.getFullYear()}</option>
          <option>{current.getDate()+7}.{current.getMonth()+1}.{current.getFullYear()}</option>
        </select>
        <p>Время</p>
        <select className="feedback-input_select" >
        <option disabled>Время</option>
          <option>9:00</option>
          <option>10:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>16:00</option>
          <option>18:00</option>
          </select>
        <input type="submit" value="Записаться" onClick={handleOpen}/>
        </form>
        {/* <span className="close" onClick={handleClose1}>X</span> */}
        <Modal 
                                onClose={handleClose}
                                open={open}
                            >
                                <ModalPayChoise/>
                            </Modal>
        </div>
    )
}

export default ModalSelect;