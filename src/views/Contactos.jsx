import React from 'react'
/* import '../styles/SocialMedia.scss'; */
import open from '../assets/abierto.png';
import marcador from '../assets/marcador.png';
import house from '../assets/timbre.jpg'

import '../styles/Contactos.css' 
const Contactos = () => {
  return (
<>
  <section className="contact" id="contact">
    <h1>Ubicación y Contactos</h1>
        <div className="rest-location">
            <img className="open"src={open} alt="open"/>
            
            <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                <th>Dia</th>
                <th>Horario</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>

                  Miercoles a Sabado
                </td>
                <td>
                  14:00 - 22:30                  
                </td>
                </tr>
                <tr>
                  <td>
                    Domingo
                  </td>
                  <td>
                    12:00 - 18:00
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            <a target="__blank" href="https://www.google.com/search?cs=1&sxsrf=AJOqlzXpeU8DkzZY721-6x9sYN_gkm_ZtA:1677711661078&q=cultivo%20heroica%20puebla%20de%20zaragoza%20direcci%C3%B3n&ludocid=2107129980955929045&sa=X&ved=2ahUKEwjl_9_86rv9AhUMJ0QIHQ2bCRkQvS56BAgKEAE&biw=1163&bih=554&dpr=1.65&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=2107129980955929045&lqi=Ci1jdWx0aXZvIGhlcm9pY2EgcHVlYmxhIGRlIHphcmFnb3phIGRpcmVjY2nDs24iAkgBSLCo4rzQuYCACFouEAAYABgBGAIYBCIiY3VsdGl2byBoZXJvaWNhIHB1ZWJsYSBkZSB6YXJhZ296YZIBCnJlc3RhdXJhbnSqATAQARofEAEiGweuhCLBQPfZDDZERym0fZYIPB7rRh-Tm9RHLyoLIgdjdWx0aXZvKA4&rlst=f"
             className="location"><img src={marcador} alt=""/>15 Sur 909, Puebla</a>
            <p><strong>Telefono:</strong>2221323016</p>
        </div>
        <article className="house-center">
        <div className="house">
            <img src={house} alt="house"/>
            <div className="image-text">Toca el Timbre</div>
            
        </div>
        </article>
        <div className="redes-container">
            <ul>
              <li><a target="__blank" href="https://www.facebook.com/profile.php?id=100087576886713&mibextid=LQQJ4d" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
		          <li><a target="__blank" href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fcultivorest%3Figshid%3DYmMyMTA2M2Y%253D%26fbclid%3DIwAR0Uqjh1cTRNOCksEOiqBPsE-1CDGm_-pEzd_t2KKIbny1YiagfIg5Eu9vs&h=AT27SwOo6iRIxWpUUBqTsfZNQ-wV6JWkLBGfmbWYUjyQZDSuSFIdDYMf1fgn1vKt4ojZ9tkSxycEjU26c1CGoS2nGgviRdvTUprgzAcwMbd2o6cjgfcBwlmDcyuL6tUKt9TvOQ" className="instagram"><i className="fab fa-instagram"></i></a></li>
		          <li><a target="__blank" href="https://wa.me/5212221323016" className="whatsapp"><i className="fab fa-whatsapp"></i></a></li>
	         
            </ul>
        </div> 
        
  </section>
</>
  )
}

export default Contactos