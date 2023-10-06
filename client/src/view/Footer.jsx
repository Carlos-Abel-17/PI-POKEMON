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
  <span>Social</span>
   <img src={discord} alt=""  className='social-link ' id='svg'/>
   <img src={github} alt="" className='social-link' id='svg'/>
   <img src={linkeind} alt="" className='social-link' id='svg'/>
   <img src={facebook} alt="" className='social-link' id='svg'/>
</div> 
    </div>
  )
}

export default Footer