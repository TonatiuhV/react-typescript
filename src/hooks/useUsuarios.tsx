import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    // Cuando no se necesita renderizar en jsx se usa useRef
    const pageRef = useRef(1);


    useEffect(() => {
        // lamado al API
        cargarUsuarios();
    }, []);

    const cargarUsuarios = async () =>{
       const resp = await reqResApi.get<ReqResListado>('/users', {
           params: {
               //  .current referencia al valor de page
               page:pageRef.current 
           }
       })
       if(resp.data.data.length > 0){
            setUsuarios(resp.data.data)
            pageRef.current++;
       }else{
           alert('Sin registros');
       }
       
    }
    return {
        usuarios,
        cargarUsuarios
    }

}   
