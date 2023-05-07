import Header from "./Header"
import React,{useState} from "react"
import Techno from "./Techno"
const Technology = (props) => {
    const tech=(props.data)
    const[life,setLife]=useState('one')
    const[lon,setLon]=useState()
    const[ron,setRon]=useState()
    const[fon,setFun]=useState()
    const[node,setNode]=useState()
    const[lode,setLode]=useState()
    const[fode,setFode]=useState()
    function One(){
        setLife('one')
        setLon('white')
        setRon('rgba(255, 255, 255, 0.04)')
        setFun('rgba(255, 255, 255, 0.04)')
        setNode('black')
        setLode('white')
        setFode('white')

    }
    function Two(){
        setLife('two')
        setLon('rgba(255, 255, 255, 0.04)')
        setRon('white')
        setFun('rgba(255, 255, 255, 0.04)')
        setNode('white')
        setLode('black')
        setFode('white')
    }
    function Three(){
        setLife('three')
        setLon('rgba(255, 255, 255, 0.04)')
        setRon('rgba(255, 255, 255, 0.04)')
        setFun('white')
        setNode('white')
        setLode('white')
        setFode('black')
    }
  return (
    <div className="Tail">
        <Header/>
        <p><em id="lim">03</em> SPACE LAUNCH 101</p>
        <article className="save">
            <button style={{backgroundColor:lon,color:node}} id='one' onClick={One}>1</button>
            <button style={{backgroundColor:ron,color:lode}} onClick={Two}>2</button>
            <button style={{backgroundColor:fon,color:fode}} onClick={Three}>3</button>
        </article>
        <Techno data={tech} view={life}/>
    </div>
  )
}

export default Technology