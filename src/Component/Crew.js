import Header from "./Header"
import flip from './starter-code/assets/crew/image-mark-shuttleworth.png'
import coin from './starter-code/assets/crew/image-victor-glover.png'
import lock from './starter-code/assets/crew/image-anousheh-ansari.png'
import sun from './starter-code/assets/crew/image-douglas-hurley.png'
import React,{useState} from 'react'
const Crew =(props)=>{
  const lot = props.data
  const[lip,setLip]=useState('DOUGLAS HURLEY')
  const[meet,setMeet]=useState('COMMANDER')
  const [hope,setHope]=useState(lot.crew[0].bio)
  const[loop,setLoop]=useState(sun)
  const[sight,setSight]=useState('white')
  const[view,setView]=useState()
  const[ask,setAsk]=useState()
  const [arm,setArm]=useState()
  function meat(){
    setLip('DOUGLAS HURLEY')
    setMeet('COMMANDER')
    setHope(lot.crew[0].bio)
    setLoop(sun)
    setSight('white')
    setView('rgb(80, 77, 77)')
    setAsk('rgb(80, 77, 77)')
    setArm('rgb(80, 77, 77)')
  }
  function your(){
    setLip('MISSION SPECIALIST')
    setMeet('MARK SHUTTLEWORTH')
    setHope(lot.crew[1].bio)
    setLoop(flip)
    setSight('rgb(80, 77, 77)')
    setView('white')
    setAsk('rgb(80, 77, 77)')
    setArm('rgb(80, 77, 77)')
  }
  function crew(){
    setLip('PILOT')
    setMeet('VICTOR GLOVER')
    setHope(lot.crew[2].bio)
    setLoop(coin)
    setSight('rgb(80, 77, 77)')
    setView('rgb(80, 77, 77)')
    setAsk('white')
    setArm('rgb(80, 77, 77)')
  }
  function member(){
    setLip('FLIGHT ENGINEER')
    setMeet('ANOUSHEH ANSARI')
    setHope(lot.crew[3].bio)
    setLoop(lock)
    setSight('rgb(80, 77, 77)')
    setView('rgb(80, 77, 77)')
    setAsk('rgb(80, 77, 77)')
    setArm('white')
  }
  return (
    <div className="Loner">
        <Header/>
        <p><em>02</em> MEET YOUR CREW</p>
        <article className="flex">
          <button style={{backgroundColor:sight}} onClick={meat}></button>
          <button style={{backgroundColor:view}} onClick={your}></button>
          <button style={{backgroundColor:ask}} onClick={crew}></button>
          <button style={{backgroundColor:arm}} onClick={member}></button>
        </article>
        <aside className="wise">
          <h3>{meet}</h3>
          <h1>{lip}</h1>
          <blockquote>{hope}</blockquote>
        </aside>
        <img src={loop} className='cord' alt=''></img>
    </div>
  )
}

export default Crew