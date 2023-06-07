import React from "react";
import Modal from '@material-ui/core/Modal';
import '../styles/modal.css';
import sbp from '../img/sbp.svg';
import qr from '../img/qr.svg';

function ModalWindow() {
    return (
        <div className='modal'>
            <div className="modal_content">
               <img src={sbp}/>
               <img src={qr}/>
            </div>
            <div className="card_item">
                    
    <div class="mainscreen">
   {/* <img src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg"  class="bgimg " alt=""/> */}
      <div class="card_item">
        <div class="rightside">
          <form action="">
            <h1>Оплата по карте</h1>
            <h2>Данные карты</h2>
            <p>Имя Владельца</p>
            <input type="text" class="inputbox" name="name" required />
            <p>Номер карты</p>
            <input type="number" class="inputbox" name="card_number" id="card_number" required />

            <p>Тип карты</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="">Выберите тип карты</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">Maestro</option>
              <option value="MasterCard">MasterCard</option>
            </select>
<div class="expcvv">

            <p class="expcvv_text">Expiry</p>
            <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

            <p class="expcvv_text2">CVV</p>
            <input type="password" class="inputbox" name="cvv" id="cvv" required />
        </div>
            <p></p>
            <button type="submit" class="button">Оплатить</button>
          </form>
        </div>
      </div>
    </div>
            </div>
        </div>
    )
}

export default ModalWindow;