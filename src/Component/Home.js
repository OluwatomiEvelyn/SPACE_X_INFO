import React,{useState} from 'react'
import rim from './starter-code/assets/shared/logo.svg'
import hand from './starter-code/assets/shared/icon-hamburger.svg'
import fot from './starter-code/assets/shared/icon-close.svg'
import { NavLink } from 'react-router-dom'
const Home = () => {
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
    <div className='use'>
        <header>
            <img src={rim} alt='' id='img'></img>
            <button onClick={Roll} className='but'><img  style={{display:harp}} src={hand} id='hand' alt=''></img></button>
            <button style={{display:dis}} onClick={Flow} className='but ful'><img style={{display:dis}}  alt='' id='tot' src={fot} ></img></button>
            <div style={{display:dis}} className='tin'>
                <NavLink to='/' activeClasssname='success' className='ark link' ><em>00</em> HOME</NavLink>
                <NavLink to='/destination' className='link'  activeClasssname='success'><em>01</em> DESTINATION</NavLink>
                <NavLink to='/crew' className='link' activeClasssname='success' ><em>02</em>  CREW</NavLink>
                <NavLink to='/technology' className='link' activeClasssname='success'><em>03</em> TECHNOLOGY</NavLink>
            </div>
        </header>
        <aside className='valid'>
            <h4>SO,YOU WANT TO TRAVEL TO</h4>
            <h1>SPACE</h1>
            <blockquote id='cake'>Lets face it; if you want to go to space,you might as well genuiely got to outer space and not hover kind of on the edge of it.well sit back,and relax because we'll give you a truly out of the world experience!</blockquote>
        </aside>
        <hr/>
        <article className='cool'>
            <h2>EXPLORE</h2>
        </article>
    </div>
  )
}

export default Home