import { useState } from "react";
// Se crea un generico con T como inicio pero pude ser cualquier letra
// el formulario es de tipo T
export const useForm = <T extends Object>(formulario: T )  => {

    //Uso de genericos
    /* const [formulario, setFormulario] = useState({
        email:'test@test.com',
        password:'123456'
    }); */


    const [state, setFormulario] = useState(formulario);

    // Validamos que el campo sea una llave de T 
    const onChange = (value:string,campo:keyof T ) =>{
        setFormulario({
            ...state,
            [campo]:value
        });
    }

    return {
        formulario:state,
        ...state,
        onChange,
    }
}
