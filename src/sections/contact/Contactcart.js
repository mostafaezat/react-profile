import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { PiMessengerLogoBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
const Contactcart = () => {
  return (
    <>
      <div className="contact-option">
        <HiOutlineMail className="contact-option-icon"/>
        <h4>Email</h4>
        <h5>mostafaezzatshaban@gmail.com</h5>
        <a
          href="mailto:mostafaezzatshaban@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          send a meassage
        </a>
      </div>
      <div className="contact-option">
        <PiMessengerLogoBold  className="contact-option-icon"/>
        <h4>Messenger</h4>
        <h5>mostafa ezzat</h5>
        <a
          href="mailto:mostafaezzatshaban@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          send a meassage
        </a>
      </div>
      <div className="contact-option">
        <BsWhatsapp  className="contact-option-icon"/>
        <h4>Whatsapp</h4>
        <h5>+201061429971</h5>
        <a
          href="mailto:mostafaezzatshaban@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          send a meassage
        </a>
      </div>
    </>
  );
};

export default Contactcart;
