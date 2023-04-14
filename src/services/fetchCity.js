//Pasos para usar de forma optima una apikey
  // 1-Creo una variable de entorno p/ guardar mi apikey y guardo en una cte.
    // 1.1-por definicion "process.env" + ".REACT_APP_" + "APIKEY"(el nombre q yo asigne)
  // 2-Creo un archivo ".env" a nivel local y ahi pego mi apikey.

  //ACLARACION: Por requisi de React, al crear una var de entorno del lado del cliente(navegador), 
  // se empieza con ".REACT_APP_" y luego va el nombre q desee. Es la unica forma q la info llegue al navegador del cliente
//const apiKey = process.env.REACT_APP_APIKEY; //Var de entorno SIEMPRE EN MAYUSCULA


//OJOOOO: Al "http" q puse antes le agregue una "s" p/ subirlo a la web en vercel.com, asi se actualizaran las ciudades

//Hago esto xq no me anda la var de entorno de arriba. Pero esta info es secreta y NUNCA debe ir en el codigo
const apiKey = "5f78c1c3105c4b7c874697259ced800a"; //Esto porque no me anda lo de arriba
const Swal = require('sweetalert2')


//Acá hago el llamado a la API para obtener los datos de la ciudad
export default function fetchCity(ciudad, setData) {
    fetch ( //Devuelve una PROMESA, NO UN RESULTADO. Esta implementado en el navegador, no debo instalar libreria adicional
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric` //pego esta ruta q me a responder con algo q aun no se
)
    .then(r => r.json()) //".then" le digo q hacer si la promesa se cumple. Recibe una rpta "r" y a esa rpta le aplica el metodo Jason "r.json()"
    .then((recurso) => { // luego pasa a "(recurso) q es todo el objeto q viene como rpta"
        if(recurso.main !== undefined){
        const ciudad = { //Crea un objeto ciudad y lo agrega al estado data
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
        };
        setData(oldCities => [...oldCities, ciudad]);//Aqui agrego una ciudad al estado
        } else {
            // alert("Ciudad no encontrada");
            Swal.fire({
                icon: 'error',
                title: '¡Ciudad no encontrada!',
                width: '15em',
            })
        }
    });  
}
