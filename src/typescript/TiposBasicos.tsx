
export const TiposBasicos = () => {
  const nombre:string= 'Fernando';
  const edad:number= 123;
  //const estadoActivo = true; da como tipo true
  const estaActivo:boolean = true;

  //const poderes = ['Velocidad', 'Volar', 'Respirar en el agua'];
  // tipo any implicy type not recomendado
  //const poderes = []; 
  //poderes.nombre; permite eso pero no es recomentado

  const poderes:string[] = [];

  poderes.push('correcto');
  // poderes.push(12123); errores
  
  return (
    <>
        <h3>Tipos bàsicos</h3>
        {nombre}, {edad}, {estaActivo?'activo': 'inactivo'}
        <br/>
        {poderes.join(', ')}
    </>
  )
}
