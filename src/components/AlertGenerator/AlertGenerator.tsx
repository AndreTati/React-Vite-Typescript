import { Alert } from "react-bootstrap";

//Se especifica cuales son los props y el tipo de datos que el componente recibe
type AlertGeneratorProps={
    message:string;
}
//El componente hijo tiene "argumentos" del tipo "AlertGeneratorProps"
const AlertGenerator = ({message}:AlertGeneratorProps)=>{
    
    return (
        <Alert variant="success" className="mt-2 w-25">
            <Alert.Heading>Mnsaje recibido</Alert.Heading>
            <p>{message}</p>
        </Alert>
    )
}
export default AlertGenerator;