import Header from "./Header"
import React,{useState} from 'react'

import Assist from "./Assist"
const Destination = (props) => {
    const ride =(props.data)
    const[lift,setLift]=useState('moon')
    const[lip,setLip]=useState('underline')
    const [flip,setFlip]=useState()
    const [trip,setTrip]=useState()
    const [tip,setTip] =useState()
    function Moon(){
      setLift('moon')
      setLip('underline')
      setFlip('none')
      setTrip('none')
      setTip('none')
    }
    function Mars(){
      setLift('mars')
      setLip('none')
      setFlip('underline')
      setTrip('none')
      setTip('none')

    }
    function Titan(){
      setLift('titan')
      setLip('none')
      setFlip('none')
      setTrip('none')
      setTip('underline')
    }
    function Europa(){
      setLift('europa')
      setLip('none')
      setFlip('none')
      setTrip('underline')
      setTip('none')
    }
  return (
    <div className="Des">
        <Header/>
        <aside className="tass">
            <p id="tip"><em id="em">01</em>PICK YOUR DESTINATION</p>
            
        </aside>
        <body className='body'>
            <button style={{textDecoration:lip}} onClick={Moon} >MOON</button>
            <button style={{textDecoration:flip}}  onClick={Mars}>MARS</button>
            <button style={{textDecoration:trip}}  onClick={Europa}>EUROPA</button>
            <button style={{textDecoration:tip}}  onClick={Titan}>TITAN</button>
        </body>
        <Assist data={lift} code={ride}/>
    </div>
  )
}

export default Destination