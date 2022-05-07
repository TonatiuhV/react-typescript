import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const Formularios = () => {
    const {formulario, email, password, onChange} = useForm({
        email:'test@test.com',
        password:'13123123'
    });
  return (
      <>
        <h3>Formularios</h3>
        <form action="">
            <input type="text"
                className="form-control"
                value={email}
                onChange={({target}) => onChange(target.value, 'email')}
                placeholder="Email" />
            <input type="text"
                className="form-control  mt-2 mb-2"
                onChange={({target}) => onChange(target.value, 'password')}
                value={password}
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
