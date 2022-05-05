import { useEffect, useReducer } from "react"
interface AuthState {
    validando:boolean;
    token:null|string;
    username:string;
    nombre:string;
}


const initialState:AuthState= {
    validando: true,
    token:null,
    username:'',
    nombre:''
}


//las accioes usuamos type por simplicidad

// tiene dos propiedad type payload(qe se quire mandar)
type AuthAction = {type:'logout'};

// una funcio que  por convencion tiene reducer
//debe regresar el tipo de dato que es initalState
// debe tener dos argumentos state y action
const authReducer = (state: AuthState, action:AuthAction):AuthState =>{
    switch (action.type) {
        case 'logout':
            return {
                validando:false,
                token:null,
                nombre: '',
                username:''
            }
    
        default:
            return state;
    }
}


export const Login = () => {
    // reducr es una funcion
    // initialState es e valor inical del objecto
    // state es el objecto 
    // dispatch es una funcion para disparar funciones
    const [state, dispatch] = useReducer(authReducer, initialState)
    useEffect(() => {
      setTimeout(()=>{
            dispatch({type:'logout'})
      }, 1500)
    }, []);
    if(state.validando){
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                Validando...
                </div>    
            </>
        )
    }
    return (
    <>
        <h3>Login</h3>

        <div className="alert alert-danger">
            No Authenticando
        </div>


        <div className="alert alert-success">
            Autenticado
        </div>
        <button className="btn btn-primary">Login</button>

        <button className="btn btn-danger">Logout</button>
    </>
  )
}
