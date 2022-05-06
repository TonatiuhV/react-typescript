import React, { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {
    // use state de tipp  arrego de usuarios 
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
       console.log(pageRef.current)
       
    }

   // Obtener usuarios



   // El  renderItem de ciclo dbe tener el key que debe ser tipo string
    const renderItem = (usuario: Usuario) =>{
        return (
            <tr key={usuario.id.toString()}>
                <td><img src={usuario.avatar} style={{ width:30, borderRadius:100}} alt={usuario.first_name}/></td>
                <td>{usuario.first_name +' '+ usuario.last_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }
  
  
return (
    <>
        <h3>Usuarios</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    /* Forma larga 
                    usuarios.map((usuario) => renderItem(usuario)) */
                    usuarios.map(renderItem)
                    
                }
            </tbody>
        </table>
        <button className='btn btn-primary'
            onClick={cargarUsuarios}>
            Siguiente
        </button>
    </>
  )
}
