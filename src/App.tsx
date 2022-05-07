import React from 'react';
import { Formularios } from './components/Formularios';
import { Usuarios } from './components/Usuarios';
/* import { Login } from './components/Login'; */
/* import { ContadorConHook } from './components/ContadorConHook'; */
/* import { Contador } from './components/Contador'; */
/* import { Funciones } from './typescript/Funciones'; */
/* import { ObjectosLierales } from './typescript/ObjectosLierales'; */
//import { TiposBasicos } from './typescript/TiposBasicos';

const App = () =>{
  return (
    <>
    <div className="mb-2">
      <h1>Introducion a TypeScript</h1>
      <hr/>
     {/*  <TiposBasicos/> */}
     {/* <ObjectosLierales/> */}
     {/* <Funciones/> */}
     {/*  <Contador/> */}
     {/* <ContadorConHook/> */}
    {/*  <Login/> */}
      {/* <Usuarios/> */}
      <Formularios/>
    </div>
    </>
  )
}
export default App;