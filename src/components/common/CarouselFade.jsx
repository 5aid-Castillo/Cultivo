import Carousel from 'react-bootstrap/Carousel';
import '../../styles/Carousel.css';
import barra from '../../assets/barra.jpg';
import platillos from '../../assets/platillos.jpg'
import vaso1 from '../../assets/vaso1.jpg'
import presentacion from '../../assets/platillo1.jpg';

function CarouselFade() {
  return (
    <Carousel fade className='carousel'>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 render-image"
          src={barra}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="welcome">Bienvenidos a Cultivo</h3>
          {/* <p>Los sabores que llenan nuestra historia</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 presentacion"
          src={presentacion}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Nuestros cocteles se convierten en el viaje mismo</h3> */}
          <p>
          Los sabores que llenan nuestra historia
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100 platillos"
          src={platillos}
          alt="Thrid slide"
        />


        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          <p>El barro presente en cada momento</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img
          className="d-block w-100"
          src={vaso1}
          alt="Four slide"
        />
        <Carousel.Caption>
          {/* <h3 className="welcome">B</h3> */}
          <p>Nuestros cócteles se convierten en el viaje mismo</p> 
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselFade;