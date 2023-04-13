import React from 'react';

import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import fetchCity from './services/fetchCity.js';

import styles from "./App.module.css" //Traigo la imagen de fondo
const Swal = require('sweetalert2')


function App() {
  const [data, setData] = React.useState([]); //creo el estado

  function onSearch(ciudad) { //funcion q limita el ingreso de ciudades
    if(data.length > 3) {
      // alert("No puedes agregar mas ciudades.")
      Swal.fire({
        // icon: 'error',
        title: '¡No se puede agregar mas de 4 ciudades!',
        width: '15em',
    })
    } else { 
      fetchCity(ciudad, setData);
      }
    }

  function handleOnClose(id) { //funcion q elimina una Card(Ciudad) del array
    setData(prevData => {
      return  prevData.filter(city => city.id !== id)
    })
  }

  return (
    <div className={styles.app}> {/*imagen de fondo total*/}
      <div className={styles.bkg}/> {/*imagen q va en el medio (borrosa)*/}
      <div className={styles.container}>
        <div>
          <SearchBar onSearch={onSearch} /> {/*..o pasarle la ciudad directamente,  */}
          {/*<SearchBar onSearch={(ciudad) => onSearch(ciudad)} /> --> ..puedo hacer esto..*/} 
        </div>    
        <div className={styles.citiesContainer}>
          {/*Es la Card grande solita*/}
          {data.length > 0 ? ( /*Si array tiene mas de una ciudad, renderiza Card y sus comp. Esta condicion deja en esta Card la ultima ciudad buscada*/
            <>
              <Card 
                primary/*React asigna el valor true x defecto, no hace falta asignar*/
                max={data[data.length-1].max} //Acceden al ultimo elemento del array
                min={data[data.length-1].min}
                name={data[data.length-1].name}
                img={data[data.length-1].img}
                //onClose={() => alert(Cairns.name)} //No tiene, por eso lo comento
              />
              <Cards 
                cities={data} 
                onClose={(id) => handleOnClose(id)} 
              />   
            </>
          ) : ( //Si el array esta vacio(<0) agregar una ciudadd
            <span style={{ 
              textAlign: "center",
              width: "80vw", 
              marginTop:"1rem", 
              fontSize:"4vmin",  
              }}
            >
              Ciudades
            </span> 
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
