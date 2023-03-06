import { React } from "react";
import '../styles/Galeria.css';
import img1 from '../assets/rest13.jpg';
import img2 from '../assets/rest4.jpg';
import img3 from '../assets/rest5.jpg';
import img4 from '../assets/rest6.jpg';
import img5 from '../assets/rest14.jpg';
import img6 from '../assets/rest8.jpg';
import img7 from '../assets/rest11.jpg';
import img8 from '../assets/rest16.jpg';


const Galeria = () => {
  
  /* const [showMore, setShowMore] = useState(false); */
  return (
    <>
       <section>
        <div className="galery">
        <img src={img1} alt=""/>
        <img src={img2} alt=""/>
        <img src={img3} alt=""/>
        <img src={img4} alt=""/>
        <img src={img5} alt=""/>
        <img src={img6} alt=""/>
        <img src={img7} alt=""/>
        <img src={img8} alt=""/>
        
        </div>
        {/* <div className="galery-button">
       <button className="show-button" onClick={() => setShowMore(!showMore)}>
        
        {showMore ? `Ocultar` : `Mostrar`}
      </button>
      </div> */}
    {/*   <div className={showMore ? "show-element" : null}>
        {showMore && <h1>Este puede ser otro componente</h1>}
      </div> */}
       </section>
             
    </>
  )
}

export default Galeria