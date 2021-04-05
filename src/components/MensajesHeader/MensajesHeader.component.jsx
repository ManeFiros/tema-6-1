import './MensajesHeader.component.scss';
 
export default function MensajesHeader(props) {
  return (
    <div className="MensajesHeader">
      <button onClick={props.setShow} className="Nuevo"
       /*onClick={props.clickNuevo}*/>Nuevo</button>
      <button onClick={props.clickEliminar} className="Vaciar">Vaciar</button>  
    </div> 
  );
}