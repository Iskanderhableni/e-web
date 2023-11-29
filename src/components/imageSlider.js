import Carousel from 'react-bootstrap/Carousel';
import ours from '../images/ours.jpg'
import papillon from '../images/papillon.jpg'
import coeur_rouge from '../images/coeur_rouge.jpg'
import good_morning from '../images/good_morning.jpg'
import soleil from '../images/soleil.jpg'

import imageSlider from'./imageSlider.css';
function Slider() {
  return (
    <div className='slider'>
      <div>
      <Carousel className='carousel-width'>
        <Carousel.Item >
          <img
            className="d-block slider" 
            src={soleil}
            alt="First slide"
          />
          <Carousel.Caption>
           <div className='caption-box'>  <p className='Carousel_Caption'>Découvrez nos produits</p> </div> 
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slider"
            src={papillon}
            alt="Second slide"
          />
          <Carousel.Caption>
          <div className='caption-box' ><p className='Carousel_Caption'>Mugs en ceramic</p></div> 
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block    slider"
            src={ours}
            alt="Third slide"
          />
          <Carousel.Caption className='d-flex justify-content-'>
          <div className=' caption-box'style={{width:"500px"}} >
             <div className='Carousel_Caption'>
                   <div className='d-flex justify-content-start'> <p className='pp ' >Nouvelle </p> </div> 
                    <p className='pp' >Collection</p> 
              </div>
              <div className='d-flex justify-content-end'>
            <button type=" button" className="button  btn-danger">Voir</button>
          </div>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>  
  );
};
export default Slider;