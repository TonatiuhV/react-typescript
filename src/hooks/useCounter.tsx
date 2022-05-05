import { useState } from "react";
// podemos pasar argumentos con el tipado para iniciar y poner un valor por defecto
export const useCounter = (inicial: number = 10) => {

    const [valor, setValor] = useState<number>(inicial); // lo infiere con  los generios
    
    const acumular = (numero: number) =>{
        setValor(valor+numero)
    }

    return {
        acumular,
        valor
    }
}
