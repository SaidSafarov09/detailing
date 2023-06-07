import React, { useState } from "react";
import '../styles/modalmain.css';

function ModalMain({prop}) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name, email, phone
    }

    fetch('http://localhost:8080/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))
  }

    return(
        <div className="modal">
          <form onSubmit={handleSubmit}>     
              <h3>Получить консультацию бесплатно</h3> 
          <input  value={name} name="name" type="text" className="feedback-input" placeholder="ФИО" onChange={(e) => setName(e.target.value)}/>   
          <input value={phone} name="phone" type="number" className="feedback-input" placeholder="Телефон" onChange={(e) => setPhone(e.target.value)}/>
          <input value={email} name="email" type="text" className="feedback-input" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <p>Желаемая услуга</p>
          <select className="feedback-input_select" >
            <option disabled>Желаемая услуга</option>
            <option>Химчистка</option>
            <option>Шумоизоляция</option>
            <option>Полировка</option>
            <option>Обклейка кузова</option>
            <option>Перетяжка салона</option>
            <option>Мойка</option>
            <option>Шиномантаж</option>
            <option>Полировка интерьера</option>
          </select>
          <p className="close_main close" onClick={prop}>X</p>
          <input type="submit" value="Отправить" />
        </form>
        {/* <span className="close" onClick={handleClose1}>X</span> */}
        </div>
    )
}

export default ModalMain;