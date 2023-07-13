import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineFileZip } from 'react-icons/ai';

import './styles/footerButtons.css'

const FooterButtons = () => {
  return (
    <div className='footer-box'>
      <button className='save-btn'>SAVE AND EXIT <AiOutlineFileZip style={{ width: '15px'}} /></button>
      <div>
        <button className='prev-btn'><FaArrowLeft style={{ marginRight: '5px' }} />PREVIOUS</button>
        <button className='nxt-btn'>NEXT <FaArrowRight style={{ marginLeft: '5px' }} /></button>
      </div>
    </div>
  );
};

export default FooterButtons