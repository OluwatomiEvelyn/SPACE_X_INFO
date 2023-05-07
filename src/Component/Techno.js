import img from './starter-code/assets/technology/image-launch-vehicle-portrait.jpg'
import lift from './starter-code/assets/technology/image-spaceport-portrait.jpg'
import tilt from './starter-code/assets/technology/image-space-capsule-portrait.jpg'
import imi from './starter-code/assets/technology/image-launch-vehicle-landscape.jpg'
import lifi from './starter-code/assets/technology/image-spaceport-landscape.jpg'
import tili from './starter-code/assets/technology/image-space-capsule-landscape.jpg'
const Techno = (props) => {
    const hail=props.data

    if (props.view ==='one'){
        return (
            <div className='loop'>
                <body>
                    <h3>THE TERMINOLOGY ...</h3>
                    <h1>LAUNCH VEHICLE</h1>
                    <blockquote>{hail.technology[0].description}</blockquote>
                </body> 
                <picture>
                    <source srcSet={imi} media='(max-width:375px)'></source>
                    <source srcSet={imi} media='(max-width:1050px)'></source>
                    <img src={img} alt=''></img>
                </picture>
            </div>
    )}
  else if(props.view==='two'){
      return(
          <div className='loop'>
              <body>
                    <h3>THE TERMINOLOGY ...</h3>
                    <h1 className='space'>SPACEPORT</h1>
                    <blockquote>{hail.technology[1].description}</blockquote>
                </body> 
                <picture>
                    <source srcSet={lifi} media='(max-width:375px)'></source>
                    <source srcSet={lifi} media='(max-width:1050px)'></source>
                    <img src={lift} alt=''></img>
                </picture>
          </div>
      )

  }
  else {
      return(
          <div className='loop'>
              <body>
                    <h3>THE TERMINOLOGY ..</h3>
                    <h1>SPACE CAPSULE</h1>
                    <blockquote>{hail.technology[2].description}</blockquote>
                </body> 
                <picture>
                    <source srcSet={tili} media='(max-width:375px)'></source>
                    <source srcSet={tili} media='(max-width:1050px)'></source>
                    <img src={tilt} alt=''></img>
                </picture>
          </div>
      )
  }
}

export default Techno