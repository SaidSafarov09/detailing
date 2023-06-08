import React, { useState } from "react";
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


    const [type, setType] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')


    const handleSubmit = (event) => {
      event.preventDefault();
      const data = {
        type, day, time
      }

      fetch('http://localhost:8080/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json()).then(data => console.log(data))
    }

    const current = new Date();
    const date = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()}`;
    return(
        <div className="modal_select">
          {/* <form onSubmit={handleSubmit}>      */}
                <form onSubmit={handleSubmit}>     
                    <h3>Услуга</h3> 
        <p>Выберите тип автомобиля</p>
        <select method='post' value={type} name='type' onChange={(e) => setType(e.target.value)} className="feedback-input_select" >
          <option>Тип автомобиля</option>
          <option>Легковой автомобиль (от 10.000)</option>
          <option>Грузовой автомобиль (от 15.000)</option>

        </select>
        <h3>Запись</h3>
        <p>Текущая дата {date}</p>
        <select method='post' value={day} name='day' onChange={(e) => setDay(e.target.value)} className="feedback-input_select" >
          <option >Дата</option>
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
        <select method='post' value={time} name='time' onChange={(e) => setTime(e.target.value)} className="feedback-input_select" >
        <option>Время</option>
          <option>9:00</option>
          <option>10:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>16:00</option>
          <option>18:00</option>
          </select>
        <input value="Записаться" type="submit" />
        <input type="submit" className="continue" value="Продолжить" onClick={handleOpen}/>
        </form>
        {/* <span className="close" onClick={handleClose1}>X</span> */}
        <Modal 
                                onClose={handleClose}
                                open={open}
                            >
                                <ModalPayChoise close={handleClose}/>
                            </Modal>
            {/* </form>                    */}
        </div>
    )
}

export default ModalSelect;