
import './App.css';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador';
import logoReact from './imagenes/logoreact.ico';
import {useState} from 'react';

function App() {

  const [numClicks, setNumClicks] =  useState(0);

  const onClick = () => {
    setNumClicks(numClicks+1);
  }

  const reiniciarContador = () => {
    setNumClicks(0) ;
  }


  return (
    <div className='App'>
      <div className='react-logo-contenedor'>
        <img  className='react-Logo'
              src={logoReact}
              alt='Logo de react' />

      </div>
      <div className='contenedor-pricipal'>
        <Contador numClicks={numClicks} />
        <Boton  texto='Click'
                esBotonDeClick={true}
                manejarClick={onClick} />
        <Boton  texto='Reiniciar'
                esBotonDeClick={false}
                manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
