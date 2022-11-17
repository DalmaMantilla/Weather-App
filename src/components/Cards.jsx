import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';


export default function Cards({ cities, onClose }) { //recibo parametro de App
  // aca va tu codigo
  // tip, podes usar un map
  return (
    <div className={styles.cards}>
      {cities.map((city) => ( //Por cada ciudad dentro del array renderizo 1 componente Card
        <Card //Visual encierra entre () para q entienda q todo lo q esta adentro va devolver
          key={city.id}
          name={city.name}
          min={city.min} 
          max={city.max}
          img={city.img}
          onClose={() => onClose(city.id)} //Ejecuta el onClose directamente, () es xq no le paso nada, x eso ejecuta directo
        /> 
      ))}
    </div>
  )
};






//------------------------------------------------------------------------------
// import React from 'react';
// import './Cards.css';

// import Card from './Card.jsx';

// export default function Cards({cities, onClose}) {
//   if(cities){
//     return (
//       <div className='cards'>
//         {cities.map(c => <Card
//             max={c.max}
//             min={c.min}
//             name={c.name}
//             img={c.img}
//             onClose={() => onClose(c.id)}
//             id={c.id}
//           /> )}
//       </div>
//     );
//   } else {
//     return(
//       <div>Sin ciudades</div>
//     )
//   }
// }
