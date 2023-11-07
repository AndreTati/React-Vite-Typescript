import { useState } from "react";
import AlertGenerator from "../AlertGenerator/AlertGenerator";

const AlertMessage = ()=>{
    //Guarda el valor del campo de texto
    const [inputValue, setImputValue]=useState('');
    //Guarda el mensaje
    const [message, setMessage]=useState('');
    //muestra el componente hijo según el estado
    const [showAlert, setShowAlert]=useState(false);
    //Si el campo no está vacío, se guarda el text que escribio el usuario en message y se renderiza el componente hijo
    const handleClick=()=>{
        if(inputValue.trim()!==''){
            setShowAlert(true);
            setMessage(inputValue);
        }else{
            setShowAlert(false);
        }
    }
    return (
        <div className="m-3">
            <h2>Ejemplo 2</h2>
            {/*componente padre */}
            <input type="text" value={inputValue} onChange={(e)=>setImputValue(e.target.value)}/>
            <button onClick={handleClick}>Enviar</button>
            {/*componente hijo */}
            {showAlert && <AlertGenerator message={message}/>}
        </div>
    )
}
export default AlertMessage;