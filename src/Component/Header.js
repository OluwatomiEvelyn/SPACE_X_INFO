import React,{useState} from 'react'
import rim from './starter-code/assets/shared/logo.svg'
import hand from './starter-code/assets/shared/icon-hamburger.svg'
import fot from './starter-code/assets/shared/icon-close.svg'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    const[dis,setDis]=useState()
    const[harp,setHarp]=useState()
    function Roll(){
        setDis('flex')
        setHarp('none')
    }
    function Flow(){
        setDis('none')
        setHarp('flex')
    }
  return (
    <>
        <header>
            <img src={rim} alt='' id='img'></img>
            <button onClick={Roll} className='but'><img  style={{display:harp}} src={hand} id='hand' alt=''></img></button>
            <button style={{display:dis}} onClick={Flow} className='but ful'><img style={{display:dis}}  alt='' id='tot' src={fot} ></img></button>
            <div style={{display:dis}} className='tin'>
                <NavLink to='/' exact className='ark link' activeClasssname='success'><em>00</em> HOME</NavLink>
                <NavLink to='/destination' className='link' activeClasssname='success'><em>01</em> DESTINATION</NavLink>
                <NavLink to='/crew' className='link' activeClasssname='success'><em>02</em>  CREW</NavLink>
                <NavLink to='/technology' className='link' activeClasssname='success'><em>03</em> TECHNOLOGY</NavLink>
            </div>
        </header>
        <hr/>
    </>
  )
}

export default Header