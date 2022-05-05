import React from 'react';
import { Funciones } from './typescript/Funciones';
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
     <Funciones/>

    </div>
    </>
  )
}
export default App;