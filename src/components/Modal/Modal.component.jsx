import './Modal.component.scss';

const Modal = ({ handleClose, show, children,handleSubmit }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <form onSubmit={handleSubmit} className="formulario">
            <strong>Mi formulario</strong>
            <div className="firstLine">               
                <div className="botonera">
                    <input className="Elemento" placeholder="Introduce el asunto..." type="text"
                            name="nombre" 
                            /*onChange={handleChange} value={values.nombre}{errors.nombre ? (<div>{errors.nombre}</div>) : null}*/ />
                    <input className="Elemento" placeholder="Introduce el mail..." type="text"
                            name="mail" 
                            /*onChange={handleChange} value={values.nombre}{errors.nombre ? (<div>{errors.nombre}</div>) : null}*/ />
                    <button className="Elemento Nuevo" type="submit" /*disabled={isSubmitting}*/>Enviar</button>
                    <button className="Cerrar" type="button" onClick={handleClose}> Close </button>
                </div>
            </div>
            <textarea className="Elemento" placeholder="Introduce tu mensaje..."
                    name="descripcion" 
                    /*onChange={handleChange} value={values.descripcion}  {errors.descripcion ? (<div>{errors.descripcion}</div>) : null}*//>            
        </form>
      </section>
    </div>
  );
};

export default Modal;