
//Interfaces  cero k a la hora de traducir a javascript
//Type  cero k 
//class sirve para crear instancias 



//Objectivo de una interfas es definir el tipado de un objecto

interface Persona{
    nombre:string;
    edad:number;
    /* direccion:{
        pais:string;
        casaNo:number;
    } */
    direccion:Direccion
}
// Esto es un estandar  primero el objecto principal y despues sus objetos dependientes
interface Direccion{
    pais:string;
    casaNo:number
}
// NO sirve pa instanciar

export const ObjectosLierales = () => {

    const persona:Persona = {
        nombre: 'Alan Taontiuh',
        edad: 35,
        direccion:{
            pais:'Canadá',
            casaNo:615
        }
    }
    /* persona.nombreCompleto = "tal cosa"; error no tenia la prpiedad */


    return (
        <>
            <h3>Objectos Literales</h3>
            <code>
                <pre>
                {JSON.stringify(persona,null,2)}
                </pre>
            </code>
        </>
    );
}
