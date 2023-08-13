import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import phoneIcon from './images/telephone.png';
import mailIcon from './images/mail.png';

export const ContactUs = () => {
  const form = useRef();

  const [state, setState] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(document.getElementById('message').value.length);

    if (
      document.getElementById('user_name').value.length !== 0 &&
      document.getElementById('user_email').value.length !== 0 &&
      document.getElementById('message').value.length !== 0
    ) {
      emailjs.sendForm('service_v0lnapp', 'template_m9oui28', form.current, '9u6-X29D0j3GeZy7x')
      .then((result) => {
          console.log(result.text);
          setState('Žinutė sėkmingai išsiųsta. Greitu metu atsakysime!')
      }, (error) => {
          console.log(error.text);
          setState('Įvyko klaida. Mielai pakalbėsime su Jumis telefonu!')
      });
    } else {
      setState('Visi laukeliai turi būti užpildyti :)')
    }
  }

  //   emailjs.sendForm('service_v0lnapp', 'template_m9oui28', form.current, '9u6-X29D0j3GeZy7x')
  //     .then((result) => {
  //         console.log(result.text);
  //         setState('Žinutė sėkmingai išsiųsta. Greitu metu atsakysime!')
  //     }, (error) => {
  //         console.log(error.text);
  //         setState('Įvyko klaida. Mielai pakalbėsime su Jumis telefonu!')
  //     });
  // };


  console.log(form);

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className='contacts-info'>
            <img src={phoneIcon} alt="" /> Tel. Nr.: +37063631839
        </div>
        <div className='contacts-info margin-bottom'>
            <img src={mailIcon} alt="" /> El. paštas: info@digitaledge.lt
        </div>
      <label>Vardas</label><br />
      <input type="text" name="user_name" id="user_name"/><br />
      <label>El. pašto adresas</label><br />
      <input type="email" name="user_email" id="user_email"/><br />
      <label>Žinutė</label><br />
      <textarea name="message" id="message" />
      <input type="submit" value="Siųsti" />
      <p style={{ color: 'white'}}>{state}</p>
    </form>
  );
};