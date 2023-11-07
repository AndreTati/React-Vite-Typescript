import {ProgressBar} from "react-bootstrap";

//Se especifica cuales son los props y el tipo de dato que el componente hijo puede recibir
type DangerBarProps={
    value:number;
};

const DangerBar = ({value}:DangerBarProps)=>{

    //Lógica según el valor recibido del componente padre se mostrará un color diferente
    const getVarian=(value:number)=>{
        if(value<30) return 'success';
        else if(value<60) return 'warning';
        else return 'danger';
    }

    return (
        <ProgressBar animated now={value} variant={getVarian(value)}/>
    )
}
export default DangerBar;