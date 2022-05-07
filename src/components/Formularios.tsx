import { useState } from "react"

export const Formularios = () => {
    const [formulario, setFormulario] = useState({
        email:'test@test.com',
        password:'123456'
    });

    const onChange = (value:string,campo:string ) =>{
        setFormulario({
            ...formulario,
            [campo]:value
        })
    }
  return (
      <>
        <h3>Formularios</h3>
        <form action="">
            <input type="text"
                className="form-control"
                value={formulario.email}
                onChange={({target}) => onChange(target.value, 'email2')}
                placeholder="Email" />
            <input type="text"
                className="form-control  mt-2 mb-2"
                onChange={({target}) => onChange(target.value, 'password')}
                value={formulario.password}
                placeholder="Password"
                />
        </form>
        <code>
            <pre>
                {JSON.stringify(formulario,null, 2)}
            </pre>
        </code>
      </>
  )
}
