import React from 'react'
import '../css/FooterStyle.css'
import discord from '../image/discord.svg'
import github from '../image/github.svg'
import linkeind from '../image/linkeind.svg'
import facebook from '../image/facebook.svg'

function Footer() {
  return (
    <div className='footer'>
         <div className="cardt">
  <span>Social networks
</span>
  <a href="https://discord.com/channels/1017896626049794068/1017896626049794071" target="_blank" className='social-link ' id='svg'>
   < img src={discord} alt=""  />
  </a>
  <a href="https://github.com/Carlos-Abel-17" target="_blank" className='social-link' id='svg'>
   <img src={github} alt="" />
  </a>
  <a href="www.linkedin.com/in/abel-aguado-ramos-37377027b" target="_blank" className='social-link' id='svg'>
   <img src={linkeind} alt="" />
  </a>
  <a href="https://www.facebook.com/profile.php?id=100023392873071" target="_blank" id='svg' className='social-link'>
    <img src={facebook} alt=""   />
    </a> 
</div> 
    </div>
  )
}

export default Footer