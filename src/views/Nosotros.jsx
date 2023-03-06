import React from 'react'
import cultivo from '../assets/cultivo.jpg';
import '../styles/Nosotros.css';
const Nosotros = () => {
  return (
    <>
            <h1 className="title">Estos somos nosotros</h1>
        <section className="section full-lg-screen">
            <div className="about">
            <article className="text-lg-left">
                <img className="cultivo" src={cultivo} alt="cultivo"/>       
            </article>
            <article className="text-lg-right description">
                
                <p><strong>Cultivo </strong> es un restaurante Mexicano con un gran gusto gastronómico
                y de la naturaleza, haciéndolos ingredientes representativos, nos identificamos por la sutileza 
                característica en la creatividad, construcción y sabor de los platillos, haciendo resaltar a nuestro estilo
                los sabores de la gastronomía de nuestro país. Además que los platillos que se presentan son platillos de temporada, esto significa que algunos platillos que se presentan en el menú cambian cada 
                cierto tiempo para posteriormente cambiarlos y así poder probar variedad de platillos y la variedad de excelentes bebidas.</p>
            </article>
            </div>
        
        </section>
    </>
  )
}

export default Nosotros