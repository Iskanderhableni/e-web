import Carousel from 'react-bootstrap/Carousel';
import croissant from './images/croissant.jpg'
import coeur_rouge from './images/coeur_rouge.jpg'
import good_morning from './images/good_morning.jpg'
import soleil from './images/soleil.jpg'

import imageSlider from'./imageSlider.css';
function Slider() {
  return (
    <div className='slider'>
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block slider" // Add custom class for styling
            src={soleil}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className='Carousel_Caption'>Decouvrir nos produits</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block slider"
            src={coeur_rouge}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  slider"
            src={good_morning}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <button type="button" className="btn btn btn-danger">Click me</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Slider;