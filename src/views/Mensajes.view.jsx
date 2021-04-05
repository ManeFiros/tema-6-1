import './Mensajes.view.css'
import MensajesHeader from '../components/MensajesHeader/MensajesHeader.component';
import MensajesTable from '../components/MensajesTable/MensajesTable.component';
import { useState } from 'react';
import Modal from '../components/Modal/Modal.component';

export default function Mensajes(props){
    const [mensajes, setMensajes] = useState([]);
    const [showModal,setShowModal] = useState(false);

    let nuevoMensaje = (e) => {
        e.preventDefault();
        setShow();
        let nuevo = {
            "asunto": e.target.getElementsByTagName("input")[0].value,
            "email": e.target.getElementsByTagName("input")[1].value,
            "mensaje": e.target.getElementsByTagName("textarea")[0].value,
            "leido":false
        };
        setMensajes(mensajes => [...mensajes, nuevo]);
        
        e.target.getElementsByTagName("input")[0].value="";
        e.target.getElementsByTagName("input")[1].value="";
        e.target.getElementsByTagName("textarea")[0].value="";
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

    let setShow = () => {
        setShowModal(!showModal);
    }

    return (
        <div class="Mensajes">
            <Modal show={showModal} handleClose ={setShow} handleSubmit={nuevoMensaje}/>
            <MensajesHeader show={showModal} setShow={setShow}
                        clickNuevo={nuevoMensaje} clickEliminar={eliminarMensajes}/>
            <MensajesTable mensajes={mensajes} clickEliminarUno={eliminarMensaje} 
                clickMarcarLeido={leerMensaje}/>
        </div>
    );
}