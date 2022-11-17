import React from 'react';
import styles from './Card.module.css';
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Card(props) {
const { max, min, name, img, onClose, primary } = props; //Todo recibe de Cards
// aca va tu codigo
  return (  
    <div className={`${styles.card} ${primary ? styles.primary : ""}`}>  {/* Si la Card es primary(la Card solita, con imagen grande) aplica estos estilos, si no, no apliques nada. Se puede hacer con backstip o array.  */}
      <span className={styles.name}> 
        {name} {/*hijos de span -> nombre de la ciudad*/}
        {!primary && ( /*Si No existe primary, el boton se renderiza  */
          <button className={styles.button} onClick={onClose}> 
              <IoCloseCircleOutline/> {/*boton X de eliminar con estilos, lo agrego dentro del span(nombre de la ciudad) */}
          </button>
        )} 
      </span> 
      <img 
        src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
        alt="Icono del clima"/>   
      <div className={styles.temps}>
        <Temp Label="Min" temp={min} />
        <Temp Label="Max" temp={max} />  
      </div>
    </div>
  );
}

//Mala practica ALERT
//Esto deberia estar en un archivo aparte
function Temp({ Label, temp }) {
  return (
    <div className={styles.temp}>
      <span>{Label}</span>
      <span>{temp}º</span>
    </div>
  );
}


//---------------------------------------------------------------------------------------------
// import React from 'react';
// import './Card.css';

// export default function Card ({min, max, name, img, onClose, id}) {
//     return (
//       <div className="card">
//         <div id="closeIcon" className="row">
//             <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
//         </div>
//         <div className="card-body">
//           <h5 className="card-title">{name}</h5>
//           <div className="row">
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <p>Min</p>
//               <p>{min}°</p>
//             </div>
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <p>Max</p>
//               <p>{max}°</p>
//             </div>
//             <div className="col-sm-4 col-md-4 col-lg-4">
//               <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };
