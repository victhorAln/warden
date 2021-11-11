import React from 'react';
import './contato.css'
import {AiOutlineMail } from "react-icons/ai"
import { IconContext } from 'react-icons/lib';
import {AiOutlinePhone } from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"



const Contact = () => {
  return (
    <div 
     
    >
      <div className="header">
        <h1>Como você prefere falar com a gente?</h1>
      </div>
     <div className="footer">
        <div>
          <IconContext.Provider value={{size:'2em'}}>
           
              <AiOutlineMail/>
          </IconContext.Provider>
        
            <p>E-mail</p>
            <a>Tem alguma duvida?</a>
        </div>
           <a>jose.carosi@gmail.com</a>
        <div className="header-telefone">
          <div>
          <IconContext.Provider value={{size:'2em'}}>
           
          <AiOutlinePhone/>
            </IconContext.Provider>
          <p>Telefone</p>
          <a>Pode nos ligar entre as 08:00 e 20:00</a>
        </div>
          <a>2277-4781</a>
        </div>
        <div className="header-whats">
          <div>
          <IconContext.Provider value={{size:'3em'}}>
           
          <AiOutlineWhatsApp/>
            </IconContext.Provider>
          <p>WhatsApp</p>
          <a>Clique no <a href="https://web.whatsapp.com/" target="_blank">link</a> ou nos manda uma mensagem</a>
        </div>
          <a>95957-9052</a>
        </div>
     </div> 
     
     
     
    </div>
  );
};

export default Contact;
