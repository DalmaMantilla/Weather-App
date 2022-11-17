import React from 'react';
import styles from './SearchBar.module.css';
import { IoAdd } from "react-icons/io5";

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [search, setSearch] = React.useState("");

  const handleOnSearch = () => {
    // const input = document.getElementById("searchInput"); //busca y trae la ciudad con todos sus datos. Muestra el valor de "searchInput"
    // onSearch(input.value);
    // input.value = ""; //Deja vacia la barra del buscador, una vez q value capte la ciudad a buscar 
                      
    //Version mejorada de "input, sin getElemen..."
    onSearch(search);
    setSearch(""); //Deja vacia la barra del buscador, una vez q value capte la ciudad a buscar 
  };
  
    return (
    <div className={styles.searchBar}> 
      <input className={styles.input} 
        id="searchInput"
        placeholder="Agregar una ciudad..."
        autoComplete='off' //Elimina el estilo por defecto del navegador y MANTIENE el q hice yo
        value={search} //Value: Capta el valor q se le ingresa al seach para buscar esa ciudad
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => { //busca usando enter
          if(e.key === "Enter") handleOnSearch();
        }}
      />
      <button className={styles.button} 
        onClick={handleOnSearch}>
        <IoAdd/>
      </button> 
    </div>
  )
};





//-----------------------------------------------------------------------------------
// import React, { useState } from "react";

// export default function SearchBar({onSearch}) {
//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       onSearch("Cairns");
//     }}>
//       <input
//         type="text"
//         placeholder="Ciudad..."
//       />
//       <input type="submit" value="Agregar" />
//     </form>
//   );
// }
