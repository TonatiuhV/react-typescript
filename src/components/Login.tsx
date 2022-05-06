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

type LoginPayload = {
    username:string;
    nombre:string
}

// tiene dos propiedad type payload(qe se quire mandar)
type AuthAction = 
    {type:'logout'}
    |{type:'login', payload:LoginPayload}

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
        case 'login':

          // Se pude destructurar 
          // const {nombre, username} = action.payload
            return {
                validando:false,
                token:'abc',
                nombre:action.payload.nombre,
                username: action.payload.username
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
          logout();
         }, 1500)
    }, []);

    const login = () =>{
        dispatch({
            type:'login',
            payload:{
                username: 'alan64',
                nombre:'Alan Tonatiuh'
            }
        })
    }

    const logout = () =>{
        dispatch({type:'logout'})
    }



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
        {
           (state.token)?

            (
            <div className="alert alert-success">
            Autenticado como : {state.nombre}
            </div>
            )
            :       
            <div className="alert alert-danger">
                No Authenticando
            </div>
        }
        {
            (state.token)?
            (
                <button 
                className="btn btn-danger"
                /* Espersion corta de {() => logout()} */
                onClick={logout}>
                    Logout
                </button>
            )
            :(
                <button 
                className="btn btn-primary"
                onClick={()=> login()}>
                    Login
                </button>
            )
        
        }

        

    </>
  )
}
