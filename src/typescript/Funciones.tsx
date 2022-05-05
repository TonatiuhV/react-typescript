
export const Funciones = () => {
    // Esposible inferir  los tipos de datos de retorno por default voi
    const sumar = (a:number, b:number):number => { // parametros con tipado de datos
        return a+b;
    }

  return (
    <>
        <h3>Funciones</h3>
        <span>El resultado es: {sumar(3,3)}</span>
    </>
  )
}
