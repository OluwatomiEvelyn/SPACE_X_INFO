import imm from './starter-code/assets/destination/image-moon.png'
import tim from './starter-code/assets/destination/image-mars.png'
import lim from './starter-code/assets/destination/image-europa.png'
import tree from './starter-code/assets/destination/image-titan.png'
const Assist = (props) => {
    const fee=props.code
    if (props.data ==='moon'){
        return (
            <>
                <div className="alien">
                    <h1>MOON</h1>
                    <blockquote>{fee.destinations[0].description}</blockquote>
                    <hr className="vim mim"/>
                    <div className="diva">
                        <span>AVG.DISTANCE</span>
                        <span id='range'>EST.TRAVEL.TIME</span>
                    </div>
                    <div className="diva">
                        <p>{fee.destinations[0].distance}</p>
                        <p id='lane'>{fee.destinations[0].travel}</p>
                    </div>
                </div>
                <img src={imm} id='lot' alt=""></img>
            </>
         )
    }
    else if(props.data==='mars'){
        return(
            <>
            <div className="alien">
                <h1>MARS</h1>
                <blockquote>{fee.destinations[1].description}</blockquote>
                <hr className="tim"/>
                <div className="diva">
                    <span>AVG.DISTANCE</span>
                    <span id='range'>EST.TRAVEL.TIME</span>
                </div>
                <div className="diva">
                    <p>{fee.destinations[1].distance}</p>
                    <p id='lane'>{fee.destinations[1].travel}</p>
                </div>
            </div>
            <img src={tim} id='lot' alt=""></img>
        </>
        )
    }
    else if(props.data==='europa'){
        return(
            <>
            <div className="alien">
                <h1>EUROPA</h1>
                <blockquote>{fee.destinations[3].description}</blockquote>
                <hr className="tim lim"/>
                <div className="diva">
                    <span>AVG.DISTANCE</span>
                    <span id='range'>EST.TRAVEL.TIME</span>
                </div>
                <div className="diva">
                    <p>{fee.destinations[3].distance}</p>
                    <p id='lane'>{fee.destinations[3].travel}</p>
                </div>
            </div>
            <img src={lim} id='lot' alt=""></img>
        </>
        )
    }
    else {
        return(
            <>
            <div className="alien">
                <h1>TITAN</h1>
                <blockquote>{fee.destinations[1].description}</blockquote>
                <hr className="tim lim"/>
                <div className="diva">
                    <span>AVG.DISTANCE</span>
                    <span id='range'>EST.TRAVEL.TIME</span>
                </div>
                <div className="diva">
                    <p>{fee.destinations[1].distance}</p>
                    <p id='lane'>{fee.destinations[1].travel}</p>
                </div>
            </div>
            <img src={tree} id='lot' alt=""></img>
        </>
        )
    }
    
}

export default Assist