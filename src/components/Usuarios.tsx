import { useUsuarios } from "../hooks/useUsuarios"
import { Usuario } from "../interfaces/reqRes"

export const Usuarios = () => {
      const {usuarios, cargarUsuarios} = useUsuarios()



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
