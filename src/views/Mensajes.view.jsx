import './Mensajes.view.css'
import MensajesHeader from '../components/MensajesHeader/MensajesHeader.component';
import MensajesTable from '../components/MensajesTable/MensajesTable.component';
import { useState } from 'react';

export default function Mensajes(props){
    const [mensajes, setMensajes] = useState([]);
    
    let nuevoMensaje = () => {
        let nuevo = {
            "asunto": "Prueba",
            "email": "email@email.com",
            "mensaje": `Este es un mensaje de pruebas... ${Math.random()}`,
            "leido":false
        };
        setMensajes(mensajes => [...mensajes, nuevo]);
    };

    let eliminarMensajes = () => {
        setMensajes([]);
    };
      
    let eliminarMensaje = (index) => {
        mensajes.splice(index, 1);
        setMensajes([...mensajes]);
    };
    
    let leerMensaje = (index) => {
        mensajes[index].leido = !mensajes[index].leido;
        setMensajes([...mensajes]);
    }

    return (
        <div class="Mensajes">
            <MensajesHeader clickNuevo={nuevoMensaje} clickEliminar={eliminarMensajes}/>
            <MensajesTable mensajes={mensajes} clickEliminarUno={eliminarMensaje} 
                clickMarcarLeido={leerMensaje}/>
        </div>
    );
}