

//variables 

const marca = document.querySelector('#marca')
const year = document.querySelector('#year');
const min = document.querySelector('#minimo')
const max = document.querySelector("#maximo");
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//DIV donde se despliega el resultado de la consulta
const resultado = document.querySelector('#resultado');

const maximo = new Date().getFullYear();

const minimo = maximo - 10;

//Crear el objeto para guardar los datos del filtrado
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};





//eventos 
document.addEventListener('DOMContentLoaded', ()=>
{
    mostrarAutos(autos);

    llenarSelect();
});

//Eventos de los SELECT
marca.addEventListener('change', e =>
{
    datosBusqueda.marca = e.target.value;
   // console.log(e.target.value);
   filtrarAuto();
}
);

year.addEventListener('change', e =>
{
    datosBusqueda.year = e.target.value;

    filtrarAuto();
}
);
min .addEventListener('change', e =>
{
    datosBusqueda.minimo = parseInt(e.target.value);

    filtrarAuto();
    
}
);
max.addEventListener('change', e =>
{
    datosBusqueda.maximo = parseInt(e.target.value);
    filtrarAuto();
}
);
puertas.addEventListener('change', e =>
{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
}
);
transmision.addEventListener('change', e =>
{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
}
);
color.addEventListener('change', e =>
{
    datosBusqueda.color = e.target.value;
    
    filtrarAuto();
    
}
);



//funciones 

//funcion que muestra los autos en el DOM
function mostrarAutos(autos)
{
    limpiarHTML();
    autos.forEach( auto => {
      const {  marca, modelo, year, precio, puertas, color, transmision} = auto;
        //Crear un parrafó  para desplegar el resultado

        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
          ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmicion: ${transmision} - Precio: $ ${precio} - Color: ${color}  

        `;

        //Agregar
        resultado.appendChild(autoHTML);

    });
 console.log('Mostrar Autos....');
}

//funcion para llenar el select del año con opciones
function llenarSelect()
{
    for (let i= maximo; i >= minimo; i -- )
    {
        //Crear el option 
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i; 

        //Agregar al SELECT Año
        year.appendChild(opcion);
    }
    
}

 //funcion que filtre los autos 

 function filtrarAuto()
 {
     const resultado = autos.filter (filtrarMarca).filter(filtrarYear).filter(filtrarminimo).filter(filtrarmaximo).filter(filtrarpuertas)
     .filter(filtrartransmision).filter(filtrarcolor)

     console.log(resultado);
     mostrarAutos(resultado);
 }

 //funcion que filtre marcas 

 function filtrarMarca(auto)
 {
    const {marca} = datosBusqueda;
    if(marca)
    {
        return auto.marca === marca;
    }
    return auto;
 }

 function limpiarHTML()
 {
    while (resultado.firstChild)
    resultado.removeChild(resultado.firstChild);
 }

  //funcion que filtre por year 

  function filtrarYear(auto)
  {
     const {year} = datosBusqueda;
     //console.log(year);
     if(year)
     {
         return auto.year === parseInt(year);
     }
     return auto;
  }

  function filtrarminimo(auto)
  {
     const {minimo} = datosBusqueda;
     if(minimo)
     {
         return auto.precio >= parseInt(minimo);
     }
     return auto;

  }

  function filtrarmaximo(auto)
  {
    const {maximo} = datosBusqueda;
     if(maximo)
     {
         return auto.precio <= parseInt(maximo);
     }
     return auto; 
  }


function filtrarpuertas(auto)
  {
    const {puertas} = datosBusqueda;
     if(puertas)
     {
         return auto.puertas === parseInt(puertas);
     }
     return auto; 
  }

  function filtrartransmision(auto)
  {
     const {transmision} = datosBusqueda;
     if(transmision)
     {
         return auto.transmision === transmision;
     }
     return auto;
  }

  function filtrarcolor(auto)
  {
     const {color} = datosBusqueda;
     if(color)
     {
         return auto.color === color;
     }
     return auto;
  }
