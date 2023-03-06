import React from 'react'
import CarouselFade from '../components/common/CarouselFade'
import Contactos from './Contactos'
import Galeria from './Galeria'
import Nosotros from './Nosotros'
import Reservar from './Reservar'

const Home = () => {
  return (
    <>
        <CarouselFade />
        <section id="nosotros">
          <Nosotros />
        </section>
        <section>
          <Galeria id="galeria"/>
        </section>
        <section id="contact">
          <Contactos/> 
        </section>
        <section id="reservar">
          <Reservar />
        </section>
        
    </>
  )
}

export default Home