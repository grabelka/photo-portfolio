import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Popup from 'reactjs-popup';

function Booking() {
  const [value, onChange] = useState(new Date());
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  function book() {
    fetch('http://localhost:3001/booked', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        date: value.toDateString(),
        id: ''
      }),
    })
      .then((response) => {
        return response.json();
      });

    closeModal();
    setName('');
    setPhone('');
  }
  
  return (
        <div>
          <p>Prices starts from 25$/hour. On weekends prices may differ.</p>
          <p>Choose dates:</p>
          <Calendar minDate={new Date()} className={'App-calendar'} tileDisabled={({activeStartDate, date}) => date.getDate() === 3 || date.getDate() === 7 || date.getDate() === 13 || date.getDate() === 16 || date.getDate() === 22 || date.getDate() === 24} maxDate={new Date(new Date().setMonth(new Date().getMonth()+1))} onChange={onChange} value={value} />
          <button className='App-button' onClick={() => setOpen(o => !o)}>Book this date</button>
          <Popup  open={open} closeOnDocumentClick onClose={closeModal} position="center">
            <div className='App-popup'>
              <p>Your name:</p>
              <input value={name} onChange={e => setName(e.target.value)} type='tel' />
              <p>Your phone:</p>
              <input value={phone} onChange={e => setPhone(e.target.value)} type='text' />
              <br/>
              <div className='App-button-container'>
                <button className='App-button' onClick={closeModal}>Cancel</button>
                <button className='App-button' onClick={book}>Booking</button>
              </div>
            </div>
          </Popup>
        </div>
    );
};

export default Booking;